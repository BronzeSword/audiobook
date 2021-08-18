<template>
    <div class="detail-wrape">
        <div class="detail-left">
            <h1 class="title">
                {{ detailData.title }}
            </h1>
            <div class="info">
                <span>作者：{{ detailData.author }}</span>
                <span>热度：{{ detailData.hit }}</span>
                <span>更新时间：{{ detailData.createdAt }}</span>
                <span>分类：{{ detailData.categoryName }}</span>
            </div>
            <div
                v-if="detailData.videoUrl"
                class="content">
                <iframe width="720"
                        height="405"
                        frameborder="0"
                        :src="detailData.videoUrl"
                        referrerpolicy="unsafe-url"
                        class="video"
                        allowfullscreen />
            </div>
            <div
                class="content"
                v-html="detailData.body" />
        </div>
        <div class="detail-right">
            <div class="advertising-space">
                广告位
            </div>
            <div class="advertising-space">
                广告位
            </div>
        </div>
    </div>
</template>
<script>
import { main } from '@/api';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            detailData: '',
            articleId: '',
        };
    },
    computed: mapState({
        parmas: (state) => state.searchArticlePamars,
    }),
    created() {
        this.init();
    },
    methods: {
        init() {
            if (!this.$route.query.articleId) {
                return false;
            }
            main.getArticleDetail(this.$route.query.articleId).then((res) => {
                if (res.code === 0) {
                    this.detailData = res.data;
                    this.parmas.categoryId = res.data.categoryId;
                    this.$store.commit('SET_SEARCH_ARTICLE_PARAMS', this.parmas);
                }
            });
            return true;
        },
    },
};
</script>

<style lang="scss" scoped>
.detail-wrape {
    width: 1080px;
    margin: 0 auto;
    .detail-left {
        width: 800px;
        float: left;
        .title {
            font-family: PingFangSC-Medium, sans-serif;
            font-size: 20px;
            line-height: 32px;
            color: #333;
            text-align: center;
        }
        .info {
            color: #666;
            font-size: 14px;
            margin: 20px 20px;
            text-align: center;
            span {
                margin-left: 20px;
            }
        }
        .content {
            margin-bottom: 20px;
            .video {
                text-align: center;
            }
            iframe {
                display: block;
                margin: auto;
            }
        }
    }
    .detail-right {
        width: 240px;
        margin-left: 40px;
        float: left;
        .advertising-space {
            border: 1px solid #a3a3ac;
            width: 100%;
            height: 300px;
            text-align: center;
            line-height: 300px;
            margin-bottom: 30px;
        }
    }
    &::after {
        content: '';
        display: block;
        clear: both;
    }
}
</style>

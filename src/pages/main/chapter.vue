<template>
    <div class="detail-wrape">
        <div class="detail-left">
            <el-button class="btn-detail"
                       @click="back">
                返回
            </el-button>
            <h1 class="title">
                {{ detailData.title }}
            </h1>
            <div class="info">
                <a :href="'/author?authorId='+detailData.authorId">
                    <span>作者：{{ detailData.author }}</span>
                </a>
                <span>热度：{{ detailData.hit }}</span>
                <span>更新时间：{{ detailData.createdAt }}</span>
                <span>分类：{{ detailData.categoryName }}</span>
            </div>
            <div class="chapter-name">
                简介
            </div>
            <div class="content"
                 v-html="detailData.body" />
            <div v-for="(item, index) in chapterList"
                 :key="index">
                <div v-if="item.id!==undefined"
                     class="chapter-name">
                    <a :href="'/detail?articleId='+item.id">
                        {{ item.title }}
                    </a>
                </div>
                <div v-else
                     class="chapter-name">
                    {{ item.title }}
                </div>
                <div v-for="(article, articleI) in item.articles"
                     :key="articleI">
                    <div class="chapter-title">
                        <a :href="'/detail?articleId='+article.id">
                            {{ article.title }}
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail-right mobileNone">
        <!--<div class="advertising-space">-->
            <!--广告位-->
        <!--</div>-->
        <!--<div class="advertising-space">-->
            <!--广告位-->
        <!--</div>-->
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
            chapterList: [],

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
            main.getBookDetail(this.$route.query.articleId).then((res) => {
                if (res.code === 0) {
                    this.detailData = res.data;
                    this.chapterList = res.data.chapters || [];
                    this.parmas.categoryId = res.data.categoryId;
                    this.$store.commit('SET_SEARCH_ARTICLE_PARAMS', this.parmas);
                    document.title = `${res.data.title}-${res.data.author}-兔子FM`;
                    const keyword = `${res.data.title},${res.data.author},兔子FM`;
                    const desc = this.stripHtml(res.data.body).slice(0, 120);
                    const head = document.getElementsByTagName('head');
                    const meta = document.createElement('meta');
                    document.querySelector('meta[name="keywords"]').setAttribute('content', keyword);
                    document.querySelector('meta[name="description"]').setAttribute('content', desc);
                    head[0].appendChild(meta);
                }
            });
            return true;
        },
        stripHtml(html) {
            const tmp = document.createElement('DIV');
            tmp.innerHTML = html;
            return tmp.textContent || tmp.innerText || '';
        },
        back() {
            this.$router.push({
                path: '/',
            });
        },
        // 去详情页面
        goToDetail(id) {
            if (!id) {
                return;
            }
            this.$router.push({
                path: '/detail',
                query: {
                    articleId: id,
                },
            });
        },
        // 去章节页面
        goToChapter(id) {
            this.$router.push({
                path: '/chapter',
                query: {
                    articleId: id,
                },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.detail-wrape {
    margin-top: 30px;
    margin-left: 5%;
    margin-right: 5%;
    .detail-left {
        float: left;
        .title {
            font-family: PingFangSC-Medium, sans-serif;
            font-size: 20px;
            line-height: 32px;
            color: #333;
            text-align: center;
        }
        a {
            text-decoration: none;
        }
        .chapter-name {
            font-family: PingFangSC-Medium, sans-serif;
            font-size: 20px;
            line-height: 40px;
            color: #f86442;
            text-align: left;
        }
        .chapter-title {
            font-size: 16px;
            cursor: pointer;
            margin: 10px 10px 10px 0;
            color: #333;
            text-align: left;
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

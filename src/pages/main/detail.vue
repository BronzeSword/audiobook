<template>
    <div class="detail-wrape">
        <div class="detail-left">
            <a v-if="prevId"
               :href="'/detail?articleId='+prevId">
                <el-button class="btn-detail">
                    上一页
                </el-button>
            </a>
            <a v-if="bookId"
               :href="'/chapter?articleId='+bookId">
                <el-button class="btn-detail">
                    回到目录
                </el-button>
            </a>
            <a v-if="nextId"
               :href="'/detail?articleId='+nextId">
                <el-button class="btn-detail-last">
                    下一页
                </el-button>
            </a>
            <h1 v-if="detailData.chapter"
                class="title">
                {{ detailData.chapter }}
            </h1>

            <h1 v-if="detailData.chapter!==detailData.title"
                class="subtitle">
                {{ detailData.title }}
            </h1>
            <div class="info">
                <!--<span>作者：{{ detailData.author }}</span>-->
                <!--<span>热度：{{ detailData.hit }}</span>-->
                <!--<span>更新时间：{{ detailData.createdAt }}</span>-->
                <!--<span>分类：{{ detailData.categoryName }}</span>-->
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
                class="contentDetail"
                v-html="detailData.body" />
            <a v-if="prevId"
               :href="'/detail?articleId='+prevId">
                <el-button class="btn-detail">
                    上一页
                </el-button>
            </a>
            <a v-if="bookId"
               :href="'/chapter?articleId='+bookId">
                <el-button class="btn-detail">
                    回到目录
                </el-button>
            </a>
            <a v-if="nextId"
               :href="'/detail?articleId='+nextId">
                <el-button class="btn-detail-last">
                    下一页
                </el-button>
            </a>
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
            prevId: '',
            nextId: '',
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
                    this.nextId = res.data.next;
                    this.prevId = res.data.prev;
                    this.bookId = res.data.bookId;

                    this.parmas.categoryId = res.data.categoryId;
                    this.$store.commit('SET_SEARCH_ARTICLE_PARAMS', this.parmas);

                    let title;
                    let keyword;
                    if (res.data.title !== res.data.chapter) {
                        title = `${res.data.title}-${res.data.chapter}-兔子FM`;
                        keyword = `${res.data.title},${res.data.chapter},兔子FM`;
                    } else {
                        title = `${res.data.title}-兔子FM`;
                        keyword = `${res.data.title},兔子FM`;
                    }
                    document.title = title;
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
            this.init();
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
    margin-top: 10px;
    margin-left: 5%;
    margin-right: 5%;
    padding-bottom: 30px;
    .detail-left {
        float: left;
        .title {
            margin-top: 30px;
            font-family: PingFangSC-Medium, sans-serif;
            font-size: 20px;
            padding-bottom: 10px;
            line-height: 32px;
            color: #333;
            text-align: center;
        }
        .subtitle {
            margin-top: 10px;
            font-family: PingFangSC-Medium, sans-serif;
            font-size: 20px;
            padding-bottom: 10px;
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
        .btn-detail-last {
            float: right;
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
<style lang="scss">
.detail-wrape {
    .contentDetail {
        div {
            margin-top: 15px;
            margin-bottom: 15px;
        }
    }
}
</style>

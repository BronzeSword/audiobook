<template>
    <div class="detail-wrape">
        <div class="detail-left">
            <el-button class="btn-detail"
                       @click="back">
                返回
            </el-button>
            <h1 class="title">
                {{ detailData.name }}
            </h1>
            <div style="width: 150px; display: inline-block;">
                <img :src="detailData.thumbnail">
            </div>
            <div style="display: inline-block; vertical-align: top;">
                <h4 class="column">
                    性别：{{ detailData.sex }}
                </h4>
                <h4 class="column">
                    生卒：{{ detailData.begin }} - {{ detailData.end }}
                </h4>
                <h4 class="column">
                    地区/国家： {{ detailData.region }}
                </h4>
            </div>
            <h4 class="column">
                简介：
            </h4>
            <div
                class="content column"
                v-html="detailData.description" />
            <h4>
                相关书籍：
            </h4>
            <ul class="list">
                <li
                    v-for="(item, index) in articleList"
                    :key="index"
                    class="item">
                    <a :href="'/chapter?articleId='+item.articleId">
                        <div class="album">
                            <img :src="item.thumbnail">
                        </div>
                        <div class="info">
                            <h4 class="title">
                                {{ item.title }}
                            </h4>
                            <p>作者：{{ item.author }}</p>
                            <p>分类：{{ item.categoryName }}</p>
                            <!-- <p>状态：{{ item.statusStr }}</p> -->
                            <p>时间：{{ item.createdAt }}</p>
                            <p>热度：{{ item.hit }}</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
        <div class="detail-right">
            <!--<div class="advertising-space">-->
            <!--广告位-->
            <!--</div>-->
            <!--<div class="advertising-space">--><!--广告位--><!--</div>-->
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
            articleList: [],
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
            if (!this.$route.query.authorId) {
                return false;
            }

            main.getAuthorDetail(this.$route.query.authorId).then((res) => {
                if (res.code === 0) {
                    this.detailData = res.data;
                    this.articleList = res.data.books;
                    this.parmas.categoryId = res.data.categoryId;
                    this.$store.commit('SET_SEARCH_ARTICLE_PARAMS', this.parmas);
                }
            });
            return true;
        },
        back() {
            this.$router.go(-1);
        },

    },
};
</script>

<style lang="scss" scoped>
.detail-wrape {
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 10px;
    padding-bottom: 30px;
    .detail-left {
        float: left;
        .column {
            margin: 10px;
        }
        .list {
            .item {
                display: inline-block;
                vertical-align: top;
                width: 200px;
                margin-bottom: 20px;
                cursor: pointer;
                .album {
                    float: left;
                    width: 190px;
                    height: 126px;
                    position: relative;
                    background: #fff;
                    img {
                        width: 190px;
                        height: 126px;
                    }
                }
                .info {
                    float: left;
                    height: 126px;
                    overflow: hidden;
                    width: 190px;
                    margin-left: 10px;
                    font-size: 14px;
                    display: block;
                    max-width: 100%;
                    text-align: justify;
                    color: #40404c;
                    .title {
                        font-weight: 700;
                        margin-bottom: 8px;
                        text-overflow: ellipsis;
                        text-overflow: -o-ellipsis-lastline;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    p {
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                        max-width: 100%;
                        font-size: 14px;
                        line-height: 1.5em;
                        color: #a3a3ac;
                    }
                }
                &:nth-child(odd) {
                    margin-right: 10px;
                }
                &:nth-child(even) {
                    margin-left: 10px;
                }
                &:hover .info {
                    color: $--hover-color;
                }
            }
        }

        .title {
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

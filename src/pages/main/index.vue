<template>
    <div class="home-page-content">
        <div class="layout-mian_explore">
            <div class="sort">
                <div
                    v-for="(item, index) in sortData"
                    :key="index"
                    :class="[parmas.Sort === item.sort ? 'active' : '']"
                    class="btn"
                    @click="sort(index)">
                    {{ item.name }}
                </div>
            </div>
            <template v-if="articleList.length > 0">
                <ul class="list">
                    <li
                        v-for="(item, index) in articleList"
                        :key="index"
                        class="item"
                        @click="goToDetail(item.articleId)">
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
                    </li>
                </ul>
                <div class="page-pagination-wrape">
                    <el-pagination
                        :current-page.sync="currentPage"
                        :page-size="10"
                        :total="totalNumber"
                        background
                        layout="prev, pager, next, jumper"
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange" />
                </div>
            </template>
            <template v-else>
                <div class="empty-data">
                    <img src="@/assets/images/empty_icon.png">
                    <p class="tips">
                        很抱歉！没有找到与“<span class="red">{{ parmas.keyword }}</span>”相关的文章，试着重新搜索一下吧！
                    </p>
                </div>
            </template>
        </div>
        <!-- 热榜 -->
        <div class="layout-side_explore">
            <ol
                v-for="(item, pindex) in rankList"
                :key="pindex"
                class="rank-list">
                <div class="rank-title">
                    {{ item.rankTitle }}
                </div>
                <li
                    v-for="(childrenItem, cindex) in item.list"
                    :key="cindex"
                    class="item"
                    @click="goToDetail(childrenItem.articleId)">
                    <div class="text">
                        <span class="index-order">{{ cindex + 1 }}</span>
                        {{ childrenItem.title }} | {{ childrenItem.author }}
                    </div>
                </li>
            </ol>
            <div class="advertising-space">
                广告位
            </div>
        </div>
    </div>
</template>

<script>
// mapGettersmapState
import { mapActions, mapState } from 'vuex';
import { main } from '@/api';


export default {
    name: 'Index',
    data() {
        return {
            currentPage: 1,
            sortData: [
                { name: '按时间排', sort: 'date' },
                { name: '按热度排', sort: 'hit' },
            ],
            rankList: [],
            keywords: '',
            categoryId: '',
        };
    },
    computed: {
        ...mapState({
            articleList: (state) => state.articleList,
            totalNumber: (state) => state.articleTotalNumber,
            parmas: (state) => state.searchArticlePamars,
        }),
        clickLinkBtn: {
            get() {
                return this.$store.state.clickLinkBtn;
            },
            set(val) {
                this.$store.commit('SET_CLICK_LINK_BTN_VALUE', val);
            },
        },
    },
    watch: {
        clickLinkBtn(val) {
            if (val === 1) {
                this.clickLinkBtn = 0;
                this.getRankList();
            }
        },
    },
    created() {
        this.init();
        this.getRankList();
    },
    methods: {
        ...mapActions(['getArticleList']),
        init() {
            this.getArticleList(this.parmas);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.parmas.pageNumber = val;
            this.$store.commit('SET_SEARCH_ARTICLE_PARAMS', this.parmas);
            this.getArticleList(this.parmas);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.parmas.pageNumber = val;
            this.$store.commit('SET_SEARCH_ARTICLE_PARAMS', this.parmas);
            this.getArticleList(this.parmas);
        },
        sort(index) {
            this.parmas.pageNumber = 1;
            this.currentPage = this.parmas.pageNumber;
            this.parmas.Sort = this.sortData[index].sort;
            this.$store.commit('SET_SEARCH_ARTICLE_PARAMS', this.parmas);
            this.getArticleList(this.parmas);
        },
        // 获取热榜文章
        getRankList() {
            const parmas = {
                keyword: this.parmas.keyword,
                categoryId: this.parmas.categoryId,
            };
            main.getArticleRankList(parmas).then((res) => {
                if (res.code === 0) {
                    this.rankList = res.data || [];
                }
            });
        },

        // 去详情页面
        goToDetail(id) {
            this.$router.push({
                path: '/detail',
                query: {
                    articleId: id,
                },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.home-page-content {
    width: 1080px;
    margin: 20px auto 0;
    overflow: hidden;
    .layout-mian_explore {
        width: 800px;
        float: left;
        .sort {
            text-align: right;
            margin-bottom: 20px;
            .btn {
                display: inline-block;
                padding: 7px 12px;
                border-radius: 4px;
                background-color: #fff;
                border: 1px solid #e8e8e8;
                border-bottom-color: rgb(232, 232, 232);
                margin-right: 15px;
                font-size: 14px;
                color: #606266;
                cursor: pointer;
                &:nth-child(2) {
                    margin-right: 0;
                }
                &.active,
                &:hover {
                    border: 1px solid $--hover-color;
                    color: $--hover-color;
                }
            }
        }
        .list {
            .item {
                display: inline-block;
                vertical-align: top;
                width: 390px;
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
        .page-pagination-wrape {
            text-align: center;
            margin: 20px;
            /deep/ .el-pagination.is-background .btn-next,
            /deep/ .el-pagination.is-background .btn-prev,
            /deep/ .el-pagination.is-background .el-pager li {
                background: #fff;
                border: 1px solid #e8e8e8;
                border-radius: 3px;
                cursor: pointer;
            }
            /deep/ .el-pagination.is-background .el-pager li:not(.disabled).active {
                background-color: $--hover-color;
                color: #fff;
                border: 1px solid $--hover-color;
            }
            /deep/ .el-pagination.is-background .el-pager li:hover {
                color: $--hover-color;
            }
        }
    }
    .layout-side_explore {
        width: 240px;
        margin-left: 40px;
        float: left;
        .rank-list {
            margin-bottom: 20px;
            background: #fff;
            .rank-title {
                font-family: PingFangSC-Medium;
                font-size: 20px;
                line-height: 28px;
                color: #333;
                margin-bottom: 10px;
            }
            .item {
                line-height: 0;
                padding: 10px 0;
                text-align: left;
                &:hover {
                    .text {
                        color: $--hover-color;
                        .index-order {
                            color: $--hover-color;
                        }
                    }
                }
            }
            .text {
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                font-size: 14px;
                line-height: 20px;
                max-width: 100%;
                color: #40404c;
                font-weight: 700;
                cursor: pointer;
                .index-order {
                    display: inline-block;
                    width: 15px;
                    height: 20px;
                    margin-right: 10px;
                    vertical-align: middle;
                    line-height: 20px;
                    text-align: left;
                    color: #a3a3ac;
                }
            }
        }
        .advertising-space {
            border: 1px solid #a3a3ac;
            width: 100%;
            height: 300px;
            text-align: center;
            line-height: 300px;
        }
    }

    .empty-data {
        width: 800px;
        text-align: center;
        height: 300px;
        .tips {
            color: #333;
            font-size: 14px;
            .red {
                color: #d47e74;
                font-weight: bold;
            }
        }
    }
}
</style>

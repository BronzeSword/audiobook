<template>
    <header class="holder-empty">
        <div class="header-wrape">
            <div class="header-content">
                <a class="logo"
                   @click="goToPage()" />
                <div class="search">
                    <el-input v-model="parmas.keyword"
                              placeholder="请输入内容"
                              class="input-with-select">
                        <el-button slot="append"
                                   icon="el-icon-search"
                                   @click="search" />
                    </el-input>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { common } from '../../mixin/index';

export default {
    name: 'Header',
    mixins: [common],
    data() {
        return {
        };
    },
    computed: {
        ...mapState({
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
    methods: {
        ...mapActions(['getArticleList']),
        search() {
            this.clickLinkBtn = 1;
            this.distinguishPages(this.parmas, 'header');
        },
        goToPage() {
            // 去首页
            const parmas = {
                keyword: '',
                categoryId: 0,
                pageNumber: 1,
                Sort: 'date',
            };
            this.$store.commit('SET_SEARCH_ARTICLE_PARAMS', parmas);
            this.$router.push({
                path: '/index',
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.holder-empty {
    .header-wrape {
        background: #fff;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 10;
        .header-content {
            width: 1080px;
            height: 60px;
            margin: 0 auto;
            .logo {
                position: relative;
                width: 120px;
                white-space: nowrap;
                overflow: hidden;
                font-size: 0;
                text-indent: -99999;
                height: 100%;
                display: inline-block;
                color: #f86422;
                &::before {
                    content: '';
                    display: block;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    background: url(http://cooqr.com/logo.png) 0 no-repeat;
                    background-size: auto;
                    background-size: 100%;
                }
            }
            .search {
                float: right;
                width: 400px;
                margin-top: 10px;
                /deep/ .el-input__inner {
                    border: 1px solid #f86442;
                    border-radius: 54px;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                    border-right: none;
                }
                /deep/ .el-input-group__append,
                /deep/ .el-input-group__prepend {
                    border: 1px solid #f86442;
                    border-radius: 0 54px 54px 0;
                    background-color: #f86442;
                    background-image: linear-gradient(to right, #ff9973, #ff7251);
                    background-image: -o-linear-gradient(left, #ff9973 1%, #ff7251 99%);
                    background-image: linear-gradient(90deg, #ff9973 1%, #ff7251 99%);
                    color: #fff;
                    border-left: none;
                }
            }
            &::before {
                content: '';
                position: absolute;
                display: block;
                top: 0;
                left: 0;
                z-index: -1;
                width: 100%;
                background-color: #fff;
                height: 60px;
                -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
                box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
            }
        }
    }
    &::after {
        content: '';
        display: block;
        position: relative;
        padding-bottom: 60px;
    }
}
</style>

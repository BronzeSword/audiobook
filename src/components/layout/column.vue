<template>
    <div class="column-wrape">
        <div class="tag-list">
            <div
                v-for="(item, index) in columnList"
                :key="index"
                class="tag"
                :class="[(parmas.categoryId === item.categoryId) ? 'active' : '']"
                @click="checked(index)">
                {{ item.name }}
            </div>
        </div>
    </div>
</template>
<script>
// import { mapState } from 'vuex';
import { main } from '@/api';
import { common } from '../../mixin/index';

export default {
    name: 'Column',
    mixins: [common],
    data() {
        return {
            columnList: [],
        };
    },
    computed: {
        // ...mapState({
        //     backCategoryId: (state) => state.backCategoryId,
        // }),
        clickLinkBtn: {
            get() {
                return this.$store.state.clickLinkBtn;
            },
            set(val) {
                this.$store.commit('SET_CLICK_LINK_BTN_VALUE', val);
            },
        },
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            main.getCategoryList().then((res) => {
                const dt = res.data;
                if (res.code === 0) {
                    this.columnList = dt?.list;
                }
            });
        },
        checked(i) {
            this.clickLinkBtn = 1;
            this.parmas.pageNumber = 1;
            const parmas = {
                keyword: this.parmas.keyword,
                categoryId: this.columnList[i].categoryId,
                pageNumber: 1,
                Sort: 'date',
            };
            this.$store.commit('SET_SEARCH_ARTICLE_PARAMS', parmas);
            this.distinguishPages(this.parmas, 'category');
        },
    },
};
</script>

<style lang='scss' scoped>
.column-wrape {
    margin: 20px 5%;
    position: relative;
    .tag-list {
        padding: 20px 20px 4px 20px;
        width: 100%;
        background: #f9f9fb;
        border-radius: 6px;
        margin-bottom: 24px;
        font-size: 14px;
        .tag {
            display: inline-block;
            font-size: 14px;
            margin-right: 24px;
            margin-bottom: 16px;
            color: #72727b;
            line-height: 20px;
            cursor: pointer;
            font-weight: 500;
            &.active {
                background: #fff4e8;
                color: #f86442;
                border: 1px solid rgba(191, 118, 42, 0.31);
                border-radius: 5px;
                font-size: 14px;
                font-family: PingFangSC, PingFangSC-Medium;
                font-weight: 500;
                padding: 3px 6px;
            }
            &:hover {
                color: $--hover-color;
                .active {
                    color: $--hover-color;
                }
            }
        }
    }
}
</style>

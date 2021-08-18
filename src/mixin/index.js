/* eslint-disable */
// import { mapGetters } from 'vuex';
// import { main } from '@/api';
import { mapActions, mapState } from 'vuex';

export const common = {
    data() {
        return {};
    },
    computed: mapState({
        parmas: (state) => state.searchArticlePamars,
        backCategoryId: (state) => state.backCategoryId,
    }),
    methods: {
        ...mapActions(['getArticleList']),
        // 详情页面跳转到首页搜索
        distinguishPages(dt, type) {  
            // console.log('111SET_SEARCH_ARTICLE_PARAMS', dt);
            if (this.$route.path.indexOf('/') === -1
                || this.$route.path.indexOf('/index') === -1) {
                const parmas = {
                    keyword: type==='header' ? dt.keyword : '',
                    categoryId: '',
                    pageNumber: 1,
                    Sort: '',
                };
                this.$store.commit('SET_SEARCH_ARTICLE_PARAMS', parmas);
                this.$router.push({
                    path: '/index',
                });
            } else {
                this.$store.commit('SET_SEARCH_ARTICLE_PARAMS', dt);
                this.getArticleList(dt);
            }
            
        }
    },
};
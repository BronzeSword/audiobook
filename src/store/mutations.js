import { SET_ARTICLELIST, SET_SEARCH_ARTICLE_PARAMS } from './mutation-type';

export default {
    [SET_ARTICLELIST](state, data) {
        const states = state;
        states.articleList = data?.list;
        states.articleTotalNumber = data.total;
        states.backCategoryId = data.categoryId;
    },
    [SET_SEARCH_ARTICLE_PARAMS](state, data) {
        const states = state;
        const dt = data;
        console.log('store', dt);
        console.log('backCategoryId', states.backCategoryId);
        // dt.categoryId = (states.backCategoryId)
        //     ? states.backCategoryId : dt.categoryId;
        states.searchArticlePamars = dt;
    },
};

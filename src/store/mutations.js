import {
    SET_ARTICLELIST,
    SET_SEARCH_ARTICLE_PARAMS,
    SET_CLICK_LINK_BTN_VALUE,
} from './mutation-type';

export default {
    [SET_ARTICLELIST](state, data) {
        const states = state;
        states.articleList = data?.list;
        states.articleTotalNumber = data.total;
        states.backCategoryId = +data.categoryId;
    },
    [SET_SEARCH_ARTICLE_PARAMS](state, data) {
        const states = state;
        const dt = data;
        // dt.categoryId = (states.backCategoryId)
        //     ? states.backCategoryId : dt.categoryId;
        states.searchArticlePamars = dt;
    },
    [SET_CLICK_LINK_BTN_VALUE](state, data) {
        const states = state;
        const dt = data;
        states.clickLinkBtn = dt;
    },
};

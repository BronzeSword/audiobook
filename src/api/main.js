// eslint-disable-next-line import/named
import Fetch from '@/utils/fetch';
import Configs from '@/config/index';

export default {
    // 首页文章列表
    getMainList(params) {
        return Fetch({
            url: '/api/audio/book',
            method: 'get',
            params: {
                ...params,
                pageSize: Configs.pageSize,
            },
        });
    },

    // 文章分类
    getCategoryList() {
        return Fetch({
            url: '/api/audio/category',
            method: 'get',
        });
    },

    // 书排行  /api/audio/article/633
    getBookRankList(params) {
        return Fetch({
            url: '/api/audio/book_rank',
            method: 'get',
            params,
        });
    },

    // 书详情
    getBookDetail(params) {
        return Fetch({
            url: `/api/audio/book/${params}`,
            method: 'get',
        });
    },
    // 文章详情
    getArticleDetail(params) {
        return Fetch({
            url: `/api/audio/article/${params}`,
            method: 'get',
        });
    },
    // 作者详情
    getAuthorDetail(params) {
        return Fetch({
            url: `/api/audio/author/${params}`,
            method: 'get',
        });
    },
};

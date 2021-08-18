// eslint-disable-next-line import/named
import Fetch from '@/utils/fetch';
import Configs from '@/config/index';

export default {
    // 首页文章列表
    getMainList(params) {
        return Fetch({
            url: '/api/audio/article',
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

    // 文章排行  /api/audio/article/633
    getArticleRankList(params) {
        return Fetch({
            url: '/api/audio/article_rank',
            method: 'get',
            params,
        });
    },

    // 文章文章详情
    getArticleDetail(params) {
        return Fetch({
            url: `/api/audio/article/${params}`,
            method: 'get',
        });
    },
};

// eslint-disable-next-line import/named
import Fetch from '@/utils/fetch';
import Configs from '@/config/index';

export default {
    getMainList11(params) {
        return Fetch({
            url: '/api/audio/article',
            method: 'get',
            params: {
                ...params,
                pageSize: Configs.pageSize,
            },
        });
    },
};

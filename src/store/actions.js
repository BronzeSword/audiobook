import { main } from '@/api';
import {
    SET_ARTICLELIST,
} from './mutation-type';


// 获取文章列表
const getArticleList = ({ commit }, dt) => new Promise((resolve, reject) => {
    main.getMainList(dt).then((res) => {
        if (res.code === 0) {
            const articleArray = res.data;
            commit(SET_ARTICLELIST, articleArray);
            resolve(articleArray);
        }
    }).catch((e) => { reject(e); });
});

export default {
    getArticleList,
};

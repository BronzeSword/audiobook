
import Axios from 'axios';
import { Message } from 'element-ui';
import Configs from '../config';

const fetch = async (config) => {
    const {
        method,
        params,
        independent,
        url,
        timeout,
        headers: headerInfo,
        ...other
    } = config;
    // const token = localStorage.getItem('authentication');
    let headers = null;
    if (url.indexOf('/server/') >= 0) {
        headers = {
            ...headerInfo,
        };
    } else {
        headers = {
            // token: token || '',
            ...headerInfo,
        };
    }

    // 创建axios实例
    const axiosIns = Axios.create();
    let options = {
        headers,
        baseURL: Configs.baseUrl,
        url,
        ...other,
        timeout: timeout || 1 * 60 * 1000,
    };

    if (method === 'post') {
        options = {
            ...options,
            method: 'post',
            data: params,
        };
    } else {
        options = {
            ...options,
            method: 'get',
            params,
        };
    }

    const response = await axiosIns(options)
        .catch((error) => {
            const { message, response: resInfo } = error;
            if (/timeout\sof\s\d+ms\sexceeded/.test(message)) {
                Message.error('网络不稳定，请稍后重试');
            }
            if (resInfo) {
                switch (resInfo.status) {
                case 404:
                    Message.error('请求的资源不存在');
                    break;
                case 500:
                    Message.error('服务异常，请稍后重试');
                    break;
                case 503:
                    Message.errort('服务器正在维护，请稍后重试');
                    break;
                default:
                }
            }
            return Promise.reject();
        })
        .then((res) => {
            const { code, message } = res.data;
            // independent 存在做单独异常处理，其余走统一业务处理
            if (independent) return res;
            if (code !== 0) {
                // code不为0视为错误
                Message.error(message);
                return Promise.reject();
            }
            return res.data;
        });

    return response;
};

export default fetch;

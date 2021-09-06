export default [
    {
        path: 'index',
        alias: '/',
        name: 'index',
        component: () => import(
            /* webpackChunkName: "default" */ '@/pages/main/index'
        ),
        meta: {
            title: '兔子FM - 兔子小说',
            code: '',
        },
    },
    {
        path: 'detail',
        name: 'detail',
        component: () => import(
            /* webpackChunkName: "default" */ '@/pages/main/detail'
        ),
        meta: {
            title: '兔子FM - 兔子小说',
            code: '',
        },
    },
    {
        path: 'chapter',
        name: 'chapter',
        component: () => import(
            /* webpackChunkName: "default" */ '@/pages/main/chapter'
        ),
        meta: {
            title: '兔子FM - 兔子小说',
            code: '',
        },
    },
    {
        path: 'privacy_policy',
        name: 'privacy_policy',
        component: () => import(
            /* webpackChunkName: "default" */ '@/pages/main/privacy_policy'
        ),
        meta: {
            title: '兔子FM - 隐私条款',
            code: '',
        },
    },
    {
        path: 'author',
        name: 'author',
        component: () => import(
            /* webpackChunkName: "default" */ '@/pages/main/author'
        ),
        meta: {
            title: '兔子FM - 兔子小说',
            code: '',
        },
    },

];

export default [
    {
        path: 'index',
        alias: '/',
        name: 'index',
        component: () => import(
            /* webpackChunkName: "default" */ '@/pages/main/index'
        ),
        meta: {
            title: '三位书屋',
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
            title: '三位书屋',
            code: '',
        },
    },
];

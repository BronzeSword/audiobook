export default [
    {
        path: 'index',
        alias: '/',
        name: 'index',
        component: () => import(
            /* webpackChunkName: "default" */ '@/pages/main/index'
        ),
        meta: {
            title: '兔子FM - 兔子有声书',
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
            title: '兔子FM - 兔子有声书',
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
            title: '兔子FM - 兔子有声书',
            code: '',
        },
    },
];

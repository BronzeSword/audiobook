
import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultLayout from '@/components/layout/default';
import OnlyHeaderLayout from '@/components/layout/only-header';

import main from './main';

const notFound = () => import(/* webpackChunkName: "forbid" */ '@/pages/not-found');


const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
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
        ],
    },
    {
        path: '/',
        component: OnlyHeaderLayout,
        children: [...main],
    },
    {
        path: '*',
        component: DefaultLayout,
        children: [
            {
                path: '*',
                component: notFound,
                meta: {
                    title: '404',
                    noTag: true,
                },
            },
        ],
    },
];
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    next();
});
export default router;

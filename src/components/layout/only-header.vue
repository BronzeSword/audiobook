<template>
    <div class="container">
        <CommonHeader />
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<script>
// import { mapActions } from 'vuex';
import CommonHeader from './header';

export default {
    components: {
        CommonHeader,
    },
    data() {
        return {
            isSingleShow: true,
            userInfo: {}, // 用户数据
            menuData: [], // 菜单数据
            menuSourceData: [], // 菜单数据
            routerIndex: '', // 当前菜单
            isMenuHide: false, // 是否折叠菜单
            breadcrumbData: [], // 面包屑数据
            backUrlData: '', // 面包屑返回路径
            menuCode: '', // 缓存菜单id
            menuQuery: '', // 搜索菜单数据
            matchDataArr: [], // 匹配的数据
            routeData: [], // 路由数据
            routePermission: [], // 路由权限数组
        };
    },
    computed: {
    },
    mounted() {
    },
    methods: {
    },
};
</script>
<style lang='scss' scoped>
@import '@/assets/styles/variables.scss';

</style>

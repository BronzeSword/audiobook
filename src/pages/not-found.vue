<template>
    <div class="gp-notfound">
        <div class="not-found">
            <h3 class="title">
                你访问的页面找不到了
            </h3>
            <p class="tip">
                该服务已过期或者打开的地址有误，你可以检查输入的url地址是否拼写正确或刷新再试，如无法解决请联系管理员寻求帮助。
            </p>
            <div class="btn">
                <el-button size="small"
                           @click="goBack">
                    返回上一级
                </el-button>
                <el-button size="small"
                           @click="reload">
                    刷新
                </el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        /**
         * 返回上一级
         */
        goBack() {
            this.$router.go(-1);
        },
        /**
         * 刷新
         */
        reload() {
            window.location.reload();
        },
    },
};
</script>>
<style lang="scss" scoped>
    .gp-notfound {
        width: 600px;
        height: 170px;
        position: absolute;
        top: 50%;
        margin-top: -85px;
        left: 50%;
        margin-left: -300px;
        .not-found {
            margin-left: 190px;
        }
        .title {
            // color: $--color-text-regular;
            font-size: 20px;
            line-height: 30px;
        }
        .tip {
            margin-top: 6px;
            color: $--color-text-secondary;
            font-size: 14px;
            line-height: 22px;
        }
        .btn {
            margin-top: 16px;
        }
    }
</style>

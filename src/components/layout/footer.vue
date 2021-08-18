<template>
    <div class="footer-wrape">
        <div class="content">
            免责声明：本站部分资源来源于网络，版权归原作者所有，若有侵犯您的权利，请来信告知，
            我们将立即予以删除。邮箱：abcde@qq.com 万分感谢！<br>
            ©xxx网 京ICP备20200xx号-1
        </div>
    </div>
</template>
<script>

export default {
    name: 'App',
};
</script>

<style scoped lang='scss'>
@import '@/assets/styles/variables.scss';
.footer-wrape {
    .content {
        width: 1080px;
        margin: 50px auto 0;
        font-size: 12px;
        color: #999;
        letter-spacing: 0;
        line-height: 2em;
        text-align: center;
    }
}
</style>

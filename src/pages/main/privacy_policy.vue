<template>
    <div class="detail-wrape">
        <h2 style="text-align: center;">
            隐私政策
        </h2>
        <br>
        <br>
        <div>
            <h4>本隐私政策（“政策”）将帮助您了解当您访问和使用 tuzifm.com 时，TUZIFM 如何使用和保护您提供给我们的数据。</h4>

            <div>我们保留在任何给定时间更改此政策的权利，您将及时得到更新。如果您想确保了解最新的更改，我们建议您经常访问此页面。</div>

            <h4>我们收集哪些用户数据</h4>

            <div>当您访问本网站时，我们可能会收集以下数据：</div>
            <div>您的 IP 地址。</div>
            <div>您的联系信息和电子邮件地址。</div>
            <div>其他信息，例如兴趣和偏好。</div>
            <div>关于您在我们网站上的在线行为的数据配置文件。</div>

            <h4>为什么我们收集您的数据</h4>

            <div>我们出于以下几个原因收集您的数据：</div>
            <div>为了更好地了解您的需求。</div>
            <div>改善我们的服务和产品。</div>
            <div>向您发送包含我们认为您会感兴趣的信息的促销电子邮件。</div>
            <div>与您联系以填写调查并参与其他类型的市场研究。</div>
            <div>根据您的在线行为和个人喜好定制我们的网站。</div>

            <h4>保护和保护数据</h4>

            <div>TUZIFM 致力于保护您的数据并对其保密。</div>
            <div>TUZIFM 通过实施最新的技术和软件，尽其所能防止数据被盗、未经授权的访问和披露，这有助于我们保护我们在线收集的所有信息。</div>

            <h4>我们的 Cookie 政策</h4>

            <div>一旦您同意允许我们的网站使用 Cookie，您也同意使用它收集的有关您的在线行为的数据（分析网络流量、您花费最多时间的网页以及您访问的网站）。</div>

            <div>我们使用 Cookie 收集的数据用于根据您的需求定制我们的网站，在我们使用数据进行统计分析后，这些数将将完全从我们的系统中删除。</div>
            <div>请注意，Cookie 不允许我们以任何方式控制您的计算机。它们严格用于监控您认为有用的页面以及您认为有用的页面，以便我们为您提供更好的体验。</div>

            <div>如果您想禁用 Cookie，您可以通过访问您的互联网浏览器的设置来实现。</div>

            <h4>其他网站的链接</h4>

            <div>我们的网站包含通向其他网站的链接。如果您点击这些链接，TUZIFM 不对您的数据和隐私保护负责。</div>
            <div>访问这些网站不受本隐私政策协议的约束。请务必阅读您从我们网站访问的网站的隐私政策文档。</div>

            <h4>限制收集您的个人数据</h4>

            <div>在某些时候，您可能希望限制您个人数据的使用和收集。您可以通过执行以下操作来实现此目的：</div>

            <div>当您在网站上填写表格时，如果您不想透露您的个人信息，请确保选中是否有一个您可以不选中的框。</div>

            <div>如果您已经同意与我们分享您的信息，请随时通过电子邮件与我们联系，我们将非常乐意为您更改此信息。</div>

            <div>除非获得您的许可，TUZIFM 不会将您的个人信息出租、出售或分发给任何第三方。</div>
            <div>如果法律强迫我们，我们可能会这样做。如果您同意本隐私政策，我们将在需要向您发送宣传材料时使用您的个人信息。</div>
        </div>
    </div>
</template>
<script>
// import { main } from '@/api';
import { mapState } from 'vuex';

export default {
    data() {
        return {
            detailData: '',
            articleId: '',
            chapterList: [],

        };
    },
    computed: mapState({
        parmas: (state) => state.searchArticlePamars,
    }),
    created() {
        this.init();
    },
    methods: {
        init() {

        },
    },
};
</script>

<style lang="scss" scoped>
.detail-wrape {
    margin-top: 20px;
    margin-left: 5%;
    margin-right: 5%;
    padding-bottom: 30px;
    h4 {
        margin-top: 12px;
    }
    div {
        margin-top: 3px;
    }
}
</style>

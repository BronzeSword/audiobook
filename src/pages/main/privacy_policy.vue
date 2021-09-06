<template>
    <div>
        <h2 style="text-align: center;">
            隐私政策
        </h2>
        <br>
        <br>
        <pre>
            本隐私政策（“政策”）将帮助您了解当您访问和使用 tuzifm.com 时，TUZIFM 如何使用和保护您提供给我们的数据。

            我们保留在任何给定时间更改此政策的权利，您将及时得到更新。如果您想确保了解最新的更改，我们建议您经常访问此页面。

            <b>我们收集哪些用户数据</b>

            当您访问本网站时，我们可能会收集以下数据：
            您的 IP 地址。
            您的联系信息和电子邮件地址。
            其他信息，例如兴趣和偏好。
            关于您在我们网站上的在线行为的数据配置文件。

            <b>为什么我们收集您的数据</b>

            我们出于以下几个原因收集您的数据：
            为了更好地了解您的需求。
            改善我们的服务和产品。
            向您发送包含我们认为您会感兴趣的信息的促销电子邮件。
            与您联系以填写调查并参与其他类型的市场研究。
            根据您的在线行为和个人喜好定制我们的网站。

            <b>保护和保护数据</b>

            TUZIFM 致力于保护您的数据并对其保密。
            TUZIFM 通过实施最新的技术和软件，尽其所能防止数据被盗、未经授权的访问和披露，这有助于我们保护我们在线收集的所有信息。

            <b>我们的 Cookie 政策</b>

            一旦您同意允许我们的网站使用 Cookie，您也同意使用它收集的有关您的在线行为的数据（分析网络流量、您花费最多时间的网页以及您访问的网站）。

            我们使用 Cookie 收集的数据用于根据您的需求定制我们的网站，在我们使用数据进行统计分析后，这些数将将完全从我们的系统中删除。
            请注意，Cookie 不允许我们以任何方式控制您的计算机。它们严格用于监控您认为有用的页面以及您认为有用的页面，以便我们为您提供更好的体验。

            如果您想禁用 Cookie，您可以通过访问您的互联网浏览器的设置来实现。

            <b>其他网站的链接</b>

            我们的网站包含通向其他网站的链接。如果您点击这些链接，TUZIFM 不对您的数据和隐私保护负责。
            访问这些网站不受本隐私政策协议的约束。请务必阅读您从我们网站访问的网站的隐私政策文档。

            <b>限制收集您的个人数据</b>

            在某些时候，您可能希望限制您个人数据的使用和收集。您可以通过执行以下操作来实现此目的：

            当您在网站上填写表格时，如果您不想透露您的个人信息，请确保选中是否有一个您可以不选中的框。

            如果您已经同意与我们分享您的信息，请随时通过电子邮件与我们联系，我们将非常乐意为您更改此信息。

            除非获得您的许可，TUZIFM 不会将您的个人信息出租、出售或分发给任何第三方。
            如果法律强迫我们，我们可能会这样做。如果您同意本隐私政策，我们将在需要向您发送宣传材料时使用您的个人信息。
        </pre>
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
    width: 1080px;
    margin: 0 auto;
    .detail-left {
        width: 800px;
        float: left;
        .title {
            font-family: PingFangSC-Medium, sans-serif;
            font-size: 20px;
            line-height: 32px;
            color: #333;
            text-align: center;
        }
        a {
            text-decoration: none;
        }
        .chapter-name {
            font-family: PingFangSC-Medium, sans-serif;
            font-size: 18px;
            line-height: 40px;
            color: #f86442;
            text-align: left;
        }
        .chapter-title {
            font-size: 16px;
            cursor: pointer;
            margin: 10px 10px 10px 0;
            color: #333;
            text-align: left;
        }
        .info {
            color: #666;
            font-size: 14px;
            margin: 20px 20px;
            text-align: center;
            span {
                margin-left: 20px;
            }
        }
        .content {
            margin-bottom: 20px;
            .video {
                text-align: center;
            }
            iframe {
                display: block;
                margin: auto;
            }
        }
    }
    .detail-right {
        width: 240px;
        margin-left: 40px;
        float: left;
        .advertising-space {
            border: 1px solid #a3a3ac;
            width: 100%;
            height: 300px;
            text-align: center;
            line-height: 300px;
            margin-bottom: 30px;
        }
    }
    &::after {
        content: '';
        display: block;
        clear: both;
    }
}
</style>

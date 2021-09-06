const PrerenderSPAPlugin = require('prerender-spa-plugin');

const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                path.resolve(__dirname, './src/assets/styles/variables.scss'),
            ],
        });
}
function resolve(dir) {
    return path.resolve(__dirname, dir);
}
module.exports = {
    runtimeCompiler: true,
    productionSourceMap: false,
    configureWebpack: {
        plugins: [
            new PrerenderSPAPlugin({
                staticDir: path.join(__dirname, 'dist'),
                // 动态不生效，需再找方案
                //  routes: ['/', '/detail', '/chapter', '/chapter/?articleId=10567',
                // '/chapter/articleId', '/detail/articleId'],
                routes: ['/', '/privacy_policy'],
                renderer: new Renderer({
                    inject: {
                        // articleId: '10447',
                        foo: 'bar',
                    },
                    headless: true,
                    devtools: false,
                    renderAfterDocumentEvent: 'render-event',
                }),
            }),
        ],
        resolve: {
            extensions: ['.js', '.json', '.css', '.less', '.vue', '.scss', '.stylus', '.ts'],
        },
    },
    chainWebpack: (options) => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach((type) => addStyleResource(options.module.rule('scss').oneOf(type)));
        options.resolve.alias
            .set('@', resolve('./src'))
            .set('@assets', resolve('./src/assets'))
            .set('@images', resolve('./src/assets/images'))
            .set('@components', resolve('./src/components'))
            .set('@utils', resolve('./src/utils'))
            .set('@api', resolve('./src/api'))
            .set('@pages', resolve('./src/pages'))
            .set('@config', resolve('./src/config'));
    },
    devServer: {
        open: true,
    },
};

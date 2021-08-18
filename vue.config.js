
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
    configureWebpack: {
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

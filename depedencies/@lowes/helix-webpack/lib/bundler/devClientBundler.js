const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const logCompilation = require('./logCompilation');

async function devClientBundler(clientWebpack) {
    const clientCompiler = webpack(clientWebpack);
    const clientCompliationComplete = logCompilation('client', clientCompiler);

    const devMiddlewareConfig = {
        noInfo: false,
        stats: {
            colors: true,
            assets: true
        },
        publicPath: clientWebpack.output.publicPath,
        writeToDisk: true
    };

    // https://github.com/webpack/webpack-dev-middleware
    webpackDevMiddleware(clientCompiler, devMiddlewareConfig);

    await clientCompliationComplete;
}

module.exports = devClientBundler;

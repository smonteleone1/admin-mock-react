const webpack = require('webpack');
const logCompilation = require('./logCompilation');
const { logError } = require('../utils/logger');

async function devServerBundler(serverWebpack) {
    // "webpackCompiler" is a low-level interface to Webpack.
    // It lets us listen to some events and provide our own custom messages.
    // https://webpack.js.org/api/node/#multicompiler
    const serverCompiler = webpack(serverWebpack);

    const serverCompliationComplete = logCompilation('server', serverCompiler);

    // https://webpack.js.org/api/node/#compiler-instance
    // https://webpack.js.org/api/node/#watching
    // Calling the watch method triggers the webpack runner,
    // but then watches for changes(much like CLI: webpack --watch),
    // as soon as webpack detects a change, runs again. Returns an instance of Watching.
    // otherwise it won't resolve automatically
    serverCompiler.watch({}, (err) => {
        if (err) {
            logError(err);
        }
    });

    await serverCompliationComplete;
}

module.exports = devServerBundler;

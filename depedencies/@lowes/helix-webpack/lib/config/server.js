const webpack = require('webpack');
const merge = require('webpack-merge');

const nodeExternals = require('webpack-node-externals');

const baseConfig = require('./base');
const { reScript, reStyle, reImage } = require('../utils/fileExtRegex');
const { resolveDevMode, resolveBuildPath, helixConfigReslove } = require('../utils/resolver');

const buildDir = resolveBuildPath();
const devMode = resolveDevMode();

/**
 * Configuration for the server-side bundle (server.js)
 */
const serverConfig = {
    entry: helixConfigReslove(),
    name: 'server',
    target: 'node',
    module: {
        rules: [
            // Rules for JS / JSX
            {
                test: reScript,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            // A Babel preset that can automatically determine
                            // the Babel plugins and polyfills
                            // https://tools.lowes.com/stash/projects/D-FRW/repos/babel-preset-config/browse
                            [require.resolve('@lowes/babel-preset-config'), { target: 'node', modules: 'auto', isDefinePluginEnabled: true }]
                        ]
                    }
                }]
            }
        ]
    },
    output: {
        path: buildDir,
        filename: '[name].js',
        chunkFilename: 'chunks/[name].js',
        // The return value of your entry point will be assigned to the exports object
        // using the output.library value. As the name implies, this is used in
        // CommonJS environments.
        libraryTarget: 'commonjs2'
    },
    // Choose a developer tool to enhance debugging
    // https://webpack.js.org/configuration/devtool/#devtool
    devtool: 'inline-cheap-module-source-map',
    // The externals configuration option provides a way of excluding
    // dependencies from the output bundles.
    // Prevent bundling of certain imported packages and instead retrieve
    // these external dependencies at runtime.
    // https://webpack.js.org/configuration/externals/#root
    externals: [
        './chunk-manifest.json',
        './asset-manifest.json',
        // in order to ignore all modules in node_modules folder
        // [reStyle, reImage] they will be included in the bundle
        // https://github.com/liady/webpack-node-externals
        nodeExternals({
            whitelist: [reStyle, reImage]
        })
    ],

    plugins: [
        // The DefinePlugin allows you to create global constants
        // which can be configured at compile time.
        // https://webpack.js.org/plugins/define-plugin/
        new webpack.DefinePlugin({
            'process.env.BROWSER': false,
            __DEV__: devMode,
            __SERVER__: true
        })
    ],
    // Do not replace node globals with polyfills
    // https://webpack.js.org/configuration/node/
    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    }
};

module.exports = merge(baseConfig, serverConfig);

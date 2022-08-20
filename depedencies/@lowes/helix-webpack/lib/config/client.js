/**
 * This file consists of client configuration
 * it will bundle a file client.js
 */
const fs = require('fs');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { logError } = require('../utils/logger');
const { resolveDevMode, resolveBuildPath, resolvePath } = require('../utils/resolver');
const { reScript } = require('../utils/fileExtRegex');
const baseConfig = require('./base');

const buildDir = resolveBuildPath();
const devMode = resolveDevMode();

const isAnalyze = process.argv.includes('--analyze') || process.argv.includes('--analyse');

/**
 * Configuration for the client-side bundle (client.js)
 */
const clientConfig = {
    name: 'client',
    target: 'web',
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
                            [require.resolve('@lowes/babel-preset-config'), { target: 'browser', modules: false, isDefinePluginEnabled: true }]
                        ]
                    }
                }]
            }
        ]
    },
    // Choose a developer tool to enhance debugging
    // https://webpack.js.org/configuration/devtool/#devtool
    devtool: devMode ? 'inline-cheap-module-source-map' : false,
    plugins: [
        // The DefinePlugin allows you to create global constants
        // which can be configured at compile time.
        // https://webpack.js.org/plugins/define-plugin/
        new webpack.DefinePlugin({
            'process.env.BROWSER': true,
            __DEV__: devMode,
            __SERVER__: false
        }),

        // Generate a manifest file which contains a mapping of all asset filenames
        // to their corresponding output file so that tools can pick it up without
        // having to parse `index.html`.
        // https://github.com/webdeveric/webpack-assets-manifest#options
        new WebpackAssetsManifest({
            output: `${buildDir}/asset-manifest.json`,
            publicPath: true,
            writeToDisk: true,
            customize: ({ key, value }) => {
                // You can prevent adding items to the manifest by returning false.
                if (key.toLowerCase().endsWith('.map')) {
                    return false;
                }
                return { key, value };
            },
            done: (manifest, stats) => {
                // Write chunk-manifest.json.json
                const chunkFileName = `${buildDir}/chunk-manifest.json`;
                try {
                    const fileFilter = (file) => !file.endsWith('.map');

                    const accumulatorChunk = (fs.existsSync(chunkFileName)
                                                    // eslint-disable-next-line
                                                    && require(chunkFileName)) || {};
                    const addPath = (file) => manifest.getPublicPath(file);
                    const chunkFiles = stats.compilation.chunkGroups.reduce((acc, c) => {
                        acc[c.name] = [
                            ...(acc[c.name] || []),
                            ...c.chunks.reduce(
                                (files, cc) => [
                                    ...files,
                                    ...cc.files.filter(fileFilter).map(addPath)
                                ],
                                []
                            )
                        ];
                        return acc;
                    }, Object.create(null));
                    fs.writeFileSync(chunkFileName,
                        JSON.stringify({ ...chunkFiles, ...accumulatorChunk }, null, 2));
                } catch (err) {
                    logError(`ERROR: Cannot write ${chunkFileName}: `, err);
                    if (!devMode) process.exit(1);
                }
            }
        }),
        // Webpack Bundle Analyzer
        // https://github.com/th0r/webpack-bundle-analyzer
        isAnalyze ? new BundleAnalyzerPlugin() : null,
        // A progress bar plugin for Webpack.
        // https://github.com/clessg/progress-bar-webpack-plugin
        devMode ? new ProgressBarPlugin() : null,
        new CopyPlugin([
            {
                from: resolvePath(process.cwd(), 'src/client/public/'),
                to: buildDir
            }
        ])
    ].filter(Boolean),

    // Move modules that occur in multiple entry chunks to a new entry chunk (the commons chunk).
    optimization: {
        minimizer: [
            // this will work in production
            new TerserPlugin({
                terserOptions: {
                    parse: {
                        // we want terser to parse ecma 8 code. However, we don't want it
                        // to apply any minfication steps that turns valid ecma 5 code
                        // into invalid ecma 5 code. This is why the 'compress' and 'output'
                        // sections only apply transformations that are ecma 5 safe
                        ecma: 8
                    },
                    compress: {
                        ecma: 5,
                        warnings: false,
                        // Pending further investigation:
                        // https://github.com/mishoo/UglifyJS2/issues/2011
                        comparisons: false,
                        // Pending futher investigation:
                        // https://github.com/terser-js/terser/issues/120
                        inline: 2
                    },
                    mangle: {
                        safari10: true
                    },
                    output: {
                        ecma: 5,
                        comments: false,
                        ascii_only: true
                    }
                },
                // Use multi-process parallel running to improve the build speed
                // Default number of concurrent runs: os.cpus().length - 1
                parallel: true,
                // Enable file caching
                cache: true,
                sourceMap: true
            })
        ],
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    test: /[\\/]node_modules[\\/]((?!(@lowes)).*)[\\/]/,
                    name: 'vendors'
                }
            }
        }
    },
    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    // https://webpack.js.org/configuration/node/
    // https://github.com/webpack/node-libs-browser/tree/master/mock
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};

module.exports = merge(baseConfig, clientConfig);

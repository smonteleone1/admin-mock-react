const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const tsFormatter = require('../utils/errorFormatter');

const {
    reScript,
    reStyle,
    reImage
} = require('../utils/fileExtRegex');
const {
    root, resolvePath, resolveDevMode, resolveBuildPath, resolveTsConfig, resolveTypeCheck
} = require('../utils/resolver');

const buildDir = resolveBuildPath();
const devMode = resolveDevMode();

const staticAssetName = devMode
    ? '[path][name].[ext]?[hash:8]'
    : '[hash:8].[ext]';

const useTypeScript = fs.existsSync(resolveTsConfig());
const isTypeCheckEnabled = resolveTypeCheck();
/**
 * Common configuration chunk to be used for both client-side (client.js)
 *  and server-side (server.js) bundles
 */
const baseConfig = {
    // The base directory, an absolute path, for resolving entry
    // points and loaders from configuration.
    // https://webpack.js.org/configuration/entry-context/#context
    context: root,
    mode: devMode ? 'development' : 'production',
    output: {
        // The build folder
        path: resolvePath(buildDir, 'public'),
        publicPath: process.env.ASSET_PATH || '/',
        // Add /* filename */ comments to generated require()s in the output.
        pathinfo: devMode,
        // There will be two main bundle.
        // client-side (client.js) and server-side (server.js) bundles
        filename: devMode ? '[name].js' : '[name].[chunkhash:8].js',
        // There are also additional JS chunk files if you use code splitting.
        chunkFilename: devMode
            ? '[name].chunk.js'
            : '[name].[chunkhash:8].chunk.js',
        // Point sourcemap entries to original disk location (format as URL on Windows)
        devtoolModuleFilenameTemplate: (info) => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
    },
    resolve: {
        // Allow absolute paths in imports, e.g. import Button from 'components/Button'
        // Keep in sync with .eslintrc
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    module: {
        // Make missing exports an error instead of warning
        strictExportPresence: true,

        rules: [
            // Rules for JS / JSX
            {
                test: reScript,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        // This is a feature of `babel-loader` for webpack (not Babel itself).
                        // It enables caching results in ./node_modules/.cache/babel-loader/
                        // directory for faster rebuilds.
                        cacheDirectory: devMode,
                        babelrc: false,
                        compact: !devMode,
                        cacheIdentifier: !devMode ? 'production' : 'development'
                    }
                }]
            },
            // Rules for Style Sheets
            // Process internal/project styles
            {
                test: reStyle,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            // CSS Loader https://github.com/webpack/css-loader
                            sourceMap: true,
                            importLoaders: 1
                        }
                    }
                ]
            },

            // Rules for images
            {
                test: reImage,
                oneOf: [
                    // Inline lightweight images into CSS
                    {
                        issuer: reStyle,
                        oneOf: [
                            // Inline lightweight SVGs as UTF-8 encoded DataUrl string
                            {
                                test: /\.svg$/,
                                loader: 'svg-url-loader',
                                options: {
                                    name: staticAssetName,
                                    limit: 4096 // 4kb
                                }
                            },
                            // Inline lightweight images as Base64 encoded DataUrl string
                            {
                                loader: 'url-loader',
                                options: {
                                    name: staticAssetName,
                                    limit: 4096 // 4kb
                                }
                            }
                        ]
                    },
                    // Or return public URL to image resource
                    {
                        loader: 'file-loader',
                        options: {
                            name: staticAssetName
                        }
                    }
                ]
            },

            // Return public URL for all assets unless explicitly excluded
            // DO NOT FORGET to update `exclude` list when you adding a new loader
            {
                exclude: [reScript, reStyle, reImage, /\.json$/, /\.txt$/, /\.md$/, /\.html$/],
                loader: 'file-loader',
                options: {
                    name: staticAssetName
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css'
        }),
        useTypeScript && isTypeCheckEnabled && new ForkTsCheckerWebpackPlugin({
            tsconfig: resolveTsConfig(),
            async: devMode,
            useTypescriptIncrementalApi: true,
            checkSyntacticErrors: true,
            formatter: (message) => tsFormatter(message, devMode, 'TypeScript')
        })
    ].filter(Boolean),
    // Don't attempt to continue if there are any errors.
    bail: !devMode,
    // Cache the generated webpack modules and chunks to improve build speed
    // it will work only for development mode.
    cache: devMode,
    // Specify what bundle information gets displayed
    // https://webpack.js.org/configuration/stats/
    stats: 'errors-only'
};

module.exports = baseConfig;

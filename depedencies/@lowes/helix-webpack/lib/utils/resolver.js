const path = require('path');
const findUp = require('find-up');

const root = path.resolve(__dirname, '..');

const outputPathIndex = process.argv.findIndex((arg) => arg === '--output-path');
let outputPath;
if (outputPathIndex !== -1) {
    outputPath = process.argv[outputPathIndex + 1];
}

/**
 * Resolve the path based on a root directory.
 * @param  {...any} args
 * @returns {String} path from root directory
 */
function resolvePath(...args) {
    return path.resolve(root, ...args);
}

/**
 * Resolve the devMode for Webpack configuration selection
 * @returns {boolean} Value will be true if `NODE_ENV` is any value other than `production`
 */
function resolveDevMode() {
    return process.env.NODE_ENV !== 'production';
}

/**
 * Resolve the build path
 */
function resolveBuildPath() {
    return resolvePath(process.cwd(), outputPath || 'build');
}

/**
 * Resolve typescript for Webpack fork-ts-checker-webpack-plugin
 * @returns {string} returns path from root directory
 */
function resolveTsConfig() {
    return resolvePath(process.cwd(), 'tsconfig.json');
}

/**
 * Enables fork-ts-checker-webpack-plugin
 * @returns {boolean}
 */
function resolveTypeCheck() {
    return process.env.typeCheck !== 'false';
}
function helixConfigReslove(dir = './config') {
    const configpath = findUp.sync('helix-config.js', {
        cwd: dir
    });
    const entry = configpath ? { 'helix-config': ['@babel/polyfill', configpath] } : '';
    return entry;
}

module.exports = {
    root,
    resolvePath,
    resolveDevMode,
    resolveBuildPath,
    resolveTsConfig,
    resolveTypeCheck,
    helixConfigReslove
};

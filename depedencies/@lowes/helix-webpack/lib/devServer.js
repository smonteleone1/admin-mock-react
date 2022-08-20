/* eslint-disable global-require */
const path = require('path');
const devClientBundler = require('./bundler/devClientBundler');
const devServerBundler = require('./bundler/devServerBundler');

const clientWebpackConfig = require('./config/client');
const serverWebpackConfig = require('./config/server');
const { logInfo, logSuccess } = require('./utils/logger');

/**
 * Start the dev server with hot reload
 */
const start = async () => {
    logInfo('Starting Dev Server...');
    await devClientBundler(clientWebpackConfig);
    await devServerBundler(serverWebpackConfig);

    logSuccess('Launching Dev Server...');

    const serverPath = path.resolve(process.cwd(), './build/server');
    // eslint-disable-next-line import/no-dynamic-require
    require(serverPath);
};

module.exports = start();

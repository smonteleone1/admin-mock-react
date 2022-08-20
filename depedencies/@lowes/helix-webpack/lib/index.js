const client = require('./config/client');
const server = require('./config/server');
const fileExtRegex = require('./utils/fileExtRegex');
const devClientBundler = require('./bundler/devClientBundler');
const devServerBundler = require('./bundler/devServerBundler');

/**
 * Expose client and server configurations.
 * Expose file extension regex constants.
 * Expose dev client and server bundlers for Webpacks dev server.
 */
module.exports = {
    client,
    server,
    fileExtRegex,
    devClientBundler,
    devServerBundler
};

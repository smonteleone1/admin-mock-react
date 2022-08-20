/* eslint no-console: "off" */

const chalk = require('chalk');

module.exports = {
    log(message) {
        console.log(chalk.bold.white.bgRed(message));
    },
    logInfo(message) {
        console.log(chalk.bold.magenta(message));
    },
    logError(message) {
        console.log(chalk.red(message));
    },
    logSuccess(message) {
        console.log(chalk.bold.green(message));
    }
};

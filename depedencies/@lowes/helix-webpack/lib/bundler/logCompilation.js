const { logInfo, logSuccess, logError } = require('../utils/logger');

/**
 * Print the Webpack compilation details (success or failure)
 * @param {String} name
 * @param {Object} compiler
 */
function logCompilation(name, compiler) {
    return new Promise((resolve, reject) => {
        compiler.hooks.compile.tap(name, () => {
            logInfo(`Compiling '${name}' ...`);
        });

        compiler.hooks.done.tap(name, (stats) => {
            if (stats.hasErrors()) {
                logError(`Failed to compile '${name}'`);
                reject(new Error('Compilation failed!'));
            } else {
                logSuccess(`Finished '${name}' compilation`);
                resolve(stats);
            }
        });
    });
}

module.exports = logCompilation;

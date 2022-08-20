const workerMock = require('./workerMock');
function defineGlobalVariables() {
    if (typeof Worker === 'undefined') {
        window.Worker = workerMock;
        global.Worker = workerMock;
    }
}
module.exports = defineGlobalVariables;

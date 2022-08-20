class WorkerMock {
    constructor() {
        this.events = {};
        this.workerMessageList = [];
    }
    addEventListener() {
    }
    postMessage() {
    }
}
module.exports = WorkerMock;

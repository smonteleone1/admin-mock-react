export = WorkerMock;
declare class WorkerMock {
    events: {};
    workerMessageList: any[];
    addEventListener(): void;
    postMessage(): void;
}

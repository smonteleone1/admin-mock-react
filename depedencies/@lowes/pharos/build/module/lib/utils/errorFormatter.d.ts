export default function getPayloadDataForError(errorDetails: any, errorDetailsObj?: {}): {
    [x: number]: any;
    userDefined: boolean;
    type: any;
    code: number;
    message: string;
    mapKey: string;
    traceId: string;
    initiator: string;
    url: any;
    stackTrace: string;
};

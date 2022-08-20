export default getCommonRequestData;
declare function getCommonRequestData(clientConfig: any): {
    [x: number]: any;
    token: any;
    pharosUrl: any;
    sdkVersion: any;
    app: {
        name: any;
        url: string;
        releaseTag: any;
        buildDetails: Window;
    };
    page: {
        name: any;
        title: any;
        height: number;
        width: number;
    };
};

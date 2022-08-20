interface Pharos {
    trackError(data: object, errorObject?: any): void;
    trackEvent(name: string, data: any): any;
    setPageDetails(data: object): any;
}
declare global {
    const Pharos: Pharos;
}
declare const RenderView: any;
export default RenderView;

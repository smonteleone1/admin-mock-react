declare const teardown: (doc: any) => void;
declare const useIsFocusVisible: () => {
    isFocusVisible: (event: any) => any;
    onBlurVisible: () => void;
    ref: (instance: any) => void;
};
export { teardown, useIsFocusVisible };
export default useIsFocusVisible;

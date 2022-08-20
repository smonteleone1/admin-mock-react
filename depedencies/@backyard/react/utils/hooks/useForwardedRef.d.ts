/// <reference types="react" />
declare const useForwardedRef: <R = any>(forwardedRef: import("react").MutableRefObject<R> | ((instance: R) => void)) => import("react").MutableRefObject<R>;
export { useForwardedRef };
export default useForwardedRef;

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */
declare const useEventCallback: (fn: any) => (...args: any[]) => any;
export { useEventCallback };
export default useEventCallback;

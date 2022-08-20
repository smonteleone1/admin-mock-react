import * as React from 'react';
var useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 *
 * @param {function} fn
 */

var useEventCallback = function useEventCallback(fn) {
  var ref = React.useRef(fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return React.useCallback(function () {
    return ref.current.apply(ref, arguments);
  }, []);
};

export { useEventCallback };
export default useEventCallback;
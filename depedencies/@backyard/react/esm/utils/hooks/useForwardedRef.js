/* eslint-disable consistent-return, no-else-return, no-param-reassign */
import { useEffect, useRef } from 'react';

var useForwardedRef = function useForwardedRef(forwardedRef) {
  var innerRef = useRef(null);
  useEffect(function () {
    if (!forwardedRef) {
      return;
    }

    if (typeof forwardedRef === 'function') {
      return forwardedRef(innerRef.current);
    } else {
      forwardedRef.current = innerRef.current;
    }
  });
  return innerRef;
};

export { useForwardedRef };
export default useForwardedRef;
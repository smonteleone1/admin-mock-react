/* eslint-disable consistent-return, no-else-return, no-param-reassign */
import { useEffect, useRef } from 'react';

const useForwardedRef = forwardedRef => {
  const innerRef = useRef(null);
  useEffect(() => {
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
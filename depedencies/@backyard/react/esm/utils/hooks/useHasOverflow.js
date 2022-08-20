import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import { ResizeObserver } from '@juggle/resize-observer';
import ownerWindow from '../functions/ownerWindow';

var useHasOverflow = function useHasOverflow(ref) {
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      hasOverflow = _React$useState2[0],
      setHasOverflow = _React$useState2[1];

  var calculateOverflow = function calculateOverflow() {
    if (ref !== null && ref !== void 0 && ref.current) {
      var _ref$current = ref.current,
          offsetX = _ref$current.offsetWidth,
          offsetY = _ref$current.offsetHeight,
          scrollX = _ref$current.scrollWidth,
          scrollY = _ref$current.scrollHeight;
      setHasOverflow(offsetX < scrollX || offsetY < scrollY);
    }
  };

  React.useEffect(function () {
    // Add event listener
    ownerWindow().addEventListener('resize', calculateOverflow); // Call handler right away so state gets updated with initial window size

    calculateOverflow(); // Remove event listener on cleanup

    return function () {
      return ownerWindow().removeEventListener('resize', calculateOverflow);
    };
  }, [ref]);
  var ro = new ResizeObserver(calculateOverflow);
  React.useEffect(function () {
    ro.observe(ref === null || ref === void 0 ? void 0 : ref.current);
    return function () {
      return ro.disconnect();
    };
  }, [ref]);
  return hasOverflow;
};

export { useHasOverflow };
export default useHasOverflow;
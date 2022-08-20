import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';

/**
 *
 * @param ref ref of cell
 * @param defaultValue default value of
 */
var useOverflowChildren = function useOverflowChildren(ref, defaultValue) {
  // True if the cell contents are larger then the cell and thus have been truncated
  var _React$useState = React.useState(defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      hasOverflowChildren = _React$useState2[0],
      setHasOverflowChildren = _React$useState2[1];

  React.useEffect(function () {
    // Checks if the cell content is larger then the container and sets `hasOverflowChildren accordingly
    var calculateOverflow = function calculateOverflow() {
      var cellContainer = ref.current.children[0];
      var cellContent = cellContainer.children[0];
      cellContent.classList.remove('overflow');
      var overflowing = cellContainer.offsetHeight < cellContent.scrollHeight || cellContainer.offsetWidth < cellContent.scrollWidth;

      if (overflowing) {
        cellContent.classList.add('overflow');
      }

      setHasOverflowChildren(overflowing);
    }; // Add event listener


    window.addEventListener('resize', calculateOverflow); // Call handler right away so state gets updated with initial window size

    calculateOverflow(); // Remove event listener on cleanup

    return function () {
      return window.removeEventListener('resize', calculateOverflow);
    };
  }, [hasOverflowChildren, ref]);
  return hasOverflowChildren;
};

export { useOverflowChildren };
export default useOverflowChildren;
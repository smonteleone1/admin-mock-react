"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useOverflowChildren = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 *
 * @param ref ref of cell
 * @param defaultValue default value of
 */
var useOverflowChildren = function useOverflowChildren(ref, defaultValue) {
  // True if the cell contents are larger then the cell and thus have been truncated
  var _React$useState = React.useState(defaultValue),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
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

exports.useOverflowChildren = useOverflowChildren;
var _default = useOverflowChildren;
exports["default"] = _default;
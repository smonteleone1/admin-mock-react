"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useHasOverflow = exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _resizeObserver = require("@juggle/resize-observer");

var _ownerWindow = _interopRequireDefault(require("../functions/ownerWindow"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var useHasOverflow = function useHasOverflow(ref) {
  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
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
    (0, _ownerWindow["default"])().addEventListener('resize', calculateOverflow); // Call handler right away so state gets updated with initial window size

    calculateOverflow(); // Remove event listener on cleanup

    return function () {
      return (0, _ownerWindow["default"])().removeEventListener('resize', calculateOverflow);
    };
  }, [ref]);
  var ro = new _resizeObserver.ResizeObserver(calculateOverflow);
  React.useEffect(function () {
    ro.observe(ref === null || ref === void 0 ? void 0 : ref.current);
    return function () {
      return ro.disconnect();
    };
  }, [ref]);
  return hasOverflow;
};

exports.useHasOverflow = useHasOverflow;
var _default = useHasOverflow;
exports["default"] = _default;
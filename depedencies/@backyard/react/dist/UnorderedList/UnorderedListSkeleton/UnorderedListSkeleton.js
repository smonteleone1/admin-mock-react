"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UnorderedListSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _styles = _interopRequireDefault(require("./styles"));

var _excluded = ["animate", "items", "density", "width", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backard UnorderedListSkeleton component.
 * 
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by 
 * default.
 * 
 * <UnorderedListSkeleton />
*/
var UnorderedListSkeleton = /*#__PURE__*/React.forwardRef(function UnorderedListSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$items = _ref.items,
      items = _ref$items === void 0 ? 4 : _ref$items,
      _ref$density = _ref.density,
      density = _ref$density === void 0 ? 'normal' : _ref$density,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '18.75rem' : _ref$width,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var rects = (0, _toConsumableArray2["default"])(new Array(items));
  return /*#__PURE__*/React.createElement(_styles["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("Unordered-list--skeleton density--".concat(density), className),
    width: width
  }, props, {
    ref: ref
  }), rects.map(function (item, index) {
    return /*#__PURE__*/React.createElement(_Skeleton["default"], {
      key: "skeleton-ol-".concat(index),
      variant: "rect",
      height: "size_24",
      width: "100%",
      animate: animate,
      className: "list-item--skeleton"
    });
  }));
});
exports.UnorderedListSkeleton = UnorderedListSkeleton;
UnorderedListSkeleton.bdsName = 'UnorderedListSkeleton';
var _default = UnorderedListSkeleton;
exports["default"] = _default;
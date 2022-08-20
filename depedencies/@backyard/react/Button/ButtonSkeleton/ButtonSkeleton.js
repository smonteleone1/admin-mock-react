"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ButtonSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _excluded = ["size", "fullWidth", "width", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard ButtonSkeleton component
 * 
 * Returns a Skeleton Rect with a predefined height depending on the
 * value passed to the size prop. The skeleton has a default width also
 * that can be overwritten depending on the width of the button with it's
 * label.
 * 
 * <ButtonSkeleton />
 */
var ButtonSkeleton = /*#__PURE__*/React.forwardRef(function ButtonSkeleton(_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      width = _ref.width,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var skeletonHeight;
  var skeletonWidth;

  switch (size) {
    case 'jumbo':
      skeletonHeight = '6rem';
      skeletonWidth = width || '12rem';
      break;

    case 'large':
      skeletonHeight = '3.5rem';
      skeletonWidth = width || '7.5rem';
      break;

    case 'small':
      skeletonHeight = '2.5rem';
      skeletonWidth = width || '5.5rem';
      break;

    default:
      skeletonHeight = '3rem';
      skeletonWidth = width || '7.5rem';
  }

  if (fullWidth) {
    skeletonWidth = '100%';
  }

  return /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
    variant: "rect",
    width: skeletonWidth,
    height: skeletonHeight,
    className: (0, _classnames["default"])("button--skeleton size-".concat(size), className)
  }, props, {
    ref: ref
  }));
});
exports.ButtonSkeleton = ButtonSkeleton;
ButtonSkeleton.bdsName = 'ButtonSkeleton';
var _default = ButtonSkeleton;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IconButtonSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _excluded = ["animate", "size", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyards IconButtonSkeleton component
 * 
 * Returns a Skeleton rect with a predefined height / width based on
 * the value of the size prop (ie. 'small', 'medium', 'large').
 * 
 * <IconButtonSkeleton />
 */
var IconButtonSkeleton = /*#__PURE__*/React.forwardRef(function IconButtonSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      size = _ref.size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var skeletonWidth;
  var skeletonHeight;

  switch (size) {
    case 'small':
      skeletonWidth = '2.5rem';
      skeletonHeight = '2.5rem';
      break;

    case 'large':
      skeletonWidth = '3.5rem';
      skeletonHeight = '3.5rem';
      break;

    case 'jumbo':
      skeletonWidth = '6rem';
      skeletonHeight = '6rem';
      break;

    default:
      skeletonWidth = '3rem';
      skeletonHeight = '3rem';
      break;
  }

  return /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
    variant: "rect",
    width: skeletonWidth,
    height: skeletonHeight,
    animate: animate,
    className: (0, _classnames["default"])(className, 'icon-buton--skeleton')
  }, props, {
    ref: ref
  }));
});
exports.IconButtonSkeleton = IconButtonSkeleton;
IconButtonSkeleton.bdsName = 'IconButtonSkeleton';
var _default = IconButtonSkeleton;
exports["default"] = _default;
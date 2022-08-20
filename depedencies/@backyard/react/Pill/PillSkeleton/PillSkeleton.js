"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PillSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _excluded = ["animate", "variant", "size", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard's PillSkeleton component
 * 
 * Returns a Skeleton circle with predefined heights and widths related
 * to the value of the variant prop (ie. 'pill', 'indicator').
 * 
 * <PillSkeleton />
 */
var PillSkeleton = /*#__PURE__*/React.forwardRef(function PillSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'pill' : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var height;
  var width;

  if (size === 'medium') {
    width = variant === 'pill' ? 'calc(var(--bds-sizes-size-24) + var(--bds-sizes-size-2))' : 'var(--bds-sizes-size-18)';
    height = variant === 'pill' ? 'calc(var(--bds-sizes-size-24) + var(--bds-sizes-size-2))' : 'var(--bds-sizes-size-18)';
  } else {
    width = variant === 'pill' ? 'calc(var(--bds-sizes-size-40) + var(--bds-sizes-size-2))' : 'calc(var(--bds-sizes-size-32) + var(--bds-sizes-size-2))';
    height = variant === 'pill' ? 'calc(var(--bds-sizes-size-40) + var(--bds-sizes-size-2))' : 'calc(var(--bds-sizes-size-32) + var(--bds-sizes-size-2))';
  }

  return /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
    variant: "circle",
    width: height,
    height: width,
    animate: animate,
    className: (0, _classnames["default"])("pill--skeleton variant--".concat(variant), className)
  }, props, {
    ref: ref
  }));
});
exports.PillSkeleton = PillSkeleton;
PillSkeleton.bdsName = 'PillSkeleton';
var _default = PillSkeleton;
exports["default"] = _default;
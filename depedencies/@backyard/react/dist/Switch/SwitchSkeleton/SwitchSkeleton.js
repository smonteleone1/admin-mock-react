"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SwitchSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = _interopRequireDefault(require("./styles"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _excluded = ["size", "withLabel", "animate", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard's Switch Skeleton component
 * 
 * Returns a pill shaped Skeleton rect of a predefined height and width.
 * These can not be overwritten. Optional boolean parameter of `withLabel`
 * to display a Skeleton rect as text next to the switch.
 */
var SwitchSkeleton = /*#__PURE__*/React.forwardRef(function SwitchSkeleton(_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      _ref$withLabel = _ref.withLabel,
      withLabel = _ref$withLabel === void 0 ? false : _ref$withLabel,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_styles["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])(className, 'switch--skeleton')
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "rect",
    height: size === 'small' ? 'size_16' : 'size_24',
    width: size === 'small' ? '2.125rem' : '2.75rem',
    animate: animate,
    style: {
      borderRadius: '500px'
    }
  }), withLabel ? /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "rect",
    height: "size_20",
    width: "size_84",
    animate: animate,
    className: "skeleton--label"
  }) : null);
});
exports.SwitchSkeleton = SwitchSkeleton;
SwitchSkeleton.bdsName = 'SwitchSkeleton';
var _default = SwitchSkeleton;
exports["default"] = _default;
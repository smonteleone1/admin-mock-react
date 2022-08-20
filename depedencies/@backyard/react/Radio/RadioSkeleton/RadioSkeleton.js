"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RadioSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _styles = _interopRequireDefault(require("./styles"));

var _excluded = ["animate", "labelWidth", "helperWidth", "withLabel", "withHelper", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backard RadioSkeleton component.
 * 
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by 
 * default.
 * 
 * <RadioSkeleton />
*/
var RadioSkeleton = /*#__PURE__*/React.forwardRef(function RadioSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$labelWidth = _ref.labelWidth,
      labelWidth = _ref$labelWidth === void 0 ? 'size_84' : _ref$labelWidth,
      _ref$helperWidth = _ref.helperWidth,
      helperWidth = _ref$helperWidth === void 0 ? 'size_84' : _ref$helperWidth,
      _ref$withLabel = _ref.withLabel,
      withLabel = _ref$withLabel === void 0 ? false : _ref$withLabel,
      _ref$withHelper = _ref.withHelper,
      withHelper = _ref$withHelper === void 0 ? false : _ref$withHelper,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_styles["default"], (0, _extends2["default"])({
    clasName: (0, _classnames["default"])(className, 'radio--skeleton')
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("div", {
    className: "label-wrapper"
  }, /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "circle",
    height: "size_20",
    width: "size_20",
    animate: animate
  }), withLabel ? /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "rect",
    height: "size_20",
    width: labelWidth,
    animate: animate,
    className: "label--skeleton"
  }) : null), withHelper ? /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "rect",
    height: "size_16",
    width: helperWidth,
    className: "helper-text--skeleton",
    animate: animate
  }) : null);
});
exports.RadioSkeleton = RadioSkeleton;
RadioSkeleton.bdsName = 'RadioSkeleton';
var _default = RadioSkeleton;
exports["default"] = _default;
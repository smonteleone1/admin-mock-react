"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SliderSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton6 = _interopRequireDefault(require("../../Skeleton"));

var _styles = require("./styles");

var _excluded = ["orientation", "animate", "showInput", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyards Slider skeleton component
 * 
 * Returns a series of Skeleton Rects in either a horizontal row or a
 * vertical stack depending on the orientation prop. Option prop for showing
 * a text input available only in the horizontal orientation.
 * 
 * <SliderSkeleton />
 */
var SliderSkeleton = /*#__PURE__*/React.forwardRef(function SliderSkeleton(_ref, ref) {
  var _Skeleton, _Skeleton2, _Skeleton3, _Skeleton4, _Skeleton5, _div;

  var _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'horizontal' : _ref$orientation,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$showInput = _ref.showInput,
      showInput = _ref$showInput === void 0 ? false : _ref$showInput,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var Component;

  if (orientation === 'horizontal') {
    Component = function Component() {
      return /*#__PURE__*/React.createElement(_styles.HorizontalWrapper, (0, _extends2["default"])({
        className: (0, _classnames["default"])("slider--skeleton orientation--".concat(orientation), className)
      }, props, {
        ref: ref
      }), _Skeleton || (_Skeleton = /*#__PURE__*/React.createElement(_Skeleton6["default"], {
        variant: "rect",
        height: "size_24",
        width: "size_16",
        animate: animate,
        className: "skeleton--slider-value"
      })), _Skeleton2 || (_Skeleton2 = /*#__PURE__*/React.createElement(_Skeleton6["default"], {
        variant: "rect",
        height: "size_20",
        width: "12.5rem",
        animate: animate,
        className: "skeleton--slider-bar"
      })), _Skeleton3 || (_Skeleton3 = /*#__PURE__*/React.createElement(_Skeleton6["default"], {
        variant: "rect",
        height: "size_24",
        width: "size_16",
        animate: animate,
        className: "skeleton--slider-value"
      })), showInput === true ? _Skeleton4 || (_Skeleton4 = /*#__PURE__*/React.createElement(_Skeleton6["default"], {
        variant: "rect",
        height: "3.375rem",
        width: "3.375rem",
        animate: animate,
        className: "skeleton--slider-input"
      })) : null);
    };
  } else {
    Component = function Component() {
      return /*#__PURE__*/React.createElement(_styles.VerticalWrapper, (0, _extends2["default"])({
        className: (0, _classnames["default"])("slider--skeleton orientation--".concat(orientation), className)
      }, props, {
        ref: ref
      }), _Skeleton5 || (_Skeleton5 = /*#__PURE__*/React.createElement(_Skeleton6["default"], {
        variant: "rect",
        height: "12.5rem",
        width: "size_20",
        animate: animate,
        className: "skeleton--slider-bar"
      })), _div || (_div = /*#__PURE__*/React.createElement("div", {
        className: "skeleton--slider-values"
      }, /*#__PURE__*/React.createElement(_Skeleton6["default"], {
        variant: "rect",
        height: "size_24",
        width: "size_16",
        animate: animate,
        className: "skeleton--slider-value"
      }), /*#__PURE__*/React.createElement(_Skeleton6["default"], {
        variant: "rect",
        height: "size_24",
        width: "size_16",
        animate: animate,
        className: "skeleton--slider-value"
      }))));
    };
  }

  return /*#__PURE__*/React.createElement(Component, null);
});
exports.SliderSkeleton = SliderSkeleton;
SliderSkeleton.bdsName = 'SliderSkeleton';
var _default = SliderSkeleton;
exports["default"] = _default;
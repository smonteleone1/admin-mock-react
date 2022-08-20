"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProgressStepperSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton4 = _interopRequireDefault(require("../../Skeleton"));

var _styles = require("./styles");

var _excluded = ["animate", "steps", "size", "withCaption", "className", "direction"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ProgressStepperSkeleton = /*#__PURE__*/React.forwardRef(function ProgressStepperSkeleton(_ref, ref) {
  var _Skeleton, _Skeleton2, _Skeleton3, _div, _div2;

  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$steps = _ref.steps,
      steps = _ref$steps === void 0 ? 4 : _ref$steps,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      _ref$withCaption = _ref.withCaption,
      withCaption = _ref$withCaption === void 0 ? false : _ref$withCaption,
      className = _ref.className,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'row' : _ref$direction,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var arr = (0, _toConsumableArray2["default"])(new Array(steps));
  var Component;

  if (direction === 'row') {
    Component = function Component() {
      return /*#__PURE__*/React.createElement(_styles.HorizontalWrapper, (0, _extends2["default"])({
        className: (0, _classnames["default"])("progress-stepper--skeleton size--".concat(size, " direction--").concat(direction), className)
      }, props, {
        ref: ref
      }), arr.map(function (item, index) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement(_styles.StepSkeleton, {
          key: "step--".concat(index)
        }, _Skeleton || (_Skeleton = /*#__PURE__*/React.createElement(_Skeleton4["default"], {
          variant: "circle",
          width: "2.5rem",
          height: "2.5rem",
          animate: animate,
          className: "indicator"
        })), _Skeleton2 || (_Skeleton2 = /*#__PURE__*/React.createElement(_Skeleton4["default"], {
          variant: "rect",
          width: "size_88",
          height: "size_16",
          animate: animate,
          className: "heading"
        })), withCaption ? _Skeleton3 || (_Skeleton3 = /*#__PURE__*/React.createElement(_Skeleton4["default"], {
          variant: "rect",
          width: "size_128",
          height: "size_14",
          animate: animate,
          className: "caption"
        })) : null), index !== 0 ? _div || (_div = /*#__PURE__*/React.createElement("div", {
          className: "progress-step-connector"
        }, /*#__PURE__*/React.createElement(_Skeleton4["default"], {
          variant: "rect",
          height: "size_2",
          width: "100%",
          animate: animate
        }))) : null);
      }));
    };
  } else {
    Component = function Component() {
      return /*#__PURE__*/React.createElement(_styles.VerticalWrapper, (0, _extends2["default"])({
        className: (0, _classnames["default"])("progress-stepper--skeleton size--".concat(size, " direction--").concat(direction), className)
      }, props, {
        ref: ref
      }), arr.map(function (item, index) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement(_styles.StepSkeleton, {
          key: "step--".concat(index),
          className: "skeleton--step"
        }, /*#__PURE__*/React.createElement(_Skeleton4["default"], {
          variant: "circle",
          width: size === 'large' ? '2.625rem' : '2.375rem',
          height: size === 'large' ? '2.625rem' : '2.375rem',
          animate: animate,
          className: "indicator"
        }), /*#__PURE__*/React.createElement("div", {
          className: "label-group"
        }, /*#__PURE__*/React.createElement(_Skeleton4["default"], {
          variant: "rect",
          width: "size_88",
          height: size === 'large' ? 'size_16' : 'size_14',
          animate: animate,
          className: "heading"
        }), withCaption ? /*#__PURE__*/React.createElement(_Skeleton4["default"], {
          variant: "rect",
          width: "size_128",
          height: size === 'large' ? 'size_14' : 'size_12',
          animate: animate,
          className: "caption"
        }) : null)), index !== 0 ? _div2 || (_div2 = /*#__PURE__*/React.createElement("div", {
          className: "progress-step-connector"
        }, /*#__PURE__*/React.createElement(_Skeleton4["default"], {
          variant: "rect",
          height: "100%",
          width: "size_2",
          animate: animate
        }))) : null);
      }));
    };
  }

  return /*#__PURE__*/React.createElement(Component, null);
});
exports.ProgressStepperSkeleton = ProgressStepperSkeleton;
ProgressStepperSkeleton.bdsName = 'ProgressStepperSkeleton';
var _default = ProgressStepperSkeleton;
exports["default"] = _default;
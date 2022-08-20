"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.StepperSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _ThemeProvider = require("../../ThemeProvider");

var _excluded = ["className", "shape", "hideButtons", "label", "animate", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React File Upload Skeleton
 */
var StepperSkeleton = /*#__PURE__*/React.forwardRef(function StepperSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$hideButtons = _ref.hideButtons,
      hideButtons = _ref$hideButtons === void 0 ? false : _ref$hideButtons,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? false : _ref$label,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      style = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'StepperSkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement("span", {
    className: "stepper--skeleton",
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      width: '10.125rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, !hideButtons ? /*#__PURE__*/React.createElement(_Skeleton["default"], {
    className: (0, _classnames["default"])('stepper--minus', className),
    variant: "rect",
    style: {
      marginRight: theme.sizes.size_1,
      minHeight: "calc(".concat(theme.sizes.size_52, " + ").concat(theme.sizes.size_2, ")"),
      minWidth: "calc(".concat(theme.sizes.size_52, " + ").concat(theme.sizes.size_2, ")")
    },
    shape: shape,
    animate: animate
  }) : null, /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('stepper--input', className),
    variant: "rect",
    shape: shape,
    style: (0, _extends2["default"])({
      minHeight: "calc(".concat(theme.sizes.size_52, " + ").concat(theme.sizes.size_2, ")"),
      minWidth: "calc(".concat(theme.sizes.size_52, " + ").concat(theme.sizes.size_2, ")")
    }, style),
    animate: animate
  }, props, {
    ref: ref
  })), !hideButtons ? /*#__PURE__*/React.createElement(_Skeleton["default"], {
    className: (0, _classnames["default"])('stepper--plus', className),
    variant: "rect",
    style: {
      marginLeft: theme.sizes.size_1,
      minHeight: "calc(".concat(theme.sizes.size_52, " + ").concat(theme.sizes.size_2, ")"),
      minWidth: "calc(".concat(theme.sizes.size_52, " + ").concat(theme.sizes.size_2, ")")
    },
    animate: animate,
    shape: shape
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(_Skeleton["default"], {
    className: (0, _classnames["default"])('stepper--label', className),
    variant: "text",
    style: {
      marginTop: theme.sizes.size_8,
      width: theme.sizes.size_84,
      height: theme.sizes.size_16
    },
    animate: animate,
    shape: shape
  })) : null);
});
exports.StepperSkeleton = StepperSkeleton;
StepperSkeleton.bdsName = 'StepperSkeleton';
var _default = StepperSkeleton;
exports["default"] = _default;
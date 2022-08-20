"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextAreaSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _ThemeProvider = require("../../ThemeProvider");

var _excluded = ["className", "shape", "animate", "rows", "helperText", "max"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Text Area Skeleton
 */
var TextAreaSkeleton = /*#__PURE__*/React.forwardRef(function TextAreaSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$rows = _ref.rows,
      rows = _ref$rows === void 0 ? 4 : _ref$rows,
      helperText = _ref.helperText,
      max = _ref.max,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'TextAreaSkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('textarea--skeleton', className),
    variant: "rect",
    shape: shape,
    animate: animate,
    height: "calc(".concat(rows > 1 ? rows + 1 : '0', ".5rem + ").concat(theme.sizes.size_32, ")")
  }, props, {
    ref: ref
  })), max || helperText ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginTop: theme.sizes.size_8,
      padding: "0 ".concat(theme.sizes.size_16)
    }
  }, helperText ? /*#__PURE__*/React.createElement(_Skeleton["default"], {
    className: "helper-text--skeleton",
    variant: "text",
    shape: shape,
    animate: animate,
    style: {
      width: '100%',
      "float": 'left'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }), max ? /*#__PURE__*/React.createElement(_Skeleton["default"], {
    className: "helper-counter--skeleton",
    variant: "text",
    shape: shape,
    animate: animate,
    style: {
      width: theme.sizes.size_44,
      marginLeft: helperText ? theme.sizes.size_16 : 0,
      "float": 'right'
    }
  }) : null) : null);
});
exports.TextAreaSkeleton = TextAreaSkeleton;
TextAreaSkeleton.bdsName = 'TextAreaSkeleton';
var _default = TextAreaSkeleton;
exports["default"] = _default;
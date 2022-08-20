"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FormHelperTextSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _ThemeProvider = require("../../ThemeProvider");

var _FormControl = require("../../FormControl");

var _excluded = ["className", "shape", "animate", "style", "indent"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Text Field Skeleton
 */
var FormHelperTextSkeleton = /*#__PURE__*/React.forwardRef(function FormHelperTextSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      style = _ref.style,
      indentProp = _ref.indent,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'TextField'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);

  var _useFormControl = (0, _FormControl.useFormControl)({
    noContext: true
  }),
      indent = _useFormControl.indent; // Props override calculated values


  if (indentProp !== undefined) indent = indentProp; // Default values

  if (indent === undefined) indent = 'size_16';
  return /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('helper-text--skeleton', className),
    variant: "text",
    shape: shape,
    animate: animate,
    height: "size_16",
    style: (0, _extends2["default"])({
      width: 'auto'
    }, indent ? {
      margin: "0 ".concat(typeof indent === 'string' ? theme.sizes[indent] : theme.sizes.size_16)
    } : {}, {
      marginTop: theme.sizes.size_8
    }, style)
  }, props, {
    ref: ref
  }));
});
exports.FormHelperTextSkeleton = FormHelperTextSkeleton;
FormHelperTextSkeleton.bdsName = 'FormHelperTextSkeleton';
var _default = FormHelperTextSkeleton;
exports["default"] = _default;
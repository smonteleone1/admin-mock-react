"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FileUploadSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _ThemeProvider = require("../../ThemeProvider");

var _excluded = ["className", "shape", "variant", "animate", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React File Upload Skeleton
 */
var FileUploadSkeleton = /*#__PURE__*/React.forwardRef(function FileUploadSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'button' : _ref$variant,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      style = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'FileUploadSkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);

  var input = function () {
    switch (variant) {
      case 'dropzone':
        return /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
          className: (0, _classnames["default"])("file-upload--dropzone variant--button", className),
          variant: "rect",
          shape: shape,
          animate: animate,
          height: "size_128",
          style: (0, _extends2["default"])({
            marginTop: theme.sizes.size_16
          }, style)
        }, props, {
          ref: ref
        }));

      case 'button':
      default:
        return /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
          className: (0, _classnames["default"])("file-upload--button variant--dropzone", className),
          variant: "rect",
          shape: shape,
          animate: animate,
          width: theme.sizes.size_84,
          height: "size_48",
          style: (0, _extends2["default"])({
            marginTop: theme.sizes.size_16
          }, style)
        }, props, {
          ref: ref
        }));
    }
  }();

  return /*#__PURE__*/React.createElement("div", {
    className: "file-upload--skeleton"
  }, /*#__PURE__*/React.createElement(_Skeleton["default"], {
    className: (0, _classnames["default"])('file-upload--title', className),
    variant: "text",
    shape: shape,
    animate: animate
  }), /*#__PURE__*/React.createElement(_Skeleton["default"], {
    className: (0, _classnames["default"])('file-upload--caption', className),
    variant: "text",
    shape: shape,
    animate: animate,
    style: {
      marginTop: theme.sizes.size_16
    }
  }), input);
});
exports.FileUploadSkeleton = FileUploadSkeleton;
FileUploadSkeleton.bdsName = 'FileUploadSkeleton';
var _default = FileUploadSkeleton;
exports["default"] = _default;
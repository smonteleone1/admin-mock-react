"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.IconButton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("../ThemeProvider");

var _IconButtonBase = _interopRequireDefault(require("./styles/IconButtonBase"));

var _excluded = ["children", "className", "variant", "shape", "color", "disabled", "size", "ariaTitle", "type"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Icon Button
 *
 * Used for display Icon-only buttons with proper squared spacing and size.
 * Utilizes `ButtonBase` found in `Button` styles for styling.
 */
var IconButton = /*#__PURE__*/React.forwardRef(function IconButton(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant,
      shapeProp = _ref.shape,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'interactive' : _ref$color,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$ariaTitle = _ref.ariaTitle,
      ariaTitle = _ref$ariaTitle === void 0 ? 'title' : _ref$ariaTitle,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'IconButton'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  /**
   * Layout:
   *
   *  <IconButtonBase>
   *      ...
   *  </IconButtonBase>
   */

  return /*#__PURE__*/React.createElement(_IconButtonBase["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('icon-button', className),
    variant: variant,
    color: color,
    shape: shape,
    disabled: disabled,
    size: size,
    "aria-label": ariaTitle,
    type: type
  }, props, {
    ref: ref
  }), children);
});
exports.IconButton = IconButton;
IconButton.bdsName = 'IconButton';
var _default = IconButton;
exports["default"] = _default;
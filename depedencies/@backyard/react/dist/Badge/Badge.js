"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Badge = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("../ThemeProvider");

var _BadgeWrapper = _interopRequireDefault(require("./styles/BadgeWrapper"));

var _excluded = ["children", "className", "color", "variant", "size", "bold", "arrow"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Badge
 *
 * Simple text component with uppercased text and large letter spacing
 *
 * The `display` prop can be used to change the CSS display of the wrapper
 * This is useful for changing from an `inline-flex` to a blocking `flex` if needed
 *
 *  <Badge>
 *      Placeholder
 *  </Badge>
 */
var Badge = /*#__PURE__*/React.forwardRef(function Badge(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'dark-blue' : _ref$color,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'filled' : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$bold = _ref.bold,
      bold = _ref$bold === void 0 ? false : _ref$bold,
      _ref$arrow = _ref.arrow,
      arrow = _ref$arrow === void 0 ? 'none' : _ref$arrow,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme
  var theme = (0, _ThemeProvider.useBackyardTheme)(); // Validate theme

  (0, _ThemeProvider.validateBackyardTheme)(theme, 'Badge');
  /**
   * Layout:
   *  <span wrapper>
   *      {children}
   *  </span>
   */

  return /*#__PURE__*/React.createElement(_BadgeWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('badge', className),
    arrow: arrow,
    ref: ref
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "badge-label variant--".concat(variant, " size--").concat(size, " color--").concat(color, " arrow--").concat(arrow) + (bold ? " bold" : "")
  }, children), arrow !== 'none' && variant === 'filled' ? /*#__PURE__*/React.createElement("span", {
    className: "arrow size--".concat(size)
  }) : null);
});
exports.Badge = Badge;
Badge.bdsName = 'Badge';
var _default = Badge;
exports["default"] = _default;
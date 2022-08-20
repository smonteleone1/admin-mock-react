"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Typography = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("../ThemeProvider");

var _Article = _interopRequireDefault(require("./Article"));

var _Caption = _interopRequireDefault(require("./Caption"));

var _Footnote = _interopRequireDefault(require("./Footnote"));

var _Headings = _interopRequireDefault(require("./Headings"));

var _Paragraph = _interopRequireDefault(require("./Paragraph"));

var _TypographyBase = require("./styles/TypographyBase");

var _excluded = ["className"],
    _excluded2 = ["className"],
    _excluded3 = ["className"],
    _excluded4 = ["className"],
    _excluded5 = ["align", "bold", "regular", "className", "color", "component", "display", "marginBottom", "variant"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Defines the possible variants of Typography
var variants = {
  // Web Headers
  // h1-h6 - medium on desktop, small on mobile
  h1: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_Headings["default"], (0, _extends2["default"])({
      level: 1
    }, props, {
      ref: ref
    }));
  }),
  h2: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_Headings["default"], (0, _extends2["default"])({
      level: 2
    }, props, {
      ref: ref
    }));
  }),
  h3: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_Headings["default"], (0, _extends2["default"])({
      level: 3
    }, props, {
      ref: ref
    }));
  }),
  h4: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_Headings["default"], (0, _extends2["default"])({
      level: 4
    }, props, {
      ref: ref
    }));
  }),
  h5: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_Headings["default"], (0, _extends2["default"])({
      level: 5
    }, props, {
      ref: ref
    }));
  }),
  h6: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_Headings["default"], (0, _extends2["default"])({
      level: 6
    }, props, {
      ref: ref
    }));
  }),
  // Body Text
  body: /*#__PURE__*/React.forwardRef(function (_ref, ref) {
    var className = _ref.className,
        props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
    return /*#__PURE__*/React.createElement(_Paragraph["default"], (0, _extends2["default"])({
      className: (0, _classnames["default"])(className, 'body_1')
    }, props, {
      ref: ref
    }));
  }),
  body_small: /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
    var className = _ref2.className,
        props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
    return /*#__PURE__*/React.createElement(_Paragraph["default"], (0, _extends2["default"])({
      className: (0, _classnames["default"])(className, 'body_2')
    }, props, {
      ref: ref
    }));
  }),
  // p - medium on desktop, small on mobile
  body_1: /*#__PURE__*/React.forwardRef(function (_ref3, ref) {
    var className = _ref3.className,
        props = (0, _objectWithoutProperties2["default"])(_ref3, _excluded3);
    return /*#__PURE__*/React.createElement(_Paragraph["default"], (0, _extends2["default"])({
      className: (0, _classnames["default"])(className, 'body_1')
    }, props, {
      ref: ref
    }));
  }),
  // p - small
  body_2: /*#__PURE__*/React.forwardRef(function (_ref4, ref) {
    var className = _ref4.className,
        props = (0, _objectWithoutProperties2["default"])(_ref4, _excluded4);
    return /*#__PURE__*/React.createElement(_Paragraph["default"], (0, _extends2["default"])({
      className: (0, _classnames["default"])(className, 'body_2')
    }, props, {
      ref: ref
    }));
  }),
  // Article Text
  // p - medium on desktop, small on mobile
  article: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_Article["default"], (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  }),
  // Caption Text
  // span - medium on desktop, small on mobile
  caption: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_Caption["default"], (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  }),
  // Footnote Text
  // span - medium on desktop, small on mobile
  footnote: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_Footnote["default"], (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  }),
  overline: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_TypographyBase.Overline, (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  }),
  // Misc
  // label - medium on desktop, small on mobile
  label: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_TypographyBase.Label, (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  }),
  // span - medium on desktop, small on mobile
  helper: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_TypographyBase.FormHelperText, (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  })
}; // For ease of use, maps some common names to tokens

var colors = {
  black: 'black',
  primary: 'text_primary',
  secondary: 'text_secondary',
  tertiary: 'text_tertiary',
  link: 'link',
  error: 'error',
  success: 'success',
  disabled: 'disabled',
  white: 'white'
};
/**
 * Gets color from map, else uses defined color
 *
 * @param {string} color
 */

var getColor = function getColor(color) {
  return colors[color] || color;
};
/**
 * Adds class to typography
 *
 * @param {string} key
 * @param {string} value
 */


var addClass = function addClass(key, value) {
  return value ? "".concat(key, "--").concat(value) : null;
};
/**
 * Backyard React Typography
 *
 * Combines all typographies into one React API
 *
 *  <Typography variant="body_small">This body text is always small</Typography>
 *
 *  <Typography variant="body">This body text is small on mobile, but medium on desktop</Typography>
 */


var Typography = /*#__PURE__*/React.forwardRef(function Typography(_ref5, ref) {
  var _ref5$align = _ref5.align,
      align = _ref5$align === void 0 ? 'left' : _ref5$align,
      _ref5$bold = _ref5.bold,
      bold = _ref5$bold === void 0 ? false : _ref5$bold,
      _ref5$regular = _ref5.regular,
      regular = _ref5$regular === void 0 ? false : _ref5$regular,
      className = _ref5.className,
      _ref5$color = _ref5.color,
      color = _ref5$color === void 0 ? 'primary' : _ref5$color,
      component = _ref5.component,
      display = _ref5.display,
      marginBottom = _ref5.marginBottom,
      _ref5$variant = _ref5.variant,
      variant = _ref5$variant === void 0 ? 'body_1' : _ref5$variant,
      props = (0, _objectWithoutProperties2["default"])(_ref5, _excluded5);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'Typography'); // Get component from variants, but default to span if not defined...

  var Component = component || variants[variant] || 'span';
  /**
   * Layout:
   *
   *  <Typography>
   *      ...
   *  </Typography>
   */

  return /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({
    className: (0, _classnames["default"])('typography', addClass('variant', variant), addClass('display', display), addClass('align', align), className, bold && "bold"),
    color: getColor(color),
    marginBottom: marginBottom,
    regular: regular
  }, props, {
    ref: ref
  }));
});
exports.Typography = Typography;
Typography.bdsName = 'Typography';
var _default = Typography;
exports["default"] = _default;
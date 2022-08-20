"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PathIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useBackyardTheme = _interopRequireDefault(require("@backyard/react/ThemeProvider/useBackyardTheme"));

var _styles = _interopRequireDefault(require("./styles"));

var _excluded = ["children", "color", "size", "viewBox", "overrideColor", "title", "className", "transform", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * SVG wrapper utility that provides a container for a given icon, svg path.
 * Additionally PathIcon provides some helper props to easily change the color, size, additional classnames
 * and a title for the Icon.
 *
 * ex:
 * ```
 *  <PathIcon
 *      color='interactive'
 *      size='S5'
 *      title='Circle'
 *  >
 *      <circle cx="50" cy="50" r="40" />
 *  </PathIcon>
 * ```
 */
var PathIcon = /*#__PURE__*/React.forwardRef(function PathIcon(_ref, ref) {
  var children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'text_solid' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'size_16' : _ref$size,
      _ref$viewBox = _ref.viewBox,
      viewBox = _ref$viewBox === void 0 ? '0 0 16 16' : _ref$viewBox,
      _ref$overrideColor = _ref.overrideColor,
      overrideColor = _ref$overrideColor === void 0 ? false : _ref$overrideColor,
      title = _ref.title,
      className = _ref.className,
      transform = _ref.transform,
      styleProp = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var theme = (0, _useBackyardTheme["default"])();
  var style = React.useMemo(function () {
    return (0, _extends2["default"])({
      '--style-icon-height': (theme === null || theme === void 0 ? void 0 : theme.sizes[size]) || size,
      '--style-icon-width': (theme === null || theme === void 0 ? void 0 : theme.sizes[size]) || size,
      '--style-icon-color': (theme === null || theme === void 0 ? void 0 : theme.color[color]) || color,
      transform: transform
    }, styleProp);
  }, [theme, transform, styleProp]);
  return /*#__PURE__*/React.createElement(_styles["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('icon', {
      'color-override': overrideColor
    }, className),
    viewBox: viewBox,
    "aria-hidden": title ? null : true,
    role: title ? 'img' : 'presentation',
    style: style
  }, props, {
    ref: ref
  }), title ? /*#__PURE__*/React.createElement("title", null, title) : null, children);
});
exports.PathIcon = PathIcon;
var _default = PathIcon;
exports["default"] = _default;
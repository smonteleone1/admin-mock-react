"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tooltip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("../ThemeProvider");

var _TooltipWrapper = _interopRequireDefault(require("./styles/TooltipWrapper"));

var _excluded = ["arrow", "arrowProps", "children", "className", "icon", "invisible", "shadow", "title", "variant", "shape", "width", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Tooltip
 *
 * @todo Comments
 */
var Tooltip = /*#__PURE__*/React.forwardRef(function Tooltip(_ref, ref) {
  var _ref$arrow = _ref.arrow,
      arrow = _ref$arrow === void 0 ? 'top' : _ref$arrow,
      arrowProps = _ref.arrowProps,
      children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      _ref$invisible = _ref.invisible,
      invisible = _ref$invisible === void 0 ? false : _ref$invisible,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? 'shadow_04' : _ref$shadow,
      title = _ref.title,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'low_contrast' : _ref$variant,
      shapeProp = _ref.shape,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'auto' : _ref$width,
      style = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Tooltip'
  }); // Backyard Context from Theme

  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Tooltip CSS vars

  var tooltipCSSVars = React.useMemo(function () {
    return {
      // Tooltip drop shadow
      '--style-tooltip-drop-shadow': (0, _ThemeProvider.dropShadow)(theme.shadows[shadow]),
      // Tooltip width
      '--style-tooltip-width': theme.sizes[width] || width,
      // Tooltip font family
      '--style-tooltip-font-family': theme.font.family[theme.context.font],
      // Tooltip font weight
      '--style-tooltip-font-weight': theme.context.font === 'roboto' ? theme.font.weight.medium : theme.font.weight.semibold
    };
  }, [theme.name, width, shadow]);
  /**
   * Layout:
   *  <div wrapper>
   *      <span icon />
   *      <span>
   *          <div title />
   *          <div subtitle />
   *      </span>
   *  </div>
   */

  return /*#__PURE__*/React.createElement(_TooltipWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("tooltip variant--".concat(variant, " shape--").concat(shape), className, invisible && "invisible"),
    style: (0, _extends2["default"])({}, tooltipCSSVars, style)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("span", {
    className: "tooltip-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "tooltip-title"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "tooltip-icon"
  }, icon) : null, title), /*#__PURE__*/React.createElement("div", {
    className: "tooltip-subtitle"
  }, children)), /*#__PURE__*/React.createElement("div", {
    className: "tooltip-background"
  }, arrow !== 'none' ? /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({
    className: "tooltip-arrow placement--".concat(arrow)
  }, arrowProps)) : null));
});
exports.Tooltip = Tooltip;
Tooltip.bdsName = 'Tooltip';
var _default = Tooltip;
exports["default"] = _default;
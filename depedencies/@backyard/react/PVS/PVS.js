"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PVS = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _isURL = _interopRequireDefault(require("validator/lib/isURL"));

var _CheckCircleFilled = require("@backyard/icons/CheckCircleFilled");

var _Radio = _interopRequireDefault(require("../Radio"));

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _TooltipPopper = _interopRequireDefault(require("../TooltipPopper"));

var _ThemeProvider = require("../ThemeProvider");

var _PVSWrapper = _interopRequireDefault(require("./styles/PVSWrapper"));

var _excluded = ["className", "fill", "unavailable", "checked", "defaultChecked", "color", "title", "name", "value", "onChange", "tooltipProps", "popoverProps", "popperProps", "wrapperProps", "inputClassName", "id"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var badgeColorMap = {
  interactive: 'action_interactive',
  green: 'action_green'
};
/**
 * Backyard PVS component
 * Also known as a swatch selector.
 *
 * The PVS component allows the user to choose between various textures or colors offered for a particular item.
 * It provides a quick view of what options are available, and typically changes the relevant images to reflect
 * the changes made from the PVS selector.
 *
 * Only one option in a PVS may be selected at a time. Essentially, the swatches function as a radio button but
 * with images/color swatches included for a quick preview.
 *
 * The name of the swatch is visible on hover through a tooltip.
 *
 * ex.
 * <RadioGroup
 *      direction="row"
 *      defaultValue="crema-oak">
 *     <PVS
 *          value="natural-oak"
 *          title="Natural Oak"
 *          fill="https://lda.lowes.com/is/image/Lowes/7391753008645_swatch"
 *          color="green"
 *     />
 *     <PVS
 *          value="cambridge-abbey-oak"
 *          title="Cambridge Abbey Oak"
 *          fill="https://lda.lowes.com/is/image/Lowes/1000128595_swatch"
 *          color="green"
 *     />
 *     <PVS
 *          value="crema-oak"
 *          title="Crema Oak"
 *          fill="https://lda.lowes.com/is/image/Lowes/7391753349960_swatch"
 *          color="green"
 *     />
 *     <PVS
 *          value="black"
 *          fill="#000"
 *          unavailable
 *          title="Black"
 *          color="green"
 *     />
 *     <PVS
 *          value="white"
 *          fill="#ffffff"
 *          title="White"
 *          color="green" />
 * </RadioGroup>
 */

var PVS = /*#__PURE__*/React.forwardRef(function PVS(_ref, ref) {
  var className = _ref.className,
      fill = _ref.fill,
      unavailable = _ref.unavailable,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'interactive' : _ref$color,
      title = _ref.title,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange,
      _ref$tooltipProps = _ref.tooltipProps,
      tooltipProps = _ref$tooltipProps === void 0 ? {} : _ref$tooltipProps,
      _ref$popoverProps = _ref.popoverProps,
      popoverProps = _ref$popoverProps === void 0 ? {} : _ref$popoverProps,
      _ref$popperProps = _ref.popperProps,
      popperProps = _ref$popperProps === void 0 ? {} : _ref$popperProps,
      _ref$wrapperProps = _ref.wrapperProps,
      wrapperProps = _ref$wrapperProps === void 0 ? {} : _ref$wrapperProps,
      inputClassName = _ref.inputClassName,
      id = _ref.id,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  (0, _ThemeProvider.validateBackyardTheme)(theme, 'PVS'); // Checks if `fill` prop is a URL

  var isFillURL = (0, _isURL["default"])(fill, {
    // protocols - valid protocols can be modified with this option
    protocols: ['http', 'https'],
    require_tld: true,
    // require_protocol - if set as true isURL will return false if protocol is not present in the URL
    require_protocol: false,
    // require_host - if set as false isURL will not check if host is present in the URL
    require_host: true,
    // require_valid_protocol - isURL will check if the URL's protocol is present in the protocols option
    require_valid_protocol: true,
    allow_underscores: false,
    allow_trailing_dot: false,
    // allow_protocol_relative_urls - if set as true protocol relative URLs will be allowed
    allow_protocol_relative_urls: false
  });
  var pvsTemplate = /*#__PURE__*/React.createElement(_PVSWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('pvs-wrapper', className)
  }, wrapperProps), /*#__PURE__*/React.createElement(_Radio["default"], (0, _extends2["default"])({
    id: "pvs--".concat(value),
    className: inputClassName,
    checked: checked,
    defaultChecked: defaultChecked,
    name: "pvs--".concat(value),
    value: value,
    wrapperProps: {
      className: 'pvs-input' + (unavailable ? " unavailable" : "")
    },
    onChange: onChange
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("div", {
    className: "swatch",
    style: {
      backgroundColor: isFillURL ? 'transparent' : fill
    }
  }, isFillURL ? /*#__PURE__*/React.createElement("img", {
    src: fill,
    alt: title,
    height: "50",
    width: "50"
  }) : null, /*#__PURE__*/React.createElement(_CheckCircleFilled.CheckCircleFilled, {
    className: "selected-badge",
    size: "size_16",
    color: unavailable ? 'disabled' : badgeColorMap[color]
  }))));
  return /*#__PURE__*/React.createElement(React.Fragment, null, title ? /*#__PURE__*/React.createElement(_TooltipPopper["default"], (0, _extends2["default"])({
    tooltip: /*#__PURE__*/React.createElement(_Tooltip["default"], tooltipProps, title)
  }, popoverProps, popperProps), pvsTemplate) : pvsTemplate);
});
exports.PVS = PVS;
PVS.bdsName = 'PVS';
var _default = PVS;
exports["default"] = _default;
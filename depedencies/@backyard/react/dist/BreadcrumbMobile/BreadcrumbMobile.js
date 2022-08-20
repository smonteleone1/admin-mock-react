"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CrumbMobile = exports.BreadcrumbMobile = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Dots2 = _interopRequireDefault(require("@backyard/icons/Dots"));

var _ArrowLeft2 = _interopRequireDefault(require("@backyard/icons/ArrowLeft"));

var _Link = _interopRequireDefault(require("../Link"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _MenuPopover = _interopRequireDefault(require("../MenuPopover"));

var _IconButton2 = _interopRequireDefault(require("../IconButton"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _ThemeProvider = require("../ThemeProvider");

var _BreadcrumbMobileBase = _interopRequireDefault(require("./styles/BreadcrumbMobileBase"));

var _ArrowLeft, _Dots;

var _excluded = ["className", "label"],
    _excluded2 = ["ariaLabel", "crumbs", "crumb", "className", "menuProps", "menuPopoverProps", "disabled", "open", "toggle"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CrumbMobile = /*#__PURE__*/React.forwardRef(function Crumb(_ref, ref) {
  var className = _ref.className,
      label = _ref.label,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_MenuItem["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("crumb crumb-mobile", className),
    iconBefore: _ArrowLeft || (_ArrowLeft = /*#__PURE__*/React.createElement(_ArrowLeft2["default"], null)),
    variant: "inverse",
    color: "interactive",
    shape: "squared",
    as: _Link["default"]
  }, props, {
    ref: ref
  }), label);
});
/**
 * Backyard React Breadcrumb Mobile
 *
 * Mobile-only version of `Breadcrumb`
 */

exports.CrumbMobile = CrumbMobile;
var BreadcrumbMobile = /*#__PURE__*/React.forwardRef(function BreadcrumMobile(_ref2, ref) {
  var _IconButton;

  var _ref2$ariaLabel = _ref2.ariaLabel,
      ariaLabel = _ref2$ariaLabel === void 0 ? 'Breadcrumb' : _ref2$ariaLabel,
      crumbs = _ref2.crumbs,
      _ref2$crumb = _ref2.crumb,
      CrumbComponent = _ref2$crumb === void 0 ? CrumbMobile : _ref2$crumb,
      className = _ref2.className,
      menuProps = _ref2.menuProps,
      menuPopoverProps = _ref2.menuPopoverProps,
      _ref2$disabled = _ref2.disabled,
      disabledProp = _ref2$disabled === void 0 ? false : _ref2$disabled,
      _ref2$open = _ref2.open,
      openProp = _ref2$open === void 0 ? false : _ref2$open,
      toggleProp = _ref2.toggle,
      props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
  // Get Backyard Theme
  var theme = (0, _ThemeProvider.useBackyardTheme)(); // Validate theme hook

  (0, _ThemeProvider.validateBackyardTheme)(theme, 'BreadcrumbMobile'); // Memoize context props

  var _React$useMemo = React.useMemo(function () {
    return {
      disabled: disabledProp,
      open: openProp
    };
  }, [openProp]),
      disabled = _React$useMemo.disabled,
      open = _React$useMemo.open; // Last crumb is current crum


  var currentCrumb = React.useMemo(function () {
    return crumbs[crumbs.length - 1];
  }, [crumbs]); // Each crumb...

  var items = React.useMemo(function () {
    return crumbs // Remove last (current) crumb
    .slice(0, crumbs.length - 1) // Map to rendered crumb components
    .map(function (crumb, index) {
      return /*#__PURE__*/React.createElement(CrumbComponent, (0, _extends2["default"])({
        key: index
      }, crumb));
    }) // Reverse crumbs in mobile popover
    .reverse();
  }, [crumbs, CrumbComponent]); // Render toggle component

  var toggle = React.useMemo(function () {
    return (// IconButton by default
      toggleProp || _IconButton || (_IconButton = /*#__PURE__*/React.createElement(_IconButton2["default"], {
        disabled: disabled,
        size: "small",
        variant: "inverse",
        color: "interactive"
      }, _Dots || (_Dots = /*#__PURE__*/React.createElement(_Dots2["default"], null))))
    );
  }, [toggleProp, disabled]);
  return /*#__PURE__*/React.createElement(_BreadcrumbMobileBase["default"], (0, _extends2["default"])({
    "aria-label": ariaLabel,
    className: (0, _classnames["default"])('breadcrumb', className)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(_MenuPopover["default"], (0, _extends2["default"])({
    open: open,
    menu: /*#__PURE__*/React.createElement(_Menu["default"], (0, _extends2["default"])({
      width: "17.5rem"
    }, menuProps), items)
  }, menuPopoverProps), toggle), /*#__PURE__*/React.createElement(_Typography["default"], (0, _extends2["default"])({
    className: "crumb-current",
    variant: "body_1",
    color: "text_secondary",
    "aria-current": "page",
    bold: true
  }, currentCrumb), currentCrumb.label));
});
exports.BreadcrumbMobile = BreadcrumbMobile;
CrumbMobile.bdsName = 'CrumbMobile';
BreadcrumbMobile.bdsName = 'BreadcrumbMobile';
var _default = BreadcrumbMobile;
exports["default"] = _default;
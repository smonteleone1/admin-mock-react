"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CrumbDesktop = exports.BreadcrumbDesktop = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Link = _interopRequireDefault(require("../Link"));

var _ThemeProvider = require("../ThemeProvider");

var _BreadcrumbDesktopBase = _interopRequireDefault(require("./styles/BreadcrumbDesktopBase"));

var _excluded = ["className", "label"],
    _excluded2 = ["ariaLabel", "crumbs", "crumb", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var CrumbDesktop = /*#__PURE__*/React.forwardRef(function Crumb(_ref, ref) {
  var className = _ref.className,
      label = _ref.label,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(_Link["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("crumb crumb-desktop", className)
  }, props, {
    ref: ref
  }), label));
});
exports.CrumbDesktop = CrumbDesktop;
var BreadcrumbDesktop = /*#__PURE__*/React.forwardRef(function Breadcrumb(_ref2, ref) {
  var _ref2$ariaLabel = _ref2.ariaLabel,
      ariaLabel = _ref2$ariaLabel === void 0 ? 'Breadcrumb' : _ref2$ariaLabel,
      crumbs = _ref2.crumbs,
      _ref2$crumb = _ref2.crumb,
      CrumbComponent = _ref2$crumb === void 0 ? CrumbDesktop : _ref2$crumb,
      className = _ref2.className,
      props = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2);
  // Get Backyard Theme
  var theme = (0, _ThemeProvider.useBackyardTheme)(); // Validate theme hook

  (0, _ThemeProvider.validateBackyardTheme)(theme, 'BreadcrumbDesktop');
  var items = React.useMemo(function () {
    return crumbs.map(function (crumb, index) {
      return /*#__PURE__*/React.createElement(CrumbComponent, (0, _extends2["default"])({
        key: index
      }, index === crumbs.length - 1 ? {
        color: 'primary',
        'aria-current': 'page'
      } : {
        bold: true,
        underline: 'hover',
        color: 'interactive'
      }, crumb));
    });
  }, [crumbs, CrumbComponent]);
  return /*#__PURE__*/React.createElement(_BreadcrumbDesktopBase["default"], (0, _extends2["default"])({
    "aria-label": ariaLabel,
    className: (0, _classnames["default"])('breadcrumb-desktop', className),
    ref: ref
  }, props), /*#__PURE__*/React.createElement("ol", null, items));
});
exports.BreadcrumbDesktop = BreadcrumbDesktop;
CrumbDesktop.bdsName = 'CrumbDesktop';
BreadcrumbDesktop.bdsName = 'BreadcrumbDesktop';
var _default = BreadcrumbDesktop;
exports["default"] = _default;
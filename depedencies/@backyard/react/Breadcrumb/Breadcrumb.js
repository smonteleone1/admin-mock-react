"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Breadcrumb = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("../ThemeProvider");

var _BreadcrumbDesktop = _interopRequireDefault(require("../BreadcrumbDesktop"));

var _BreadcrumbMobile = _interopRequireDefault(require("../BreadcrumbMobile"));

var _excluded = ["className", "render"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Breadcrumb = /*#__PURE__*/React.forwardRef(function Breadcrumb(_ref, ref) {
  var className = _ref.className,
      _ref$render = _ref.render,
      render = _ref$render === void 0 ? 'auto' : _ref$render,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme
  var theme = (0, _ThemeProvider.useBackyardTheme)();
  var isMobile = theme.isMobile; // Validate theme hook

  (0, _ThemeProvider.validateBackyardTheme)(theme, 'Breadcrumb'); // Memoize component on render

  var BreadcrumbComponent = React.useMemo(function () {
    // Switch on `render`
    switch (render) {
      // Case desktop,
      case 'desktop':
        // Render Breadcrumb Desktop,
        return _BreadcrumbDesktop["default"];
      // Case mobile,

      case 'mobile':
        // Render Breadcrumb Mobile
        return _BreadcrumbMobile["default"];
      // Auto or default,

      case 'auto':
      default:
        // Render Breadcrumb Mobile if mobile viewport, else Desktop
        return isMobile ? _BreadcrumbMobile["default"] : _BreadcrumbDesktop["default"];
    }
  }, [render]);
  return /*#__PURE__*/React.createElement(BreadcrumbComponent, (0, _extends2["default"])({
    className: (0, _classnames["default"])("breadcrumb render--".concat(render), className)
  }, props, {
    ref: ref
  }));
});
exports.Breadcrumb = Breadcrumb;
Breadcrumb.bdsName = 'Breadcrumb';
var _default = Breadcrumb;
exports["default"] = _default;
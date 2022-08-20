"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BreadcrumbSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BreadcrumbDesktopSkeleton = _interopRequireDefault(require("../../BreadcrumbDesktop/BreadcrumbDesktopSkeleton"));

var _BreadcrumbMobileSkeleton = _interopRequireDefault(require("../../BreadcrumbMobile/BreadcrumbMobileSkeleton"));

var _useBackyardTheme = _interopRequireDefault(require("../../ThemeProvider/useBackyardTheme"));

var _excluded = ["className", "render"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var BreadcrumbSkeleton = /*#__PURE__*/React.forwardRef(function BreadcrumbSkeleton(_ref, ref) {
  var className = _ref.className,
      _ref$render = _ref.render,
      render = _ref$render === void 0 ? 'auto' : _ref$render,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var theme = (0, _useBackyardTheme["default"])();
  var isMobile = theme.isMobile;
  var BreadcrumbSkeletonComponent = React.useMemo(function () {
    switch (render) {
      case 'desktop':
        return _BreadcrumbDesktopSkeleton["default"];

      case 'mobile':
        return _BreadcrumbMobileSkeleton["default"];

      case 'auto':
      default:
        return isMobile ? _BreadcrumbMobileSkeleton["default"] : _BreadcrumbDesktopSkeleton["default"];
    }
  }, [render]);
  return /*#__PURE__*/React.createElement(BreadcrumbSkeletonComponent, (0, _extends2["default"])({
    className: (0, _classnames["default"])(className, 'breadcrumb--skeleton')
  }, props, {
    ref: ref
  }));
});
exports.BreadcrumbSkeleton = BreadcrumbSkeleton;
BreadcrumbSkeleton.bdsName = 'BreadcrumbSkeleton';
var _default = BreadcrumbSkeleton;
exports["default"] = _default;
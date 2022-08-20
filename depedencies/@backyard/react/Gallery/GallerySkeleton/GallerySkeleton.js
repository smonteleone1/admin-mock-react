"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.GallerySkeleton = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _ThemeProvider = require("../../ThemeProvider");

var _excluded = ["className", "shape", "animate", "thumbnails"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Gallery Skeleton
 */
var GallerySkeleton = /*#__PURE__*/React.forwardRef(function GallerySkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$thumbnails = _ref.thumbnails,
      thumbnails = _ref$thumbnails === void 0 ? 5 : _ref$thumbnails,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'GallerySkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])('gallery--skeleton', className)
  }, /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
    variant: "rect",
    shape: shape,
    animate: animate,
    width: "100%",
    height: "32rem"
  }, props, {
    ref: ref
  })), thumbnails > 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginTop: theme.sizes.size_16,
      justifyContent: theme.isMobile ? 'center' : 'flex-start'
    }
  }, (0, _toConsumableArray2["default"])(new Array(thumbnails || 0)).map(function (_, index) {
    return theme.isDesktop ? /*#__PURE__*/React.createElement(_Skeleton["default"], {
      key: index,
      variant: "rect",
      shape: shape,
      animate: animate,
      width: "4.625rem",
      height: "4.625rem",
      style: {
        marginRight: index < thumbnails - 1 ? theme.sizes.size_12 : 0
      }
    }) : /*#__PURE__*/React.createElement(_Skeleton["default"], {
      key: index,
      variant: "circle",
      shape: shape,
      animate: animate,
      style: {
        minHeight: theme.sizes.size_16,
        minWidth: theme.sizes.size_16,
        marginRight: index < thumbnails - 1 ? theme.sizes.size_12 : 0
      }
    });
  })) : null);
});
exports.GallerySkeleton = GallerySkeleton;
GallerySkeleton.bdsName = 'GallerySkeleton';
var _default = GallerySkeleton;
exports["default"] = _default;
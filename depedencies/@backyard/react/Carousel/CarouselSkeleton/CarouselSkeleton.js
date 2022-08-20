"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CarouselSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _ThemeProvider = require("../../ThemeProvider");

var _excluded = ["className", "shape", "hideButtons", "hideScrollbar", "animate"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Carousel Skeleton
 */
var CarouselSkeleton = /*#__PURE__*/React.forwardRef(function CarouselSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$hideButtons = _ref.hideButtons,
      hideButtons = _ref$hideButtons === void 0 ? false : _ref$hideButtons,
      _ref$hideScrollbar = _ref.hideScrollbar,
      hideScrollbar = _ref$hideScrollbar === void 0 ? false : _ref$hideScrollbar,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'CarouselSkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement("div", {
    className: (0, _classnames["default"])('carousel--skeleton', className)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, !hideButtons ? /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "circle",
    shape: shape,
    animate: animate,
    style: {
      minWidth: '2.625rem',
      minHeight: '2.625rem',
      marginRight: theme.sizes.size_8
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
    variant: "rect",
    shape: shape,
    animate: animate,
    width: "100%",
    height: "20.5rem"
  }, props, {
    ref: ref
  })), !hideScrollbar ? /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "rect",
    shape: shape,
    animate: animate,
    width: "100%",
    height: theme.sizes.size_4,
    style: {
      marginTop: theme.sizes.size_32
    }
  }) : null), !hideButtons ? /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "circle",
    shape: shape,
    animate: animate,
    style: {
      minWidth: '2.625rem',
      minHeight: '2.625rem',
      marginLeft: theme.sizes.size_8
    }
  }) : null));
});
exports.CarouselSkeleton = CarouselSkeleton;
CarouselSkeleton.bdsName = 'CarouselSkeleton';
var _default = CarouselSkeleton;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RatingSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _excluded = ["size", "withValue", "animate", "classNames"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard's Ratings Skeleton component
 * 
 * Returns a set of Skeleton circles which each has a size determined
 * by the value of the size prop. Optional paramter of `withValue` to
 * determine if a Skeleton rect for a value should be shown. The label
 * shows scales in size determined by the value of the size prop also.
 * 
 * <RatingSkeleton />
 */
var RatingSkeleton = /*#__PURE__*/React.forwardRef(function RatingSkeleton(_ref, ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$withValue = _ref.withValue,
      withValue = _ref$withValue === void 0 ? false : _ref$withValue,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      classNames = _ref.classNames,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var starHeight = 'size_16';
  var starWidth = 'size_16';
  var textHeight = 'size_20';
  var textWidth = 'size_32';

  switch (size) {
    case 'jumbo':
      starHeight = 'size_32';
      starWidth = 'size_32';
      textHeight = 'size_28';
      textWidth = 'size_44';
      break;

    case 'large':
      starHeight = 'size_24';
      starWidth = 'size_24';
      textHeight = 'size_24';
      textWidth = 'size_36';
      break;

    case 'small':
      textHeight = 'size_18';
      textWidth = 'size_28';
      break;

    default:
      starHeight = 'size_24';
      starWidth = 'size_24';
      textHeight = 'size_24';
      textWidth = 'size_36';
      break;
  }

  return /*#__PURE__*/React.createElement(_styles.RatingSkeletonWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])("rating--skeleton size--".concat(size), classNames)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "circle",
    height: starHeight,
    width: starWidth,
    animate: animate
  }), /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "circle",
    height: starHeight,
    width: starWidth,
    animate: animate
  }), /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "circle",
    height: starHeight,
    width: starWidth,
    animate: animate
  }), /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "circle",
    height: starHeight,
    width: starWidth,
    animate: animate
  }), /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "circle",
    height: starHeight,
    width: starWidth,
    animate: animate
  }), withValue ? /*#__PURE__*/React.createElement(_Skeleton["default"], {
    variant: "rect",
    height: textHeight,
    width: textWidth,
    animate: animate
  }) : null);
});
exports.RatingSkeleton = RatingSkeleton;
RatingSkeleton.bdsName = 'RatingSkeleton';
var _default = RatingSkeleton;
exports["default"] = _default;
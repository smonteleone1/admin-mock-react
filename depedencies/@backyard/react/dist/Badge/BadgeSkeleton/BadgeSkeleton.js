"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BadgeSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _excluded = ["animate", "width", "size", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backard BadgeSkeleton component.
 * Returns the skeleton state of the badge element with a defined height
 * and a variable width. The width should be set to the width of the
 * badge component in the designs. Take badge width and divide by 16
 * (ie. 112/16 = 7, so width would be 7rem)
 * 
 * <BadgeSkeleton />
*/
var BadgeSkeleton = /*#__PURE__*/React.forwardRef(function BadgeSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      width = _ref.width,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  /**
   * Returns a rectagle with a specific height and the desired width.
   * By default, width is 7rem (112px) but this scan be changed depending
   * on the width of the badge text in your design.
   */
  return /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
    variant: "rect",
    width: width || '7rem',
    height: size === 'medium' ? '1.5rem' : '2.5rem',
    animate: animate,
    className: (0, _classnames["default"])(className, 'badge--skeleton')
  }, props, {
    ref: ref
  }));
});
exports.BadgeSkeleton = BadgeSkeleton;
BadgeSkeleton.bdsName = 'BadgeSkeleton';
var _default = BadgeSkeleton;
exports["default"] = _default;
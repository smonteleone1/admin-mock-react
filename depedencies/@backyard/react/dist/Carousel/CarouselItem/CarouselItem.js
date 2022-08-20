"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CarouselItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _CarouselItemWrapper = _interopRequireDefault(require("./styles/CarouselItemWrapper"));

var _excluded = ["children", "padding"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Wrapper for content that is to be included within the Carousel component.
 *
 * ex.
 * <CarouselItem>
 *     <Button>Button 1</Button>
 * </CarouselItem>
 */
var CarouselItem = /*#__PURE__*/React.forwardRef(function CarouselItem(_ref, ref) {
  var children = _ref.children,
      _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? 'size_16' : _ref$padding,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/React.createElement(_CarouselItemWrapper["default"], (0, _extends2["default"])({
    className: "carousel-item",
    padding: padding
  }, props, {
    ref: ref
  }), children);
});
exports.CarouselItem = CarouselItem;
process.env.NODE_ENV !== "production" ? CarouselItem.propTypes = {
  padding: _propTypes["default"].oneOfType([_propTypes["default"].oneOf(['none']), _propTypes["default"].any, _propTypes["default"].string])
} : void 0;
var _default = CarouselItem;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ToggleSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _excluded = ["animate", "className", "instances", "size"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyards ToggleSkeleton component
 * 
 * Returns a Skeleton rect with a predefined height related to
 * the value of the size prop. Defauts to a 2 button instance of
 * a toggle but can be overwritten to contain more button instances.
 * Each increase of the button instances will increase the width
 * of the component.
 * 
 * <ToggleSkeleton />
 */
var ToggleSkeleton = /*#__PURE__*/React.forwardRef(function ToggleSkeleton(_ref, ref) {
  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      className = _ref.className,
      _ref$instances = _ref.instances,
      instances = _ref$instances === void 0 ? 2 : _ref$instances,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var height = '';

  switch (size) {
    case 'small':
      height = '2.375rem';
      break;

    case 'large':
      height = '3.375rem';
      break;

    default:
      height = '2.875rem';
  }

  return /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("toggle--skeleton size--".concat(size), className),
    variant: "rect",
    width: "".concat(parseFloat(height) * instances, "rem"),
    height: height,
    animate: animate
  }, props, {
    ref: ref
  }));
});
exports.ToggleSkeleton = ToggleSkeleton;
ToggleSkeleton.bdsName = 'ToggleSkeleton';
var _default = ToggleSkeleton;
exports["default"] = _default;
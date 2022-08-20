"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PVSSkeleton = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Skeleton = _interopRequireDefault(require("../../Skeleton"));

var _excluded = ["items", "animate", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyards PVSSkeleton component
 * 
 * Returns a series of Skeleton circles based on the value of the
 * items prop. Sizing and spacing of each swatch matches that of the
 * default PVS component.
 * 
 * <PVSSkeleton />
 */
var PVSSkeleton = /*#__PURE__*/React.forwardRef(function PVSSkeleton(_ref, ref) {
  var _ref$items = _ref.items,
      items = _ref$items === void 0 ? 1 : _ref$items,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var circles = (0, _toConsumableArray2["default"])(new Array(items));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'row'
    },
    className: (0, _classnames["default"])(className, 'pvs--skeleton')
  }, circles.map(function (item, index) {
    return /*#__PURE__*/React.createElement(_Skeleton["default"], (0, _extends2["default"])({
      key: "skeleton-".concat(index),
      variant: "circle",
      height: "size_40",
      width: "size_40",
      animate: animate,
      style: {
        margin: '0.5rem',
        display: 'inline-block'
      }
    }, props, {
      ref: ref
    }));
  }));
});
exports.PVSSkeleton = PVSSkeleton;
PVSSkeleton.bdsName = 'PVSSkeleton';
var _default = PVSSkeleton;
exports["default"] = _default;
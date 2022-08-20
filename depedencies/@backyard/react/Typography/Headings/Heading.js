"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Heading = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _styles = require("./styles");

var _excluded = ["children", "level", "regular"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var variants = {
  1: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_styles.H1, (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  }),
  2: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_styles.H2, (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  }),
  3: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_styles.H3, (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  }),
  4: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_styles.H4, (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  }),
  5: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_styles.H5, (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  }),
  6: /*#__PURE__*/React.forwardRef(function (props, ref) {
    return /*#__PURE__*/React.createElement(_styles.H6, (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  })
};
/**
 * Backyard React Heading
 *
 * Internal Component for Typography
 */

var Heading = /*#__PURE__*/React.forwardRef(function Heading(_ref, ref) {
  var children = _ref.children,
      _ref$level = _ref.level,
      level = _ref$level === void 0 ? 1 : _ref$level,
      regular = _ref.regular,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var Component = variants[level] || variants[1];
  return /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({
    regular: regular
  }, props, {
    ref: ref
  }), children);
});
exports.Heading = Heading;
Heading.bdsName = 'Heading';
var _default = Heading;
exports["default"] = _default;
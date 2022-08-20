"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ButtonGroup = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("../ThemeProvider");

var _ButtonGroupWrapper = _interopRequireDefault(require("./style/ButtonGroupWrapper"));

var _excluded = ["className", "children", "color", "size", "variant", "shape"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React ButtonGroup
 */
var ButtonGroup = /*#__PURE__*/React.forwardRef(function ButtonGroup(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'interactive' : _ref$color,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'secodnary' : _ref$variant,
      shapeProp = _ref.shape,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'ButtonGroup'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  /**
   * Layout:
   *
   * <div wrapper>
   *  <children />
   * </div wrapper>
   */

  return /*#__PURE__*/React.createElement(_ButtonGroupWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("button-group color--".concat(color, " shape--").concat(shape, " variant--").concat(variant), className),
    color: color
  }, props, {
    ref: ref
  }), React.Children.map(children, function (child) {
    return /*#__PURE__*/React.cloneElement(child, (0, _extends2["default"])({
      color: color,
      size: size,
      variant: 'ghost',
      shape: 'rounded',
      type: 'button'
    }, child.props));
  }));
});
exports.ButtonGroup = ButtonGroup;
ButtonGroup.bdsName = 'ButtonGroup';
var _default = ButtonGroup;
exports["default"] = _default;
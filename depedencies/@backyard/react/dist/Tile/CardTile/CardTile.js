"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CardTile = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("../../ThemeProvider");

var _TileWrapper = _interopRequireDefault(require("../styles/TileWrapper"));

var _excluded = ["className", "children", "color", "shape", "disabled"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Tiles are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should
 * be placed on them in a way that clearly indicates hierarchy.
 *
 * Since this component is just a wrapper you can place interactive elements within like
 * buttons and links if you so desire.
 *
 * note: The white background variation is to be used when there are pictures being included on the tile(s). If it
 * is part of a set, all the tiles should be of the same variation.
 *
 * example:
 * <CardTile>
 *     <span>Hello World</span>
 *     <Button>Button</Button>
 * </CardTile>
 */
var CardTile = /*#__PURE__*/React.forwardRef(function CardTile(_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'surface' : _ref$color,
      shapeProp = _ref.shape,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'CardTile'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(_TileWrapper["default"], (0, _extends2["default"])({
    as: "div",
    className: (0, _classnames["default"])("color--".concat(color, " shape--").concat(shape, " type--card"), className, className, disabled && "disabled"),
    "aria-disabled": disabled,
    type: "card"
  }, props, {
    ref: ref
  }), children);
});
exports.CardTile = CardTile;
CardTile.bdsName = 'CardTile';
var _default = CardTile;
exports["default"] = _default;
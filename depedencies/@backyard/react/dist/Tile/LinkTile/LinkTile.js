"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.LinkTile = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _LinkIcon2 = _interopRequireDefault(require("@backyard/icons/LinkIcon"));

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _ThemeProvider = require("../../ThemeProvider");

var _TileWrapper = _interopRequireDefault(require("../styles/TileWrapper"));

var _LinkIcon;

var _excluded = ["children", "className", "href", "disabled", "color", "shape", "icon", "disableIcon"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Tiles are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should
 * be placed on them in a way that clearly indicates hierarchy.
 *
 * This type of Tile contains links to external sites or sections of the page that are navigated to when selected.
 * The entire surface of the tile is selectable, which prevents additional links from being included within the content.
 *
 * note: The 'outlined' variation is to be used when there are pictures being included on the tile(s).
 *
 * example:
 * <LinkTile href='www.lowes.com'>
 *     <span>Hello World</span>
 * </LinkTile>
 */
var LinkTile = /*#__PURE__*/React.forwardRef(function LinkTile(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      href = _ref.href,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'surface' : _ref$color,
      shapeProp = _ref.shape,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? _LinkIcon || (_LinkIcon = /*#__PURE__*/React.createElement(_LinkIcon2["default"], null)) : _ref$icon,
      disableIcon = _ref.disableIcon,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'LinkTile'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // sets href if it exists or the tile isn't disabled

  var getHref = href && !disabled ? href : null;
  return /*#__PURE__*/React.createElement(_TileWrapper["default"], (0, _extends2["default"])({
    as: "a",
    className: (0, _classnames["default"])("color--".concat(color, " shape--").concat(shape, " type--link"), className, className, disabled && "disabled"),
    "aria-disabled": disabled,
    type: "link",
    href: getHref
  }, props, {
    ref: ref
  }), children, disableIcon ? null : /*#__PURE__*/React.createElement("div", {
    className: "tile-icon"
  }, icon));
});
exports.LinkTile = LinkTile;
LinkTile.bdsName = 'LinkTile';
var _default = LinkTile;
exports["default"] = _default;
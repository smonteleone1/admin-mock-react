"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tile = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("../ThemeProvider");

var _CardTile = _interopRequireDefault(require("./CardTile"));

var _LinkTile = _interopRequireDefault(require("./LinkTile"));

var _RadioTile = _interopRequireDefault(require("./RadioTile"));

var _excluded = ["variant", "shape", "className", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Tiles are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should be
 * placed on them in a way that clearly indicates hierarchy.
 *
 * Tiles may be links to external sites, if selected, or used as a static element on the page that functions
 * like a radio button.
 *
 * The entire surface of the tile is selectable, which prevents additional links from being included within the content.
 * Unless however, you make use of the type:'card' tile or CardTile in which case its a simple wrapper that gives you
 * a styled div with the same Tile styles as link or radio.
 *
 * The white background variation is to be used when there are pictures being included on the tile(s).
 * If it is part of a set, all the tiles should be of the same variation.
 *
 * card examples:
 * <Tile>
 *     <span>Hello World</span>
 * </Tile>
 * <Tile type='card'>
 *     <span>Hello World</span>
 * </Tile>
 *
 * radio examples:
 * <RadioGroup name={'test2'}
 *             direction={'row'}
 *             defaultValue={'2'}
 *             onChange={() => {}}>
 *      <Tile type='radio'
 *            inputId={'1'}
 *            value={'1'}
 *            variant='filled'>
 *          <span>Item 1</span>
 *      </Tile>
 *      <Tile type='radio'
 *            inputId={'2'}
 *            value={'2'}
 *            variant='filled'>
 *          <span>Item 2</span>
 *      </Tile>
 *      <Tile type='radio'
 *            inputId={'3'}
 *            value={'3'}
 *            variant='filled'
 *            disabled>
 *          <span>Item 3</span>
 *      </Tile>
 * </RadioGroup>
 *
 *
 * <Tile type='radio'
 *       id={'4'}
 *       inputId={'input_4'}
 *       value={'4'}
 *       disabled>
 *     <span>Item 4</span>
 * </Tile>
 *
 * link example:
 * <Tile type='link'
 *       href='www.lowes.com'>
 *     <span>Hello World</span>
 * </Tile>
 */
var Tile = /*#__PURE__*/React.forwardRef(function Tile(_ref, ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'card' : _ref$variant,
      shapeProp = _ref.shape,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Tile'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  var tileVariants = {
    card: _CardTile["default"],
    link: _LinkTile["default"],
    radio: _RadioTile["default"]
  };
  var ComponentName = tileVariants[variant || 'card'];
  return /*#__PURE__*/React.createElement(ComponentName, (0, _extends2["default"])({
    className: (0, _classnames["default"])('tile', className),
    shape: shape
  }, props, {
    ref: ref
  }), children);
});
exports.Tile = Tile;
Tile.bdsName = 'Tile';
var _default = Tile;
exports["default"] = _default;
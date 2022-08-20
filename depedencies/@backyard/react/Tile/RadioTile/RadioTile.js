"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.RadioTile = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _CheckCircleFilled = _interopRequireDefault(require("@backyard/icons/CheckCircleFilled"));

var _classnames = _interopRequireDefault(require("classnames"));

var React = _interopRequireWildcard(require("react"));

var _Radio = _interopRequireDefault(require("../../Radio"));

var _ThemeProvider = require("../../ThemeProvider");

var _TileWrapper = _interopRequireDefault(require("../styles/TileWrapper"));

var _div;

var _excluded = ["children", "className", "id", "color", "shape", "disabled", "name", "value", "checked", "defaultChecked", "wrapperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Tiles are surfaces that display content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information. Elements, like text and images, should
 * be placed on them in a way that clearly indicates hierarchy.
 *
 * This type of Tile is to be used as a static element on the page that functions like a radio button.
 * The entire surface of the tile is selectable, which prevents additional links or call to actions from being
 * included within the content.
 *
 * note: The outlined variation is to be used when there are pictures being included on the tile(s).
 * If it is part of a radio group or set, all the tiles should be of the same variation.
 *
 * example:
 *  <RadioTile
 *      value='test1'
 *      name='test'
 *      checked
 *  >
 *     <span>Hello World</span>
 *  </RadioTile>
 *
 * example 2:
 *  <RadioGroup
 *      name={'test2'}
 *      direction={'row'}
 *      defaultValue={'2'}
 *      onChange={() => {}}
 *  >
 *      <RadioTile
 *          inputId={'1'}
 *          value={'1'}
 *          variant='filled'
 *      >
 *          <span>Item 1</span>
 *      </RadioTile>
 *      <RadioTile
 *          inputId={'2'}
 *          value={'2'}
 *          variant='filled'
 *      >
 *          <span>Item 2</span>
 *      </RadioTile>
 *      <RadioTile
 *          inputId={'3'}
 *          value={'3'}
 *          variant='filled'
 *          disabled
 *      >
 *          <span>Item 3</span>
 *      </RadioTile>
 *  </RadioGroup>
 */
var RadioTile = /*#__PURE__*/React.forwardRef(function RadioTile(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'surface' : _ref$color,
      shapeProp = _ref.shape,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      _ref$wrapperProps = _ref.wrapperProps,
      wrapperProps = _ref$wrapperProps === void 0 ? {} : _ref$wrapperProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'RadioTile'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  /**
   * Layout:
   *  <label>
   *      ...
   *      <Radio />
   *      <icon />
   *  </label>
   */

  return /*#__PURE__*/React.createElement(_TileWrapper["default"], (0, _extends2["default"])({
    as: "label"
  }, wrapperProps, {
    className: (0, _classnames["default"])("color--".concat(color, " shape--").concat(shape, " type--radio"), className, disabled && "disabled"),
    "aria-disabled": disabled
  }), children, /*#__PURE__*/React.createElement(_Radio["default"], (0, _extends2["default"])({
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    name: name,
    value: value
  }, props, {
    wrapperProps: {
      className: 'tile-input'
    },
    ref: ref
  }), _div || (_div = /*#__PURE__*/React.createElement("div", {
    className: "tile-icon"
  }, /*#__PURE__*/React.createElement(_CheckCircleFilled["default"], {
    color: "action_interactive",
    size: "size_24"
  })))));
});
exports.RadioTile = RadioTile;
RadioTile.bdsName = 'RadioTile';
var _default = RadioTile;
exports["default"] = _default;
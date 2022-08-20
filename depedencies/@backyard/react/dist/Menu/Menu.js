"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Menu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _MenuItem = _interopRequireDefault(require("../MenuItem"));

var _ThemeProvider = require("../ThemeProvider");

var _MenuWrapper = _interopRequireDefault(require("./styles/MenuWrapper"));

var _excluded = ["children", "className", "id", "items", "label", "shape", "renderItem", "width", "height", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Menu
 *
 * `Menu` provides a customized component for triggering actions from a list of items (aka. `MenuItem`s).
 *
 * This component does not trigger a popover from an action on another component.
 * For that functionality, please see `MenuPopover`.
 *
 * For a list that provides the user the ability to select from a list of options, please use `List`.
 *
 * Example:
 * ```
 *  <Menu>
 *      <MenuItem
 *          iconBefore={<Home />}
 *      >
 *          Home
 *      </MenuItem>
 *      <MenuItem
 *          iconBefore={<CreditCard />}
 *      >
 *          Payment Methods
 *      </MenuItem>
 *      <MenuItem>
 *          No Icon Needed
 *      </MenuItem>
 *      <MenuItem
 *          disabled
 *          iconBefore={<Download />}
 *      >
 *          Download
 *      </MenuItem>
 *      <MenuItem
 *          variant="primary"
 *          color="error"
 *          iconBefore={<Home />}
 *          onClick={() => alert('You clicked on me!')}
 *      >
 *          Alert
 *      </MenuItem>
 *  </Menu>
 * ```
 */
var Menu = /*#__PURE__*/React.forwardRef(function Menu(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      items = _ref.items,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Menu' : _ref$label,
      shapeProp = _ref.shape,
      _ref$renderItem = _ref.renderItem,
      renderItem = _ref$renderItem === void 0 ? function (props) {
    var ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return /*#__PURE__*/React.createElement(_MenuItem["default"], (0, _extends2["default"])({}, props, {
      ref: ref
    }));
  } : _ref$renderItem,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'auto' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 'auto' : _ref$height,
      styleProp = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Menu'
  }); // Get shape context from theme

  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Map items/children

  var menu = items ? // Map items if given,
  items.map(function (item, index) {
    return renderItem((0, _extends2["default"])({
      key: index
    }, item));
  }) : // Else declaratively use children
  React.Children.map(children, function (child) {
    return /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child) : child;
  });
  var style = React.useMemo(function () {
    return {
      '--style-menu-width': theme.sizes[width] || width,
      '--style-menu-height': theme.sizes[height] || height
    };
  }, [theme, width, height, styleProp]);
  /**
   * Layout:
   *
   *  <div>
   *      <ul>
   *          ...
   *      </ul>
   *  </div>
   */

  return /*#__PURE__*/React.createElement(_MenuWrapper["default"], (0, _extends2["default"])({
    id: id,
    "aria-label": label,
    role: "menu",
    className: (0, _classnames["default"])("menu shape--".concat(shape), className),
    style: style
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("ul", {
    className: 'menu-list'
  }, menu));
});
exports.Menu = Menu;
Menu.bdsName = 'Menu';
var _default = Menu;
exports["default"] = _default;
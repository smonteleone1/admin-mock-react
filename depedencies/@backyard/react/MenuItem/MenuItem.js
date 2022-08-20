"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.MenuItem = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../Button"));

var _useBackyardTheme = _interopRequireDefault(require("../ThemeProvider/useBackyardTheme"));

var _MenuItemWrapper = _interopRequireDefault(require("./styles/MenuItemWrapper"));

var _excluded = ["children", "className", "color", "component", "disabled", "label", "selected", "iconBefore", "iconAfter", "variant", "size", "onClick", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Menu Item
 *
 * `MenuItem` provides an item for the user to trigger an action with via `Menu`.
 *
 * Example:
 * ```
 *  <MenuItem
 *      iconBefore={<Home />}
 *  >
 *      Home
 *  </MenuItem>
 * ```
 */
var MenuItem = /*#__PURE__*/React.forwardRef(function MenuItem(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'neutral' : _ref$color,
      _ref$component = _ref.component,
      Component = _ref$component === void 0 ? _Button["default"] : _ref$component,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      label = _ref.label,
      _ref$selected = _ref.selected,
      selectedProp = _ref$selected === void 0 ? false : _ref$selected,
      iconBeforeProp = _ref.iconBefore,
      iconAfterProp = _ref.iconAfter,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'ghost' : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'small' : _ref$size,
      onClick = _ref.onClick,
      styleProp = _ref.style,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get theme
  var theme = (0, _useBackyardTheme["default"])(); // Hold whether or not the item was selected

  var _React$useState = React.useState(selectedProp),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      selected = _React$useState2[0],
      setSelected = _React$useState2[1]; // If icon before prop defined,


  var iconBefore = iconBeforeProp ?
  /*#__PURE__*/
  // Clone icon with className
  React.cloneElement(iconBeforeProp, {
    className: 'menu-item-icon-before'
  }) : // Else, no icon before
  null; // If icon after prop defined,

  var iconAfter = iconAfterProp ?
  /*#__PURE__*/
  // Clone icon with className
  React.cloneElement(iconAfterProp, {
    className: 'menu-item-icon-after'
  }) : // Else, no icon after
  null;
  /**
   * Handles when the user clicks on the menu item.
   *
   * @param event - click event
   */

  var handleClick = function handleClick(event) {
    setSelected(true);

    if (onClick) {
      onClick(event);
    }
  }; // Memoize style props and css vars


  var style = React.useMemo(function () {
    return (0, _extends2["default"])({
      '--style-menu-item-font-family': theme.font.family[theme.context.font]
    }, styleProp);
  }, [theme, styleProp]);
  /**
   * Layout:
   * ```
   *  <li>
   *      <Button>
   *          <icon before />
   *          <span>...</span>
   *          <icon after />
   *      </Button>
   *  <li>
   * ```
   */

  return /*#__PURE__*/React.createElement(_MenuItemWrapper["default"], null, /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({
    className: (0, _classnames["default"])('menu-item', className, disabled && "disabled", selected && "selected"),
    disabled: disabled,
    variant: variant,
    color: color,
    size: size,
    role: "menuitem",
    onClick: handleClick,
    style: style
  }, props, {
    ref: ref
  }), iconBefore || null, /*#__PURE__*/React.createElement("span", {
    className: "menu-item-label"
  }, label || children), iconAfter || null));
});
exports.MenuItem = MenuItem;
MenuItem.bdsName = 'MenuItem';
var _default = MenuItem;
exports["default"] = _default;
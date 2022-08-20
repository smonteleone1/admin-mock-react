import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "color", "component", "disabled", "label", "selected", "iconBefore", "iconAfter", "variant", "size", "onClick", "style"];
import * as React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import useBackyardTheme from '../ThemeProvider/useBackyardTheme';
import MenuItemWrapper from './styles/MenuItemWrapper';
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
      Component = _ref$component === void 0 ? Button : _ref$component,
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
      props = _objectWithoutProperties(_ref, _excluded);

  // Get theme
  var theme = useBackyardTheme(); // Hold whether or not the item was selected

  var _React$useState = React.useState(selectedProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
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
    return _extends({
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

  return /*#__PURE__*/React.createElement(MenuItemWrapper, null, /*#__PURE__*/React.createElement(Component, _extends({
    className: classNames('menu-item', className, disabled && "disabled", selected && "selected"),
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
MenuItem.bdsName = 'MenuItem';
export { MenuItem };
export default MenuItem;
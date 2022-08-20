import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "color", "component", "disabled", "label", "selected", "iconBefore", "iconAfter", "variant", "size", "onClick", "style"];
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

const MenuItem = /*#__PURE__*/React.forwardRef(function MenuItem(_ref, ref) {
  let {
    children,
    className,
    color = 'neutral',
    component: Component = Button,
    disabled = false,
    label,
    selected: selectedProp = false,
    iconBefore: iconBeforeProp,
    iconAfter: iconAfterProp,
    variant = 'ghost',
    size = 'small',
    onClick,
    style: styleProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get theme
  const theme = useBackyardTheme(); // Hold whether or not the item was selected

  const [selected, setSelected] = React.useState(selectedProp); // If icon before prop defined,

  const iconBefore = iconBeforeProp ?
  /*#__PURE__*/
  // Clone icon with className
  React.cloneElement(iconBeforeProp, {
    className: 'menu-item-icon-before'
  }) : // Else, no icon before
  null; // If icon after prop defined,

  const iconAfter = iconAfterProp ?
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

  const handleClick = event => {
    setSelected(true);

    if (onClick) {
      onClick(event);
    }
  }; // Memoize style props and css vars


  const style = React.useMemo(() => _extends({
    '--style-menu-item-font-family': theme.font.family[theme.context.font]
  }, styleProp), [theme, styleProp]);
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
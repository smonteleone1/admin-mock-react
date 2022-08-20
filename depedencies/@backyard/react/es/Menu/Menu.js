import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "id", "items", "label", "shape", "renderItem", "width", "height", "style"];
import * as React from 'react';
import classNames from 'classnames';
import MenuItem from '../MenuItem';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import MenuWrapper from './styles/MenuWrapper';
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

const Menu = /*#__PURE__*/React.forwardRef(function Menu(_ref, ref) {
  let {
    children,
    className,
    id,
    items,
    label = 'Menu',
    shape: shapeProp,
    // = 'rounded',
    // eslint-disable-next-line no-shadow
    renderItem = (props, ref = null) => {
      return /*#__PURE__*/React.createElement(MenuItem, _extends({}, props, {
        ref: ref
      }));
    },
    width = 'auto',
    height = 'auto',
    style: styleProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'Menu'
  }); // Get shape context from theme

  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Map items/children

  const menu = items ? // Map items if given,
  items.map((item, index) => renderItem(_extends({
    key: index
  }, item))) : // Else declaratively use children
  React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) ? /*#__PURE__*/React.cloneElement(child) : child);
  const style = React.useMemo(() => ({
    '--style-menu-width': theme.sizes[width] || width,
    '--style-menu-height': theme.sizes[height] || height
  }), [theme, width, height, styleProp]);
  /**
   * Layout:
   *
   *  <div>
   *      <ul>
   *          ...
   *      </ul>
   *  </div>
   */

  return /*#__PURE__*/React.createElement(MenuWrapper, _extends({
    id: id,
    "aria-label": label,
    role: "menu",
    className: classNames(`menu shape--${shape}`, className),
    style: style
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("ul", {
    className: 'menu-list'
  }, menu));
});
Menu.bdsName = 'Menu';
export { Menu };
export default Menu;
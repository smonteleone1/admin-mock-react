import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _ChevronRight;

const _excluded = ["children", "className", "id", "items", "label", "menuItemProps", "menuPopoverProps", "listenHover", "renderItem", "open", "onOpen", "onClose", "placement", "shape"];
import * as React from 'react';
import classNames from 'classnames';
import ChevronRight from '@backyard/icons/ChevronRight';
import MenuItem from '../MenuItem';
import MenuPopover from './MenuPopover';
import Menu from '../Menu';

/**
 * Backyard React Sub Menu
 *
 * `SubMenu` extends both `Menu` and `MenuPopover` to provide a simple way to make a
 * functional deep menu for a user to navigate.
 *
 * `SubMenu` will use `disableClick` and `listenHover` from the outer most `MenuPopover` ancestor.
 *
 * Example:
 * ```
 *  <Grid.Column sm={12} md={8} lg={6} xl={6}>
 *      <MenuPopover
 *          onOpen={action('onOpen')}
 *          onClose={action('onClose')}
 *          menu={(
 *              <Menu>
 *                  <MenuItem
 *                      iconBefore={<Home />}
 *                  >
 *                      Home
 *                  </MenuItem>
 *                  <SubMenu label="Options">
 *                      <MenuItem>Level Two - One</MenuItem>
 *                      <SubMenu label="Level Two - Next">
 *                          <MenuItem>Item 3-1</MenuItem>
 *                          <MenuItem>Item 3-2</MenuItem>
 *                          <SubMenu label="Item 3-3">
 *                              <MenuItem>Item 4-1</MenuItem>
 *                              <MenuItem>Item 4-2</MenuItem>
 *                          </SubMenu>
 *                          <SubMenu label="Item 3-4">
 *                              <MenuItem>Item 4-1</MenuItem>
 *                              <MenuItem>Item 4-2</MenuItem>
 *                              <MenuItem>Item 4-3</MenuItem>
 *                              <MenuItem>Item 4-4</MenuItem>
 *                              <MenuItem>Item 4-5</MenuItem>
 *                              <MenuItem>Item 4-6</MenuItem>
 *                          </SubMenu>
 *                          <MenuItem>Item 3-5</MenuItem>
 *                      </SubMenu>
 *                      <MenuItem>Level Two - Three</MenuItem>
 *                      <MenuItem>Level Two - Four</MenuItem>
 *                  </SubMenu>
 *                  <MenuItem
 *                      disabled
 *                      iconBefore={<Download />}
 *                  >
 *                      Download
 *                  </MenuItem>
 *                  <MenuItem
 *                      variant="primary"
 *                      color="error"
 *                      onClick={() => alert('You clicked me!')}
 *                  >
 *                      Alert
 *                  </MenuItem>
 *              </Menu>
 *          )}
 *      >
 *          <IconButton
 *              variant="ghost"
 *              color="subtle"
 *              size="small"
 *          >
 *              <Dots />
 *          </IconButton>
 *      </MenuPopover>
 *  </Grid.Column>
 * ```
 */
const SubMenu = /*#__PURE__*/React.forwardRef(function SubMenu(_ref, ref) {
  let {
    children,
    className,
    items,
    label,
    menuItemProps = {},
    menuPopoverProps = {},
    listenHover,
    // eslint-disable-next-line no-shadow
    renderItem = (props, ref = null) => {
      return /*#__PURE__*/React.createElement(MenuItem, _extends({}, props, {
        ref: ref
      }));
    },
    open = false,
    onOpen,
    onClose,
    placement = 'right-start',
    shape
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Map items/children
  const menu = items ? // Map items if given,
  items.map((item, index) => renderItem(_extends({
    key: index
  }, item))) : // Else declaratively use children
  children;
  /**
   * Layout:
   * ```
   *  <ul>
   *      ...
   *  </ul>
   * ```
   */

  return /*#__PURE__*/React.createElement(MenuPopover, _extends({
    open: open,
    placement: placement,
    onOpen: onOpen,
    onClose: onClose,
    shape: shape,
    listenHover: listenHover
  }, menuPopoverProps, {
    className: classNames('submenu-popover', menuPopoverProps.className),
    menu: /*#__PURE__*/React.createElement(Menu, _extends({
      className: classNames('submenu', className),
      shape: shape
    }, props, {
      ref: ref
    }), menu)
  }), /*#__PURE__*/React.createElement(MenuItem, _extends({
    iconAfter: _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null))
  }, menuItemProps, {
    className: classNames('submenu-reference', menuItemProps.className)
  }), label));
});
SubMenu.bdsName = 'SubMenu';
export { SubMenu };
export default SubMenu;
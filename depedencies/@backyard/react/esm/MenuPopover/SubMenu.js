import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _ChevronRight;

var _excluded = ["children", "className", "id", "items", "label", "menuItemProps", "menuPopoverProps", "listenHover", "renderItem", "open", "onOpen", "onClose", "placement", "shape"];
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
var SubMenu = /*#__PURE__*/React.forwardRef(function SubMenu(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      id = _ref.id,
      items = _ref.items,
      label = _ref.label,
      _ref$menuItemProps = _ref.menuItemProps,
      menuItemProps = _ref$menuItemProps === void 0 ? {} : _ref$menuItemProps,
      _ref$menuPopoverProps = _ref.menuPopoverProps,
      menuPopoverProps = _ref$menuPopoverProps === void 0 ? {} : _ref$menuPopoverProps,
      listenHover = _ref.listenHover,
      _ref$renderItem = _ref.renderItem,
      renderItem = _ref$renderItem === void 0 ? function (props) {
    var ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return /*#__PURE__*/React.createElement(MenuItem, _extends({}, props, {
      ref: ref
    }));
  } : _ref$renderItem,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'right-start' : _ref$placement,
      shape = _ref.shape,
      props = _objectWithoutProperties(_ref, _excluded);

  // Map items/children
  var menu = items ? // Map items if given,
  items.map(function (item, index) {
    return renderItem(_extends({
      key: index
    }, item));
  }) : // Else declaratively use children
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
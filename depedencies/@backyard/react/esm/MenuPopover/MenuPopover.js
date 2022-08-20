import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _DotsVertical;

var _excluded = ["children", "className", "disableClick", "enablePortal", "icon", "listenHover", "closeDelay", "menu", "mergeEffect", "open", "onOpen", "onClose", "placement", "shadow", "shape", "as", "style"];
import * as React from 'react';
import classNames from 'classnames';
import DotsVertical from '@backyard/icons/DotsVertical';
import IconButton from '../IconButton';
import ClickAwayListener from '../ClickAwayListener';
import Popover from '../Popover';
import useMenuPopover from './useMenuPopover';
import MenuPopoverContext from './MenuPopoverContext';
import MenuPopoverWrapper from './styles/MenuPopoverWrapper';
import { useBackyardTheme, getShape, dropShadow } from '../ThemeProvider';

/**
 * Backyard React Menu Popover
 *
 * `MenuPopover` provides the developer a simple way to anchor a `Menu` to a child and
 * listen for the user to click or hover over the anchor for the `Menu` to popover.
 *
 * Put the `Menu` in the required `menu` prop that you want to pop over.
 *
 * By default the portal of a menu is disabled for SEO considerations. If the portal needs
 * to be enabled for the menu to get portaled to the root DOM, use the `enablePortal` flag.
 *
 * The opened or closed states can be controlled remotely from the anchor through the `open` prop.
 *
 * For many sub menus to pop over within menus, a `SubMenu` that extends `MenuPopover` is provided to make
 * deep menus even simpler to handle. You only need one root `MenuPopover` that all child `SubMenu`s listen to.
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
var MenuPopover = /*#__PURE__*/React.forwardRef(function MenuPopover(_ref, ref) {
  var childrenProp = _ref.children,
      className = _ref.className,
      _ref$disableClick = _ref.disableClick,
      disableClickProp = _ref$disableClick === void 0 ? false : _ref$disableClick,
      _ref$enablePortal = _ref.enablePortal,
      enablePortal = _ref$enablePortal === void 0 ? false : _ref$enablePortal,
      iconProp = _ref.icon,
      listenHoverProp = _ref.listenHover,
      _ref$closeDelay = _ref.closeDelay,
      closeDelay = _ref$closeDelay === void 0 ? 500 : _ref$closeDelay,
      menu = _ref.menu,
      mergeEffectProp = _ref.mergeEffect,
      _ref$open = _ref.open,
      openProp = _ref$open === void 0 ? false : _ref$open,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom-start' : _ref$placement,
      _ref$shadow = _ref.shadow,
      shadow = _ref$shadow === void 0 ? 'shadow_03' : _ref$shadow,
      shapeProp = _ref.shape,
      _ref$as = _ref.as,
      asProp = _ref$as === void 0 ? 'div' : _ref$as,
      styleProp = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'MenuPopover'
  }); // Get shape from context

  var shapeContext = theme.context.shape; // Calculate shape

  var shapeCalc = getShape(shapeProp, shapeContext); // Holds the context of the outermost menu popover ancestor

  var context = useMenuPopover(); // Holds the native picker ref for the anchor point of the popover

  var childRef = React.useRef(null); // Hold the delay timeout to interpolate closing popover

  var closeTimeout = React.useRef(null); // Holds the current picker element set by the native picker for the anchor

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      childElement = _React$useState2[0],
      setChildElement = _React$useState2[1]; // Holds state of whether or not the popover calendar is open


  var _React$useState3 = React.useState(openProp),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      open = _React$useState4[0],
      setOpen = _React$useState4[1]; // Get disableClick/listenHover from context if available or use given prop


  var disableClick = typeof (context === null || context === void 0 ? void 0 : context.disableClick) === 'boolean' ? context.disableClick : disableClickProp;
  var listenHover = typeof (context === null || context === void 0 ? void 0 : context.listenHover) === 'boolean' ? context.listenHover : listenHoverProp;
  var mergeEffect = typeof (context === null || context === void 0 ? void 0 : context.mergeEffect) === 'boolean' ? context.mergeEffect : mergeEffectProp;
  var shape = typeof (context === null || context === void 0 ? void 0 : context.shape) === 'string' ? context.shape : shapeCalc;
  var as = typeof (context === null || context === void 0 ? void 0 : context.as) === 'string' ? context.as : asProp; // Set icon to default if not defined...

  var icon = iconProp || _DotsVertical || (_DotsVertical = /*#__PURE__*/React.createElement(DotsVertical, null)); // Set children to default IconButton if not defined...


  var children = childrenProp || /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    color: "neutral",
    size: "small"
  }, icon);
  /**
   * Opens the menu
   *
   * Triggers `onOpen` if defined
   */

  var openMenu = function openMenu() {
    setOpen(true);

    if (onOpen) {
      onOpen();
    }
  };
  /**
   * Closes the menu
   *
   * Triggers `onClose` if defined
   */


  var closeMenu = function closeMenu() {
    setOpen(false);

    if (onClose) {
      onClose();
    }
  };

  var closeMenuWithDelay = function closeMenuWithDelay() {
    if (typeof closeDelay === 'number') {
      closeTimeout.current = setTimeout(closeMenu, closeDelay);
    }
  };

  var keepMenuOpenWithDelay = function keepMenuOpenWithDelay() {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
  };
  /**
   * Toggles the menu open or close
   */


  var toggleMenu = function toggleMenu() {
    return open ? closeMenu() : openMenu();
  }; // Side effect for when the `open` prop changes externally
  // eslint-disable-next-line consistent-return


  React.useEffect(function () {
    if (openProp !== open) {
      return openProp ? openMenu() : closeMenu();
    }
  }, [openProp]); // Side effect to update `controlElement` ref

  React.useEffect(function () {
    return setChildElement(childRef.current);
  }, [childRef]);
  var style = React.useMemo(function () {
    return _extends({
      // Tooltip drop shadow
      '--style-menu-popover-drop-shadow': dropShadow(theme.shadows[shadow])
    }, styleProp);
  }, [theme, styleProp]);
  /**
   * Layout:
   *  <div> // click away listener listens for any click outside of this element
   *      <DatePickerNative />
   *      <Popover> // appears open only on desktop
   *          <CalendarPicker />
   *      </Popover>
   *  </div>
   */

  var popover = /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: closeMenu
  }, /*#__PURE__*/React.createElement(MenuPopoverWrapper, {
    className: classNames("menu-popover shape--".concat(shape), className, open && "open", mergeEffect && 'merge-popover'),
    onMouseLeave: listenHover ? closeMenuWithDelay : null,
    onMouseEnter: listenHover ? keepMenuOpenWithDelay : null,
    style: style,
    as: as
  }, childElement ? /*#__PURE__*/React.createElement(Popover, _extends({
    disablePortal: !enablePortal,
    offset: mergeEffect ? [0, 0] : [0, 2],
    open: open,
    anchorEl: childElement,
    placement: placement,
    keepMounted: true,
    pop: /*#__PURE__*/React.createElement("div", {
      className: "menu-popover-wrapper shape--".concat(shape)
    }, /*#__PURE__*/React.cloneElement(menu, {
      shape: 'squared'
    }))
  }, props, {
    ref: ref
  })) : null, /*#__PURE__*/React.cloneElement(children, {
    className: classNames("popover-reference shape--".concat(shape), children.props.className),
    title: 'menu popover button',
    'aria-haspopup': 'true',
    'aria-expanded': String(open),
    shape: shape,
    onClick: !disableClick ? toggleMenu : null,
    onMouseEnter: listenHover ? openMenu : null,
    ref: childRef
  }))); // If no context defined,

  return !context ?
  /*#__PURE__*/
  // Render popover with context provider
  React.createElement(MenuPopoverContext.Provider, {
    value: {
      listenHover: listenHover,
      disableClick: disableClick,
      mergeEffect: mergeEffect,
      shape: shape,
      as: 'ul'
    }
  }, popover) : // Else, don't render with context
  popover;
});
MenuPopover.bdsName = 'MenuPopover';
export { MenuPopover };
export default MenuPopover;
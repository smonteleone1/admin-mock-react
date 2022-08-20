import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _DotsVertical;

const _excluded = ["children", "className", "disableClick", "enablePortal", "icon", "listenHover", "closeDelay", "menu", "mergeEffect", "open", "onOpen", "onClose", "placement", "shadow", "shape", "as", "style"];
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
const MenuPopover = /*#__PURE__*/React.forwardRef(function MenuPopover(_ref, ref) {
  let {
    children: childrenProp,
    className,
    disableClick: disableClickProp = false,
    enablePortal = false,
    icon: iconProp,
    listenHover: listenHoverProp,
    closeDelay = 500,
    menu,
    mergeEffect: mergeEffectProp,
    open: openProp = false,
    onOpen,
    onClose,
    placement = 'bottom-start',
    shadow = 'shadow_03',
    shape: shapeProp,
    // = 'rounded',
    as: asProp = 'div',
    style: styleProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'MenuPopover'
  }); // Get shape from context

  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shapeCalc = getShape(shapeProp, shapeContext); // Holds the context of the outermost menu popover ancestor

  const context = useMenuPopover(); // Holds the native picker ref for the anchor point of the popover

  const childRef = React.useRef(null); // Hold the delay timeout to interpolate closing popover

  const closeTimeout = React.useRef(null); // Holds the current picker element set by the native picker for the anchor

  const [childElement, setChildElement] = React.useState(null); // Holds state of whether or not the popover calendar is open

  const [open, setOpen] = React.useState(openProp); // Get disableClick/listenHover from context if available or use given prop

  const disableClick = typeof context?.disableClick === 'boolean' ? context.disableClick : disableClickProp;
  const listenHover = typeof context?.listenHover === 'boolean' ? context.listenHover : listenHoverProp;
  const mergeEffect = typeof context?.mergeEffect === 'boolean' ? context.mergeEffect : mergeEffectProp;
  const shape = typeof context?.shape === 'string' ? context.shape : shapeCalc;
  const as = typeof context?.as === 'string' ? context.as : asProp; // Set icon to default if not defined...

  const icon = iconProp || _DotsVertical || (_DotsVertical = /*#__PURE__*/React.createElement(DotsVertical, null)); // Set children to default IconButton if not defined...


  const children = childrenProp || /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    color: "neutral",
    size: "small"
  }, icon);
  /**
   * Opens the menu
   *
   * Triggers `onOpen` if defined
   */

  const openMenu = () => {
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


  const closeMenu = () => {
    setOpen(false);

    if (onClose) {
      onClose();
    }
  };

  const closeMenuWithDelay = () => {
    if (typeof closeDelay === 'number') {
      closeTimeout.current = setTimeout(closeMenu, closeDelay);
    }
  };

  const keepMenuOpenWithDelay = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
  };
  /**
   * Toggles the menu open or close
   */


  const toggleMenu = () => open ? closeMenu() : openMenu(); // Side effect for when the `open` prop changes externally
  // eslint-disable-next-line consistent-return


  React.useEffect(() => {
    if (openProp !== open) {
      return openProp ? openMenu() : closeMenu();
    }
  }, [openProp]); // Side effect to update `controlElement` ref

  React.useEffect(() => setChildElement(childRef.current), [childRef]);
  const style = React.useMemo(() => _extends({
    // Tooltip drop shadow
    '--style-menu-popover-drop-shadow': dropShadow(theme.shadows[shadow])
  }, styleProp), [theme, styleProp]);
  /**
   * Layout:
   *  <div> // click away listener listens for any click outside of this element
   *      <DatePickerNative />
   *      <Popover> // appears open only on desktop
   *          <CalendarPicker />
   *      </Popover>
   *  </div>
   */

  const popover = /*#__PURE__*/React.createElement(ClickAwayListener, {
    onClickAway: closeMenu
  }, /*#__PURE__*/React.createElement(MenuPopoverWrapper, {
    className: classNames(`menu-popover shape--${shape}`, className, open && "open", mergeEffect && 'merge-popover'),
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
      className: `menu-popover-wrapper shape--${shape}`
    }, /*#__PURE__*/React.cloneElement(menu, {
      shape: 'squared'
    }))
  }, props, {
    ref: ref
  })) : null, /*#__PURE__*/React.cloneElement(children, {
    className: classNames(`popover-reference shape--${shape}`, children.props.className),
    title: 'menu popover button',
    'aria-haspopup': 'true',
    'aria-expanded': String(open),
    shape,
    onClick: !disableClick ? toggleMenu : null,
    onMouseEnter: listenHover ? openMenu : null,
    ref: childRef
  }))); // If no context defined,

  return !context ?
  /*#__PURE__*/
  // Render popover with context provider
  React.createElement(MenuPopoverContext.Provider, {
    value: {
      listenHover,
      disableClick,
      mergeEffect,
      shape,
      as: 'ul'
    }
  }, popover) : // Else, don't render with context
  popover;
});
MenuPopover.bdsName = 'MenuPopover';
export { MenuPopover };
export default MenuPopover;
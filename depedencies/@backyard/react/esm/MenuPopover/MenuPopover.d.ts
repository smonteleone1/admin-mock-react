import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { PopoverProps, PopoverRef } from '../Popover';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { KeyOf } from '../utils/typings';
import type { BackyardTheme } from '../ThemeProvider';
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
declare const MenuPopover: BDSForwardRef<MenuPopoverProps>;
declare type MenuPopoverRef = PopoverRef;
declare type MenuPopoverPropsOverride = 'pop' | 'closeDelay';
interface MenuPopoverProps extends Omit<BackyardBaseProps<MenuPopoverRef> & PopoverProps, MenuPopoverPropsOverride> {
    /**
     * Element to anchor popover
     * Will use default `IconButton` with `Dots` if not defined
     */
    children?: React.ReactElement;
    /**
     * Shape of the button and popover
     */
    shape?: 'rounded' | 'squared';
    /**
     * Disable click listener on popover
     */
    disableClick?: boolean;
    /**
     * Whether or not portal is enabled, which is disabled by default
     */
    enablePortal?: boolean;
    /**
     * Number in milliseconds to delay closing the menu popover
     * so that it doesn't close on the user inconveniently.
     *
     * Set to `false` to make it so that the popover never closes
     * when the user's mouse exits the popover menu.
     */
    closeDelay?: number | false;
    /**
     * Icon to use in default `IconButton` if `children` is not given
     * Defaults to `Dots` icon
     */
    icon?: React.ReactElement;
    /**
     * Listen for hover events for popover
     */
    listenHover?: boolean;
    /**
     * Menu element to pop over
     */
    menu: React.ReactElement;
    /**
     * Enables a merging effect between the reference and the popover content
     */
    mergeEffect?: boolean;
    /**
     * Whether or not popover is open controlled
     */
    open?: boolean;
    /**
     * `onOpen` trigger function for when the calendar popover opens
     */
    onOpen?: () => void;
    /**
     * `onClose` trigger function for when the calendar popover closes
     */
    onClose?: () => void;
    /**
     * Position of the tooltip from the reference element (child)
     * Note: This is opposite of `Tooltip`'s `arrow` prop, which positions the tooltip from the reference
     *  For example, a `bottom` placed `Popover` will have the `arrow` be on top
     *  [Some Element]
     *       /|\
     *      [Pop]
     */
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    /**
     * Shadow token to use, or none
     *
     * @default 'shadow_03'
     */
    shadow?: 'none' | KeyOf<BackyardTheme['shadows']> | 'string';
}
export { MenuPopover };
export type { MenuPopoverRef, MenuPopoverProps };
export default MenuPopover;

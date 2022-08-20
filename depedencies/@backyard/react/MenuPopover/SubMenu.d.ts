import * as React from 'react';
import type { MenuItemProps } from '../MenuItem';
import type { MenuPopoverProps } from './MenuPopover';
import type { MenuProps, MenuRef } from '../Menu';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
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
declare const SubMenu: BDSForwardRef<SubMenuProps>;
declare type SubMenuRef = MenuRef;
interface SubMenuProps extends MenuProps {
    /**
     * Label to display in main menu for the sub menu
     */
    label: string;
    /**
     * Menu Item Props to extend menu item with if needed
     */
    menuItemProps?: React.PropsWithRef<MenuItemProps>;
    /**
     * Menu Popover props
     */
    menuPopoverProps?: React.PropsWithRef<MenuPopoverProps>;
    /**
     * Whether or not submenu will listen to hover events
     */
    listenHover?: MenuPopoverProps['listenHover'];
    /**
     * `onOpen` handler for popover
     */
    onOpen?: MenuPopoverProps['onOpen'];
    /**
     * `onClose` handler for popover
     */
    onClose?: MenuPopoverProps['onClose'];
    /**
     * Placement of the sub menu
     */
    placement?: MenuPopoverProps['placement'];
}
export { SubMenu };
export type { SubMenuProps, SubMenuRef };
export default SubMenu;

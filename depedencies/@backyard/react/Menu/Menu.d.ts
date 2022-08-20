import * as React from 'react';
import type { MenuItemProps } from '../MenuItem';
import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
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
declare const Menu: BDSForwardRef<MenuProps>;
declare type MenuRef = HTMLUListElement;
interface MenuProps extends BackyardBaseProps<MenuRef> {
    /**
     * Children of menu
     * Optionally, `items` can be given a list data structure instead
     */
    children?: React.ReactNode;
    /**
     * Shape of the component
     */
    shape?: 'rounded' | 'squared';
    /**
     * Menu Items to use if data list is provided instead of declarative children
     */
    items?: MenuItemProps[];
    /**
     * List item to render
     */
    renderItem?: (props: MenuItemProps, ref?: React.Ref<any>) => React.ForwardRefExoticComponent<MenuItemProps>;
    /**
     * Width override for ListWrapper
     * Can be given a token (such as `size_128`) or other value (like `15rem`)
     */
    width?: keyof BackyardToken['sizes'] | string;
}
export { Menu };
export type { MenuProps, MenuRef };
export default Menu;

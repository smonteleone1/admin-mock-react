import * as React from 'react';
import type { ButtonRef, ButtonProps } from '../Button';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
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
declare const MenuItem: BDSForwardRef<MenuItemProps>;
declare type MenuItemRef = ButtonRef;
interface MenuItemProps extends ButtonProps {
    /**
     * Component wrapper of the menu item
     * Can be an HTML tag (`li`) or component
     */
    component?: React.ComponentClass;
    /**
     * Whether or not the menu item is disabled for selecting
     */
    disabled?: boolean;
    /**
     * Label of the menu item
     * uses `children` if not defined
     */
    label?: string;
    /**
     * Icon Component before to place in menu item
     */
    iconBefore?: React.ReactElement;
    /**
     * Icon Component before to place in menu item
     */
    iconAfter?: React.ReactElement;
    /**
     * Whether or not the menu item is selected
     */
    selected?: boolean;
    /**
     * Value of menu item
     */
    value?: string;
}
export { MenuItem };
export { MenuItemProps, MenuItemRef };
export default MenuItem;

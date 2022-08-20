import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import { BDSForwardRef, BDSFunctional } from '../utils/typings/BDSComponentProps';
import type { LinkProps } from '../Link';
import type { MenuProps } from '../Menu';
import type { MenuItemProps } from '../MenuItem';
import type { MenuPopoverProps } from '../MenuPopover';
import type { CrumbProps } from '../Breadcrumb';
declare type CrumbMenuLinkProps = LinkProps & Omit<MenuItemProps, 'ref'>;
declare const CrumbMobile: BDSFunctional<CrumbMenuLinkProps>;
/**
 * Backyard React Breadcrumb Mobile
 *
 * Mobile-only version of `Breadcrumb`
 */
declare const BreadcrumbMobile: BDSForwardRef<BreadcrumbMobileProps>;
declare type BreadcrumbMobileRef = HTMLElement;
interface MenuItemCrumbProps extends Omit<MenuItemProps, 'children'> {
    /**
     * Children are option in Link Crumbs
     */
    children?: React.ReactElement;
}
interface BreadcrumbMobileProps extends BackyardBaseProps<BreadcrumbMobileRef> {
    /**
     * Label for aria to speak
     */
    ariaLabel?: string;
    /**
     * Crumb items to render
     */
    crumbs: CrumbProps[];
    /**
     * Component to render crumb with
     *
     * Defaults to `MenuItem` component
     */
    crumb?: React.ComponentClass;
    /**
     * React DOM Class
     */
    className?: string;
    /**
     * `Menu` props override
     */
    menuProps?: MenuProps;
    /**
     * `MenuPopover` props override
     */
    menuPopoverProps?: MenuPopoverProps;
    /**
     * Toggle element for opening/closing the mobile breadcrumb popover
     *
     * @default `IconButton`
     */
    toggle?: React.ReactElement;
}
export { BreadcrumbMobile, CrumbMobile };
export type { BreadcrumbMobileProps, BreadcrumbMobileRef, MenuItemCrumbProps };
export default BreadcrumbMobile;

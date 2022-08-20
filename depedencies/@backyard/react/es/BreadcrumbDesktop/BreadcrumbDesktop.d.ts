import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import { BDSForwardRef, BDSFunctional } from '../utils/typings/BDSComponentProps';
import type { LinkProps } from '../Link';
declare const CrumbDesktop: BDSFunctional<LinkProps>;
declare const BreadcrumbDesktop: BDSForwardRef<BreadcrumbDesktopProps>;
declare type BreadcrumbDesktopRef = HTMLElement;
interface LinkCrumbProps extends Omit<LinkProps, 'children'> {
    /**
     * Children are option in Link Crumbs
     */
    children?: React.ReactElement;
}
interface BreadcrumbDesktopProps extends BackyardBaseProps<BreadcrumbDesktopRef> {
    /**
     * Label for aria to speak
     */
    ariaLabel?: string;
    /**
     * Crumb items to render
     */
    crumbs: LinkCrumbProps[];
    /**
     * Component to render crumb with
     * Defaults to `Link` component
     */
    crumb?: React.ComponentClass;
    /**
     * React DOM Class
     */
    className?: string;
}
export { BreadcrumbDesktop, CrumbDesktop };
export type { BreadcrumbDesktopProps, BreadcrumbDesktopRef, LinkCrumbProps };
export default BreadcrumbDesktop;

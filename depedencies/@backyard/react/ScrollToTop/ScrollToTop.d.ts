import * as React from 'react';
import type { PortalProps } from '../Portal';
import { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Scroll To Top
 *
 * Provides a button to allow the user to have quick access back to the top of the page without scrolling up manually.
 *
 * Documentation:
 *
 * - [ScrollToTop](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/ScrollToTop)
 *
 * API:
 *
 * - [ScrollToTop API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/ScrollToTop)
 *
 */
declare const ScrollToTop: BDSForwardRef<ScrollToTopProps>;
declare type ScrollToTopRef = HTMLDivElement;
interface ScrollToTopProps extends BackyardBaseProps<ScrollToTopRef> {
    /**
     * Wrapper DOM className
     */
    className?: string;
    /**
     * Hides the FAB from the screen when true
     */
    hide?: boolean;
    /**
     * Turns off the animation effect of the FAB sliding in/out from the bottom of the screen when true
     */
    noAnimation?: boolean;
    /**
     * Number in pixels that the user has to scroll from the *top of the page* inorder for the scrollToTop fab
     * to appear on the screen.
     * If you don't want the user to have to scroll for it to appear just put 0.
     */
    showAt?: number;
    /**
     * Element Ref that the page should scroll to when the ScrollToTop component is clicked.
     * If nothing is provided it just scrolls to the top of the window.
     */
    scrollToRef?: React.Ref<HTMLElement>;
    /**
     * Space between the Button and the right side of the window
     */
    rightPosition?: keyof BackyardToken['sizes'] | string;
    /**
     * Space between the Button and the bottom of the window
     */
    bottomPosition?: keyof BackyardToken['sizes'] | string;
    /**
     * `onClick` trigger function
     * @argument {Event} event - DOM event
     */
    onClick?: (event: React.MouseEvent) => void;
    /**
     * Portal Container
     */
    container?: PortalProps['container'];
    /**
     * Whether or not portal will be disabled
     */
    disablePortal?: PortalProps['disablePortal'];
}
export { ScrollToTop };
export type { ScrollToTopProps, ScrollToTopRef };
export default ScrollToTop;

import * as React from 'react';
import { Modifier as PopperJSModifier, Options as PopperJSOptions } from '@popperjs/core/lib/types';
import 'core-js/es/array/find';
import 'core-js/es/promise';
import 'core-js/es/object/assign';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { TooltipProps, TooltipRef } from '../Tooltip';
import type { PortalProps } from '../Portal';
export declare function testReset(): void;
/**
 * Backyard React TooltipPopper
 *
 * @todo Comments
 */
declare const TooltipPopper: BDSForwardRef<TooltipPopperProps>;
declare type TooltipPopperRef = TooltipRef;
declare type TooltipPopperEvent = React.MouseEvent;
declare type TooltipPopperOverrideProps = 'title';
interface TooltipPopperProps extends Omit<TooltipProps, TooltipPopperOverrideProps> {
    /**
     * Tooltip reference element.
     */
    children: React.ReactElement<any, any>;
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Portal Container
     */
    container?: PortalProps['container'];
    /**
     * Whether or not the tooltip is open by default
     */
    defaultOpen?: boolean;
    /**
     * Whether or not portal will be disabled
     */
    disablePortal?: PortalProps['disablePortal'];
    /**
     * The number of milliseconds to wait before showing the tooltip.
     * This prop won't impact the enter touch delay (`enterTouchDelay`).
     */
    enterDelay?: number;
    /**
     * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
     */
    enterNextDelay?: number;
    /**
     * This prop is used to help implement the accessibility logic.
     * If you don't provide this prop. It falls back to a randomly generated id.
     */
    id?: string;
    /**
     * Whether or not the tooltip/portal will remain mounted when closed
     * This is useful for SSR/SEO situations where you want the Tooltip to remain on the page when closed
     */
    keepMounted?: boolean;
    /**
     * The number of milliseconds to wait before hiding the tooltip.
     * This prop won't impact the leave touch delay (`leaveTouchDelay`).
     */
    leaveDelay?: number;
    /**
     * Callback fired when the component requests to be closed.
     *
     * @param {Event} event The event source of the callback.
     */
    onClose?: (event: TooltipPopperEvent) => void;
    /**
     * Callback fired when the component requests to be open.
     *
     * @param {object} event The event source of the callback.
     */
    onOpen?: (event: TooltipPopperEvent) => void;
    /**
     * If `true`, the tooltip is shown.
     */
    open?: boolean;
    /**
     * Position of the tooltip from the reference element (child)
     * Note: This is opposite of `Tooltip`'s `arrow` prop, which positions the tooltip from the reference
     *  For example, a `bottom` placed `TooltipPopper` will have the `arrow` be on top
     *  [Some Element]
     *       /|\
     *    [Tooltip]
     */
    placement?: 'bottom-end' | 'bottom-start' | 'bottom' | 'left-end' | 'left-start' | 'left' | 'right-end' | 'right-start' | 'right' | 'top-end' | 'top-start' | 'top';
    /**
     * PopperJS Modifiers to extend/override default modifiers in `TooltipPopper`
     */
    popperModifiers?: PopperJSModifier<string, object>[];
    /**
     * PopperJS Options to extends/override default options in `TooltipOptions`
     */
    popperOptions?: PopperJSOptions;
    /**
     * Tooltip title. Zero-length titles string are never displayed.
     */
    title?: React.ReactNode;
    /**
     * Tooltip to handle popper events
     */
    tooltip: React.ReactElement<TooltipProps>;
}
export { TooltipPopper };
export { TooltipPopperProps, TooltipPopperRef };
export default TooltipPopper;

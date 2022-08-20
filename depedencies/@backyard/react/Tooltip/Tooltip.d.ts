import * as React from 'react';
import type { BackyardBaseProps, BDSForwardRef, KeyOf } from '../utils/typings';
import type { BackyardTheme } from '../ThemeProvider';
/**
 * Backyard React Tooltip
 *
 * @todo Comments
 */
declare const Tooltip: BDSForwardRef<TooltipProps>;
declare type TooltipRef = HTMLDivElement;
interface TooltipProps extends BackyardBaseProps<TooltipRef> {
    /**
     * Position of arrow from the center of the tooltip
     * Note: This is opposite of `TooltipPopper`'s `placement` prop, which positions the tooltip from the reference
     *  For example, a `bottom` placed `TooltipPopper` will have the `arrow` be on top
     *  [Some Element]
     *       /|\
     *    [Tooltip]
     */
    arrow?: 'none' | 'top-start' | 'top' | 'top-end' | 'left' | 'right' | 'bottom-start' | 'bottom' | 'bottom-end';
    /**
     * Arrow Props to extend arrow with
     */
    arrowProps?: BackyardBaseProps<HTMLSpanElement>;
    /**
     * Children of subtitle span
     */
    children?: React.ReactNode;
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Leading icon of tooltip
     */
    icon?: React.ReactElement;
    /**
     * Whether or not tooltip is invisible
     */
    invisible?: boolean;
    /**
     * Shadow token to use, or none
     *
     * @default 'shadow_04'
     */
    shadow?: 'none' | KeyOf<BackyardTheme['shadows']> | 'string';
    /**
     * Title text of Tooltip
     */
    title?: string;
    /**
     * Variant of Tooltip
     */
    variant?: 'low_contrast' | 'high_contrast';
    /**
     * Shape of the tooltip
     */
    shape?: 'rounded' | 'squared';
    /**
     * Width of Tooltip
     * Defaults to auto
     * Limited by a maximum width of 320px (Desktop) and 256px (Mobile)
     */
    width?: string;
}
export { Tooltip };
export type { TooltipProps, TooltipRef };
export default Tooltip;

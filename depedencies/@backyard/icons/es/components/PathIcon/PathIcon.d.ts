import * as React from 'react';
import type { BackyardBaseProps, BackyardToken } from '../../utils/typings/BackyardProps';
/**
 * SVG wrapper utility that provides a container for a given icon, svg path.
 * Additionally PathIcon provides some helper props to easily change the color, size, additional classnames
 * and a title for the Icon.
 *
 * ex:
 * ```
 *  <PathIcon
 *      color='interactive'
 *      size='S5'
 *      title='Circle'
 *  >
 *      <circle cx="50" cy="50" r="40" />
 *  </PathIcon>
 * ```
 */
declare const PathIcon: React.ForwardRefExoticComponent<PathIconProps>;
declare type PathIconRef = SVGElement;
declare type PathIconOverrideProps = 'size';
interface PathIconProps extends BackyardBaseProps<PathIconRef, PathIconOverrideProps> {
    /**
     * DOM class to be applied directly to the svg.
     */
    className?: string;
    /**
     * Sets the fill color of the svg path.
     */
    color?: keyof BackyardToken['color'] | string;
    /**
     * Overwrites the default size of the icon.
     * Takes in @backyard/design-tokens sizing/sizes token.
     */
    size?: keyof BackyardToken['sizes'] | string;
    /**
     * Defines the position and dimension, in user space, of an SVG viewport.
     * Should only consist of four numbers: min-x, min-y, width and height separated
     * by whitespace and/or a comma.
     *
     * ex: '0 0 24 24'
     */
    viewBox?: string;
    /**
     * Provides a human readable name for the SVG content
     */
    title?: string;
    /**
     * Transform override for icon
     *
     * Shorthand for using `style={{ transform: value }}`
     */
    transform?: React.SVGAttributes<PathIconRef>['transform'];
    /**
     * Set true when building custom icons for the bds-icon repo, ie credit card icons, that contains many colors
     * and paths to prevent defaulting the fill for all of the paths to be the same color or overriding a set fill color.
     * NOTE: This attribute is not to be used outside of the bds-icon repo.
     */
    overrideColor?: boolean;
}
export { PathIcon };
export type { PathIconProps, PathIconRef };
export default PathIcon;

import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Pill
 *
 * Wraps a child and renders a colored number at the anchor position
 * Wrapped component should be a single element, such as an icon
 *
 * Can be used without children for further customizability
 *
 * If `value` prop is not defined, forces to 'dot' shape
 * If `value` prop is defined, defaults to `circle` shape
 * It is possible to set `shape` to 'dot' and still give a number
 *
 * If `invisible` flag is set, pill will still render, but not be visible
 *      Note: `children` will still be visible
 *
 *  <Pill
 *      color="red"
 *  >
 *      <Account />
 *  </Pill>
 *
 *  <Pill
 *      color="green"
 *      value={23}
 *  />
 */
declare const Pill: BDSForwardRef<PillProps>;
declare type PillRef = HTMLSpanElement;
declare type PillOverrideProps = 'size';
interface PillProps extends BackyardBaseProps<PillRef, PillOverrideProps> {
    /**
     * The anchor of the pill [y-pos, x-pos]
     * top-left, top-right, bottom-left, bottom-right
     */
    anchor?: Array<'top' | 'bottom' | 'left' | 'right'>;
    /**
     * The pill will be added relative to this node.
     */
    children?: React.ReactNode;
    /**
     * DOM Class Name for pill
     */
    className?: string;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: 'dark-blue' | 'blue' | 'light-blue' | 'interactive' | 'green' | 'red' | 'gold' | 'lfp-yellow' | 'neutral';
    /**
     * Display type of wrapper
     * Useful if you need a blocking 'flex'
     */
    display?: string;
    /**
     * Whether or not the pill is invisible
     * If invisible, still renders children; only the pill is invisible
     */
    invisible?: boolean;
    /**
     * Maximum value of pill number
     */
    max?: number;
    /**
     * Shape of pill
     * Useful if you still want to provide a `value`, but force a dot
     */
    shape?: 'circle' | 'dot';
    /**
     * Value of pill
     */
    value?: number;
    /**
     * Variant of pill
     */
    variant?: 'filled' | 'outlined' | 'indicator';
    /**
     * Wrapper props of pill and children
     * Useful for if you want to set the `style` prop of the wrapper
     */
    wrapperProps?: BackyardBaseProps<PillRef> & {
        display?: string;
    };
    /**
     * Change the size of the pill
     */
    size?: 'medium' | 'jumbo';
}
export { Pill };
export { PillProps, PillRef };
export default Pill;

import * as React from 'react';
import type { TooltipProps } from '../Tooltip';
import type { TooltipPopperProps } from '../TooltipPopper';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
declare const Slider: BDSForwardRef<SliderProps>;
declare type SliderRef = HTMLSpanElement;
interface SliderProps {
    className?: string;
    /**
     * The default value for the slider.
     */
    defaultValue?: number;
    /**
     * Wether or not the slider is disabled.
     */
    disabled?: boolean;
    /**
     * If the input should be rendered.
     */
    showInput?: boolean;
    /**
     * The max value of the slider.
     */
    max?: number;
    /**
     * The min value of the slider.
     */
    min?: number;
    /**
     * The value the slider will increment and decrement.
     */
    step?: number;
    /**
     * Adds a className to the thumb component.
     */
    thumbClassName?: String;
    /**
     * The tooltip being displayed.
     */
    tooltip?: Boolean;
    /**
     * `onChange` trigger function
     *  @argument {Event} event
     */
    onChange?: (event: React.ChangeEvent, currentValue: String) => void;
    /**
     * `onChangeCommitted` trigger function
     *  @argument {Event} event
     */
    onChangeCommitted?: (event: React.ChangeEvent) => void;
    /**
     * `onFocus` trigger function
     *  @argument {Event} event
     */
    onFocus?: (event: React.FocusEvent) => void;
    /**
     * `onBlur` trigger function
     *  @argument {Event} event
     */
    onBlur?: (event: React.FocusEvent) => void;
    /**
     * `onMouseDown` trigger function
     *  @argument {Event} event
     */
    onMouseDown?: (event: React.MouseEvent) => void;
    /**
     * The orientation of the slider.
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Shape of the tooltip
     */
    shape?: 'rounded' | 'squared';
    /**
     * The tooltip popper's prop overrides
     */
    popoverProps?: Partial<TooltipPopperProps>;
    /**
     * The tooltip popper's prop overrides
     *
     * Alias of `popoverProps`
     */
    popperProps?: Partial<TooltipPopperProps>;
    /**
     * Tooltip prop overrides
     */
    tooltipProps?: TooltipProps;
    /**
     * The value of the slider.
     */
    value?: number;
}
export { Slider };
export type { SliderProps, SliderRef };
export default Slider;

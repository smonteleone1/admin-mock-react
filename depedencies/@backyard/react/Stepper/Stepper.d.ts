import * as React from 'react';
import type { IconButtonProps } from '../IconButton';
import type { TextInputRef, TextInputProps } from '../TextInput';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Stepper
 *
 * Stepper component consists of a minus and plus button, and a text input
 * along with some useful logic to handle max, mins, and steps.
 * The text input for `Stepper` will only accept numbers.
 *
 *  <Stepper step={2} max={10} label="Qty." />
 *
 * When the `min` value is reached, the minus will become disabled and the user
 * will not be able to type a number that is less than it.
 * The same is vice-versa for `max`
 *
 * The `step` prop allows for increments and decrements from the button clicks to
 * step by the value given.
 *
 * The `roundToStep` prop will use the `min` value as a base and only allow values
 * that `step` factors into with a base of `min`. This includes the user typing.
 * For example, if `min=1`, `step=3`, and `max=12`, then the only possible values the
 * stepper can be are [1, 4, 7, 10]. Max (12) in this case cannot be reached because we are
 * stepping by 3s from a base of 1. If the user attempts to type in a value of 8, then the
 * value will round to the nearest possible step, which is 7 in this case.
 */
declare const Stepper: BDSForwardRef<StepperProps>;
declare type StepperValueInfo = {
    action?: 'increment' | 'decrement';
    current: string;
    previous: string;
};
declare type StepperRef = TextInputRef;
declare type StepperOverrideProps = 'onBlur' | 'onChange' | 'defaultValue';
interface StepperProps extends Omit<TextInputProps, StepperOverrideProps> {
    /**
     * DOM Class Name of `input` in `Stepper`
     */
    className?: string;
    /**
     * Whether or not `Stepper` is disabled
     */
    disabled?: boolean;
    /**
     * Description for Aria to read on increment `IconButton`
     */
    incrementNumLabel?: string;
    /**
     * Description for Aria to read on decrement `IconButton`
     */
    decrementNumLabel?: string;
    /**
     * Props to override increment button with
     */
    incrementProps?: IconButtonProps;
    /**
     * Props to override decrement button with
     */
    decrementProps?: IconButtonProps;
    /**
     * Description for Aria to read on both `IconButton`s
     */
    iconDescription?: string;
    /**
     * DOM ID of `input` in `Stepper`
     */
    id?: string;
    /**
     * Label for the `Stepper`
     */
    label?: string;
    /**
     * Max value to clamp and allow
     */
    max?: number;
    /**
     * Min value to clamp and allow
     */
    min?: number;
    /**
     * Whether or not buttons are included with the stepper input
     */
    hideButtons?: boolean;
    /**
     * `onBlur` trigger function
     * @argument {Event} event - DOM Event of onBlur event
     * @argument {object<string, value>} object - { action, current, previous } value
     */
    onBlur?: (event: React.FocusEvent, info: StepperValueInfo) => void;
    /**
     * `onFocus` trigger function
     * @argument {Event} event
     */
    onFocus?: (event: React.FocusEvent) => void;
    /**
     * `onChange` trigger function
     * @argument {Event} event - DOM Event of onChange event
     * @argument {object<string, value>} object - { action, current, previous } value
     */
    onChange?: (event: React.ChangeEvent, info: StepperValueInfo) => void;
    /**
     * Number to step by for each increment and decrement
     */
    step?: number;
    /**
     * Whether or not when user types number to clamp to the nearest possible step, based on minimum value
     */
    roundToStep?: boolean;
    /**
     * Value of `input` in `Stepper`
     */
    value?: number;
    /**
     * Default value of an uncontrolled `Stepper`
     */
    defaultValue?: number;
    /**
     * Aria Label for `input` of `Stepper` to read out
     */
    ariaLabel?: string;
    /**
     * Shape of `input` and `IconButton`s
     */
    shape?: 'rounded' | 'squared';
    /**
     * Size of the input and buttons
     *
     * Default: 'large'
     */
    size?: 'jumbo' | 'large' | 'medium' | 'small';
    /**
     * State of `Stepper`
     * Allows redraw when pushing 'error' to this prop
     */
    state?: 'default' | 'error';
    /**
     * Props to extend `StepperWrapper`
     * Useful for setting `style` overrides for the wrapper
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>;
}
export { Stepper };
export type { StepperProps, StepperRef, StepperValueInfo };
export default Stepper;

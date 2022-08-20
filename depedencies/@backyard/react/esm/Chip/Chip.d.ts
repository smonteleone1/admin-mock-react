import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Chip
 *
 * Chip is used to interact with two different types of values in a form:
 *      1. Boolean
 *      2. String Selections
 *
 * > Note: Requires uniquely assigned `id` prop
 * > Note: `label` is always required
 * > Note: `name` is required when `type` is `choice`
 *
 *  <Chip type="filter" id="filter" label="Filter Chip" />
 *  <Chip type="choice" id="choice" name="choice" label="Choice Chip" />
 *  <Chip type="input" id="input" label="Input Chip" />
 *
 * To group `Chip`s horizontally or vertically, use `FormGroup`:
 *
 *  <FormControl>
 *      <FormHeading>Here's some Chips</FormHeading>
 *      <FormGroup
 *          direction="row"
 *      >
 *          <Chip type="filter" id="filter" label="Filter Chip" />
 *          <Chip type="choice" id="choice" name="choice" label="Choice Chip" />
 *          <Chip type="input" id="input" label="Input Chip" />
 *      </FormGroup>
 *      <FormHelperText>Some Helper Text</FormHelperText>
 *  </FormControl>
 */
declare const Chip: BDSForwardRef<ChipProps>;
declare type ChipRef = HTMLInputElement;
declare type ChipOverrideProps = 'onFocus' | 'onChange' | 'onClick' | 'onKeyDown' | 'onKeyUp';
interface ChipProps extends BackyardBaseProps<ChipRef, ChipOverrideProps> {
    /**
     * DOM Class Name of `input`
     */
    className?: string;
    /**
     * Whether or not `input` is checked
     * Uses controlled `checked` value if defined
     */
    checked?: boolean;
    /**
     * Whether or not `input` id checked by default
     * Uses uncontrolled `checked` value if defined
     */
    defaultChecked?: boolean;
    /**
     * Whether or not `input` is disabled
     */
    disabled?: boolean;
    /**
     * Main icon for `input` type `Chip`
     * Does not render on any other type
     */
    icon?: React.ReactNode;
    /**
     * DOM ID of `input`
     */
    id?: string;
    /**
     * Required
     * Label text of `Chip`
     */
    label: string;
    /**
     * DOM Name of `input`
     * Required for choice chips to sync
     */
    name?: string;
    /**
     * `onChange` trigger function when `input` value is changed
     * @argument {React.ChangeEvent} event - DOM Event
     * @argument {ChipEventInfo} info - { checked, value } of `event.target`
     */
    onChange?: (event: React.ChangeEvent, info: ChipEventInfo) => void;
    /**
     * `onClick` trigger function when `Chip` is clicked
     * @argument {React.MouseEvent} event - DOM Event
     * @argument {ChipEventInfo} info - { checked, value } of `event.target`
     */
    onClick?: (event: React.MouseEvent, info: ChipEventInfo) => void;
    /**
     * `onDelete` trigger function when 'input' type `Chip` is deleted
     * @argument {ChipEvent} event - DOM Event
     * @argument {ChipEventInfo} info - { checked, value } of `event.target`
     */
    onDelete?: (event: ChipEvent, info: ChipEventInfo) => void;
    /**
     * `onKeyUp` trigger function when key is pressed and released on `Chip`
     * @argument {React.KeyboardEvent} event - DOM Event
     * @argument {ChipEventInfo} info - { checked, value } of `event.target`
     */
    onKeyUp?: (event: React.KeyboardEvent, info: ChipEventInfo) => void;
    /**
     * `onKeyDown` trigger function when key is pressed and released on `Chip`
     * @argument {React.KeyboardEvent} event - DOM Event
     * @argument {ChipEventInfo} info - { checked, value } of `event.target`
     */
    onKeyDown?: (event: React.KeyboardEvent, info: ChipEventInfo) => void;
    /**
     * `onKeyUp` trigger function when key is pressed and released on `Chip`
     * @argument {React.FocusEvent} event - DOM Event
     * @argument {ChipEventInfo} info - { checked, value } of `event.target`
     */
    onFocus?: (event: React.FocusEvent, info: ChipEventInfo) => void;
    /**
     * Type of `Chip` to render
     * Choice -> Similar to Radio Input, can only have one selected for a given set of equivalent names
     * Filter -> Similar to Checkboxes, can select as many with a given set of names as desired
     * Input -> Chip contains a given value, and when activated, will be removed from the form
     */
    variant?: 'choice' | 'filter' | 'input';
    /**
     * Value of `input`
     */
    value?: string;
    /**
     * Props to extend `ChipBase` with
     * Useful for setting `style` of `ChipBase` instead of `input`
     */
    wrapperProps?: BackyardBaseProps<HTMLSpanElement>;
    /**
     * Whether to use the subdued interactive color
     */
    subdued?: boolean;
}
declare type ChipEvent = React.MouseEvent | React.KeyboardEvent | React.FocusEvent;
interface ChipEventInfo {
    /**
     * Whether or not Chip is checked
     */
    checked: boolean;
    /**
     * Value of Chip
     */
    value: string;
}
export { Chip };
export type { ChipProps, ChipRef };
export default Chip;

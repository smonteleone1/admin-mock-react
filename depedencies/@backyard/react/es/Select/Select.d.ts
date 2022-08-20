import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { OptionGroupProps } from './OptionGroup';
import type { OptionProps } from './Option';
/**
 * Backyard React Select
 *
 * Select component that uses native option selection; see `Dropdown` for a custom selector...
 *
 * ```
 *  <Select>
 *      <Option value="1">Option 1</Option>
 *      <Option value="2">Option 2</Option>
 *      <Option value="3">Option 3</Option>
 *  </Select>
 * ```
 *
 * Can group options via `OptionGroup` and allow native selection to handle visuals
 *
 * ```
 *  <Select>
 *      <OptionGroup
 *          label="Group 1"
 *      >
 *          <Option value="11">Option 1</Option>
 *          <Option value="12">Option 2</Option>
 *          <Option value="13">Option 3</Option>
 *      </OptionGroup>
 *      <OptionGroup
 *          label="Group 2"
 *      >
 *          <Option value="21">Option 1</Option>
 *          <Option value="22">Option 2</Option>
 *          <Option value="23">Option 3</Option>
 *      </OptionGroup>
 *  </Select>
 * ```
 *
 * To include helper text, wrap in `FormControl` and use `FormHelperText` to sync visual states
 *
 * ```
 *  <FormControl>
 *      <Select>
 *          <Option value="1">Option 1</Option>
 *          <Option value="2">Option 2</Option>
 *          <Option value="3">Option 3</Option>
 *      </Select>
 *      <FormHelperText>Helper Text</FormHelperText>
 *  </FormControl>
 * ```
 */
declare const Select: BDSForwardRef<SelectProps>;
declare type SelectRef = HTMLSelectElement;
declare type SelectOptionInfo = {
    index: number;
    value: OptionProps['value'];
    text: OptionProps['children'];
    disabled: OptionProps['disabled'];
    label: OptionProps['children'];
};
interface SelectOption {
    label?: string;
    value?: string | number;
    disabled?: boolean;
    options?: SelectOption[];
    [key: string]: any;
}
declare type SelectOverrideProps = 'onChange' | 'onClick' | 'onKeyDown' | 'onFocus' | 'onBlur' | 'size' | 'label';
interface SelectProps extends BackyardBaseProps<SelectRef, SelectOverrideProps> {
    /**
     * List of options in declarative `Option` or `OptionGroup` elements
     *
     * Is required if `options` is not defined,
     * Will be overridden by `options` if both defined.
     */
    children?: React.ReactElement<OptionGroupProps>[] | React.ReactElement<OptionProps>[];
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Whether or not input is disabled
     */
    disabled?: boolean;
    /**
     * Default value of input
     */
    defaultValue?: string | number;
    /**
     * Icon displayed when opened
     */
    iconOpened?: React.ReactElement;
    /**
     * Icon displayed when closed
     */
    iconClosed?: React.ReactElement;
    /**
     * Initial interaction given to component
     */
    interaction?: boolean | string;
    /**
     * Label of the `Select` component
     */
    label?: string | React.ReactElement;
    /**
     * Visual shape of text input
     */
    shape?: 'rounded' | 'squared';
    /**
     * Size of component
     */
    size?: 'jumbo' | 'large' | 'medium' | 'small';
    /**
     * Visual state of component
     */
    state?: 'default' | 'error' | 'success';
    /**
     * Type of text input
     */
    type?: string;
    stacked?: boolean;
    /**
     * `onChange` trigger event
     * @param {React.ChangeEvent} event - DOM Event
     * @param {SelectOptionInfo} option - option info object
     */
    onChange?: (event: React.ChangeEvent<SelectRef>, option: SelectOptionInfo) => void;
    /**
     * `onClick` trigger event
     * @param {React.ChangeEvent} event - DOM Event
     * @param {SelectOptionInfo} option - option info object
     */
    onClick?: (event: React.MouseEvent<SelectRef>, option: SelectOptionInfo) => void;
    /**
     * `onKeyDown` trigger event
     * @param {React.ChangeEvent} event - DOM Event
     * @param {SelectOptionInfo} option - option info object
     */
    onKeyDown?: (event: React.KeyboardEvent<SelectRef>, option: SelectOptionInfo) => void;
    /**
     * `onFocus` trigger event
     * @param {React.ChangeEvent} event - DOM Event
     * @param {SelectOptionInfo} option - option info object
     */
    onFocus?: (event: React.FocusEvent<SelectRef>, option: SelectOptionInfo) => void;
    /**
     * `onBlur` trigger event
     * @param {React.ChangeEvent} event - DOM Event
     * @param {SelectOptionInfo} option - option info object
     */
    onBlur?: (event: React.FocusEvent<SelectRef>, option: SelectOptionInfo) => void;
    /**
     * Data-driven list of options to provide to select
     *
     * Is required if `children` not defined,
     * Will override `children` if both defined.
     */
    options?: SelectOption[];
    /**
     * Controlled value of the select input
     */
    value?: string | number;
    /**
     * Wrapper props object for text input.
     * Useful for setting the style of text input
     * visual container instead of input directly
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>;
    itemBefore?: React.ReactElement;
}
export { Select };
export type { SelectProps, SelectRef, SelectOptionInfo, SelectOption };
export default Select;

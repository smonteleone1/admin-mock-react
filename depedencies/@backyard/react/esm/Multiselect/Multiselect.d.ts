import * as React from 'react';
import type { PopoverProps } from '../Popover';
import { ListSelectorMultipleProps } from '../ListSelector/ListSelectorMultiple';
import type { SelectProps, SelectRef, SelectOption, OptionProps } from '../Select';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import { ToggleProps } from '../Toggle';
/**
 * Backyard React Multiselect
 *
 * Customized popover for multiple variant of `Select`
 *
 * Examples:
 *
 * - [Multiselect](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/Multiselect)
 *
 * API:
 *
 * - [Multiselect API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Multiselect)
 *
 * - [Option API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Option)
 */
declare const Multiselect: BDSForwardRef<MultiselectProps>;
declare type MultiselectRef = SelectRef;
interface MultiselectOption extends SelectOption {
}
declare type MultiselectPopoverContent = {
    /**
     * Content above the `ListSelector`
     */
    above?: React.ReactElement;
    /**
     * Content below the `ListSelector`
     */
    below?: React.ReactElement;
};
declare type MultiselectOverrideProps = 'onChange' | 'onKeyDown' | 'onBlur' | 'defaultValue' | 'value' | 'children' | 'size' | 'ref';
interface MultiselectProps extends Omit<SelectProps & ToggleProps, MultiselectOverrideProps> {
    /**
     * Children to define options from
     *
     * Required is `options` not defined,
     * Is overridden by `options` if defined
     */
    children?: React.ReactElement<OptionProps>[];
    /**
     * Event keys that will trigger a close when focused on
     */
    closeKeys?: React.KeyboardEvent['key'][];
    /**
     * Event keys that will trigger open when focused on
     */
    openKeys?: React.KeyboardEvent['key'][];
    /**
     * Default value of the multiselect
     */
    defaultValue?: string[];
    /**
     * Amount in milliseconds to delay closing the popover
     */
    delayClose?: number;
    /**
     * Amount in milliseconds to delay opening the popover
     */
    delayOpen?: number;
    /**
     * Whether or not popover will automatically close when
     * user selected a value from the list
     */
    disableCloseOnSelect?: boolean;
    /**
     * List Selector props to override list selector with
     */
    listSelectorProps?: ListSelectorMultipleProps;
    /**
     * Popper props to override popover with
     */
    popoverProps?: Partial<PopoverProps>;
    /**
     * Popper props to override popover with
     *
     * Alias of `popoverProps`
     */
    popperProps?: Partial<PopoverProps>;
    /**
     * Set maximum popover height in `rem`
     *
     * Defaults to showing five and a half options
     */
    maxHeight?: string;
    /**
     * `onChange` trigger function for when either
     * the native component or the custom calendar change interaction occurs
     */
    onChange?: (event: React.MouseEvent, value: string[]) => void;
    /**
     * `onKeyDown` trigger event for
     * when the user presses a key on the `select`
     */
    onKeyDown?: (event: React.KeyboardEvent<SelectRef>) => void;
    /**
     * `onBlur` trigger event for when the
     * user blurs focus on the `select`
     */
    onBlur?: (event: React.FocusEvent<SelectRef>) => void;
    /**
     * `onOpen` trigger function for when the calendar popover opens
     */
    onOpen?: () => void;
    /**
     * `onClose` trigger function for when the calendar popover closes
     */
    onClose?: () => void;
    /**
     * `onMouseDown` trigger function
     */
    onMouseDown?: () => void;
    /**
     * State of the native date picker
     * Either 'error' or 'default'
     */
    state?: SelectProps['state'];
    /**
     * Shape of the input and popover
     */
    shape?: 'rounded' | 'squared';
    /**
     * Options to define dropdown children from
     *
     * Required if `children` not defined.
     * Overrides `children` if defined.
     */
    options?: MultiselectOption[];
    /**
     * Size of component
     */
    size?: 'jumbo' | 'large' | 'medium' | 'small';
    /**
     * Controlled value for dropdown
     */
    value?: string[];
    /**
     * Label of the multiselect
     */
    label?: string;
    /**
     * Whether or not the multiselect popover is open
     */
    open?: boolean;
    /**
     * `id` of the select input
     */
    id?: string;
    /**
     * Content above and/or below the `ListSelector` in the Popover
     */
    popoverContent?: MultiselectPopoverContent;
    /**
     * Whether or not to display the select all toggle
     *
     * Enabled by default
     */
    noSelectAll?: boolean;
}
export { Multiselect };
export type { MultiselectRef, MultiselectProps, MultiselectPopoverContent };
export default Multiselect;

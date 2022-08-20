import * as React from 'react';
import type { PopoverProps } from '../Popover';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { ListSelectorProps, ListSelectorOption } from '../ListSelector';
import type { SelectOptionInfo, SelectProps, SelectRef, SelectOption, OptionProps } from '../Select';
/**
 * Backyard React Dropdown
 *
 * Customized popover for `Select`
 *
 * Examples:
 *
 * - [Dropdown](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/Dropdown)
 *
 * API:
 *
 * - [Dropdown API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Dropdown)
 *
 * - [Option API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/Option)
 */
declare const Dropdown: BDSForwardRef<DropdownProps>;
declare type DropdownRef = SelectRef;
declare type DropdownOverrideProps = 'onChange' | 'onKeyDown' | 'onBlur' | 'value' | 'children' | 'size' | 'label';
interface DropdownChangeInfo extends SelectOptionInfo {
}
interface DropdownOption extends ListSelectorOption, SelectOption {
    tabIndex?: string;
}
interface DropdownProps extends Omit<SelectProps & ListSelectorProps, DropdownOverrideProps> {
    /**
     * Children to define options from
     *
     * Required is `options` not defined,
     * Is overridden by `options` if defined
     */
    children?: React.ReactElement<OptionProps>[];
    /**
     * Event keys that will trigger open when focused on
     */
    openKeys?: React.KeyboardEvent['key'][];
    /**
     * Event keys that will trigger close when focused on
     */
    closeKeys?: React.KeyboardEvent['key'][];
    /**
     * Amount in milliseconds to delay closing the popover
     * when a value is selected from the list
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
    listSelectorProps?: ListSelectorProps;
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
     * Set maximum popover height
     *
     * Defaults to showing five and a half options
     */
    maxHeight?: string;
    stacked?: boolean;
    /**
     * `onChange` trigger function for when either
     * the native component or the custom calendar change interaction occurs
     */
    onChange?: (event: React.ChangeEvent, value: DropdownChangeInfo) => void;
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
     *
     */
    size?: 'large' | 'medium' | 'small';
    /**
     * State of the native date picker
     * Either 'error' or 'default'
     */
    state?: SelectProps['state'];
    /**
     * Options to define dropdown children from
     *
     * Required if `children` not defined.
     * Overrides `children` if defined.
     */
    options?: DropdownOption[];
    /**
     * Label to place above options in select menu
     */
    optionsLabel?: string;
    /**
     * Controlled value for dropdown
     */
    value?: string | number;
    label?: string | React.ReactElement;
    ref?: any;
}
export { Dropdown };
export type { DropdownRef, DropdownProps, DropdownChangeInfo, DropdownOption };
export default Dropdown;

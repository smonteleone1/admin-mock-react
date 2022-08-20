import * as React from 'react';
import type { PopoverProps } from '../Popover';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
declare const Autocomplete: BDSForwardRef<AutocompleteProps>;
declare type AutocompleteRef = HTMLElement;
declare type AutocompleteOverrideProps = 'onChange' | 'onFocus' | 'onKeyDown';
interface AutocompleteProps extends BackyardBaseProps<AutocompleteRef, AutocompleteOverrideProps> {
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
     * Shape of the input and the popover
     */
    shape?: 'rounded' | 'squared';
    /**
     * Callback triggered when value of autocomplete changes
     */
    onChange?: (event: React.ChangeEvent, value: string) => void;
    /**
     * Callback triggered when popover opens
     */
    onOpen?: () => void;
    /**
     * Callback triggered when popover closed
     */
    onClose?: () => void;
    /**
     * Callback triggered when input focused
     */
    onFocus?: (event: React.FocusEvent, value: string) => void;
    /**
     * Callback triggered when key pressed with focus on input
     */
    onKeyDown?: (event: React.KeyboardEvent) => void;
    /**
     * React element to render as popover content
     */
    options?: React.ReactElement;
    /**
     * React element to render as popover input
     */
    renderInput: React.ReactElement;
    /**
     * Whether or not the popover is open
     */
    open?: boolean;
    /**
     * Value of the autocomplete
     */
    value?: string;
    /**
     * Whether or not the autocomplete is a search input
     */
    isSearch?: boolean;
    /**
     * Popover props to override Popover component with
     */
    popoverProps?: Partial<PopoverProps>;
    /**
     * Popover props to override Popover component with
     *
     * Alias of `popoverProps`
     */
    popperProps?: Partial<PopoverProps>;
}
export { Autocomplete };
export type { AutocompleteRef, AutocompleteProps };
export default Autocomplete;

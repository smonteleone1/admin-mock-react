import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Text Input
 *
 * Internal TextInput component that `TextField`, `Search`, `Password`, and `TextArea` extends off of
 *
 * Provides API for easily building more common styled text inputs
 *
 * It is recommended to use the above components before utilizing `TextInput` directly
 */
declare const TextInput: BDSForwardRef<TextInputProps>;
declare type TextInputRef = HTMLInputElement;
declare type TextInputOverrideProps = 'onChange' | 'onClick' | 'onFocus' | 'onBlur' | 'size';
interface TextInputProps<T = TextInputRef> extends BackyardBaseProps<T, TextInputOverrideProps> {
    /**
     * Component to render text input with
     */
    component?: React.ElementType | string;
    /**
     * Whether or not input is disabled
     */
    disabled?: boolean;
    /**
     * Default value of input
     */
    defaultValue?: string;
    /**
     * Icon displayed before text input
     */
    itemBefore?: React.ReactElement;
    /**
     * Icon displayed after text input
     */
    itemAfter?: React.ReactElement;
    /**
     * Initial interaction of component
     */
    interaction?: boolean | string;
    /**
     * `onChange` trigger event
     */
    onChange?: (event: React.ChangeEvent, value: any) => void;
    /**
     * `onChange` trigger event
     */
    onClick?: (event: React.MouseEvent, value: any) => void;
    /**
     * `onFocus` trigger event
     */
    onFocus?: (event: React.FocusEvent, value: any) => void;
    /**
     * `onBlur` trigger event
     */
    onBlur?: (event: React.FocusEvent, value: any) => void;
    /**
     * Value of text input
     */
    value?: any;
    /**
     * Visual shape of text input
     */
    shape?: 'rounded' | 'squared';
    /**
     * Size of component.
     */
    size?: 'large' | 'medium' | 'small' | 'jumbo';
    /**
     * Visual state of component
     */
    state?: 'default' | 'error' | 'success';
    /**
     * Type of text input
     */
    type?: string;
    /**
     * Wrapper props object for text input.
     * Useful for setting the style of text input
     * visual container instead of input directly
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement>;
    /**
     * Adding a suffix abbreviation to the end of the field
     */
    suffix?: string;
    /**
     * Boolean prop to have custom icons show correct coloring
     */
    customIcon?: boolean;
    hiddenLabel?: boolean;
}
export { TextInput };
export type { TextInputProps, TextInputRef };
export default TextInput;

import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { TextInputProps, TextInputRef } from '../TextInput';
/**
 * Backyard React Text Area
 *
 * Standard text area that extends `TextInput` for functionality.
 * TextArea is different from `TextField`, `Search`, etc. because it is wrapper in `FormControl`
 * in order to place the helper text on the same line as the counter.
 *
 *  <TextArea label="Label" max={500} />
 *
 * To include helper text, use `helperText` prop
 *
 *  <TextArea
 *      label="Comment"
 *      rows={10}
 *      max={2000}
 *      helperText="Type a comment here"
 *  />
 */
declare const TextArea: BDSForwardRef<TextAreaProps>;
declare type TextAreaRef = TextInputRef;
interface TextAreaProps extends TextInputProps {
    /**
     * Children
     */
    children?: React.ReactNode;
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
    defaultValue?: string;
    /**
     * Helper text to display
     */
    helperText?: string;
    /**
     * Default number of rows to show, changes default height
     */
    rows?: number;
    /**
     * Maximum number of characters allowed
     * When defined, text area will show character count
     */
    max?: number;
    /**
     * Whether or not resizer is present
     */
    resizer?: boolean;
    /**
     * Visual shape of text input
     */
    shape?: 'rounded' | 'squared';
    /**
     * Visual state of component
     */
    state?: 'default' | 'error' | 'success';
    /**
     * Type of text input
     */
    type?: string;
    label?: string;
    /**
     * Wrapper props object for text input.
     * Useful for setting the style of text input
     * visual container instead of input directly
     */
    wrapperProps?: BackyardBaseProps<HTMLDivElement> & {
        rows?: number;
    };
}
export { TextArea };
export type { TextAreaProps, TextAreaRef };
export default TextArea;

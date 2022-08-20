import * as React from 'react';
import type { TextInputProps, TextInputRef } from '../TextInput';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Password
 *
 * Password text input that extends on TextInput's API
 *
 *  <Password />
 *
 * To include helper text, use `FormControl` and `FormHelperText` to sync states
 *
 *  <FormControl>
 *      <Password label="Password" />
 *      <FormHelperText>Enter a password</FormHelperText>
 *  </FormControl>
 */
declare const Password: BDSForwardRef<PasswordProps>;
declare type PasswordRef = TextInputRef;
interface PasswordProps extends TextInputProps {
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
     * Whether or not password is visible, toggled by default
     */
    defaultToggle?: boolean;
    /**
     * Icon Before Text Input
     */
    icon?: React.ReactElement;
    /**
     * Defines fill color
     * Only useful for `filled` variant
     */
    fill?: string;
    /**
     * Display variant of text input
     */
    variant?: 'outlined' | 'filled';
    /**
     * Visual shape of text input
     */
    shape?: 'rounded' | 'squared';
    /**
     * Visual state of component
     */
    state?: 'default' | 'error' | 'success';
}
export { Password };
export type { PasswordProps, PasswordRef };
export default Password;

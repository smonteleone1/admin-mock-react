import * as React from 'react';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { TextInputProps, TextInputRef } from '../TextInput';
/**
 * Backyard React Text Field
 *
 * Standard text input that extends `TextInput` for functionality
 *
 *  <TextField label="Label" />
 *
 * To include helper text, use `FormControl` and `FormHelperText` to sync states
 *
 *  <FormControl>
 *      <TextField label="Username" />
 *      <FormHelperText>Enter a username</FormHelperText>
 *  </FormControl>
 */
declare const TextField: BDSForwardRef<TextFieldProps>;
declare type TextFieldRef = TextInputRef;
interface TextFieldProps extends TextInputProps {
    /**
     * Icon displayed before text
     */
    icon?: React.ReactElement;
    /**
     * Info after text input
     */
    info?: string;
    /**
     * Prop types to override info with
     */
    infoProps?: object;
}
export { TextField };
export type { TextFieldProps, TextFieldRef };
export default TextField;

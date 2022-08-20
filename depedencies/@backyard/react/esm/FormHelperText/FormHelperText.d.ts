import * as React from 'react';
import type { PathIconProps } from '@backyard/icons/components/PathIcon';
import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps';
import type { TypographyProps } from '../Typography';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Helper Text
 *
 *  <FormControl>
 *      <TextField />
 *      <FormHelperText>Example Helper Text</FormHelperText>
 *  </FormControl>
 *
 * Text to display as helper with other components.
 * Used with <FormControl> to correctly indent from input `indentHelper`
 */
declare const FormHelperText: BDSForwardRef<FormHelperTextProps>;
declare type FormHelperTextRef = HTMLSpanElement;
interface FormHelperTextProps extends BackyardBaseProps<FormHelperTextRef> {
    /**
     * String to use with <Typography>
     */
    children: string;
    /**
     * Override indent appearance
     */
    indent?: keyof BackyardToken['sizes'] | boolean;
    /**
     * Icon to appear before text
     */
    icon?: React.ReactElement<PathIconProps>;
    /**
     * Override disabled appearance
     */
    disabled?: boolean;
    /**
     * Override state appearance
     */
    state?: 'default' | 'success' | 'error' | 'info' | 'warning';
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Typography Props to extend Typography child with
     */
    typographyProps?: React.PropsWithRef<TypographyProps>;
}
export { FormHelperText };
export type { FormHelperTextProps, FormHelperTextRef };
export default FormHelperText;

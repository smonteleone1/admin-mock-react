import * as React from 'react';
import type { TypographyRef, TypographyProps } from '../Typography';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Form Heading
 *
 * `FormHeading` is intended to be used in conjunction with `FormControl`
 *
 * Use it on top of multiple form inputs inside `FormGroup` to give the
 * user visual context of the group of inputs. Example:
 *
 * ```
 *  <FormControl>
 *      <FormHeading>Heading Above FormGroup</FormHeading>
 *      <FormGroup>
 *          <Checkbox id="1" />
 *          <Checkbox id="2" />
 *          <Checkbox id="3" />
 *      </FormGroup>
 *      <FormHelperText>Helper Text Below FormGroup</FormHelperText>
 *  </FormControl>
 * ```
 */
declare const FormHeading: BDSForwardRef<FormHeadingProps>;
declare type FormHeadingRef = TypographyRef;
interface FormHeadingProps extends TypographyProps {
    /**
     * Text to use as heading
     */
    children: React.ReactNode;
    /**
     * DOM class name
     */
    className?: string;
    /**
     * Typography variant of heading
     * Normally should use default value of 'h5'
     */
    variant?: TypographyProps['variant'];
}
export { FormHeading };
export type { FormHeadingProps, FormHeadingRef };
export default FormHeading;

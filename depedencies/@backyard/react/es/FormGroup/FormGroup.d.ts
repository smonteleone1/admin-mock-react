import * as React from 'react';
import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Form Group
 *
 * `FormGroup` allows for grouping inputs such as
 * `Checkbox` and `Switch` and align them into columns or rows.
 *
 * For `Radio` it is recommended to use `RadioGroup` because
 * it provides extra functionality for handling `radio` inputs.
 *
 * This component is useful when combined with `FormControl` to
 * organize the visual structure of the form input. Example:
 *
 * ```
 *  <FormControl>
 *      <FormHeading>Heading Above FormGroup</FormHeading>
 *      <FormGroup>
 *          <FormControlLabel
 *              control={<Checkbox id="1" />}
 *              label="Label 1"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="2" />}
 *              label="Label 2"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="3" />}
 *              label="Label 3"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Helper Text Below FormGroup</FormHelperText>
 *  </FormControl>
 * ```
 */
declare const FormGroup: BDSForwardRef<FormGroupProps>;
declare type FormGroupRef = HTMLDivElement;
interface FormGroupProps extends BackyardBaseProps<FormGroupRef> {
    /**
     * Children of FormGroup
     */
    children?: React.ReactNode;
    /**
     * DOM class name
     */
    className?: string;
    /**
     * Direction to render children
     */
    direction?: 'column' | 'row';
    /**
     * Spacing token between form inputs
     */
    spacing?: string | keyof BackyardToken['sizes'];
}
export { FormGroup };
export type { FormGroupProps, FormGroupRef };
export default FormGroup;

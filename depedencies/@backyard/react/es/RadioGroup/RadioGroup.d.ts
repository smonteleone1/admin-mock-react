import * as React from 'react';
import { FormGroupProps, FormGroupRef } from '../FormGroup';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Radio Group
 *
 * `RadioGroup` allows for grouping radio inputs and syncing them together.
 * It extends from `FormGroup` to provide extra functionality for `Radio` components.
 *
 * For `Checkbox` or `Switch` it is recommended to use `FormGroup`.
 *
 * This component is useful when combined with `FormControl` to
 * organize the visual structure of the form input. Example:
 *
 * ```
 *  <FormControl>
 *      <FormHeading>Heading</FormHeading>
 *      <RadioGroup
 *          name="radios"
 *          defaultValue="2"
 *          direction="row"
 *      >
 *          <FormControlLabel
 *              control={<Radio value="1" />}
 *              label="Label 1"
 *          />
 *          <FormControlLabel
 *              control={<Radio value="2" />}
 *              label="Label 2"
 *          />
 *          <FormControlLabel
 *              control={<Radio value="3" />}
 *              label="Label 3"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Helper Text</FormHelperText>
 *  </FormControl>
 * ```
 */
declare const RadioGroup: BDSForwardRef<RadioGroupProps>;
declare type RadioGroupRef = FormGroupRef;
declare type RadioGroupOverrideProps = 'onChange';
interface RadioGroupProps extends Omit<FormGroupProps, RadioGroupOverrideProps> {
    /**
     * Children of `RadioGroup`, which have access to `RadioGroupContext`
     * Must contain at least one `Radio` child
     * Does not require `Radio` to be direct children
     */
    children?: React.ReactNode;
    /**
     * Default Value of `RadioGroup`
     */
    defaultValue?: string;
    /**
     * Required
     * DOM field `name` for all `Radio`s in child tree of `RadioGroup`
     */
    name: string;
    /**
     * `onChange` function to trigger when `value` of `RadioGroupContext` changes
     * @argument {Event} event - DOM Event of `onChange`
     * @argument {boolean} value -  Value from DOM Event target
     */
    onChange?: (event: React.ChangeEvent, value: string) => void;
    /**
     * Value of `RadioGroupContext`
     * Set by current active `Radio` child of `RadioGroup`
     */
    value?: string;
}
export { RadioGroup };
export type { RadioGroupProps, RadioGroupRef };
export default RadioGroup;

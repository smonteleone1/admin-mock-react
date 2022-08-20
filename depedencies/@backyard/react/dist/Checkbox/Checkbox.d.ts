import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Checkbox
 *
 * Checkbox for interacting with boolean values in a form.
 *
 *  <Checkbox id="checkbox" />
 *
 * To give `Checkbox` a label, use `FormControlLabel`, similar to `Radio` and `Switch`:
 *
 *  <FormControlLabel
 *      control={<Checkbox id="checkbox" />}
 *      label="Label"
 *  />
 *
 * To give `Checkbox` helper text, use `FormHelperText` inside a `FormControl`:
 *
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <FormGroup>
 *          <FormControlLabel
 *              control={<Checkbox id="check_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="check_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Checkbox id="check_black" value="black" />}
 *              label="Black"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 */
declare const Checkbox: BDSForwardRef<CheckboxProps>;
declare type CheckboxRef = HTMLInputElement;
declare type CheckboxOverrideProps = 'onChange';
interface CheckboxProps extends BackyardBaseProps<CheckboxRef, CheckboxOverrideProps> {
    /**
     * DOM ID for `input`
     */
    id?: string;
    /**
     * DOM Name for `input`
     */
    name?: string;
    /**
     * Value for `input`
     */
    value?: string;
    /**
     * Checked value for `input`
     * Uses controlled `checked` when defined
     */
    checked?: boolean;
    /**
     * Checked value for `input` by default
     * Uses uncontrolled `checked` when defined
     */
    defaultChecked?: boolean;
    /**
     * Whether or not `Checkbox` is disabled
     */
    disabled?: boolean;
    /**
     * Whether or not `input` is indeterminate
     */
    indeterminate?: boolean;
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * `onChange` trigger function
     * @argument {Event} event - DOM event
     * @argument {boolean} checked - Whether or not `input` is checked
     */
    onChange?: (event: React.ChangeEvent, checked: boolean) => void;
    /**
     * Shape of `Checkbox`
     * Rounded -> Medium Border Radius
     * Squared -> (Default) No Border Radius
     */
    shape?: 'rounded' | 'squared';
    /**
     * Props to extend `CheckboxWrapper` with
     * Useful for setting `style` of `CheckboxWrapper` instead of styling the `input`
     */
    wrapperProps?: BackyardBaseProps<HTMLSpanElement>;
    checkedIcon?: React.ComponentClass;
    indeterminateIcon?: React.ComponentClass;
}
export { Checkbox };
export type { CheckboxProps, CheckboxRef };
export default Checkbox;

import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Switch
 *
 * Switch for interacting with boolean values in a form.
 *
 *  <Switch id="switch" />
 *
 * To give `Switch` a label, use `FormControlLabel`, similar to `Radio` and `Checkbox`:
 *
 *  <FormControlLabel
 *      control={<Switch id="switch" />}
 *      label="Label"
 *  />
 *
 * To give `Switch` helper text, use `FormHelperText` inside a `FormControl`:
 *
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <FormGroup>
 *          <FormControlLabel
 *              control={<Switch id="check_white" value="white" />}
 *              label="White"
 *          />
 *          <FormControlLabel
 *              control={<Switch id="check_gray" value="gray" />}
 *              label="Gray"
 *          />
 *          <FormControlLabel
 *              control={<Switch id="check_black" value="black" />}
 *              label="Black"
 *          />
 *      </FormGroup>
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 */
declare const Switch: BDSForwardRef<SwitchProps>;
declare type SwitchRef = HTMLInputElement;
declare type SwitchOverrideProps = 'onChange' | 'size';
interface SwitchProps extends BackyardBaseProps<SwitchRef, SwitchOverrideProps> {
    /**
     * DOM ID of `input`
     */
    id?: string;
    /**
     * DOM Name for `input`
     */
    name?: string;
    /**
     * Size of the switch
     */
    size?: 'large' | 'small';
    /**
     * Value of `Switch`
     * Useful for forms if something other than a boolean is needed when checked
     */
    value?: string;
    /**
     * Whether or not `Switch` is checked
     * Uses controlled `checked` if set
     */
    checked?: boolean;
    /**
     * Whether or not `Switch` is checked by default
     * Uses uncontrolled `checked` if set
     */
    defaultChecked?: boolean;
    /**
     * Whether or not `Switch` is disabled
     */
    disabled?: boolean;
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * `onChange` function triggered on `input`'s onChange DOM event
     * @argument {Event} event - DOM event, `event.target` always set to `input` ref
     * @argument {boolean} checked - `checked` value from `event.target`
     */
    onChange?: (event: React.ChangeEvent, checked: boolean) => void;
    /**
     * Props to extend `SwitchWrapper` with
     * Useful for setting `style` overrides for `SwitchWrapper` instead of `input`
     */
    wrapperProps?: BackyardBaseProps<HTMLSpanElement>;
}
export { Switch };
export type { SwitchProps, SwitchRef };
export default Switch;

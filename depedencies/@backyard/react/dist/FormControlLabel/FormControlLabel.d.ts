import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Form Control Label
 *
 *  <FormControlLabel
 *      control={<Radio />}
 *      label="Controlled Radio Label"
 *  />
 *
 * Provides Label to inputs such as
 *  <Checkbox />
 *  <Radio />
 *  <Switch />
 * that allows control over the input for interactions
 * like hovering, clicking, and focusing.
 *
 * Can be used in conjunction with <FormControl> to provide
 * helper text in addition to a controlled label:
 *
 * ```
 *  <FormControl>
 *      <FormControlLabel
 *          control={<Checkbox />}
 *          label="Controlled Label"
 *      />
 *      <FormHelperText>Helper Text for Checkbox</FormHelperText>
 *  </FormControl>
 * ```
 */
declare const FormControlLabel: BDSForwardRef<FormControlLabelProps>;
declare type FormControlLabelRef = HTMLLabelElement;
interface FormControlLabelProps extends BackyardBaseProps<HTMLLabelElement> {
    /**
     * Text for <FormControlLabel> to use
     */
    label?: string;
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Whether or not <FormControlLabel> is disabled
     *
     * This will also disabled any input in the `control` prop
     * There is no need to disable both
     */
    disabled?: boolean;
    /**
     * Required
     * Input Node for <FormControlLabel> to control and add label to
     */
    control: React.ReactElement;
}
export { FormControlLabel };
export type { FormControlLabelProps, FormControlLabelRef };
export default FormControlLabel;

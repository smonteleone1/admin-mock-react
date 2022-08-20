import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Form Control
 *
 * Allows control over form components.
 * Passes `state` through form components and helper text, to sync visually.
 * Uses component's 'bdsName' metadata to configure helper text.
 *
 * Combine with `FormHeading`, `FormGroup` and `FormHelperText` to construct form heirarchy
 *
 * ```
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
 * ```
 * or
 * ```
 *  <FormControl>
 *      <FormHeading>What colors were Gandalf's robes in LotR?</FormHeading>
 *      <Multiselect
 *          options={[
 *              { label: 'White', value: 'white' },
 *              { label: 'Gray', value: 'gray' },
 *              { label: 'Black', value: 'black' },
 *          ]}
 *      />
 *      <FormHelperText>Select all that apply</FormHelperText>
 *  </FormControl>
 * ```
 */
declare const FormControl: BDSForwardRef<FormControlProps>;
declare type FormControlRef = HTMLDivElement;
interface FormControlProps extends BackyardBaseProps<FormControlRef> {
    /**
     * React Children
     */
    children: React.ReactElement | React.ReactElement[];
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Component to render as
     */
    component?: React.ElementType;
    /**
     * Controls the disabled state of children
     */
    disabled?: boolean;
    /**
     * Controls state of children
     */
    state?: 'error' | 'success' | 'warning' | 'info';
}
export { FormControl };
export type { FormControlProps, FormControlRef };
export default FormControl;

import type { FormControlContextValues, FormControlProviderProps, FormContextProps } from '../FormControlProvider';
/**
 * Hook to add
 * @param props - context props to initialize input with
 */
declare function useFormControl(props?: UseFormControlProps): (FormControlContextValues & {
    id?: string;
}) | FormContextProps;
declare type UseFormControlProps = {
    /**
     * If true, component will not be added
     * as an input to the `FormControl` contexts
     *
     * Use this to subscribe to any changes to form inputs
     * changed managed by the `FormControl`, like `FormHelperText`
     */
    noContext?: boolean;
    /**
     * Whether or not input is disabled
     */
    disabled?: FormControlProviderProps['disabled'];
    /**
     * Visual state of the component
     */
    state?: FormControlProviderProps['state'];
    /**
     * Whether or not the `FormHelperText` should be indented
     */
    indent?: FormControlProviderProps['indent'];
    /**
     * ID of the input for tracking purposes
     * This will be automatically generated if not defined
     */
    id?: string;
};
export { useFormControl };
export default useFormControl;

import * as React from 'react';
import type { BackyardToken } from '../utils/typings/BackyardProps';
/**
 * Form Control Context
 */
declare const FormControlContext: React.Context<FormControlContextValues>;
/**
 * Form Control Consumer
 */
declare const FormControlConsumer: React.Consumer<FormControlContextValues>;
/**
 * @internal
 * Backyard React Form Control Provider
 *
 * Use the hook `useFormControl` instead of this provider.
 *
 * Provides values to children and handles state management of the `FormControl` and its children.
 */
declare const FormControlProvider: ({ children, disabled, state, indent: indentProp, ...override }: FormControlProviderProps) => React.ReactElement<FormControlProviderProps>;
interface FormContexts {
    [id: string]: FormContextProps;
}
interface FormContextProps {
    /**
     * Controls the disabled state of the child form elements
     */
    disabled?: boolean;
    /**
     * Controls the possible states to provide to form elements
     */
    state?: 'default' | 'error' | 'warning' | 'info' | 'success';
    /**
     * Controls the indention of the helper text
     */
    indent?: keyof BackyardToken['sizes'] | boolean;
}
/**
 * Context values that can be passed to children via
 *
 * `const context = React.useContext(FormControlContext)`
 */
interface FormControlContextValues extends FormContextProps {
    /**
     * Context map
     */
    context: FormContexts;
    /**
     * Sets a new form control context from a child
     */
    setContext: React.Dispatch<React.SetStateAction<FormContexts>>;
    /**
     * Updates context with new values
     */
    update: (id: string, newContext: Partial<FormControlContextValues>) => void;
    add: (id: string, newContext: Partial<FormControlContextValues>) => void;
    remove: (id: string) => void;
}
interface FormControlProviderProps {
    /**
     * React Children to provide context to
     */
    children: React.ReactNode;
    /**
     * Controls the disabled state of the child form elements
     */
    disabled?: boolean;
    /**
     * Controls the indention of the helper text
     */
    indent?: keyof BackyardToken['sizes'] | boolean;
    /**
     * Controls the possible states to provide to form elements
     */
    state?: 'default' | 'error' | 'warning' | 'info' | 'success';
}
export { FormControlProvider, FormControlContext, FormControlConsumer };
export type { FormControlContextValues, FormControlProviderProps, FormContextProps };
export default FormControlProvider;

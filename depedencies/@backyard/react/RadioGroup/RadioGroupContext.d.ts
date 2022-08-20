import * as React from 'react';
declare const RadioGroupContext: React.Context<RadioGroupValue>;
/**
 * Value of the `RadioGroupContext` provider
 */
interface RadioGroupValue {
    /**
     * Name of the radio group
     */
    name: string;
    /**
     * `onChange` trigger event when `RadioGroup` changes value
     */
    onChange: (event: React.ChangeEvent) => void;
    /**
     * Value of the radio group
     */
    value: string;
    /**
     * Default value of the radio group
     */
    defaultValue: string;
}
export { RadioGroupContext };
export type { RadioGroupValue };
export default RadioGroupContext;

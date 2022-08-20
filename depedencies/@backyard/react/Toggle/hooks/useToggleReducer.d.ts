import * as React from 'react';
import type { ToggleOptions } from '../Toggle';
import type { ToggleButtonProps } from '../ToggleButton';
/**
 * Initialize reducer to set data type depending on options and default value
 *
 * @param initValue - value to initialize reducer with
 * @param options - options from `Toggle`
 */
declare function initToggleReducer(initValue: ToggleValue, { exclusive }: ToggleOptions): ToggleState;
/**
 * Reducer function to handle updates to state via action
 *
 * @param state - current state of the reducer
 * @param action - action to perform on state
 * @param options - toggle options
 */
declare function toggleReducer(value: ToggleValue, action: ToggleAction, options: ToggleOptions): ToggleValue;
/**
 * Toggle reducer helper to call `callback` if defined on new toggled state value
 *
 * @param state - current state value
 * @param action - action to perform on state
 * @param options - options from toggle
 */
declare function toggleReducerHelper(state: ToggleState, action: ToggleAction, options: ToggleOptions): ToggleState;
/**
 * Toggle reducer hook to manage the `Toggle` state
 *
 * @param arg.value - controlled value of the toggle component
 * @param arg.defaultValue - default value of the toggle component
 * @param arg.options - options from toggle component
 * @param arg.refs - list of refs of toggle buttons from toggle component
 */
declare const useToggleReducer: ({ value, defaultValue, options, toggles, }: ToggleReducerArgs) => [ToggleState, React.Dispatch<ToggleAction>];
declare type ToggleReducerArgs = {
    value: ToggleValue;
    defaultValue: ToggleValue;
    options: ToggleOptions;
    toggles: React.MutableRefObject<Record<string, ToggleButtonProps>>;
};
declare type ToggleValueTypes = string | number;
declare type ToggleValue = ToggleValueTypes | ToggleValueTypes[] | Set<ToggleValue>;
declare type ToggleState = {
    value: ToggleValue;
    action?: ToggleAction;
};
declare type ToggleCallback = (state: ToggleState, action: ToggleAction) => void;
declare type ToggleAction = {
    type: 'reset';
    value: ToggleValue;
    callback?: ToggleCallback;
} | {
    type: 'set';
    value: ToggleValue;
    callback?: ToggleCallback;
} | {
    type: 'select';
    value: ToggleValue;
    callback?: ToggleCallback;
} | {
    type: 'deselect';
    value: ToggleValue;
    callback?: ToggleCallback;
} | {
    type: 'toggle';
    value: ToggleValue;
    callback?: ToggleCallback;
};
export { useToggleReducer, toggleReducer, toggleReducerHelper, initToggleReducer, };
export type { ToggleState, ToggleAction, ToggleValue, ToggleCallback, };
export default useToggleReducer;

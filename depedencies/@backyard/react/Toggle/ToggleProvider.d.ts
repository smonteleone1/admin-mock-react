import * as React from 'react';
import type { ToggleAction, ToggleState } from './hooks/useToggleReducer';
import type { ToggleProps, ToggleOptions, ToggleButtonGroupOverrideProps } from './Toggle';
import type { ToggleButtonProps, ToggleButtonRef } from './ToggleButton';
declare const ToggleContext: React.Context<ToggleContextValues>;
declare const ToggleConsumer: React.Consumer<ToggleContextValues>;
declare const defaultUnselectedButton: Pick<ToggleButtonProps, ToggleButtonGroupOverrideProps>;
declare const defaultSelectedButton: Pick<ToggleButtonProps, ToggleButtonGroupOverrideProps>;
/**
 * `ToggleProvider` Backyard React
 *
 * @param props - Toggle props
 */
declare const ToggleProvider: ({ children, defaultValue, exclusive: exclusiveProp, enforceSelected: enforceSelectedProp, buttonProps, selectedButtonProps, value, onChange, }: ToggleProviderProps) => React.ReactElement<ToggleProviderProps>;
interface ToggleContextValues extends ToggleOptions {
    toggles: React.MutableRefObject<Record<string, ToggleButtonProps>>;
    toggled: ToggleState;
    dispatchToggle: React.Dispatch<ToggleAction>;
    refs: React.MutableRefObject<Record<string, React.RefObject<ToggleButtonRef>>>;
    buttonProps: Pick<ToggleButtonProps, ToggleButtonGroupOverrideProps>;
    selectedButtonProps: Pick<ToggleButtonProps, ToggleButtonGroupOverrideProps>;
    handleToggle: (event: React.MouseEvent, state: ToggleState, action: ToggleAction, { onClick }: ToggleButtonProps) => void;
}
interface ToggleProviderProps extends ToggleProps {
}
export { ToggleContext, ToggleConsumer, ToggleProvider, defaultSelectedButton, defaultUnselectedButton, };
export type { ToggleContextValues, ToggleProviderProps, };
export default ToggleProvider;

import * as React from 'react';
import type { InputState, Props as InputMaskProps } from 'react-input-mask';
import type { IconButtonProps } from '../IconButton';
import type { TextInputProps, TextInputRef } from '../TextInput';
import type BackyardBaseProps from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Text Picker
 *
 * @todo Comments
 */
declare const TextPicker: BDSForwardRef<TextPickerProps>;
interface TextPickerInfo {
    value: string;
    date: Date;
    time: string;
}
declare type TextPickerRef = TextInputRef;
declare type TextPickerOverrideProps = 'min' | 'max';
interface TextPickerProps extends Omit<TextInputProps, TextPickerOverrideProps> {
    /**
     * Whether or not native browser functionality is disabled
     */
    disableNative?: boolean;
    value?: string;
    defaultValue?: string;
    mask?: InputMaskProps['mask'];
    maskPlaceholder?: InputMaskProps['maskChar'];
    alwaysShowMask?: InputMaskProps['alwaysShowMask'];
    beforeMaskedStateChange?: (nextState?: InputState) => InputState;
    min?: string;
    max?: string;
    onChange?: (event: React.ChangeEvent, value: string) => void;
    /**
     * `onClear` trigger function for when
     * the clear button is clicked
     */
    onClear?: (event: React.MouseEvent) => void;
    onDateChange?: (event: React.ChangeEvent, info: TextPickerInfo) => void;
    type?: 'date' | 'time' | 'datetime-local' | 'week' | 'month';
    shape?: 'rounded' | 'squared';
    wrapperProps?: BackyardBaseProps<HTMLDivElement>;
    textWrapperProps?: TextInputProps['wrapperProps'];
    selectWrapperProps?: object;
    clearButtonProps?: IconButtonProps;
}
export { TextPicker };
export type { TextPickerProps, TextPickerRef };
export default TextPicker;

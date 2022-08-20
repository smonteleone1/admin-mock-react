import * as React from 'react';
import type { IconButtonProps } from '../IconButton';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { SelectOptionInfo, SelectProps, SelectRef } from '../Select';
import type { ParsableDate, ParsableDateObject, ParsableDateRange } from './typings/types';
/**
 * Backyard React Select Picker
 *
 * @todo Comments
 */
declare const SelectPicker: BDSForwardRef<SelectPickerProps>;
interface SelectPickerOptionInfo extends SelectOptionInfo {
    date: Date | Date[];
    time: string | string[];
}
declare type SelectPickerRef = SelectRef;
declare type SelectPickerOverrideProps = 'onChange' | 'value' | 'defaultValue' | 'options';
interface SelectPickerProps extends Omit<SelectProps, SelectPickerOverrideProps> {
    onChange?: (event: React.ChangeEvent, option: SelectPickerOptionInfo) => void;
    /**
     * `onClear` trigger function for when
     * the clear button is clicked
     */
    onClear?: (event: React.MouseEvent) => void;
    options?: ParsableDate[] | ParsableDateObject[] | ParsableDateRange[];
    optionsLabel?: string;
    wrapperProps?: BackyardBaseProps<HTMLDivElement>;
    type?: 'date' | 'time';
    shape?: 'rounded' | 'squared';
    value?: string;
    defaultValue?: string;
    readOnly?: boolean;
    format?: string;
    disableNative?: boolean;
    textWrapperProps?: object;
    selectWrapperProps?: object;
    clearButtonProps?: IconButtonProps;
}
export { SelectPicker };
export type { SelectPickerProps, SelectPickerRef, SelectPickerOptionInfo };
export default SelectPicker;

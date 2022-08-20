import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { ListSelectorProps, ListSelectorRef, ListOptionInfo } from '../ListSelector';
import type { ParsableDate, ParsableDateObject, ParsableDateRange } from './typings/types';
/**
 * Backyard React List Picker
 *
 * @todo Comments
 */
declare const ListPicker: BDSForwardRef<ListPickerProps>;
interface ListPickerItemInfo extends ListOptionInfo {
    date: Date | Date[];
    time: string | string[];
}
declare type ListPickerRef = ListSelectorRef;
declare type ListPickerOverrideProps = 'onChange' | 'value' | 'defaultValue' | 'options';
interface ListPickerProps extends Omit<ListSelectorProps, ListPickerOverrideProps> {
    options?: ParsableDate[] | ParsableDateObject[] | ParsableDateRange[];
    onChange?: (event: React.ChangeEvent, info: ListPickerItemInfo) => void;
    optionsLabel?: string;
    wrapperProps?: BackyardBaseProps<HTMLDivElement>;
    type?: 'date' | 'time';
    shape?: 'rounded' | 'squared';
    value?: string;
    defaultValue?: string;
    format?: string;
}
export { ListPicker };
export type { ListPickerProps, ListPickerRef, ListPickerItemInfo };
export default ListPicker;

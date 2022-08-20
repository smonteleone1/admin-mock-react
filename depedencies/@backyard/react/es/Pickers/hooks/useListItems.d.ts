import type { DateAdapter } from '../classes/DateAdapter';
import type { ParsableDate, ParsableDateObject, ParsableDateRange } from '../typings/types';
interface UseTimeItemsProps {
    optionsLabel?: string;
    adapter: DateAdapter;
    value: string;
    options: ParsableDate[] | ParsableDateObject[] | ParsableDateRange[];
    type: string;
    format?: string;
}
interface ValuePickerItem {
    label?: string;
    value?: string;
}
declare function parseDate(adapter: DateAdapter, time: ParsableDate): Date;
declare const useListItems: ({ optionsLabel, adapter, type, format, options: optionsProp }: UseTimeItemsProps) => {
    key: number;
    value: string;
    disabled: boolean;
    ariaLabel: string;
    children: string;
}[];
export { useListItems, parseDate };
export type { UseTimeItemsProps, ValuePickerItem };
export default useListItems;

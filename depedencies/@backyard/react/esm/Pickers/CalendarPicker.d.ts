import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import BasePickerProps from './typings/BasePicker';
import type { CalendarProps, CalendarRef } from './Calendar';
import { ParsableDate } from './typings/types';
/**
 * Backyard React Calendar Picker
 *
 * @todo Comments
 */
declare const CalendarPicker: BDSForwardRef<CalendarPickerProps>;
declare type CalendarPickerRef = CalendarRef;
declare type CalendarPickerOverrideProps = 'date' | 'onChange' | 'value';
interface CalendarPickerProps extends BackyardBaseProps<CalendarPickerRef, CalendarPickerOverrideProps>, Omit<CalendarProps, CalendarPickerOverrideProps>, BasePickerProps {
    date?: ParsableDate;
    shape?: 'rounded' | 'squared';
}
export { CalendarPicker };
export type { CalendarPickerProps, CalendarPickerRef };
export default CalendarPicker;

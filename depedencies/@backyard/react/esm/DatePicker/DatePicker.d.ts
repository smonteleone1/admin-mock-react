import * as React from 'react';
import type { DatePickerNativeRef, DatePickerNativeProps, DatePickerNativeChangeInfo } from '../DatePickerNative';
import type { PopoverProps } from '../Popover';
import type { IconButtonProps } from '../IconButton';
import type { CalendarProps } from '../Pickers/Calendar';
import type { ParsableDate, ParsableDateObject } from '../Pickers/typings/types';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Date Picker
 *
 * `DatePicker` is used for selecting dates from a calendar, either through
 * the native date picker for mobile devices, or through a custom calendar popover.
 *
 * The text input of the picker uses `type` === 'date' for supporting browser, while gracefully
 * defaulting to a `text` input type with masking to help the user enter the correct date.
 *
 * This component has many variants dependending on the props given.
 *
 * For a regular Date Picker with all dates selectable, use the default:
 * ```
 *  <DatePicker />
 * ```
 * > This Date Picker gives the user a text `input` and a calendar popover to use to select any date
 * > On Mobile displays, this component switches to an `input` with `type` === 'date' for native browsers
 *
 * For a date picker that only allows the user to select certain dates, use the `dates` prop:
 * ```
 *  <DatePicker
 *      label="Record Date"
 *      dates={[
 *          { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
 *          { label: 'Today 9:15 AM', value: '2020-07-19' },
 *          { label: 'Tomorrow 9:45 AM', value: '2020-07-20' }
 *      ]}
 *  />
 *  // Or...
 *  <DatePicker
 *      label="Record Date"
 *      dates={[
 *          '2020-07-18',
 *          '2020-07-19',
 *          '2020-07-20'
 *      ]}
 *  />
 *  // Or...
 *  <DatePicker
 *      label="Record Date"
 *      dates={[
 *          new Date(2020, 06, 18),
 *          new Date(2020, 06, 19),
 *          new Date(2020, 06, 20)
 *      ]}
 *  />
 * ```
 * > This Date Picker gives the user a read-only `select` and a calendar popover to use to select only the dates provided
 * > `dates` can take a list of `Date`s, date strings ('yyyy-MM-dd'), or an option object for custom labels with the value
 * > On mobile displays, removes the popover and uses the native `select` to select the date
 *
 * For a less defined date picker that has a min, max, and some disabled dates in between, you can also use:
 * ```
 *  <DatePicker
 *      label="Record Date"
 *      minDate="2020-07-10"
 *      maxDate="2020-07-27"
 *      disableDates={[
 *          '2020-07-18',
 *          '2020-07-19',
 *          '2020-07-20'
 *      ]}
 *  />
 * ```
 * > This Date Picker gives the user a text `input` and a calendar popover to use to select and dates that are not disabled
 * > `disableDates`, `minDate`, and `maxDate` can take a list of `Date`s, date strings ('yyyy-MM-dd')
 * > On mobile displays, removes the popover and uses the native `date` input
 *  >> NOTE: mobile browsers do not utilize `disableDates`, but will utilize `minDate` and `maxDate`
 *
 * The props `date`, `minDate`, `maxDate`, and `disabledDates` all use the `ParsableDate` type
 * They can accept the following values as inputs:
 *  JS Date instance => `new Date(2020, 06, 19)`
 *  String date => `'2020-07-19'`
 *  Number timestamp => `1595116800`
 *
 * The prop `dates` can accept the `ParsableDateObject` or the `ParsableDateRange` types in addition to `ParsableDate`
 * It can accept the following values
 *  JS Date instance => `new Date(2020, 06, 19)`
 *  String date => `'2020-07-19'`
 *  Number timestamp => `1595116800`
 *  ParsableDateObject => {
 *      label: 'Today, July 19, 2020',
 *      value: '2020-07-19' // Can be any `ParsableDate`
 *  }
 *  ParsableDateRange => {
 *      label: 'Today, July 19, 2020',
 *      start: '2020-07-19' // Can be any `ParsableDate`
 *      end: '2020-07-20' // Can be any `ParsableDate`
 *  }
 */
declare const DatePicker: BDSForwardRef<DatePickerProps & {
    ref?: any;
}>;
declare type DatePickerRef = DatePickerNativeRef;
declare type DatePickerOverrideProps = 'onChange' | 'value';
interface DatePickerChangeInfo extends Omit<DatePickerNativeChangeInfo, 'from'> {
    /**
     * From either 'TextPicker', 'SelectPicker', or 'CalendarPicker'
     */
    from: DatePickerNativeChangeInfo['from'] | 'CalendarPicker';
}
interface DatePickerProps extends Omit<DatePickerNativeProps, DatePickerOverrideProps> {
    /**
     * Event keys that will trigger open when focused on
     */
    openKeys?: React.KeyboardEvent['key'][];
    /**
     * Event keys that will trigger close when focused on
     */
    closeKeys?: React.KeyboardEvent['key'][];
    /**
     * Parsable date for the current date
     * Can be updated externally and given as a default date
     *
     * It can accept the following values
     *  JS Date instance => `new Date(2020, 06, 19)`
     *  String date => `'2020-07-19'`
     *  Number timestamp => `1595116800`
     */
    date?: ParsableDate;
    /**
     * List of parsable dates to only allow the user to select from
     *
     * It can accept the following values
     *  JS Date instance => `new Date(2020, 06, 19)`
     *  String date => `'2020-07-19'`
     *  Number timestamp => `1595116800`
     *  ParsableDateObject => {
     *      label: 'Today, July 19, 2020',
     *      value: '2020-07-19' // Can be any `ParsableDate`
     *  }
     *  ParsableDateRange => {
     *      label: 'Today, July 19, 2020',
     *      start: '2020-07-19' // Can be any `ParsableDate`
     *      end: '2020-07-20' // Can be any `ParsableDate`
     *  }
     */
    dates?: ParsableDate[] | ParsableDateObject[];
    /**
     * Amount in milliseconds to delay closing the popover
     * when a value is selected from the list
     */
    delayClose?: number;
    /**
     * Amount in milliseconds to delay opening the popover
     */
    delayOpen?: number;
    /**
     * List of dates to disable
     */
    disableDates?: CalendarProps['disableDates'];
    /**
     * Flag to disable all dates after today
     */
    disableFuture?: CalendarProps['disableFuture'];
    /**
     * Flag to disable all dates before today
     */
    disablePast?: CalendarProps['disablePast'];
    /**
     * Parsable date to disable all dates before given date
     */
    minDate?: CalendarProps['minDate'];
    /**
     * Parsable date to disable all dates after given date
     */
    maxDate?: CalendarProps['maxDate'];
    /**
     * `onKeyDown` trigger event for
     * when the user presses a key on the `select`
     */
    onKeyDown?: (event: React.KeyboardEvent<DatePickerNativeRef>) => void;
    /**
     * `onChange` trigger function for when either
     * the native component or the custom calendar change interaction occurs
     */
    onChange?: (event: React.ChangeEvent, value: DatePickerChangeInfo) => void;
    /**
     * `onOpen` trigger function for when the calendar popover opens
     */
    onOpen?: () => void;
    /**
     * `onClose` trigger function for when the calendar popover closes
     */
    onClose?: () => void;
    /**
     * `onClear` trigger function for when
     * the clear button is clicked
     */
    onClear?: (event: React.MouseEvent) => void;
    /**
     * Controls the rendered UI/UX of the component
     *
     * Overrides automatically switching
     */
    render?: 'custom' | 'native';
    /**
     * State of the native date picker
     * Either 'error' or 'default'
     */
    state?: DatePickerNativeProps['state'];
    /**
     * Shape of the input and popover
     */
    shape?: 'rounded' | 'squared';
    /**
     * Calendar props to extend the calendar with if needed
     */
    calendarProps?: CalendarProps;
    /**
     * Popover override props
     */
    popoverProps?: Partial<PopoverProps>;
    /**
     * Popover override props
     *
     * Alias of `popoverProps`
     */
    popperProps?: Partial<PopoverProps>;
    /**
     * Props for clear button
     */
    clearButtonProps?: IconButtonProps;
}
export { DatePicker };
export type { DatePickerRef, DatePickerProps, DatePickerChangeInfo };
export default DatePicker;

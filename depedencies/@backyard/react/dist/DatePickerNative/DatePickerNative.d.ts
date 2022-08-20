import * as React from 'react';
import type { SelectPickerRef, SelectPickerProps } from '../Pickers/SelectPicker';
import type { TextPickerRef, TextPickerProps } from '../Pickers/TextPicker';
import type { ParsableDate, ParsableDateObject } from '../Pickers/typings/types';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Date Picker Native
 *
 * `DatePickerNative` is used for selecting dates from a calendar through the native browser.
 * It is only intended to be used in mobile-only environments to save data size.
 *
 * The text input of the picker uses `type` === 'date'.
 *
 * This component has many variants dependending on the props given.
 *
 * For a regular Date Picker with all dates selectable, use the default:
 * ```
 *  <DatePickerNative />
 * ```
 * > This Date Picker gives the user a text `input` with `type` === 'date'
 * > For browsers that don't support `type` === 'date', this will gracefully default to `type` === 'text'
 * > Does not include masking
 *
 * For a date picker that only allows the user to select certain dates, use the `dates` prop:
 * ```
 *  <DatePickerNative
 *      label="Record Date"
 *      dates={[
 *          { label: 'Yesterday 8:00 AM', value: '2020-07-18' },
 *          { label: 'Today 9:15 AM', value: '2020-07-19' },
 *          { label: 'Tomorrow 9:45 AM', value: '2020-07-20' }
 *      ]}
 *  />
 *  // Or...
 *  <DatePickerNative
 *      label="Record Date"
 *      dates={[
 *          '2020-07-18',
 *          '2020-07-19',
 *          '2020-07-20'
 *      ]}
 *  />
 *  // Or...
 *  <DatePickerNative
 *      label="Record Date"
 *      dates={[
 *          new Date(2020, 06, 18),
 *          new Date(2020, 06, 19),
 *          new Date(2020, 06, 20)
 *      ]}
 *  />
 * ```
 * > This Date Picker gives the user a `select`
 * > `dates` can take a list of `Date`s, date strings ('yyyy-MM-dd'), or an option object for custom labels with the value
 *
 * For a less defined date picker that has a min, max, and some disabled dates in between, you can also use:
 * ```
 *  <DatePickerNative
 *      label="Record Date"
 *      minDate="2020-07-10"
 *      maxDate="2020-07-27"
 *  />
 * ```
 * > This Date Picker gives the user a text `input`
 * > On mobile displays, uses the native `date` input
 *  >> NOTE: mobile browsers will utilize `minDate` and `maxDate`
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
declare const DatePickerNative: BDSForwardRef<DatePickerNativeProps & {
    ref?: any;
}>;
declare type DatePickerNativeRef = TextPickerRef | SelectPickerRef;
declare type SelectAndTextPickerProps = TextPickerProps & SelectPickerProps;
declare type DatePickerNativeOverrideProps = 'onChange';
declare type DatePickerNativeChangeInfo = {
    /**
     * Info from either `TextPicker` or `SelectPicker`
     */
    from: 'TextPicker' | 'SelectPicker';
    /**
     * Value is always a string
     */
    value: string | number;
    /**
     * Parsed date or range of dates
     */
    date: Date | Date[];
};
interface DatePickerNativeProps extends Omit<SelectAndTextPickerProps, DatePickerNativeOverrideProps> {
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
     * Parsable date to disable all dates before given date
     */
    minDate?: ParsableDate;
    /**
     * Parsable date to disable all dates after given date
     */
    maxDate?: ParsableDate;
    /**
     * `onChange` trigger function for when either
     * the native component or the custom calendar change interaction occurs
     */
    onChange?: (event: React.ChangeEvent, value: DatePickerNativeChangeInfo) => void;
    /**
     * `onClear` trigger function for when
     * the clear button is clicked
     */
    onClear?: (event: React.MouseEvent) => void;
    /**
     * @internal - whether or not `DatePickerNative` is being used in custom `DatePicker`
     */
    withCustom?: boolean;
    /**
     * Shape of the input
     */
    shape?: 'rounded' | 'squared';
    /**
     * Only for TextPicker
     */
    alwaysShowMask?: boolean;
}
export { DatePickerNative };
export type { DatePickerNativeRef, DatePickerNativeProps, DatePickerNativeChangeInfo };
export default DatePickerNative;

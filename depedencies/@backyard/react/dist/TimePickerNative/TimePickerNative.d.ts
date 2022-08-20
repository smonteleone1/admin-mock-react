import * as React from 'react';
import type { SelectPickerRef, SelectPickerProps } from '../Pickers/SelectPicker';
import type { TextPickerRef, TextPickerProps } from '../Pickers/TextPicker';
import { ParsableDateObject, ParsableDateRange } from '../Pickers/typings/types';
import type { ParsableDate } from '../Pickers/typings/types';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Time Picker Native
 *
 * `TimePickerNative` is used for selecting times from a timepicker through the native browser.
 * It is only intended to be used in mobile-only environments to save data size.
 *
 * The text input of the picker uses `type` === 'time'.
 *
 * This component has many variants dependending on the props given.
 *
 * For a regular Time Picker with all times selectable, use the default:
 * ```
 *  <TimePickerNative />
 * ```
 * > This Time Picker gives the user a text `input` with `type` === 'time'
 * > For browsers that don't support `type` === 'time', this will gracefully default to `type` === 'text'
 * > Does not include masking
 *
 * For a time picker that only allows the user to select certain times, use the `times` prop:
 * ```
 *  <TimePickerNative
 *      label="Record Time"
 *      times={[
 *          { label: '8:00 AM', value: '08:00' },
 *          { label: '9:15 AM', value: '09:15' },
 *          { label: '9:45 AM', value: '09:45' }
 *      ]}
 *  />
 *  // Or...
 *  <TimePickerNative
 *      label="Record Time"
 *      times={[
 *          '08:00',
 *          '09:15',
 *          '09:45
 *      ]}
 *  />
 *  // Or...
 *  <TimePickerNative
 *      label="Record Time"
 *      times={[
 *          new Date(2020, 06, 19, 8, 0),
 *          new Date(2020, 06, 19, 9, 15),
 *          new Date(2020, 06, 19, 9, 45)
 *      ]}
 *  />
 * ```
 * > This Time Picker gives the user a `select`
 * > `times` can take a list of `Date`s, time strings ('HH:mm' - 24h format), or an option object for custom labels with the value
 *
 * For a less defined time picker that has a min, max, and some disabled times in between, you can also use:
 * ```
 *  <TimePickerNative
 *      label="Record Time"
 *      min="8:00"
 *      max="12:00"
 *  />
 * ```
 * > This Time Picker gives the user a text `input`
 * > On mobile displays, uses the native `time` input
 *  >> NOTE: mobile browsers will utilize `min` and `max`
 *
 * The prop `time` uses the `ParsableDate` type
 * It can accept the following values as inputs:
 *  JS Date instance => `new Date(2020, 06, 19, 8, 45)`
 *  String time => `'23:00'`
 *  Number timestamp => `1595116800`
 *
 * The prop `times` can accept the `ParsableDateObject` or the `ParsableDateRange` types in addition to `ParsableDate`
 * It can accept the following values
 *  JS Date instance => `new Date(2020, 06, 19, 8, 45)`
 *  String time => `'23:00'`
 *  Number timestamp => `1595116800`
 *  ParsableDateObject => {
 *      label: 'Now, 8:00 AM',
 *      value: '08:00' // Can be any `ParsableDate`
 *  }
 *  ParsableDateRange => {
 *      label: 'Afternoon, 12:00 PM - 1:00 PM',
 *      start: '12:00' // Can be any `ParsableDate`
 *      end: '13:00' // Can be any `ParsableDate`
 *  }
 */
declare const TimePickerNative: BDSForwardRef<TimePickerNativeProps & {
    ref?: any;
}>;
declare type TimePickerNativeRef = TextPickerRef | SelectPickerRef;
declare type SelectAndTextPickerProps = TextPickerProps & SelectPickerProps;
declare type TimePickerNativeOverrideProps = 'onChange';
declare type TimePickerNativeChangeInfo = {
    /**
     * From either `SelectPicker` or `TextPicker`
     */
    from: 'SelectPicker' | 'TextPicker';
    /**
     * Value of the change info as a string
     */
    value: string | number;
    /**
     * Time string in 24h format ('HH:mm')
     * Or Range of time strings
     */
    time: string | string[];
};
interface TimePickerNativeProps extends Omit<SelectAndTextPickerProps, TimePickerNativeOverrideProps> {
    /**
     * Step allowed by the native input
     */
    step?: number;
    /**
     * Current parsable time
     * Can be used as a default and changed externally
     */
    time?: ParsableDate;
    /**
     * List of parsable times
     * Can be in the format of a timestamp, a Date instance, a 24h string, or a `TimeItem` for list selection
     */
    times?: ParsableDate[] | ParsableDateObject[] | ParsableDateRange[];
    /**
     * Minimum time allowed in time picker
     * Must be 24h format string ('HH:mm')
     */
    minTime?: string;
    /**
     * Maximum time allowed in time picker
     * Must be 24h format string ('HH:mm')
     */
    maxTime?: string;
    /**
     * Options label from `SelectPicker`
     */
    optionsLabel?: string;
    /**
     * `onChange` trigger
     */
    onChange?: (event: React.ChangeEvent, info: TimePickerNativeChangeInfo) => void;
    /**
     * `onClear` trigger function for when
     * the clear button is clicked
     */
    onClear?: (event: React.MouseEvent) => void;
    /**
     * @ignore internal prop
     * Only used when the Native component is used with the Custom version of TimePicker
     */
    withCustom?: boolean;
    /**
     * Shape of the component
     */
    shape?: 'rounded' | 'squared';
}
export { TimePickerNative };
export type { TimePickerNativeRef, TimePickerNativeProps, TimePickerNativeChangeInfo };
export default TimePickerNative;

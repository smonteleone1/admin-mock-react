import * as React from 'react';
import type { TimePickerNativeRef, TimePickerNativeProps } from '../TimePickerNative';
import type { PopoverProps } from '../Popover';
import type { ListPickerProps } from '../Pickers/ListPicker';
import type { ParsableDate, ParsableDateObject, ParsableDateRange } from '../Pickers/typings/types';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Time Picker
 *
 * `TimePicker` is used for selecting times from a timepicker through the browser.
 * It provides a list selector popover for the user to select from, or a native time input/select.
 *
 * The text input of the picker uses `type` === 'time'.
 *
 * This component has many variants dependending on the props given.
 *
 * For a regular Time Picker with all times selectable, use the default:
 * ```
 *  <TimePicker />
 * ```
 * > This Time Picker gives the user a text `input` with `type` === 'time'
 * > For browsers that don't support `type` === 'time', this will gracefully default to `type` === 'text'
 * > Does not include masking
 *
 * For a time picker that only allows the user to select certain times, use the `times` prop:
 * ```
 *  <TimePicker
 *      label="Record Time"
 *      times={[
 *          { label: '8:00 AM', value: '08:00' },
 *          { label: '9:15 AM', value: '09:15' },
 *          { label: '9:45 AM', value: '09:45' }
 *      ]}
 *  />
 *  // Or...
 *  <TimePicker
 *      label="Record Time"
 *      times={[
 *          '08:00',
 *          '09:15',
 *          '09:45
 *      ]}
 *  />
 *  // Or...
 *  <TimePicker
 *      label="Record Time"
 *      times={[
 *          new Date(2020, 06, 19, 8, 0),
 *          new Date(2020, 06, 19, 9, 15),
 *          new Date(2020, 06, 19, 9, 45)
 *      ]}
 *  />
 * ```
 * > This Time Picker gives the user a `select` and a list select popover
 * > `times` can take a list of `Date`s, time strings ('HH:mm' - 24h format), or an option object for custom labels with the value
 *
 * For a less defined time picker that has a min, max, and some disabled times in between, you can also use:
 * ```
 *  <TimePicker
 *      label="Record Time"
 *      min="8:00"
 *      max="12:00"
 *  />
 * ```
 * > This Time Picker gives the user a text `input` and a list selector input
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
declare const TimePicker: BDSForwardRef<TimePickerProps & {
    ref?: any;
}>;
declare type TimePickerRef = TimePickerNativeRef;
declare type TimePickerOverrideProps = 'onChange' | 'value';
interface TimePickerChangeInfo {
    /**
     * From either `ListPicker`, `SelectPicker`, or `TextPicker`
     */
    from: 'ListPicker' | 'SelectPicker' | 'TextPicker';
    /**
     * Value of change info
     */
    value: string | number;
    /**
     * Time of change info
     * Either 24h string format ('HH:mm') or range of 24h formats as array
     */
    time: string | string[];
}
interface TimePickerProps extends Omit<TimePickerNativeProps, TimePickerOverrideProps> {
    /**
     * Event keys that will trigger open when focused on
     */
    openKeys?: React.KeyboardEvent['key'][];
    /**
     * Event keys that will trigger close when focused on
     */
    closeKeys?: React.KeyboardEvent['key'][];
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
     * `onKeyDown` trigger event for
     * when the user presses a key on the `select`
     */
    onKeyDown?: (event: React.KeyboardEvent<TimePickerNativeRef>) => void;
    /**
     * `onChange` trigger function
     */
    onChange?: (event: React.ChangeEvent, info: TimePickerChangeInfo) => void;
    /**
     * `onOpen` trigger function
     * Triggers when `Popover` opens
     */
    onOpen?: () => void;
    /**
     * `onClose` trigger function
     * Triggers when `Popover` closes
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
     * List Picker override props
     */
    listPickerProps?: ListPickerProps;
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
}
export { TimePicker };
export type { TimePickerRef, TimePickerProps, TimePickerChangeInfo };
export default TimePicker;

import DateAdapter from '../classes/DateAdapter';
import type { CalendarProps } from '../Calendar';
interface CalendarState {
    currentMonth: Date;
    focusedDay: Date | null;
}
declare type ReducerAction<TType, TAdditional = {}> = {
    type: TType;
} & TAdditional;
interface ChangeMonthPayload {
    newMonth: Date;
}
declare const createCalendarStateReducer: (disableSwitchToMonthOnDayFocus: boolean, adapter: DateAdapter) => (state: CalendarState, action: ReducerAction<'changeMonth', ChangeMonthPayload> | ReducerAction<'changeFocusedDay', {
    focusedDay: Date;
}>) => CalendarState;
declare type CalendarStateInput = Pick<CalendarProps, 'disableFuture' | 'disablePast' | 'shouldDisableDate' | 'date' | 'onMonthChange'> & {
    minDate: Date;
    maxDate: Date;
    dates: Date[];
    disableDates: Date[];
    disableSwitchToMonthOnDayFocus?: boolean;
};
declare function useCalendarState({ date, dates, onMonthChange, disablePast, disableFuture, minDate, maxDate, shouldDisableDate, disableSwitchToMonthOnDayFocus, disableDates }: CalendarStateInput): {
    calendarState: CalendarState;
    changeMonth: (newDate: Date) => void;
    changeFocusedDay: (newFocusedDate: Date) => void;
    isDateDisabled: (day: Date) => boolean;
    handleChangeMonth: (payload: ChangeMonthPayload) => void;
};
export { useCalendarState, createCalendarStateReducer };
export default useCalendarState;

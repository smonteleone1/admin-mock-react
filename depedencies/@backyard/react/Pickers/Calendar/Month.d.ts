import * as React from 'react';
import type { DayProps } from './Day';
declare const Month: React.ForwardRefExoticComponent<MonthProps>;
interface ExportedMonthProps extends Pick<DayProps, 'disableHighlightToday' | 'showDaysOutsideCurrentMonth' | 'disableDaysOutsideCurrentMonth'> {
    /**
     * Calendar onChange.
     */
    onChange?: (date: Date) => void;
    /**
     * Custom renderer for day. Check [DayComponentProps api](https://material-ui-pickers.dev/api/Day) @DateIOType.
     */
    renderDay?: (day: Date, selectedDates: Date[], DayComponentProps: DayProps) => JSX.Element;
    /**
     * Disables keyboard listener for moving between days in calendar
     */
    disableKeyboardControl?: boolean;
    /**
     * If `true` renders `LoadingComponent` in calendar instead of calendar view.
     * Can be used to preload information and show it in calendar.
     * @default false
     */
    loading?: boolean;
    /**
     * Component displaying when passed `loading` true.
     * @default () => "..."
     */
    renderLoading?: () => React.ReactNode;
}
interface MonthProps extends ExportedMonthProps {
    date?: Date | Date[];
    isDateDisabled: (day: Date) => boolean;
    currentMonth: Date;
    focusedDay: Date | null;
    changeFocusedDay: (newFocusedDay: Date) => void;
    className?: string;
}
declare type MonthRef = HTMLDivElement;
export { Month };
export type { MonthRef, MonthProps, ExportedMonthProps };
export default Month;

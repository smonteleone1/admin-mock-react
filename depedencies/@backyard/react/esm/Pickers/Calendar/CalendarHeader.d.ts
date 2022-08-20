import * as React from 'react';
import { DateValidationProps } from '../functions/validateDate';
import { ExportedMonthSwitcherProps } from './MonthSwitcher';
declare const CalendarHeader: React.ForwardRefExoticComponent<CalendarHeaderProps>;
declare type CalendarHeaderRef = HTMLDivElement;
interface CalendarHeaderProps extends ExportedMonthSwitcherProps, Omit<DateValidationProps, 'shouldDisableDate'> {
    className?: string;
    currentMonth: Date;
    minDate: Date;
    maxDate: Date;
    onMonthChange: (date: Date) => void;
    leftArrowIcon?: React.ReactNode;
    rightArrowIcon?: React.ReactNode;
    leftArrowButtonText?: string;
    rightArrowButtonText?: string;
    disableKeyboardControl?: boolean;
    disablePast?: boolean;
    disableFuture?: boolean;
    shape?: 'rounded' | 'squared';
}
export { CalendarHeader, CalendarHeaderProps, CalendarHeaderRef };
export default CalendarHeader;

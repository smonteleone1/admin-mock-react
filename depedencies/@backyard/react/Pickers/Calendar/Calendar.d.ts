import * as React from 'react';
import type { DateValidationProps } from '../functions/validateDate';
import type { ExportedMonthProps } from './Month';
import type { CalendarHeaderProps } from './CalendarHeader';
import type { ParsableDateObject, ParsableDate } from '../typings/types';
declare const Calendar: React.ForwardRefExoticComponent<CalendarProps & {
    ref?: any;
}>;
declare type PublicCalendarHeaderProps = Pick<CalendarHeaderProps, 'leftArrowIcon' | 'rightArrowIcon' | 'leftArrowButtonProps' | 'rightArrowButtonProps' | 'leftArrowButtonText' | 'rightArrowButtonText'>;
declare type CalendarRef = HTMLDivElement;
declare type CalendarOverrideProps = 'minDate' | 'maxDate' | 'disableDates' | 'dates';
interface CalendarProps extends Omit<DateValidationProps, CalendarOverrideProps>, ExportedMonthProps, PublicCalendarHeaderProps {
    className?: string;
    date?: Date;
    dates?: ParsableDate[] | ParsableDateObject[];
    onChange?: (date: Date, isFinish?: boolean | symbol) => void;
    /**
     * Callback firing on month change.
     */
    onMonthChange?: (date: Date) => void;
    disableDates?: ParsableDate[];
    disablePast?: CalendarHeaderProps['disablePast'];
    disableFuture?: CalendarHeaderProps['disableFuture'];
    minDate?: ParsableDate;
    maxDate?: ParsableDate;
    shape?: 'rounded' | 'squared';
}
export { Calendar };
export type { CalendarRef, CalendarProps };
export default Calendar;

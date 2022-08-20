import * as React from 'react';
import { ButtonProps } from '../../Button';
declare type DayRef = HTMLButtonElement;
declare const Day: React.MemoExoticComponent<React.ForwardRefExoticComponent<DayProps>>;
interface DayProps extends ButtonProps {
    /**
     * The date to show.
     */
    day: Date;
    /**
     * Is focused by keyboard navigation.
     */
    focused?: boolean;
    /**
     * Can be focused by tabbing in.
     */
    focusable?: boolean;
    /**
     * Is day in current month.
     */
    inCurrentMonth: boolean;
    /**
     * Is today?
     */
    today?: boolean;
    /**
     * Disabled?.
     */
    disabled?: boolean;
    /**
     * Selected?
     */
    selected?: boolean;
    /**
     * Is keyboard control and focus management enabled.
     */
    disableKeyboardControl?: boolean;
    /**
     * Disables days outside current month
     */
    disableDaysOutsideCurrentMonth?: boolean;
    /**
     * Display disabled dates outside the current month.
     * @default false
     */
    showDaysOutsideCurrentMonth?: boolean;
    /**
     * Disable highlighting today date with a circle.
     * @default false
     */
    disableHighlightToday?: boolean;
    onDayFocus: (day: Date, eventType: 'keyboard' | 'mouse') => void;
    onDaySelect: (day: Date, isFinish: boolean | symbol) => void;
}
export { Day, DayRef, DayProps };
export default Day;

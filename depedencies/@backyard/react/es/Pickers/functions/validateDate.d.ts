import DateAdapter from "../classes/DateAdapter";
interface DateValidationProps {
    /**
     * Min selectable date.
     * @default Date(1900-01-01)
     */
    minDate?: Date;
    /**
     * Max selectable date.
     * @default Date(2099-31-12)
     */
    maxDate?: Date;
    /**
     * Array of disabled dates
     */
    disableDates?: Date[];
    /**
     * Array of enabled dates
     */
    dates?: Date[];
    /**
     * Disable specific date @DateIOType.
     */
    shouldDisableDate?: (day: Date) => boolean;
    /**
     * Disable past dates.
     * @default false
     */
    disablePast?: boolean;
    /**
     * Disable future dates.
     * @default false
     */
    disableFuture?: boolean;
}
declare const validateDate: (adapter: DateAdapter, value: Date, { minDate, maxDate, disableFuture, shouldDisableDate, disablePast, disableDates, dates }: DateValidationProps) => "invalidDate" | "shouldDisableDate" | "disableFuture" | "disablePast" | "minDate" | "maxDate" | "disableDates" | "dates";
export { validateDate };
export type { DateValidationProps };
export default validateDate;

interface MonthValidationOptions {
    disablePast?: boolean;
    disableFuture?: boolean;
    minDate: Date;
    maxDate: Date;
}
declare const useNextMonthDisabled: (month: Date, { disableFuture, maxDate }: Pick<MonthValidationOptions, 'disableFuture' | 'maxDate'>) => boolean;
declare const usePreviousMonthDisabled: (month: Date, { disablePast, minDate }: Pick<MonthValidationOptions, 'disablePast' | 'minDate'>) => boolean;
export { useNextMonthDisabled, usePreviousMonthDisabled };

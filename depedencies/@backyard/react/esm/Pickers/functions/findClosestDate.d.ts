import { DateAdapterInterface } from '../classes/DateAdapter.d';
interface FindClosestDateParams {
    date: Date;
    adapter: DateAdapterInterface<Date>;
    minDate: Date;
    maxDate: Date;
    disableFuture: boolean;
    disablePast: boolean;
    shouldDisableDate: (date: Date) => boolean;
}
declare const findclosestDate: ({ date, adapter, minDate, maxDate, disableFuture, disablePast, shouldDisableDate, }: FindClosestDateParams) => Date;
export { findclosestDate, FindClosestDateParams };
export default findclosestDate;

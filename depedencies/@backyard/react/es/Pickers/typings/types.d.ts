declare function isParsableDateObject(value: any): value is ParsableDateObject;
declare function isParsableDateRange(value: any): value is ParsableDateRange;
declare type ParsableDate = string | number | Date | null | undefined;
declare type ParsableDateObject = {
    label: string;
    value: ParsableDate;
    disabled?: boolean;
};
declare type ParsableDateRange = {
    label: string;
    start: ParsableDate;
    end: ParsableDate;
    disabled?: boolean;
};
export { isParsableDateObject, isParsableDateRange };
export type { ParsableDate, ParsableDateObject, ParsableDateRange };

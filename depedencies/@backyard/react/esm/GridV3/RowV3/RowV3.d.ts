import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { BackyardTheme } from '../../ThemeProvider/ThemeProvider';
declare const RowV3: BDSForwardRef<RowV3Props>;
declare type RowV3Ref = HTMLDivElement;
interface RowV3Props extends BackyardBaseProps<RowV3Ref> {
    /** Define the number of columns that will be consistent across all breakpoints */
    cols?: number;
    /** Define the number of columns at the xs breakpoint */
    xsCols?: number;
    /** Define the number of columns at the sm breakpoint */
    smCols?: number;
    /** Define the number of columns at the md breakpoint */
    mdCols?: number;
    /** Define the number of columns at the lg breakpoint */
    lgCols?: number;
    /** Define the number of columns at the xl breakpoint */
    xlCols?: number;
    /** Define the number of columns at the xxl breakpoint */
    xxlCols?: number;
    /** The margin on the side of the row across all breakpoints */
    gutter?: keyof BackyardTheme['sizes'];
    /** The margin on the side of the row for xs breakpoing */
    xsGutter?: keyof BackyardTheme['sizes'];
    /** The margin on the side of the row for sm breakpoing */
    smGutter?: keyof BackyardTheme['sizes'];
    /** The margin on the side of the row for md breakpoing */
    mdGutter?: keyof BackyardTheme['sizes'];
    /** The margin on the side of the row for lg breakpoing */
    lgGutter?: keyof BackyardTheme['sizes'];
    /** The margin on the side of the row for xl breakpoing */
    xlGutter?: keyof BackyardTheme['sizes'];
    /** The margin on the side of the row for xxl breakpoing */
    xxlGutter?: keyof BackyardTheme['sizes'];
    /** The column gap size across all breakpoints */
    gap?: keyof BackyardTheme['sizes'];
    /** The column gap for the xs breakpoints */
    xsGap?: keyof BackyardTheme['sizes'];
    /** The column gap for the sm breakpoints */
    smGap?: keyof BackyardTheme['sizes'];
    /** The column gap for the md breakpoints */
    mdGap?: keyof BackyardTheme['sizes'];
    /** The column gap for the lg breakpoints */
    lgGap?: keyof BackyardTheme['sizes'];
    /** The column gap for the xl breakpoints */
    xlGap?: keyof BackyardTheme['sizes'];
    /** The column gap for the xxl breakpoints */
    xxlGap?: keyof BackyardTheme['sizes'];
}
export { RowV3 };
export { RowV3Props, RowV3Ref };
export default RowV3;

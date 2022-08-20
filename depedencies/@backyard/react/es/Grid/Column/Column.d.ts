import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
declare const Column: BDSForwardRef<ColumnProps>;
declare type ColumnRef = HTMLDivElement;
interface ColumnProps extends BackyardBaseProps<ColumnRef> {
    /**
     * Number of columns to display in a small viewport
     */
    sm?: number;
    /**
     * Number of columns to display in a medium viewport
     */
    md?: number;
    /**
     * Number of columns to display in a large viewport
     */
    lg?: number;
    /**
     * Number of columns to display in an extra large viewport
     */
    xl?: number;
}
export { Column };
export { ColumnProps, ColumnRef };
export default Column;

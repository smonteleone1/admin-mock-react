import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
declare const ColumnV3: BDSForwardRef<ColumnV3Props>;
declare type ColumnV3Ref = HTMLDivElement;
interface ColumnV3Props extends BackyardBaseProps<ColumnV3Ref> {
    /** The grid line to have the column start on */
    start?: number;
    /** The grid line to have the column end on */
    end?: number;
    /** The flexbox direction property */
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    /** The flexbox wrap property */
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    /** Flex property: justify-content */
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    /** Flex property: justify-items */
    justifyItems?: 'start' | 'end' | 'center' | 'stretch';
    /** Flex property: align-content */
    alignContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    /** Flex property: align-items */
    alignItems?: 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}
export { ColumnV3 };
export { ColumnV3Props, ColumnV3Ref };
export default ColumnV3;

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { SkeletonProps, SkeletonRef } from '../../Skeleton';
import type { SelectProps } from '../Select';
/**
 * Backyard React Select Skeleton
 */
declare const SelectSkeleton: BDSForwardRef<SelectSkeletonProps>;
declare type SelectSkeletonRef = SkeletonRef;
declare type SelectSkeletonOverrideProps = 'size';
interface SelectSkeletonProps extends Omit<SkeletonProps, SelectSkeletonOverrideProps> {
    /**
     * Size of the text field
     */
    size?: SelectProps['size'];
}
export { SelectSkeleton };
export type { SelectSkeletonProps, SelectSkeletonRef };
export default SelectSkeleton;

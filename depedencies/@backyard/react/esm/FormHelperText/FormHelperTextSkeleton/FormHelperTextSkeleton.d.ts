import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { SkeletonProps, SkeletonRef } from '../../Skeleton';
import type { FormHelperTextProps } from '../FormHelperText';
/**
 * Backyard React Text Field Skeleton
 */
declare const FormHelperTextSkeleton: BDSForwardRef<FormHelperTextSkeletonProps>;
declare type FormHelperTextSkeletonRef = SkeletonRef;
interface FormHelperTextSkeletonProps extends SkeletonProps {
    indent?: FormHelperTextProps['indent'];
}
export { FormHelperTextSkeleton };
export type { FormHelperTextSkeletonProps, FormHelperTextSkeletonRef };
export default FormHelperTextSkeleton;

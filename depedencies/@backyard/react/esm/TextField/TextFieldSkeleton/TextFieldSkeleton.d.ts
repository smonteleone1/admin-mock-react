import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { SkeletonProps, SkeletonRef } from '../../Skeleton';
import type { TextFieldProps } from '../TextField';
/**
 * Backyard React Text Field Skeleton
 */
declare const TextFieldSkeleton: BDSForwardRef<TextFieldSkeletonProps>;
declare type TextFieldSkeletonRef = SkeletonRef;
declare type TextFieldSkeletonOverrideProps = 'size';
interface TextFieldSkeletonProps extends Omit<SkeletonProps, TextFieldSkeletonOverrideProps> {
    /**
     * Size of the text field
     */
    size?: TextFieldProps['size'];
}
export { TextFieldSkeleton };
export type { TextFieldSkeletonProps, TextFieldSkeletonRef };
export default TextFieldSkeleton;

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { SkeletonProps, SkeletonRef } from '../../Skeleton';
import type { TextAreaProps } from '../TextArea';
/**
 * Backyard React Text Area Skeleton
 */
declare const TextAreaSkeleton: BDSForwardRef<TextAreaSkeletonProps>;
declare type TextAreaSkeletonRef = SkeletonRef;
declare type TextAreaSkeletonOverrideProps = 'max';
interface TextAreaSkeletonProps extends Omit<SkeletonProps, TextAreaSkeletonOverrideProps> {
    /**
     * Rows of the text area
     */
    rows?: TextAreaProps['rows'];
    /**
     * Whether or not textarea has `helperText` prop
     */
    helperText?: boolean;
    /**
     * Whether or not textarea has `max` prop
     */
    max?: boolean;
}
export { TextAreaSkeleton };
export type { TextAreaSkeletonProps, TextAreaSkeletonRef };
export default TextAreaSkeleton;

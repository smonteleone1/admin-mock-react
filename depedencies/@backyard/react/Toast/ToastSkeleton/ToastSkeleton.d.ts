import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { SkeletonProps, SkeletonRef } from '../../Skeleton';
/**
 * Backyard React Toast Skeleton
 */
declare const ToastSkeleton: BDSForwardRef<ToastSkeletonProps>;
declare type ToastSkeletonRef = SkeletonRef;
interface ToastSkeletonProps extends SkeletonProps {
    /**
     * Whether or not the toast is multiline
     */
    multiline?: boolean;
}
export { ToastSkeleton };
export type { ToastSkeletonProps, ToastSkeletonRef };
export default ToastSkeleton;

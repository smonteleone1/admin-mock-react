import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { SkeletonProps, SkeletonRef } from '../../Skeleton';
/**
 * Backyard React Alert Skeleton
 */
declare const AlertSkeleton: BDSForwardRef<AlertSkeletonProps>;
declare type AlertSkeletonRef = SkeletonRef;
interface AlertSkeletonProps extends SkeletonProps {
    /**
     * Whether or not the alert is multiline
     */
    multiline?: boolean;
}
export { AlertSkeleton };
export type { AlertSkeletonProps, AlertSkeletonRef };
export default AlertSkeleton;

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backard CheckboxSkeleton component.
 *
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by
 * default.
 *
 * <CheckboxSkeleton />
*/
declare const CheckboxSkeleton: BDSForwardRef<CheckboxSkeletonProps>;
declare type CheckboxSkeletonRef = HTMLDivElement;
interface CheckboxSkeletonProps {
    animate?: boolean;
    withLabel?: boolean;
    withHelper?: boolean;
    labelWidth?: string;
    helperWidth?: string;
    className?: string;
}
export { CheckboxSkeleton };
export type { CheckboxSkeletonProps, CheckboxSkeletonRef };
export default CheckboxSkeleton;

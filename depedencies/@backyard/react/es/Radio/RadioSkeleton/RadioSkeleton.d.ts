import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Backard RadioSkeleton component.
 *
 * Returns a skeleton component with a default width of 300px and a default
 * quantity of list items set to 4. The density is also set to normal by
 * default.
 *
 * <RadioSkeleton />
*/
declare const RadioSkeleton: BDSForwardRef<RadioSkeletonProps>;
declare type RadioSkeletonRef = HTMLDivElement;
interface RadioSkeletonProps {
    animate?: boolean;
    withLabel?: boolean;
    withHelper?: boolean;
    labelWidth?: string;
    helperWidth?: string;
    className?: string;
}
export { RadioSkeleton };
export type { RadioSkeletonProps, RadioSkeletonRef };
export default RadioSkeleton;

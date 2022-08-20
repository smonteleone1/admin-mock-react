import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { SkeletonProps, SkeletonRef } from '../../Skeleton';
import type { AccordionProps } from '../Accordion';
/**
 * Backyard React Accordion Skeleton
 */
declare const AccordionSkeleton: BDSForwardRef<AccordionSkeletonProps>;
declare type AccordionSkeletonRef = SkeletonRef;
declare type AccordionSkeletonOverrideProps = 'size';
interface AccordionSkeletonProps extends Omit<SkeletonProps, AccordionSkeletonOverrideProps> {
    /**
     * Size of the accordion
     */
    size?: AccordionProps['size'];
}
export { AccordionSkeleton };
export type { AccordionSkeletonProps, AccordionSkeletonRef };
export default AccordionSkeleton;

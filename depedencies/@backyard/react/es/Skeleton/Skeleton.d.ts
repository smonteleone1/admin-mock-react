import * as React from 'react';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { BackyardBaseProps, BackyardToken } from '../utils/typings/BackyardProps';
declare const Skeleton: BDSForwardRef<SkeletonProps>;
declare type SkeletonRef = HTMLDivElement;
interface SkeletonProps extends BackyardBaseProps<SkeletonRef> {
    variant?: 'circle' | 'rect' | 'text';
    shape?: 'rounded' | 'squared';
    width?: keyof BackyardToken['sizes'] | string;
    height?: keyof BackyardToken['sizes'] | string;
    className?: string;
    as?: React.ElementType;
    animate?: boolean;
}
export { Skeleton };
export type { SkeletonProps, SkeletonRef };
export default Skeleton;

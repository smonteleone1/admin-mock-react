import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
declare const ContainerV3: BDSForwardRef<ContainerV3Props>;
declare type ContainerV3Ref = HTMLDivElement;
interface ContainerV3Props extends BackyardBaseProps<ContainerV3Ref> {
    /** set the max width of the container */
    container?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
}
export { ContainerV3 };
export type { ContainerV3Props, ContainerV3Ref };
export default ContainerV3;

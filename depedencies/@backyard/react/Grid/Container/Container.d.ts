import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
declare const Container: BDSForwardRef<ContainerProps>;
declare type ContainerRef = HTMLDivElement;
interface ContainerProps extends BackyardBaseProps<ContainerRef> {
}
export { Container };
export type { ContainerProps, ContainerRef };
export default Container;

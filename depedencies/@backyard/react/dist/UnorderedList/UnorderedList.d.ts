import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
declare const UnorderedList: BDSForwardRef<UnorderedListProps>;
declare type UnorderedListRef = HTMLUListElement;
interface UnorderedListProps extends BackyardBaseProps<UnorderedListRef> {
    density?: 'normal' | 'comfort' | 'condensed';
}
export { UnorderedList };
export type { UnorderedListProps, UnorderedListRef };
export default UnorderedList;

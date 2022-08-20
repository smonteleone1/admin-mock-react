import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
declare const ListItem: BDSForwardRef<ListItemProps & {
    ref?: any;
}>;
declare type ListItemRef = HTMLLIElement;
interface ListItemProps extends BackyardBaseProps<ListItemRef> {
}
export { ListItem };
export type { ListItemRef, ListItemProps };
export default ListItem;

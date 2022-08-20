import type { ModalHeaderRef, ModalHeaderProps } from '../Modal/ModalHeader';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Drawer Header
 *
 * Component to use as a child of `Drawer`
 *
 * Should contain the text for the title of the drawer
 *
 * Example:
 *  <DrawerHeader
 *      icon={<Settings />}
 *  >
 *      Drawer Header
 *  </DrawerHeader>
 */
declare const DrawerHeader: BDSForwardRef<DrawerHeaderProps>;
declare type DrawerHeaderRef = ModalHeaderRef;
interface DrawerHeaderProps extends ModalHeaderProps {
}
export { DrawerHeader };
export type { DrawerHeaderProps, DrawerHeaderRef };
export default DrawerHeader;

import type { ModalFooterRef, ModalFooterProps } from '../Modal/ModalFooter';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Drawer Footer
 *
 * Component to use as child of `Drawer`
 *
 * Should contain the primary actions of the drawer,
 * such as a button for cancelling and action or submitting and action
 *
 * Will automatically space and style children components properly
 *
 * Example:
 *  <DrawerFooter>
 *      <Button
 *          variant="secondary"
 *          color="contrast"
 *      >
 *          Cancel
 *      </Button>
 *      <Button>Action</Button>
 *  </DrawerFooter>
 */
declare const DrawerFooter: BDSForwardRef<DrawerFooterProps>;
declare type DrawerFooterRef = ModalFooterRef;
interface DrawerFooterProps extends ModalFooterProps {
    /**
     * Orientation of the content
     */
    orientation?: 'vertical' | 'horizontal';
}
export { DrawerFooter };
export type { DrawerFooterProps, DrawerFooterRef };
export default DrawerFooter;

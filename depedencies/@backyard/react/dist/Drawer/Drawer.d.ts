import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { ModalRef, ModalProps } from '../Modal';
/**
 * Backyard React Drawer
 *
 * Barebones drawer component for styling and handling if extended
 *
 * This component contains only the styling for the modal component, not the logic for handling displaying the drawer
 *
 * The children of this component should be one of the three included modal components:
 *
 *  1) `DrawerHeader` (Required) - for the header of the component,
 *      containing the label, title, and an icon if desired
 *
 *  2) `DrawerBody` (Required) - for the body of the component,
 *      containing the body text and any additional components for the modal
 *
 *  3) `DrawerFooter` (Optional) - for the footer of the component,
 *      if any controls are needed for the modal, such as a 'cancel' button, or an action button
 *
 * Example:
 *  <Drawer>
 *      <DrawerHeader
 *          icon={<Settings />}
 *      >
 *          Modal Heading
 *      </DrawerHeader>
 *      <DrawerBody>
 *          Modal Body
 *      </DrawerBody>
 *      <DrawerFooter>
 *          <Button
 *              variant="secondary"
 *              color="contrast"
 *          >
 *              Cancel
 *          </Button>
 *          <Button>Action</Button>
 *      </DrawerFooter>
 *  </Drawer>
 *
 * For controlling this modal, or any other custom modal, use `ModalController`
 *
 *  <DrawerController
 *      modal={(
 *          <Drawer>
 *              <DrawerHeader ... />
 *              <DrawerBody ... />
 *              <DrawerFooter ... />
 *          </Drawer>
 *      )}
 *  />
 */
declare const Drawer: BDSForwardRef<DrawerProps>;
declare type DrawerRef = ModalRef;
interface DrawerProps extends ModalProps {
    /**
     * Orientation of the Drawer
     *
     * @default 'vertical'
     */
    orientation?: 'vertical' | 'horizontal';
}
export { Drawer };
export type { DrawerProps, DrawerRef };
export default Drawer;

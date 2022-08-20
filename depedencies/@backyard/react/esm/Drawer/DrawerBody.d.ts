import type { ModalBodyProps, ModalBodyRef } from '../Modal/ModalBody';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Drawer Body
 *
 * Component to use as a child of `Drawer`
 *
 * Contains the body text of the drawer, and any components or other HTML needed for the body
 *
 * Should not contain primary interactions such as buttons for cancelling an action or submitting and action
 * Those primary interactions should be in the `DrawerFooter` component
 *
 * Example:
 *  <DrawerBody>
 *      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
 *      sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
 *      Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
 *      ultrices lorem condimentum, nec ullamcorper felis porttitor.
 *  </DrawerBody>
 */
declare const DrawerBody: BDSForwardRef<DrawerBodyProps>;
declare type DrawerBodyRef = ModalBodyRef;
interface DrawerBodyProps extends ModalBodyProps {
}
export { DrawerBody };
export type { DrawerBodyProps, DrawerBodyRef };
export default DrawerBody;

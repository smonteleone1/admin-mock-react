import { TypographyRef, TypographyProps } from '../Typography';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Modal Body
 *
 * Component to use as a child of `Modal`
 *
 * Contains the body text of the modal, and any components or other HTML needed for the body
 *
 * Should not contain primary interactions such as buttons for cancelling an action or submitting and action
 * Those primary interactions should be in the `ModalFooter` component
 *
 * Example:
 *  <ModalBody>
 *      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
 *      sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
 *      Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
 *      ultrices lorem condimentum, nec ullamcorper felis porttitor.
 *  </ModalBody>
 */
declare const ModalBody: BDSForwardRef<ModalBodyProps>;
declare type ModalBodyRef = TypographyRef;
interface ModalBodyProps extends TypographyProps {
}
export { ModalBody, ModalBodyRef, ModalBodyProps };
export default ModalBody;

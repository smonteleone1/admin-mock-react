import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Modal Footer
 *
 * Component to use as child of `Modal`
 *
 * Should contain the primary actions of the modal,
 * such as a button for cancelling and action or submitting and action
 *
 * Will automatically space and style children components properly
 *
 * Example:
 *  <ModalFooter>
 *      <Button
 *          variant="secondary"
 *          color="contrast"
 *      >
 *          Cancel
 *      </Button>
 *      <Button>Action</Button>
 *  </ModalFooter>
 */
declare const ModalFooter: BDSForwardRef<ModalFooterProps>;
declare type ModalFooterRef = HTMLDivElement;
interface ModalFooterProps extends BackyardBaseProps<HTMLDivElement> {
    /**
     * Whether or not the horizontal line is included
     *
     * @default false
     */
    noLine?: boolean;
    /**
     * Button grouping orientation
     *
     * @default 'horizontal'
     */
    orientation?: 'none' | 'horizontal' | 'vertical';
}
export { ModalFooter };
export type { ModalFooterProps, ModalFooterRef };
export default ModalFooter;

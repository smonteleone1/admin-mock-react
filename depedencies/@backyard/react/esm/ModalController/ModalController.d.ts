import * as React from 'react';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import { ModalHandlerRef, ModalHandlerProps } from './ModalHandler';
/**
 * Backyard React Modal Controller
 *
 * Extends from `ModalHandler` to offer and cleaner API to work with
 *
 * Controls modal defined in `modal` prop with basic closing/opening handling
 *
 * For more API controls integrated with this HOC, see `ModalHandler`
 *
 * Example:
 *  <ModalController
 *      modal={(
 *          <Modal>
 *              <ModalHeader ... />
 *              <ModalBody ... />
 *              <ModalFooter ... />
 *          </Modal>
 *      )}
 *  />
 */
declare const ModalController: BDSForwardRef<ModalControllerProps>;
declare type ModalControllerRef = ModalHandlerRef;
declare type ModalControllerOverrideProps = 'open';
interface ModalControllerProps extends Omit<ModalHandlerProps, ModalControllerOverrideProps> {
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Modal component to control
     */
    modal: React.ReactElement;
    /**
     * Whether or not modal is open
     */
    open?: boolean;
    /**
     * Style of modal controller
     */
    style?: React.CSSProperties;
    /**
     * Style of the modal
     */
    modalStyle?: React.CSSProperties;
    /**
     * Position of modal on page
     *
     * @default 'center of page'
     */
    position?: React.CSSProperties;
    /**
     * Props to provide context for
     */
    context?: Record<string, any>;
    /**
     * Props to override children with
     */
    override?: Record<string, any>;
}
export { ModalController, ModalControllerProps, ModalControllerRef };
export default ModalController;

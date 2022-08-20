import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { OverlayProps } from '../Overlay';
import ModalManager from './ModalManager';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Modal Handler
 *
 * This component is used to extend the higher ordered component `ModalController`
 * Abstracts some of the complexity for future extending, if needed
 *
 * Heavily influenced by Material UI's Modal Component
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Modal/Modal.js
 */
declare const ModalHandler: BDSForwardRef<ModalHandlerProps>;
declare type ModalHandlerRef = HTMLDivElement;
interface ModalHandlerProps extends BackyardBaseProps<ModalHandlerRef> {
    /**
     * Overlay component to display behind modal
     */
    OverlayComponent?: React.ElementType;
    /**
     * Props to extend overlay component with
     * Useful if the `style` prop needs to be different
     */
    overlayProps?: OverlayProps;
    /**
     * Children
     */
    children?: React.ReactElement;
    /**
     * Container object or function of modal to display
     */
    container?: React.ReactInstance;
    /**
     * Whether or not browser will auto focus on modal
     */
    disableAutoFocus?: boolean;
    /**
     * Whether or not overlay click listener is active
     */
    disableOverlayClick?: boolean;
    /**
     * Whether or not modal enforces focus (traps)
     */
    disableEnforceFocus?: boolean;
    /**
     * Whether or not escape key listener is active
     */
    disableEscapeKeyDown?: boolean;
    /**
     * Whether or not portal is used to bring modal to root DOM
     */
    disablePortal?: boolean;
    /**
     * Whether or not modal restores focus
     */
    disableRestoreFocus?: boolean;
    /**
     * Whether or not scroll lock is disabled
     */
    disableScrollLock?: boolean;
    /**
     * Whether or not overlay is hidden
     */
    hideOverlay?: boolean;
    /**
     * Whether or not modal continues to be mounted when closed
     * Useful for certain SEO conditions
     */
    keepMounted?: boolean;
    /**
     * Class that manages modal state and properties
     */
    manager?: ModalManager;
    /**
     * `onOverlayClick` trigger function, when overlay is clicked
     * @argument {Event} event - DOM event
     */
    onOverlayClick?: (event: React.MouseEvent) => void;
    /**
     * `onClose` trigger function, when modal is closed
     * @argument {Event} event - DOM event
     * @argument {string} name - Name of event fired that caused modal to close
     */
    onClose?: (event?: ModalHandlerEvent, name?: string) => void;
    /**
     * `onOpen` trigger function, when modal is closed
     */
    onOpen?: () => void;
    /**
     * `onEscapeKeyDown` trigger function, when escape key is pressed while modal is active
     * @argument {Event} event - DOM event
     */
    onEscapeKeyDown?: (event: React.KeyboardEvent) => void;
    /**
     * `onRendered` trigger function, when modal is closed
     */
    onRendered?: () => void;
    /**
     * Whether or not modal is open
     */
    open: boolean;
}
declare type ModalHandlerEvent = React.MouseEvent | React.KeyboardEvent;
export { ModalHandler };
export type { ModalHandlerProps, ModalHandlerRef };
export default ModalHandler;

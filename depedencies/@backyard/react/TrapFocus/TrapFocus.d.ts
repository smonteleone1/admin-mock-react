import React from 'react';
import { BDSFunctional } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Trap Focus
 *
 * Traps focus so that user cannot focus on anything outside of children
 * Creates sentinels around content with tab index 0 to reset tabs
 *
 * Heavily Based on Material-UI's TrapFocus:
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Modal/TrapFocus.js
 */
declare const TrapFocus: BDSFunctional<TrapFocusProps>;
interface TrapFocusProps {
    /**
     * A single child content element
     */
    children: React.ReactElement;
    /**
     * If `true`, the modal will not automatically shift focus to itself when it opens, and
     * replace it to the last focused element when it closes.
     * This also works correctly with any modal children that have the `disableAutoFocus` prop.
     *
     * Generally this should never be set to `true` as it makes the modal less
     * accessible to assistive technologies, like screen readers.
     */
    disableAutoFocus?: boolean;
    /**
     * If `true`, the modal will not prevent focus from leaving the modal while open.
     *
     * Generally this should never be set to `true` as it makes the modal less
     * accessible to assistive technologies, like screen readers.
     */
    disableEnforceFocus?: boolean;
    /**
     * If `true`, the modal will not restore focus to previously focused element once
     * modal is hidden.
     */
    disableRestoreFocus?: boolean;
    /**
     * Return the document to consider.
     * We use it to implement the restore focus between different browser documents.
     */
    getDoc: () => HTMLDocument;
    /**
     * Do we still want to enforce the focus?
     * This prop helps nesting TrapFocus elements.
     */
    isEnabled: () => boolean;
    /**
    * If `true`, the modal is open.
    */
    open: boolean;
}
export { TrapFocus, TrapFocusProps };
export default TrapFocus;

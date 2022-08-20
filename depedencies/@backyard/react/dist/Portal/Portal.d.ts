import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Portal
 *
 * @todo Comments
 */
declare const Portal: BDSForwardRef<PortalProps>;
declare type PortalRef = HTMLElement;
interface PortalProps extends BackyardBaseProps<PortalRef> {
    /**
     * Children of Portal
     */
    children: React.ReactNode;
    /**
     * Container owner of portal
     */
    container: React.ReactInstance;
    /**
     * Whether or not to disable portal functionality
     */
    disablePortal?: boolean;
    /**
     * `onRendered` trigger function
     */
    onRendered?: () => void;
}
export { Portal };
export type { PortalProps, PortalRef };
export default Portal;

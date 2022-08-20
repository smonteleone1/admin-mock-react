import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Overlay
 *
 * Simple fixed overlay using the overlay design token and position across entire screen
 */
declare const Overlay: BDSForwardRef<OverlayProps>;
declare type OverlayRef = HTMLDivElement;
interface OverlayProps extends BackyardBaseProps<OverlayRef> {
    /**
     * Whether or not overlay is invisible
     */
    invisible?: boolean;
    /**
     * Whether or not overlay is open
     */
    open: boolean;
}
export { Overlay };
export type { OverlayProps, OverlayRef };
export default Overlay;

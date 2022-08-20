import * as React from 'react';
import { BDSFunctional } from '../utils/typings/BDSComponentProps';
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 */
declare const ClickAwayListener: BDSFunctional<ClickAwayListenerProps>;
declare type ClickAwayEvent = React.MouseEvent<Document>;
interface ClickAwayListenerProps {
    /**
     * The wrapped element.
     */
    children: React.ReactElement & {
        ref?: React.Ref<HTMLElement>;
    };
    /**
     * If `true`, the React tree is ignored and only the DOM tree is considered.
     * This prop changes how portaled elements are handled.
     */
    disableReactTree?: boolean;
    /**
     * The mouse event to listen to. You can disable the listener by providing `false`.
     */
    mouseEvent?: 'onClick' | 'onMouseDown' | 'onMouseUp' | false;
    /**
     * Callback fired when a "click away" event is detected.
     */
    onClickAway: (event: ClickAwayEvent) => void;
    /**
     * The touch event to listen to. You can disable the listener by providing `false`.
     */
    touchEvent?: 'onTouchEnd' | 'onTouchStart' | false;
}
export { ClickAwayListener };
export type { ClickAwayListenerProps, ClickAwayEvent };
export default ClickAwayListener;

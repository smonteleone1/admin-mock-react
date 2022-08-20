import * as React from 'react';
import type { PathIconProps } from '@backyard/icons/components/PathIcon';
import type { IconButtonProps } from '../IconButton';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
import type { LinkProps } from '../Link';
import type { BackyardTheme } from '../ThemeProvider';
/**
 * Backyard React Toast
 *
 * Component for displaying severity levels of 'success', 'info', 'warning', 'error' with a timestamp
 *
 * This component is similar to `Alert`
 *
 * The toast is closeable by default
 *
 * By default, a local timestamp is created when the toast is created
 * An external pre-computed timestamp and text can be supplied via `timestamp` prop
 * An external pre-computed JS Date can be given via `date` prop as well
 *
 * The toast is always multiline
 *
 *  <Toast
 *      type="info"
 *      title="Note"
 *  >
 *      This is the subtitle of the toast.
 *  </Toast>
 */
declare const Toast: BDSForwardRef<ToastProps>;
declare type ToastRef = HTMLDivElement;
declare type ToastEvent = {
    target: ToastRef;
} & (React.MouseEvent<ToastRef> | React.KeyboardEvent<ToastRef> | {});
declare type ToastOverrideProps = 'action' | 'title' | 'size';
interface ToastProps extends BackyardBaseProps<ToastRef, ToastOverrideProps> {
    /**
     * Children of subtitle span
     */
    children?: React.ReactNode;
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Close `IconButton` prop overrides
     */
    closeButtonProps?: IconButtonProps;
    /**
     * Whether or not alert is closed by default
     */
    closed?: boolean;
    /**
     * Milliseconds of delay until deletion from DOM after close clicked
     *
     * Useful for allowing animations to play before removal
     */
    closeDelay?: number;
    /**
     * Milliseconds to auto close in, if defined
     */
    autoCloseAfter?: number;
    /**
     * Whether or not close is present
     */
    noClose?: boolean;
    /**
     * Date helper to override timestamp with
     */
    date?: Date;
    /**
     * Timestamp string
     *
     * @default 'Just Now'
     */
    timestamp?: string;
    /**
     * Whether or not to display timestamp
     *
     * @default false
     */
    noTimestamp?: boolean;
    /**
     * Icon props to override with
     */
    iconProps?: PathIconProps;
    /**
     * Title text of alert
     */
    title?: React.ReactNode;
    /**
     * Subtitle text of alert
     *
     * Alternative to using `children`
     */
    subtitle?: React.ReactNode;
    /**
     * Action text of alert, if defined
     */
    action?: React.ReactNode;
    /**
     * `to` helper prop of action `Link`
     */
    actionTo?: string;
    /**
     * Exposes props of `Link` action
     *
     * Useful if you need more customizability than the helper props `actionTo` and `onActionClick`
     */
    actionLinkProps?: LinkProps;
    /**
     * Whether or not to make the title and subtitle on separate lines
     * @default true
     */
    multiline?: boolean;
    /**
     * Elevations to assign to alert
     * @default 'true'
     */
    elevation?: boolean | keyof BackyardTheme['shadows'];
    /**
     * Type of Alert
     */
    type?: 'info' | 'error' | 'success' | 'warning';
    /**
     * Size of alert
     */
    size?: 'standard' | 'medium' | 'jumbo';
    /**
     * Outer shape of the component.
     */
    shape?: 'rounded' | 'squared';
    /**
     * Width of the alert.
     */
    height?: keyof BackyardTheme['sizes'] | string;
    /**
     * Width of the alert.
     */
    width?: keyof BackyardTheme['sizes'] | string;
    /**
     * `onClose` trigger function
     *
     * Helper prop for `onClick` handler on close
     *
     * @argument {Event} event - DOM event
     */
    onClose?: (event: ToastEvent, target: EventTarget) => void;
    /**
     * `onActionClick` trigger function
     *
     * Helper prop for `onClick` handler on `Link`
     * Can be overridden from `actionProps`
     *
     * @argument {Event} event - DOM event
     */
    onActionClick?: (event: React.MouseEvent, target: EventTarget) => void;
}
export { Toast };
export type { ToastProps, ToastRef, ToastEvent };
export default Toast;

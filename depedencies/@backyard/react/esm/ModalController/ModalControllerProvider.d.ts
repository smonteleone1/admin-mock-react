import * as React from 'react';
import type { ModalControllerProps } from './ModalController';
declare const ModalControllerContext: React.Context<ModalControllerContextValues>;
declare const ModalControllerConsumer: React.Consumer<ModalControllerContextValues>;
/**
 * `ModalControllerProvider` Backyard React
 *
 * @param props - Modal props
 */
declare const ModalControllerProvider: ({ children, override, context: contextProp, ...props }: ModalControllerProviderProps) => React.ReactElement<ModalControllerProviderProps>;
interface ModalControllerContextValues extends ModalControllerProviderProps, Record<string, any> {
    /**
     * Props to override children with
     */
    override?: Record<string, any>;
}
interface ModalControllerProviderProps extends Omit<ModalControllerProps, 'modal'> {
    /**
     * Props to override children with
     */
    override?: Record<string, any>;
}
export { ModalControllerContext, ModalControllerConsumer, ModalControllerProvider };
export type { ModalControllerContextValues, ModalControllerProviderProps };
export default ModalControllerProvider;

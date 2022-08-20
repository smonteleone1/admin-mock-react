import * as React from 'react';
import type { ModalProps } from './Modal';
declare const ModalContext: React.Context<ModalContextValues>;
declare const ModalConsumer: React.Consumer<ModalContextValues>;
/**
 * `ModalProvider` Backyard React
 *
 * @param props - Modal props
 */
declare const ModalProvider: ({ children, noLines, context: contextProp, ...override }: ModalProviderProps) => React.ReactElement<ModalProviderProps>;
interface ModalContextValues extends Record<string, any> {
    /**
     * Whether or not `Modal` has lines between `ModalHeader` and `ModalFooter`
     */
    noLines?: boolean;
}
interface ModalProviderProps extends ModalProps {
}
export { ModalContext, ModalConsumer, ModalProvider };
export type { ModalContextValues, ModalProviderProps };
export default ModalProvider;

import * as React from 'react';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Modal Header
 *
 * Component to use as a child of `Modal`
 *
 * Should contain the text for the title of the modal
 *
 * Example:
 *  <ModalHeader
 *      label="Label"
 *      icon={<Settings />}
 *  >
 *      Modal Header
 *  </ModalHeader>
 */
declare const ModalHeader: BDSForwardRef<ModalHeaderProps>;
declare type ModalHeaderRef = HTMLDivElement;
interface ModalHeaderProps extends BackyardBaseProps<ModalHeaderRef> {
    /**
     * Title of modal
     */
    children?: React.ReactNode;
    /**
     * Icon to display before title
     */
    icon?: React.ReactElement;
    /**
     * Label of title
     */
    label?: string;
    /**
     * Whether or not the component has a horizontal line
     *
     * @default false
     */
    noLine?: boolean;
}
export { ModalHeader };
export type { ModalHeaderProps, ModalHeaderRef };
export default ModalHeader;

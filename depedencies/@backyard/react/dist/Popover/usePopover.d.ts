import * as React from 'react';
import type { SelectRef } from '../Select';
import type { PopoverProps } from './Popover';
declare const usePopover: <R extends HTMLElement = HTMLSelectElement>({ disabled, containerRef, referenceElement, openKeys, closeKeys, delayClose, delayOpen, open: openProp, onOpen, onClose, onBlur, onKeyDown, onMouseDown, ref, }: UsePopoverProps<R>) => {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleOpen: () => void;
    handleClose: () => void;
    handleKeyDown: (event: React.KeyboardEvent<R>) => void;
    handleBlur: (event: React.FocusEvent<R, Element>) => void;
    handleMouseDown: (event: React.MouseEvent<R, MouseEvent>) => void;
    clearPopoverTimeout: (type: 'open' | 'close') => void;
    openAfterDelay: () => void;
    closeAfterDelay: () => void;
};
interface UsePopoverProps<R extends HTMLElement = SelectRef> {
    disabled?: Boolean;
    containerRef: React.MutableRefObject<HTMLDivElement>;
    referenceElement: R;
    openKeys?: React.KeyboardEvent['key'][];
    closeKeys?: React.KeyboardEvent['key'][];
    delayClose?: number;
    delayOpen?: number;
    open: PopoverProps['open'];
    onOpen?: PopoverProps['onOpen'];
    onClose?: PopoverProps['onClose'];
    onBlur?: (event: React.FocusEvent<R>) => void;
    onKeyDown?: (event: React.KeyboardEvent<R>) => void;
    onMouseDown?: (event: React.MouseEvent<R>) => void;
    ref?: React.MutableRefObject<R>;
}
export { usePopover };
export type { UsePopoverProps };
export default usePopover;

import type { ButtonProps } from '../Button';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Icon Button
 *
 * Used for display Icon-only buttons with proper squared spacing and size.
 * Utilizes `ButtonBase` found in `Button` styles for styling.
 */
declare const IconButton: BDSForwardRef<IconButtonProps>;
declare type IconButtonRef = HTMLButtonElement;
interface IconButtonProps extends ButtonProps {
    /** See `ButtonProps` */
    ariaTitle?: string;
}
export { IconButton };
export type { IconButtonRef, IconButtonProps };
export default IconButton;

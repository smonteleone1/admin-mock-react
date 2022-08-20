import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Badge
 *
 * Simple text component with uppercased text and large letter spacing
 *
 * The `display` prop can be used to change the CSS display of the wrapper
 * This is useful for changing from an `inline-flex` to a blocking `flex` if needed
 *
 *  <Badge>
 *      Placeholder
 *  </Badge>
 */
declare const Badge: BDSForwardRef<BadgeProps>;
declare type BadgeRef = HTMLSpanElement;
declare type BadgeOverrideProps = 'color' | 'size';
interface BadgeProps extends BackyardBaseProps<BadgeRef, BadgeOverrideProps> {
    /**
     * The badge text.
     */
    children: string;
    /**
     * DOM Class Name for pill
     */
    className?: string;
    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     */
    color?: 'dark-blue' | 'blue' | 'light-blue' | 'interactive' | 'green' | 'red' | 'gold' | 'lfp-yellow' | 'neutral';
    /**
     * Variant of badge
     */
    variant?: 'filled' | 'outlined';
    /**
     * If the text should be bold
     */
    bold?: boolean;
    /**
     * If the text should be bold
     */
    size?: 'medium' | 'jumbo';
    /**
     * Arrow beak on right or left
     */
    arrow?: 'none' | 'left' | 'right';
}
export { Badge };
export type { BadgeProps, BadgeRef };
export default Badge;

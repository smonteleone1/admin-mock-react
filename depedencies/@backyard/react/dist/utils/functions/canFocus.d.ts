 
/**
 * Returns whether or not the target element can be focused from the previous
 *
 * @param prev - previous element to validate focus from
 * @param next - next element to validate focus to
 */
export declare const canFocus: (prev?: HTMLElementIsh, next?: HTMLElementIsh, focusable?: string[]) => boolean;
export declare type HTMLElementIsh = Partial<HTMLElement> & {
    disabled?: boolean;
};
export default canFocus;

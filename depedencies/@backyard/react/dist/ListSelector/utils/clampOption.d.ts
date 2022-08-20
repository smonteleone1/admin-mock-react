import type { ListSelectorMultipleProps } from '../ListSelectorMultiple';
/**
 * Clamps option to limited options
 *
 * @param type - action taen
 * @param option - current option number
 * @param options - list of options
 */
declare const clampOption: (type: 'increment' | 'decrement' | 'first' | 'last', option: number, options: ListSelectorMultipleProps['options']) => any;
export { clampOption };
export default clampOption;

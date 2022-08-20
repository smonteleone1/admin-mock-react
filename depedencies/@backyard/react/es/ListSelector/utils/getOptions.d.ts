import type { OptionProps } from '../../Select';
import type { ListSelectorMultipleProps } from '../ListSelectorMultiple';
/**
 * Get options from either input, `options` prop or `children`
 *
 * @param options - options format for multiselect
 * @param children - children `Option`s for multiselect
 */
declare const getOptions: (options: ListSelectorMultipleProps['options'], children?: ListSelectorMultipleProps['children']) => OptionProps[];
export { getOptions };
export default getOptions;

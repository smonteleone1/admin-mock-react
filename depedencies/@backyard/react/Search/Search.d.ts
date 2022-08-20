import * as React from 'react';
import type { TextInputProps, TextInputRef } from '../TextInput';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React Search
 *
 * Search text input that extends on `TextInput`
 *
 *  <Search placeholder="Search" />
 *
 * To include helper text, use `FormControl` and `FormHelperText` to sync states
 *
 *  <FormControl>
 *      <Search placeholder="Username" />
 *      <FormHelperText>Search by username</FormHelperText>
 *  </FormControl>
 */
declare const Search: BDSForwardRef<SearchProps>;
declare type SearchRef = TextInputRef;
interface SearchProps extends TextInputProps {
    /**
     * Children
     */
    children?: React.ReactNode;
    /**
     * DOM Class Name
     */
    className?: string;
    /**
     * Whether or not input is disabled
     */
    disabled?: boolean;
    /**
     * Default value of input
     */
    defaultValue?: string;
    /**
     * When Search icon is clicked... trigger function
     */
    onSearchClick?: (event: React.MouseEvent, value: string) => void;
    /**
     * When Clear icon is clicked... trigger function
     */
    onClearClick?: (event: React.MouseEvent, value: string) => void;
    /**
     * Defines fill color
     * Only useful for `filled` variant
     */
    fill?: string | boolean;
    /**
     * Placeholder value for Search input
     */
    placeholder?: string;
    /**
     * Display variant of text input
     */
    variant?: 'outlined' | 'filled';
    /**
     * Visual shape of text input
     */
    shape?: 'rounded' | 'squared';
    /**
     * Type of text input
     */
    type?: string;
}
export { Search };
export { SearchProps, SearchRef };
export default Search;

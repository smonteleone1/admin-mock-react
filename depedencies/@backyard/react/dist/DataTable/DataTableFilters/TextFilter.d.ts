/// <reference types="react" />
import type { FilterProps } from 'react-table';
declare function TextFilter<Data extends object>({ column }: FilterProps<Data>): JSX.Element;
export { TextFilter };
export default TextFilter;

/// <reference types="react" />
import type { FilterProps } from 'react-table';
declare const SelectFilter: <Data extends object>(optionValues: string[]) => ({ column }: FilterProps<Data>) => JSX.Element;
export { SelectFilter };
export default SelectFilter;

import type { Hooks } from 'react-table';
import type { DataTableProviderProps } from '../DataTableProvider';
declare const useScrollbarColumn: <Data extends object = {}>(scrollbarWidth: number, disableScrollbar: DataTableProviderProps['disableScrollbar']) => (hooks: Hooks<Data>) => void;
export { useScrollbarColumn };
export default useScrollbarColumn;

import type { Hooks } from 'react-table';
import type { BackyardTheme } from '../../ThemeProvider';
import type { DataTableProps } from '../DataTable';
declare const useSelectColumn: <Data extends object = {}>(theme: BackyardTheme, enableRowSelection: boolean) => (hooks: Hooks<Data>) => void;
export { useSelectColumn };
export default useSelectColumn;

import type { Hooks } from 'react-table';
import { BackyardTheme } from '../../ThemeProvider';
import type { DataTableProps } from '../DataTable';
declare const useExpandColumn: (theme: BackyardTheme, enableRowExpansion: DataTableProps['enableRowExpansion']) => <Data extends object = {}>(hooks: Hooks<Data>) => void;
export { useExpandColumn };
export default useExpandColumn;

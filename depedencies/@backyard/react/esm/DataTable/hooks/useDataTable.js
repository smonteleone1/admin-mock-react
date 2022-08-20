import * as React from 'react';
import { DataTableContext } from '../DataTableProvider';

var useDataTable = function useDataTable() {
  return React.useContext(DataTableContext);
};

export { useDataTable };
export default useDataTable;
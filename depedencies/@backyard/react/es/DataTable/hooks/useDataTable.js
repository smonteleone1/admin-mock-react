import * as React from 'react';
import { DataTableContext } from '../DataTableProvider';

const useDataTable = () => {
  return React.useContext(DataTableContext);
};

export { useDataTable };
export default useDataTable;
import * as React from 'react';
import type { DataTablePaginationProps } from './DataTablePagination';
declare const StubPagination: (props: StubPaginationProps) => React.ReactElement<StubPaginationProps>;
interface StubPaginationProps extends DataTablePaginationProps {
    length?: number;
}
export { StubPagination };
export type { StubPaginationProps };
export default StubPagination;

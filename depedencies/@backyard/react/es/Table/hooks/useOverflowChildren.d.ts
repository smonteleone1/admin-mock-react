import * as React from 'react';
import type { TableCellRef } from '../TableCell';
import type { TableHeaderRef } from '../TableHeader';
declare type OverflowRefs = TableCellRef | TableHeaderRef;
/**
 *
 * @param ref ref of cell
 * @param defaultValue default value of
 */
declare const useOverflowChildren: (ref: React.RefObject<OverflowRefs>, defaultValue: boolean) => boolean;
export { useOverflowChildren };
export default useOverflowChildren;

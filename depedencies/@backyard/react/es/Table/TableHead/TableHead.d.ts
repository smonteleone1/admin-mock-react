import { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Corresponding html '<thead>' tag of the Backyard Design System's table component.
 * Used with TableRow and TableHeader to build out the headers for a table.
 *
 * ex.
 * <Table>
 *   <TableHead>
 *       <TableRow>
 *           <TableHeader>Column 1</TableHeader>
 *           <TableHeader>Column 2</TableHeader>
 *           <TableHeader>Column 3</TableHeader>
 *       </TableRow>
 *   </TableHead>
 *   <TableBody>
 * ...
 */
declare const TableHead: BDSForwardRef<TableHeadProps>;
declare type TableHeadRef = HTMLTableSectionElement;
interface TableHeadProps extends BackyardBaseProps<TableHeadRef> {
}
export { TableHead };
export type { TableHeadProps, TableHeadRef };
export default TableHead;

import { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Corresponding html '<table>' tag of the Backyard Design System's table component.
 * Used with TableRow, TableCell, TableHeader, TableHeader and TableBody to build out various tables.
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
 *       <TableRow>
 *           <TableCell>Data 1.1</TableCell>
 *           <TableCell>Data 1.2</TableCell>
 *           <TableCell>Data 1.3</TableCell>
 *       </TableRow>
 *       <TableRow>
 *           <TableCell>Data 2.1</TableCell>
 *           <TableCell>Data 2.2</TableCell>
 *           <TableCell>Data 2.3</TableCell>
 *       </TableRow>
 *   </TableBody>
 * </Table>
 *
 * ex.
 * <Table>
 *   <TableRow>
 *       <TableHeader>Header 1</TableHeader>
 *       <TableCell>Data 1</TableCell>
 *   </TableRow>
 *   <TableRow>
 *       <TableHeader>Header 2</TableHeader>
 *       <TableCell>Data 2</TableCell>
 *   </TableRow>
 * </Table>
 */
declare const Table: BDSForwardRef<TableProps>;
declare type TableRef = HTMLTableElement;
interface TableProps extends BackyardBaseProps<TableRef> {
    /**
     * Shape of the table edges
     */
    shape?: 'rounded' | 'squared';
    /**
     * Toggle on and off right rule
     */
    rightRule?: boolean | 'true' | 'false';
    /**
     * Show & hide the th background color
     */
    variant?: 'filled' | 'outlined';
}
export { Table };
export type { TableProps, TableRef };
export default Table;

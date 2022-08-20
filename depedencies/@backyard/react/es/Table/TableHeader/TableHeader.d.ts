import type { InfoOutlinedProps } from '@backyard/icons/InfoOutlined';
import * as React from 'react';
import type { TooltipProps } from '../../Tooltip';
import type { TooltipPopperProps } from '../../TooltipPopper';
import type { BackyardBaseProps } from '../../utils/typings/BackyardProps';
import { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
/**
 * Corresponding html '<th>' tag of the Backyard Design System's table component.
 * Used with TableRow, TableCell and TableBody to build out the body of a table.
 * Used with TableRow, and TableHead to build out the header of a table.
 *
 * ex.
 * <Table>
 *   <TableHead>
 *       <TableRow>
 *           <TableHeader>Column 1</TableHeader>
 *           <TableHeader width={30}>Column 2</TableHeader>
 *           <TableHeader>Column 3</TableHeader>
 *       </TableRow>
 *   </TableHead>
 *   <TableBody>
 *   ...
 *
 * ex 2.
 * <Table>
 *   <TableBody>
 *       <TableRow>
 *           <TableHeader variant='outlined' width={30}>Header 1</TableHeader>
 *           <TableCell>Data 1</TableHeader>
 *       </TableRow>
 *       <TableRow>
 *           <TableHeader variant='outlined'
 *                        moreInfo='Here is some extra text'>
 *                Header 2
 *           </TableHeader>
 *           <TableCell>Data 2</TableCell>
 *       </TableRow>
 *   </TableBody>
 * </Table>
 */
declare const TableHeader: BDSForwardRef<TableHeaderProps>;
declare type TableHeaderRef = HTMLTableHeaderCellElement;
interface TableHeaderProps extends BackyardBaseProps<TableHeaderRef> {
    /**
     * Column width in percentage.
     * When set it controls the width of its parent column and by proxy all cells that are in the same table column.
     * If left unset defaults to auto and distributes the width of the of the table evenly among all of the table's columns.
     */
    width?: number;
    /**
     * When passed adds an Info icon to the cell that when hovered displays to passed string in a tooltip.
     */
    info?: string;
    /**
     * String to be placed into the TableCell as content
     */
    children?: React.ReactNode;
    /**
     * Overwrite props for the tooltips
     */
    tooltipProps?: React.PropsWithRef<TooltipProps>;
    /**
     * Overwrite props for the tooltipPoppers
     */
    popoverProps?: Partial<React.PropsWithRef<TooltipPopperProps>>;
    /**
     * Overwrite props for the tooltipPoppers
     *
     * Alias of `popoverProps`
     */
    popperProps?: Partial<React.PropsWithRef<TooltipPopperProps>>;
    /**
     * Overwrite props for the info icons
     */
    infoProps?: React.PropsWithRef<InfoOutlinedProps>;
}
export { TableHeader };
export type { TableHeaderProps, TableHeaderRef };
export default TableHeader;

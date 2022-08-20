import type { PaginationProps } from './Pagination';
import { PaginationItemProps } from './PaginationItem';
declare type UsePaginationType = {
    items: PaginationItemProps[];
};
interface UsePaginationProps extends Omit<PaginationProps, 'count'> {
    componentName?: string;
    count?: number;
    min?: number;
    max?: number;
    showFirstButton?: boolean;
    showLastButton?: boolean;
}
declare const usePagination: (props?: UsePaginationProps) => UsePaginationType;
export { usePagination };
export default usePagination;

import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { TextFieldSkeletonProps, TextFieldSkeletonRef } from '../../TextField/TextFieldSkeleton';
/**
 * Backyard React Search Skeleton
 */
declare const SearchSkeleton: BDSForwardRef<SearchSkeletonProps>;
declare type SearchSkeletonRef = TextFieldSkeletonRef;
interface SearchSkeletonProps extends TextFieldSkeletonProps {
}
export { SearchSkeleton };
export type { SearchSkeletonProps, SearchSkeletonRef };
export default SearchSkeleton;

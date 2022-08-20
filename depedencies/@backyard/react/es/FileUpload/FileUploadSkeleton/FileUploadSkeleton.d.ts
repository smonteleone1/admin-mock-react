import type { BDSForwardRef } from '../../utils/typings/BDSComponentProps';
import type { SkeletonProps, SkeletonRef } from '../../Skeleton';
import type { FileUploadProps } from '../FileUpload';
/**
 * Backyard React File Upload Skeleton
 */
declare const FileUploadSkeleton: BDSForwardRef<FileUploadSkeletonProps>;
declare type FileUploadSkeletonRef = SkeletonRef;
declare type FileUploadSkeletonOverrideProps = 'variant';
interface FileUploadSkeletonProps extends Omit<SkeletonProps, FileUploadSkeletonOverrideProps> {
    /**
     * Variant of the file upload to skeleton
     */
    variant?: FileUploadProps['variant'];
}
export { FileUploadSkeleton };
export type { FileUploadSkeletonProps, FileUploadSkeletonRef };
export default FileUploadSkeleton;

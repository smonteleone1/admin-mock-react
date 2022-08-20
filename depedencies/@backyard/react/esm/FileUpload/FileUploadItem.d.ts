import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { FileUploadFile } from './FileUploadProvider';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React File Upload Item
 *
 * @internal
 *
 * Handles the UI for each file item the user submits in `FileUpload`
 *
 * API:
 *
 * - [FileUploadItem API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/FileUploadItem)
 */
declare const FileUploadItem: BDSForwardRef<FileUploadItemProps>;
declare type FileUploadItemRef = HTMLLIElement;
declare type FileUploadItemOverrideProps = 'name' | 'size' | 'type';
interface FileUploadItemProps extends BackyardBaseProps<FileUploadItemRef, FileUploadItemOverrideProps>, FileUploadFile {
    /**
     * Unique ID of the file
     */
    id?: string;
    /**
     * Name of the file
     */
    name: string;
    /**
     * State of the file
     */
    state?: FileUploadFile['state'];
}
export { FileUploadItem };
export { FileUploadItemProps, FileUploadItemRef };
export default FileUploadItem;

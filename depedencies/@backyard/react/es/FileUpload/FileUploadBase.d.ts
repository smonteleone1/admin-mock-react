import type { DropzoneRootProps, DropzoneInputProps } from 'react-dropzone';
import { ButtonProps } from '../Button';
import type { BackyardBaseProps } from '../utils/typings/BackyardProps';
import type { AlertProps } from '../Alert';
import type { BDSForwardRef } from '../utils/typings/BDSComponentProps';
/**
 * Backyard React File Upload Base
 *
 * @internal
 *
 * This component handles the UI for `FileUpload`
 *
 * Use `FileUpload` instead of this component
 */
declare const FileUploadBase: BDSForwardRef<FileUploadBaseProps>;
declare type FileUploadBaseRef = HTMLDivElement;
declare type FileUploadBaseOverrideProps = 'accept' | 'onDragLeave' | 'onDragEnter' | 'onDragOver' | 'onDrop';
interface FileUploadBaseProps extends BackyardBaseProps<FileUploadBaseRef, FileUploadBaseOverrideProps> {
    /**
     * Buton override props.
     */
    buttonProps?: ButtonProps;
    /**
     * Heading text of the component
     */
    heading?: string;
    /**
     * Caption text of the component
     */
    caption?: string;
    /**
     * Error text to display to user on an error
     */
    errorText?: AlertProps['title'];
    /**
     * `AlertProps` to extend error `Alert` with
     */
    errorAlertProps?: AlertProps;
    /**
     * `DropzoneRootProps` to extend `react-dropzone` with
     *
     * See https://react-dropzone.js.org/#src for props
     */
    dropzoneProps?: DropzoneRootProps;
    /**
     * `DropzoneInputProps` to extend input component with
     * See https://react-dropzone.js.org/#src for props
     */
    inputProps?: DropzoneInputProps;
}
export { FileUploadBase };
export type { FileUploadBaseProps, FileUploadBaseRef };
export default FileUploadBase;

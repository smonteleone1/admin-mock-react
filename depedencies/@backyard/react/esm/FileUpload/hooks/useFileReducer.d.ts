import * as React from 'react';
import type { DropEvent, FileRejection } from 'react-dropzone';
import type { Files, FileUploadFile, FileUploadProviderProps } from '../FileUploadProvider';
/**
 * Gets and returns properties from an instance of Object
 *
 * Used for extending and creating a mutable `File`
 * without modifying its instance
 *
 * @param obj - instance to get props from
 */
declare function getPropsDerived<T>(obj: Object): T;
/**
 * Generates a random ID to track file uniqueness
 */
declare function generateId(): string;
/**
 * Backyard React File Upload useFileReducer Hook
 *
 * @internal
 *
 * Used as a state reducer to manage files to be handled by the `FileUpload` UI
 *
 * Documentation:
 *
 * - [FileUpload](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/FileUpload)
 */
declare const useFileReducer: ({ maxFiles, defaultFiles, onFileAdd, onFileRemove, onDrop, onChange, onSuccess, onError, }: UseFileReducerProps) => {
    state: FileUploadState;
    hasSuccess: boolean;
    hasError: boolean;
    stateReducer: React.Dispatch<FileUploadAction>;
    createFile: (file: File) => FileUploadFile;
    addFile: (file: any) => void;
    removeFile: (id: FileUploadFile['id']) => void;
    handleDrop: (acceptedFiles: File[], rejectedFiles: FileRejection[], event: DropEvent) => void;
};
/**
 * File reducer state is a map of files by id
 */
declare type FileUploadState = {
    value: FileUploadValue;
    action: FileUploadAction;
};
/**
 * File Reducer value map
 *
 * This map is only used internally
 * and will be converted to an array of
 * `Files` when exposed to the developer.
 */
declare type FileUploadValue = {
    [id: string]: FileUploadFile;
};
/**
 * File reducer action is an enum of action types
 */
declare type FileUploadAction = {
    type: 'add';
    file: FileUploadFile | Files;
    callback?: (files: FileUploadValue) => void;
} | {
    type: 'remove';
    id: string | string[];
    callback?: (files: FileUploadValue) => void;
} | {
    type: 'modify';
    file: FileUploadFile | Files;
    callback?: (files: FileUploadValue) => void;
} | {
    type: 'default';
    file: FileUploadFile | Files;
    callback?: (files: FileUploadValue) => void;
};
interface UseFileReducerProps {
    /**
     * Maximum number of files that can be selected at a time
     */
    maxFiles: FileUploadProviderProps['maxFiles'];
    /**
     * List of default files that are preloaded into the component
     */
    defaultFiles: FileUploadProviderProps['defaultFiles'];
    /**
     * Trigger function for when files are added
     */
    onFileAdd: FileUploadProviderProps['onFileAdd'];
    /**
     * Trigger function for when files are removed
     */
    onFileRemove: FileUploadProviderProps['onFileRemove'];
    /**
     * Trigger function on drop event or when files are selected via menu.
     */
    onDrop: FileUploadProviderProps['onDrop'];
    /**
     * Trigger function when component state changes.
     *
     * Note: Different from onDrop, since it will trigger whenever files are both added or removed via any method.
     */
    onChange: FileUploadProviderProps['onChange'];
    /**
     * Trigger function for when no file has an error.
     */
    onSuccess: FileUploadProviderProps['onSuccess'];
    /**
     * Trigger function for when an error is in one or more files.
     */
    onError: FileUploadProviderProps['onError'];
}
export { useFileReducer, getPropsDerived, generateId };
export type { FileUploadState, FileUploadAction, UseFileReducerProps };
export default useFileReducer;

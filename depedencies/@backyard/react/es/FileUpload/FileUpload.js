import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "defaultFiles", "delayCompleted", "label", "variant", "shape", "options", "override", "accept", "maxFiles", "minSize", "maxSize", "multiple", "preventDropOnDocument", "noClick", "noKeyboard", "noDrag", "noDragEventsBubbling", "disabled", "onChange", "onDrop", "onDropAccepted", "onDropRejected", "onFileDialogCancel", "onFileAdd", "onFileRemove", "onError", "onSuccess"];
import * as React from 'react';
import FileUploadProvider from './FileUploadProvider';
import FileUploadBase from './FileUploadBase';

/**
 * *Backyard React File Upload*
 *
 * Handles the UI/UX for users to submit files to an `onDrop` handler
 *
 * Documentation:
 *
 * - [FileUpload](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/FileUpload)
 *
 * API:
 *
 * - [FileUpload API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/FileUpload)
 * - inherits [FileUploadProvider API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/FileUploadProvider)
 *
 */
const FileUpload = /*#__PURE__*/React.forwardRef(function FileUpload(_ref, ref) {
  let {
    children,
    defaultFiles = [],
    delayCompleted = 2000,
    label,
    variant = 'dropzone',
    shape,
    // = 'rounded',
    options,
    override,
    accept,
    maxFiles = 0,
    minSize,
    maxSize = 524288000,
    multiple = true,
    preventDropOnDocument,
    noClick,
    noKeyboard,
    noDrag,
    noDragEventsBubbling,
    disabled = false,
    onChange,
    onDrop,
    onDropAccepted,
    onDropRejected,
    onFileDialogCancel,
    onFileAdd,
    onFileRemove,
    onError,
    onSuccess
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // `FileUploadProvider` props, extracted from `props`
  // Must replicate `FileUploadProviderProps`
  const providerProps = {
    shape,
    defaultFiles,
    delayCompleted,
    label,
    variant,
    options,
    override,
    accept,
    maxFiles,
    minSize,
    maxSize,
    multiple,
    preventDropOnDocument,
    noClick,
    noKeyboard,
    noDrag,
    noDragEventsBubbling,
    disabled,
    onChange,
    onDrop,
    onDropAccepted,
    onDropRejected,
    onFileDialogCancel,
    onFileAdd,
    onFileRemove,
    onError,
    onSuccess
  };
  /**
   * Layout:
   *
   *  <div>
   *      ...
   *  </div>
   */

  return /*#__PURE__*/React.createElement(FileUploadProvider, providerProps, /*#__PURE__*/React.createElement(FileUploadBase, _extends({}, props, {
    ref: ref
  }), children));
});
FileUpload.bdsName = 'FileUpload';
export { FileUpload };
export default FileUpload;
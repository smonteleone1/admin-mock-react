import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "heading", "caption", "errorText", "buttonProps", "errorAlertProps", "dropzoneProps", "inputProps"];
import * as React from 'react';
import classNames from 'classnames';
import Button from '../Button';
import Typography from '../Typography';
import FileUploadItem from './FileUploadItem';
import { FileUploadContext } from './FileUploadProvider';
import FileUploadWrapper from './styles/FileUploadWrapper';
import Alert from '../Alert';
import { getPropsDerived } from './hooks/useFileReducer';
/**
 * Backyard React File Upload Base
 *
 * @internal
 *
 * This component handles the UI for `FileUpload`
 *
 * Use `FileUpload` instead of this component
 */

const FileUploadBase = /*#__PURE__*/React.forwardRef(function FileUploadBase(_ref, ref) {
  var _div;

  let {
    children: childrenProp,
    className,
    heading = 'Upload',
    caption = 'only files of 500mb or less',
    errorText = 'Error uploading file(s)',
    buttonProps,
    errorAlertProps,
    dropzoneProps,
    inputProps
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get context from provider
  const {
    files,
    open,
    getRootProps,
    getInputProps,
    disabled,
    variant = 'dropzone',
    label,
    isDragActive,
    hasError,
    shape
  } = React.useContext(FileUploadContext); // Dropzone default classes

  const dropzoneClasses = isDragActive ? 'drag-active' : ""; // Calculate `children` as...

  const children = (() => {
    // Use `children` prop if defined
    if (childrenProp) {
      return childrenProp;
    } // Else, create a default label


    return _div || (_div = /*#__PURE__*/React.createElement("div", {
      className: "file-upload-label"
    }, /*#__PURE__*/React.createElement(Typography, {
      className: "file-upload-heading",
      variant: "h5"
    }, heading), /*#__PURE__*/React.createElement(Typography, {
      className: "file-upload-caption",
      variant: "caption",
      color: "text_tertiary",
      as: "div"
    }, caption)));
  })(); // Calculate `input` as...


  const input = (() => {
    // When `variant` is...
    switch (variant) {
      // ... a `button`,
      case 'button':
        // Create a `<Button />` input
        return /*#__PURE__*/React.createElement("span", _extends({}, getRootProps(_extends({}, dropzoneProps, {
          className: classNames('file-upload-button', dropzoneClasses, dropzoneProps?.className, disabled && "disabled")
        })), {
          tabIndex: -1
        }), /*#__PURE__*/React.createElement("input", getInputProps(_extends({}, inputProps, {
          className: classNames('file-upload-input', inputProps?.className)
        }))), /*#__PURE__*/React.createElement(Button, _extends({
          className: "file-upload-button-label",
          variant: "primary",
          disabled: disabled,
          onClick: open,
          shape: shape
        }, buttonProps), label || 'Upload'));
      // ... a `dropzone` or by default...

      case 'dropzone':
      default:
        // Create an interactable `dropzone` area
        return /*#__PURE__*/React.createElement("span", getRootProps(_extends({}, dropzoneProps, {
          className: classNames('file-upload-dropzone', dropzoneClasses, dropzoneProps?.className, disabled && "disabled")
        })), /*#__PURE__*/React.createElement("input", getInputProps(_extends({}, inputProps, {
          className: classNames('file-upload-input', inputProps?.className)
        }))), /*#__PURE__*/React.createElement(Typography, {
          className: "file-upload-dropzone-label",
          variant: "body_1",
          align: "center",
          as: "label"
        }, label || 'Drag and drop files here or click to upload'));
    }
  })(); // Calculate errors from files...


  const errors = files // Map each file to a list of (list of errors)
  .map(file => file.errors?.map(error => error)) // Flatten list to a list of error
  .reduce((acc, val) => acc.concat(val), []) // Filter out duplicate error messages
  .filter((v, i, a) => a.findIndex(t => t?.message === v?.message) === i) // Filter out falsy errors
  .filter(Boolean); // Calculate `errorAlert` only when `files` or `hasError` has changed...

  const errorAlert = React.useMemo(() => // If any file has an error, render an error `Alert`
  hasError ? /*#__PURE__*/React.createElement(Alert, _extends({
    className: "file-upload-alert",
    type: "error",
    title: errorText,
    multiline: true,
    elevation: false,
    shape: shape
  }, errorAlertProps), errors.map(error => // Map each appropriate error message to a child of `Alert`
  error?.message ? /*#__PURE__*/React.createElement("div", {
    key: error.code || error.message,
    className: classNames('file-upload-error', error.code)
  }, error.message) : null)) : null, // Else don't render an `Alert`
  [files, hasError]); // Calculate the `fileList` only when `files` changes...

  const fileList = React.useMemo(() => /*#__PURE__*/React.createElement("ul", {
    className: "file-upload-items"
  }, files.map(file => {
    // Get props from `FileUploadFile`
    const fileProps = getPropsDerived(file); // Render item via `FileUploadFile` props

    return /*#__PURE__*/React.createElement(FileUploadItem, _extends({
      key: fileProps.id
    }, fileProps));
  })), [files]);
  return /*#__PURE__*/React.createElement(FileUploadWrapper, _extends({
    className: classNames(`file-upload-wrapper shape--${shape}`, className)
  }, props, {
    ref: ref
  }), children, input, errorAlert, fileList);
});
FileUploadBase.bdsName = 'FileUploadBase';
export { FileUploadBase };
export default FileUploadBase;
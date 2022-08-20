import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "heading", "caption", "errorText", "buttonProps", "errorAlertProps", "dropzoneProps", "inputProps"];
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

var FileUploadBase = /*#__PURE__*/React.forwardRef(function FileUploadBase(_ref, ref) {
  var _div;

  var childrenProp = _ref.children,
      className = _ref.className,
      _ref$heading = _ref.heading,
      heading = _ref$heading === void 0 ? 'Upload' : _ref$heading,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? 'only files of 500mb or less' : _ref$caption,
      _ref$errorText = _ref.errorText,
      errorText = _ref$errorText === void 0 ? 'Error uploading file(s)' : _ref$errorText,
      buttonProps = _ref.buttonProps,
      errorAlertProps = _ref.errorAlertProps,
      dropzoneProps = _ref.dropzoneProps,
      inputProps = _ref.inputProps,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get context from provider
  var _React$useContext = React.useContext(FileUploadContext),
      files = _React$useContext.files,
      open = _React$useContext.open,
      getRootProps = _React$useContext.getRootProps,
      getInputProps = _React$useContext.getInputProps,
      disabled = _React$useContext.disabled,
      _React$useContext$var = _React$useContext.variant,
      variant = _React$useContext$var === void 0 ? 'dropzone' : _React$useContext$var,
      label = _React$useContext.label,
      isDragActive = _React$useContext.isDragActive,
      hasError = _React$useContext.hasError,
      shape = _React$useContext.shape; // Dropzone default classes


  var dropzoneClasses = isDragActive ? 'drag-active' : ""; // Calculate `children` as...

  var children = function () {
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
  }(); // Calculate `input` as...


  var input = function () {
    // When `variant` is...
    switch (variant) {
      // ... a `button`,
      case 'button':
        // Create a `<Button />` input
        return /*#__PURE__*/React.createElement("span", _extends({}, getRootProps(_extends({}, dropzoneProps, {
          className: classNames('file-upload-button', dropzoneClasses, dropzoneProps === null || dropzoneProps === void 0 ? void 0 : dropzoneProps.className, disabled && "disabled")
        })), {
          tabIndex: -1
        }), /*#__PURE__*/React.createElement("input", getInputProps(_extends({}, inputProps, {
          className: classNames('file-upload-input', inputProps === null || inputProps === void 0 ? void 0 : inputProps.className)
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
          className: classNames('file-upload-dropzone', dropzoneClasses, dropzoneProps === null || dropzoneProps === void 0 ? void 0 : dropzoneProps.className, disabled && "disabled")
        })), /*#__PURE__*/React.createElement("input", getInputProps(_extends({}, inputProps, {
          className: classNames('file-upload-input', inputProps === null || inputProps === void 0 ? void 0 : inputProps.className)
        }))), /*#__PURE__*/React.createElement(Typography, {
          className: "file-upload-dropzone-label",
          variant: "body_1",
          align: "center",
          as: "label"
        }, label || 'Drag and drop files here or click to upload'));
    }
  }(); // Calculate errors from files...


  var errors = files // Map each file to a list of (list of errors)
  .map(function (file) {
    var _file$errors;

    return (_file$errors = file.errors) === null || _file$errors === void 0 ? void 0 : _file$errors.map(function (error) {
      return error;
    });
  }) // Flatten list to a list of error
  .reduce(function (acc, val) {
    return acc.concat(val);
  }, []) // Filter out duplicate error messages
  .filter(function (v, i, a) {
    return a.findIndex(function (t) {
      return (t === null || t === void 0 ? void 0 : t.message) === (v === null || v === void 0 ? void 0 : v.message);
    }) === i;
  }) // Filter out falsy errors
  .filter(Boolean); // Calculate `errorAlert` only when `files` or `hasError` has changed...

  var errorAlert = React.useMemo(function () {
    return (// If any file has an error, render an error `Alert`
      hasError ? /*#__PURE__*/React.createElement(Alert, _extends({
        className: "file-upload-alert",
        type: "error",
        title: errorText,
        multiline: true,
        elevation: false,
        shape: shape
      }, errorAlertProps), errors.map(function (error) {
        return (// Map each appropriate error message to a child of `Alert`
          error !== null && error !== void 0 && error.message ? /*#__PURE__*/React.createElement("div", {
            key: error.code || error.message,
            className: classNames('file-upload-error', error.code)
          }, error.message) : null
        );
      })) : null
    );
  }, // Else don't render an `Alert`
  [files, hasError]); // Calculate the `fileList` only when `files` changes...

  var fileList = React.useMemo(function () {
    return /*#__PURE__*/React.createElement("ul", {
      className: "file-upload-items"
    }, files.map(function (file) {
      // Get props from `FileUploadFile`
      var fileProps = getPropsDerived(file); // Render item via `FileUploadFile` props

      return /*#__PURE__*/React.createElement(FileUploadItem, _extends({
        key: fileProps.id
      }, fileProps));
    }));
  }, [files]);
  return /*#__PURE__*/React.createElement(FileUploadWrapper, _extends({
    className: classNames("file-upload-wrapper shape--".concat(shape), className)
  }, props, {
    ref: ref
  }), children, input, errorAlert, fileList);
});
FileUploadBase.bdsName = 'FileUploadBase';
export { FileUploadBase };
export default FileUploadBase;
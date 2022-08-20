import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["accept", "children", "disabled", "defaultFiles", "delayCompleted", "options", "label", "maxFiles", "maxSize", "onSuccess", "onError", "onDrop", "onChange", "onFileAdd", "onFileRemove", "variant", "shape", "override"];
import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import useFileReducer from './hooks/useFileReducer';

/**
 * File Upload Context
 */
var FileUploadContext = /*#__PURE__*/React.createContext(null);
/**
 * File Upload Consumer
 */

var FileUploadConsumer = FileUploadContext.Consumer;
/**
 * Default options for each variant
 */

var variantOptions = {
  // `<Button />` handles our interactions here
  button: {
    noClick: true,
    noKeyboard: true
  },
  // An interactable `<span />` makes up the interactions here
  dropzone: {}
};
/**
 * Backyard React File Upoad Provider
 *
 * Provides values to children and handles state management of `FileUpload`
 * Use this component to supply your own custom layout
 *
 * Examples:
 *
 * - [FileUpload](https://dev.carbon.gcp.lowes.com/bds/documentation/Components/FileUpload)
 *
 * API:
 *
 * - [FileUploadProvider API](https://dev.carbon.gcp.lowes.com/bds/documentation/ComponentsAPI/FileUploadProvider)
 */

var FileUploadProvider = function FileUploadProvider(_ref) {
  var accept = _ref.accept,
      children = _ref.children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$defaultFiles = _ref.defaultFiles,
      defaultFiles = _ref$defaultFiles === void 0 ? [] : _ref$defaultFiles,
      _ref$delayCompleted = _ref.delayCompleted,
      delayCompleted = _ref$delayCompleted === void 0 ? 2000 : _ref$delayCompleted,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? {} : _ref$options,
      label = _ref.label,
      _ref$maxFiles = _ref.maxFiles,
      maxFiles = _ref$maxFiles === void 0 ? 0 : _ref$maxFiles,
      _ref$maxSize = _ref.maxSize,
      maxSize = _ref$maxSize === void 0 ? 524288000 : _ref$maxSize,
      onSuccess = _ref.onSuccess,
      onError = _ref.onError,
      onDrop = _ref.onDrop,
      onChange = _ref.onChange,
      onFileAdd = _ref.onFileAdd,
      onFileRemove = _ref.onFileRemove,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'dropzone' : _ref$variant,
      shapeProp = _ref.shape,
      override = _ref.override,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'FileUpload'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Memoize context value with external changes

  var context = React.useMemo(function () {
    return {
      options: options,
      accept: accept,
      disabled: disabled,
      label: label,
      maxFiles: maxFiles,
      variant: variant,
      shape: shape
    };
  }, [options, accept, disabled, label, maxSize, maxFiles, variant, shape]); // Use a file reducer to handle basic
  // user interactions with file upload component
  // and the files that they submit

  var _useFileReducer = useFileReducer(_extends({
    maxFiles: maxFiles,
    defaultFiles: defaultFiles,
    onSuccess: onSuccess,
    onError: onError,
    onFileAdd: onFileAdd,
    onFileRemove: onFileRemove,
    onChange: onChange,
    // @todo Bug in TypeScript
    // TS thinks this shares definition with `useDropzone`
    // Naming collision?
    // @ts-ignore
    onDrop: onDrop
  }, options)),
      state = _useFileReducer.state,
      stateReducer = _useFileReducer.stateReducer,
      addFile = _useFileReducer.addFile,
      removeFile = _useFileReducer.removeFile,
      handleDrop = _useFileReducer.handleDrop,
      hasError = _useFileReducer.hasError,
      hasSuccess = _useFileReducer.hasSuccess; // Use `react-dropzone` dependency to provide more functionality to component


  var dropzone = useDropzone(_extends({}, props, variantOptions[variant], {
    accept: accept,
    disabled: disabled,
    maxSize: maxSize,
    onDrop: handleDrop
  }, options)); // Provide context to children

  return /*#__PURE__*/React.createElement(FileUploadContext.Provider, {
    value: _extends({
      state: state,
      files: Object.values(state.value),
      fileReducer: stateReducer,
      hasError: hasError,
      hasSuccess: hasSuccess,
      delayCompleted: delayCompleted,
      addFile: addFile,
      removeFile: removeFile
    }, context, dropzone, override)
  }, children);
};
/**
 * `FileUploadFile` defines an extended `File` instance
 * that provides more UI interactions with them
 */


FileUploadProvider.bdsName = 'FileUploadProvider';
export { FileUploadProvider, FileUploadContext, FileUploadConsumer };
export default FileUploadProvider;
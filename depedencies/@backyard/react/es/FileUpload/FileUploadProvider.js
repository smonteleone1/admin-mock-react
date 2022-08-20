import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["accept", "children", "disabled", "defaultFiles", "delayCompleted", "options", "label", "maxFiles", "maxSize", "onSuccess", "onError", "onDrop", "onChange", "onFileAdd", "onFileRemove", "variant", "shape", "override"];
import * as React from 'react';
import { useDropzone } from 'react-dropzone';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import useFileReducer from './hooks/useFileReducer';

/**
 * File Upload Context
 */
const FileUploadContext = /*#__PURE__*/React.createContext(null);
/**
 * File Upload Consumer
 */

const FileUploadConsumer = FileUploadContext.Consumer;
/**
 * Default options for each variant
 */

const variantOptions = {
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

const FileUploadProvider = _ref => {
  let {
    accept,
    children,
    disabled = false,
    defaultFiles = [],
    delayCompleted = 2000,
    options = {},
    label,
    maxFiles = 0,
    maxSize = 524288000,
    onSuccess,
    onError,
    onDrop,
    onChange,
    onFileAdd,
    onFileRemove,
    variant = 'dropzone',
    shape: shapeProp,
    // = 'rounded',
    override
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'FileUpload'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Memoize context value with external changes

  const context = React.useMemo(() => ({
    options,
    accept,
    disabled,
    label,
    maxFiles,
    variant,
    shape
  }), [options, accept, disabled, label, maxSize, maxFiles, variant, shape]); // Use a file reducer to handle basic
  // user interactions with file upload component
  // and the files that they submit

  const {
    state,
    stateReducer,
    addFile,
    removeFile,
    handleDrop,
    hasError,
    hasSuccess
  } = useFileReducer(_extends({
    maxFiles,
    defaultFiles,
    onSuccess,
    onError,
    onFileAdd,
    onFileRemove,
    onChange,
    // @todo Bug in TypeScript
    // TS thinks this shares definition with `useDropzone`
    // Naming collision?
    // @ts-ignore
    onDrop
  }, options)); // Use `react-dropzone` dependency to provide more functionality to component

  const dropzone = useDropzone(_extends({}, props, variantOptions[variant], {
    accept,
    disabled,
    maxSize,
    onDrop: handleDrop
  }, options)); // Provide context to children

  return /*#__PURE__*/React.createElement(FileUploadContext.Provider, {
    value: _extends({
      state,
      files: Object.values(state.value),
      fileReducer: stateReducer,
      hasError,
      hasSuccess,
      delayCompleted,
      addFile,
      removeFile
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
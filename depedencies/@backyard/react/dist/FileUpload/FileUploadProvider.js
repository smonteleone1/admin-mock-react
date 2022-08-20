"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FileUploadProvider = exports.FileUploadContext = exports.FileUploadConsumer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _reactDropzone = require("react-dropzone");

var _ThemeProvider = require("../ThemeProvider");

var _useFileReducer2 = _interopRequireDefault(require("./hooks/useFileReducer"));

var _excluded = ["accept", "children", "disabled", "defaultFiles", "delayCompleted", "options", "label", "maxFiles", "maxSize", "onSuccess", "onError", "onDrop", "onChange", "onFileAdd", "onFileRemove", "variant", "shape", "override"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * File Upload Context
 */
var FileUploadContext = /*#__PURE__*/React.createContext(null);
/**
 * File Upload Consumer
 */

exports.FileUploadContext = FileUploadContext;
var FileUploadConsumer = FileUploadContext.Consumer;
/**
 * Default options for each variant
 */

exports.FileUploadConsumer = FileUploadConsumer;
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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'FileUpload'
  }).context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Memoize context value with external changes

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

  var _useFileReducer = (0, _useFileReducer2["default"])((0, _extends2["default"])({
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


  var dropzone = (0, _reactDropzone.useDropzone)((0, _extends2["default"])({}, props, variantOptions[variant], {
    accept: accept,
    disabled: disabled,
    maxSize: maxSize,
    onDrop: handleDrop
  }, options)); // Provide context to children

  return /*#__PURE__*/React.createElement(FileUploadContext.Provider, {
    value: (0, _extends2["default"])({
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


exports.FileUploadProvider = FileUploadProvider;
FileUploadProvider.bdsName = 'FileUploadProvider';
var _default = FileUploadProvider;
exports["default"] = _default;
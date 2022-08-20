"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FileUpload = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _FileUploadProvider = _interopRequireDefault(require("./FileUploadProvider"));

var _FileUploadBase = _interopRequireDefault(require("./FileUploadBase"));

var _excluded = ["children", "defaultFiles", "delayCompleted", "label", "variant", "shape", "options", "override", "accept", "maxFiles", "minSize", "maxSize", "multiple", "preventDropOnDocument", "noClick", "noKeyboard", "noDrag", "noDragEventsBubbling", "disabled", "onChange", "onDrop", "onDropAccepted", "onDropRejected", "onFileDialogCancel", "onFileAdd", "onFileRemove", "onError", "onSuccess"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
var FileUpload = /*#__PURE__*/React.forwardRef(function FileUpload(_ref, ref) {
  var children = _ref.children,
      _ref$defaultFiles = _ref.defaultFiles,
      defaultFiles = _ref$defaultFiles === void 0 ? [] : _ref$defaultFiles,
      _ref$delayCompleted = _ref.delayCompleted,
      delayCompleted = _ref$delayCompleted === void 0 ? 2000 : _ref$delayCompleted,
      label = _ref.label,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'dropzone' : _ref$variant,
      shape = _ref.shape,
      options = _ref.options,
      override = _ref.override,
      accept = _ref.accept,
      _ref$maxFiles = _ref.maxFiles,
      maxFiles = _ref$maxFiles === void 0 ? 0 : _ref$maxFiles,
      minSize = _ref.minSize,
      _ref$maxSize = _ref.maxSize,
      maxSize = _ref$maxSize === void 0 ? 524288000 : _ref$maxSize,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? true : _ref$multiple,
      preventDropOnDocument = _ref.preventDropOnDocument,
      noClick = _ref.noClick,
      noKeyboard = _ref.noKeyboard,
      noDrag = _ref.noDrag,
      noDragEventsBubbling = _ref.noDragEventsBubbling,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      onChange = _ref.onChange,
      onDrop = _ref.onDrop,
      onDropAccepted = _ref.onDropAccepted,
      onDropRejected = _ref.onDropRejected,
      onFileDialogCancel = _ref.onFileDialogCancel,
      onFileAdd = _ref.onFileAdd,
      onFileRemove = _ref.onFileRemove,
      onError = _ref.onError,
      onSuccess = _ref.onSuccess,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // `FileUploadProvider` props, extracted from `props`
  // Must replicate `FileUploadProviderProps`
  var providerProps = {
    shape: shape,
    defaultFiles: defaultFiles,
    delayCompleted: delayCompleted,
    label: label,
    variant: variant,
    options: options,
    override: override,
    accept: accept,
    maxFiles: maxFiles,
    minSize: minSize,
    maxSize: maxSize,
    multiple: multiple,
    preventDropOnDocument: preventDropOnDocument,
    noClick: noClick,
    noKeyboard: noKeyboard,
    noDrag: noDrag,
    noDragEventsBubbling: noDragEventsBubbling,
    disabled: disabled,
    onChange: onChange,
    onDrop: onDrop,
    onDropAccepted: onDropAccepted,
    onDropRejected: onDropRejected,
    onFileDialogCancel: onFileDialogCancel,
    onFileAdd: onFileAdd,
    onFileRemove: onFileRemove,
    onError: onError,
    onSuccess: onSuccess
  };
  /**
   * Layout:
   *
   *  <div>
   *      ...
   *  </div>
   */

  return /*#__PURE__*/React.createElement(_FileUploadProvider["default"], providerProps, /*#__PURE__*/React.createElement(_FileUploadBase["default"], (0, _extends2["default"])({}, props, {
    ref: ref
  }), children));
});
exports.FileUpload = FileUpload;
FileUpload.bdsName = 'FileUpload';
var _default = FileUpload;
exports["default"] = _default;
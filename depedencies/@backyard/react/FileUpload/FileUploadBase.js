"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.FileUploadBase = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../Button"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _FileUploadItem = _interopRequireDefault(require("./FileUploadItem"));

var _FileUploadProvider = require("./FileUploadProvider");

var _FileUploadWrapper = _interopRequireDefault(require("./styles/FileUploadWrapper"));

var _Alert = _interopRequireDefault(require("../Alert"));

var _useFileReducer = require("./hooks/useFileReducer");

var _excluded = ["children", "className", "heading", "caption", "errorText", "buttonProps", "errorAlertProps", "dropzoneProps", "inputProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  // Get context from provider
  var _React$useContext = React.useContext(_FileUploadProvider.FileUploadContext),
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
    }, /*#__PURE__*/React.createElement(_Typography["default"], {
      className: "file-upload-heading",
      variant: "h5"
    }, heading), /*#__PURE__*/React.createElement(_Typography["default"], {
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
        return /*#__PURE__*/React.createElement("span", (0, _extends2["default"])({}, getRootProps((0, _extends2["default"])({}, dropzoneProps, {
          className: (0, _classnames["default"])('file-upload-button', dropzoneClasses, dropzoneProps === null || dropzoneProps === void 0 ? void 0 : dropzoneProps.className, disabled && "disabled")
        })), {
          tabIndex: -1
        }), /*#__PURE__*/React.createElement("input", getInputProps((0, _extends2["default"])({}, inputProps, {
          className: (0, _classnames["default"])('file-upload-input', inputProps === null || inputProps === void 0 ? void 0 : inputProps.className)
        }))), /*#__PURE__*/React.createElement(_Button["default"], (0, _extends2["default"])({
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
        return /*#__PURE__*/React.createElement("span", getRootProps((0, _extends2["default"])({}, dropzoneProps, {
          className: (0, _classnames["default"])('file-upload-dropzone', dropzoneClasses, dropzoneProps === null || dropzoneProps === void 0 ? void 0 : dropzoneProps.className, disabled && "disabled")
        })), /*#__PURE__*/React.createElement("input", getInputProps((0, _extends2["default"])({}, inputProps, {
          className: (0, _classnames["default"])('file-upload-input', inputProps === null || inputProps === void 0 ? void 0 : inputProps.className)
        }))), /*#__PURE__*/React.createElement(_Typography["default"], {
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
      hasError ? /*#__PURE__*/React.createElement(_Alert["default"], (0, _extends2["default"])({
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
            className: (0, _classnames["default"])('file-upload-error', error.code)
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
      var fileProps = (0, _useFileReducer.getPropsDerived)(file); // Render item via `FileUploadFile` props

      return /*#__PURE__*/React.createElement(_FileUploadItem["default"], (0, _extends2["default"])({
        key: fileProps.id
      }, fileProps));
    }));
  }, [files]);
  return /*#__PURE__*/React.createElement(_FileUploadWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("file-upload-wrapper shape--".concat(shape), className)
  }, props, {
    ref: ref
  }), children, input, errorAlert, fileList);
});
exports.FileUploadBase = FileUploadBase;
FileUploadBase.bdsName = 'FileUploadBase';
var _default = FileUploadBase;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Skeleton = exports.FileLoadingState = exports.DefaultFiles = exports.DefaultFileUpload = exports.AcceptFileType = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _ = require("../");

var _files = _interopRequireDefault(require("./mocks/files"));

var _ApiLink5 = require("../utils/storybook/ApiLink");

var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

var variants = ['Variant', {
  button: 'button',
  dropzone: 'dropzone'
}, 'dropzone'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var _default = {
  title: '@backyard/react/FileUpload',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var DefaultFileUpload = function DefaultFileUpload() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FileUpload, {
    variant: _addonKnobs.select.apply(void 0, variants),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disabled: (0, _addonKnobs["boolean"])('disabled', false),
    multiple: (0, _addonKnobs["boolean"])('multiple', true),
    maxFiles: (0, _addonKnobs.number)('maxFiles', 0),
    onChange: (0, _addonActions.action)('onChange'),
    onDrop: (0, _addonActions.action)('onDrop'),
    onFileAdd: (0, _addonActions.action)('onFileAdd'),
    onFileRemove: (0, _addonActions.action)('onFileRemove'),
    onSuccess: (0, _addonActions.action)('onSuccess'),
    onError: (0, _addonActions.action)('onError')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FileUpload"
  })));
};

exports.DefaultFileUpload = DefaultFileUpload;

var FileLoadingState = function FileLoadingState() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FileUpload, {
    variant: _addonKnobs.select.apply(void 0, variants),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disabled: (0, _addonKnobs["boolean"])('disabled', false),
    multiple: (0, _addonKnobs["boolean"])('multiple', true),
    maxFiles: (0, _addonKnobs.number)('maxFiles', 0),
    onDrop: function onDrop(event, _ref) {
      var acceptedFiles = _ref.acceptedFiles;
      acceptedFiles.forEach(function (file) {
        file.setState('loading'); // Upload file...

        setTimeout(function () {
          var chance = Math.random(); // If upload fails...

          if (chance < 0.25) {
            file.setState('error', [{
              message: "Custom error (".concat(chance.toPrecision(2), ")"),
              code: "custom-error-".concat(chance.toPrecision(2))
            }]);
          } else {
            // Else, show upload completed!
            file.setState('completed');
          }
        }, Math.min(Math.random() * 2000, 1000));
      });
    },
    onChange: (0, _addonActions.action)('onChange'),
    onFileAdd: (0, _addonActions.action)('onFileAdd'),
    onFileRemove: (0, _addonActions.action)('onFileRemove'),
    onSuccess: (0, _addonActions.action)('onSuccess'),
    onError: (0, _addonActions.action)('onError')
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FileUpload"
  })));
};

exports.FileLoadingState = FileLoadingState;

var DefaultFiles = function DefaultFiles() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FileUpload, {
    variant: _addonKnobs.select.apply(void 0, variants),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disabled: (0, _addonKnobs["boolean"])('disabled', false),
    multiple: (0, _addonKnobs["boolean"])('multiple', true),
    maxFiles: (0, _addonKnobs.number)('maxFiles', 0),
    defaultFiles: _files["default"],
    onChange: (0, _addonActions.action)('onChange'),
    onDrop: (0, _addonActions.action)('onDrop'),
    onFileAdd: (0, _addonActions.action)('onFileAdd'),
    onFileRemove: (0, _addonActions.action)('onFileRemove'),
    onSuccess: (0, _addonActions.action)('onSuccess'),
    onError: (0, _addonActions.action)('onError')
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FileUpload"
  })));
};

exports.DefaultFiles = DefaultFiles;

var AcceptFileType = function AcceptFileType() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FileUpload, {
    variant: _addonKnobs.select.apply(void 0, variants),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disabled: (0, _addonKnobs["boolean"])('disabled', false),
    multiple: (0, _addonKnobs["boolean"])('multiple', true),
    maxFiles: (0, _addonKnobs.number)('maxFiles', 0),
    label: "This dropzone only accepts png images",
    accept: "image/png",
    onChange: (0, _addonActions.action)('onChange'),
    onDrop: (0, _addonActions.action)('onDrop'),
    onFileAdd: (0, _addonActions.action)('onFileAdd'),
    onFileRemove: (0, _addonActions.action)('onFileRemove'),
    onSuccess: (0, _addonActions.action)('onSuccess'),
    onError: (0, _addonActions.action)('onError')
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink5.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FileUpload"
  })));
};

exports.AcceptFileType = AcceptFileType;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "FileUpload Skeleton (Button)")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FileUploadSkeleton, {
    variant: "button",
    shape: _addonKnobs.select.apply(void 0, shapes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_.FormHeading, null, "FileUpload Skeleton (Dropzone)")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.FileUploadSkeleton, {
    variant: "dropzone",
    shape: _addonKnobs.select.apply(void 0, shapes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;
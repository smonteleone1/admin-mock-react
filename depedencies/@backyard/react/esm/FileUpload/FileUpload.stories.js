var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

import React from 'react';
import { withKnobs, boolean as _boolean, number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { GridV3 as Grid, FileUpload, FormControl, FormHeading, FileUploadSkeleton } from '../';
import files from './mocks/files';
import { ApiLink } from '../utils/storybook/ApiLink';
var variants = ['Variant', {
  button: 'button',
  dropzone: 'dropzone'
}, 'dropzone'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export default {
  title: '@backyard/react/FileUpload',
  decorators: [withKnobs]
};
export var DefaultFileUpload = function DefaultFileUpload() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FileUpload, {
    variant: select.apply(void 0, variants),
    shape: select.apply(void 0, shapes),
    disabled: _boolean('disabled', false),
    multiple: _boolean('multiple', true),
    maxFiles: number('maxFiles', 0),
    onChange: action('onChange'),
    onDrop: action('onDrop'),
    onFileAdd: action('onFileAdd'),
    onFileRemove: action('onFileRemove'),
    onSuccess: action('onSuccess'),
    onError: action('onError')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FileUpload"
  })));
};
export var FileLoadingState = function FileLoadingState() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FileUpload, {
    variant: select.apply(void 0, variants),
    shape: select.apply(void 0, shapes),
    disabled: _boolean('disabled', false),
    multiple: _boolean('multiple', true),
    maxFiles: number('maxFiles', 0),
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
    onChange: action('onChange'),
    onFileAdd: action('onFileAdd'),
    onFileRemove: action('onFileRemove'),
    onSuccess: action('onSuccess'),
    onError: action('onError')
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FileUpload"
  })));
};
export var DefaultFiles = function DefaultFiles() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FileUpload, {
    variant: select.apply(void 0, variants),
    shape: select.apply(void 0, shapes),
    disabled: _boolean('disabled', false),
    multiple: _boolean('multiple', true),
    maxFiles: number('maxFiles', 0),
    defaultFiles: files,
    onChange: action('onChange'),
    onDrop: action('onDrop'),
    onFileAdd: action('onFileAdd'),
    onFileRemove: action('onFileRemove'),
    onSuccess: action('onSuccess'),
    onError: action('onError')
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FileUpload"
  })));
};
export var AcceptFileType = function AcceptFileType() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FileUpload, {
    variant: select.apply(void 0, variants),
    shape: select.apply(void 0, shapes),
    disabled: _boolean('disabled', false),
    multiple: _boolean('multiple', true),
    maxFiles: number('maxFiles', 0),
    label: "This dropzone only accepts png images",
    accept: "image/png",
    onChange: action('onChange'),
    onDrop: action('onDrop'),
    onFileAdd: action('onFileAdd'),
    onFileRemove: action('onFileRemove'),
    onSuccess: action('onSuccess'),
    onError: action('onError')
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FileUpload"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "FileUpload Skeleton (Button)")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FileUploadSkeleton, {
    variant: "button",
    shape: select.apply(void 0, shapes),
    animate: _boolean('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "FileUpload Skeleton (Dropzone)")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FileUploadSkeleton, {
    variant: "dropzone",
    shape: select.apply(void 0, shapes),
    animate: _boolean('Animate', false)
  })));
};
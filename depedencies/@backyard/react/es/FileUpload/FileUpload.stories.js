var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

import React from 'react';
import { withKnobs, boolean, number, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { GridV3 as Grid, FileUpload, FormControl, FormHeading, FileUploadSkeleton } from '../';
import files from './mocks/files';
import { ApiLink } from '../utils/storybook/ApiLink';
const variants = ['Variant', {
  button: 'button',
  dropzone: 'dropzone'
}, 'dropzone'];
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export default {
  title: '@backyard/react/FileUpload',
  decorators: [withKnobs]
};
export const DefaultFileUpload = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FileUpload, {
  variant: select(...variants),
  shape: select(...shapes),
  disabled: boolean('disabled', false),
  multiple: boolean('multiple', true),
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
export const FileLoadingState = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FileUpload, {
  variant: select(...variants),
  shape: select(...shapes),
  disabled: boolean('disabled', false),
  multiple: boolean('multiple', true),
  maxFiles: number('maxFiles', 0),
  onDrop: (event, {
    acceptedFiles
  }) => {
    acceptedFiles.forEach(file => {
      file.setState('loading'); // Upload file...

      setTimeout(() => {
        const chance = Math.random(); // If upload fails...

        if (chance < 0.25) {
          file.setState('error', [{
            message: `Custom error (${chance.toPrecision(2)})`,
            code: `custom-error-${chance.toPrecision(2)}`
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
export const DefaultFiles = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FileUpload, {
  variant: select(...variants),
  shape: select(...shapes),
  disabled: boolean('disabled', false),
  multiple: boolean('multiple', true),
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
export const AcceptFileType = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FileUpload, {
  variant: select(...variants),
  shape: select(...shapes),
  disabled: boolean('disabled', false),
  multiple: boolean('multiple', true),
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
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "FileUpload Skeleton (Button)")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FileUploadSkeleton, {
  variant: "button",
  shape: select(...shapes),
  animate: boolean('Animate', false)
})), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "FileUpload Skeleton (Dropzone)")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FileUploadSkeleton, {
  variant: "dropzone",
  shape: select(...shapes),
  animate: boolean('Animate', false)
})));
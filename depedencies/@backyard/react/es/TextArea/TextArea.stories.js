var _ApiLink, _FormHelperText, _ApiLink2, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4, _br5, _br6, _FormHeading3, _br7, _br8, _br9, _FormHeading4, _br10;

import React from 'react';
import { GridV3 as Grid, TextArea, FormControl, FormHeading, TextAreaSkeleton, FormHelperText } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, boolean, select, text, number } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/TextArea',
  decorators: [withKnobs]
};
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
const states = ['State', {
  default: 'default',
  error: 'error',
  success: 'success'
}, 'default'];
export const Default = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(TextArea, {
  id: "outlined-text-area",
  label: "Label",
  disabled: boolean('Disabled', false),
  defaultValue: text('Text', ''),
  helperText: text('Helper Text', 'Helper Text'),
  rows: number('Rows', 4),
  max: number('Max', 300),
  resizer: boolean('Resizer', false),
  shape: select(...shapes),
  state: select(...states)
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextArea"
})));
export const HelperText = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(TextArea, {
  id: "outlined-text-area",
  label: "Label",
  disabled: boolean('Disabled', false),
  defaultValue: text('Text', ''),
  rows: number('Rows', 4),
  max: number('Max', 300),
  resizer: boolean('Resizer', false),
  shape: select(...shapes),
  state: select(...states)
}), _FormHelperText || (_FormHelperText = /*#__PURE__*/React.createElement(FormHelperText, null, "This is some really long helper text to show that it goes all the way across the input so this is a really super wide input!"))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextArea"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Text Area Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(TextAreaSkeleton, {
  shape: select(...shapes),
  rows: number('Rows', 4),
  animate: boolean('Animate', false)
})), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "Text Area Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(TextAreaSkeleton, {
  shape: select(...shapes),
  rows: number('Rows', 4),
  animate: boolean('Animate', false),
  helperText: true
})), _br5 || (_br5 = /*#__PURE__*/React.createElement("br", null)), _br6 || (_br6 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading3 || (_FormHeading3 = /*#__PURE__*/React.createElement(FormHeading, null, "Text Area Skeleton w/ Max Counter")), _br7 || (_br7 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(TextAreaSkeleton, {
  shape: select(...shapes),
  rows: number('Rows', 4),
  animate: boolean('Animate', false),
  max: true
})), _br8 || (_br8 = /*#__PURE__*/React.createElement("br", null)), _br9 || (_br9 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading4 || (_FormHeading4 = /*#__PURE__*/React.createElement(FormHeading, null, "Text Area Skeleton w/ Helper Text & Max Counter")), _br10 || (_br10 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(TextAreaSkeleton, {
  shape: select(...shapes),
  rows: number('Rows', 4),
  animate: boolean('Animate', false),
  helperText: true,
  max: true
})));
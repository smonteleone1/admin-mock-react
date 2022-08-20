var _ApiLink, _FormHeading, _br;

import React from 'react';
import { GridV3 as Grid, Toast, FormControl, FormHeading, ToastSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, boolean, select, text, number } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Toast',
  decorators: [withKnobs]
};
const types = ['Type', {
  info: 'info',
  error: 'error',
  success: 'success',
  warning: 'warning'
}, 'info'];
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
const sizes = ['Size', {
  standard: 'standard',
  jumbo: 'jumbo'
}, 'standard'];
export const Default = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Toast, {
  title: text('Title', 'Title'),
  subtitle: text('Subtitle', 'Subtitle goes here...'),
  size: select(...sizes),
  closed: boolean('Closed', false),
  closeDelay: number('Close Delay', 0),
  noClose: boolean('No Close', false),
  noTimestamp: boolean('No Timestamp', false),
  type: select(...types),
  shape: select(...shapes)
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Toast"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Toast Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(ToastSkeleton, {
  shape: select(...shapes),
  animate: boolean('Animate', false)
})));
var _ApiLink, _FormHeading, _br;

import React from 'react';
import { GridV3 as Grid, Toast, FormControl, FormHeading, ToastSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, boolean as _boolean, select, text, number } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Toast',
  decorators: [withKnobs]
};
var types = ['Type', {
  info: 'info',
  error: 'error',
  success: 'success',
  warning: 'warning'
}, 'info'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var sizes = ['Size', {
  standard: 'standard',
  jumbo: 'jumbo'
}, 'standard'];
export var Default = function Default() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Toast, {
    title: text('Title', 'Title'),
    subtitle: text('Subtitle', 'Subtitle goes here...'),
    size: select.apply(void 0, sizes),
    closed: _boolean('Closed', false),
    closeDelay: number('Close Delay', 0),
    noClose: _boolean('No Close', false),
    noTimestamp: _boolean('No Timestamp', false),
    type: select.apply(void 0, types),
    shape: select.apply(void 0, shapes)
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Toast"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Toast Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(ToastSkeleton, {
    shape: select.apply(void 0, shapes),
    animate: _boolean('Animate', false)
  })));
};
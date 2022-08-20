var _ApiLink, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean as _boolean, text } from '@storybook/addon-knobs';
import { Alert, GridV3 as Grid, FormControl, FormHeading, AlertSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/Alert',
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
  medium: 'medium',
  jumbo: 'jumbo'
}, 'medium'];
export var Default = function Default() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Alert, {
    title: text('Title', 'Title'),
    subtitle: text('Subtitle', ''),
    type: select.apply(void 0, types),
    size: select.apply(void 0, sizes),
    multiline: _boolean('Multiline', false),
    elevation: _boolean('Elevation', true),
    noClose: _boolean('No Close', false),
    action: text('Action', 'Action'),
    onClose: action('close-clicked'),
    onActionClick: action('action-clicked'),
    shape: select.apply(void 0, shapes)
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Alert"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Alert Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(AlertSkeleton, {
    shape: select.apply(void 0, shapes),
    animate: _boolean('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "Multiline Alert Skeleton")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(AlertSkeleton, {
    shape: select.apply(void 0, shapes),
    animate: _boolean('Animate', false),
    multiline: true
  })));
};
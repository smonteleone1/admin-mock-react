var _ApiLink, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean as _boolean, select, text } from '@storybook/addon-knobs';
import { ApiLink } from '../utils/storybook/ApiLink';
import { GridV3 as Grid, Password, FormControl, FormHeading, PasswordSkeleton, FormHelperTextSkeleton } from '../';
export default {
  title: '@backyard/react/Password',
  decorators: [withKnobs]
};
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var states = ['State', {
  "default": 'default',
  error: 'error',
  success: 'success'
}, 'default'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'large'];
export var DefaultPassword = function DefaultPassword() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Password, {
    id: "outlined-password",
    variant: "outlined",
    label: "Password",
    defaultValue: text('Default Value', ''),
    disabled: _boolean('Disabled', false),
    shape: select.apply(void 0, shapes),
    state: select.apply(void 0, states),
    size: select.apply(void 0, sizes),
    onChange: action('textfield-change'),
    onClick: action('textfield-click'),
    onFocus: action('textfield-focus'),
    onBlur: action('textfield-blur')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Password"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Password Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(PasswordSkeleton, {
    shape: select.apply(void 0, shapes),
    size: select.apply(void 0, sizes),
    animate: _boolean('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "Password Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(PasswordSkeleton, {
    shape: select.apply(void 0, shapes),
    size: select.apply(void 0, sizes),
    animate: _boolean('Animate', false)
  }), /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
    animate: _boolean('Animate', false)
  })));
};
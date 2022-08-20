var _TextField, _ApiLink, _TextField2, _Info, _ApiLink2;

import React from 'react';
import { withKnobs, text, boolean as _boolean, select } from '@storybook/addon-knobs';
import Info from '@backyard/icons/InfoOutlined';
import { ApiLink } from '../utils/storybook/ApiLink';
import { GridV3 as Grid, FormControl, TextField, FormHelperText, TextFieldSkeleton, FormHelperTextSkeleton } from '../';
export default {
  title: '@backyard/react/FormHelperText',
  decorators: [withKnobs]
};
var states = ['State', {
  undefined: undefined,
  error: 'error'
}, undefined];
export var DefaultFormHelperText = function DefaultFormHelperText() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, {
    state: select.apply(void 0, states)
  }, _TextField || (_TextField = /*#__PURE__*/React.createElement(TextField, {
    id: "test-1"
  })), /*#__PURE__*/React.createElement(FormHelperText, null, text('Helper Text', 'Placeholder'))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FormHelperText"
  })));
};
export var WithIcon = function WithIcon() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, null, _TextField2 || (_TextField2 = /*#__PURE__*/React.createElement(TextField, {
    id: "test-1"
  })), /*#__PURE__*/React.createElement(FormHelperText, {
    icon: _Info || (_Info = /*#__PURE__*/React.createElement(Info, null))
  }, text('Helper Text', 'Placeholder'))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/FormHelperText"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(TextFieldSkeleton, {
    animate: _boolean('Animate', false)
  }), /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
    animate: _boolean('Animate', false)
  })));
};
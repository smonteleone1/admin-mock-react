var _ApiLink, _ApiLink2;

import React from 'react';
import { GridV3 as Grid, FormControlLabel, Checkbox, CheckboxSkeleton } from '../';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean as _boolean } from '@storybook/addon-knobs';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/Checkbox',
  decorators: [withKnobs]
};
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export var DefaultCheckbox = function DefaultCheckbox() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox // checked={boolean('Checked', false)}
    , {
      defaultChecked: _boolean('Default Checked', false),
      disabled: _boolean('Disabled', false),
      shape: select.apply(void 0, shapes),
      value: text('Value', 'value'),
      name: text('Name', 'name'),
      onChange: action('checkbox-changed')
    }),
    label: "Checkbox label"
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Checkbox"
  })));
};
export var ControlledCheckbox = function ControlledCheckbox() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: _boolean('Checked', false),
      defaultChecked: _boolean('Default Checked', false),
      disabled: _boolean('Disabled', false),
      shape: select.apply(void 0, shapes),
      value: text('Value', 'value'),
      name: text('Name', 'name'),
      onChange: action('checkbox-changed')
    }),
    label: "Checkbox label"
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Checkbox"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(CheckboxSkeleton, {
    withLabel: _boolean('withLabel', false),
    labelWidth: text('Label text width', '5rem'),
    withHelper: _boolean('withHelper', false),
    helperWidth: text('Helper text width', '5rem'),
    animate: _boolean('Animate', false)
  }));
};
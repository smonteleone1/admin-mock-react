var _ApiLink, _ApiLink2;

import React from 'react';
import { GridV3 as Grid, FormControlLabel, Checkbox, CheckboxSkeleton } from '../';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/Checkbox',
  decorators: [withKnobs]
};
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export const DefaultCheckbox = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControlLabel, {
  control: /*#__PURE__*/React.createElement(Checkbox // checked={boolean('Checked', false)}
  , {
    defaultChecked: boolean('Default Checked', false),
    disabled: boolean('Disabled', false),
    shape: select(...shapes),
    value: text('Value', 'value'),
    name: text('Name', 'name'),
    onChange: action('checkbox-changed')
  }),
  label: "Checkbox label"
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Checkbox"
})));
export const ControlledCheckbox = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControlLabel, {
  control: /*#__PURE__*/React.createElement(Checkbox, {
    checked: boolean('Checked', false),
    defaultChecked: boolean('Default Checked', false),
    disabled: boolean('Disabled', false),
    shape: select(...shapes),
    value: text('Value', 'value'),
    name: text('Name', 'name'),
    onChange: action('checkbox-changed')
  }),
  label: "Checkbox label"
}), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Checkbox"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(CheckboxSkeleton, {
  withLabel: boolean('withLabel', false),
  labelWidth: text('Label text width', '5rem'),
  withHelper: boolean('withHelper', false),
  helperWidth: text('Helper text width', '5rem'),
  animate: boolean('Animate', false)
}));
var _ApiLink, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4, _br5, _br6, _FormHeading3, _br7;

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text, number } from '@storybook/addon-knobs';
import { ApiLink } from '../utils/storybook/ApiLink';
import { GridV3 as Grid, Stepper, FormControl, FormHeading, StepperSkeleton } from '../';
export default {
  title: '@backyard/react/Stepper',
  decorators: [withKnobs]
};
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
const states = ['State', {
  default: 'default',
  error: 'error'
}, 'default'];
export const OutlinedStepper = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Stepper, {
  label: text('Label', 'Label'),
  step: number('Step', 1),
  roundToStep: boolean('Round Step', false),
  defaultValue: number('Default Value', 0),
  shape: select(...shapes),
  state: select(...states),
  onChange: action('stepper-change'),
  onBlur: action('stepper-blur')
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Stepper"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Stepper Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(StepperSkeleton, {
  shape: select(...shapes),
  animate: boolean('Animate', false)
})), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "Stepper Skeleton (Hidden Buttons)")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(StepperSkeleton, {
  hideButtons: true,
  shape: select(...shapes),
  animate: boolean('Animate', false)
})), _br5 || (_br5 = /*#__PURE__*/React.createElement("br", null)), _br6 || (_br6 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading3 || (_FormHeading3 = /*#__PURE__*/React.createElement(FormHeading, null, "Stepper Skeleton (w/ Label)")), _br7 || (_br7 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(StepperSkeleton, {
  label: true,
  shape: select(...shapes),
  animate: boolean('Animate', false)
})));
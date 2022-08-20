var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4;

import React from 'react';
import { Slider, SliderSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withA11y } from '@storybook/addon-a11y';
import { GridV3 as Grid } from '../';
import { withKnobs, select, number, boolean } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Slider',
  decorators: [withA11y, withKnobs]
};
const orientations = ['Orientation', {
  horizontal: 'horizontal',
  vertical: 'vertical'
}, 'horizontal'];
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export const DefaultSlider = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 5,
  end: 13
}, /*#__PURE__*/React.createElement(Slider, {
  defaultValue: number('Default Value', 1),
  disabled: boolean('Disabled', false),
  showInput: boolean('Show Input', false),
  min: number('Min', 1),
  max: number('Max', 10),
  orientation: select(...orientations),
  shape: select(...shapes),
  step: number('Step', 1)
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Slider"
})));
export const SliderWithoutDivisibleStep = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 5,
  end: 13
}, /*#__PURE__*/React.createElement(Slider, {
  defaultValue: number('Default Value', 0),
  disabled: boolean('Disabled', false),
  showInput: boolean('Show Input', false),
  min: number('Min', 0),
  max: number('Max', 11),
  orientation: select(...orientations),
  shape: select(...shapes),
  step: number('Step', 3)
}), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Slider"
})));
export const SliderWithLargeIndivisibleStep = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 5,
  end: 13
}, /*#__PURE__*/React.createElement(Slider, {
  defaultValue: number('Default Value', 0),
  disabled: boolean('Disabled', false),
  showInput: boolean('Show Input', false),
  min: number('Min', 0),
  max: number('Max', 11),
  orientation: select(...orientations),
  shape: select(...shapes),
  step: number('Step', 6)
}), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Slider"
})));
export const TooltipSlider = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 5,
  end: 13
}, /*#__PURE__*/React.createElement(Slider, {
  defaultValue: number('Default Value', 0),
  disabled: boolean('Disabled', false),
  showInput: boolean('Show Input', false),
  min: number('Min', 0),
  max: number('Max', 14),
  orientation: select(...orientations),
  shape: select(...shapes),
  step: number('Step', 3),
  tooltip: true
}), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Slider"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(SliderSkeleton, {
  orientation: select(...orientations),
  showInput: boolean('showInput', false),
  animate: boolean('Animate', false)
});
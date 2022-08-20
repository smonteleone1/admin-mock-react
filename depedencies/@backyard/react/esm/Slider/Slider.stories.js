var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4;

import React from 'react';
import { Slider, SliderSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withA11y } from '@storybook/addon-a11y';
import { GridV3 as Grid } from '../';
import { withKnobs, select, number, boolean as _boolean } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Slider',
  decorators: [withA11y, withKnobs]
};
var orientations = ['Orientation', {
  horizontal: 'horizontal',
  vertical: 'vertical'
}, 'horizontal'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export var DefaultSlider = function DefaultSlider() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/React.createElement(Slider, {
    defaultValue: number('Default Value', 1),
    disabled: _boolean('Disabled', false),
    showInput: _boolean('Show Input', false),
    min: number('Min', 1),
    max: number('Max', 10),
    orientation: select.apply(void 0, orientations),
    shape: select.apply(void 0, shapes),
    step: number('Step', 1)
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Slider"
  })));
};
export var SliderWithoutDivisibleStep = function SliderWithoutDivisibleStep() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/React.createElement(Slider, {
    defaultValue: number('Default Value', 0),
    disabled: _boolean('Disabled', false),
    showInput: _boolean('Show Input', false),
    min: number('Min', 0),
    max: number('Max', 11),
    orientation: select.apply(void 0, orientations),
    shape: select.apply(void 0, shapes),
    step: number('Step', 3)
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Slider"
  })));
};
export var SliderWithLargeIndivisibleStep = function SliderWithLargeIndivisibleStep() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/React.createElement(Slider, {
    defaultValue: number('Default Value', 0),
    disabled: _boolean('Disabled', false),
    showInput: _boolean('Show Input', false),
    min: number('Min', 0),
    max: number('Max', 11),
    orientation: select.apply(void 0, orientations),
    shape: select.apply(void 0, shapes),
    step: number('Step', 6)
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Slider"
  })));
};
export var TooltipSlider = function TooltipSlider() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 5,
    end: 13
  }, /*#__PURE__*/React.createElement(Slider, {
    defaultValue: number('Default Value', 0),
    disabled: _boolean('Disabled', false),
    showInput: _boolean('Show Input', false),
    min: number('Min', 0),
    max: number('Max', 14),
    orientation: select.apply(void 0, orientations),
    shape: select.apply(void 0, shapes),
    step: number('Step', 3),
    tooltip: true
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Slider"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(SliderSkeleton, {
    orientation: select.apply(void 0, orientations),
    showInput: _boolean('showInput', false),
    animate: _boolean('Animate', false)
  });
};
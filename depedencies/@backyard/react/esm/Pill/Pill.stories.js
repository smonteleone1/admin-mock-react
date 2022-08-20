var _ApiLink, _ApiLink2, _ApiLink3;

import React from 'react';
import { GridV3 as Grid, Pill, PillSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, number, boolean as _boolean, select, text } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Pill',
  decorators: [withKnobs]
};
var colors = ['Color', {
  'dark-blue': 'dark-blue',
  'blue': 'blue',
  'light-blue': 'light-blue',
  'interactive': 'interactive',
  'green': 'green',
  'red': 'red',
  'gold': 'gold',
  'lfp-yellow': 'lfp-yellow',
  'neutral': 'neutral'
}, 'dark-blue'];
var shapes = {
  circle: 'circle',
  dot: 'dot'
};
var variants = {
  pill: 'pill',
  indicator: 'indicator'
};
var sizes = ['Sizes', {
  medium: 'medium',
  jumbo: 'jumbo'
}, 'medium'];
export var FilledPill = function FilledPill() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Pill, {
    value: number('Value', 1),
    invisible: _boolean('Invisible', false),
    max: number('Max Value', 10),
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes),
    shape: select('Shapes', shapes, 'circle')
  }, text('Text', 'Text')), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pill"
  })));
};
export var OutlinedPill = function OutlinedPill() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Pill, {
    variant: "outlined",
    value: number('Value', 1),
    invisible: _boolean('Invisible', false),
    max: number('Max Value', 10),
    color: select.apply(void 0, colors),
    shape: select('Shapes', shapes, 'circle'),
    size: select.apply(void 0, sizes)
  }, text('Text', 'Text')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pill"
  })));
};
export var IndicatorPill = function IndicatorPill() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Pill, {
    variant: "indicator",
    invisible: _boolean('Invisible', false),
    color: select.apply(void 0, colors),
    shape: select('Shapes', shapes, 'circle'),
    size: select.apply(void 0, sizes)
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Pill"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(PillSkeleton, {
    variant: select('Variant', variants, 'pill'),
    size: select.apply(void 0, sizes),
    animate: _boolean('Animate', false)
  }));
};
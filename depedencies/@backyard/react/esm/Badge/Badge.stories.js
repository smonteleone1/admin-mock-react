var _ApiLink, _ApiLink2;

import React from 'react';
import { Badge, GridV3 as Grid, BadgeSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, select, text, boolean as _boolean } from '@storybook/addon-knobs';
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
var arrows = ['Arrow', {
  none: 'none',
  left: 'left',
  right: 'right'
}, 'none'];
var sizes = ['Size', {
  medium: 'medium',
  jumbo: 'jumbo'
}, 'medium'];
export default {
  title: '@backyard/react/Badge',
  decorators: [withKnobs]
};
export var FilledBadge = function FilledBadge() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Badge, {
    color: select.apply(void 0, colors),
    bold: _boolean('bold', false),
    arrow: select.apply(void 0, arrows),
    size: select.apply(void 0, sizes)
  }, text('Text', 'Badge')), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Badge"
  })));
};
export var OutlinedBadge = function OutlinedBadge() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "outlined",
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes)
  }, text('Text', 'Badge')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Badge"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(BadgeSkeleton, {
    animate: _boolean('Animate', false),
    width: text('Width', ''),
    size: select.apply(void 0, sizes)
  }));
};
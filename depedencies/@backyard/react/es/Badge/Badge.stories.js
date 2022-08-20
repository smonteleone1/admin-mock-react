var _ApiLink, _ApiLink2;

import React from 'react';
import { Badge, GridV3 as Grid, BadgeSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';
const colors = ['Color', {
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
const arrows = ['Arrow', {
  none: 'none',
  left: 'left',
  right: 'right'
}, 'none'];
const sizes = ['Size', {
  medium: 'medium',
  jumbo: 'jumbo'
}, 'medium'];
export default {
  title: '@backyard/react/Badge',
  decorators: [withKnobs]
};
export const FilledBadge = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Badge, {
  color: select(...colors),
  bold: boolean('bold', false),
  arrow: select(...arrows),
  size: select(...sizes)
}, text('Text', 'Badge')), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Badge"
})));
export const OutlinedBadge = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Badge, {
  variant: "outlined",
  color: select(...colors),
  size: select(...sizes)
}, text('Text', 'Badge')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Badge"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(BadgeSkeleton, {
  animate: boolean('Animate', false),
  width: text('Width', ''),
  size: select(...sizes)
}));
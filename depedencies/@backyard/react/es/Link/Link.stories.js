var _ApiLink, _ChevronLeft, _ApiLink2, _ChevronRight, _ApiLink3;

import React from 'react';
import { GridV3 as Grid, Link, LinkSkeleton } from '../';
import ChevronLeft from '@backyard/icons/ChevronLeft';
import ChevronRight from '@backyard/icons/ChevronRight';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, select, boolean, text } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Link',
  decorators: [withKnobs]
};
const colors = ['Color', {
  interactive: 'interactive',
  primary: 'primary',
  inverse: 'inverse'
}, 'text_interactive'];
const sizes = ['Size', {
  small: 'small',
  medium: 'medium'
}, 'medium'];
const underline = ['Underline', {
  never: 'never',
  hover: 'hover',
  always: 'always'
}, 'hover'];
export const DefaultLink = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Link, {
  bold: boolean('Bold', false),
  color: select(...colors),
  size: select(...sizes),
  underline: select(...underline),
  to: text('To', 'to'),
  onClick: action('link-click'),
  onKeyDown: action('link-key-down')
}, text('Text', 'link text!')), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Link"
})));
export const IconBeforeLink = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Link, {
  iconBefore: _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(ChevronLeft, null)),
  bold: boolean('Bold', false),
  color: select(...colors),
  size: select(...sizes),
  underline: select(...underline),
  to: text('To', 'to'),
  onClick: action('link-click'),
  onKeyDown: action('link-key-down')
}, text('Text', 'link text!')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Link"
})));
export const IconAfterLink = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Link, {
  iconAfter: _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null)),
  bold: boolean('Bold', false),
  color: select(...colors),
  size: select(...sizes),
  underline: select(...underline),
  to: text('To', 'to'),
  onClick: action('link-click'),
  onKeyDown: action('link-key-down')
}, text('Text', 'link text!')), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Link"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(LinkSkeleton, {
  width: text('Width', '6rem'),
  animate: boolean('Animate', false),
  size: select(...sizes)
}));
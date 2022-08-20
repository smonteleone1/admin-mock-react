var _Plus, _HeartOutlined, _Edit, _Dots, _ApiLink, _Plus2, _HeartOutlined2, _Edit2, _Dots2, _ApiLink2;

import React from 'react';
import { ButtonGroup, GridV3 as Grid, IconButton, ButtonGroupSkeleton } from '../';
import Plus from '@backyard/icons/Plus';
import HeartOutlined from '@backyard/icons/HeartOutlined';
import Edit from '@backyard/icons/Edit';
import Dots from '@backyard/icons/Dots';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/ButtonGroup',
  decorators: [withKnobs]
};
const variants = ['Variant', {
  secondary: 'secondary',
  ghost: 'ghost'
}, 'secondary'];
const colors = ['Color', {
  interative: 'interactive',
  neutral: 'neutral'
}, 'interactive'];
const sizes = ['Sizes', {
  small: 'small',
  medium: 'medium'
}, 'medium'];
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export const DefaultButtonGroup = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(ButtonGroup, {
  variant: select(...variants),
  shape: select(...shapes),
  color: select(...colors)
}, /*#__PURE__*/React.createElement(IconButton, {
  size: select(...sizes),
  disabled: boolean('Disabled', false),
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _Plus || (_Plus = /*#__PURE__*/React.createElement(Plus, null))), /*#__PURE__*/React.createElement(IconButton, {
  size: select(...sizes),
  disabled: boolean('Disabled', false),
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _HeartOutlined || (_HeartOutlined = /*#__PURE__*/React.createElement(HeartOutlined, null))), /*#__PURE__*/React.createElement(IconButton, {
  size: select(...sizes),
  disabled: boolean('Disabled', false),
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _Edit || (_Edit = /*#__PURE__*/React.createElement(Edit, null))), /*#__PURE__*/React.createElement(IconButton, {
  size: select(...sizes),
  disabled: boolean('Disabled', false),
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _Dots || (_Dots = /*#__PURE__*/React.createElement(Dots, null)))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ButtonGroup"
})));
export const DisabledButtons = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(ButtonGroup, {
  variant: select(...variants),
  shape: select(...shapes)
}, /*#__PURE__*/React.createElement(IconButton, {
  size: select(...sizes),
  disabled: false,
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _Plus2 || (_Plus2 = /*#__PURE__*/React.createElement(Plus, null))), /*#__PURE__*/React.createElement(IconButton, {
  size: select(...sizes),
  disabled: true,
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _HeartOutlined2 || (_HeartOutlined2 = /*#__PURE__*/React.createElement(HeartOutlined, null))), /*#__PURE__*/React.createElement(IconButton, {
  size: select(...sizes),
  disabled: true,
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _Edit2 || (_Edit2 = /*#__PURE__*/React.createElement(Edit, null))), /*#__PURE__*/React.createElement(IconButton, {
  size: select(...sizes),
  disabled: false,
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _Dots2 || (_Dots2 = /*#__PURE__*/React.createElement(Dots, null)))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ButtonGroup"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(ButtonGroupSkeleton, {
  size: select(...sizes),
  animate: boolean('Animate', false),
  width: text('Width', '')
}));
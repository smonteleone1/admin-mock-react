var _Plus, _HeartOutlined, _Edit, _Dots, _ApiLink, _Plus2, _HeartOutlined2, _Edit2, _Dots2, _ApiLink2;

import React from 'react';
import { ButtonGroup, GridV3 as Grid, IconButton, ButtonGroupSkeleton } from '../';
import Plus from '@backyard/icons/Plus';
import HeartOutlined from '@backyard/icons/HeartOutlined';
import Edit from '@backyard/icons/Edit';
import Dots from '@backyard/icons/Dots';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean as _boolean, select, text } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/ButtonGroup',
  decorators: [withKnobs]
};
var variants = ['Variant', {
  secondary: 'secondary',
  ghost: 'ghost'
}, 'secondary'];
var colors = ['Color', {
  interative: 'interactive',
  neutral: 'neutral'
}, 'interactive'];
var sizes = ['Sizes', {
  small: 'small',
  medium: 'medium'
}, 'medium'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export var DefaultButtonGroup = function DefaultButtonGroup() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    variant: select.apply(void 0, variants),
    shape: select.apply(void 0, shapes),
    color: select.apply(void 0, colors)
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: select.apply(void 0, sizes),
    disabled: _boolean('Disabled', false),
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _Plus || (_Plus = /*#__PURE__*/React.createElement(Plus, null))), /*#__PURE__*/React.createElement(IconButton, {
    size: select.apply(void 0, sizes),
    disabled: _boolean('Disabled', false),
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _HeartOutlined || (_HeartOutlined = /*#__PURE__*/React.createElement(HeartOutlined, null))), /*#__PURE__*/React.createElement(IconButton, {
    size: select.apply(void 0, sizes),
    disabled: _boolean('Disabled', false),
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _Edit || (_Edit = /*#__PURE__*/React.createElement(Edit, null))), /*#__PURE__*/React.createElement(IconButton, {
    size: select.apply(void 0, sizes),
    disabled: _boolean('Disabled', false),
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _Dots || (_Dots = /*#__PURE__*/React.createElement(Dots, null)))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ButtonGroup"
  })));
};
export var DisabledButtons = function DisabledButtons() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    variant: select.apply(void 0, variants),
    shape: select.apply(void 0, shapes)
  }, /*#__PURE__*/React.createElement(IconButton, {
    size: select.apply(void 0, sizes),
    disabled: false,
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _Plus2 || (_Plus2 = /*#__PURE__*/React.createElement(Plus, null))), /*#__PURE__*/React.createElement(IconButton, {
    size: select.apply(void 0, sizes),
    disabled: true,
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _HeartOutlined2 || (_HeartOutlined2 = /*#__PURE__*/React.createElement(HeartOutlined, null))), /*#__PURE__*/React.createElement(IconButton, {
    size: select.apply(void 0, sizes),
    disabled: true,
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _Edit2 || (_Edit2 = /*#__PURE__*/React.createElement(Edit, null))), /*#__PURE__*/React.createElement(IconButton, {
    size: select.apply(void 0, sizes),
    disabled: false,
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _Dots2 || (_Dots2 = /*#__PURE__*/React.createElement(Dots, null)))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/ButtonGroup"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(ButtonGroupSkeleton, {
    size: select.apply(void 0, sizes),
    animate: _boolean('Animate', false),
    width: text('Width', '')
  }));
};
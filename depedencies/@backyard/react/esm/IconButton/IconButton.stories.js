var _Plus, _ApiLink, _Plus2, _ApiLink2, _Plus3, _ApiLink3, _Plus4, _ApiLink4, _Plus5, _ApiLink5;

import React from 'react';
import { GridV3 as Grid, IconButton, IconButtonSkeleton } from '../';
import Plus from '@backyard/icons/Plus';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean as _boolean, select } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/IconButton',
  decorators: [withKnobs]
};
var colors = ['Color', {
  interactive: 'interactive',
  green: 'green',
  red: 'red',
  neutral: 'neutral'
}, 'interactive'];
var types = ['Type', {
  button: 'button',
  submit: 'submit',
  reset: 'reset'
}, 'button'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared',
  circle: 'circle'
}, 'rounded'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'medium'];
export var PrimaryIconButton = function PrimaryIconButton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "primary",
    color: select.apply(void 0, colors),
    shape: select.apply(void 0, shapes),
    size: select.apply(void 0, sizes),
    type: select.apply(void 0, types),
    disabled: _boolean('Disabled', false),
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _Plus || (_Plus = /*#__PURE__*/React.createElement(Plus, null))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
  })));
};
export var SecondaryIconButton = function SecondaryIconButton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "secondary",
    color: select.apply(void 0, colors),
    shape: select.apply(void 0, shapes),
    size: select.apply(void 0, sizes),
    type: select.apply(void 0, types),
    disabled: _boolean('Disabled', false),
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _Plus2 || (_Plus2 = /*#__PURE__*/React.createElement(Plus, null))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
  })));
};
export var TertiaryIconButton = function TertiaryIconButton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "tertiary",
    color: select.apply(void 0, colors),
    shape: select.apply(void 0, shapes),
    size: select.apply(void 0, sizes),
    type: select.apply(void 0, types),
    disabled: _boolean('Disabled', false),
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _Plus3 || (_Plus3 = /*#__PURE__*/React.createElement(Plus, null))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
  })));
};
export var GhostIconButton = function GhostIconButton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    color: select.apply(void 0, colors),
    shape: select.apply(void 0, shapes),
    size: select.apply(void 0, sizes),
    type: select.apply(void 0, types),
    disabled: _boolean('Disabled', false),
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _Plus4 || (_Plus4 = /*#__PURE__*/React.createElement(Plus, null))), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
  })));
};
export var InverseIconButton = function InverseIconButton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '3rem',
      backgroundColor: 'var(--bds-color-surface-blue)',
      display: 'inline-flex',
      alignItems: 'center',
      marginTop: '-3rem',
      marginLeft: '-3rem'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "inverse",
    color: select.apply(void 0, colors),
    shape: select.apply(void 0, shapes),
    size: select.apply(void 0, sizes),
    type: select.apply(void 0, types),
    disabled: _boolean('Disabled', false),
    onClick: action('button-click'),
    onKeyDown: action('button-key-down'),
    onFocus: action('button-focus')
  }, _Plus5 || (_Plus5 = /*#__PURE__*/React.createElement(Plus, null)))), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(IconButtonSkeleton, {
    size: select.apply(void 0, sizes),
    animate: _boolean('Animate', false)
  }));
};
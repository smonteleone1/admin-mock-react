var _Plus, _ApiLink, _Plus2, _ApiLink2, _Plus3, _ApiLink3, _Plus4, _ApiLink4, _Plus5, _ApiLink5;

import React from 'react';
import { GridV3 as Grid, IconButton, IconButtonSkeleton } from '../';
import Plus from '@backyard/icons/Plus';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/IconButton',
  decorators: [withKnobs]
};
const colors = ['Color', {
  interactive: 'interactive',
  green: 'green',
  red: 'red',
  neutral: 'neutral'
}, 'interactive'];
const types = ['Type', {
  button: 'button',
  submit: 'submit',
  reset: 'reset'
}, 'button'];
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared',
  circle: 'circle'
}, 'rounded'];
const sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'medium'];
export const PrimaryIconButton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(IconButton, {
  variant: "primary",
  color: select(...colors),
  shape: select(...shapes),
  size: select(...sizes),
  type: select(...types),
  disabled: boolean('Disabled', false),
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _Plus || (_Plus = /*#__PURE__*/React.createElement(Plus, null))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
})));
export const SecondaryIconButton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(IconButton, {
  variant: "secondary",
  color: select(...colors),
  shape: select(...shapes),
  size: select(...sizes),
  type: select(...types),
  disabled: boolean('Disabled', false),
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _Plus2 || (_Plus2 = /*#__PURE__*/React.createElement(Plus, null))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
})));
export const TertiaryIconButton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(IconButton, {
  variant: "tertiary",
  color: select(...colors),
  shape: select(...shapes),
  size: select(...sizes),
  type: select(...types),
  disabled: boolean('Disabled', false),
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _Plus3 || (_Plus3 = /*#__PURE__*/React.createElement(Plus, null))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
})));
export const GhostIconButton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(IconButton, {
  variant: "ghost",
  color: select(...colors),
  shape: select(...shapes),
  size: select(...sizes),
  type: select(...types),
  disabled: boolean('Disabled', false),
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _Plus4 || (_Plus4 = /*#__PURE__*/React.createElement(Plus, null))), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
})));
export const InverseIconButton = () => /*#__PURE__*/React.createElement(Grid.Column, {
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
  color: select(...colors),
  shape: select(...shapes),
  size: select(...sizes),
  type: select(...types),
  disabled: boolean('Disabled', false),
  onClick: action('button-click'),
  onKeyDown: action('button-key-down'),
  onFocus: action('button-focus')
}, _Plus5 || (_Plus5 = /*#__PURE__*/React.createElement(Plus, null)))), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/IconButton"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(IconButtonSkeleton, {
  size: select(...sizes),
  animate: boolean('Animate', false)
}));
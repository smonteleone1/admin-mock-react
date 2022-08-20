var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _ApiLink5, _ChevronLeft, _ApiLink6, _ChevronRight, _ApiLink7, _ApiLink8;

import React from 'react';
import { Button, GridV3 as Grid, ButtonSkeleton } from '../';
import ChevronLeft from '@backyard/icons/ChevronLeft';
import ChevronRight from '@backyard/icons/ChevronRight';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Button',
  decorators: [withKnobs]
};
const colors = ['Color', {
  interactive: 'interactive',
  green: 'green',
  red: 'red',
  neutral: 'neutral'
}, 'interactive'];
const sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'medium'];
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
const variants = ['Variant', {
  primary: 'primary',
  secondary: 'secondary',
  ghost: 'ghost',
  tertiary: 'tertiary',
  inverse: 'inverse'
}, 'primary'];
export const Primary = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Button, {
  variant: "primary",
  disabled: boolean('Disabled', false),
  color: select(...colors),
  size: select(...sizes),
  fullWidth: boolean('Full-Width', false),
  elevation: boolean('Elevation', false),
  shape: select(...shapes),
  type: select(...types),
  onClick: action('button-clicked'),
  onFocus: action('button-focus')
}, text('Label', 'Sign In')), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
})));
export const Secondary = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Button, {
  variant: "secondary",
  disabled: boolean('Disabled', false),
  color: select(...colors),
  size: select(...sizes),
  fullWidth: boolean('Full-Width', false),
  elevation: boolean('Elevation', false),
  shape: select(...shapes),
  type: select(...types),
  onClick: action('button-clicked'),
  onFocus: action('button-focus')
}, text('Label', 'Sign In')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
})));
export const Tertiary = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Button, {
  variant: "tertiary",
  disabled: boolean('Disabled', false),
  color: select(...colors),
  size: select(...sizes),
  fullWidth: boolean('Full-Width', false),
  elevation: boolean('Elevation', false),
  shape: select(...shapes),
  type: select(...types),
  onClick: action('button-clicked'),
  onFocus: action('button-focus')
}, text('Label', 'Sign In')), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
})));
export const Ghost = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Button, {
  variant: "ghost",
  disabled: boolean('Disabled', false),
  color: select(...colors),
  size: select(...sizes),
  fullWidth: boolean('Full-Width', false),
  shape: select(...shapes),
  type: select(...types),
  onClick: action('button-clicked'),
  onFocus: action('button-focus')
}, text('Label', 'Sign In')), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
})));
export const Inverse = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement("span", {
  style: {
    padding: '3rem',
    backgroundColor: 'var(--bds-color-surface-blue',
    display: 'inline-flex',
    alignItems: 'center',
    marginTop: '-3rem',
    marginLeft: '-3rem'
  }
}, /*#__PURE__*/React.createElement(Button, {
  variant: "inverse",
  disabled: boolean('Disabled', false),
  color: select(...colors),
  size: select(...sizes),
  fullWidth: boolean('Full-Width', false),
  elevation: boolean('Elevation', false),
  shape: select(...shapes),
  type: select(...types),
  onClick: action('button-clicked'),
  onFocus: action('button-focus')
}, text('Label', 'Sign In'))), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
})));
export const IconBefore = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Button, {
  variant: select(...variants),
  disabled: boolean('Disabled', false),
  color: select(...colors),
  size: select(...sizes),
  fullWidth: boolean('Full-Width', false),
  shape: select(...shapes),
  type: select(...types),
  onClick: action('button-clicked'),
  onFocus: action('button-focus'),
  iconBefore: _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(ChevronLeft, {
    size: "size_20"
  }))
}, text('Label', 'Back')), _ApiLink6 || (_ApiLink6 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
})));
export const IconAfter = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Button, {
  variant: select(...variants),
  disabled: boolean('Disabled', false),
  color: select(...colors),
  size: select(...sizes),
  fullWidth: boolean('Full-Width', false),
  shape: select(...shapes),
  type: select(...types),
  onClick: action('button-clicked'),
  onFocus: action('button-focus'),
  iconAfter: _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null))
}, text('Label', 'Continue')), _ApiLink7 || (_ApiLink7 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
})));
export const FormSubmit = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement("form", {
  action: "/?path=/story/button--form-submit",
  method: "get"
}, /*#__PURE__*/React.createElement(Button, {
  variant: select(...variants),
  disabled: boolean('Disabled', false),
  color: select(...colors),
  size: select(...sizes),
  fullWidth: boolean('Full-Width', false),
  shape: select(...shapes),
  type: select(...types)
}, text('Label', 'Submit'))), _ApiLink8 || (_ApiLink8 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(ButtonSkeleton, {
  size: select(...sizes),
  animate: boolean('Animate', false),
  fullWidth: boolean('Full-Width', false),
  width: text('Width', null)
}));
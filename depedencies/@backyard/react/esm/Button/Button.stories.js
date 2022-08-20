var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _ApiLink5, _ChevronLeft, _ApiLink6, _ChevronRight, _ApiLink7, _ApiLink8;

import React from 'react';
import { Button, GridV3 as Grid, ButtonSkeleton } from '../';
import ChevronLeft from '@backyard/icons/ChevronLeft';
import ChevronRight from '@backyard/icons/ChevronRight';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean as _boolean, select } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Button',
  decorators: [withKnobs]
};
var colors = ['Color', {
  interactive: 'interactive',
  green: 'green',
  red: 'red',
  neutral: 'neutral'
}, 'interactive'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'medium'];
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
var variants = ['Variant', {
  primary: 'primary',
  secondary: 'secondary',
  ghost: 'ghost',
  tertiary: 'tertiary',
  inverse: 'inverse'
}, 'primary'];
export var Primary = function Primary() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    disabled: _boolean('Disabled', false),
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes),
    fullWidth: _boolean('Full-Width', false),
    elevation: _boolean('Elevation', false),
    shape: select.apply(void 0, shapes),
    type: select.apply(void 0, types),
    onClick: action('button-clicked'),
    onFocus: action('button-focus')
  }, text('Label', 'Sign In')), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};
export var Secondary = function Secondary() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    disabled: _boolean('Disabled', false),
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes),
    fullWidth: _boolean('Full-Width', false),
    elevation: _boolean('Elevation', false),
    shape: select.apply(void 0, shapes),
    type: select.apply(void 0, types),
    onClick: action('button-clicked'),
    onFocus: action('button-focus')
  }, text('Label', 'Sign In')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};
export var Tertiary = function Tertiary() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "tertiary",
    disabled: _boolean('Disabled', false),
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes),
    fullWidth: _boolean('Full-Width', false),
    elevation: _boolean('Elevation', false),
    shape: select.apply(void 0, shapes),
    type: select.apply(void 0, types),
    onClick: action('button-clicked'),
    onFocus: action('button-focus')
  }, text('Label', 'Sign In')), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};
export var Ghost = function Ghost() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    disabled: _boolean('Disabled', false),
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes),
    fullWidth: _boolean('Full-Width', false),
    shape: select.apply(void 0, shapes),
    type: select.apply(void 0, types),
    onClick: action('button-clicked'),
    onFocus: action('button-focus')
  }, text('Label', 'Sign In')), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};
export var Inverse = function Inverse() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
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
    disabled: _boolean('Disabled', false),
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes),
    fullWidth: _boolean('Full-Width', false),
    elevation: _boolean('Elevation', false),
    shape: select.apply(void 0, shapes),
    type: select.apply(void 0, types),
    onClick: action('button-clicked'),
    onFocus: action('button-focus')
  }, text('Label', 'Sign In'))), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};
export var IconBefore = function IconBefore() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Button, {
    variant: select.apply(void 0, variants),
    disabled: _boolean('Disabled', false),
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes),
    fullWidth: _boolean('Full-Width', false),
    shape: select.apply(void 0, shapes),
    type: select.apply(void 0, types),
    onClick: action('button-clicked'),
    onFocus: action('button-focus'),
    iconBefore: _ChevronLeft || (_ChevronLeft = /*#__PURE__*/React.createElement(ChevronLeft, {
      size: "size_20"
    }))
  }, text('Label', 'Back')), _ApiLink6 || (_ApiLink6 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};
export var IconAfter = function IconAfter() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Button, {
    variant: select.apply(void 0, variants),
    disabled: _boolean('Disabled', false),
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes),
    fullWidth: _boolean('Full-Width', false),
    shape: select.apply(void 0, shapes),
    type: select.apply(void 0, types),
    onClick: action('button-clicked'),
    onFocus: action('button-focus'),
    iconAfter: _ChevronRight || (_ChevronRight = /*#__PURE__*/React.createElement(ChevronRight, null))
  }, text('Label', 'Continue')), _ApiLink7 || (_ApiLink7 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};
export var FormSubmit = function FormSubmit() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement("form", {
    action: "/?path=/story/button--form-submit",
    method: "get"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: select.apply(void 0, variants),
    disabled: _boolean('Disabled', false),
    color: select.apply(void 0, colors),
    size: select.apply(void 0, sizes),
    fullWidth: _boolean('Full-Width', false),
    shape: select.apply(void 0, shapes),
    type: select.apply(void 0, types)
  }, text('Label', 'Submit'))), _ApiLink8 || (_ApiLink8 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(ButtonSkeleton, {
    size: select.apply(void 0, sizes),
    animate: _boolean('Animate', false),
    fullWidth: _boolean('Full-Width', false),
    width: text('Width', null)
  }));
};
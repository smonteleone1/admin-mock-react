var _ApiLink, _EmailOutlined, _ApiLink2, _InfoOutlined, _ApiLink3, _ApiLink4, _Mastercard, _ApiLink5, _Mastercard2, _FormHelperText, _ApiLink6, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

import React from 'react';
import { GridV3 as Grid, TextField, TextFieldSkeleton, FormControl, FormHeading, FormHelperText, FormHelperTextSkeleton } from '../';
import { EmailOutlined, InfoOutlined } from '@backyard/icons';
import { Mastercard } from '@backyard/lowes-icons';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, text, select, boolean as _boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
export default {
  title: '@backyard/react/TextField',
  decorators: [withKnobs]
};
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var states = ['State', {
  undefined: undefined,
  error: 'error',
  success: 'success'
}, undefined];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'large'];
export var Default = function Default() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "outlined-text-field",
    label: text('Label', 'Label'),
    shape: select.apply(void 0, shapes),
    state: select.apply(void 0, states),
    size: select.apply(void 0, sizes),
    onChange: action('textfield-change'),
    onClick: action('textfield-click'),
    onFocus: action('textfield-focus'),
    onBlur: action('textfield-blur')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextField"
  })));
};
export var ItemBefore = function ItemBefore() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "outlined-text-field",
    label: text('Label', 'Email address'),
    shape: select.apply(void 0, shapes),
    state: select.apply(void 0, states),
    size: select.apply(void 0, sizes),
    onChange: action('textfield-change'),
    onClick: action('textfield-click'),
    onFocus: action('textfield-focus'),
    onBlur: action('textfield-blur'),
    itemBefore: _EmailOutlined || (_EmailOutlined = /*#__PURE__*/React.createElement(EmailOutlined, null))
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextField"
  })));
};
export var ItemAfter = function ItemAfter() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "outlined-text-field",
    label: text('Label', 'Email address'),
    shape: select.apply(void 0, shapes),
    state: select.apply(void 0, states),
    size: select.apply(void 0, sizes),
    onChange: action('textfield-change'),
    onClick: action('textfield-click'),
    onFocus: action('textfield-focus'),
    onBlur: action('textfield-blur'),
    itemAfter: _InfoOutlined || (_InfoOutlined = /*#__PURE__*/React.createElement(InfoOutlined, null))
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextField"
  })));
};
export var Suffix = function Suffix() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "outlined-text-field",
    label: text('Label', 'Weight'),
    shape: select.apply(void 0, shapes),
    state: select.apply(void 0, states),
    size: select.apply(void 0, sizes),
    onChange: action('textfield-change'),
    onClick: action('textfield-click'),
    onFocus: action('textfield-focus'),
    onBlur: action('textfield-blur'),
    suffix: "lbs."
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextField"
  })));
};
export var CustomIcon = function CustomIcon() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "outlined-text-field",
    label: text('Label', 'Label'),
    shape: select.apply(void 0, shapes),
    state: select.apply(void 0, states),
    size: select.apply(void 0, sizes),
    itemBefore: _Mastercard || (_Mastercard = /*#__PURE__*/React.createElement(Mastercard, null)),
    customIcon: true,
    onChange: action('textfield-change'),
    onClick: action('textfield-click'),
    onFocus: action('textfield-focus'),
    onBlur: action('textfield-blur')
  }), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextField"
  })));
};
export var WithHelperText = function WithHelperText() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, {
    state: select.apply(void 0, states)
  }, /*#__PURE__*/React.createElement(TextField, {
    id: "outlined-text-field",
    label: text('Label', 'Label'),
    shape: select.apply(void 0, shapes),
    size: select.apply(void 0, sizes),
    itemBefore: _Mastercard2 || (_Mastercard2 = /*#__PURE__*/React.createElement(Mastercard, null)),
    customIcon: true,
    onChange: action('textfield-change'),
    onClick: action('textfield-click'),
    onFocus: action('textfield-focus'),
    onBlur: action('textfield-blur')
  }), _FormHelperText || (_FormHelperText = /*#__PURE__*/React.createElement(FormHelperText, null, "Helper Text"))), _ApiLink6 || (_ApiLink6 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TextField"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Text Field Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(TextFieldSkeleton, {
    shape: select.apply(void 0, shapes),
    size: select.apply(void 0, sizes),
    animate: _boolean('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "Text Field Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(TextFieldSkeleton, {
    shape: select.apply(void 0, shapes),
    size: select.apply(void 0, sizes),
    animate: _boolean('Animate', false)
  }), /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
    animate: _boolean('Animate', false)
  })));
};
var _Option, _Option2, _Option3, _ApiLink, _ApiLink2, _Phone, _Option4, _Option5, _Option6, _Option7, _ApiLink3, _Option8, _Option9, _Option10, _Option11, _ApiLink4, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import { ApiLink } from '../utils/storybook/ApiLink';
import { GridV3 as Grid, Select, Option, FormControl, FormHeading, FormHelperTextSkeleton, SelectSkeleton } from '..';
import Phone from '@backyard/icons/PhoneOutlined';
export default {
  title: '@backyard/react/Select',
  decorators: [withKnobs]
};
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
const states = ['State', {
  default: 'default',
  error: 'error',
  success: 'success'
}, 'default'];
const sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'medium'];
export const Default = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Select, {
  disabled: boolean('Disabled', false),
  defaultValue: text('Default Value', ''),
  label: text('Label', 'Label'),
  value: text('Value', 'value'),
  shape: select(...shapes),
  state: select(...states),
  size: select(...sizes),
  onChange: action('select-change'),
  onClick: action('select-click'),
  onKeyDown: action('select-key-down'),
  onFocus: action('select-focus'),
  onBlur: action('select-on-blur')
}, _Option || (_Option = /*#__PURE__*/React.createElement(Option, {
  value: "1"
}, "Option 1")), _Option2 || (_Option2 = /*#__PURE__*/React.createElement(Option, {
  value: "2"
}, "Option 2")), _Option3 || (_Option3 = /*#__PURE__*/React.createElement(Option, {
  value: "3"
}, "Option 3"))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Select"
})));
export const SelectOptions = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Select, {
  disabled: boolean('Disabled', false),
  defaultValue: text('Default Value', ''),
  label: text('Label', 'Label'),
  value: text('Value', 'value'),
  shape: select(...shapes),
  state: select(...states),
  size: select(...sizes),
  onChange: action('select-change'),
  onClick: action('select-click'),
  onKeyDown: action('select-key-down'),
  onFocus: action('select-focus'),
  onBlur: action('select-on-blur'),
  options: [{
    label: '',
    value: '0',
    hidden: true
  }, {
    label: 'Option 1',
    value: '1'
  }, {
    label: 'Option 2',
    value: '2'
  }, {
    label: 'Option 3',
    value: '3'
  }]
}), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Select"
})));
export const Icon = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Select, {
  disabled: boolean('Disabled', false),
  defaultValue: text('Default Value', ''),
  label: text('Label', 'Label'),
  value: text('Value', 'value'),
  shape: select(...shapes),
  state: select(...states),
  size: select(...sizes),
  onChange: action('select-change'),
  onClick: action('select-click'),
  onKeyDown: action('select-key-down'),
  onFocus: action('select-focus'),
  onBlur: action('select-on-blur'),
  itemBefore: _Phone || (_Phone = /*#__PURE__*/React.createElement(Phone, null))
}, _Option4 || (_Option4 = /*#__PURE__*/React.createElement(Option, {
  value: "",
  hidden: true
})), _Option5 || (_Option5 = /*#__PURE__*/React.createElement(Option, {
  value: "1"
}, "Option 1")), _Option6 || (_Option6 = /*#__PURE__*/React.createElement(Option, {
  value: "2"
}, "Option 2")), _Option7 || (_Option7 = /*#__PURE__*/React.createElement(Option, {
  value: "3"
}, "Option 3"))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Select"
})));
export const Stacked = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Select, {
  disabled: boolean('Disabled', false),
  defaultValue: text('Default Value', ''),
  label: text('Label', 'Label'),
  value: text('Value', 'value'),
  shape: select(...shapes),
  state: select(...states),
  size: select(...sizes),
  stacked: true,
  onChange: action('select-change'),
  onClick: action('select-click'),
  onKeyDown: action('select-key-down'),
  onFocus: action('select-focus'),
  onBlur: action('select-on-blur')
}, _Option8 || (_Option8 = /*#__PURE__*/React.createElement(Option, {
  value: "",
  hidden: true
})), _Option9 || (_Option9 = /*#__PURE__*/React.createElement(Option, {
  value: "1"
}, "Option 1")), _Option10 || (_Option10 = /*#__PURE__*/React.createElement(Option, {
  value: "2"
}, "Option 2")), _Option11 || (_Option11 = /*#__PURE__*/React.createElement(Option, {
  value: "3"
}, "Option 3"))), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Select"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Select Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(SelectSkeleton, {
  shape: select(...shapes),
  size: select(...sizes),
  animate: boolean('Animate', false)
})), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "Select Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(SelectSkeleton, {
  shape: select(...shapes),
  size: select(...sizes),
  animate: boolean('Animate', false)
}), /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
  animate: boolean('Animate', false)
})));
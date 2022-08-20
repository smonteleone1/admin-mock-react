var _ApiLink, _ApiLink2, _ApiLink3, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ApiLink } from '../utils/storybook/ApiLink';
import { GridV3 as Grid, TimePickerNative, TimePickerNativeSkeleton, FormControl, FormHeading, FormHelperTextSkeleton } from '../';
export default {
  title: '@backyard/react/TimePickerNative',
  decorators: [withKnobs]
};
const states = ['State', {
  default: 'default',
  error: 'error',
  success: 'success'
}, 'default'];
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
const sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large'
}, 'large'];
export const Default = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(TimePickerNative, {
  id: "default",
  label: text('Label', 'Label'),
  state: select(...states),
  shape: select(...shapes),
  onChange: action('onChange')
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TimePickerNative"
})));
export const List = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(TimePickerNative, {
  id: "list",
  label: text('Label', 'Installation Time'),
  state: select(...states),
  shape: select(...shapes),
  onChange: action('onChange'),
  time: "09:15",
  times: [{
    label: 'Morning 8:00 AM',
    value: '8:00'
  }, {
    label: 'Morning 9:15 AM',
    value: '9:15'
  }, {
    label: 'Morning 9:45 AM',
    value: '9:45',
    disabled: true
  }, {
    label: 'Morning 10:15 AM',
    value: '10:15'
  }, {
    label: 'Morning 11:15 AM',
    value: '11:15'
  }, {
    label: 'Noon 12:00 PM',
    value: '12:00'
  }, {
    label: 'Afternoon 1:15 PM',
    value: '13:15',
    disabled: true
  }, {
    label: 'Afternoon 1:45 PM',
    value: '13:45'
  }, {
    label: 'Afternoon 3:00 PM',
    value: '15:00',
    disabled: true
  }, {
    label: 'Evening 5:00 PM',
    value: '18:00'
  }, {
    label: 'Evening 5:45 PM',
    value: '18:45'
  }]
}), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TimePickerNative"
})));
export const Ranges = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(TimePickerNative, {
  id: "ranges",
  label: text('Label', 'Room Booking'),
  state: select(...states),
  shape: select(...shapes),
  onChange: action('onChange'),
  times: [{
    label: 'Morning 8:00 AM - 9:45 AM',
    start: '8:00',
    end: '9:45'
  }, {
    label: 'Morning 10:15 AM - 12:00 PM',
    start: '10:15',
    end: '12:00'
  }, {
    label: 'Afternoon 1:15 PM - 2:30 PM',
    start: '13:15',
    end: '14:30',
    disabled: true
  }, {
    label: 'Afternoon 3:00 PM - 4:15 PM',
    start: '15:00',
    end: '16:15',
    disabled: true
  }, {
    label: 'Evening 5:00 PM - 6:15 PM',
    start: '18:00',
    end: '19:15'
  }]
}), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/TimePickerNative"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "TimePickerNative Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(TimePickerNativeSkeleton, {
  shape: select(...shapes),
  size: select(...sizes),
  animate: boolean('Animate', false)
})), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "TimePickerNative Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(TimePickerNativeSkeleton, {
  shape: select(...shapes),
  size: select(...sizes),
  animate: boolean('Animate', false)
}), /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
  animate: boolean('Animate', false)
})));
var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { GridV3 as Grid, DatePickerNative, DatePickerNativeSkeleton, FormControl, FormHeading, FormHelperTextSkeleton } from '../';
import useAdapter from '../Pickers/hooks/useAdapter';
import { ApiLink } from '../utils/storybook/ApiLink';
export default {
  title: '@backyard/react/DatePickerNative',
  decorators: [withKnobs]
};
const states = ['States', {
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
}, /*#__PURE__*/React.createElement(DatePickerNative, {
  id: "default",
  label: text('Label', 'Label'),
  state: select(...states),
  shape: select(...shapes),
  onChange: action('onChange')
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePickerNative"
})));
export const Dates = () => {
  const adapter = useAdapter();
  const today = adapter.date(new Date());
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DatePickerNative, {
    id: "dates",
    label: text('Label', 'Installation Date'),
    state: select(...states),
    onChange: action('onChange'),
    shape: select(...shapes),
    date: today,
    dates: [adapter.addDays(today, -3), adapter.addDays(today, -2), adapter.addDays(today, -1), today, adapter.addDays(today, 1), adapter.addDays(today, 2), adapter.addDays(today, 3), adapter.addDays(today, 4)]
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePickerNative"
  })));
};
export const DatesAsObject = () => {
  const adapter = useAdapter();
  const today = adapter.date(new Date());
  const yesterday = adapter.addDays(today, -1);
  const tomorrow = adapter.addDays(today, 1);
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DatePickerNative, {
    id: "date-object",
    label: text('Label', 'Installation Date'),
    state: select(...states),
    onChange: action('onChange'),
    shape: select(...shapes),
    date: adapter.format(today, 'yyyy-MM-dd'),
    dates: [{
      label: `Yesterday ${adapter.format(yesterday, 'EEE MMM do, yyyy')}`,
      value: adapter.format(yesterday, 'yyyy-MM-dd')
    }, {
      label: `Today ${adapter.format(today, 'EEE MMM do, yyyy')}`,
      value: adapter.format(today, 'yyyy-MM-dd')
    }, {
      label: `Tomorrow ${adapter.format(tomorrow, 'EEE MMM do, yyyy')}`,
      value: adapter.format(tomorrow, 'yyyy-MM-dd')
    }]
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePickerNative"
  })));
};
export const DisabledDates = () => {
  const adapter = useAdapter();
  const today = adapter.date(new Date());
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(DatePickerNative, {
    id: "disabled-dates",
    label: text('Label', 'Room Booking'),
    state: select(...states),
    onChange: action('onChange'),
    shape: select(...shapes),
    min: adapter.format(adapter.addDays(today, -7), 'yyyy-MM-dd'),
    max: adapter.format(adapter.addDays(today, 7), 'yyyy-MM-dd')
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/DatePickerNative"
  })));
};
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "DatePickerNative Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(DatePickerNativeSkeleton, {
  shape: select(...shapes),
  size: select(...sizes),
  animate: boolean('Animate', false)
})), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "DatePickerNative Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(DatePickerNativeSkeleton, {
  shape: select(...shapes),
  size: select(...sizes),
  animate: boolean('Animate', false)
}), /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
  animate: boolean('Animate', false)
})));
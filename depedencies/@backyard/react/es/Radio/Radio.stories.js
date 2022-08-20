var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _ApiLink5;

import React from 'react';
import { GridV3 as Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormHelperText, RadioSkeleton } from '../';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Radio',
  decorators: [withKnobs]
};
export const DefaultRadio = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Radio, {
  id: "default-radio",
  disabled: boolean('Disabled', false),
  name: text('Name', 'name'),
  value: "value2"
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Radio"
})));
export const WithFormControlLabel = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControlLabel, {
  id: "control-label-radio",
  label: text('Label', 'Label'),
  control: /*#__PURE__*/React.createElement(Radio, {
    disabled: boolean('Disabled', false),
    name: text('Name', 'name'),
    value: "value2"
  })
}), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Radio"
})));
export const WithHelperText = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(FormControlLabel, {
  id: "helper-text-radio",
  label: text('Label', 'Label'),
  control: /*#__PURE__*/React.createElement(Radio, {
    disabled: boolean('Disabled', false),
    name: text('Name', 'name'),
    value: "value2"
  })
}), /*#__PURE__*/React.createElement(FormHelperText, null, text('HelperText', 'Helper Text'))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Radio"
})));
export const WithRadioGroup = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(RadioGroup, {
  name: "radio_group"
}, /*#__PURE__*/React.createElement(FormControlLabel, {
  id: "first-radio",
  label: text('Label', 'Label'),
  control: /*#__PURE__*/React.createElement(Radio, {
    disabled: boolean('Disabled', false),
    name: text('Name', 'name'),
    value: "value1"
  })
}), /*#__PURE__*/React.createElement(FormControlLabel, {
  id: "second-radio",
  label: text('Label', 'Label'),
  control: /*#__PURE__*/React.createElement(Radio, {
    disabled: boolean('Disabled', false),
    name: text('Name', 'name'),
    value: "value2"
  })
})), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Radio"
})));
export const WithRadioGroupAndHelperText = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(RadioGroup, {
  name: "radio_group"
}, /*#__PURE__*/React.createElement(FormControlLabel, {
  id: "first-radio",
  label: text('Label', 'Label'),
  control: /*#__PURE__*/React.createElement(Radio, {
    disabled: boolean('Disabled', false),
    name: text('Name', 'name'),
    value: "value1"
  })
}), /*#__PURE__*/React.createElement(FormControlLabel, {
  id: "second-radio",
  label: text('Label', 'Label'),
  control: /*#__PURE__*/React.createElement(Radio, {
    disabled: boolean('Disabled', false),
    name: text('Name', 'name'),
    value: "value2"
  })
})), /*#__PURE__*/React.createElement(FormHelperText, null, text('HelperText', 'Helper Text'))), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Radio"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(RadioSkeleton, {
  withLabel: boolean('withLabel', false),
  labelWidth: text('Label text width', '5rem'),
  withHelper: boolean('withHelper', false),
  helperWidth: text('Helper text width', '5rem'),
  animate: boolean('Animate', false)
}));
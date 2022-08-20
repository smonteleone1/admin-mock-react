var _ApiLink, _Option, _Option2, _Option3, _Option4, _ApiLink2, _ApiLink3, _ListOption, _ListOption2, _OptionGroup, _OptionGroup2, _ApiLink4, _FormHeading, _Option5, _Option6, _Option7, _Option8, _FormHelperText, _ApiLink5, _ApiLink6, _FormHeading2, _br, _br2, _br3, _FormHeading3, _br4;

import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { ApiLink } from '../utils/storybook/ApiLink';
import { GridV3 as Grid, Multiselect, FormControl, FormHeading, FormHelperText, Option, MultiselectSkeleton, FormHelperTextSkeleton } from '..';
import ListOption from '../ListOption';
import { OptionGroup } from '../Select';
export default {
  title: '@backyard/react/Multiselect',
  decorators: [withKnobs]
};
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
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
export const Default = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Multiselect, {
  id: "default",
  label: text('Label', 'Label'),
  state: select(...states),
  size: select(...sizes),
  shape: select(...shapes),
  onChange: action('onChange'),
  options: [{
    label: 'Option 1',
    value: '1'
  }, {
    label: 'Option 2',
    value: '2'
  }, {
    label: 'Option 3',
    value: '3'
  }, {
    label: 'Option 4',
    value: '4'
  }, {
    label: 'Option 5',
    value: '5'
  }, {
    label: 'Option 6',
    value: '6'
  }]
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Multiselect"
})));
export const DeclarativeChildren = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Multiselect, {
  id: "default",
  label: text('Label', 'Label'),
  state: select(...states),
  size: select(...sizes),
  shape: select(...shapes),
  onChange: action('onChange')
}, _Option || (_Option = /*#__PURE__*/React.createElement(Option, {
  value: "1"
}, "Option 1")), _Option2 || (_Option2 = /*#__PURE__*/React.createElement(Option, {
  value: "2"
}, "Option 2")), _Option3 || (_Option3 = /*#__PURE__*/React.createElement(Option, {
  value: "3"
}, "Option 3")), _Option4 || (_Option4 = /*#__PURE__*/React.createElement(Option, {
  value: "4"
}, "Option 4"))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Multiselect"
})));
export const WithOptionGroupOptions = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Multiselect, {
  id: "default",
  label: text('Label', 'Label'),
  state: select(...states),
  size: select(...sizes),
  shape: select(...shapes),
  onChange: action('onChange'),
  options: [{
    label: 'List Option 1',
    value: '1'
  }, {
    label: 'List Option 2',
    value: '2'
  }, {
    label: 'List Group 1',
    options: [{
      label: 'List Option 3',
      value: '3'
    }, {
      label: 'List Group 2',
      options: [{
        label: 'List Option 4',
        value: '4'
      }, {
        label: 'List Option 5',
        value: '5'
      }]
    }]
  }]
}), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Multiselect"
})));
export const WithOptionGroupsDeclarative = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Multiselect, {
  id: "default",
  label: text('Label', 'Label'),
  state: select(...states),
  size: select(...sizes),
  shape: select(...shapes),
  onChange: action('onChange')
}, _ListOption || (_ListOption = /*#__PURE__*/React.createElement(ListOption, {
  value: "1"
}, "List Option 1")), _ListOption2 || (_ListOption2 = /*#__PURE__*/React.createElement(ListOption, {
  value: "2"
}, "List Option 2")), _OptionGroup || (_OptionGroup = /*#__PURE__*/React.createElement(OptionGroup, {
  label: "List Group 1"
}, /*#__PURE__*/React.createElement(Option, {
  value: "3"
}, "List Option 3"), /*#__PURE__*/React.createElement(Option, {
  value: "4"
}, "List Option 4"))), _OptionGroup2 || (_OptionGroup2 = /*#__PURE__*/React.createElement(OptionGroup, {
  label: "List Group 2"
}, /*#__PURE__*/React.createElement(Option, {
  value: "5"
}, "List Option 5"), /*#__PURE__*/React.createElement(Option, {
  value: "6"
}, "List Option 6")))), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Multiselect"
})));
export const WithFormControl = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Heading")), /*#__PURE__*/React.createElement(Multiselect, {
  id: "default",
  label: text('Label', 'Label'),
  state: select(...states),
  size: select(...sizes),
  shape: select(...shapes),
  onChange: action('onChange')
}, _Option5 || (_Option5 = /*#__PURE__*/React.createElement(Option, {
  value: "1"
}, "Option 1")), _Option6 || (_Option6 = /*#__PURE__*/React.createElement(Option, {
  value: "2"
}, "Option 2")), _Option7 || (_Option7 = /*#__PURE__*/React.createElement(Option, {
  value: "3"
}, "Option 3")), _Option8 || (_Option8 = /*#__PURE__*/React.createElement(Option, {
  value: "4"
}, "Option 4"))), _FormHelperText || (_FormHelperText = /*#__PURE__*/React.createElement(FormHelperText, null, "Helper Text"))), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Multiselect"
})));
export const ManyOptions = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Multiselect, {
  id: "defaut",
  label: text('Label', 'Label'),
  state: select(...states),
  size: select(...sizes),
  shape: select(...shapes),
  onChange: action('onChange'),
  options: [...new Array(20)].map((_, index) => ({
    label: `Option ${index + 1}`,
    value: `${index + 1}`
  }))
}), _ApiLink6 || (_ApiLink6 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Multiselect"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "Multiselect Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(MultiselectSkeleton, {
  shape: select(...shapes),
  size: select(...sizes),
  animate: boolean('Animate', false)
})), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading3 || (_FormHeading3 = /*#__PURE__*/React.createElement(FormHeading, null, "Multiselect Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(MultiselectSkeleton, {
  shape: select(...shapes),
  size: select(...sizes),
  animate: boolean('Animate', false)
}), /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
  animate: boolean('Animate', false)
})));
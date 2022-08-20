import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

var _ApiLink, _Option, _Option2, _Option3, _Option4, _ApiLink2, _FormHeading, _Option5, _Option6, _Option7, _Option8, _FormHelperText, _ApiLink3, _ApiLink4, _ApiLink5, _FormHeading2, _br, _br2, _br3, _FormHeading3, _br4;

import React from 'react';
import { withKnobs, text, select, boolean as _boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Info from '@backyard/icons/InfoOutlined';
import { ApiLink } from '../utils/storybook/ApiLink';
import { GridV3 as Grid, Dropdown, FormControl, FormHeading, FormHelperText, Option, DropdownSkeleton, FormHelperTextSkeleton } from '../';
export default {
  title: '@backyard/react/Dropdown',
  decorators: [withKnobs]
};
var variants = ['Variant', {
  outlined: 'outlined',
  filled: 'filled'
}, 'outlined'];
var states = ['State', {
  "default": 'default',
  error: 'error'
}, 'default'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo,'
}, 'large'];
export var Default = function Default() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Dropdown, {
    label: text('Label', 'Label'),
    state: select.apply(void 0, states),
    sizes: select.apply(void 0, sizes),
    onChange: action('onChange'),
    shape: select.apply(void 0, shapes),
    disabled: _boolean('Disabled', false),
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
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Dropdown"
  })));
};
export var DeclarativeChildren = function DeclarativeChildren() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Dropdown, {
    label: text('Label', 'Label'),
    state: select.apply(void 0, states),
    shape: select.apply(void 0, shapes),
    disabled: _boolean('Disabled', false),
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
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Dropdown"
  })));
};
export var WithFormControl = function WithFormControl() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Heading")), /*#__PURE__*/React.createElement(Dropdown, {
    label: text('Label', 'Label'),
    state: select.apply(void 0, states),
    shape: select.apply(void 0, shapes),
    disabled: _boolean('Disabled', false),
    onChange: action('onChange')
  }, _Option5 || (_Option5 = /*#__PURE__*/React.createElement(Option, {
    value: "1"
  }, "Option 1")), _Option6 || (_Option6 = /*#__PURE__*/React.createElement(Option, {
    value: "2"
  }, "Option 2")), _Option7 || (_Option7 = /*#__PURE__*/React.createElement(Option, {
    value: "3"
  }, "Option 3")), _Option8 || (_Option8 = /*#__PURE__*/React.createElement(Option, {
    value: "4"
  }, "Option 4"))), _FormHelperText || (_FormHelperText = /*#__PURE__*/React.createElement(FormHelperText, {
    icon: /*#__PURE__*/React.createElement(Info, null)
  }, "Helper Text"))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Dropdown"
  })));
};
export var ManyOptions = function ManyOptions() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Dropdown, {
    label: text('Label', 'Label'),
    state: select.apply(void 0, states),
    shape: select.apply(void 0, shapes),
    disabled: _boolean('Disabled', false),
    onChange: action('onChange'),
    options: _toConsumableArray(new Array(20)).map(function (_, index) {
      return {
        label: "".concat(index + 1),
        value: "".concat(index + 1)
      };
    })
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Dropdown"
  })));
};
export var Stacked = function Stacked() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Dropdown, {
    id: "stacked-dropdown",
    label: text('Label', 'Sort By'),
    state: select.apply(void 0, states),
    sizes: select.apply(void 0, sizes),
    onChange: action('onChange'),
    shape: select.apply(void 0, shapes),
    stacked: _boolean('Stacked', true),
    disabled: _boolean('Disabled', false),
    options: [{
      label: 'Featured',
      value: '1'
    }, {
      label: 'Best Sellers',
      value: '2'
    }, {
      label: 'Highest Rated',
      value: '3'
    }, {
      label: 'New Arrivals',
      value: '4'
    }]
  }), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Dropdown"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "Dropdown Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(DropdownSkeleton, {
    shape: select.apply(void 0, shapes),
    animate: _boolean('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading3 || (_FormHeading3 = /*#__PURE__*/React.createElement(FormHeading, null, "Dropdown Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(DropdownSkeleton, {
    shape: select.apply(void 0, shapes),
    animate: _boolean('Animate', false)
  }), /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
    animate: _boolean('Animate', false)
  })));
};
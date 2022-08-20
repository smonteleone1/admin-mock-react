"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithFormControl = exports.Stacked = exports.Skeleton = exports.ManyOptions = exports.Default = exports.DeclarativeChildren = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _InfoOutlined = _interopRequireDefault(require("@backyard/icons/InfoOutlined"));

var _ApiLink6 = require("../utils/storybook/ApiLink");

var _2 = require("../");

var _ApiLink, _Option, _Option2, _Option3, _Option4, _ApiLink2, _FormHeading, _Option5, _Option6, _Option7, _Option8, _FormHelperText, _ApiLink3, _ApiLink4, _ApiLink5, _FormHeading2, _br, _br2, _br3, _FormHeading3, _br4;

var _default = {
  title: '@backyard/react/Dropdown',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
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

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Dropdown, {
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    sizes: _addonKnobs.select.apply(void 0, sizes),
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
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
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Dropdown"
  })));
};

exports.Default = Default;

var DeclarativeChildren = function DeclarativeChildren() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Dropdown, {
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    onChange: (0, _addonActions.action)('onChange')
  }, _Option || (_Option = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "1"
  }, "Option 1")), _Option2 || (_Option2 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "2"
  }, "Option 2")), _Option3 || (_Option3 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "3"
  }, "Option 3")), _Option4 || (_Option4 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "4"
  }, "Option 4"))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Dropdown"
  })));
};

exports.DeclarativeChildren = DeclarativeChildren;

var WithFormControl = function WithFormControl() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_2.FormHeading, null, "Heading")), /*#__PURE__*/_react["default"].createElement(_2.Dropdown, {
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    onChange: (0, _addonActions.action)('onChange')
  }, _Option5 || (_Option5 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "1"
  }, "Option 1")), _Option6 || (_Option6 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "2"
  }, "Option 2")), _Option7 || (_Option7 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "3"
  }, "Option 3")), _Option8 || (_Option8 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "4"
  }, "Option 4"))), _FormHelperText || (_FormHelperText = /*#__PURE__*/_react["default"].createElement(_2.FormHelperText, {
    icon: /*#__PURE__*/_react["default"].createElement(_InfoOutlined["default"], null)
  }, "Helper Text"))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Dropdown"
  })));
};

exports.WithFormControl = WithFormControl;

var ManyOptions = function ManyOptions() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Dropdown, {
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    shape: _addonKnobs.select.apply(void 0, shapes),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    onChange: (0, _addonActions.action)('onChange'),
    options: (0, _toConsumableArray2["default"])(new Array(20)).map(function (_, index) {
      return {
        label: "".concat(index + 1),
        value: "".concat(index + 1)
      };
    })
  }), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Dropdown"
  })));
};

exports.ManyOptions = ManyOptions;

var Stacked = function Stacked() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Dropdown, {
    id: "stacked-dropdown",
    label: (0, _addonKnobs.text)('Label', 'Sort By'),
    state: _addonKnobs.select.apply(void 0, states),
    sizes: _addonKnobs.select.apply(void 0, sizes),
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    stacked: (0, _addonKnobs["boolean"])('Stacked', true),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
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
  }), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Dropdown"
  })));
};

exports.Stacked = Stacked;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_2.FormHeading, null, "Dropdown Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_2.DropdownSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_2.FormControl, null, _FormHeading3 || (_FormHeading3 = /*#__PURE__*/_react["default"].createElement(_2.FormHeading, null, "Dropdown Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_2.DropdownSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }), /*#__PURE__*/_react["default"].createElement(_2.FormHelperTextSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;
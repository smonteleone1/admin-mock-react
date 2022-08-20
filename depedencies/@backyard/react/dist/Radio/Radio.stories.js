"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithRadioGroupAndHelperText = exports.WithRadioGroup = exports.WithHelperText = exports.WithFormControlLabel = exports.Skeleton = exports.DefaultRadio = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ApiLink6 = require("../utils/storybook/ApiLink");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _ApiLink5;

var _default = {
  title: '@backyard/react/Radio',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;

var DefaultRadio = function DefaultRadio() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Radio, {
    id: "default-radio",
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    name: (0, _addonKnobs.text)('Name', 'name'),
    value: "value2"
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Radio"
  })));
};

exports.DefaultRadio = DefaultRadio;

var WithFormControlLabel = function WithFormControlLabel() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControlLabel, {
    id: "control-label-radio",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    control: /*#__PURE__*/_react["default"].createElement(_.Radio, {
      disabled: (0, _addonKnobs["boolean"])('Disabled', false),
      name: (0, _addonKnobs.text)('Name', 'name'),
      value: "value2"
    })
  }), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Radio"
  })));
};

exports.WithFormControlLabel = WithFormControlLabel;

var WithHelperText = function WithHelperText() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, /*#__PURE__*/_react["default"].createElement(_.FormControlLabel, {
    id: "helper-text-radio",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    control: /*#__PURE__*/_react["default"].createElement(_.Radio, {
      disabled: (0, _addonKnobs["boolean"])('Disabled', false),
      name: (0, _addonKnobs.text)('Name', 'name'),
      value: "value2"
    })
  }), /*#__PURE__*/_react["default"].createElement(_.FormHelperText, null, (0, _addonKnobs.text)('HelperText', 'Helper Text'))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Radio"
  })));
};

exports.WithHelperText = WithHelperText;

var WithRadioGroup = function WithRadioGroup() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.RadioGroup, {
    name: "radio_group"
  }, /*#__PURE__*/_react["default"].createElement(_.FormControlLabel, {
    id: "first-radio",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    control: /*#__PURE__*/_react["default"].createElement(_.Radio, {
      disabled: (0, _addonKnobs["boolean"])('Disabled', false),
      name: (0, _addonKnobs.text)('Name', 'name'),
      value: "value1"
    })
  }), /*#__PURE__*/_react["default"].createElement(_.FormControlLabel, {
    id: "second-radio",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    control: /*#__PURE__*/_react["default"].createElement(_.Radio, {
      disabled: (0, _addonKnobs["boolean"])('Disabled', false),
      name: (0, _addonKnobs.text)('Name', 'name'),
      value: "value2"
    })
  })), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Radio"
  })));
};

exports.WithRadioGroup = WithRadioGroup;

var WithRadioGroupAndHelperText = function WithRadioGroupAndHelperText() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.FormControl, null, /*#__PURE__*/_react["default"].createElement(_.RadioGroup, {
    name: "radio_group"
  }, /*#__PURE__*/_react["default"].createElement(_.FormControlLabel, {
    id: "first-radio",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    control: /*#__PURE__*/_react["default"].createElement(_.Radio, {
      disabled: (0, _addonKnobs["boolean"])('Disabled', false),
      name: (0, _addonKnobs.text)('Name', 'name'),
      value: "value1"
    })
  }), /*#__PURE__*/_react["default"].createElement(_.FormControlLabel, {
    id: "second-radio",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    control: /*#__PURE__*/_react["default"].createElement(_.Radio, {
      disabled: (0, _addonKnobs["boolean"])('Disabled', false),
      name: (0, _addonKnobs.text)('Name', 'name'),
      value: "value2"
    })
  })), /*#__PURE__*/_react["default"].createElement(_.FormHelperText, null, (0, _addonKnobs.text)('HelperText', 'Helper Text'))), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/_react["default"].createElement(_ApiLink6.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Radio"
  })));
};

exports.WithRadioGroupAndHelperText = WithRadioGroupAndHelperText;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.RadioSkeleton, {
    withLabel: (0, _addonKnobs["boolean"])('withLabel', false),
    labelWidth: (0, _addonKnobs.text)('Label text width', '5rem'),
    withHelper: (0, _addonKnobs["boolean"])('withHelper', false),
    helperWidth: (0, _addonKnobs.text)('Helper text width', '5rem'),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }));
};

exports.Skeleton = Skeleton;
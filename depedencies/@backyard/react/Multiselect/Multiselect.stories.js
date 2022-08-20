"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WithOptionGroupsDeclarative = exports.WithOptionGroupOptions = exports.WithFormControl = exports.Skeleton = exports.ManyOptions = exports.Default = exports.DeclarativeChildren = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _ApiLink7 = require("../utils/storybook/ApiLink");

var _2 = require("..");

var _ListOption3 = _interopRequireDefault(require("../ListOption"));

var _Select = require("../Select");

var _ApiLink, _Option, _Option2, _Option3, _Option4, _ApiLink2, _ApiLink3, _ListOption, _ListOption2, _OptionGroup, _OptionGroup2, _ApiLink4, _FormHeading, _Option5, _Option6, _Option7, _Option8, _FormHelperText, _ApiLink5, _ApiLink6, _FormHeading2, _br, _br2, _br3, _FormHeading3, _br4;

var _default = {
  title: '@backyard/react/Multiselect',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var states = ['State', {
  "default": 'default',
  error: 'error',
  success: 'success'
}, 'default'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'medium'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];

var Default = function Default() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Multiselect, {
    id: "default",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    shape: _addonKnobs.select.apply(void 0, shapes),
    onChange: (0, _addonActions.action)('onChange'),
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
  }), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Multiselect"
  })));
};

exports.Default = Default;

var DeclarativeChildren = function DeclarativeChildren() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Multiselect, {
    id: "default",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    shape: _addonKnobs.select.apply(void 0, shapes),
    onChange: (0, _addonActions.action)('onChange')
  }, _Option || (_Option = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "1"
  }, "Option 1")), _Option2 || (_Option2 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "2"
  }, "Option 2")), _Option3 || (_Option3 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "3"
  }, "Option 3")), _Option4 || (_Option4 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "4"
  }, "Option 4"))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Multiselect"
  })));
};

exports.DeclarativeChildren = DeclarativeChildren;

var WithOptionGroupOptions = function WithOptionGroupOptions() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Multiselect, {
    id: "default",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    shape: _addonKnobs.select.apply(void 0, shapes),
    onChange: (0, _addonActions.action)('onChange'),
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
  }), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Multiselect"
  })));
};

exports.WithOptionGroupOptions = WithOptionGroupOptions;

var WithOptionGroupsDeclarative = function WithOptionGroupsDeclarative() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Multiselect, {
    id: "default",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    shape: _addonKnobs.select.apply(void 0, shapes),
    onChange: (0, _addonActions.action)('onChange')
  }, _ListOption || (_ListOption = /*#__PURE__*/_react["default"].createElement(_ListOption3["default"], {
    value: "1"
  }, "List Option 1")), _ListOption2 || (_ListOption2 = /*#__PURE__*/_react["default"].createElement(_ListOption3["default"], {
    value: "2"
  }, "List Option 2")), _OptionGroup || (_OptionGroup = /*#__PURE__*/_react["default"].createElement(_Select.OptionGroup, {
    label: "List Group 1"
  }, /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "3"
  }, "List Option 3"), /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "4"
  }, "List Option 4"))), _OptionGroup2 || (_OptionGroup2 = /*#__PURE__*/_react["default"].createElement(_Select.OptionGroup, {
    label: "List Group 2"
  }, /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "5"
  }, "List Option 5"), /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "6"
  }, "List Option 6")))), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Multiselect"
  })));
};

exports.WithOptionGroupsDeclarative = WithOptionGroupsDeclarative;

var WithFormControl = function WithFormControl() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/_react["default"].createElement(_2.FormHeading, null, "Heading")), /*#__PURE__*/_react["default"].createElement(_2.Multiselect, {
    id: "default",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    shape: _addonKnobs.select.apply(void 0, shapes),
    onChange: (0, _addonActions.action)('onChange')
  }, _Option5 || (_Option5 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "1"
  }, "Option 1")), _Option6 || (_Option6 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "2"
  }, "Option 2")), _Option7 || (_Option7 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "3"
  }, "Option 3")), _Option8 || (_Option8 = /*#__PURE__*/_react["default"].createElement(_2.Option, {
    value: "4"
  }, "Option 4"))), _FormHelperText || (_FormHelperText = /*#__PURE__*/_react["default"].createElement(_2.FormHelperText, null, "Helper Text"))), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Multiselect"
  })));
};

exports.WithFormControl = WithFormControl;

var ManyOptions = function ManyOptions() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.Multiselect, {
    id: "defaut",
    label: (0, _addonKnobs.text)('Label', 'Label'),
    state: _addonKnobs.select.apply(void 0, states),
    size: _addonKnobs.select.apply(void 0, sizes),
    shape: _addonKnobs.select.apply(void 0, shapes),
    onChange: (0, _addonActions.action)('onChange'),
    options: (0, _toConsumableArray2["default"])(new Array(20)).map(function (_, index) {
      return {
        label: "Option ".concat(index + 1),
        value: "".concat(index + 1)
      };
    })
  }), _ApiLink6 || (_ApiLink6 = /*#__PURE__*/_react["default"].createElement(_ApiLink7.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Multiselect"
  })));
};

exports.ManyOptions = ManyOptions;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_2.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_2.FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/_react["default"].createElement(_2.FormHeading, null, "Multiselect Skeleton")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_2.MultiselectSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_2.FormControl, null, _FormHeading3 || (_FormHeading3 = /*#__PURE__*/_react["default"].createElement(_2.FormHeading, null, "Multiselect Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_2.MultiselectSkeleton, {
    shape: _addonKnobs.select.apply(void 0, shapes),
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  }), /*#__PURE__*/_react["default"].createElement(_2.FormHelperTextSkeleton, {
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  })));
};

exports.Skeleton = Skeleton;
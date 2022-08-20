"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tertiary = exports.Skeleton = exports.Secondary = exports.Primary = exports.Inverse = exports.IconBefore = exports.IconAfter = exports.Ghost = exports.FormSubmit = void 0;

var _react = _interopRequireDefault(require("react"));

var _ = require("../");

var _ChevronLeft2 = _interopRequireDefault(require("@backyard/icons/ChevronLeft"));

var _ChevronRight2 = _interopRequireDefault(require("@backyard/icons/ChevronRight"));

var _ApiLink9 = require("../utils/storybook/ApiLink");

var _addonActions = require("@storybook/addon-actions");

var _addonKnobs = require("@storybook/addon-knobs");

var _ApiLink, _ApiLink2, _ApiLink3, _ApiLink4, _ApiLink5, _ChevronLeft, _ApiLink6, _ChevronRight, _ApiLink7, _ApiLink8;

var _default = {
  title: '@backyard/react/Button',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var colors = ['Color', {
  interactive: 'interactive',
  green: 'green',
  red: 'red',
  neutral: 'neutral'
}, 'interactive'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
}, 'medium'];
var types = ['Type', {
  button: 'button',
  submit: 'submit',
  reset: 'reset'
}, 'button'];
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared',
  circle: 'circle'
}, 'rounded'];
var variants = ['Variant', {
  primary: 'primary',
  secondary: 'secondary',
  ghost: 'ghost',
  tertiary: 'tertiary',
  inverse: 'inverse'
}, 'primary'];

var Primary = function Primary() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "primary",
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes),
    fullWidth: (0, _addonKnobs["boolean"])('Full-Width', false),
    elevation: (0, _addonKnobs["boolean"])('Elevation', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    type: _addonKnobs.select.apply(void 0, types),
    onClick: (0, _addonActions.action)('button-clicked'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, (0, _addonKnobs.text)('Label', 'Sign In')), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink9.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};

exports.Primary = Primary;

var Secondary = function Secondary() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "secondary",
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes),
    fullWidth: (0, _addonKnobs["boolean"])('Full-Width', false),
    elevation: (0, _addonKnobs["boolean"])('Elevation', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    type: _addonKnobs.select.apply(void 0, types),
    onClick: (0, _addonActions.action)('button-clicked'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, (0, _addonKnobs.text)('Label', 'Sign In')), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink9.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};

exports.Secondary = Secondary;

var Tertiary = function Tertiary() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "tertiary",
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes),
    fullWidth: (0, _addonKnobs["boolean"])('Full-Width', false),
    elevation: (0, _addonKnobs["boolean"])('Elevation', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    type: _addonKnobs.select.apply(void 0, types),
    onClick: (0, _addonActions.action)('button-clicked'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, (0, _addonKnobs.text)('Label', 'Sign In')), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink9.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};

exports.Tertiary = Tertiary;

var Ghost = function Ghost() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "ghost",
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes),
    fullWidth: (0, _addonKnobs["boolean"])('Full-Width', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    type: _addonKnobs.select.apply(void 0, types),
    onClick: (0, _addonActions.action)('button-clicked'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, (0, _addonKnobs.text)('Label', 'Sign In')), _ApiLink4 || (_ApiLink4 = /*#__PURE__*/_react["default"].createElement(_ApiLink9.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};

exports.Ghost = Ghost;

var Inverse = function Inverse() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement("span", {
    style: {
      padding: '3rem',
      backgroundColor: 'var(--bds-color-surface-blue',
      display: 'inline-flex',
      alignItems: 'center',
      marginTop: '-3rem',
      marginLeft: '-3rem'
    }
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: "inverse",
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes),
    fullWidth: (0, _addonKnobs["boolean"])('Full-Width', false),
    elevation: (0, _addonKnobs["boolean"])('Elevation', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    type: _addonKnobs.select.apply(void 0, types),
    onClick: (0, _addonActions.action)('button-clicked'),
    onFocus: (0, _addonActions.action)('button-focus')
  }, (0, _addonKnobs.text)('Label', 'Sign In'))), _ApiLink5 || (_ApiLink5 = /*#__PURE__*/_react["default"].createElement(_ApiLink9.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};

exports.Inverse = Inverse;

var IconBefore = function IconBefore() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: _addonKnobs.select.apply(void 0, variants),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes),
    fullWidth: (0, _addonKnobs["boolean"])('Full-Width', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    type: _addonKnobs.select.apply(void 0, types),
    onClick: (0, _addonActions.action)('button-clicked'),
    onFocus: (0, _addonActions.action)('button-focus'),
    iconBefore: _ChevronLeft || (_ChevronLeft = /*#__PURE__*/_react["default"].createElement(_ChevronLeft2["default"], {
      size: "size_20"
    }))
  }, (0, _addonKnobs.text)('Label', 'Back')), _ApiLink6 || (_ApiLink6 = /*#__PURE__*/_react["default"].createElement(_ApiLink9.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};

exports.IconBefore = IconBefore;

var IconAfter = function IconAfter() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: _addonKnobs.select.apply(void 0, variants),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes),
    fullWidth: (0, _addonKnobs["boolean"])('Full-Width', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    type: _addonKnobs.select.apply(void 0, types),
    onClick: (0, _addonActions.action)('button-clicked'),
    onFocus: (0, _addonActions.action)('button-focus'),
    iconAfter: _ChevronRight || (_ChevronRight = /*#__PURE__*/_react["default"].createElement(_ChevronRight2["default"], null))
  }, (0, _addonKnobs.text)('Label', 'Continue')), _ApiLink7 || (_ApiLink7 = /*#__PURE__*/_react["default"].createElement(_ApiLink9.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};

exports.IconAfter = IconAfter;

var FormSubmit = function FormSubmit() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement("form", {
    action: "/?path=/story/button--form-submit",
    method: "get"
  }, /*#__PURE__*/_react["default"].createElement(_.Button, {
    variant: _addonKnobs.select.apply(void 0, variants),
    disabled: (0, _addonKnobs["boolean"])('Disabled', false),
    color: _addonKnobs.select.apply(void 0, colors),
    size: _addonKnobs.select.apply(void 0, sizes),
    fullWidth: (0, _addonKnobs["boolean"])('Full-Width', false),
    shape: _addonKnobs.select.apply(void 0, shapes),
    type: _addonKnobs.select.apply(void 0, types)
  }, (0, _addonKnobs.text)('Label', 'Submit'))), _ApiLink8 || (_ApiLink8 = /*#__PURE__*/_react["default"].createElement(_ApiLink9.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Button"
  })));
};

exports.FormSubmit = FormSubmit;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/_react["default"].createElement(_.ButtonSkeleton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    animate: (0, _addonKnobs["boolean"])('Animate', false),
    fullWidth: (0, _addonKnobs["boolean"])('Full-Width', false),
    width: (0, _addonKnobs.text)('Width', null)
  }));
};

exports.Skeleton = Skeleton;
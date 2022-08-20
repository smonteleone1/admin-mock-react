"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ToggleMultiple = exports.ToggleExclusive = exports.ToggleEnforceSelected = exports.Skeleton = void 0;

var _react = _interopRequireDefault(require("react"));

var _addonKnobs = require("@storybook/addon-knobs");

var _addonActions = require("@storybook/addon-actions");

var _ListView7 = _interopRequireDefault(require("@backyard/icons/ListView"));

var _GridViewFilled7 = _interopRequireDefault(require("@backyard/icons/GridViewFilled"));

var _AppsFilled7 = _interopRequireDefault(require("@backyard/icons/AppsFilled"));

var _ApiLink4 = require("../utils/storybook/ApiLink");

var _ = require("../");

var _Typography, _br, _ListView, _GridViewFilled, _AppsFilled, _br2, _br3, _Typography2, _br4, _ListView2, _GridViewFilled2, _AppsFilled2, _ApiLink, _Typography3, _br5, _ListView3, _GridViewFilled3, _AppsFilled3, _br6, _br7, _Typography4, _br8, _ListView4, _GridViewFilled4, _AppsFilled4, _ApiLink2, _Typography5, _Typography6, _br9, _br10, _ListView5, _GridViewFilled5, _AppsFilled5, _br11, _br12, _Typography7, _br13, _ListView6, _GridViewFilled6, _AppsFilled6, _ApiLink3;

var _default = {
  title: '@backyard/react/Toggle',
  decorators: [_addonKnobs.withKnobs]
};
exports["default"] = _default;
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large'
}, 'medium'];

var ToggleMultiple = function ToggleMultiple() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, _Typography || (_Typography = /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h3"
  }, "Without Default Value")), _br || (_br = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.Toggle, {
    enforceSelected: (0, _addonKnobs["boolean"])('Enforce Active', false),
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    variant: "secondary"
  }, /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "list",
    onSelect: (0, _addonActions.action)('onSelect (list)'),
    onDeselect: (0, _addonActions.action)('onDeselect (list)'),
    onClick: (0, _addonActions.action)('onClick (list)'),
    size: "small"
  }, _ListView || (_ListView = /*#__PURE__*/_react["default"].createElement(_ListView7["default"], null))), /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "grid-large",
    onSelect: (0, _addonActions.action)('onSelect (grid-large)'),
    onDeselect: (0, _addonActions.action)('onDeselect (grid-large)'),
    onClick: (0, _addonActions.action)('onClick (grid-large)'),
    size: "small"
  }, _GridViewFilled || (_GridViewFilled = /*#__PURE__*/_react["default"].createElement(_GridViewFilled7["default"], null))), /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "grid-small",
    onSelect: (0, _addonActions.action)('onSelect (grid-small)'),
    onDeselect: (0, _addonActions.action)('onDeselect (grid-small)'),
    onClick: (0, _addonActions.action)('onClick (grid-small)'),
    size: "small"
  }, _AppsFilled || (_AppsFilled = /*#__PURE__*/_react["default"].createElement(_AppsFilled7["default"], null)))), _br2 || (_br2 = /*#__PURE__*/_react["default"].createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/_react["default"].createElement("br", null)), _Typography2 || (_Typography2 = /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h3"
  }, "With Default Value")), _br4 || (_br4 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.Toggle, {
    enforceSelected: (0, _addonKnobs["boolean"])('Enforce Active', false),
    defaultValue: ['list', 'grid-small'],
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    variant: "secondary"
  }, /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "list",
    onSelect: (0, _addonActions.action)('onSelect (list)'),
    onDeselect: (0, _addonActions.action)('onDeselect (list)'),
    onClick: (0, _addonActions.action)('onClick (list)'),
    size: "small"
  }, _ListView2 || (_ListView2 = /*#__PURE__*/_react["default"].createElement(_ListView7["default"], null))), /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "grid-large",
    onSelect: (0, _addonActions.action)('onSelect (grid-large)'),
    onDeselect: (0, _addonActions.action)('onDeselect (grid-large)'),
    onClick: (0, _addonActions.action)('onClick (grid-large)'),
    size: "small"
  }, _GridViewFilled2 || (_GridViewFilled2 = /*#__PURE__*/_react["default"].createElement(_GridViewFilled7["default"], null))), /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "grid-small",
    onSelect: (0, _addonActions.action)('onSelect (grid-small)'),
    onDeselect: (0, _addonActions.action)('onDeselect (grid-small)'),
    onClick: (0, _addonActions.action)('onClick (grid-small)'),
    size: "small"
  }, _AppsFilled2 || (_AppsFilled2 = /*#__PURE__*/_react["default"].createElement(_AppsFilled7["default"], null)))), _ApiLink || (_ApiLink = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Toggle"
  })));
};

exports.ToggleMultiple = ToggleMultiple;

var ToggleExclusive = function ToggleExclusive() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, _Typography3 || (_Typography3 = /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h3"
  }, "Without Default Value")), _br5 || (_br5 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.Toggle, {
    exclusive: (0, _addonKnobs["boolean"])('Exclusive', true),
    enforceSelected: (0, _addonKnobs["boolean"])('Enforce Active', false),
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    variant: "secondary"
  }, /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "list",
    onSelect: (0, _addonActions.action)('onSelect (list)'),
    onDeselect: (0, _addonActions.action)('onDeselect (list)'),
    onClick: (0, _addonActions.action)('onClick (list)'),
    size: "small"
  }, _ListView3 || (_ListView3 = /*#__PURE__*/_react["default"].createElement(_ListView7["default"], null))), /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "grid-large",
    onSelect: (0, _addonActions.action)('onSelect (grid-large)'),
    onDeselect: (0, _addonActions.action)('onDeselect (grid-large)'),
    onClick: (0, _addonActions.action)('onClick (grid-large)'),
    size: "small"
  }, _GridViewFilled3 || (_GridViewFilled3 = /*#__PURE__*/_react["default"].createElement(_GridViewFilled7["default"], null))), /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "grid-small",
    onSelect: (0, _addonActions.action)('onSelect (grid-small)'),
    onDeselect: (0, _addonActions.action)('onDeselect (grid-small)'),
    onClick: (0, _addonActions.action)('onClick (grid-small)'),
    size: "small"
  }, _AppsFilled3 || (_AppsFilled3 = /*#__PURE__*/_react["default"].createElement(_AppsFilled7["default"], null)))), _br6 || (_br6 = /*#__PURE__*/_react["default"].createElement("br", null)), _br7 || (_br7 = /*#__PURE__*/_react["default"].createElement("br", null)), _Typography4 || (_Typography4 = /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h3"
  }, "With Default Value")), _br8 || (_br8 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.Toggle, {
    exclusive: (0, _addonKnobs["boolean"])('Exclusive', true),
    enforceSelected: (0, _addonKnobs["boolean"])('Enforce Active', false),
    defaultValue: "grid-large",
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes),
    variant: "secondary",
    size: "small"
  }, /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "list",
    onSelect: (0, _addonActions.action)('onSelect (list)'),
    onDeselect: (0, _addonActions.action)('onDeselect (list)'),
    onClick: (0, _addonActions.action)('onClick (list)'),
    size: "small"
  }, _ListView4 || (_ListView4 = /*#__PURE__*/_react["default"].createElement(_ListView7["default"], null))), /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "grid-large",
    onSelect: (0, _addonActions.action)('onSelect (grid-large)'),
    onDeselect: (0, _addonActions.action)('onDeselect (grid-large)'),
    onClick: (0, _addonActions.action)('onClick (grid-large)'),
    size: "small"
  }, _GridViewFilled4 || (_GridViewFilled4 = /*#__PURE__*/_react["default"].createElement(_GridViewFilled7["default"], null))), /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "grid-small",
    onSelect: (0, _addonActions.action)('onSelect (grid-small)'),
    onDeselect: (0, _addonActions.action)('onDeselect (grid-small)'),
    onClick: (0, _addonActions.action)('onClick (grid-small)'),
    size: "small"
  }, _AppsFilled4 || (_AppsFilled4 = /*#__PURE__*/_react["default"].createElement(_AppsFilled7["default"], null)))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Toggle"
  })));
};

exports.ToggleExclusive = ToggleExclusive;

var ToggleEnforceSelected = function ToggleEnforceSelected() {
  return /*#__PURE__*/_react["default"].createElement(_.GridV3.Column, {
    start: 6,
    end: 12
  }, _Typography5 || (_Typography5 = /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h3"
  }, "Without Default Value")), _Typography6 || (_Typography6 = /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "caption"
  }, "`enforceSelected` automatically selects the first button if no default is defined")), _br9 || (_br9 = /*#__PURE__*/_react["default"].createElement("br", null)), _br10 || (_br10 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.Toggle, {
    variant: "secondary",
    exclusive: (0, _addonKnobs["boolean"])('Exclusive', true),
    enforceSelected: (0, _addonKnobs["boolean"])('Enforce Active', true),
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "list",
    onSelect: (0, _addonActions.action)('onSelect (list)'),
    onDeselect: (0, _addonActions.action)('onDeselect (list)'),
    onClick: (0, _addonActions.action)('onClick (list)'),
    size: "small"
  }, _ListView5 || (_ListView5 = /*#__PURE__*/_react["default"].createElement(_ListView7["default"], null))), /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "grid-large",
    onSelect: (0, _addonActions.action)('onSelect (grid-large)'),
    onDeselect: (0, _addonActions.action)('onDeselect (grid-large)'),
    onClick: (0, _addonActions.action)('onClick (grid-large)'),
    size: "small"
  }, _GridViewFilled5 || (_GridViewFilled5 = /*#__PURE__*/_react["default"].createElement(_GridViewFilled7["default"], null))), /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "grid-small",
    onSelect: (0, _addonActions.action)('onSelect (grid-small)'),
    onDeselect: (0, _addonActions.action)('onDeselect (grid-small)'),
    onClick: (0, _addonActions.action)('onClick (grid-small)'),
    size: "small"
  }, _AppsFilled5 || (_AppsFilled5 = /*#__PURE__*/_react["default"].createElement(_AppsFilled7["default"], null)))), _br11 || (_br11 = /*#__PURE__*/_react["default"].createElement("br", null)), _br12 || (_br12 = /*#__PURE__*/_react["default"].createElement("br", null)), _Typography7 || (_Typography7 = /*#__PURE__*/_react["default"].createElement(_.Typography, {
    variant: "h3"
  }, "With Default Value")), _br13 || (_br13 = /*#__PURE__*/_react["default"].createElement("br", null)), /*#__PURE__*/_react["default"].createElement(_.Toggle, {
    variant: "secondary",
    exclusive: (0, _addonKnobs["boolean"])('Exclusive', true),
    enforceSelected: (0, _addonKnobs["boolean"])('Enforce Active', true),
    defaultValue: "grid-small",
    onChange: (0, _addonActions.action)('onChange'),
    shape: _addonKnobs.select.apply(void 0, shapes)
  }, /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "list",
    onSelect: (0, _addonActions.action)('onSelect (list)'),
    onDeselect: (0, _addonActions.action)('onDeselect (list)'),
    onClick: (0, _addonActions.action)('onClick (list)'),
    size: "small"
  }, _ListView6 || (_ListView6 = /*#__PURE__*/_react["default"].createElement(_ListView7["default"], null))), /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "grid-large",
    onSelect: (0, _addonActions.action)('onSelect (grid-large)'),
    onDeselect: (0, _addonActions.action)('onDeselect (grid-large)'),
    onClick: (0, _addonActions.action)('onClick (grid-large)'),
    size: "small"
  }, _GridViewFilled6 || (_GridViewFilled6 = /*#__PURE__*/_react["default"].createElement(_GridViewFilled7["default"], null))), /*#__PURE__*/_react["default"].createElement(_.ToggleButton, {
    value: "grid-small",
    onSelect: (0, _addonActions.action)('onSelect (grid-small)'),
    onDeselect: (0, _addonActions.action)('onDeselect (grid-small)'),
    onClick: (0, _addonActions.action)('onClick (grid-small)'),
    size: "small"
  }, _AppsFilled6 || (_AppsFilled6 = /*#__PURE__*/_react["default"].createElement(_AppsFilled7["default"], null)))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/_react["default"].createElement(_ApiLink4.ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Toggle"
  })));
};

exports.ToggleEnforceSelected = ToggleEnforceSelected;

var Skeleton = function Skeleton() {
  return /*#__PURE__*/_react["default"].createElement(_.ToggleSkeleton, {
    size: _addonKnobs.select.apply(void 0, sizes),
    instances: (0, _addonKnobs.number)('Instances', 2),
    animate: (0, _addonKnobs["boolean"])('Animate', false)
  });
};

exports.Skeleton = Skeleton;
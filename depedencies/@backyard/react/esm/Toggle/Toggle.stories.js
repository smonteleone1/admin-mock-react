var _Typography, _br, _ListView, _GridViewFilled, _AppsFilled, _br2, _br3, _Typography2, _br4, _ListView2, _GridViewFilled2, _AppsFilled2, _ApiLink, _Typography3, _br5, _ListView3, _GridViewFilled3, _AppsFilled3, _br6, _br7, _Typography4, _br8, _ListView4, _GridViewFilled4, _AppsFilled4, _ApiLink2, _Typography5, _Typography6, _br9, _br10, _ListView5, _GridViewFilled5, _AppsFilled5, _br11, _br12, _Typography7, _br13, _ListView6, _GridViewFilled6, _AppsFilled6, _ApiLink3;

import React from 'react';
import { withKnobs, boolean as _boolean, select, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ListView from '@backyard/icons/ListView';
import GridViewFilled from '@backyard/icons/GridViewFilled';
import AppsFilled from '@backyard/icons/AppsFilled';
import { ApiLink } from '../utils/storybook/ApiLink';
import { GridV3 as Grid, Toggle, ToggleButton, Typography, ToggleSkeleton } from '../';
export default {
  title: '@backyard/react/Toggle',
  decorators: [withKnobs]
};
var shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
var sizes = ['Size', {
  small: 'small',
  medium: 'medium',
  large: 'large'
}, 'medium'];
export var ToggleMultiple = function ToggleMultiple() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, _Typography || (_Typography = /*#__PURE__*/React.createElement(Typography, {
    variant: "h3"
  }, "Without Default Value")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(Toggle, {
    enforceSelected: _boolean('Enforce Active', false),
    onChange: action('onChange'),
    shape: select.apply(void 0, shapes),
    variant: "secondary"
  }, /*#__PURE__*/React.createElement(ToggleButton, {
    value: "list",
    onSelect: action('onSelect (list)'),
    onDeselect: action('onDeselect (list)'),
    onClick: action('onClick (list)'),
    size: "small"
  }, _ListView || (_ListView = /*#__PURE__*/React.createElement(ListView, null))), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "grid-large",
    onSelect: action('onSelect (grid-large)'),
    onDeselect: action('onDeselect (grid-large)'),
    onClick: action('onClick (grid-large)'),
    size: "small"
  }, _GridViewFilled || (_GridViewFilled = /*#__PURE__*/React.createElement(GridViewFilled, null))), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "grid-small",
    onSelect: action('onSelect (grid-small)'),
    onDeselect: action('onDeselect (grid-small)'),
    onClick: action('onClick (grid-small)'),
    size: "small"
  }, _AppsFilled || (_AppsFilled = /*#__PURE__*/React.createElement(AppsFilled, null)))), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), _Typography2 || (_Typography2 = /*#__PURE__*/React.createElement(Typography, {
    variant: "h3"
  }, "With Default Value")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(Toggle, {
    enforceSelected: _boolean('Enforce Active', false),
    defaultValue: ['list', 'grid-small'],
    onChange: action('onChange'),
    shape: select.apply(void 0, shapes),
    variant: "secondary"
  }, /*#__PURE__*/React.createElement(ToggleButton, {
    value: "list",
    onSelect: action('onSelect (list)'),
    onDeselect: action('onDeselect (list)'),
    onClick: action('onClick (list)'),
    size: "small"
  }, _ListView2 || (_ListView2 = /*#__PURE__*/React.createElement(ListView, null))), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "grid-large",
    onSelect: action('onSelect (grid-large)'),
    onDeselect: action('onDeselect (grid-large)'),
    onClick: action('onClick (grid-large)'),
    size: "small"
  }, _GridViewFilled2 || (_GridViewFilled2 = /*#__PURE__*/React.createElement(GridViewFilled, null))), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "grid-small",
    onSelect: action('onSelect (grid-small)'),
    onDeselect: action('onDeselect (grid-small)'),
    onClick: action('onClick (grid-small)'),
    size: "small"
  }, _AppsFilled2 || (_AppsFilled2 = /*#__PURE__*/React.createElement(AppsFilled, null)))), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Toggle"
  })));
};
export var ToggleExclusive = function ToggleExclusive() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, _Typography3 || (_Typography3 = /*#__PURE__*/React.createElement(Typography, {
    variant: "h3"
  }, "Without Default Value")), _br5 || (_br5 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(Toggle, {
    exclusive: _boolean('Exclusive', true),
    enforceSelected: _boolean('Enforce Active', false),
    onChange: action('onChange'),
    shape: select.apply(void 0, shapes),
    variant: "secondary"
  }, /*#__PURE__*/React.createElement(ToggleButton, {
    value: "list",
    onSelect: action('onSelect (list)'),
    onDeselect: action('onDeselect (list)'),
    onClick: action('onClick (list)'),
    size: "small"
  }, _ListView3 || (_ListView3 = /*#__PURE__*/React.createElement(ListView, null))), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "grid-large",
    onSelect: action('onSelect (grid-large)'),
    onDeselect: action('onDeselect (grid-large)'),
    onClick: action('onClick (grid-large)'),
    size: "small"
  }, _GridViewFilled3 || (_GridViewFilled3 = /*#__PURE__*/React.createElement(GridViewFilled, null))), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "grid-small",
    onSelect: action('onSelect (grid-small)'),
    onDeselect: action('onDeselect (grid-small)'),
    onClick: action('onClick (grid-small)'),
    size: "small"
  }, _AppsFilled3 || (_AppsFilled3 = /*#__PURE__*/React.createElement(AppsFilled, null)))), _br6 || (_br6 = /*#__PURE__*/React.createElement("br", null)), _br7 || (_br7 = /*#__PURE__*/React.createElement("br", null)), _Typography4 || (_Typography4 = /*#__PURE__*/React.createElement(Typography, {
    variant: "h3"
  }, "With Default Value")), _br8 || (_br8 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(Toggle, {
    exclusive: _boolean('Exclusive', true),
    enforceSelected: _boolean('Enforce Active', false),
    defaultValue: "grid-large",
    onChange: action('onChange'),
    shape: select.apply(void 0, shapes),
    variant: "secondary",
    size: "small"
  }, /*#__PURE__*/React.createElement(ToggleButton, {
    value: "list",
    onSelect: action('onSelect (list)'),
    onDeselect: action('onDeselect (list)'),
    onClick: action('onClick (list)'),
    size: "small"
  }, _ListView4 || (_ListView4 = /*#__PURE__*/React.createElement(ListView, null))), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "grid-large",
    onSelect: action('onSelect (grid-large)'),
    onDeselect: action('onDeselect (grid-large)'),
    onClick: action('onClick (grid-large)'),
    size: "small"
  }, _GridViewFilled4 || (_GridViewFilled4 = /*#__PURE__*/React.createElement(GridViewFilled, null))), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "grid-small",
    onSelect: action('onSelect (grid-small)'),
    onDeselect: action('onDeselect (grid-small)'),
    onClick: action('onClick (grid-small)'),
    size: "small"
  }, _AppsFilled4 || (_AppsFilled4 = /*#__PURE__*/React.createElement(AppsFilled, null)))), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Toggle"
  })));
};
export var ToggleEnforceSelected = function ToggleEnforceSelected() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, _Typography5 || (_Typography5 = /*#__PURE__*/React.createElement(Typography, {
    variant: "h3"
  }, "Without Default Value")), _Typography6 || (_Typography6 = /*#__PURE__*/React.createElement(Typography, {
    variant: "caption"
  }, "`enforceSelected` automatically selects the first button if no default is defined")), _br9 || (_br9 = /*#__PURE__*/React.createElement("br", null)), _br10 || (_br10 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(Toggle, {
    variant: "secondary",
    exclusive: _boolean('Exclusive', true),
    enforceSelected: _boolean('Enforce Active', true),
    onChange: action('onChange'),
    shape: select.apply(void 0, shapes)
  }, /*#__PURE__*/React.createElement(ToggleButton, {
    value: "list",
    onSelect: action('onSelect (list)'),
    onDeselect: action('onDeselect (list)'),
    onClick: action('onClick (list)'),
    size: "small"
  }, _ListView5 || (_ListView5 = /*#__PURE__*/React.createElement(ListView, null))), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "grid-large",
    onSelect: action('onSelect (grid-large)'),
    onDeselect: action('onDeselect (grid-large)'),
    onClick: action('onClick (grid-large)'),
    size: "small"
  }, _GridViewFilled5 || (_GridViewFilled5 = /*#__PURE__*/React.createElement(GridViewFilled, null))), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "grid-small",
    onSelect: action('onSelect (grid-small)'),
    onDeselect: action('onDeselect (grid-small)'),
    onClick: action('onClick (grid-small)'),
    size: "small"
  }, _AppsFilled5 || (_AppsFilled5 = /*#__PURE__*/React.createElement(AppsFilled, null)))), _br11 || (_br11 = /*#__PURE__*/React.createElement("br", null)), _br12 || (_br12 = /*#__PURE__*/React.createElement("br", null)), _Typography7 || (_Typography7 = /*#__PURE__*/React.createElement(Typography, {
    variant: "h3"
  }, "With Default Value")), _br13 || (_br13 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(Toggle, {
    variant: "secondary",
    exclusive: _boolean('Exclusive', true),
    enforceSelected: _boolean('Enforce Active', true),
    defaultValue: "grid-small",
    onChange: action('onChange'),
    shape: select.apply(void 0, shapes)
  }, /*#__PURE__*/React.createElement(ToggleButton, {
    value: "list",
    onSelect: action('onSelect (list)'),
    onDeselect: action('onDeselect (list)'),
    onClick: action('onClick (list)'),
    size: "small"
  }, _ListView6 || (_ListView6 = /*#__PURE__*/React.createElement(ListView, null))), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "grid-large",
    onSelect: action('onSelect (grid-large)'),
    onDeselect: action('onDeselect (grid-large)'),
    onClick: action('onClick (grid-large)'),
    size: "small"
  }, _GridViewFilled6 || (_GridViewFilled6 = /*#__PURE__*/React.createElement(GridViewFilled, null))), /*#__PURE__*/React.createElement(ToggleButton, {
    value: "grid-small",
    onSelect: action('onSelect (grid-small)'),
    onDeselect: action('onDeselect (grid-small)'),
    onClick: action('onClick (grid-small)'),
    size: "small"
  }, _AppsFilled6 || (_AppsFilled6 = /*#__PURE__*/React.createElement(AppsFilled, null)))), _ApiLink3 || (_ApiLink3 = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Toggle"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(ToggleSkeleton, {
    size: select.apply(void 0, sizes),
    instances: number('Instances', 2),
    animate: _boolean('Animate', false)
  });
};
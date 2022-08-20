var _OptionsWrapper, _OptionsWrapper2, _DefaultOptions, _FetchOptions, _Search, _ApiLink;

import React from 'react';
import { Autocomplete, Search, GridV3 as Grid, Typography } from '../';
import styled from 'styled-components';
import { Trend, SubitemArrow } from '@backyard/icons';
import { ApiLink } from '../utils/storybook/ApiLink';
import { withKnobs, select } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Autocomplete',
  decorators: [withKnobs]
};
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
const OptionsWrapper = styled.div.withConfig({
  displayName: "Autocompletestories__OptionsWrapper",
  componentId: "sc-1qhqo3c-0"
})(["width:100%;height:100%;h4{padding:8px 16px;}li{a{display:flex;align-items:center;padding:12px 16px;color:var(--bds-color-text-secondary);&:hover{cursor:pointer;background:var(--bds-color-surface-subdued);}}}svg{width:20px;height:20px;margin-right:16px;path{fill:var(--bds-color-text-secondary);}}.icon-after{float:right;}"]);
const OptionsItem = styled.a.withConfig({
  displayName: "Autocompletestories__OptionsItem",
  componentId: "sc-1qhqo3c-1"
})([""]);

const DefaultOptions = () => _OptionsWrapper || (_OptionsWrapper = /*#__PURE__*/React.createElement(OptionsWrapper, null, /*#__PURE__*/React.createElement(Typography, {
  variant: "h4"
}, "Trending Searches"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(OptionsItem, {
  href: "https://www.lowes.com"
}, /*#__PURE__*/React.createElement(Trend, null), ' ', /*#__PURE__*/React.createElement(Typography, {
  variant: "h5",
  regular: true
}, "Refrigerators"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(OptionsItem, {
  href: "https://www.lowes.com"
}, /*#__PURE__*/React.createElement(Trend, null), ' ', /*#__PURE__*/React.createElement(Typography, {
  variant: "h5",
  regular: true
}, "Ceiling Fan"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(OptionsItem, {
  href: "https://www.lowes.com"
}, /*#__PURE__*/React.createElement(Trend, null), ' ', /*#__PURE__*/React.createElement(Typography, {
  variant: "h5",
  regular: true
}, "Insulation"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(OptionsItem, {
  href: "https://www.lowes.com"
}, /*#__PURE__*/React.createElement(Trend, null), ' ', /*#__PURE__*/React.createElement(Typography, {
  variant: "h5",
  regular: true
}, "2x4x8"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(OptionsItem, {
  href: "https://www.lowes.com"
}, /*#__PURE__*/React.createElement(Trend, null), ' ', /*#__PURE__*/React.createElement(Typography, {
  variant: "h5",
  regular: true
}, "Plywood"))))));

const FetchOptions = () => _OptionsWrapper2 || (_OptionsWrapper2 = /*#__PURE__*/React.createElement(OptionsWrapper, null, /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(OptionsItem, {
  href: "https://www.lowes.com"
}, /*#__PURE__*/React.createElement(Typography, {
  variant: "h5",
  regular: true
}, "kob", /*#__PURE__*/React.createElement("b", null, "alt 80v")))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(OptionsItem, {
  href: "https://www.lowes.com"
}, /*#__PURE__*/React.createElement(SubitemArrow, null), ' ', /*#__PURE__*/React.createElement(Typography, {
  variant: "h6",
  color: "text_interactive",
  regular: true
}, "in Cordless Electric String Trimmers"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(OptionsItem, {
  href: "https://www.lowes.com"
}, /*#__PURE__*/React.createElement(SubitemArrow, null), ' ', /*#__PURE__*/React.createElement(Typography, {
  variant: "h6",
  color: "text_interactive",
  regular: true
}, "in Cordless Electric Push Lawn Mowers"))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(OptionsItem, {
  href: "https://www.lowes.com"
}, /*#__PURE__*/React.createElement(Typography, {
  variant: "h5",
  regular: true
}, "kob", /*#__PURE__*/React.createElement("b", null, "alt 24v")))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(OptionsItem, {
  href: "https://www.lowes.com"
}, /*#__PURE__*/React.createElement(Typography, {
  variant: "h5",
  regular: true
}, "kob", /*#__PURE__*/React.createElement("b", null, "alt 40v battery")))))));

export const Default = () => {
  const [options, setOptions] = React.useState(_DefaultOptions || (_DefaultOptions = /*#__PURE__*/React.createElement(DefaultOptions, null)));

  const onChange = () => {
    setOptions(_FetchOptions || (_FetchOptions = /*#__PURE__*/React.createElement(FetchOptions, null)));
  };

  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Autocomplete, {
    renderInput: _Search || (_Search = /*#__PURE__*/React.createElement(Search, {
      placeholder: "Placeholder search text here ...",
      autoComplete: "off"
    })),
    options: options,
    onChange: onChange,
    shape: select(...shapes),
    isSearch: true
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Autocomplete"
  })));
};
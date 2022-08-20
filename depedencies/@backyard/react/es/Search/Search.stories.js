var _ApiLink, _IconButton, _ApiLink2, _FormHeading, _br, _br2, _br3, _FormHeading2, _br4;

import React from 'react';
import { GridV3 as Grid, Search, SearchSkeleton, FormControl, FormHeading, FormHelperTextSkeleton, IconButton } from '../';
import TriangleDown from '@backyard/icons/TriangleDown';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Search',
  decorators: [withKnobs]
};
const shapes = ['Shape', {
  rounded: 'rounded',
  squared: 'squared'
}, 'rounded'];
const sizes = ['Size', {
  jumbo: 'jumbo',
  large: 'large',
  medium: 'medium',
  small: 'small'
}, 'medium'];
export const Default = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Search, {
  variant: "outlined",
  shape: select(...shapes),
  size: select(...sizes),
  placeholder: text('Placeholder', 'Placeholder'),
  disabled: boolean('Disabled', false),
  defaultValue: text('Default Value', ''),
  onSearchClick: action('search-click'),
  onClearClick: action('clear-click')
}), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Search"
})));
export const withCategories = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(Search, {
  variant: "outlined",
  shape: select(...shapes),
  size: select(...sizes),
  placeholder: text('Placeholder', 'Placeholder'),
  disabled: boolean('Disabled', false),
  defaultValue: text('Default Value', ''),
  onSearchClick: action('search-click'),
  onClearClick: action('clear-click'),
  itemBefore: _IconButton || (_IconButton = /*#__PURE__*/React.createElement(IconButton, {
    size: "small",
    variant: "tertiary",
    color: "neutral"
  }, /*#__PURE__*/React.createElement(TriangleDown, null)))
}), _ApiLink2 || (_ApiLink2 = /*#__PURE__*/React.createElement(ApiLink, {
  to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Search"
})));
export const Skeleton = () => /*#__PURE__*/React.createElement(Grid.Column, {
  start: 6,
  end: 12
}, /*#__PURE__*/React.createElement(FormControl, null, _FormHeading || (_FormHeading = /*#__PURE__*/React.createElement(FormHeading, null, "Search Skeleton")), _br || (_br = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(SearchSkeleton, {
  shape: select(...shapes),
  size: select(...sizes),
  animate: boolean('Animate', false)
})), _br2 || (_br2 = /*#__PURE__*/React.createElement("br", null)), _br3 || (_br3 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(FormControl, null, _FormHeading2 || (_FormHeading2 = /*#__PURE__*/React.createElement(FormHeading, null, "Search Skeleton w/ Helper Text")), _br4 || (_br4 = /*#__PURE__*/React.createElement("br", null)), /*#__PURE__*/React.createElement(SearchSkeleton, {
  shape: select(...shapes),
  size: select(...sizes),
  animate: boolean('Animate', false)
}), /*#__PURE__*/React.createElement(FormHelperTextSkeleton, {
  animate: boolean('Animate', false)
})));
var _RatingOutline, _RatingFilled, _ApiLink;

import React from 'react';
import { GridV3 as Grid, Rating, RatingSkeleton } from '../';
import RatingOutline from '@backyard/icons/RatingEmpty';
import RatingFilled from '@backyard/icons/RatingFull';
import { ApiLink } from '../utils/storybook/ApiLink';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, boolean as _boolean, select, text } from '@storybook/addon-knobs';
export default {
  title: '@backyard/react/Rating',
  decorators: [withKnobs]
};
var sizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  jumbo: 'jumbo'
};
export var DefaultRating = function DefaultRating() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(Rating, {
    interactive: _boolean('Interactive', false),
    name: text('Name', 'name'),
    value: Number(text('Value', '3.5')),
    count: number('Ratings', 734),
    emptyIcon: _RatingOutline || (_RatingOutline = /*#__PURE__*/React.createElement(RatingOutline, null)),
    icon: _RatingFilled || (_RatingFilled = /*#__PURE__*/React.createElement(RatingFilled, null)),
    size: select('Sizes', sizes, 'medium'),
    precision: number('Precision', 0.5),
    onChange: action('rating-change'),
    onChangeHover: action('rating-change-hover'),
    onMouseLeave: action('rating-mouse-leave')
  }), _ApiLink || (_ApiLink = /*#__PURE__*/React.createElement(ApiLink, {
    to: "https://stage.carbon.gcp.lowes.com/bds/documentation/ComponentAPI/Rating"
  })));
};
export var Skeleton = function Skeleton() {
  return /*#__PURE__*/React.createElement(Grid.Column, {
    start: 6,
    end: 12
  }, /*#__PURE__*/React.createElement(RatingSkeleton, {
    size: select('Sizes', sizes, 'medium'),
    animate: _boolean('Animate', false),
    withValue: _boolean('withValue', false)
  }));
};
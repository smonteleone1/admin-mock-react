import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _Close, _span, _SearchIcon;

var _excluded = ["className", "disabled", "size", "onSearchClick", "onClearClick", "onChange", "label", "placeholder", "shape"];
import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import SearchIcon from '@backyard/icons/SearchIcon';
import Close from '@backyard/icons/Close';
import TextInput from '../TextInput';
import IconButton from '../IconButton';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import { SearchBase } from './styles/SearchBase';
import { SearchButtonGroup } from './styles/SearchButtonGroup';
/**
 * Extend `TextInput` with Search styles
 */

var StyledTextInput = styled(TextInput).withConfig({
  displayName: "Search__StyledTextInput",
  componentId: "sc-13ruigf-0"
})(["", ""], SearchBase);
/**
 * Backyard React Search
 *
 * Search text input that extends on `TextInput`
 *
 *  <Search placeholder="Search" />
 *
 * To include helper text, use `FormControl` and `FormHelperText` to sync states
 *
 *  <FormControl>
 *      <Search placeholder="Username" />
 *      <FormHelperText>Search by username</FormHelperText>
 *  </FormControl>
 */

var Search = /*#__PURE__*/React.forwardRef(function Search(_ref, ref) {
  var className = _ref.className,
      disabled = _ref.disabled,
      size = _ref.size,
      onSearchClick = _ref.onSearchClick,
      onClearClick = _ref.onClearClick,
      onChange = _ref.onChange,
      label = _ref.label,
      placeholder = _ref.placeholder,
      shapeProp = _ref.shape,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'Search'
  }).context.shape;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1]; // Calculate shape


  var shape = getShape(shapeProp, shapeContext); // Hold ref to get event target

  var innerRef = useForwardedRef(ref);
  /**
   * Force event.target to `innerRef`, the text `input`
   *
   * @param {Event} event - DOM Event
   */

  function getEvent(event) {
    return event;
  }
  /**
   * Handles `onClick` for Search icon
   *
   * @param {Event} event - DOM Event
   */


  var handleSubmit = function handleSubmit(event) {
    // If `onSearchClick` defined,
    if (typeof onSearchClick === 'function') {
      // Trigger function
      onSearchClick(getEvent(event), innerRef.current.value);
    }
  };
  /**
   * Handles `onClick` for Clear icon
   *
   * @param {Event} event - DOM Event
   */


  var handleClear = function handleClear(event) {
    // Set new clear count...
    innerRef.current.value = ''; // @ts-ignore

    setActive(false); // If `onClearClick` defined,

    if (typeof onClearClick === 'function') {
      // Trigger function
      onClearClick(getEvent(event), innerRef.current.value);
    }
  }; // eslint-disable-next-line no-shadow


  var handleChange = function handleChange(event, value) {
    setActive(true);

    if (onChange) {
      onChange(event, value);
    }
  };

  var getIconButtonSize = function getIconButtonSize(componentSize) {
    switch (componentSize) {
      case 'jumbo':
        return 'large';

      case 'large':
        return 'medium';

      case 'medium':
        return 'small';

      case 'small':
        return 'extra_small';

      default:
        return 'small';
    }
  };
  /**
   * Layout:
   *
   *  <TextInput />
   */


  return /*#__PURE__*/React.createElement(StyledTextInput, _extends({
    disabled: disabled,
    placeholder: placeholder,
    className: classNames('input--search', className),
    type: "text",
    size: size,
    itemAfter: !disabled ? /*#__PURE__*/React.createElement(SearchButtonGroup, {
      className: "size--".concat(size)
    }, active ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      className: "search--clear btn--clear",
      variant: "ghost",
      color: "neutral",
      size: getIconButtonSize(size),
      onClick: handleClear
    }, _Close || (_Close = /*#__PURE__*/React.createElement(Close, null))), _span || (_span = /*#__PURE__*/React.createElement("span", {
      className: "divider"
    }))) : null, /*#__PURE__*/React.createElement(IconButton, {
      className: "search--action",
      variant: "ghost",
      color: "neutral",
      size: getIconButtonSize(size),
      onClick: handleSubmit
    }, _SearchIcon || (_SearchIcon = /*#__PURE__*/React.createElement(SearchIcon, null)))) : null,
    onChange: handleChange,
    shape: shape
  }, props, {
    ref: innerRef
  }));
});
Search.bdsName = 'Search';
export { Search };
export default Search;
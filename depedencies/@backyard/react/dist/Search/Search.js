"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Search = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SearchIcon2 = _interopRequireDefault(require("@backyard/icons/SearchIcon"));

var _Close2 = _interopRequireDefault(require("@backyard/icons/Close"));

var _TextInput = _interopRequireDefault(require("../TextInput"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _useForwardedRef = _interopRequireDefault(require("../utils/hooks/useForwardedRef"));

var _ThemeProvider = require("../ThemeProvider");

var _SearchBase = require("./styles/SearchBase");

var _SearchButtonGroup = require("./styles/SearchButtonGroup");

var _Close, _span, _SearchIcon;

var _excluded = ["className", "disabled", "size", "onSearchClick", "onClearClick", "onChange", "label", "placeholder", "shape"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Extend `TextInput` with Search styles
 */
var StyledTextInput = (0, _styledComponents["default"])(_TextInput["default"]).withConfig({
  displayName: "Search__StyledTextInput",
  componentId: "sc-13ruigf-0"
})(["", ""], _SearchBase.SearchBase);
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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Search'
  }).context.shape;

  var _React$useState = React.useState(false),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      active = _React$useState2[0],
      setActive = _React$useState2[1]; // Calculate shape


  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Hold ref to get event target

  var innerRef = (0, _useForwardedRef["default"])(ref);
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


  return /*#__PURE__*/React.createElement(StyledTextInput, (0, _extends2["default"])({
    disabled: disabled,
    placeholder: placeholder,
    className: (0, _classnames["default"])('input--search', className),
    type: "text",
    size: size,
    itemAfter: !disabled ? /*#__PURE__*/React.createElement(_SearchButtonGroup.SearchButtonGroup, {
      className: "size--".concat(size)
    }, active ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_IconButton["default"], {
      className: "search--clear btn--clear",
      variant: "ghost",
      color: "neutral",
      size: getIconButtonSize(size),
      onClick: handleClear
    }, _Close || (_Close = /*#__PURE__*/React.createElement(_Close2["default"], null))), _span || (_span = /*#__PURE__*/React.createElement("span", {
      className: "divider"
    }))) : null, /*#__PURE__*/React.createElement(_IconButton["default"], {
      className: "search--action",
      variant: "ghost",
      color: "neutral",
      size: getIconButtonSize(size),
      onClick: handleSubmit
    }, _SearchIcon || (_SearchIcon = /*#__PURE__*/React.createElement(_SearchIcon2["default"], null)))) : null,
    onChange: handleChange,
    shape: shape
  }, props, {
    ref: innerRef
  }));
});
exports.Search = Search;
Search.bdsName = 'Search';
var _default = Search;
exports["default"] = _default;
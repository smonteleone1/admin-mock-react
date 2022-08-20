"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TextInput = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CheckCircleFilled2 = _interopRequireDefault(require("@backyard/icons/CheckCircleFilled"));

var _useForwardedRef = _interopRequireDefault(require("../utils/hooks/useForwardedRef"));

var _useRandomId = _interopRequireDefault(require("../utils/hooks/useRandomId"));

var _ThemeProvider = require("../ThemeProvider");

var _useFormControl2 = _interopRequireDefault(require("../FormControl/hooks/useFormControl"));

var _TextInputWrapper = _interopRequireDefault(require("./styles/TextInputWrapper"));

var _TextInputLabel = _interopRequireDefault(require("./styles/TextInputLabel"));

var _TextInputFieldset = _interopRequireDefault(require("./styles/TextInputFieldset"));

var _TextInputFormControl = _interopRequireDefault(require("./styles/TextInputFormControl"));

var _CheckCircleFilled;

var _excluded = ["children", "className", "component", "defaultValue", "disabled", "size", "itemBefore", "itemAfter", "id", "customIcon", "hiddenLabel", "label", "onChange", "onClick", "onFocus", "onBlur", "placeholder", "shape", "state", "type", "value", "suffix", "wrapperProps"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Check validity of value
var valid = function valid(value) {
  return !(value === null || value === undefined || value === '');
};
/**
 * Backyard React Text Input
 *
 * Internal TextInput component that `TextField`, `Search`, `Password`, and `TextArea` extends off of
 *
 * Provides API for easily building more common styled text inputs
 *
 * It is recommended to use the above components before utilizing `TextInput` directly
 */


var TextInput = /*#__PURE__*/React.forwardRef(function TextInput(_ref, ref) {
  var _innerRef$current3;

  var children = _ref.children,
      className = _ref.className,
      component = _ref.component,
      defaultValue = _ref.defaultValue,
      _ref$disabled = _ref.disabled,
      disabledProp = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$size = _ref.size,
      sizeProp = _ref$size === void 0 ? 'medium' : _ref$size,
      itemBefore = _ref.itemBefore,
      itemAfter = _ref.itemAfter,
      idProp = _ref.id,
      _ref$customIcon = _ref.customIcon,
      customIcon = _ref$customIcon === void 0 ? false : _ref$customIcon,
      _ref$hiddenLabel = _ref.hiddenLabel,
      hiddenLabel = _ref$hiddenLabel === void 0 ? false : _ref$hiddenLabel,
      label = _ref.label,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      placeholder = _ref.placeholder,
      shapeProp = _ref.shape,
      _ref$state = _ref.state,
      stateProp = _ref$state === void 0 ? 'default' : _ref$state,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      valueProp = _ref.value,
      suffix = _ref.suffix,
      wrapperProps = _ref.wrapperProps,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var shapeContext = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'TextInput'
  }).context.shape; // Controlled value

  var _React$useState = React.useState(valid(valueProp) ? valueProp : defaultValue),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1]; // Calculate shape


  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext); // Assign random id to input
  // if id not provided
  // Accessibilty for label -> input

  var id = (0, _useRandomId["default"])(idProp); // Hold interaction state

  var _React$useState3 = React.useState(valid(value) ? 'completed' : 'incomplete'),
      _React$useState4 = (0, _slicedToArray2["default"])(_React$useState3, 2),
      interaction = _React$useState4[0],
      setInteraction = _React$useState4[1]; // Hold completion state


  var _React$useState5 = React.useState(valid(value) ? 'completed' : 'incomplete'),
      _React$useState6 = (0, _slicedToArray2["default"])(_React$useState5, 2),
      completed = _React$useState6[0],
      setCompleted = _React$useState6[1]; // Hold inner ref to force event target to


  var innerRef = (0, _useForwardedRef["default"])(ref); // Uses FormControl

  var _useFormControl = (0, _useFormControl2["default"])({
    disabled: disabledProp,
    state: stateProp,
    indent: 'size_16'
  }),
      controlDisabled = _useFormControl.disabled,
      controlState = _useFormControl.state; // Memoize contextual props...


  var _React$useMemo = React.useMemo(function () {
    return {
      size: sizeProp,
      // Allow FormControl to override props
      state: controlState || stateProp,
      disabled: controlDisabled || disabledProp
    };
  }, [sizeProp, stateProp, disabledProp]),
      size = _React$useMemo.size,
      state = _React$useMemo.state,
      disabled = _React$useMemo.disabled; // Value Prop side effects...


  React.useEffect(function () {
    // Set new controlled value
    if (valueProp !== value) {
      setValue(valid(valueProp) ? valueProp : defaultValue);
    }
  }, [valueProp]);
  /**
   * Force event.target to `innerRef`, the text `input`
   *
   * @param {Event} event - DOM Event
   */

  function getEvent(event) {
    return event;
  }
  /**
   * Handles `onChange` event for ``input``
   *
   * @param {Event} event - DOM Event
   */


  var handleChange = function handleChange(event) {
    // @TODO remove evet.persisten when updating to react@17
    // react@17 remove event pooling
    if (event !== null && event !== void 0 && event.persist) {
      event.persist();
    } // Set focused interaction


    setInteraction('focused'); // Set new controlled value

    setValue(event.target.value); // If `onChange` prop defined,

    if (typeof onChange === 'function') {
      // Trigger function
      onChange(getEvent(event), event.target.value);
    }
  };
  /**
   * Handles `onFocus` event for ``input``
   *
   * @param {Event} event - DOM Event
   */


  var handleFocus = function handleFocus(event) {
    // @TODO remove evet.persisten when updating to react@17
    // react@17 remove event pooling
    if (event !== null && event !== void 0 && event.persist) {
      event.persist();
    } // Set focused interaction


    setInteraction('focused'); // If `onFocus` prop defined,

    if (typeof onFocus === 'function') {
      // Trigger function
      onFocus(getEvent(event), event.target.value);
    }
  };
  /**
   * Handles `onClick` event for ``input``
   *
   * @param {Event} event - DOM Event
   */


  var handleClick = function handleClick(event) {
    // @TODO remove evet.persisten when updating to react@17
    // react@17 remove event pooling
    if (event !== null && event !== void 0 && event.persist) {
      event.persist();
    } // Set active interaction


    setInteraction('active'); // If `onClick` prop defined,

    if (typeof onClick === 'function') {
      // Trigger function
      onClick(getEvent(event), event.target.value);
    }
  };
  /**
   * Handles `onBlur` event for ``input``
   *
   * @param {Event} event - DOM Event
   */


  var handleBlur = function handleBlur(event) {
    // @TODO remove evet.persisten when updating to react@17
    // react@17 remove event pooling
    if (event !== null && event !== void 0 && event.persist) {
      event.persist();
    }

    if (event.target.value && event.target.value !== '') {
      setInteraction('completed');
    } else {
      setInteraction('incomplete');
    } // If `onBlur` prop defined,


    if (typeof onBlur === 'function') {
      // Trigger function
      onBlur(getEvent(event), event.target.value);
    }
  }; // Side effect when value changes


  React.useEffect(function () {
    var _innerRef$current, _innerRef$current2;

    // Set whether or not input is complete
    setCompleted((_innerRef$current = innerRef.current) !== null && _innerRef$current !== void 0 && _innerRef$current.value ? 'completed' : 'incomplete'); // Set whether or not interaction is complete

    setInteraction((_innerRef$current2 = innerRef.current) !== null && _innerRef$current2 !== void 0 && _innerRef$current2.value ? 'completed' : 'incomplete');
  }, [(_innerRef$current3 = innerRef.current) === null || _innerRef$current3 === void 0 ? void 0 : _innerRef$current3.value, value]); // Get HTML tag from `type` prop or use `input` by default

  var Component = component || (type === 'textarea' ? 'textarea' : 'input');
  var ItemAfter;

  if (state === 'success') {
    ItemAfter = _CheckCircleFilled || (_CheckCircleFilled = /*#__PURE__*/React.createElement(_CheckCircleFilled2["default"], {
      className: "icon--success"
    }));
  } else {
    ItemAfter = itemAfter;
  }
  /**
   * Layout:
   *
   *  <div>
   *      <label/>
   *      <div>
   *          <input />
   *          <fieldset>
   *              <legend>
   *                  <span />
   *              </legend>
   *          </fieldset>
   *      </div>
   *  </div>
   *
   */


  return /*#__PURE__*/React.createElement(_TextInputWrapper["default"], (0, _extends2["default"])({
    customIcon: customIcon
  }, wrapperProps, {
    className: (0, _classnames["default"])("backyard textinput--wrapper shape--".concat(shape, " size--").concat(size), state !== 'default' && "state--".concat(state), placeholder && 'has--placeholder', itemBefore && 'item--before', itemAfter && 'item--after', interaction && "interaction--".concat(interaction), wrapperProps && wrapperProps.className)
  }), /*#__PURE__*/React.createElement(_TextInputLabel["default"], {
    htmlFor: id,
    className: (0, _classnames["default"])("input-label size--".concat(size, " state--").concat(state), interaction && "interaction--".concat(interaction), itemBefore && 'with-icon-before', hiddenLabel && 'hidden-label')
  }, label), /*#__PURE__*/React.createElement(_TextInputFormControl["default"], {
    className: (0, _classnames["default"])("form-control shape--".concat(shape, " size--").concat(size), disabled && "disabled", state !== 'default' && "state--".concat(state), interaction && "interaction--".concat(interaction))
  }, itemBefore ? /*#__PURE__*/React.cloneElement(itemBefore, {
    className: (0, _classnames["default"])(itemBefore.props.className, 'item--before')
  }) : null, /*#__PURE__*/React.createElement(Component, (0, _extends2["default"])({
    type: type,
    id: id,
    className: (0, _classnames["default"])("textinput type--".concat(type), className, completed, disabled && "disabled"),
    value: valid(value) ? value : '',
    disabled: disabled || null,
    "data-invalid": state === 'error' || null,
    "aria-invalid": state === 'error' || null,
    ref: innerRef,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: handleClick,
    placeholder: placeholder
  }, props)), ItemAfter ? /*#__PURE__*/React.cloneElement(ItemAfter, {
    className: (0, _classnames["default"])(ItemAfter.props.className, 'item--after')
  }) : null, suffix ? /*#__PURE__*/React.createElement("div", {
    className: "suffix"
  }, suffix) : null, /*#__PURE__*/React.createElement(_TextInputFieldset["default"], {
    className: "text-input-fieldset size--".concat(size) + (interaction ? " interaction--".concat(interaction) : ""),
    "aria-hidden": true
  }, label && !hiddenLabel ? /*#__PURE__*/React.createElement("legend", null, /*#__PURE__*/React.createElement("span", null, label)) : null)));
});
exports.TextInput = TextInput;
TextInput.bdsName = 'TextInput';
var _default = TextInput;
exports["default"] = _default;
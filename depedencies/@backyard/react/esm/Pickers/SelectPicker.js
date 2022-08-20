import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _ClockIcon, _CalendarIcon, _CloseCircleFilledIco;

var _excluded = ["className", "onChange", "onClear", "optionsLabel", "type", "shape", "wrapperProps", "value", "defaultValue", "options", "format", "readOnly", "disableNative", "selectWrapperProps", "textWrapperProps", "clearButtonProps"],
    _excluded2 = ["ariaLabel"];
import * as React from 'react';
import classNames from 'classnames';
import CalendarIcon from '@backyard/icons/Calendar';
import ClockIcon from '@backyard/icons/HistoryOutlined';
import CloseCircleFilledIcon from '@backyard/icons/CloseCircleFilled';
import IconButton from '../IconButton';
import Select from '../Select';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import useAdapter from './hooks/useAdapter';
import { useListItems } from './hooks/useListItems';
import TextPickerWrapper from './styles/TextPickerWrapper';

var isArrayString = function isArrayString(str) {
  return str.match(/^\[.*\]$/);
};
/**
 * Backyard React Select Picker
 *
 * @todo Comments
 */


var SelectPicker = /*#__PURE__*/React.forwardRef(function SelectPicker(_ref, ref) {
  var className = _ref.className,
      onChange = _ref.onChange,
      onClear = _ref.onClear,
      _ref$optionsLabel = _ref.optionsLabel,
      optionsLabel = _ref$optionsLabel === void 0 ? '' : _ref$optionsLabel,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'date' : _ref$type,
      shapeProp = _ref.shape,
      wrapperProps = _ref.wrapperProps,
      valueProp = _ref.value,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
      options = _ref.options,
      format = _ref.format,
      readOnly = _ref.readOnly,
      disableNative = _ref.disableNative,
      selectWrapperProps = _ref.selectWrapperProps,
      textWrapperProps = _ref.textWrapperProps,
      _ref$clearButtonProps = _ref.clearButtonProps,
      clearButtonProps = _ref$clearButtonProps === void 0 ? {} : _ref$clearButtonProps,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'SelectPicker'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  var innerRef = useForwardedRef(ref);
  var adapter = useAdapter();

  var _React$useState = React.useState(valueProp || defaultValue),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var items = useListItems({
    adapter: adapter,
    value: value,
    type: type,
    format: format,
    options: options,
    optionsLabel: optionsLabel
  });
  /**
   * Force event.target to `innerRef`, the text `input`
   *
   * @param {Event} event - DOM Event
   */

  function getEvent(event) {
    return event;
  }
  /**
   * Handles the `onChange` event for the select
   *
   * @param event - change event
   * @param info - option info
   * @param bypassReadOnly - whether or not to bypass readonly check
   */


  var handleChange = function handleChange(event, info) {
    var bypassReadOnly = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var val = info.value;

    if (!readOnly || bypassReadOnly) {
      setValue(val);

      if (onChange) {
        var dateTime = isArrayString(val) ? {
          date: JSON.parse(val).map(function (date) {
            return adapter.parse(date, 'yyyy-MM-dd');
          }),
          time: JSON.parse(val).map(function (date) {
            var time = adapter.parse(date, 'HH:mm');
            return time ? adapter.format(time, 'HH:mm') : null;
          })
        } : {
          date: adapter.parse(info.value, 'yyyy-MM-dd'),
          time: function () {
            var time = adapter.parse(info.value, 'HH:mm');
            return time ? adapter.format(time, 'HH:mm') : null;
          }()
        };
        onChange(event, _extends({}, info, dateTime));
      }
    }
  };
  /**
   * Handles `onClick` event for clear button
   *
   * @param event - click event from clear button
   */


  var handleClearClick = function handleClearClick(event) {
    // Call empty change event
    handleChange(getEvent(event), {
      index: -1,
      value: '',
      text: '',
      disabled: false,
      label: ''
    }, true);

    if (onClear) {
      onClear(event);
    }
  }; // Default icon


  var defaultIcon = type === 'time' ? _ClockIcon || (_ClockIcon = /*#__PURE__*/React.createElement(ClockIcon, {
    className: "no-interaction"
  })) : _CalendarIcon || (_CalendarIcon = /*#__PURE__*/React.createElement(CalendarIcon, {
    className: "no-interaction"
  })); // If value defined, use clear button instead

  var icon = value ? /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(IconButton, _extends({
    variant: "ghost",
    color: "neutral",
    size: "small"
  }, clearButtonProps, {
    className: classNames('picker-clear-button', clearButtonProps === null || clearButtonProps === void 0 ? void 0 : clearButtonProps.className),
    onClick: handleClearClick
  }), _CloseCircleFilledIco || (_CloseCircleFilledIco = /*#__PURE__*/React.createElement(CloseCircleFilledIcon, null)))) : defaultIcon;
  React.useEffect(function () {
    return setValue(valueProp);
  }, [valueProp]);
  return /*#__PURE__*/React.createElement(TextPickerWrapper, _extends({
    className: "datepicker-select shape--".concat(shape),
    readOnly: readOnly
  }, wrapperProps), /*#__PURE__*/React.createElement(Select, _extends({
    className: classNames(className, value && "completed"),
    onChange: handleChange,
    value: value || '',
    iconClosed: icon,
    iconOpened: icon,
    readOnly: readOnly,
    wrapperProps: selectWrapperProps,
    shape: shape,
    options: items.map(function (_ref2) {
      var ariaLabel = _ref2.ariaLabel,
          itemProps = _objectWithoutProperties(_ref2, _excluded2);

      return _extends({}, itemProps, {
        label: ariaLabel,
        hidden: readOnly
      });
    })
  }, props, {
    ref: innerRef
  })));
});
SelectPicker.bdsName = 'SelectPicker';
export { SelectPicker };
export default SelectPicker;
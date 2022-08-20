import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _ClockIcon, _CalendarIcon, _CloseCircleFilledIco;

const _excluded = ["className", "onChange", "onClear", "optionsLabel", "type", "shape", "wrapperProps", "value", "defaultValue", "options", "format", "readOnly", "disableNative", "selectWrapperProps", "textWrapperProps", "clearButtonProps"],
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

const isArrayString = str => str.match(/^\[.*\]$/);
/**
 * Backyard React Select Picker
 *
 * @todo Comments
 */


const SelectPicker = /*#__PURE__*/React.forwardRef(function SelectPicker(_ref, ref) {
  let {
    className,
    onChange,
    onClear,
    optionsLabel = '',
    type = 'date',
    shape: shapeProp,
    // = 'rounded',
    wrapperProps,
    value: valueProp,
    defaultValue = '',
    options,
    format,
    readOnly,
    // Used by `DatePicker`
    selectWrapperProps,
    // Unused
    clearButtonProps = {}
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'SelectPicker'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  const innerRef = useForwardedRef(ref);
  const adapter = useAdapter();
  const [value, setValue] = React.useState(valueProp || defaultValue);
  const items = useListItems({
    adapter,
    value,
    type,
    format,
    options,
    optionsLabel
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


  const handleChange = (event, info, bypassReadOnly = false) => {
    const val = info.value;

    if (!readOnly || bypassReadOnly) {
      setValue(val);

      if (onChange) {
        const dateTime = isArrayString(val) ? {
          date: JSON.parse(val).map(date => adapter.parse(date, 'yyyy-MM-dd')),
          time: JSON.parse(val).map(date => {
            const time = adapter.parse(date, 'HH:mm');
            return time ? adapter.format(time, 'HH:mm') : null;
          })
        } : {
          date: adapter.parse(info.value, 'yyyy-MM-dd'),
          time: (() => {
            const time = adapter.parse(info.value, 'HH:mm');
            return time ? adapter.format(time, 'HH:mm') : null;
          })()
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


  const handleClearClick = event => {
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


  const defaultIcon = type === 'time' ? _ClockIcon || (_ClockIcon = /*#__PURE__*/React.createElement(ClockIcon, {
    className: "no-interaction"
  })) : _CalendarIcon || (_CalendarIcon = /*#__PURE__*/React.createElement(CalendarIcon, {
    className: "no-interaction"
  })); // If value defined, use clear button instead

  const icon = value ? /*#__PURE__*/React.createElement("span", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(IconButton, _extends({
    variant: "ghost",
    color: "neutral",
    size: "small"
  }, clearButtonProps, {
    className: classNames('picker-clear-button', clearButtonProps?.className),
    onClick: handleClearClick
  }), _CloseCircleFilledIco || (_CloseCircleFilledIco = /*#__PURE__*/React.createElement(CloseCircleFilledIcon, null)))) : defaultIcon;
  React.useEffect(() => setValue(valueProp), [valueProp]);
  return /*#__PURE__*/React.createElement(TextPickerWrapper, _extends({
    className: `datepicker-select shape--${shape}`,
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
    options: items.map(_ref2 => {
      let {
        ariaLabel
      } = _ref2,
          itemProps = _objectWithoutPropertiesLoose(_ref2, _excluded2);

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
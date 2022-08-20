import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _CalendarIcon, _ClockIcon, _CloseCircleFilledIco;

const _excluded = ["disableNative", "label", "mask", "maskPlaceholder", "alwaysShowMask", "beforeMaskedStateChange", "min", "max", "onChange", "onClear", "pattern", "step", "type", "shape", "value", "defaultValue", "selectWrapperProps", "textWrapperProps", "wrapperProps", "clearButtonProps"];
import * as React from 'react';
import classNames from 'classnames';
import InputMask from 'react-input-mask';
import ClockIcon from '@backyard/icons/HistoryOutlined';
import CalendarIcon from '@backyard/icons/Calendar';
import CloseCircleFilledIcon from '@backyard/icons/CloseCircleFilled';
import IconButton from '../IconButton';
import TextInput from '../TextInput';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import useAdapter from './hooks/useAdapter';
import TextPickerWrapper from './styles/TextPickerWrapper';
import { useForwardedRef } from '../utils/hooks';

const getTimeMaskProps = step => ({
  // One Hour (60m) == 3600 seconds
  3600: {
    mask: [/[01]/, /[0-9]/, ':', '0', '0', ' ', /[AP]/, /[M]/],
    maskPlaceholder: '--:00 --'
  },
  // Half Hour (30m) == 1800 seconds
  1800: {
    mask: [/[01]/, /[0-9]/, ':', /[03]/, '0', ' ', /[AP]/, /[M]/],
    maskPlaceholder: '--:-- --'
  },
  // Qarter Hour (15m) == 900 seconds
  900: {
    mask: [/[01]/, /[0-9]/, ':', /[0134]/, /[05]/, ' ', /[AP]/, /[M]/],
    maskPlaceholder: '--:-- --'
  },
  // Sixth Hour (10m) == 600 seconds
  600: {
    mask: [/[01]/, /[0-9]/, ':', /[0-5]/, '0', ' ', /[AP]/, /[M]/],
    maskPlaceholder: '--:-- --'
  },
  // Twelth Hour (5m) == 300 seconds
  300: {
    mask: [/[01]/, /[0-9]/, ':', /[0-5]/, /[05]/, ' ', /[AP]/, /[M]/],
    maskPlaceholder: '--:-- --'
  }
})[step] || getTimeMaskProps(3600);
/**
 * Backyard React Text Picker
 *
 * @todo Comments
 */


const TextPicker = /*#__PURE__*/React.forwardRef(function TextPicker(_ref, ref) {
  let {
    disableNative = false,
    label,
    mask: maskProp,
    maskPlaceholder: maskPlaceholderProp,
    alwaysShowMask: alwaysShowMaskProp,
    beforeMaskedStateChange = state => state,
    min,
    max,
    onChange,
    onClear,
    pattern,
    // = '[0-9]{2}:[0-9]{2}',
    step,
    type = 'date',
    shape: shapeProp,
    // = 'rounded',
    value: valueProp,
    defaultValue,
    // Unused
    textWrapperProps = {},
    wrapperProps = {},
    clearButtonProps = {}
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'TextPicker'
  });
  const {
    isDesktop
  } = theme;
  const {
    shape: shapeContext
  } = theme.context;
  const innerRef = useForwardedRef(ref); // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  const adapter = useAdapter();
  const [value, setValue] = React.useState(valueProp || defaultValue);
  const isDate = type === 'date';
  /**
   * Force event.target to `innerRef`, the text `input`
   *
   * @param {Event} event - DOM Event
   */

  function getEvent(event) {
    return event;
  } // eslint-disable-next-line no-shadow


  const handleChange = (event, value) => {
    setValue(value);

    if (onChange) {
      onChange(event, value);
    }
  };
  /**
   * Handles clear button `onClick` event
   *
   * @param event - click even from clear button
   */


  const handleClearClick = event => {
    // Trigger change event
    handleChange(getEvent(event), '');

    if (onClear) {
      onClear(event);
    }
  }; // eslint-disable-next-line no-shadow


  const valueFromMask = value => {
    const matchesMask = isDate ? value.match(/[/]/g) : value.match(/[-]/g);

    if (!matchesMask) {
      let date = adapter.parse(value, isDate ? 'MM/dd/yyyy' : 'hh:mmaa');

      if (!date) {
        date = adapter.parse(value, isDate ? 'yyyy-MM-dd' : 'HH:mm');
      }

      if (adapter.isValid(date)) {
        return adapter.format(date, isDate ? 'MM/dd/yyyy' : 'hh:mm aa');
      }

      return null;
    }

    return null;
  }; // Default icon for text pickers


  const defaultIcon = isDate ? _CalendarIcon || (_CalendarIcon = /*#__PURE__*/React.createElement(CalendarIcon, {
    className: "no-interaction"
  })) : _ClockIcon || (_ClockIcon = /*#__PURE__*/React.createElement(ClockIcon, {
    className: "no-interaction"
  })); // If value defined, use clear button instead

  const icon = value ? /*#__PURE__*/React.createElement(IconButton, _extends({
    variant: "ghost",
    color: "neutral",
    size: "small"
  }, clearButtonProps, {
    className: classNames('picker-clear-button', clearButtonProps?.className),
    onClick: handleClearClick
  }), _CloseCircleFilledIco || (_CloseCircleFilledIco = /*#__PURE__*/React.createElement(CloseCircleFilledIcon, null))) : defaultIcon;
  const mask = maskProp || (isDate ? '99/99/9999' : getTimeMaskProps(step).mask);
  const maskPlaceholder = maskPlaceholderProp || (isDate ? 'mm/dd/yyyy' : getTimeMaskProps(step).maskPlaceholder);

  const handleMaskedStateChange = ({
    nextState
  }) => {
    // eslint-disable-next-line no-shadow
    const {
      value
    } = nextState;
    const newValue = valueFromMask(value);
    return beforeMaskedStateChange(_extends({}, nextState, {
      value: newValue || value
    }));
  };

  const nativeProps = disableNative ? {
    component: InputMask,
    mask,
    maskPlaceholder,
    alwaysShowMask: isDate && alwaysShowMaskProp,
    beforeMaskedStateChange: handleMaskedStateChange,
    type: 'text'
  } : {
    component: 'input',
    type
  };
  React.useEffect(() => {
    if (isDate && !alwaysShowMaskProp && !adapter.isValid(value)) {
      handleChange(null, '');
    }
  }, [alwaysShowMaskProp]);
  React.useEffect(() => {
    if (disableNative) {
      // eslint-disable-next-line no-shadow
      const value = valueFromMask(valueProp);

      if (value) {
        setValue(value);
      }
    } else {
      setValue(valueProp);
    }
  }, [valueProp]);
  return /*#__PURE__*/React.createElement(TextPickerWrapper, _extends({}, wrapperProps, {
    disableNative: disableNative,
    isDesktop: isDesktop,
    className: classNames(`datepicker-text shape--${shape}`, wrapperProps.className)
  }), /*#__PURE__*/React.createElement(TextInput, _extends({
    required: true // Removes Firefox clear button
    ,
    value: value || '',
    onChange: handleChange,
    label: label,
    itemAfter: icon,
    step: step,
    min: min,
    max: max,
    pattern: pattern,
    wrapperProps: textWrapperProps,
    shape: shape
  }, props, nativeProps, {
    ref: innerRef
  })));
});
TextPicker.bdsName = 'TextPicker';
export { TextPicker };
export default TextPicker;
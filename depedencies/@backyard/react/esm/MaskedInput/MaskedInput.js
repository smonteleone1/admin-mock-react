import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "value", "defaultValue", "icon", "info", "infoProps", "type", "shape", "mask", "onChange"];
import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Info from '@backyard/icons/InfoOutlined';
import TextInput from '../TextInput';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import TextFieldBase from '../TextField/styles/TextFieldBase';
/**
 * @todo comment
 */

var TextFieldWrapper = styled(TextInput).withConfig({
  displayName: "MaskedInput__TextFieldWrapper",
  componentId: "sc-zl8gml-0"
})(["", ""], TextFieldBase);
var MaskedInput = /*#__PURE__*/React.forwardRef(function MaskedInput(_ref, ref) {
  var className = _ref.className,
      _ref$value = _ref.value,
      valueProp = _ref$value === void 0 ? '' : _ref$value,
      defaultValue = _ref.defaultValue,
      icon = _ref.icon,
      info = _ref.info,
      infoProps = _ref.infoProps,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'text' : _ref$type,
      shapeProp = _ref.shape,
      mask = _ref.mask,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'TextField'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Controls the component and handles the value of the component

  var _React$useState = React.useState(defaultValue || valueProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      value = _React$useState2[0],
      setValue = _React$useState2[1];

  var _React$useState3 = React.useState(''),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      originalValue = _React$useState4[0],
      setOriginalValue = _React$useState4[1]; // eslint-disable-line @typescript-eslint/no-unused-vars
  // handle state of valueprop for text input


  React.useEffect(function () {
    if (valueProp !== value) {
      setValue(valueProp);
    }
  }, [valueProp]); // Processed the mask for phone entries

  var handlePhoneMask = function handlePhoneMask(value, mask) {
    var i = 0;
    var lastReplacedIndex = -1;
    var filledMask = mask.replace(/_/g, function (_, j) {
      if (i >= value.length) {
        return '_';
      }

      lastReplacedIndex = j;
      return value[i++]; // eslint-disable-line no-plusplus
    });
    return filledMask.substring(0, lastReplacedIndex + 1);
  }; // Processes the mask for currency. Builds number from back injecting needed leading zero's until there is a bit enough number


  var handleCurrencyMask = function handleCurrencyMask(value) {
    var numValue = parseInt(value, 10);
    var maskedValue;

    if (numValue.toString().length === 1) {
      maskedValue = "$ 0.0".concat(numValue);
    }

    if (numValue.toString().length === 2) {
      maskedValue = "$ 0.".concat(numValue);
    }

    if (numValue.toString().length >= 3) {
      var strValue = numValue.toString();
      var cents = strValue.slice(-2);
      var dollars = strValue.slice(0, -2).split(/(?=(?:\d{3})+$)/).join(",");
      maskedValue = "$ ".concat(dollars, ".").concat(cents);
    }

    return maskedValue;
  };

  var handleMasks = function handleMasks(value) {
    switch (mask) {
      case 'phone':
        return handlePhoneMask(value.replace(/[^\d]/g, ''), '(___) ___-____');

      case 'currency':
        return handleCurrencyMask(value.replace(/[^\d]/g, ''));

      default:
        return '';
    }
  };

  var handleChange = function handleChange(event, value) {
    var newValue = handleMasks(value);
    setValue(newValue);
    setOriginalValue(newValue.replace(/[^\d]/g, ''));

    if (typeof onChange === 'function') {
      onChange(event, {
        maskedValue: newValue,
        typedValue: newValue.replace(/[^\d]/g, '')
      });
    }
  };

  React.useEffect(function () {
    if (mask !== 'currency' && value !== '') {
      var newValue = handleMasks(value);
      setValue(newValue);
      setOriginalValue(newValue.replace(/[^\d]/g, ''));
    }
  }, []);
  /**
   * Layout:
   *
   *  <TextInput />
   */

  return /*#__PURE__*/React.createElement(TextFieldWrapper, _extends({
    className: classNames('textfield', className),
    type: type,
    value: value,
    defaultValue: defaultValue,
    shape: shape,
    iconBefore: icon,
    iconAfter: info ? /*#__PURE__*/React.createElement(Info, _extends({}, infoProps, {
      title: info
    })) : null,
    onChange: handleChange
  }, props, {
    ref: ref
  }));
});
MaskedInput.bdsName = 'MaskedInput';
export { MaskedInput };
export default MaskedInput;
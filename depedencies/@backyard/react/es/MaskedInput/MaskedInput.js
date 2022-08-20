import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "value", "defaultValue", "icon", "info", "infoProps", "type", "shape", "mask", "onChange"];
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

const TextFieldWrapper = styled(TextInput).withConfig({
  displayName: "MaskedInput__TextFieldWrapper",
  componentId: "sc-zl8gml-0"
})(["", ""], TextFieldBase);
const MaskedInput = /*#__PURE__*/React.forwardRef(function MaskedInput(_ref, ref) {
  let {
    className,
    value: valueProp = '',
    defaultValue,
    icon,
    info,
    infoProps,
    type = 'text',
    shape: shapeProp,
    // = 'rounded',
    mask,
    onChange
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'TextField'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Controls the component and handles the value of the component

  const [value, setValue] = React.useState(defaultValue || valueProp);
  const [originalValue, setOriginalValue] = React.useState(''); // eslint-disable-line @typescript-eslint/no-unused-vars
  // handle state of valueprop for text input

  React.useEffect(() => {
    if (valueProp !== value) {
      setValue(valueProp);
    }
  }, [valueProp]); // Processed the mask for phone entries

  const handlePhoneMask = (value, mask) => {
    let i = 0;
    let lastReplacedIndex = -1;
    const filledMask = mask.replace(/_/g, (_, j) => {
      if (i >= value.length) {
        return '_';
      }

      lastReplacedIndex = j;
      return value[i++]; // eslint-disable-line no-plusplus
    });
    return filledMask.substring(0, lastReplacedIndex + 1);
  }; // Processes the mask for currency. Builds number from back injecting needed leading zero's until there is a bit enough number


  const handleCurrencyMask = value => {
    const numValue = parseInt(value, 10);
    let maskedValue;

    if (numValue.toString().length === 1) {
      maskedValue = `$ 0.0${numValue}`;
    }

    if (numValue.toString().length === 2) {
      maskedValue = `$ 0.${numValue}`;
    }

    if (numValue.toString().length >= 3) {
      const strValue = numValue.toString();
      const cents = strValue.slice(-2);
      const dollars = strValue.slice(0, -2).split(/(?=(?:\d{3})+$)/).join(",");
      maskedValue = `$ ${dollars}.${cents}`;
    }

    return maskedValue;
  };

  const handleMasks = value => {
    switch (mask) {
      case 'phone':
        return handlePhoneMask(value.replace(/[^\d]/g, ''), '(___) ___-____');

      case 'currency':
        return handleCurrencyMask(value.replace(/[^\d]/g, ''));

      default:
        return '';
    }
  };

  const handleChange = (event, value) => {
    const newValue = handleMasks(value);
    setValue(newValue);
    setOriginalValue(newValue.replace(/[^\d]/g, ''));

    if (typeof onChange === 'function') {
      onChange(event, {
        maskedValue: newValue,
        typedValue: newValue.replace(/[^\d]/g, '')
      });
    }
  };

  React.useEffect(() => {
    if (mask !== 'currency' && value !== '') {
      const newValue = handleMasks(value);
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
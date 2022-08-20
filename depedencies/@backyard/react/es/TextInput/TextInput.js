import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _CheckCircleFilled;

const _excluded = ["children", "className", "component", "defaultValue", "disabled", "size", "itemBefore", "itemAfter", "id", "customIcon", "hiddenLabel", "label", "onChange", "onClick", "onFocus", "onBlur", "placeholder", "shape", "state", "type", "value", "suffix", "wrapperProps"];
import * as React from 'react';
import classNames from 'classnames';
import CheckCircleFilled from '@backyard/icons/CheckCircleFilled';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import useRandomId from '../utils/hooks/useRandomId';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import useFormControl from '../FormControl/hooks/useFormControl';
import TextInputWrapper from './styles/TextInputWrapper';
import TextInputLabel from './styles/TextInputLabel';
import TextInputFieldset from './styles/TextInputFieldset';
import TextInputFormControl from './styles/TextInputFormControl'; // Check validity of value

const valid = value => !(value === null || value === undefined || value === '');
/**
 * Backyard React Text Input
 *
 * Internal TextInput component that `TextField`, `Search`, `Password`, and `TextArea` extends off of
 *
 * Provides API for easily building more common styled text inputs
 *
 * It is recommended to use the above components before utilizing `TextInput` directly
 */


const TextInput = /*#__PURE__*/React.forwardRef(function TextInput(_ref, ref) {
  let {
    className,
    component,
    defaultValue,
    disabled: disabledProp = false,
    size: sizeProp = 'medium',
    itemBefore,
    itemAfter,
    id: idProp,
    customIcon = false,
    hiddenLabel = false,
    label,
    onChange,
    onClick,
    onFocus,
    onBlur,
    placeholder,
    shape: shapeProp,
    // = 'rounded',
    state: stateProp = 'default',
    type = 'text',
    value: valueProp,
    suffix,
    wrapperProps
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'TextInput'
  }).context; // Controlled value

  const [value, setValue] = React.useState(valid(valueProp) ? valueProp : defaultValue); // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Assign random id to input
  // if id not provided
  // Accessibilty for label -> input

  const id = useRandomId(idProp); // Hold interaction state

  const [interaction, setInteraction] = React.useState(valid(value) ? 'completed' : 'incomplete'); // Hold completion state

  const [completed, setCompleted] = React.useState(valid(value) ? 'completed' : 'incomplete'); // Hold inner ref to force event target to

  const innerRef = useForwardedRef(ref); // Uses FormControl

  const {
    disabled: controlDisabled,
    state: controlState
  } = useFormControl({
    disabled: disabledProp,
    state: stateProp,
    indent: 'size_16'
  }); // Memoize contextual props...

  const {
    size,
    state,
    disabled
  } = React.useMemo(() => ({
    size: sizeProp,
    // Allow FormControl to override props
    state: controlState || stateProp,
    disabled: controlDisabled || disabledProp
  }), [sizeProp, stateProp, disabledProp]); // Value Prop side effects...

  React.useEffect(() => {
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


  const handleChange = event => {
    // @TODO remove evet.persisten when updating to react@17
    // react@17 remove event pooling
    if (event?.persist) {
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


  const handleFocus = event => {
    // @TODO remove evet.persisten when updating to react@17
    // react@17 remove event pooling
    if (event?.persist) {
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


  const handleClick = event => {
    // @TODO remove evet.persisten when updating to react@17
    // react@17 remove event pooling
    if (event?.persist) {
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


  const handleBlur = event => {
    // @TODO remove evet.persisten when updating to react@17
    // react@17 remove event pooling
    if (event?.persist) {
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


  React.useEffect(() => {
    // Set whether or not input is complete
    setCompleted(innerRef.current?.value ? 'completed' : 'incomplete'); // Set whether or not interaction is complete

    setInteraction(innerRef.current?.value ? 'completed' : 'incomplete');
  }, [innerRef.current?.value, value]); // Get HTML tag from `type` prop or use `input` by default

  const Component = component || (type === 'textarea' ? 'textarea' : 'input');
  let ItemAfter;

  if (state === 'success') {
    ItemAfter = _CheckCircleFilled || (_CheckCircleFilled = /*#__PURE__*/React.createElement(CheckCircleFilled, {
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


  return /*#__PURE__*/React.createElement(TextInputWrapper, _extends({
    customIcon: customIcon
  }, wrapperProps, {
    className: classNames(`backyard textinput--wrapper shape--${shape} size--${size}`, state !== 'default' && `state--${state}`, placeholder && 'has--placeholder', itemBefore && 'item--before', itemAfter && 'item--after', interaction && `interaction--${interaction}`, wrapperProps && wrapperProps.className)
  }), /*#__PURE__*/React.createElement(TextInputLabel, {
    htmlFor: id,
    className: classNames(`input-label size--${size} state--${state}`, interaction && `interaction--${interaction}`, itemBefore && 'with-icon-before', hiddenLabel && 'hidden-label')
  }, label), /*#__PURE__*/React.createElement(TextInputFormControl, {
    className: classNames(`form-control shape--${shape} size--${size}`, disabled && "disabled", state !== 'default' && `state--${state}`, interaction && `interaction--${interaction}`)
  }, itemBefore ? /*#__PURE__*/React.cloneElement(itemBefore, {
    className: classNames(itemBefore.props.className, 'item--before')
  }) : null, /*#__PURE__*/React.createElement(Component, _extends({
    type: type,
    id: id,
    className: classNames(`textinput type--${type}`, className, completed, disabled && "disabled"),
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
    className: classNames(ItemAfter.props.className, 'item--after')
  }) : null, suffix ? /*#__PURE__*/React.createElement("div", {
    className: "suffix"
  }, suffix) : null, /*#__PURE__*/React.createElement(TextInputFieldset, {
    className: `text-input-fieldset size--${size}` + (interaction ? ` interaction--${interaction}` : ""),
    "aria-hidden": true
  }, label && !hiddenLabel ? /*#__PURE__*/React.createElement("legend", null, /*#__PURE__*/React.createElement("span", null, label)) : null)));
});
TextInput.bdsName = 'TextInput';
export { TextInput };
export default TextInput;
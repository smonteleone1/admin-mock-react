import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _TriangleUp, _TriangleDown;

const _excluded = ["label"],
      _excluded2 = ["children", "className", "defaultValue", "disabled", "iconOpened", "iconClosed", "id", "interaction", "stacked", "label", "onChange", "onClick", "onKeyDown", "onFocus", "onBlur", "onTouchStart", "onTouchEnd", "open", "readOnly", "shape", "state", "itemBefore", "size", "value", "options", "wrapperProps"];
import * as React from 'react';
import classNames from 'classnames';
import TriangleUp from '@backyard/icons/TriangleUp';
import TriangleDown from '@backyard/icons/TriangleDown';
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent';
import useForwardedRef from '../utils/hooks/useForwardedRef';
import useRandomId from '../utils/hooks/useRandomId';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import { useFormControl } from '../FormControl/hooks/useFormControl';
import Option from './Option';
import SelectWrapper from './styles/SelectWrapper';
import SelectFieldset from './styles/SelectFieldset';
import SelectFormControl from './styles/SelectFormControl';
import SelectLabel from './styles/SelectLabel';
/**
 * Get children of `Select` as `Option`s
 *
 * @param {React.Children} children - children prop of `Select`
 * @param {bool} disabled - disabled prop of `Select`
 */

const getOptionChildren = (children, disabled = false) => React.Children.map(children, child => /*#__PURE__*/React.isValidElement(child) ? typeof child.props.children === 'string' || typeof child.props.children === 'undefined' ? /*#__PURE__*/React.cloneElement(child, {
  disabled: child.props.disabled || disabled
}) : getOptionChildren(child.props.children, child.props.disabled) : null).filter(Boolean);
/**
 * Get children as options from `Select` and map them into array data structure
 *
 * @param {React.Children} children - children prop of `Select`
 */


const getOptions = children => React.Children.toArray(getOptionChildren(children)).map((child, index) => /*#__PURE__*/React.isValidElement(child) ? {
  index,
  value: child.props.value,
  text: child.props.label || child.props.children,
  label: child.props.label || child.props.children,
  disabled: child.props.disabled
} : null);
/**
 * Get single option data structure from children
 *
 * @param {React.Children} children - children prop of `Select`
 * @param {string} value - value to search for
 */


const getOption = (children, value) => {
  const options = getOptions(children);
  const selectedOption = options.filter(option => option.value === value)[0];
  return selectedOption;
};

const getChildren = (options, children) => options ? options.map((_ref, index) => {
  let {
    label: optionLabel
  } = _ref,
      option = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Option, _extends({
    key: index
  }, option), optionLabel);
}) : children;
/**
 * Returns true if option is defined with value that is
 *  * not undefined, and
 *  * not null, and
 *  * not an empty string
 *
 * @param {SelectOptionInfo} option - Option to validate
 * @return {Boolean}
 */


const isComplete = option => typeof option?.value !== 'undefined' && option?.value !== null && option?.value !== '';
/**
 * Backyard React Select
 *
 * Select component that uses native option selection; see `Dropdown` for a custom selector...
 *
 * ```
 *  <Select>
 *      <Option value="1">Option 1</Option>
 *      <Option value="2">Option 2</Option>
 *      <Option value="3">Option 3</Option>
 *  </Select>
 * ```
 *
 * Can group options via `OptionGroup` and allow native selection to handle visuals
 *
 * ```
 *  <Select>
 *      <OptionGroup
 *          label="Group 1"
 *      >
 *          <Option value="11">Option 1</Option>
 *          <Option value="12">Option 2</Option>
 *          <Option value="13">Option 3</Option>
 *      </OptionGroup>
 *      <OptionGroup
 *          label="Group 2"
 *      >
 *          <Option value="21">Option 1</Option>
 *          <Option value="22">Option 2</Option>
 *          <Option value="23">Option 3</Option>
 *      </OptionGroup>
 *  </Select>
 * ```
 *
 * To include helper text, wrap in `FormControl` and use `FormHelperText` to sync visual states
 *
 * ```
 *  <FormControl>
 *      <Select>
 *          <Option value="1">Option 1</Option>
 *          <Option value="2">Option 2</Option>
 *          <Option value="3">Option 3</Option>
 *      </Select>
 *      <FormHelperText>Helper Text</FormHelperText>
 *  </FormControl>
 * ```
 */


const Select = /*#__PURE__*/React.forwardRef(function Select(_ref2, ref) {
  var _span;

  let {
    children: childrenProp,
    className,
    defaultValue,
    disabled: disabledProp = false,
    iconOpened: iconOpenedProp = _TriangleUp || (_TriangleUp = /*#__PURE__*/React.createElement(TriangleUp, null)),
    iconClosed: iconClosedProp = _TriangleDown || (_TriangleDown = /*#__PURE__*/React.createElement(TriangleDown, null)),
    id: idProp,
    interaction: interactionProp = false,
    stacked = false,
    label,
    onChange,
    onClick,
    onKeyDown,
    onFocus,
    onBlur,
    onTouchStart,
    onTouchEnd,
    open: openProp = false,
    readOnly = false,
    shape: shapeProp,
    // = 'rounded',
    state: stateProp = 'default',
    itemBefore,
    size = 'medium',
    value,
    options,
    wrapperProps
  } = _ref2,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'Select'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Calculate `children` if `options` is given

  const children = getChildren(options, childrenProp); // Memoized context props...

  const context = React.useMemo(() => ({
    disabled: disabledProp,
    interaction: defaultValue || value ? 'completed' : 'incomplete',
    open: openProp,
    state: stateProp
  }), [disabledProp, interactionProp, openProp, stateProp]); // Assign random id to input
  // if id not provided
  // Accessibilty for label -> input

  const id = useRandomId(idProp); // Get controlled option from children, if defined

  const controlledOption = getOption(children, value); // Get default option from children, if defined

  const defaultOption = getOption(children, defaultValue) || getOptions(children)[0]; // Hold current option state

  const [option, setOption] = React.useState(controlledOption || defaultOption); // Hold current interaction state

  const [interaction, setInteraction] = React.useState(defaultValue || value ? 'completed' : 'incomplete'); // Hold completion state

  const [completed, setCompleted] = React.useState(isComplete(option) ? 'completed' : 'incomplete');
  const [selectLabel, setSelectLabel] = React.useState(label); // Hold `input` ref

  const innerRef = useForwardedRef(ref); // Uses FormControl

  const control = useFormControl({
    disabled: context.disabled,
    state: context.state,
    indent: 'size_16'
  }); // Allow FormControl to override props

  const state = control.state || context.state;
  const disabled = control.disabled || context.disabled;
  /**
   * Force event.target to `innerRef`, the text `input`
   *
   * @param {Event} event - DOM Event
   */

  function getEvent(event) {
    return event;
  }
  /**
   * Clamp interaction to `active` when
   * external component provides open flag
   *
   * @param {string} interaction - interaction to set
   */


  function dispatchInteraction(action = context.interaction) {
    // If open,
    if (context.open) {
      // Clamp interaction to 'active'
      setInteraction('active');
    } else {
      // Else, set interaction
      setInteraction(action);
    }
  }
  /**
   * Handles `onChange` event for `input`
   *
   * @param {Event} event - DOM Event
   */


  const handleChange = event => {
    // Persist event
    persistSyntheticEvent(event); // Set current option to new selected option

    setOption(getOption(children, event.target.value)); // Set completed if necessary

    setCompleted(event.target.value ? 'completed' : 'incomplete');
    setInteraction(event.target.value !== '' ? 'completed' : 'incomplete'); // Set focused interaction

    dispatchInteraction('focused');
    const selectOption = getOption(children, event.target.value);

    if (stacked) {
      const LabelElement = () => /*#__PURE__*/React.createElement("div", {
        className: "label-element"
      }, _span || (_span = /*#__PURE__*/React.createElement("span", {
        className: "select--label"
      }, label)), /*#__PURE__*/React.createElement("span", {
        className: "select--value"
      }, selectOption.label));

      setSelectLabel( /*#__PURE__*/React.createElement(LabelElement, null));
    } // If `onChange` prop defined,


    if (typeof onChange === 'function') {
      // Trigger function
      onChange(getEvent(event), selectOption);
    }
  };
  /**
   * Handles `onClick` event for `input`
   *
   * @param {Event} event - DOM Event
   */


  const handleClick = event => {
    // Persist event
    persistSyntheticEvent(event); // Set active interaction

    dispatchInteraction('active'); // If `onClick` prop defined,

    if (typeof onClick === 'function') {
      // Trigger function
      onClick(getEvent(event), option);
    }
  };
  /**
   * Handles `onKeyDown` event for `input`
   *
   * @param {Event} event - DOM Event
   */


  const handleKeyDown = event => {
    // Persist event
    persistSyntheticEvent(event); // Get key id

    const key = event.key || event.which; // If space, up arrow, or down arrow pressed,

    if ([' ', 32, 'ArrowUp', 38, 'ArrowDown', 40, 'Enter'].indexOf(key) >= 0) {
      // Set active interaction
      dispatchInteraction('active');
    } // If `onKeyDown` prop defined,


    if (typeof onKeyDown === 'function') {
      // Trigger function
      onKeyDown(getEvent(event), option);
    }
  };
  /**
   * Handles `onFocus` event for `input`
   *
   * @param {Event} event - DOM Event
   */


  const handleFocus = event => {
    // Persist event
    persistSyntheticEvent(event); // Set focused interaction

    dispatchInteraction('focused'); // If `onFocus` prop defined,

    if (typeof onFocus === 'function') {
      // Trigger function
      onFocus(getEvent(event), option);
    }
  };
  /**
   * Handles `onBlur` event for `input`
   *
   * @param {Event} event - DOM Event
   */


  const handleBlur = event => {
    // Persist event
    persistSyntheticEvent(event);

    if (event.target.value !== '' || defaultOption && defaultOption.disabled && defaultOption.text) {
      setInteraction('completed');
    } else {
      dispatchInteraction('incomplete');
    } // Set completed if necessary


    setCompleted(isComplete(option) ? 'completed' : 'incomplete'); // Remove interaction
    // If `onBlur` prop defined,

    if (typeof onBlur === 'function') {
      // Trigger function
      onBlur(getEvent(event), option);
    }
  }; // Event handlers for mobile space


  const mobileEventHandlers = {
    /**
     * Handles `onTouchStart` for input
     *
     * For IOS devices, Safari will display a native
     * select overlay on touch start. Instead, we want
     * the touch start event to function like the click
     * event to display native select when applicable.
     *
     * @param {Event} event - DOM event
     */
    onTouchStart: event => {
      // Prevent native touch overlays
      event.preventDefault(); // Click event

      handleClick(event); // If `onTouchStart` prop defined,

      if (typeof onTouchStart === 'function') {
        // Trigger function
        onTouchStart(getEvent(event));
      }
    },

    /**
     * Handles `onTouchEnd` for input
     *
     * For IOS devices, Safari will display a native
     * select overlay on touch end. This prevents that
     * when the select is read only. When the select is
     * not, it will function normally and display the
     * native select overlay.
     *
     * @param {Event} event - DOM event
     */
    onTouchEnd: event => {
      // If read only,
      if (readOnly) {
        // Prevent native touch overlays
        event.preventDefault();
      } // Blur input


      handleBlur(event); // If `onTouchEnd` prop defined,

      if (typeof onTouchEnd === 'function') {
        // Trigger function
        onTouchEnd(getEvent(event));
      }
    }
  }; // Select value props, if defined

  const valueProps = _extends({}, typeof value !== 'undefined' ? {
    value: option?.value
  } : {}, typeof value === 'undefined' ? {
    defaultValue: defaultOption?.value
  } : {}); // Clone provided opened icon


  const iconOpened = /*#__PURE__*/React.cloneElement(iconOpenedProp, {
    className: classNames("select--arrow item--after", iconOpenedProp.props.className)
  }); // Clone provided closed icon

  const iconClosed = /*#__PURE__*/React.cloneElement(iconClosedProp, {
    className: classNames("select--arrow item--after", iconClosedProp.props.className)
  }); // Side effect for when `option` changes...

  React.useEffect(() => {
    // Calculate whether input was completed
    setCompleted(isComplete(option) ? 'completed' : 'incomplete');
  }, [option]); // Side effect for when `value` changes...

  React.useEffect(() => {
    // If `value` is defined and different,
    if (typeof value !== 'undefined' && value !== option?.value) {
      // Set new option
      setOption(getOption(children, value));
    }
  }, [value]); // Side effect for when `options` changes...

  React.useEffect(() => {
    // If `value` is defined and different,
    if (typeof value !== 'undefined' && value !== option?.value) {
      // Set new option
      setOption(getOption(children, value));
    }
  }, [options]); // Side effect for when `open` prop changes...

  React.useEffect(() => {
    // Dispatch active interaction
    dispatchInteraction(openProp ? 'active' : 'completed');
  }, [openProp]);
  /**
   * Layout:
   *
   *  <div wrapper>
   *      <select>
   *          <option 1>
   *          <option 1>
   *          ...
   *      </select>
   *      <div container>
   *          <icon (icon before) />
   *          <span>
   *              <label />
   *              <span value />
   *          </span>
   *          <arrow (icon after) />
   *      </div>
   *  </div>
   */

  return /*#__PURE__*/React.createElement(SelectWrapper, _extends({}, wrapperProps, {
    className: classNames(`backyard select--wrapper shape--${shape} size--${size}`, state !== 'default' && `state--${state}`, itemBefore && 'item--before', stacked && 'stacked', wrapperProps && wrapperProps.className),
    readOnly: readOnly
  }), /*#__PURE__*/React.createElement(SelectLabel, {
    htmlFor: id,
    className: classNames(`input-label size--${size} state--${state}`, completed === 'incomplete' ? 'incomplete' : 'completed', interaction && `interaction--${interaction}`, itemBefore && 'with-icon-before')
  }, typeof label === 'object' ? label : selectLabel), /*#__PURE__*/React.createElement(SelectFormControl, {
    className: classNames(`form-control shape--${shape} size--${size}`, state !== 'default' && `state--${state}`, interaction && `interaction--${interaction}`)
  }, itemBefore ? /*#__PURE__*/React.cloneElement(itemBefore, {
    className: classNames(itemBefore.props.className, 'item--before')
  }) : null, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    "aria-label": id,
    className: classNames('select--input', className, interaction),
    disabled: disabled || null,
    "data-invalid": state === 'error' || null,
    "aria-invalid": state === 'error' || null,
    ref: innerRef,
    onChange: handleChange,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, mobileEventHandlers, valueProps, props), children), interaction === 'active' ? iconOpened : iconClosed, /*#__PURE__*/React.createElement(SelectFieldset, {
    className: classNames(`text-input-fieldset size--${size}`, openProp ? 'open' : 'closed', completed === 'incomplete' ? 'incomplete' : 'completed', interaction && `interaction--${interaction}`, state !== 'default' && `state--${state}`),
    "aria-hidden": true
  }, /*#__PURE__*/React.createElement("legend", null, /*#__PURE__*/React.createElement("span", null, typeof label === 'object' ? label : selectLabel)))));
});
Select.bdsName = 'Select';
export { Select };
export default Select;
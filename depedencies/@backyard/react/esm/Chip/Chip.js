import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

var _CloseCircleFilled, _Checkmark;

var _excluded = ["className", "checked", "defaultChecked", "disabled", "icon", "id", "label", "name", "onChange", "onClick", "onDelete", "onKeyUp", "onKeyDown", "onFocus", "value", "variant", "subdued", "wrapperProps"];
import * as React from 'react';
import classNames from 'classnames';
import CloseCircleFilled from '@backyard/icons/CloseCircleFilled';
import Checkmark from '@backyard/icons/Checkmark';
import includes from 'core-js-pure/stable/array/includes';
import useControlled from '../utils/hooks/useControlled';
import useForkRef from '../utils/hooks/useForkRef';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import ChipBase from './styles/ChipBase';
/**
 * Backyard React Chip
 *
 * Chip is used to interact with two different types of values in a form:
 *      1. Boolean
 *      2. String Selections
 *
 * > Note: Requires uniquely assigned `id` prop
 * > Note: `label` is always required
 * > Note: `name` is required when `type` is `choice`
 *
 *  <Chip type="filter" id="filter" label="Filter Chip" />
 *  <Chip type="choice" id="choice" name="choice" label="Choice Chip" />
 *  <Chip type="input" id="input" label="Input Chip" />
 *
 * To group `Chip`s horizontally or vertically, use `FormGroup`:
 *
 *  <FormControl>
 *      <FormHeading>Here's some Chips</FormHeading>
 *      <FormGroup
 *          direction="row"
 *      >
 *          <Chip type="filter" id="filter" label="Filter Chip" />
 *          <Chip type="choice" id="choice" name="choice" label="Choice Chip" />
 *          <Chip type="input" id="input" label="Input Chip" />
 *      </FormGroup>
 *      <FormHelperText>Some Helper Text</FormHelperText>
 *  </FormControl>
 */

var Chip = /*#__PURE__*/React.forwardRef(function Chip(_ref, ref) {
  var className = _ref.className,
      checkedProp = _ref.checked,
      defaultChecked = _ref.defaultChecked,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      iconProp = _ref.icon,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? '' : _ref$id,
      label = _ref.label,
      name = _ref.name,
      onChange = _ref.onChange,
      onClick = _ref.onClick,
      onDelete = _ref.onDelete,
      onKeyUp = _ref.onKeyUp,
      onKeyDown = _ref.onKeyDown,
      onFocus = _ref.onFocus,
      value = _ref.value,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'filter' : _ref$variant,
      _ref$subdued = _ref.subdued,
      subdued = _ref$subdued === void 0 ? false : _ref$subdued,
      _ref$wrapperProps = _ref.wrapperProps,
      wrapperProps = _ref$wrapperProps === void 0 ? {} : _ref$wrapperProps,
      other = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme(); // Validate Backyard theme hook

  validateBackyardTheme(theme, 'Chip'); // Use Controlled to manage Uncontrolled behavior of the state of `checked`
  // Determined through default checked

  var _useControlled = useControlled({
    controlled: checkedProp,
    "default": Boolean(defaultChecked),
    name: "Backyard->Chip[type=\"".concat(variant, "\"]->[id=\"").concat(id, "\"]")
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      checked = _useControlled2[0],
      setChecked = _useControlled2[1]; // `input` ref for `Chip`


  var chipRef = React.useRef(null); // Fork forwarded `ref` from `chipRef` so it can be used internally

  var handleRef = useForkRef(chipRef, ref); // State of whether or not `Chip` exists (for input chips)

  var _React$useState = React.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      exists = _React$useState2[0],
      setExists = _React$useState2[1];
  /**
   * Handles `onClick` event of `input`
   * Triggers defined `onDelete` from props if available and of `type` === 'input'
   * Triggers defined `onClick` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleClick = function handleClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation(); // If disabled,

    if (disabled) {
      // Don't trigger
      return;
    } // If 'input' type,


    if (variant === 'input') {
      // Remove chip from existence
      setExists(false); // If `onDelete` prop function defined,

      if (onDelete) {
        // Trigger `onDelete` prop function, passing `Event` argument
        onDelete(event, {
          checked: chipRef.current.checked,
          value: chipRef.current.value
        });
      }
    } // If `onClick` prop function defined,


    if (onClick) {
      // Trigger `onClick` prop function, passing `Event` argument
      onClick(event, {
        checked: chipRef.current.checked,
        value: chipRef.current.value
      });
    }
  };
  /**
   * Handles `onKeyDown` event of `input`
   * Triggers defined `onKeyDown` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleKeyDown = function handleKeyDown(event) {
    // If not disabled,
    if (!disabled) {
      // Get key from event
      var key = event.key; // If space or enter key pressed,

      if (includes([' ', 'Enter'], key)) {
        // Prevent default
        event.preventDefault(); // If `onKeyDown` prop defined,

        if (onKeyDown) {
          // Trigger `onKeyDown` prop function
          onKeyDown(event, {
            checked: chipRef.current.checked,
            value: chipRef.current.value
          });
        }
      }
    }
  };
  /**
   * Handles `onKeyUp` event of `input`
   * Triggers defined `onKeyUp` from props if available
   * Triggers defined `onDelete` from props if available and `type` === 'input'
   *
   * @param {Event} event - DOM event
   */


  var handleKeyUp = function handleKeyUp(event) {
    // If disabled,
    if (disabled) {
      // Don't trigger
      return;
    }

    if (onKeyUp) {
      onKeyUp(event, {
        checked: chipRef.current.checked,
        value: chipRef.current.value
      });
    } // Ignore events from children of `Chip`.


    if (event.currentTarget !== event.target) {
      return;
    }

    var key = event.key; // If 'input' type and Backspace or Delete key pressed,

    if (variant === 'input' && (key === 'Backspace' || key === 'Delete')) {
      // Remove chip from existence
      setExists(false); // If `onDelete` prop function defined,

      if (onDelete) {
        // Trigger `onDelete` prop function, passing `Event` argument
        onDelete(event, {
          checked: chipRef.current.checked,
          value: chipRef.current.value
        });
      } // Else, if escape key pressed,

    } else if (key === 'Escape' && chipRef.current) {
      // Remove focus from chip
      chipRef.current.blur();
    }
  };
  /**
   * Handles `onChange` event of `input`
   * Triggers defined `onChange` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleChange = function handleChange(event) {
    // If disabled,
    if (disabled) {
      // Don't trigger
      return;
    } // Set `checked` value to target's


    setChecked(event.target.checked);

    if (typeof onChange === 'function') {
      // Trigger `onDelete` prop function, passing `Event` argument
      onChange(event, {
        checked: chipRef.current.checked,
        value: chipRef.current.value
      });
    }
  };
  /**
   * Handles `onFocus` event of `input`
   * Triggers defined `onFocus` from props if available
   *
   * @param {Event} event - DOM event
   */


  var handleFocus = function handleFocus(event) {
    // If not disabled,
    if (!disabled) {
      // If `onFocus` prop defined,
      if (onFocus) {
        // Trigger `onFocus` prop function
        onFocus(event, {
          checked: chipRef.current.checked,
          value: chipRef.current.value
        });
      }
    }
  }; // Define delete icon if 'input' type `Chip`...


  var deleteIcon = includes(['input'], variant) ? _CloseCircleFilled || (_CloseCircleFilled = /*#__PURE__*/React.createElement(CloseCircleFilled, {
    className: "chip--delete"
  })) : null; // Define main icon if 'filter' type `Chip` and checked...

  var icon = includes(['filter'], variant) && checked ? _Checkmark || (_Checkmark = /*#__PURE__*/React.createElement(Checkmark, {
    className: "chip--icon"
  })) : // Define main icon if 'input' type `Chip` and icon provided...
  includes(['input'], variant) && iconProp && /*#__PURE__*/React.isValidElement(iconProp) ?
  /*#__PURE__*/
  // Clone icon node to add className
  React.cloneElement(iconProp, {
    className: classNames('chip--icon', iconProp.props.className)
  }) : null; // If chip doesn't exist,

  if (!exists) {
    // Don't render it!
    return null;
  }
  /**
   * Layout:
   *
   *  <ChipBase>
   *      <input />
   *      <label>
   *          <icon (main) />
   *          <span (label) />
   *          <icon (delete) />
   *      </label>
   *  </ChipBase>
   */


  return /*#__PURE__*/React.createElement(ChipBase, _extends({}, wrapperProps, {
    className: classNames("backyard chip variant--".concat(variant), wrapperProps.className, checked && "checked", disabled && "disabled", onDelete && "deletable")
  }), /*#__PURE__*/React.createElement("input", _extends({
    type: variant === 'choice' ? 'radio' : 'checkbox',
    role: variant === 'choice' ? 'radio' : 'checkbox',
    id: id,
    className: classNames('chip--input', className),
    name: name,
    value: value,
    checked: checkedProp,
    defaultChecked: defaultChecked,
    "aria-disabled": disabled ? true : undefined,
    disabled: disabled,
    onChange: handleChange,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    onFocus: handleFocus,
    ref: handleRef
  }, other)), /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    className: 'chip--label' + (subdued ? " subdued" : "")
  }, icon, /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, label), deleteIcon));
});
Chip.bdsName = 'Chip';
export { Chip };
export default Chip;
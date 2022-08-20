import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _CloseCircleFilled, _Checkmark;

const _excluded = ["className", "checked", "defaultChecked", "disabled", "icon", "id", "label", "name", "onChange", "onClick", "onDelete", "onKeyUp", "onKeyDown", "onFocus", "value", "variant", "subdued", "wrapperProps"];
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

const Chip = /*#__PURE__*/React.forwardRef(function Chip(_ref, ref) {
  let {
    className,
    checked: checkedProp,
    defaultChecked,
    disabled = false,
    icon: iconProp,
    id = '',
    label,
    name,
    onChange,
    onClick,
    onDelete,
    onKeyUp,
    onKeyDown,
    onFocus,
    value,
    variant = 'filter',
    subdued = false,
    wrapperProps = {}
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme(); // Validate Backyard theme hook

  validateBackyardTheme(theme, 'Chip'); // Use Controlled to manage Uncontrolled behavior of the state of `checked`
  // Determined through default checked

  const [checked, setChecked] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: `Backyard->Chip[type="${variant}"]->[id="${id}"]`
  }); // `input` ref for `Chip`

  const chipRef = React.useRef(null); // Fork forwarded `ref` from `chipRef` so it can be used internally

  const handleRef = useForkRef(chipRef, ref); // State of whether or not `Chip` exists (for input chips)

  const [exists, setExists] = React.useState(true);
  /**
   * Handles `onClick` event of `input`
   * Triggers defined `onDelete` from props if available and of `type` === 'input'
   * Triggers defined `onClick` from props if available
   *
   * @param {Event} event - DOM event
   */

  const handleClick = event => {
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


  const handleKeyDown = event => {
    // If not disabled,
    if (!disabled) {
      // Get key from event
      const {
        key
      } = event; // If space or enter key pressed,

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


  const handleKeyUp = event => {
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

    const {
      key
    } = event; // If 'input' type and Backspace or Delete key pressed,

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


  const handleChange = event => {
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


  const handleFocus = event => {
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


  const deleteIcon = includes(['input'], variant) ? _CloseCircleFilled || (_CloseCircleFilled = /*#__PURE__*/React.createElement(CloseCircleFilled, {
    className: "chip--delete"
  })) : null; // Define main icon if 'filter' type `Chip` and checked...

  const icon = includes(['filter'], variant) && checked ? _Checkmark || (_Checkmark = /*#__PURE__*/React.createElement(Checkmark, {
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
    className: classNames(`backyard chip variant--${variant}`, wrapperProps.className, checked && "checked", disabled && "disabled", onDelete && "deletable")
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
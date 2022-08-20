import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["ariaControls", "className", "disabled", "id", "index", "label", "onClick", "onKeyDown", "role"];

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import * as React from 'react';
import classNames from 'classnames';
import { TabWrapper } from './style/TabWrapper';
import TabContext from './TabContext';
import { Typography } from '../Typography';
/**
 * Backyard React Tab Component
 *
 *
 */

const Tab = /*#__PURE__*/React.forwardRef(function Tab(_ref, ref) {
  let {
    ariaControls,
    className,
    disabled = false,
    id,
    index,
    label = 'Label',
    onClick,
    onKeyDown,
    role = 'tab'
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // pull handleClick, handleKeyDown, and isOnLayer
  const {
    selected,
    handleClick,
    handleKeyDown,
    isOnLayer
  } = React.useContext(TabContext);
  /**
   * Coerces a boolean value to a string.
   *
   * @param value - the boolean value to coerce
   */

  const booleanCoersion = value => {
    if (value) return 'true';
    return 'false';
  };
  /**
   * Layout:
   *
   * <li>
   *   <a>
   *     <Typography />
   *   </a>
   * </li>
   */


  return /*#__PURE__*/React.createElement(TabWrapper, _extends({
    className: classNames(`tab`, className, disabled && "disabled", selected === index && "selected"),
    isOnLayer: isOnLayer,
    id: id,
    disabled: disabled,
    onClick: event => {
      if (!disabled) {
        handleClick(index, event);

        if (onClick) {
          onClick(event);
        }
      }
    },
    onKeyDown: event => {
      if (!disabled) {
        if (onKeyDown) {
          onKeyDown(event);
        }

        if (handleKeyDown) {
          handleKeyDown(index, event);
        }
      }
    },
    "aria-controls": ariaControls,
    role: role,
    "aria-selected": booleanCoersion(selected === index)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(Typography, {
    variant: "body_2",
    bold: selected === index
  }, label));
});
Tab.bdsName = 'Tab';
export { Tab };
export default Tab;
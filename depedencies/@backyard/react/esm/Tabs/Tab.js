import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["ariaControls", "className", "disabled", "id", "index", "label", "onClick", "onKeyDown", "role"];

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

var Tab = /*#__PURE__*/React.forwardRef(function Tab(_ref, ref) {
  var ariaControls = _ref.ariaControls,
      className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      id = _ref.id,
      index = _ref.index,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Label' : _ref$label,
      _onClick = _ref.onClick,
      _onKeyDown = _ref.onKeyDown,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'tab' : _ref$role,
      props = _objectWithoutProperties(_ref, _excluded);

  // pull handleClick, handleKeyDown, and isOnLayer
  var _React$useContext = React.useContext(TabContext),
      selected = _React$useContext.selected,
      handleClick = _React$useContext.handleClick,
      handleKeyDown = _React$useContext.handleKeyDown,
      isOnLayer = _React$useContext.isOnLayer;
  /**
   * Coerces a boolean value to a string.
   *
   * @param value - the boolean value to coerce
   */


  var booleanCoersion = function booleanCoersion(value) {
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
    className: classNames("tab", className, disabled && "disabled", selected === index && "selected"),
    isOnLayer: isOnLayer,
    id: id,
    disabled: disabled,
    onClick: function onClick(event) {
      if (!disabled) {
        handleClick(index, event);

        if (_onClick) {
          _onClick(event);
        }
      }
    },
    onKeyDown: function onKeyDown(event) {
      if (!disabled) {
        if (_onKeyDown) {
          _onKeyDown(event);
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
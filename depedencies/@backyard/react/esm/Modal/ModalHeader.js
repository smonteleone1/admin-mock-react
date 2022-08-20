import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "icon", "label", "noLine"],
    _excluded2 = ["noLines"];
import * as React from 'react';
import classNames from 'classnames';
import Typography from '../Typography';
import useModal from './useModal';
/**
 * Backyard React Modal Header
 *
 * Component to use as a child of `Modal`
 *
 * Should contain the text for the title of the modal
 *
 * Example:
 *  <ModalHeader
 *      label="Label"
 *      icon={<Settings />}
 *  >
 *      Modal Header
 *  </ModalHeader>
 */

var ModalHeader = /*#__PURE__*/React.forwardRef(function ModalHeader(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      iconProp = _ref.icon,
      labelProp = _ref.label,
      noLineProp = _ref.noLine,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get modal context
  var _ref2 = useModal() || {},
      noLinesContext = _ref2.noLines,
      override = _objectWithoutProperties(_ref2, _excluded2); // Memoize calculated props


  var _React$useMemo = React.useMemo(function () {
    return {
      // Priority: 1. Prop -> 2. Context -> 3. Default Value (false)
      noLine: noLineProp || noLinesContext || false
    };
  }, [noLineProp, noLinesContext]),
      noLine = _React$useMemo.noLine; // Icon component if defined


  var icon = iconProp ? /*#__PURE__*/React.cloneElement(iconProp, {
    className: classNames('modal-header-icon', iconProp.props && iconProp.props.className)
  }) : null; // Label component if defined

  var label = labelProp ? /*#__PURE__*/React.createElement(Typography, {
    className: "modal-header-label",
    variant: "body_1"
  }, labelProp) : null; // Title component

  var title = /*#__PURE__*/React.createElement(Typography, {
    className: "modal-header-text",
    variant: "h4"
  }, children);
  /**
   * Layout:
   *  <div modal-header>
   *      <span label />
   *      <div modal-header-title>
   *          <icon />
   *          <span title />
   *      </div>
   *  </div>
   */

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('modal-header', className, noLine && 'no-line')
  }, props, override, {
    ref: ref
  }), label, /*#__PURE__*/React.createElement("div", {
    className: "modal-header-title"
  }, icon, title));
});
ModalHeader.bdsName = 'ModalHeader';
export { ModalHeader };
export default ModalHeader;
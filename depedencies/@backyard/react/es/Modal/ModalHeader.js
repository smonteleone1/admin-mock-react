import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "icon", "label", "noLine"],
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

const ModalHeader = /*#__PURE__*/React.forwardRef(function ModalHeader(_ref, ref) {
  let {
    children,
    className,
    icon: iconProp,
    label: labelProp,
    noLine: noLineProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get modal context
  const _ref2 = useModal() || {},
        {
    noLines: noLinesContext
  } = _ref2,
        override = _objectWithoutPropertiesLoose(_ref2, _excluded2); // Memoize calculated props


  const {
    noLine
  } = React.useMemo(() => ({
    // Priority: 1. Prop -> 2. Context -> 3. Default Value (false)
    noLine: noLineProp || noLinesContext || false
  }), [noLineProp, noLinesContext]); // Icon component if defined

  const icon = iconProp ? /*#__PURE__*/React.cloneElement(iconProp, {
    className: classNames('modal-header-icon', iconProp.props && iconProp.props.className)
  }) : null; // Label component if defined

  const label = labelProp ? /*#__PURE__*/React.createElement(Typography, {
    className: "modal-header-label",
    variant: "body_1"
  }, labelProp) : null; // Title component

  const title = /*#__PURE__*/React.createElement(Typography, {
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
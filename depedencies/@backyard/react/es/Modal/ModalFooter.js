import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "noLine", "orientation"],
      _excluded2 = ["noLines"];
import * as React from 'react';
import classNames from 'classnames';
import useModal from './useModal';
/**
 * Backyard React Modal Footer
 *
 * Component to use as child of `Modal`
 *
 * Should contain the primary actions of the modal,
 * such as a button for cancelling and action or submitting and action
 *
 * Will automatically space and style children components properly
 *
 * Example:
 *  <ModalFooter>
 *      <Button
 *          variant="secondary"
 *          color="contrast"
 *      >
 *          Cancel
 *      </Button>
 *      <Button>Action</Button>
 *  </ModalFooter>
 */

const ModalFooter = /*#__PURE__*/React.forwardRef(function ModalFooter(_ref, ref) {
  let {
    children,
    className,
    noLine: noLineProp,
    orientation = 'horizontal'
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
  }), [noLineProp, noLinesContext]);
  /**
   * Layout:
   *  <div modal-footer>
   *      ...
   *  </div>
   */

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames(`modal-footer orientation--${orientation}`, className, noLine && 'no-line')
  }, props, override, {
    ref: ref
  }), children);
});
ModalFooter.bdsName = 'ModalFooter';
export { ModalFooter };
export default ModalFooter;
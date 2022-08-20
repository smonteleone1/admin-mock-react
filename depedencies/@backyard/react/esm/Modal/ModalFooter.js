import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "noLine", "orientation"],
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

var ModalFooter = /*#__PURE__*/React.forwardRef(function ModalFooter(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      noLineProp = _ref.noLine,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'horizontal' : _ref$orientation,
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
      noLine = _React$useMemo.noLine;
  /**
   * Layout:
   *  <div modal-footer>
   *      ...
   *  </div>
   */


  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames("modal-footer orientation--".concat(orientation), className, noLine && 'no-line')
  }, props, override, {
    ref: ref
  }), children);
});
ModalFooter.bdsName = 'ModalFooter';
export { ModalFooter };
export default ModalFooter;
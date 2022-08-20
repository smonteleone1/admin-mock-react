import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "orientation"];
import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import ModalFooter from '../Modal/ModalFooter';
import useDrawer from './useDrawer';
var DrawerFooterWrapper = styled(ModalFooter).withConfig({
  displayName: "DrawerFooter__DrawerFooterWrapper",
  componentId: "sc-18cc4le-0"
})([""]);
/**
 * Backyard React Drawer Footer
 *
 * Component to use as child of `Drawer`
 *
 * Should contain the primary actions of the drawer,
 * such as a button for cancelling and action or submitting and action
 *
 * Will automatically space and style children components properly
 *
 * Example:
 *  <DrawerFooter>
 *      <Button
 *          variant="secondary"
 *          color="contrast"
 *      >
 *          Cancel
 *      </Button>
 *      <Button>Action</Button>
 *  </DrawerFooter>
 */

var DrawerFooter = /*#__PURE__*/React.forwardRef(function DrawerFooter(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      orientationProp = _ref.orientation,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get drawer context
  var _ref2 = useDrawer() || {},
      orientationContext = _ref2.orientation; // Memoize calculated props


  var _React$useMemo = React.useMemo(function () {
    return {
      orientation: orientationProp || orientationContext || 'horizontal'
    };
  }, [orientationProp, orientationContext]),
      orientation = _React$useMemo.orientation;

  return /*#__PURE__*/React.createElement(DrawerFooterWrapper, _extends({
    className: classNames('drawer-footer', className),
    orientation: orientation
  }, props, {
    ref: ref
  }), children);
});
DrawerFooter.bdsName = 'DrawerFooter';
export { DrawerFooter };
export default DrawerFooter;
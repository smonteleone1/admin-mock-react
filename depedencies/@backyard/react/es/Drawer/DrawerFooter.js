import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "orientation"];
import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import ModalFooter from '../Modal/ModalFooter';
import useDrawer from './useDrawer';
const DrawerFooterWrapper = styled(ModalFooter).withConfig({
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

const DrawerFooter = /*#__PURE__*/React.forwardRef(function DrawerFooter(_ref, ref) {
  let {
    children,
    className,
    orientation: orientationProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get drawer context
  const {
    orientation: orientationContext
  } = useDrawer() || {}; // Memoize calculated props

  const {
    orientation
  } = React.useMemo(() => ({
    orientation: orientationProp || orientationContext || 'horizontal'
  }), [orientationProp, orientationContext]);
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
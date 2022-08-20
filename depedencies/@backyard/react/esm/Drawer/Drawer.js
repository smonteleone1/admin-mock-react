import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["orientation", "children", "className", "size", "shape"];
import * as React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import useDrawerController from '../DrawerController/useDrawerController';
import DrawerBase from './style/DrawerBase';
var DrawerWrapper = styled(Modal).withConfig({
  displayName: "Drawer__DrawerWrapper",
  componentId: "sc-l9gdgh-0"
})(["", ""], DrawerBase);
/**
 * Backyard React Drawer
 *
 * Barebones drawer component for styling and handling if extended
 *
 * This component contains only the styling for the modal component, not the logic for handling displaying the drawer
 *
 * The children of this component should be one of the three included modal components:
 *
 *  1) `DrawerHeader` (Required) - for the header of the component,
 *      containing the label, title, and an icon if desired
 *
 *  2) `DrawerBody` (Required) - for the body of the component,
 *      containing the body text and any additional components for the modal
 *
 *  3) `DrawerFooter` (Optional) - for the footer of the component,
 *      if any controls are needed for the modal, such as a 'cancel' button, or an action button
 *
 * Example:
 *  <Drawer>
 *      <DrawerHeader
 *          icon={<Settings />}
 *      >
 *          Modal Heading
 *      </DrawerHeader>
 *      <DrawerBody>
 *          Modal Body
 *      </DrawerBody>
 *      <DrawerFooter>
 *          <Button
 *              variant="secondary"
 *              color="contrast"
 *          >
 *              Cancel
 *          </Button>
 *          <Button>Action</Button>
 *      </DrawerFooter>
 *  </Drawer>
 *
 * For controlling this modal, or any other custom modal, use `ModalController`
 *
 *  <DrawerController
 *      modal={(
 *          <Drawer>
 *              <DrawerHeader ... />
 *              <DrawerBody ... />
 *              <DrawerFooter ... />
 *          </Drawer>
 *      )}
 *  />
 */

var Drawer = /*#__PURE__*/React.forwardRef(function Drawer(_ref, ref) {
  var orientationProp = _ref.orientation,
      children = _ref.children,
      className = _ref.className,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      shapeProp = _ref.shape,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get modal context
  var _ref2 = useDrawerController() || {},
      orientationContext = _ref2.orientation; // Memoize calculated props


  var _React$useMemo = React.useMemo(function () {
    return {
      // Priority: 1. Prop -> 2. Context -> Default value ('vertical')
      orientation: orientationProp || orientationContext || 'vertical'
    };
  }, [orientationProp, orientationContext]),
      orientation = _React$useMemo.orientation; // Get Backyard Theme Context


  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'Drawer'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Memoize `DrawerContext`

  var context = React.useMemo(function () {
    return {
      orientation: orientation
    };
  }, [orientation]);
  return /*#__PURE__*/React.createElement(DrawerWrapper, _extends({
    className: "drawer orientation--".concat(orientation, " size--").concat(size),
    shape: shape,
    size: size,
    context: context
  }, props, {
    ref: ref
  }), children);
});
Drawer.bdsName = 'Drawer';
export { Drawer };
export default Drawer;
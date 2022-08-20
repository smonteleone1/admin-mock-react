import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["orientation", "children", "className", "size", "shape"];
import * as React from 'react';
import styled from 'styled-components';
import Modal from '../Modal';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import useDrawerController from '../DrawerController/useDrawerController';
import DrawerBase from './style/DrawerBase';
const DrawerWrapper = styled(Modal).withConfig({
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

const Drawer = /*#__PURE__*/React.forwardRef(function Drawer(_ref, ref) {
  let {
    orientation: orientationProp,
    //  = 'vertical',
    children,
    size = 'medium',
    shape: shapeProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get modal context
  const {
    orientation: orientationContext
  } = useDrawerController() || {}; // Memoize calculated props

  const {
    orientation
  } = React.useMemo(() => ({
    // Priority: 1. Prop -> 2. Context -> Default value ('vertical')
    orientation: orientationProp || orientationContext || 'vertical'
  }), [orientationProp, orientationContext]); // Get Backyard Theme Context

  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'Drawer'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Memoize `DrawerContext`

  const context = React.useMemo(() => ({
    orientation
  }), [orientation]);
  return /*#__PURE__*/React.createElement(DrawerWrapper, _extends({
    className: `drawer orientation--${orientation} size--${size}`,
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
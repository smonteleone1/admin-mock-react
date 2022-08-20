import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className"];
import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import ModalBody from '../Modal/ModalBody';
const DrawerBodyWrapper = styled(ModalBody).withConfig({
  displayName: "DrawerBody__DrawerBodyWrapper",
  componentId: "sc-1aduruo-0"
})([""]);
/**
 * Backyard React Drawer Body
 *
 * Component to use as a child of `Drawer`
 *
 * Contains the body text of the drawer, and any components or other HTML needed for the body
 *
 * Should not contain primary interactions such as buttons for cancelling an action or submitting and action
 * Those primary interactions should be in the `DrawerFooter` component
 *
 * Example:
 *  <DrawerBody>
 *      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
 *      sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
 *      Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
 *      ultrices lorem condimentum, nec ullamcorper felis porttitor.
 *  </DrawerBody>
 */

const DrawerBody = /*#__PURE__*/React.forwardRef(function DrawerBody(_ref, ref) {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  /**
   * Layout:
   *  <ModalBody>
   *      ...
   *  </ModalBody>
   */
  return /*#__PURE__*/React.createElement(DrawerBodyWrapper, _extends({
    className: classNames('drawer-body', className)
  }, props, {
    ref: ref
  }), children);
});
DrawerBody.bdsName = 'DrawerBody';
export { DrawerBody };
export default DrawerBody;
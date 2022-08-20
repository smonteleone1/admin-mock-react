import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className"];
import * as React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import ModalHeader from '../Modal/ModalHeader';
const DrawerHeaderWrapper = styled(ModalHeader).withConfig({
  displayName: "DrawerHeader__DrawerHeaderWrapper",
  componentId: "sc-tydeby-0"
})([""]);
/**
 * Backyard React Drawer Header
 *
 * Component to use as a child of `Drawer`
 *
 * Should contain the text for the title of the drawer
 *
 * Example:
 *  <DrawerHeader
 *      icon={<Settings />}
 *  >
 *      Drawer Header
 *  </DrawerHeader>
 */

const DrawerHeader = /*#__PURE__*/React.forwardRef(function DrawerHeader(_ref, ref) {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(DrawerHeaderWrapper, _extends({
    className: classNames('drawer-header', className)
  }, props, {
    ref: ref
  }), children);
});
DrawerHeader.bdsName = 'DrawerHeader';
export { DrawerHeader };
export default DrawerHeader;
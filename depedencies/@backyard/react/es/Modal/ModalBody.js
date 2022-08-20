import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className"];
import * as React from 'react';
import classNames from 'classnames';
import Typography from '../Typography';

/**
 * Backyard React Modal Body
 *
 * Component to use as a child of `Modal`
 *
 * Contains the body text of the modal, and any components or other HTML needed for the body
 *
 * Should not contain primary interactions such as buttons for cancelling an action or submitting and action
 * Those primary interactions should be in the `ModalFooter` component
 *
 * Example:
 *  <ModalBody>
 *      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus fermentum risus,
 *      sit amet fringilla nunc pellentesque quis. Duis quis odio ultrices, cursus lacus ac, posuere felis.
 *      Donec dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
 *      ultrices lorem condimentum, nec ullamcorper felis porttitor.
 *  </ModalBody>
 */
const ModalBody = /*#__PURE__*/React.forwardRef(function ModalBody(_ref, ref) {
  let {
    children,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  /**
   * Layout:
   *  <p modal-body>
   *      ...
   *  </p>
   */
  return /*#__PURE__*/React.createElement(Typography, _extends({
    className: classNames('modal-body', className),
    variant: "body_1",
    as: "div"
  }, props, {
    ref: ref
  }), children);
});
ModalBody.bdsName = 'ModalBody';
export { ModalBody };
export default ModalBody;
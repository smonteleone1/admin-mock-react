import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _Close;

const _excluded = ["children", "className", "invisible", "size", "shape", "onCloseClick", "closeProps", "noLines", "height", "width", "maxWidth", "maxHeight", "style", "context"];
import * as React from 'react';
import classNames from 'classnames';
import Close from '@backyard/icons/Close';
import IconButton from '../IconButton';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import ModalProvider from './ModalProvider';
import ModalWrapper from './styles/ModalWrapper';
/**
 * Backyard React Modal
 *
 * Barebones modal component for styling and handling if extended
 *
 * This component contains only the styling for the modal component, not the logic for handling displaying the modal
 *
 * The children of this component should be one of the three included modal components:
 *
 *  1) `ModalHeader` (Required) - for the header of the component,
 *      containing the label, title, and an icon if desired
 *
 *  2) `ModalBody` (Required) - for the body of the component,
 *      containing the body text and any additional components for the modal
 *
 *  3) `ModalFooter` (Optional) - for the footer of the component,
 *      if any controls are needed for the modal, such as a 'cancel' button, or an action button
 *
 * Example:
 *  <Modal>
 *      <ModalHeader
 *          label="Label"
 *          icon={<Settings />}
 *      >
 *          Modal Heading
 *      </ModalHeader>
 *      <ModalBody>
 *          Modal Body
 *      </ModalBody>
 *      <ModalFooter>
 *          <Button
 *              variant="secondary"
 *              color="contrast"
 *          >
 *              Cancel
 *          </Button>
 *          <Button>Action</Button>
 *      </ModalFooter>
 *  </Modal>
 *
 * For controlling this modal, or any other custom modal, use `ModalController`
 *
 *  <ModalController
 *      modal={(
 *          <Modal>
 *              <ModalHeader ... />
 *              <ModalBody ... />
 *              <ModalFooter ... />
 *          </Modal>
 *      )}
 *  />
 */

const Modal = /*#__PURE__*/React.forwardRef(function Modal(_ref, ref) {
  let {
    children,
    className,
    invisible,
    size = 'medium',
    shape: shapeProp,
    // = 'rounded',
    onCloseClick,
    closeProps = {},
    noLines = false,
    height,
    width,
    maxWidth,
    maxHeight,
    style: styleProp,
    context
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'Modal'
  }); // Get shape context from theme

  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  /**
   * Handles event logic when close button is clicked
   *
   * @param {Event} event - DOM event
   */

  const handleCloseClick = event => {
    // Trigger `onCloseClick` if defined
    if (onCloseClick) {
      onCloseClick(event);
    }
  }; // Memoize style prop


  const style = React.useMemo(() => _extends({
    '--style-modal-width': theme.sizes[width] || width || 'auto',
    '--style-modal-height': theme.sizes[height] || height || 'auto',
    '--style-modal-max-width': theme.sizes[maxWidth] || maxWidth || '100vw',
    '--style-modal-max-height': theme.sizes[maxHeight] || maxHeight || '100vh'
  }, styleProp), [theme.name, styleProp]); // Create modal close button

  const close = /*#__PURE__*/React.createElement(IconButton, _extends({
    className: "modal-close",
    variant: "ghost",
    color: "neutral",
    size: "small",
    ariaTitle: "modal-close",
    onClick: handleCloseClick,
    shape: shape
  }, closeProps), _Close || (_Close = /*#__PURE__*/React.createElement(Close, null)));
  /**
   * Layout:
   *  <div wrapper>
   *      <IconButton close />
   *      ...
   *  </div>
   */

  return /*#__PURE__*/React.createElement(ModalProvider, {
    noLines: noLines,
    context: context
  }, /*#__PURE__*/React.createElement(ModalWrapper, _extends({
    className: classNames(`modal size--${size} shape--${shape}`, className, invisible && "invisible", noLines && 'no-lines'),
    tabIndex: "-1",
    style: style
  }, props, {
    ref: ref
  }), close, children));
});
Modal.bdsName = 'Modal';
export { Modal };
export default Modal;
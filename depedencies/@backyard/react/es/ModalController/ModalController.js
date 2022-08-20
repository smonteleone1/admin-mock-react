import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "modal", "open", "onClose", "onOpen", "style", "modalStyle", "position", "context", "override"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme } from '../ThemeProvider';
import ModalHandler from './ModalHandler';
import ModalControllerProvider from './ModalControllerProvider';
/**
 * Backyard React Modal Controller
 *
 * Extends from `ModalHandler` to offer and cleaner API to work with
 *
 * Controls modal defined in `modal` prop with basic closing/opening handling
 *
 * For more API controls integrated with this HOC, see `ModalHandler`
 *
 * Example:
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

const ModalController = /*#__PURE__*/React.forwardRef(function ModalController(_ref, ref) {
  let {
    className,
    modal: modalProp,
    open: openProp = false,
    onClose,
    onOpen,
    style: styleProp,
    modalStyle: modalStyleProp,
    position = {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    context,
    override
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme
  const theme = useBackyardTheme({
    validate: true,
    name: 'ModalController'
  }); // Track whether or not modal is open

  const [open, setOpen] = React.useState(openProp);
  /**
   * Close the modal
   */

  const closeModal = () => {
    setOpen(false);

    if (onClose) {
      onClose();
    }
  };
  /**
   * Open the modal
   */


  const openModal = () => {
    setOpen(true);

    if (onOpen) {
      onOpen();
    }
  }; // Side effect for handling whether to open or close modal when `openProp` changes from external sources


  React.useEffect(() => openProp ? openModal() : closeModal(), [openProp]); // Memoize style prop

  const style = React.useMemo(() => _extends({
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: theme.zIndex.modal
  }, styleProp), [theme.name, styleProp]); // Memoize modal style

  const modalStyle = React.useMemo(() => _extends({}, position, {
    zIndex: theme.zIndex.modal + 1
  }, modalProp?.props?.style, modalStyleProp), [theme.zIndex, modalStyleProp, position]); // Memoize modal render

  const modal = React.useMemo(() => /*#__PURE__*/React.cloneElement(modalProp, {
    style: modalStyle,
    onCloseClick: () => closeModal()
  }), [modalStyle]);
  /**
   * Layout:
   *  <ModalHandler>
   *      ...
   *  </ModalHandler>
   */

  return /*#__PURE__*/React.createElement(ModalControllerProvider, {
    open: open,
    context: context,
    override: override
  }, /*#__PURE__*/React.createElement(ModalHandler, _extends({
    className: classNames('modal-controller', className, open ? "opened" : "closed"),
    open: open,
    onEscapeKeyDown: () => closeModal(),
    onOverlayClick: () => closeModal(),
    style: style
  }, props, {
    ref: ref
  }), modal));
});
ModalController.bdsName = 'ModalController';
export { ModalController };
export default ModalController;
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "modal", "open", "onClose", "onOpen", "style", "modalStyle", "position", "context", "override"];
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

var ModalController = /*#__PURE__*/React.forwardRef(function ModalController(_ref, ref) {
  var className = _ref.className,
      modalProp = _ref.modal,
      _ref$open = _ref.open,
      openProp = _ref$open === void 0 ? false : _ref$open,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen,
      styleProp = _ref.style,
      modalStyleProp = _ref.modalStyle,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  } : _ref$position,
      context = _ref.context,
      override = _ref.override,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme
  var theme = useBackyardTheme({
    validate: true,
    name: 'ModalController'
  }); // Track whether or not modal is open

  var _React$useState = React.useState(openProp),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];
  /**
   * Close the modal
   */


  var closeModal = function closeModal() {
    setOpen(false);

    if (onClose) {
      onClose();
    }
  };
  /**
   * Open the modal
   */


  var openModal = function openModal() {
    setOpen(true);

    if (onOpen) {
      onOpen();
    }
  }; // Side effect for handling whether to open or close modal when `openProp` changes from external sources


  React.useEffect(function () {
    return openProp ? openModal() : closeModal();
  }, [openProp]); // Memoize style prop

  var style = React.useMemo(function () {
    return _extends({
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: theme.zIndex.modal
    }, styleProp);
  }, [theme.name, styleProp]); // Memoize modal style

  var modalStyle = React.useMemo(function () {
    var _modalProp$props;

    return _extends({}, position, {
      zIndex: theme.zIndex.modal + 1
    }, modalProp === null || modalProp === void 0 ? void 0 : (_modalProp$props = modalProp.props) === null || _modalProp$props === void 0 ? void 0 : _modalProp$props.style, modalStyleProp);
  }, [theme.zIndex, modalStyleProp, position]); // Memoize modal render

  var modal = React.useMemo(function () {
    return /*#__PURE__*/React.cloneElement(modalProp, {
      style: modalStyle,
      onCloseClick: function onCloseClick() {
        return closeModal();
      }
    });
  }, [modalStyle]);
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
    onEscapeKeyDown: function onEscapeKeyDown() {
      return closeModal();
    },
    onOverlayClick: function onOverlayClick() {
      return closeModal();
    },
    style: style
  }, props, {
    ref: ref
  }), modal));
});
ModalController.bdsName = 'ModalController';
export { ModalController };
export default ModalController;
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["OverlayComponent", "overlayProps", "children", "className", "container", "disableAutoFocus", "disableOverlayClick", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideOverlay", "keepMounted", "manager", "onOverlayClick", "onOpen", "onClose", "onEscapeKeyDown", "onRendered", "open"];
import * as React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import ownerDocument from '../utils/functions/ownerDocument';
import useForkRef from '../utils/hooks/useForkRef';
import useEventCallback from '../utils/hooks/useEventCallback';
import Portal from '../Portal';
import TrapFocus from '../TrapFocus';
import Overlay from '../Overlay';
import ModalManager, { ariaHidden } from './ModalManager';
import ModalHandlerWrapper from './styles/ModalHandlerWrapper';

/**
 * Gets container node from DOM if needed
 *
 * @param {func|node} container
 */
function getContainer(container) {
  // eslint-disable-next-line no-param-reassign
  container = typeof container === 'function' ? container() : container; // eslint-disable-next-line react/no-find-dom-node

  return ReactDOM.findDOMNode(container);
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.


var defaultManager = new ModalManager();
/**
 * Backyard React Modal Handler
 *
 * This component is used to extend the higher ordered component `ModalController`
 * Abstracts some of the complexity for future extending, if needed
 *
 * Heavily influenced by Material UI's Modal Component
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Modal/Modal.js
 */

var ModalHandler = /*#__PURE__*/React.forwardRef(function ModalHandler(_ref, ref) {
  var _ref$OverlayComponent = _ref.OverlayComponent,
      OverlayComponent = _ref$OverlayComponent === void 0 ? Overlay : _ref$OverlayComponent,
      _ref$overlayProps = _ref.overlayProps,
      overlayProps = _ref$overlayProps === void 0 ? {} : _ref$overlayProps,
      children = _ref.children,
      className = _ref.className,
      container = _ref.container,
      _ref$disableAutoFocus = _ref.disableAutoFocus,
      disableAutoFocus = _ref$disableAutoFocus === void 0 ? false : _ref$disableAutoFocus,
      _ref$disableOverlayCl = _ref.disableOverlayClick,
      disableOverlayClick = _ref$disableOverlayCl === void 0 ? false : _ref$disableOverlayCl,
      _ref$disableEnforceFo = _ref.disableEnforceFocus,
      disableEnforceFocus = _ref$disableEnforceFo === void 0 ? false : _ref$disableEnforceFo,
      _ref$disableEscapeKey = _ref.disableEscapeKeyDown,
      disableEscapeKeyDown = _ref$disableEscapeKey === void 0 ? false : _ref$disableEscapeKey,
      _ref$disablePortal = _ref.disablePortal,
      disablePortal = _ref$disablePortal === void 0 ? false : _ref$disablePortal,
      _ref$disableRestoreFo = _ref.disableRestoreFocus,
      disableRestoreFocus = _ref$disableRestoreFo === void 0 ? false : _ref$disableRestoreFo,
      _ref$disableScrollLoc = _ref.disableScrollLock,
      disableScrollLock = _ref$disableScrollLoc === void 0 ? false : _ref$disableScrollLoc,
      _ref$hideOverlay = _ref.hideOverlay,
      hideOverlay = _ref$hideOverlay === void 0 ? false : _ref$hideOverlay,
      _ref$keepMounted = _ref.keepMounted,
      keepMounted = _ref$keepMounted === void 0 ? false : _ref$keepMounted,
      _ref$manager = _ref.manager,
      manager = _ref$manager === void 0 ? defaultManager : _ref$manager,
      onOverlayClick = _ref.onOverlayClick,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      onEscapeKeyDown = _ref.onEscapeKeyDown,
      onRendered = _ref.onRendered,
      open = _ref.open,
      props = _objectWithoutProperties(_ref, _excluded);

  // Modal refs
  var modal = React.useRef({});
  var mountNodeRef = React.useRef(null);
  var modalRef = React.useRef(null);
  var handleRef = useForkRef(modalRef, ref);
  /**
   * Gets nearest DOM document that owns modal ref
   */

  var getDoc = function getDoc() {
    return ownerDocument(mountNodeRef.current);
  };
  /**
   * Gets modal from ref
   */


  var getModal = function getModal() {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };
  /**
   * Calls the modal manager's mount logic to handle mounting to DOM
   */


  var handleMounted = function handleMounted() {
    manager.mount(getModal(), {
      disableScrollLock: disableScrollLock
    }); // Fix a bug on Chrome where the scroll isn't initially 0

    modalRef.current.scrollTop = 0;
  };
  /**
   * Handles modal opening
   */


  var handleOpen = useEventCallback(function () {
    // Gets current container from DOM document structure
    var resolvedContainer = getContainer(container) || getDoc().body; // Adds modal to container DOM

    manager.add(getModal(), resolvedContainer); // The element was already mounted

    if (modalRef.current) {
      handleMounted();
    } // Call `onOpen` trigger if defined


    if (typeof onOpen === 'function') {
      onOpen();
    }
  });
  /**
   * Determines whether or not modal is top modal (in case multiple modals are mounted)
   */

  var isTopModal = React.useCallback(function () {
    return manager.isTopModal(getModal());
  }, [manager]);
  /**
   * Handles setting portal reference
   */

  var handlePortalRef = useEventCallback(function (node) {
    // Set current ref to portal
    mountNodeRef.current = node; // Don't call rendered trigger functions

    if (!node) {
      return;
    } // Call `onRendered` prop if defined


    if (onRendered) {
      onRendered();
    } // Handle mount if modal is top and open


    if (open && isTopModal()) {
      handleMounted();
    } else {
      // Hide below or unopened modal
      ariaHidden(modalRef.current, true);
    }
  });
  /**
   * Handles modal close logic
   */

  var handleClose = React.useCallback(function () {
    // Remove modal via manager
    manager.remove(getModal()); // Call `onClose` trigger function if defined

    if (typeof onClose === 'function') {
      onClose();
    }
  }, [manager, onClose]); // Handle close when React unmounts component

  React.useEffect(function () {
    return function () {
      handleClose();
    };
  }, [handleClose]); // Rerenders component when `open` prop changes

  React.useEffect(function () {
    if (open) {
      handleOpen();
    } else {
      handleClose();
    }
  }, [open, handleClose, handleOpen]);
  /**
   * Handles event when overlay is clicked
   *
   * @param {Event} event - DOM Event
   */

  var handleOverlayClick = function handleOverlayClick(event) {
    // Ignore when child of overlay is clicked
    if (event.target !== event.currentTarget) {
      return;
    } // Trigger `onOverlayClick` if defined


    if (onOverlayClick) {
      onOverlayClick(event);
    } // Trigger `onClose` if defined and not disabled


    if (!disableOverlayClick && onClose) {
      onClose(event, 'overlayClick');
    }
  };
  /**
   * Handles key down event, for escape key
   *
   * @param {Event} event - DOM Event
   */


  var handleKeyDown = function handleKeyDown(event) {
    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviours like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    } // Swallow the event, in case someone is listening for the escape key on the body.


    event.stopPropagation(); // Trigger `onEscapeKeyDown` if defined

    if (onEscapeKeyDown) {
      onEscapeKeyDown(event);
    } // Trigger `onClose` if defined and not disabled


    if (!disableEscapeKeyDown && onClose) {
      onClose(event, 'escapeKeyDown');
    }
  }; // Don't render component if closed and not keeping modal mounted


  if (!keepMounted && !open) {
    return null;
  } // Props to set child with


  var childProps = {};

  if (children.props.tabIndex === undefined) {
    // Forces child to tab focus
    childProps.tabIndex = children.props.tabIndex || '-1';
  }
  /**
   * Layout:
   *  <Portal>
   *      <div modal-handler>
   *          <Overlay />
   *          <TrapFocus>
   *              ...
   *          </TrapFocus>
   *      </div>
   *  </Portal>
   */


  return /*#__PURE__*/React.createElement(Portal, {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal
  }, /*#__PURE__*/React.createElement(ModalHandlerWrapper, _extends({
    className: classNames('modal-handler', className, keepMounted && 'keep-mounted'),
    ref: handleRef,
    onKeyDown: handleKeyDown,
    role: "presentation"
  }, props), hideOverlay ? null : /*#__PURE__*/React.createElement(OverlayComponent, _extends({
    open: open,
    onClick: handleOverlayClick
  }, overlayProps)), /*#__PURE__*/React.createElement(TrapFocus, {
    disableEnforceFocus: disableEnforceFocus,
    disableAutoFocus: disableAutoFocus,
    disableRestoreFocus: disableRestoreFocus,
    getDoc: getDoc,
    isEnabled: isTopModal,
    open: open
  }, /*#__PURE__*/React.cloneElement(children, _extends({}, childProps)))));
});
ModalHandler.bdsName = 'ModalHandler';
export { ModalHandler };
export default ModalHandler;
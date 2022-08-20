"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalController = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ThemeProvider = require("../ThemeProvider");

var _ModalHandler = _interopRequireDefault(require("./ModalHandler"));

var _ModalControllerProvider = _interopRequireDefault(require("./ModalControllerProvider"));

var _excluded = ["className", "modal", "open", "onClose", "onOpen", "style", "modalStyle", "position", "context", "override"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'ModalController'
  }); // Track whether or not modal is open

  var _React$useState = React.useState(openProp),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
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
    return (0, _extends2["default"])({
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

    return (0, _extends2["default"])({}, position, {
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

  return /*#__PURE__*/React.createElement(_ModalControllerProvider["default"], {
    open: open,
    context: context,
    override: override
  }, /*#__PURE__*/React.createElement(_ModalHandler["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])('modal-controller', className, open ? "opened" : "closed"),
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
exports.ModalController = ModalController;
ModalController.bdsName = 'ModalController';
var _default = ModalController;
exports["default"] = _default;
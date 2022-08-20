"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Modal = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Close2 = _interopRequireDefault(require("@backyard/icons/Close"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var _ThemeProvider = require("../ThemeProvider");

var _ModalProvider = _interopRequireDefault(require("./ModalProvider"));

var _ModalWrapper = _interopRequireDefault(require("./styles/ModalWrapper"));

var _Close;

var _excluded = ["children", "className", "invisible", "size", "shape", "onCloseClick", "closeProps", "noLines", "height", "width", "maxWidth", "maxHeight", "style", "context"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
var Modal = /*#__PURE__*/React.forwardRef(function Modal(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      invisible = _ref.invisible,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      shapeProp = _ref.shape,
      onCloseClick = _ref.onCloseClick,
      _ref$closeProps = _ref.closeProps,
      closeProps = _ref$closeProps === void 0 ? {} : _ref$closeProps,
      _ref$noLines = _ref.noLines,
      noLines = _ref$noLines === void 0 ? false : _ref$noLines,
      height = _ref.height,
      width = _ref.width,
      maxWidth = _ref.maxWidth,
      maxHeight = _ref.maxHeight,
      styleProp = _ref.style,
      context = _ref.context,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  // Get Backyard Theme Context
  var theme = (0, _ThemeProvider.useBackyardTheme)({
    validate: true,
    name: 'Modal'
  }); // Get shape context from theme

  var shapeContext = theme.context.shape; // Calculate shape

  var shape = (0, _ThemeProvider.getShape)(shapeProp, shapeContext);
  /**
   * Handles event logic when close button is clicked
   *
   * @param {Event} event - DOM event
   */

  var handleCloseClick = function handleCloseClick(event) {
    // Trigger `onCloseClick` if defined
    if (onCloseClick) {
      onCloseClick(event);
    }
  }; // Memoize style prop


  var style = React.useMemo(function () {
    return (0, _extends2["default"])({
      '--style-modal-width': theme.sizes[width] || width || 'auto',
      '--style-modal-height': theme.sizes[height] || height || 'auto',
      '--style-modal-max-width': theme.sizes[maxWidth] || maxWidth || '100vw',
      '--style-modal-max-height': theme.sizes[maxHeight] || maxHeight || '100vh'
    }, styleProp);
  }, [theme.name, styleProp]); // Create modal close button

  var close = /*#__PURE__*/React.createElement(_IconButton["default"], (0, _extends2["default"])({
    className: "modal-close",
    variant: "ghost",
    color: "neutral",
    size: "small",
    ariaTitle: "modal-close",
    onClick: handleCloseClick,
    shape: shape
  }, closeProps), _Close || (_Close = /*#__PURE__*/React.createElement(_Close2["default"], null)));
  /**
   * Layout:
   *  <div wrapper>
   *      <IconButton close />
   *      ...
   *  </div>
   */

  return /*#__PURE__*/React.createElement(_ModalProvider["default"], {
    noLines: noLines,
    context: context
  }, /*#__PURE__*/React.createElement(_ModalWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("modal size--".concat(size, " shape--").concat(shape), className, invisible && "invisible", noLines && 'no-lines'),
    tabIndex: "-1",
    style: style
  }, props, {
    ref: ref
  }), close, children));
});
exports.Modal = Modal;
Modal.bdsName = 'Modal';
var _default = Modal;
exports["default"] = _default;
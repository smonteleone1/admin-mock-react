"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Accordion = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TriangleDown2 = _interopRequireDefault(require("@backyard/icons/TriangleDown"));

var _TriangleUp2 = _interopRequireDefault(require("@backyard/icons/TriangleUp"));

var _PlusFilled2 = _interopRequireDefault(require("@backyard/icons/PlusFilled"));

var _MinusFilled2 = _interopRequireDefault(require("@backyard/icons/MinusFilled"));

var _AccordionWrapper = _interopRequireDefault(require("./styles/AccordionWrapper"));

var _TriangleDown, _PlusFilled, _TriangleUp, _MinusFilled;

var _excluded = ["children", "className", "title", "subtitle", "open", "defaultOpen", "keepMounted", "size", "variant", "color", "onClick", "onOpen", "onClose"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Accordion
 *
 * Accordion uses chevronUp and chevronDown by default. To use the plus and minus
 * icons, you can change openIcon to 'plus' and closeIcon to 'minus'.
 *
 * The accordion size is medium by default.
 *
 * <Accordion
 *  title="Title"
 * >
 *     This is the contents of the accordion.
 * </Accordion>
 *
 */
var Accordion = /*#__PURE__*/React.forwardRef(function Accordion(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      subtitle = _ref.subtitle,
      openProp = _ref.open,
      _ref$defaultOpen = _ref.defaultOpen,
      defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
      _ref$keepMounted = _ref.keepMounted,
      keepMounted = _ref$keepMounted === void 0 ? true : _ref$keepMounted,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'triangle' : _ref$variant,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'transparent' : _ref$color,
      onClick = _ref.onClick,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  // State of whether or not <Accordion> is open
  var _React$useState = React.useState(openProp || defaultOpen),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1]; // Get relevant icons from icon maps


  var mappedOpenIcon = variant === 'triangle' ? _TriangleDown || (_TriangleDown = /*#__PURE__*/React.createElement(_TriangleDown2["default"], {
    color: "action_interactive"
  })) : _PlusFilled || (_PlusFilled = /*#__PURE__*/React.createElement(_PlusFilled2["default"], {
    color: "action_interactive"
  }));
  var mappedCloseIcon = variant === 'triangle' ? _TriangleUp || (_TriangleUp = /*#__PURE__*/React.createElement(_TriangleUp2["default"], {
    color: "action_interactive"
  })) : _MinusFilled || (_MinusFilled = /*#__PURE__*/React.createElement(_MinusFilled2["default"], {
    color: "action_interactive"
  }));
  /**
   * Handles the `onOpen` event of the accordion header
   * Triggers defined `onOpen` from props if available
   *
   * @param {Event} event - DOM event
   */

  function openAccordion() {
    setOpen(true);

    if (onOpen) {
      onOpen();
    }
  }
  /**
   * Handles the `onClose` event of the accordion header
   * Triggers defined `onClose` from props if available
   *
   * @param {Event} event - DOM event
   */


  function closeAccordion() {
    setOpen(false);

    if (onClose) {
      onClose();
    }
  }
  /**
   * Toggle opened/closed state
   */


  function handleClick(event) {
    if (open) {
      closeAccordion();
    } else {
      openAccordion();
    }

    if (onClick) {
      onClick(event, !open);
    }
  } // Side effect to control open state externally


  React.useEffect(function () {
    return openProp ? openAccordion() : closeAccordion();
  }, [openProp]);
  /**
   * Layout:
   * <div wrapper>
   *  <span header>
   *    <Typography title>
   *
   *    <span>
   *      <svg icon>
   *    </span>
   *  </span>
   *
   *  <span>
   *    <children>
   *  </span>
   * </div>
   */

  return /*#__PURE__*/React.createElement(_AccordionWrapper["default"], (0, _extends2["default"])({
    className: (0, _classnames["default"])("backyard accordion variant--".concat(variant, " color--").concat(color, " size--").concat(size), open ? 'opened' : 'closed', className),
    size: size
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "accordion-header " + (open ? 'opened' : 'closed'),
    onClick: handleClick,
    tabIndex: 0
  }, /*#__PURE__*/React.createElement("div", {
    className: "accordion-title-group"
  }, /*#__PURE__*/React.createElement("span", {
    className: "accordion-title"
  }, title), size === 'large' ? /*#__PURE__*/React.createElement("span", {
    className: "accordion-subtitle"
  }, subtitle) : null), /*#__PURE__*/React.createElement("div", {
    className: "accordion-icon"
  }, open ? mappedCloseIcon : mappedOpenIcon)), open || keepMounted ? /*#__PURE__*/React.createElement("span", {
    className: "accordion-content " + (open ? 'opened' : 'closed'),
    "aria-hidden": "true"
  }, children) : null);
});
exports.Accordion = Accordion;
Accordion.bdsName = 'Accordion';
var _default = Accordion;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalHeader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _useModal = _interopRequireDefault(require("./useModal"));

var _excluded = ["children", "className", "icon", "label", "noLine"],
    _excluded2 = ["noLines"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Modal Header
 *
 * Component to use as a child of `Modal`
 *
 * Should contain the text for the title of the modal
 *
 * Example:
 *  <ModalHeader
 *      label="Label"
 *      icon={<Settings />}
 *  >
 *      Modal Header
 *  </ModalHeader>
 */
var ModalHeader = /*#__PURE__*/React.forwardRef(function ModalHeader(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      iconProp = _ref.icon,
      labelProp = _ref.label,
      noLineProp = _ref.noLine,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  // Get modal context
  var _ref2 = (0, _useModal["default"])() || {},
      noLinesContext = _ref2.noLines,
      override = (0, _objectWithoutProperties2["default"])(_ref2, _excluded2); // Memoize calculated props


  var _React$useMemo = React.useMemo(function () {
    return {
      // Priority: 1. Prop -> 2. Context -> 3. Default Value (false)
      noLine: noLineProp || noLinesContext || false
    };
  }, [noLineProp, noLinesContext]),
      noLine = _React$useMemo.noLine; // Icon component if defined


  var icon = iconProp ? /*#__PURE__*/React.cloneElement(iconProp, {
    className: (0, _classnames["default"])('modal-header-icon', iconProp.props && iconProp.props.className)
  }) : null; // Label component if defined

  var label = labelProp ? /*#__PURE__*/React.createElement(_Typography["default"], {
    className: "modal-header-label",
    variant: "body_1"
  }, labelProp) : null; // Title component

  var title = /*#__PURE__*/React.createElement(_Typography["default"], {
    className: "modal-header-text",
    variant: "h4"
  }, children);
  /**
   * Layout:
   *  <div modal-header>
   *      <span label />
   *      <div modal-header-title>
   *          <icon />
   *          <span title />
   *      </div>
   *  </div>
   */

  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('modal-header', className, noLine && 'no-line')
  }, props, override, {
    ref: ref
  }), label, /*#__PURE__*/React.createElement("div", {
    className: "modal-header-title"
  }, icon, title));
});
exports.ModalHeader = ModalHeader;
ModalHeader.bdsName = 'ModalHeader';
var _default = ModalHeader;
exports["default"] = _default;
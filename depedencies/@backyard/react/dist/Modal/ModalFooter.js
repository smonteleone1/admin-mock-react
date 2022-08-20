"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ModalFooter = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _useModal = _interopRequireDefault(require("./useModal"));

var _excluded = ["children", "className", "noLine", "orientation"],
    _excluded2 = ["noLines"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Modal Footer
 *
 * Component to use as child of `Modal`
 *
 * Should contain the primary actions of the modal,
 * such as a button for cancelling and action or submitting and action
 *
 * Will automatically space and style children components properly
 *
 * Example:
 *  <ModalFooter>
 *      <Button
 *          variant="secondary"
 *          color="contrast"
 *      >
 *          Cancel
 *      </Button>
 *      <Button>Action</Button>
 *  </ModalFooter>
 */
var ModalFooter = /*#__PURE__*/React.forwardRef(function ModalFooter(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      noLineProp = _ref.noLine,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'horizontal' : _ref$orientation,
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
      noLine = _React$useMemo.noLine;
  /**
   * Layout:
   *  <div modal-footer>
   *      ...
   *  </div>
   */


  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])("modal-footer orientation--".concat(orientation), className, noLine && 'no-line')
  }, props, override, {
    ref: ref
  }), children);
});
exports.ModalFooter = ModalFooter;
ModalFooter.bdsName = 'ModalFooter';
var _default = ModalFooter;
exports["default"] = _default;
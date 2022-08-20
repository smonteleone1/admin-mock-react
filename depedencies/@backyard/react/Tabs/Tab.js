"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Tab = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabWrapper = require("./style/TabWrapper");

var _TabContext = _interopRequireDefault(require("./TabContext"));

var _Typography = require("../Typography");

var _excluded = ["ariaControls", "className", "disabled", "id", "index", "label", "onClick", "onKeyDown", "role"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Tab Component
 *
 *
 */
var Tab = /*#__PURE__*/React.forwardRef(function Tab(_ref, ref) {
  var ariaControls = _ref.ariaControls,
      className = _ref.className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      id = _ref.id,
      index = _ref.index,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? 'Label' : _ref$label,
      _onClick = _ref.onClick,
      _onKeyDown = _ref.onKeyDown,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'tab' : _ref$role,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  // pull handleClick, handleKeyDown, and isOnLayer
  var _React$useContext = React.useContext(_TabContext["default"]),
      selected = _React$useContext.selected,
      handleClick = _React$useContext.handleClick,
      handleKeyDown = _React$useContext.handleKeyDown,
      isOnLayer = _React$useContext.isOnLayer;
  /**
   * Coerces a boolean value to a string.
   *
   * @param value - the boolean value to coerce
   */


  var booleanCoersion = function booleanCoersion(value) {
    if (value) return 'true';
    return 'false';
  };
  /**
   * Layout:
   *
   * <li>
   *   <a>
   *     <Typography />
   *   </a>
   * </li>
   */


  return /*#__PURE__*/React.createElement(_TabWrapper.TabWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])("tab", className, disabled && "disabled", selected === index && "selected"),
    isOnLayer: isOnLayer,
    id: id,
    disabled: disabled,
    onClick: function onClick(event) {
      if (!disabled) {
        handleClick(index, event);

        if (_onClick) {
          _onClick(event);
        }
      }
    },
    onKeyDown: function onKeyDown(event) {
      if (!disabled) {
        if (_onKeyDown) {
          _onKeyDown(event);
        }

        if (handleKeyDown) {
          handleKeyDown(index, event);
        }
      }
    },
    "aria-controls": ariaControls,
    role: role,
    "aria-selected": booleanCoersion(selected === index)
  }, props, {
    ref: ref
  }), /*#__PURE__*/React.createElement(_Typography.Typography, {
    variant: "body_2",
    bold: selected === index
  }, label));
});
exports.Tab = Tab;
Tab.bdsName = 'Tab';
var _default = Tab;
exports["default"] = _default;
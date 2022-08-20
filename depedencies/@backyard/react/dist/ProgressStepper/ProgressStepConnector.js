"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProgressStepConnector = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ProgressStepperContext = _interopRequireDefault(require("./ProgressStepperContext"));

var _ProgressStepContext = _interopRequireDefault(require("./ProgressStepContext"));

var _excluded = ["className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * Backyard React Progress Step Connector
 *
 * @ignore
 *
 * `ProgressStepConnector` is an internal component that visually connects `ProgresStep`s in `ProgressStepper`
 *
 * It only requires contexts provided by the `ProgressStepper` and `ProgressStep`
 */
var ProgressStepConnector = /*#__PURE__*/React.forwardRef(function ProgressStepConnector(_ref, ref) {
  var className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, _excluded);

  var _React$useContext = React.useContext(_ProgressStepperContext["default"]),
      direction = _React$useContext.direction;

  var _React$useContext2 = React.useContext(_ProgressStepContext["default"]),
      disabled = _React$useContext2.disabled,
      state = _React$useContext2.state;

  return /*#__PURE__*/React.createElement("div", (0, _extends2["default"])({
    className: (0, _classnames["default"])('progress-step-connector', direction, className, state && "state", disabled && "disabled"),
    ref: ref
  }, props), /*#__PURE__*/React.createElement("span", {
    className: (0, _classnames["default"])('step-line', {
      'row': 'line-row',
      'column': 'line-column'
    }[direction])
  }));
});
exports.ProgressStepConnector = ProgressStepConnector;
ProgressStepConnector.bdsName = 'ProgressStepConnector';
var _default = ProgressStepConnector;
exports["default"] = _default;
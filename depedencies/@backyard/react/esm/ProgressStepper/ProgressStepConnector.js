import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className"];
import * as React from 'react';
import classNames from 'classnames';
import ProgressStepperContext from './ProgressStepperContext';
import ProgressStepContext from './ProgressStepContext';
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
      props = _objectWithoutProperties(_ref, _excluded);

  var _React$useContext = React.useContext(ProgressStepperContext),
      direction = _React$useContext.direction;

  var _React$useContext2 = React.useContext(ProgressStepContext),
      disabled = _React$useContext2.disabled,
      state = _React$useContext2.state;

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('progress-step-connector', direction, className, state && "state", disabled && "disabled"),
    ref: ref
  }, props), /*#__PURE__*/React.createElement("span", {
    className: classNames('step-line', {
      'row': 'line-row',
      'column': 'line-column'
    }[direction])
  }));
});
ProgressStepConnector.bdsName = 'ProgressStepConnector';
export { ProgressStepConnector };
export default ProgressStepConnector;
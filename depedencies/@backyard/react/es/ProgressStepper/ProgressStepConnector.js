import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className"];
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

const ProgressStepConnector = /*#__PURE__*/React.forwardRef(function ProgressStepConnector(_ref, ref) {
  let {
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    direction
  } = React.useContext(ProgressStepperContext);
  const {
    disabled,
    state
  } = React.useContext(ProgressStepContext);
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
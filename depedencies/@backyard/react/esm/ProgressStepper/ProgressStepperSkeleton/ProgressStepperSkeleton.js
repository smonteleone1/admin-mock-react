import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["animate", "steps", "size", "withCaption", "className", "direction"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
import { StepSkeleton, HorizontalWrapper, VerticalWrapper } from './styles';
var ProgressStepperSkeleton = /*#__PURE__*/React.forwardRef(function ProgressStepperSkeleton(_ref, ref) {
  var _Skeleton, _Skeleton2, _Skeleton3, _div, _div2;

  var _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      _ref$steps = _ref.steps,
      steps = _ref$steps === void 0 ? 4 : _ref$steps,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      _ref$withCaption = _ref.withCaption,
      withCaption = _ref$withCaption === void 0 ? false : _ref$withCaption,
      className = _ref.className,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'row' : _ref$direction,
      props = _objectWithoutProperties(_ref, _excluded);

  var arr = _toConsumableArray(new Array(steps));

  var Component;

  if (direction === 'row') {
    Component = function Component() {
      return /*#__PURE__*/React.createElement(HorizontalWrapper, _extends({
        className: classnames("progress-stepper--skeleton size--".concat(size, " direction--").concat(direction), className)
      }, props, {
        ref: ref
      }), arr.map(function (item, index) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement(StepSkeleton, {
          key: "step--".concat(index)
        }, _Skeleton || (_Skeleton = /*#__PURE__*/React.createElement(Skeleton, {
          variant: "circle",
          width: "2.5rem",
          height: "2.5rem",
          animate: animate,
          className: "indicator"
        })), _Skeleton2 || (_Skeleton2 = /*#__PURE__*/React.createElement(Skeleton, {
          variant: "rect",
          width: "size_88",
          height: "size_16",
          animate: animate,
          className: "heading"
        })), withCaption ? _Skeleton3 || (_Skeleton3 = /*#__PURE__*/React.createElement(Skeleton, {
          variant: "rect",
          width: "size_128",
          height: "size_14",
          animate: animate,
          className: "caption"
        })) : null), index !== 0 ? _div || (_div = /*#__PURE__*/React.createElement("div", {
          className: "progress-step-connector"
        }, /*#__PURE__*/React.createElement(Skeleton, {
          variant: "rect",
          height: "size_2",
          width: "100%",
          animate: animate
        }))) : null);
      }));
    };
  } else {
    Component = function Component() {
      return /*#__PURE__*/React.createElement(VerticalWrapper, _extends({
        className: classnames("progress-stepper--skeleton size--".concat(size, " direction--").concat(direction), className)
      }, props, {
        ref: ref
      }), arr.map(function (item, index) {
        return /*#__PURE__*/React.createElement("div", {
          style: {
            position: 'relative',
            width: '100%'
          }
        }, /*#__PURE__*/React.createElement(StepSkeleton, {
          key: "step--".concat(index),
          className: "skeleton--step"
        }, /*#__PURE__*/React.createElement(Skeleton, {
          variant: "circle",
          width: size === 'large' ? '2.625rem' : '2.375rem',
          height: size === 'large' ? '2.625rem' : '2.375rem',
          animate: animate,
          className: "indicator"
        }), /*#__PURE__*/React.createElement("div", {
          className: "label-group"
        }, /*#__PURE__*/React.createElement(Skeleton, {
          variant: "rect",
          width: "size_88",
          height: size === 'large' ? 'size_16' : 'size_14',
          animate: animate,
          className: "heading"
        }), withCaption ? /*#__PURE__*/React.createElement(Skeleton, {
          variant: "rect",
          width: "size_128",
          height: size === 'large' ? 'size_14' : 'size_12',
          animate: animate,
          className: "caption"
        }) : null)), index !== 0 ? _div2 || (_div2 = /*#__PURE__*/React.createElement("div", {
          className: "progress-step-connector"
        }, /*#__PURE__*/React.createElement(Skeleton, {
          variant: "rect",
          height: "100%",
          width: "size_2",
          animate: animate
        }))) : null);
      }));
    };
  }

  return /*#__PURE__*/React.createElement(Component, null);
});
ProgressStepperSkeleton.bdsName = 'ProgressStepperSkeleton';
export { ProgressStepperSkeleton };
export default ProgressStepperSkeleton;
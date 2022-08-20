import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "hideButtons", "label", "animate", "style"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';
/**
 * Backyard React File Upload Skeleton
 */

var StepperSkeleton = /*#__PURE__*/React.forwardRef(function StepperSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$hideButtons = _ref.hideButtons,
      hideButtons = _ref$hideButtons === void 0 ? false : _ref$hideButtons,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? false : _ref$label,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'StepperSkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement("span", {
    className: "stepper--skeleton",
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      width: '10.125rem'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, !hideButtons ? /*#__PURE__*/React.createElement(Skeleton, {
    className: classNames('stepper--minus', className),
    variant: "rect",
    style: {
      marginRight: theme.sizes.size_1,
      minHeight: "calc(".concat(theme.sizes.size_52, " + ").concat(theme.sizes.size_2, ")"),
      minWidth: "calc(".concat(theme.sizes.size_52, " + ").concat(theme.sizes.size_2, ")")
    },
    shape: shape,
    animate: animate
  }) : null, /*#__PURE__*/React.createElement(Skeleton, _extends({
    className: classNames('stepper--input', className),
    variant: "rect",
    shape: shape,
    style: _extends({
      minHeight: "calc(".concat(theme.sizes.size_52, " + ").concat(theme.sizes.size_2, ")"),
      minWidth: "calc(".concat(theme.sizes.size_52, " + ").concat(theme.sizes.size_2, ")")
    }, style),
    animate: animate
  }, props, {
    ref: ref
  })), !hideButtons ? /*#__PURE__*/React.createElement(Skeleton, {
    className: classNames('stepper--plus', className),
    variant: "rect",
    style: {
      marginLeft: theme.sizes.size_1,
      minHeight: "calc(".concat(theme.sizes.size_52, " + ").concat(theme.sizes.size_2, ")"),
      minWidth: "calc(".concat(theme.sizes.size_52, " + ").concat(theme.sizes.size_2, ")")
    },
    animate: animate,
    shape: shape
  }) : null), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    className: classNames('stepper--label', className),
    variant: "text",
    style: {
      marginTop: theme.sizes.size_8,
      width: theme.sizes.size_84,
      height: theme.sizes.size_16
    },
    animate: animate,
    shape: shape
  })) : null);
});
StepperSkeleton.bdsName = 'StepperSkeleton';
export { StepperSkeleton };
export default StepperSkeleton;
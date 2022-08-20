import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "animate", "rows", "helperText", "max"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';

/**
 * Backyard React Text Area Skeleton
 */
const TextAreaSkeleton = /*#__PURE__*/React.forwardRef(function TextAreaSkeleton(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    animate = false,
    rows = 4,
    helperText,
    max
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'TextAreaSkeleton'
  });
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Skeleton, _extends({
    className: classNames('textarea--skeleton', className),
    variant: "rect",
    shape: shape,
    animate: animate,
    height: `calc(${rows > 1 ? rows + 1 : '0'}.5rem + ${theme.sizes.size_32})`
  }, props, {
    ref: ref
  })), max || helperText ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      marginTop: theme.sizes.size_8,
      padding: `0 ${theme.sizes.size_16}`
    }
  }, helperText ? /*#__PURE__*/React.createElement(Skeleton, {
    className: "helper-text--skeleton",
    variant: "text",
    shape: shape,
    animate: animate,
    style: {
      width: '100%',
      float: 'left'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%'
    }
  }), max ? /*#__PURE__*/React.createElement(Skeleton, {
    className: "helper-counter--skeleton",
    variant: "text",
    shape: shape,
    animate: animate,
    style: {
      width: theme.sizes.size_44,
      marginLeft: helperText ? theme.sizes.size_16 : 0,
      float: 'right'
    }
  }) : null) : null);
});
TextAreaSkeleton.bdsName = 'TextAreaSkeleton';
export { TextAreaSkeleton };
export default TextAreaSkeleton;
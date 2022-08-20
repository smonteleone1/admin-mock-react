import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "shape", "variant", "animate", "style"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';

/**
 * Backyard React File Upload Skeleton
 */
var FileUploadSkeleton = /*#__PURE__*/React.forwardRef(function FileUploadSkeleton(_ref, ref) {
  var className = _ref.className,
      shapeProp = _ref.shape,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'button' : _ref$variant,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? false : _ref$animate,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme({
    validate: true,
    name: 'FileUploadSkeleton'
  });
  var shapeContext = theme.context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);

  var input = function () {
    switch (variant) {
      case 'dropzone':
        return /*#__PURE__*/React.createElement(Skeleton, _extends({
          className: classNames("file-upload--dropzone variant--button", className),
          variant: "rect",
          shape: shape,
          animate: animate,
          height: "size_128",
          style: _extends({
            marginTop: theme.sizes.size_16
          }, style)
        }, props, {
          ref: ref
        }));

      case 'button':
      default:
        return /*#__PURE__*/React.createElement(Skeleton, _extends({
          className: classNames("file-upload--button variant--dropzone", className),
          variant: "rect",
          shape: shape,
          animate: animate,
          width: theme.sizes.size_84,
          height: "size_48",
          style: _extends({
            marginTop: theme.sizes.size_16
          }, style)
        }, props, {
          ref: ref
        }));
    }
  }();

  return /*#__PURE__*/React.createElement("div", {
    className: "file-upload--skeleton"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    className: classNames('file-upload--title', className),
    variant: "text",
    shape: shape,
    animate: animate
  }), /*#__PURE__*/React.createElement(Skeleton, {
    className: classNames('file-upload--caption', className),
    variant: "text",
    shape: shape,
    animate: animate,
    style: {
      marginTop: theme.sizes.size_16
    }
  }), input);
});
FileUploadSkeleton.bdsName = 'FileUploadSkeleton';
export { FileUploadSkeleton };
export default FileUploadSkeleton;
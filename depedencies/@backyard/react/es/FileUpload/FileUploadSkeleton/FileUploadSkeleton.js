import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "shape", "variant", "animate", "style"];
import * as React from 'react';
import classNames from 'classnames';
import Skeleton from '../../Skeleton';
import { useBackyardTheme, getShape } from '../../ThemeProvider';

/**
 * Backyard React File Upload Skeleton
 */
const FileUploadSkeleton = /*#__PURE__*/React.forwardRef(function FileUploadSkeleton(_ref, ref) {
  let {
    className,
    shape: shapeProp,
    // = 'rounded',
    variant = 'button',
    animate = false,
    style
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme({
    validate: true,
    name: 'FileUploadSkeleton'
  });
  const {
    shape: shapeContext
  } = theme.context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);

  const input = (() => {
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
  })();

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
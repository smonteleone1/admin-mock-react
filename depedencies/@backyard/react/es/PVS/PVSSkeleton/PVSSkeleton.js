import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["items", "animate", "className"];
import * as React from 'react';
import classnames from 'classnames';
import Skeleton from '../../Skeleton';
/**
 * Backyards PVSSkeleton component
 * 
 * Returns a series of Skeleton circles based on the value of the
 * items prop. Sizing and spacing of each swatch matches that of the
 * default PVS component.
 * 
 * <PVSSkeleton />
 */

const PVSSkeleton = /*#__PURE__*/React.forwardRef(function PVSSkeleton(_ref, ref) {
  let {
    items = 1,
    animate = false,
    className
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const circles = [...new Array(items)];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      flexDirection: 'row'
    },
    className: classnames(className, 'pvs--skeleton')
  }, circles.map((item, index) => /*#__PURE__*/React.createElement(Skeleton, _extends({
    key: `skeleton-${index}`,
    variant: "circle",
    height: "size_40",
    width: "size_40",
    animate: animate,
    style: {
      margin: '0.5rem',
      display: 'inline-block'
    }
  }, props, {
    ref: ref
  }))));
});
PVSSkeleton.bdsName = 'PVSSkeleton';
export { PVSSkeleton };
export default PVSSkeleton;
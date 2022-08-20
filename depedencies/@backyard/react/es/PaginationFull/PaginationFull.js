import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["boundaryCount", "className", "count", "defaultPage", "disabled", "getItemAriaLabel", "showFirstButton", "hideNextButton", "hidePrevButton", "showLastButton", "onChange", "page", "renderItem", "siblingCount", "size", "shape", "variant"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import PaginationItem from '../Pagination/PaginationItem';
import usePagination from '../Pagination/usePagination';
import PaginationFullWrapper from './styles/PaginationFullWrapper';

function defaultGetAriaLabel(type, page, selected) {
  if (type === 'page') {
    return `${selected ? '' : 'Go to '}page ${page}`;
  }

  return `Go to ${type} page`;
}
/**
 * Backyard React Pagination
 *
 * @todo Comments
 */


const PaginationFull = /*#__PURE__*/React.forwardRef(function PaginationFull(props, ref) {
  const {
    boundaryCount: boundaryCountProp,
    className,
    getItemAriaLabel = defaultGetAriaLabel,
    showFirstButton = false,
    hideNextButton: hideNextButtonProp,
    hidePrevButton: hidePrevButtonProp,
    showLastButton = false,
    renderItem = (item, index) => /*#__PURE__*/React.createElement(PaginationItem, _extends({
      key: index
    }, item)),
    size = 'medium',
    shape: shapeProp = 'circle',
    variant = 'numbered'
  } = props,
        other = _objectWithoutPropertiesLoose(props, _excluded); // Get Backyard Theme Context


  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'PaginationFull'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext);
  const boundaryCount = variant === 'dotted' ? 10 : boundaryCountProp;
  const hideNextButton = variant === 'dotted' ? true : hideNextButtonProp;
  const hidePrevButton = variant === 'dotted' ? true : hidePrevButtonProp;
  const {
    items
  } = usePagination(_extends({}, props, {
    boundaryCount,
    showFirstButton,
    hideNextButton,
    hidePrevButton,
    showLastButton,
    componentName: 'PaginationFull'
  }));
  return /*#__PURE__*/React.createElement(PaginationFullWrapper, _extends({
    "aria-label": "pagination navigation",
    color: "interactive",
    className: classNames(`pagination variant--${variant} size--${size} shape--${shape}`, // `color--${color}`,
    className),
    ref: ref
  }, other), /*#__PURE__*/React.createElement("ul", null, items.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, renderItem(_extends({}, item, {
    type: variant === 'dotted' ? 'dot' : item.type,
    color: 'interactive',
    'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
    shape,
    size
  }), index)))));
});
PaginationFull.bdsName = 'PaginationFull';
export { PaginationFull };
export default PaginationFull;
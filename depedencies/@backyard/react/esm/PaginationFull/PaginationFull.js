import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["boundaryCount", "className", "count", "defaultPage", "disabled", "getItemAriaLabel", "showFirstButton", "hideNextButton", "hidePrevButton", "showLastButton", "onChange", "page", "renderItem", "siblingCount", "size", "shape", "variant"];
import * as React from 'react';
import classNames from 'classnames';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import PaginationItem from '../Pagination/PaginationItem';
import usePagination from '../Pagination/usePagination';
import PaginationFullWrapper from './styles/PaginationFullWrapper';

function defaultGetAriaLabel(type, page, selected) {
  if (type === 'page') {
    return "".concat(selected ? '' : 'Go to ', "page ").concat(page);
  }

  return "Go to ".concat(type, " page");
}
/**
 * Backyard React Pagination
 *
 * @todo Comments
 */


var PaginationFull = /*#__PURE__*/React.forwardRef(function PaginationFull(props, ref) {
  var boundaryCountProp = props.boundaryCount,
      className = props.className,
      count = props.count,
      defaultPage = props.defaultPage,
      disabled = props.disabled,
      _props$getItemAriaLab = props.getItemAriaLabel,
      getItemAriaLabel = _props$getItemAriaLab === void 0 ? defaultGetAriaLabel : _props$getItemAriaLab,
      _props$showFirstButto = props.showFirstButton,
      showFirstButton = _props$showFirstButto === void 0 ? false : _props$showFirstButto,
      hideNextButtonProp = props.hideNextButton,
      hidePrevButtonProp = props.hidePrevButton,
      _props$showLastButton = props.showLastButton,
      showLastButton = _props$showLastButton === void 0 ? false : _props$showLastButton,
      onChange = props.onChange,
      page = props.page,
      _props$renderItem = props.renderItem,
      renderItem = _props$renderItem === void 0 ? function (item, index) {
    return /*#__PURE__*/React.createElement(PaginationItem, _extends({
      key: index
    }, item));
  } : _props$renderItem,
      siblingCount = props.siblingCount,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      _props$shape = props.shape,
      shapeProp = _props$shape === void 0 ? 'circle' : _props$shape,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'numbered' : _props$variant,
      other = _objectWithoutProperties(props, _excluded); // Get Backyard Theme Context


  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'PaginationFull'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext);
  var boundaryCount = variant === 'dotted' ? 10 : boundaryCountProp;
  var hideNextButton = variant === 'dotted' ? true : hideNextButtonProp;
  var hidePrevButton = variant === 'dotted' ? true : hidePrevButtonProp;

  var _usePagination = usePagination(_extends({}, props, {
    boundaryCount: boundaryCount,
    showFirstButton: showFirstButton,
    hideNextButton: hideNextButton,
    hidePrevButton: hidePrevButton,
    showLastButton: showLastButton,
    componentName: 'PaginationFull'
  })),
      items = _usePagination.items;

  return /*#__PURE__*/React.createElement(PaginationFullWrapper, _extends({
    "aria-label": "pagination navigation",
    color: "interactive",
    className: classNames("pagination variant--".concat(variant, " size--").concat(size, " shape--").concat(shape), // `color--${color}`,
    className),
    ref: ref
  }, other), /*#__PURE__*/React.createElement("ul", null, items.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, renderItem(_extends({}, item, {
      type: variant === 'dotted' ? 'dot' : item.type,
      color: 'interactive',
      'aria-label': getItemAriaLabel(item.type, item.page, item.selected),
      shape: shape,
      size: size
    }), index));
  })));
});
PaginationFull.bdsName = 'PaginationFull';
export { PaginationFull };
export default PaginationFull;
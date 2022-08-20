import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["className", "color", "component", "disabled", "page", "selected", "shape", "size", "type", "variant"];
import * as React from 'react';
import classNames from 'classnames';
import ChevronLeft from '@backyard/icons/ChevronLeft';
import ChevronRight from '@backyard/icons/ChevronRight';
import Dots from '@backyard/icons/Dots';
import ChevronDoubleLeft from '@backyard/icons/ChevronDoubleLeft';
import ChevronDoubleRight from '@backyard/icons/ChevronDoubleRight';
import Bullet from '@backyard/icons/Bullet';
import includes from 'core-js-pure/stable/array/includes';
import IconButton from '../IconButton';

/**
 * Backyard React PaginationItem
 *
 * @todo Comments
 */
var PaginationItem = /*#__PURE__*/React.forwardRef(function PaginationItem(_ref, ref) {
  var _normalizedIcons;

  var className = _ref.className,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'interactive' : _ref$color,
      component = _ref.component,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      page = _ref.page,
      _ref$selected = _ref.selected,
      selected = _ref$selected === void 0 ? false : _ref$selected,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? 'custom' : _ref$shape,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'page' : _ref$type,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'ghost' : _ref$variant,
      other = _objectWithoutProperties(_ref, _excluded);

  var ellipsis = includes(['start-ellipsis', 'end-ellipsis'], type);
  var normalizedIcons = (_normalizedIcons = {
    first: ChevronDoubleLeft,
    previous: ChevronLeft,
    next: ChevronRight,
    last: ChevronDoubleRight
  }, _defineProperty(_normalizedIcons, 'start-ellipsis', Dots), _defineProperty(_normalizedIcons, 'end-ellipsis', Dots), _defineProperty(_normalizedIcons, "dot", Bullet), _normalizedIcons);
  var Icon = normalizedIcons[type];
  return /*#__PURE__*/React.createElement(IconButton, _extends({
    key: type === 'page' ? page : ellipsis,
    disabled: ellipsis ? true : disabled,
    variant: selected ? 'primary' : variant,
    size: size,
    shape: shape,
    color: color,
    className: classNames("pagination-item type--".concat(type), className, selected && "selected", ellipsis && "ellipsis"),
    ref: ref
  }, other), type === 'page' && page, Icon ? /*#__PURE__*/React.createElement(Icon, null) : null);
});
PaginationItem.bdsName = 'PaginationItem';
export { PaginationItem };
export default PaginationItem;
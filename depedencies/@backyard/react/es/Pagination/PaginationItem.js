import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["className", "color", "component", "disabled", "page", "selected", "shape", "size", "type", "variant"];
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
const PaginationItem = /*#__PURE__*/React.forwardRef(function PaginationItem(_ref, ref) {
  let {
    className,
    color = 'interactive',
    disabled = false,
    page,
    selected = false,
    shape = 'custom',
    size = 'medium',
    type = 'page',
    variant = 'ghost'
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, _excluded);

  const ellipsis = includes(['start-ellipsis', 'end-ellipsis'], type);
  const normalizedIcons = {
    first: ChevronDoubleLeft,
    previous: ChevronLeft,
    next: ChevronRight,
    last: ChevronDoubleRight,
    // eslint-disable-next-line no-useless-computed-key
    ['start-ellipsis']: Dots,
    // eslint-disable-next-line no-useless-computed-key
    ['end-ellipsis']: Dots,
    dot: Bullet
  };
  const Icon = normalizedIcons[type];
  return /*#__PURE__*/React.createElement(IconButton, _extends({
    key: type === 'page' ? page : ellipsis,
    disabled: ellipsis ? true : disabled,
    variant: selected ? 'primary' : variant,
    size: size,
    shape: shape,
    color: color,
    className: classNames(`pagination-item type--${type}`, className, selected && "selected", ellipsis && "ellipsis"),
    ref: ref
  }, other), type === 'page' && page, Icon ? /*#__PURE__*/React.createElement(Icon, null) : null);
});
PaginationItem.bdsName = 'PaginationItem';
export { PaginationItem };
export default PaginationItem;
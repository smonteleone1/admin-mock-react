import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["anchorEl", "children", "className", "container", "disablePortal", "id", "keepMounted", "onClose", "onOpen", "offset", "open", "placement", "popperModifiers", "popperOptions", "pop"];
import * as React from 'react';
import { usePopper } from 'react-popper';
import 'core-js/es/array/find';
import 'core-js/es/promise';
import 'core-js/es/object/assign';
import useForkRef from '../utils/hooks/useForkRef';
import { useBackyardTheme, validateBackyardTheme } from '../ThemeProvider';
import Portal from '../Portal';

/**
 * Backyard React Popover
 *
 * @todo Comments
 * @todo Additional Tests
 */
var Popover = /*#__PURE__*/React.forwardRef(function Popover(_ref, ref) {
  var anchorEl = _ref.anchorEl,
      children = _ref.children,
      className = _ref.className,
      container = _ref.container,
      _ref$disablePortal = _ref.disablePortal,
      disablePortal = _ref$disablePortal === void 0 ? false : _ref$disablePortal,
      idProp = _ref.id,
      _ref$keepMounted = _ref.keepMounted,
      keepMounted = _ref$keepMounted === void 0 ? false : _ref$keepMounted,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen,
      _ref$offset = _ref.offset,
      offset = _ref$offset === void 0 ? [0, 9] : _ref$offset,
      open = _ref.open,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$popperModifiers = _ref.popperModifiers,
      popperModifiers = _ref$popperModifiers === void 0 ? [] : _ref$popperModifiers,
      _ref$popperOptions = _ref.popperOptions,
      popperOptions = _ref$popperOptions === void 0 ? {} : _ref$popperOptions,
      pop = _ref.pop,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Popover');

  var _React$useState = React.useState(anchorEl),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      referenceElement = _React$useState2[0],
      setReferenceElement = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      popperElement = _React$useState4[0],
      setPopperElement = _React$useState4[1];

  var popperRef = useForkRef(setPopperElement, ref);
  React.useEffect(function () {
    return setReferenceElement(anchorEl);
  }, [anchorEl]);

  var _usePopper = usePopper(referenceElement, popperElement, _extends({
    modifiers: [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, {
      name: 'eventListeners',
      options: {
        scroll: open,
        resize: open
      }
    }].concat(_toConsumableArray(popperModifiers)),
    placement: placement
  }, popperOptions)),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes;

  return /*#__PURE__*/React.createElement(React.Fragment, null, children ? /*#__PURE__*/React.cloneElement(children, {
    ref: setReferenceElement
  }) : null, open || keepMounted ? /*#__PURE__*/React.createElement(Portal, {
    disablePortal: disablePortal,
    container: container
  }, /*#__PURE__*/React.cloneElement(pop, _extends({}, attributes.popper, props, {
    ref: popperRef,
    style: _extends({}, styles.popper, {
      zIndex: 2,
      opacity: open ? 1 : 0,
      pointerEvents: open ? 'all' : 'none'
    }, pop.props.style)
  }))) : null);
});
Popover.bdsName = 'Popover';
export { Popover };
export default Popover;
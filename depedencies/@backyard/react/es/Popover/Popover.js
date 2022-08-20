import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["anchorEl", "children", "className", "container", "disablePortal", "id", "keepMounted", "onClose", "onOpen", "offset", "open", "placement", "popperModifiers", "popperOptions", "pop"];
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
const Popover = /*#__PURE__*/React.forwardRef(function Popover(_ref, ref) {
  let {
    anchorEl,
    children,
    container,
    disablePortal = false,
    keepMounted = false,
    offset = [0, 9],
    open,
    placement = 'bottom',
    popperModifiers = [],
    popperOptions = {},
    pop
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const theme = useBackyardTheme();
  validateBackyardTheme(theme, 'Popover');
  const [referenceElement, setReferenceElement] = React.useState(anchorEl);
  const [popperElement, setPopperElement] = React.useState(null);
  const popperRef = useForkRef(setPopperElement, ref);
  React.useEffect(() => setReferenceElement(anchorEl), [anchorEl]);
  const {
    styles,
    attributes
  } = usePopper(referenceElement, popperElement, _extends({
    modifiers: [{
      name: 'offset',
      options: {
        offset
      }
    }, {
      name: 'eventListeners',
      options: {
        scroll: open,
        resize: open
      }
    }, ...popperModifiers],
    placement
  }, popperOptions));
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
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "className", "container", "disablePortal", "enterDelay", "enterNextDelay", "id", "keepMounted", "leaveDelay", "onClose", "onOpen", "open", "defaultOpen", "placement", "popperModifiers", "popperOptions", "tooltip", "title"],
    _excluded2 = ["open"],
    _excluded3 = ["onMouseEnter", "onMouseLeave"];
import * as React from 'react';
import { usePopper } from 'react-popper';
import 'core-js/es/array/find';
import 'core-js/es/promise';
import 'core-js/es/object/assign';
import useControlled from '../utils/hooks/useControlled';
import useRandomId from '../utils/hooks/useRandomId';
import useForkRef from '../utils/hooks/useForkRef';
import { usePopupState, bindHover, bindPopper } from '../utils/hooks/usePopupState';
import persistSyntheticEvent from '../utils/functions/persistSyntheticEvent';
import { useBackyardTheme } from '../ThemeProvider';
import Tooltip from '../Tooltip';
import Portal from '../Portal';
var hysteresisOpen = false;
var hysteresisTimer = null;
export function testReset() {
  hysteresisOpen = false;
  clearTimeout(hysteresisTimer);
}

var flipArrow = function flipArrow(placement) {
  return {
    'bottom-end': 'top-start',
    'bottom-start': 'top-end',
    bottom: 'top',
    'left-end': 'right-start',
    'left-start': 'right-end',
    left: 'right',
    'right-end': 'left-start',
    'right-start': 'left-end',
    right: 'left',
    'top-end': 'bottom-start',
    'top-start': 'bottom-end',
    top: 'bottom'
  }[placement];
};
/**
 * Backyard React TooltipPopper
 *
 * @todo Comments
 */


var TooltipPopper = /*#__PURE__*/React.forwardRef(function TooltipPopper(_ref, ref) {
  var children = _ref.children,
      className = _ref.className,
      container = _ref.container,
      _ref$disablePortal = _ref.disablePortal,
      disablePortal = _ref$disablePortal === void 0 ? false : _ref$disablePortal,
      _ref$enterDelay = _ref.enterDelay,
      enterDelay = _ref$enterDelay === void 0 ? 200 : _ref$enterDelay,
      _ref$enterNextDelay = _ref.enterNextDelay,
      enterNextDelay = _ref$enterNextDelay === void 0 ? 0 : _ref$enterNextDelay,
      idProp = _ref.id,
      _ref$keepMounted = _ref.keepMounted,
      keepMounted = _ref$keepMounted === void 0 ? false : _ref$keepMounted,
      _ref$leaveDelay = _ref.leaveDelay,
      leaveDelay = _ref$leaveDelay === void 0 ? 200 : _ref$leaveDelay,
      onClose = _ref.onClose,
      onOpen = _ref.onOpen,
      openProp = _ref.open,
      _ref$defaultOpen = _ref.defaultOpen,
      defaultOpen = _ref$defaultOpen === void 0 ? false : _ref$defaultOpen,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$popperModifiers = _ref.popperModifiers,
      popperModifiers = _ref$popperModifiers === void 0 ? [] : _ref$popperModifiers,
      _ref$popperOptions = _ref.popperOptions,
      popperOptions = _ref$popperOptions === void 0 ? {} : _ref$popperOptions,
      tooltip = _ref.tooltip,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded);

  var theme = useBackyardTheme({
    validate: true,
    name: 'TooltipPoppper'
  });

  var _React$useState = React.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      referenceElement = _React$useState2[0],
      setReferenceElement = _React$useState2[1];

  var _React$useState3 = React.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      popperElement = _React$useState4[0],
      setPopperElement = _React$useState4[1];

  var _React$useState5 = React.useState(null),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      arrowElement = _React$useState6[0],
      setArrowElement = _React$useState6[1];

  var popperRef = useForkRef(setPopperElement, ref);
  var enterTimer = React.useRef();
  var leaveTimer = React.useRef();
  var id = useRandomId(idProp);

  var _useControlled = useControlled({
    controlled: openProp,
    "default": defaultOpen,
    name: "Backyard->TooltipPopper->[id=\"".concat(id, "\"]")
  }),
      _useControlled2 = _slicedToArray(_useControlled, 2),
      open = _useControlled2[0],
      setOpen = _useControlled2[1];

  var popupState = usePopupState({
    variant: 'popper',
    popupId: id
  });

  var _bindPopper = bindPopper(popupState),
      hovering = _bindPopper.open,
      popperProps = _objectWithoutProperties(_bindPopper, _excluded2);

  var _bindHover = bindHover(popupState),
      onMouseEnter = _bindHover.onMouseEnter,
      onMouseLeave = _bindHover.onMouseLeave,
      hoverProps = _objectWithoutProperties(_bindHover, _excluded3);

  React.useEffect(function () {
    return function () {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
    };
  }, []);

  var handleOpen = function handleOpen(event) {
    clearTimeout(hysteresisTimer);
    hysteresisOpen = true;
    setOpen(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  var handleClose = function handleClose(event) {
    clearTimeout(hysteresisTimer);
    hysteresisTimer = setTimeout(function () {
      hysteresisOpen = false;
    }, 800 + leaveDelay);
    setOpen(false);

    if (onClose) {
      onClose(event);
    }
  };

  var handleEnter = function handleEnter(event) {
    onMouseEnter(event);
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    if (enterDelay || hysteresisOpen && enterNextDelay) {
      persistSyntheticEvent(event);
      enterTimer.current = setTimeout(function () {
        handleOpen(event);
      }, hysteresisOpen ? enterNextDelay : enterDelay);
    } else {
      handleOpen(event);
    }
  };

  var handleLeave = function handleLeave(event) {
    onMouseLeave(event);
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    persistSyntheticEvent(event);
    leaveTimer.current = setTimeout(function () {
      handleClose(event);
    }, leaveDelay);
  };

  var _usePopper = usePopper(referenceElement, popperElement, _extends({
    modifiers: [{
      name: 'arrow',
      options: {
        element: arrowElement,
        padding: 8
      }
    }, {
      name: 'offset',
      options: {
        offset: [0, 16]
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

  var place = attributes.popper ? attributes.popper['data-popper-placement'] : placement;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.cloneElement(children, _extends({}, hoverProps, {
    onMouseEnter: handleEnter,
    onMouseLeave: handleLeave,
    ref: setReferenceElement
  })), open || keepMounted ? /*#__PURE__*/React.createElement(Portal, {
    disablePortal: disablePortal,
    container: container
  }, /*#__PURE__*/React.createElement(Tooltip, _extends({
    id: id
  }, tooltip.props, attributes.popper, popperProps, {
    ref: popperRef,
    arrowProps: {
      ref: setArrowElement,
      style: styles.arrow
    },
    arrow: flipArrow(place),
    style: _extends({}, styles.popper, {
      zIndex: theme.zIndex.tooltip,
      opacity: openProp || hovering ? 1 : 0
    })
  }, props))) : null);
});
TooltipPopper.bdsName = 'TooltipPopper';
export { TooltipPopper };
export default TooltipPopper;
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "className", "container", "disablePortal", "enterDelay", "enterNextDelay", "id", "keepMounted", "leaveDelay", "onClose", "onOpen", "open", "defaultOpen", "placement", "popperModifiers", "popperOptions", "tooltip", "title"],
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
let hysteresisOpen = false;
let hysteresisTimer = null;
export function testReset() {
  hysteresisOpen = false;
  clearTimeout(hysteresisTimer);
}

const flipArrow = placement => ({
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
})[placement];
/**
 * Backyard React TooltipPopper
 *
 * @todo Comments
 */


const TooltipPopper = /*#__PURE__*/React.forwardRef(function TooltipPopper(_ref, ref) {
  let {
    children,
    container,
    disablePortal = false,
    enterDelay = 200,
    enterNextDelay = 0,
    id: idProp,
    keepMounted = false,
    leaveDelay = 200,
    onClose,
    onOpen,
    open: openProp,
    defaultOpen = false,
    placement = 'bottom',
    popperModifiers = [],
    popperOptions = {},
    tooltip
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  const theme = useBackyardTheme({
    validate: true,
    name: 'TooltipPoppper'
  });
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [arrowElement, setArrowElement] = React.useState(null);
  const popperRef = useForkRef(setPopperElement, ref);
  const enterTimer = React.useRef();
  const leaveTimer = React.useRef();
  const id = useRandomId(idProp);
  const [open, setOpen] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: `Backyard->TooltipPopper->[id="${id}"]`
  });
  const popupState = usePopupState({
    variant: 'popper',
    popupId: id
  });

  const _bindPopper = bindPopper(popupState),
        {
    open: hovering
  } = _bindPopper,
        popperProps = _objectWithoutPropertiesLoose(_bindPopper, _excluded2);

  const _bindHover = bindHover(popupState),
        {
    onMouseEnter,
    onMouseLeave
  } = _bindHover,
        hoverProps = _objectWithoutPropertiesLoose(_bindHover, _excluded3);

  React.useEffect(() => {
    return () => {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
    };
  }, []);

  const handleOpen = event => {
    clearTimeout(hysteresisTimer);
    hysteresisOpen = true;
    setOpen(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  const handleClose = event => {
    clearTimeout(hysteresisTimer);
    hysteresisTimer = setTimeout(() => {
      hysteresisOpen = false;
    }, 800 + leaveDelay);
    setOpen(false);

    if (onClose) {
      onClose(event);
    }
  };

  const handleEnter = event => {
    onMouseEnter(event);
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);

    if (enterDelay || hysteresisOpen && enterNextDelay) {
      persistSyntheticEvent(event);
      enterTimer.current = setTimeout(() => {
        handleOpen(event);
      }, hysteresisOpen ? enterNextDelay : enterDelay);
    } else {
      handleOpen(event);
    }
  };

  const handleLeave = event => {
    onMouseLeave(event);
    clearTimeout(enterTimer.current);
    clearTimeout(leaveTimer.current);
    persistSyntheticEvent(event);
    leaveTimer.current = setTimeout(() => {
      handleClose(event);
    }, leaveDelay);
  };

  const {
    styles,
    attributes
  } = usePopper(referenceElement, popperElement, _extends({
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
    }, ...popperModifiers],
    placement
  }, popperOptions));
  const place = attributes.popper ? attributes.popper['data-popper-placement'] : placement;
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
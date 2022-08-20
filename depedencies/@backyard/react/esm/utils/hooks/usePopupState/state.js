import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _extends from "@babel/runtime/helpers/esm/extends";

/* eslint-disable arrow-body-style */

/* eslint-disable @typescript-eslint/no-shadow */

/* eslint-disable no-underscore-dangle */

/* eslint-disable @typescript-eslint/naming-convention */
var eventOrAnchorElWarned = false;
var initCoreState = {
  isOpen: false,
  setAnchorElUsed: false,
  anchorEl: null,
  hovered: false,
  _childPopupState: null
};

var hasChanges = function hasChanges(state, nextState) {
  // eslint-disable-next-line no-restricted-syntax
  for (var key in nextState) {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key) && state[key] !== nextState[key]) {
      return true;
    }
  }

  return false;
};

var createPopupState = function createPopupState(_ref) {
  var state = _ref.state,
      _setState = _ref.setState,
      parentPopupState = _ref.parentPopupState,
      popupId = _ref.popupId,
      variant = _ref.variant;
  var isOpen = state.isOpen,
      setAnchorElUsed = state.setAnchorElUsed,
      anchorEl = state.anchorEl,
      hovered = state.hovered,
      _childPopupState = state._childPopupState; // use lastState to workaround cases where setState is called multiple times
  // in a single render (e.g. because of refs being called multiple times)

  var lastState = state;

  var setState = function setState(nextState) {
    if (hasChanges(lastState, nextState)) {
      _setState(lastState = _extends({}, lastState, nextState));
    }
  };

  var setAnchorEl = function setAnchorEl(_anchorEl) {
    setState({
      setAnchorElUsed: true,
      anchorEl: _anchorEl
    });
  };

  var open = function open(eventOrAnchorEl) {
    if (!eventOrAnchorElWarned && !eventOrAnchorEl && !setAnchorElUsed) {
      eventOrAnchorElWarned = true;
      /* eslint-disable no-console */

      console.error('eventOrAnchorEl should be defined if setAnchorEl is not used');
      /* eslint-enable no-console */
    }

    if (parentPopupState) {
      if (!parentPopupState.isOpen) return; // eslint-disable-next-line @typescript-eslint/no-use-before-define

      parentPopupState._setChildPopupState(popupState);
    }

    if ((typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.activeElement) {
      document.activeElement.blur();
    }

    var newState = {
      isOpen: true,
      hovered: eventOrAnchorEl && eventOrAnchorEl.type === 'mouseenter'
    };

    if (eventOrAnchorEl && eventOrAnchorEl.currentTarget) {
      if (!setAnchorElUsed) {
        newState.anchorEl = eventOrAnchorEl.currentTarget;
      }
    } else if (eventOrAnchorEl) {
      newState.anchorEl = eventOrAnchorEl;
    }

    setState(newState);
  };

  var close = function close() {
    if (_childPopupState) _childPopupState.close();
    if (parentPopupState) parentPopupState._setChildPopupState(null);
    setState({
      isOpen: false,
      hovered: false
    });
  };

  var toggle = function toggle(eventOrAnchorEl) {
    if (isOpen) {
      close();
    } else {
      open(eventOrAnchorEl);
    }
  };

  var setOpen = function setOpen(nextOpen, eventOrAnchorEl) {
    if (nextOpen) {
      open(eventOrAnchorEl);
    } else close();
  };

  var onMouseLeave = function onMouseLeave(event) {
    var relatedTarget = event.relatedTarget; // eslint-disable-next-line @typescript-eslint/no-use-before-define

    if (hovered && !isElementInPopup(relatedTarget, popupState)) {
      close();
    }
  }; // eslint-disable-next-line no-shadow


  var _setChildPopupState = function _setChildPopupState(_childPopupState) {
    return setState({
      _childPopupState: _childPopupState
    });
  };

  var popupState = {
    anchorEl: anchorEl,
    setAnchorEl: setAnchorEl,
    setAnchorElUsed: setAnchorElUsed,
    popupId: popupId,
    variant: variant,
    isOpen: isOpen,
    open: open,
    close: close,
    toggle: toggle,
    setOpen: setOpen,
    onMouseLeave: onMouseLeave,
    _childPopupState: _childPopupState,
    _setChildPopupState: _setChildPopupState
  };
  return popupState;
};
/**
 * Creates a ref that sets the anchorEl for the popup.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


var anchorRef = function anchorRef(_ref2) {
  var setAnchorEl = _ref2.setAnchorEl;
  return function (el) {
    if (el) setAnchorEl(el);
  };
};
/**
 * Creates props for a component that opens the popup when clicked.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


var bindTrigger = function bindTrigger(_ref3) {
  var _ref4;

  var isOpen = _ref3.isOpen,
      open = _ref3.open,
      popupId = _ref3.popupId,
      variant = _ref3.variant;
  return _ref4 = {}, _defineProperty(_ref4, variant === 'popover' ? 'aria-controls' : 'aria-describedby', isOpen ? popupId : null), _defineProperty(_ref4, 'aria-haspopup', variant === 'popover' ? true : undefined), _defineProperty(_ref4, "onClick", open), _ref4;
};
/**
 * Creates props for a component that toggles the popup when clicked.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


var bindToggle = function bindToggle(_ref5) {
  var _ref6;

  var isOpen = _ref5.isOpen,
      toggle = _ref5.toggle,
      popupId = _ref5.popupId,
      variant = _ref5.variant;
  return _ref6 = {}, _defineProperty(_ref6, variant === 'popover' ? 'aria-controls' : 'aria-describedby', isOpen ? popupId : null), _defineProperty(_ref6, 'aria-haspopup', variant === 'popover' ? true : undefined), _defineProperty(_ref6, "onClick", toggle), _ref6;
};
/**
 * Creates props for a component that opens the popup while hovered.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


var bindHover = function bindHover(_ref7) {
  var _ref8;

  var isOpen = _ref7.isOpen,
      open = _ref7.open,
      onMouseLeave = _ref7.onMouseLeave,
      popupId = _ref7.popupId,
      variant = _ref7.variant;
  return _ref8 = {}, _defineProperty(_ref8, variant === 'popover' ? 'aria-controls' : 'aria-describedby', isOpen ? popupId : null), _defineProperty(_ref8, 'aria-haspopup', variant === 'popover' ? true : undefined), _defineProperty(_ref8, "onMouseEnter", open), _defineProperty(_ref8, "onMouseLeave", onMouseLeave), _ref8;
};
/**
 * Creates props for a `Popover` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


var bindPopover = function bindPopover(_ref9) {
  var isOpen = _ref9.isOpen,
      anchorEl = _ref9.anchorEl,
      close = _ref9.close,
      popupId = _ref9.popupId,
      onMouseLeave = _ref9.onMouseLeave;
  return {
    id: popupId,
    anchorEl: anchorEl,
    open: isOpen,
    onClose: close,
    onMouseLeave: onMouseLeave
  };
};
/**
 * Creates props for a `Menu` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */


var bindMenu = bindPopover;
/**
 * Creates props for a `Popper` component.
 *
 * @param {object} popupState the argument passed to the child function of
 * `PopupState`
 */

var bindPopper = function bindPopper(_ref10) {
  var isOpen = _ref10.isOpen,
      anchorEl = _ref10.anchorEl,
      popupId = _ref10.popupId;
  return {
    id: popupId,
    anchorEl: anchorEl,
    open: isOpen
  };
};

var getPopup = function getPopup(_ref11) {
  var popupId = _ref11.popupId;
  return popupId && typeof document !== 'undefined' ? document.getElementById(popupId) // eslint-disable-line no-undef
  : null;
};

var isAncestor = function isAncestor(parent, child) {
  if (!parent) return false;

  while (child) {
    if (child === parent) return true; // eslint-disable-next-line no-param-reassign

    child = child.parentElement;
  }

  return false;
};

var isElementInPopup = function isElementInPopup(element, popupState) {
  var anchorEl = popupState.anchorEl,
      _childPopupState = popupState._childPopupState;
  return isAncestor(anchorEl, element) || isAncestor(getPopup(popupState), element) || _childPopupState != null && isElementInPopup(element, _childPopupState);
};

export { initCoreState, createPopupState, anchorRef, bindTrigger, bindToggle, bindHover, bindPopover, bindMenu, bindPopper };
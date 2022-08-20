"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.TrapFocus = void 0;

var _react = _interopRequireDefault(require("react"));

var _ownerDocument = _interopRequireDefault(require("../utils/functions/ownerDocument"));

var _useForkRef = _interopRequireDefault(require("../utils/hooks/useForkRef"));

/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */

/**
 * Backyard React Trap Focus
 * 
 * Traps focus so that user cannot focus on anything outside of children
 * Creates sentinels around content with tab index 0 to reset tabs
 * 
 * Heavily Based on Material-UI's TrapFocus:
 * @see https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Modal/TrapFocus.js
 */
var TrapFocus = function TrapFocus(_ref) {
  var children = _ref.children,
      _ref$disableAutoFocus = _ref.disableAutoFocus,
      disableAutoFocus = _ref$disableAutoFocus === void 0 ? false : _ref$disableAutoFocus,
      _ref$disableEnforceFo = _ref.disableEnforceFocus,
      disableEnforceFocus = _ref$disableEnforceFo === void 0 ? false : _ref$disableEnforceFo,
      _ref$disableRestoreFo = _ref.disableRestoreFocus,
      disableRestoreFocus = _ref$disableRestoreFo === void 0 ? false : _ref$disableRestoreFo,
      getDoc = _ref.getDoc,
      isEnabled = _ref.isEnabled,
      open = _ref.open;

  // Store refs
  var ignoreNextEnforceFocus = _react["default"].useRef({});

  var sentinelStart = _react["default"].useRef(null);

  var sentinelEnd = _react["default"].useRef(null);

  var nodeToRestore = _react["default"].useRef(null);

  var rootRef = _react["default"].useRef(null);

  var handleRef = (0, _useForkRef["default"])(children.ref, rootRef); // ⚠️ You may rely on React.useMemo as a performance optimization, not as a semantic guarantee.
  // https://reactjs.org/docs/hooks-reference.html#usememo

  _react["default"].useMemo(function () {
    // If trap focus is closed, don't set new node to restore
    if (!open || typeof window === 'undefined') {
      return;
    } // Set node to restore


    nodeToRestore.current = getDoc().activeElement;
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps
  // Side effect to rerender if prop changes externally


  _react["default"].useEffect(function () {
    // Ignore if closed
    if (!open) {
      return;
    }

    var doc = (0, _ownerDocument["default"])(rootRef.current); // We might render an empty child

    if (!disableAutoFocus && rootRef.current && !rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (process.env.NODE_ENV !== 'production') {
          console.error( // eslint-disable-line no-console
          ['Backyard: the root content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n'));
        }

        rootRef.current.setAttribute('tabIndex', -1);
      }

      rootRef.current.focus();
    }
    /**
     * Contains focus with root ref
     */


    var contain = function contain() {
      if (disableEnforceFocus || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (rootRef.current && !rootRef.current.contains(doc.activeElement)) {
        rootRef.current.focus();
      }
    };
    /**
     * Loops focus index from sentinel end back to sentinel start
     * 
     * @param {Event} event 
     */


    var loopFocus = function loopFocus(event) {
      // 9 = Tab
      if (disableEnforceFocus || !isEnabled() || event.keyCode !== 9) {
        return;
      } // Make sure the next tab starts from the right place.


      if (doc.activeElement === rootRef.current) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;

        if (event.shiftKey) {
          sentinelEnd.current.focus();
        } else {
          sentinelStart.current.focus();
        }
      }
    };

    doc.addEventListener('focus', contain, true);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired 
    // when the focused area stops being a focused area
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    var interval = setInterval(function () {
      contain();
    }, 50);
    return function () {
      clearInterval(interval);
      doc.removeEventListener('focus', contain, true);
      doc.removeEventListener('keydown', loopFocus, true); // restoreLastFocus()

      if (!disableRestoreFocus) {
        // In IE 11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE 11 have a focus method.
        // Once IE 11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open]);

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    tabIndex: 0,
    ref: sentinelStart,
    "data-test": "sentinelStart"
  }), /*#__PURE__*/_react["default"].cloneElement(children, {
    ref: handleRef
  }), /*#__PURE__*/_react["default"].createElement("div", {
    tabIndex: 0,
    ref: sentinelEnd,
    "data-test": "sentinelEnd"
  }));
};

exports.TrapFocus = TrapFocus;
TrapFocus.bdsName = 'TrapFocus';
var _default = TrapFocus;
exports["default"] = _default;
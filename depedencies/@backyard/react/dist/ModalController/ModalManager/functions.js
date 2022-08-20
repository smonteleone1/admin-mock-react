"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isOverflowing = exports.handleContainer = exports.getPaddingRight = exports.getHiddenSiblings = exports.findIndexOf = exports.ariaHiddenSiblings = exports.ariaHidden = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _getScrollbarSize = _interopRequireDefault(require("../../utils/functions/getScrollbarSize"));

var _ownerDocument = _interopRequireDefault(require("../../utils/functions/ownerDocument"));

var _ownerWindow = _interopRequireDefault(require("../../utils/functions/ownerWindow"));

var ariaHidden = function ariaHidden(node, show) {
  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
};

exports.ariaHidden = ariaHidden;

var ariaHiddenSiblings = function ariaHiddenSiblings(container, mountNode, currentNode) {
  var nodesToExclude = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var show = arguments.length > 4 ? arguments[4] : undefined;
  var blacklist = [mountNode, currentNode].concat((0, _toConsumableArray2["default"])(nodesToExclude));
  var blacklistTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE'];
  [].forEach.call(container.children, function (node) {
    if (node.nodeType === 1 && blacklist.indexOf(node) === -1 && blacklistTagNames.indexOf(node.tagName) === -1) {
      ariaHidden(node, show);
    }
  });
}; // Is a vertical scrollbar displayed?


exports.ariaHiddenSiblings = ariaHiddenSiblings;

var isOverflowing = function isOverflowing(container) {
  var doc = (0, _ownerDocument["default"])(container);

  if (doc.body === container) {
    return (0, _ownerWindow["default"])(doc).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
};

exports.isOverflowing = isOverflowing;

var findIndexOf = function findIndexOf(containerInfo, callback) {
  var idx = -1;
  containerInfo.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
};

exports.findIndexOf = findIndexOf;

var getHiddenSiblings = function getHiddenSiblings(container) {
  var hiddenSiblings = [];
  [].forEach.call(container.children, function (node) {
    if (node.getAttribute && node.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(node);
    }
  });
  return hiddenSiblings;
};

exports.getHiddenSiblings = getHiddenSiblings;

var getPaddingRight = function getPaddingRight(node) {
  return parseInt(window.getComputedStyle(node)['padding-right'], 10) || 0;
};

exports.getPaddingRight = getPaddingRight;

var handleContainer = function handleContainer(containerInfo, props) {
  var restoreStyle = [];
  var restorePaddings = [];
  var container = containerInfo.container;
  var fixedNodes;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      var scrollbarSize = (0, _getScrollbarSize["default"])();
      restoreStyle.push({
        value: container.style.paddingRight,
        key: 'padding-right',
        el: container
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style['padding-right'] = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .bds-fixed is a global helper.

      fixedNodes = (0, _ownerDocument["default"])(container).querySelectorAll('.bds-fixed');
      [].forEach.call(fixedNodes, function (node) {
        restorePaddings.push(node.style.paddingRight); // eslint-disable-next-line no-param-reassign

        node.style.paddingRight = "".concat(getPaddingRight(node) + scrollbarSize, "px");
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/


    var parent = container.parentElement;
    var scrollContainer = parent.nodeName === 'HTML' && (window.getComputedStyle(parent)['overflow-y'] === 'scroll' || window.getComputedStyle(parent)['overflow-y'] === 'auto') ? parent : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push({
      value: scrollContainer.style.overflow,
      key: 'overflow',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }

  var restore = function restore() {
    if (fixedNodes) {
      ;
      [].forEach.call(fixedNodes, function (node, i) {
        if (restorePaddings[i]) {
          // eslint-disable-next-line no-param-reassign
          node.style.paddingRight = restorePaddings[i];
        } else {
          node.style.removeProperty('padding-right');
        }
      });
    }

    restoreStyle.forEach(function (_ref) {
      var value = _ref.value,
          el = _ref.el,
          key = _ref.key;

      if (value) {
        el.style.setProperty(key, value);
      } else {
        el.style.removeProperty(key);
      }
    });
  };

  return restore;
};

exports.handleContainer = handleContainer;
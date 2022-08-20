"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Portal = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var React = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _setRef = _interopRequireDefault(require("../utils/functions/setRef"));

var _useForkRef = _interopRequireDefault(require("../utils/hooks/useForkRef"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @todo types
 * @param container
 */
function getContainer(container) {
  // eslint-disable-next-line no-param-reassign
  container = typeof container === 'function' ? container() : container; // eslint-disable-next-line react/no-find-dom-node

  return _reactDom["default"].findDOMNode(container);
}

var useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
/**
 * Backyard React Portal
 *
 * @todo Comments
 */

var Portal = /*#__PURE__*/React.forwardRef(function Portal(_ref, ref) {
  var children = _ref.children,
      container = _ref.container,
      _ref$disablePortal = _ref.disablePortal,
      disablePortal = _ref$disablePortal === void 0 ? false : _ref$disablePortal,
      onRendered = _ref.onRendered;

  var _React$useState = React.useState(null),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      mountNode = _React$useState2[0],
      setMountNode = _React$useState2[1];

  var handleRef = (0, _useForkRef["default"])( /*#__PURE__*/React.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(function () {
    if (mountNode && !disablePortal) {
      (0, _setRef["default"])(ref, mountNode);
      return function () {
        (0, _setRef["default"])(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect(function () {
    if (onRendered && (mountNode || disablePortal)) {
      onRendered();
    }
  }, [onRendered, mountNode, disablePortal]);

  if (disablePortal) {
    if ( /*#__PURE__*/React.isValidElement(children)) {
      return /*#__PURE__*/React.cloneElement(children, {
        ref: handleRef
      });
    }

    return children;
  }

  return mountNode ? /*#__PURE__*/_reactDom["default"].createPortal(children, mountNode) : mountNode;
});
exports.Portal = Portal;
Portal.bdsName = 'Portal';
var _default = Portal;
exports["default"] = _default;
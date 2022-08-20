import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';
import ReactDOM from 'react-dom';
import setRef from '../utils/functions/setRef';
import useForkRef from '../utils/hooks/useForkRef';

/**
 * @todo types
 * @param container
 */
function getContainer(container) {
  // eslint-disable-next-line no-param-reassign
  container = typeof container === 'function' ? container() : container; // eslint-disable-next-line react/no-find-dom-node

  return ReactDOM.findDOMNode(container);
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
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mountNode = _React$useState2[0],
      setMountNode = _React$useState2[1];

  var handleRef = useForkRef( /*#__PURE__*/React.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect(function () {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(function () {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return function () {
        setRef(ref, null);
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

  return mountNode ? /*#__PURE__*/ReactDOM.createPortal(children, mountNode) : mountNode;
});
Portal.bdsName = 'Portal';
export { Portal };
export default Portal;
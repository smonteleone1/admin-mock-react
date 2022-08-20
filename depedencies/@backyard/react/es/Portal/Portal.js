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

const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
/**
 * Backyard React Portal
 *
 * @todo Comments
 */

const Portal = /*#__PURE__*/React.forwardRef(function Portal({
  children,
  container,
  disablePortal = false,
  onRendered
}, ref) {
  const [mountNode, setMountNode] = React.useState(null);
  const handleRef = useForkRef( /*#__PURE__*/React.isValidElement(children) ? children.ref : null, ref);
  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return () => {
        setRef(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);
  useEnhancedEffect(() => {
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
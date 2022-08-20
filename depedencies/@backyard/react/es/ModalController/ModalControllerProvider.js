import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "override", "context"];
import * as React from 'react';
const ModalControllerContext = /*#__PURE__*/React.createContext(null);
const ModalControllerConsumer = ModalControllerContext.Consumer;
/**
 * `ModalControllerProvider` Backyard React
 *
 * @param props - Modal props
 */

const ModalControllerProvider = _ref => {
  let {
    children,
    override,
    context: contextProp
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Memoize `ModalControllerContextValues`
  const context = React.useMemo(() => _extends({}, contextProp, override, props), [override, props, contextProp]);
  return /*#__PURE__*/React.createElement(ModalControllerContext.Provider, {
    value: context
  }, children);
};

export { ModalControllerContext, ModalControllerConsumer, ModalControllerProvider };
export default ModalControllerProvider;
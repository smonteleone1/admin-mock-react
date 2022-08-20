import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "noLines", "context"];
import * as React from 'react';
const ModalContext = /*#__PURE__*/React.createContext(null);
const ModalConsumer = ModalContext.Consumer;
/**
 * `ModalProvider` Backyard React
 *
 * @param props - Modal props
 */

const ModalProvider = _ref => {
  let {
    children,
    noLines,
    context: contextProp
  } = _ref,
      override = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Memoize `ModalContextValues`
  const context = React.useMemo(() => _extends({
    noLines
  }, contextProp, override), [noLines, override]);
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: context
  }, children);
};

export { ModalContext, ModalConsumer, ModalProvider };
export default ModalProvider;
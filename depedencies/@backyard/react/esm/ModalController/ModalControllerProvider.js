import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "override", "context"];
import * as React from 'react';
var ModalControllerContext = /*#__PURE__*/React.createContext(null);
var ModalControllerConsumer = ModalControllerContext.Consumer;
/**
 * `ModalControllerProvider` Backyard React
 *
 * @param props - Modal props
 */

var ModalControllerProvider = function ModalControllerProvider(_ref) {
  var children = _ref.children,
      override = _ref.override,
      contextProp = _ref.context,
      props = _objectWithoutProperties(_ref, _excluded);

  // Memoize `ModalControllerContextValues`
  var context = React.useMemo(function () {
    return _extends({}, contextProp, override, props);
  }, [override, props, contextProp]);
  return /*#__PURE__*/React.createElement(ModalControllerContext.Provider, {
    value: context
  }, children);
};

export { ModalControllerContext, ModalControllerConsumer, ModalControllerProvider };
export default ModalControllerProvider;
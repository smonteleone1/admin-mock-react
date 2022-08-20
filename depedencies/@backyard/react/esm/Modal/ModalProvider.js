import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "noLines", "context"];
import * as React from 'react';
var ModalContext = /*#__PURE__*/React.createContext(null);
var ModalConsumer = ModalContext.Consumer;
/**
 * `ModalProvider` Backyard React
 *
 * @param props - Modal props
 */

var ModalProvider = function ModalProvider(_ref) {
  var children = _ref.children,
      noLines = _ref.noLines,
      contextProp = _ref.context,
      override = _objectWithoutProperties(_ref, _excluded);

  // Memoize `ModalContextValues`
  var context = React.useMemo(function () {
    return _extends({
      noLines: noLines
    }, contextProp, override);
  }, [noLines, override]);
  return /*#__PURE__*/React.createElement(ModalContext.Provider, {
    value: context
  }, children);
};

export { ModalContext, ModalConsumer, ModalProvider };
export default ModalProvider;
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _pt from "prop-types";
var _excluded = ["children", "shape"];
import * as React from 'react';
import { useBackyardTheme, getShape } from '../../ThemeProvider';

/**
 * Table Context
 */
var TableContext = /*#__PURE__*/React.createContext(null);
/**
 * Table Consumer
 */

var TableConsumer = TableContext.Consumer;
/**
 * Backyard React Table Provider
 *
 * Provides values to children and handles state management of the `Table`.
 */

var TableProvider = function TableProvider(_ref) {
  var children = _ref.children,
      shapeProp = _ref.shape,
      override = _objectWithoutProperties(_ref, _excluded);

  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'Table'
  }).context.shape;
  var shape = getShape(shapeProp, shapeContext);
  var context = React.useMemo(function () {
    return {
      shape: shape
    };
  }, [shape]);
  return /*#__PURE__*/React.createElement(TableContext.Provider, {
    value: _extends({}, context, override)
  }, children);
};
/**
 * Context values that can be passed to children via
 *
 * `const context = React.useContext(TableContext)`
 */


process.env.NODE_ENV !== "production" ? TableProvider.propTypes = {
  children: _pt.node.isRequired
} : void 0;
export { TableProvider, TableContext, TableConsumer };
export default TableProvider;
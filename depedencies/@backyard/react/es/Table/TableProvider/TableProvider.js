import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _pt from "prop-types";
const _excluded = ["children", "shape"];
import * as React from 'react';
import { useBackyardTheme, getShape } from '../../ThemeProvider';

/**
 * Table Context
 */
const TableContext = /*#__PURE__*/React.createContext(null);
/**
 * Table Consumer
 */

const TableConsumer = TableContext.Consumer;
/**
 * Backyard React Table Provider
 *
 * Provides values to children and handles state management of the `Table`.
 */

const TableProvider = _ref => {
  let {
    children,
    shape: shapeProp
  } = _ref,
      override = _objectWithoutPropertiesLoose(_ref, _excluded);

  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'Table'
  }).context;
  const shape = getShape(shapeProp, shapeContext);
  const context = React.useMemo(() => ({
    shape
  }), [shape]);
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
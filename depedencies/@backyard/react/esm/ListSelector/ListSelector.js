import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _pt from "prop-types";
var _excluded = ["shape", "multiple", "children", "options"];
import * as React from 'react';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import ListSelectorMultiple from './ListSelectorMultiple';
import ListSelectorSingle from './ListSelectorSingle';

/**
 * TypeScript guard for prop types
 */
var GuardMultipleProps = function GuardMultipleProps(props, multiple) {
  return multiple;
};
/**
 * Backyard React List Selector (List)
 *
 * `List` provides a method for selecting a single or multiple option out of a list of options.
 *
 * It functions similarly to a `Select` or `Multiselect` but offers a different, more customized presentation to the user.
 *
 * For a non-selected list of options for a user to trigger actions from, use `Menu`.
 *
 * Example:
 * ```
 *  <List>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          New York
 *      </ListOption>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          New Jersey
 *      </ListOption>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          Charlotte
 *      </ListOption>
 *      <ListOption
 *          icon={<Location />}
 *      >
 *          Atlanta
 *      </ListOption>
 *  </List>
 * ```
 */


GuardMultipleProps.propTypes = {
  children: _pt.arrayOf(_pt.element),
  multiple: _pt.bool,
  renderItem: _pt.func,
  defaultValue: _pt.oneOfType([_pt.oneOfType([_pt.string, _pt.number]), _pt.arrayOf(_pt.oneOfType([_pt.string, _pt.number]))]),
  value: _pt.oneOfType([_pt.oneOfType([_pt.string, _pt.number]), _pt.arrayOf(_pt.oneOfType([_pt.string, _pt.number]))]),
  shape: _pt.oneOf(['rounded', 'squared'])
};
var ListSelector = /*#__PURE__*/React.forwardRef(function ListSelector(_ref, ref) {
  var shapeProp = _ref.shape,
      _ref$multiple = _ref.multiple,
      multiple = _ref$multiple === void 0 ? false : _ref$multiple,
      children = _ref.children,
      options = _ref.options,
      props = _objectWithoutProperties(_ref, _excluded);

  // Get Backyard Theme Context
  var shapeContext = useBackyardTheme({
    validate: true,
    name: 'ListSelector'
  }).context.shape; // Calculate shape

  var shape = getShape(shapeProp, shapeContext); // Calculate size of the options

  var size = React.useMemo(function () {
    return children ? React.Children.count(children) : options === null || options === void 0 ? void 0 : options.length;
  }, [options, children]);
  return GuardMultipleProps(props, multiple) ? /*#__PURE__*/React.createElement(ListSelectorMultiple, _extends({
    key: "multiple-".concat(size) // re-render when size changes
    ,
    shape: shape,
    options: options
  }, props, {
    ref: ref
  }), children) : /*#__PURE__*/React.createElement(ListSelectorSingle, _extends({
    key: "single-".concat(size) // re-render when size changes
    ,
    shape: shape,
    options: options
  }, props, {
    ref: ref
  }), children);
});
// Rename `ListSelector` to `List` for backwards compatibility
var List = ListSelector;
export { ListSelector, List };
export default ListSelector;
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _pt from "prop-types";
const _excluded = ["shape", "multiple", "children", "options"];
import * as React from 'react';
import { useBackyardTheme, getShape } from '../ThemeProvider';
import ListSelectorMultiple from './ListSelectorMultiple';
import ListSelectorSingle from './ListSelectorSingle';

/**
 * TypeScript guard for prop types
 */
const GuardMultipleProps = (props, multiple) => multiple;
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
const ListSelector = /*#__PURE__*/React.forwardRef(function ListSelector(_ref, ref) {
  let {
    shape: shapeProp,
    // = 'rounded',
    multiple = false,
    children,
    options
  } = _ref,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  // Get Backyard Theme Context
  const {
    shape: shapeContext
  } = useBackyardTheme({
    validate: true,
    name: 'ListSelector'
  }).context; // Calculate shape

  const shape = getShape(shapeProp, shapeContext); // Calculate size of the options

  const size = React.useMemo(() => children ? React.Children.count(children) : options?.length, [options, children]);
  return GuardMultipleProps(props, multiple) ? /*#__PURE__*/React.createElement(ListSelectorMultiple, _extends({
    key: `multiple-${size}` // re-render when size changes
    ,
    shape: shape,
    options: options
  }, props, {
    ref: ref
  }), children) : /*#__PURE__*/React.createElement(ListSelectorSingle, _extends({
    key: `single-${size}` // re-render when size changes
    ,
    shape: shape,
    options: options
  }, props, {
    ref: ref
  }), children);
});
// Rename `ListSelector` to `List` for backwards compatibility
const List = ListSelector;
export { ListSelector, List };
export default ListSelector;
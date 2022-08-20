import _extends from "@babel/runtime/helpers/esm/extends";
import * as React from 'react';

/**
 * Get options from either input, `options` prop or `children`
 *
 * @param options - options format for multiselect
 * @param children - children `Option`s for multiselect
 */
const getOptions = (options, children = null) => // If options are defined,
options?.length > 0 ? // Then use options format
options : // Else, map children props to `options` format
children ? React.Children.map(children, // If child is an option group or list option group,
child => ['OptionGroup', 'ListOptionGroup'].includes(child.type?.bdsName) // Recursively add option levels
? _extends({}, child?.props, {
  options: getOptions([], child.props.children)
}) // Else, just add option
: _extends({}, child?.props, {
  label: child?.props?.children
})) : [];

export { getOptions };
export default getOptions;
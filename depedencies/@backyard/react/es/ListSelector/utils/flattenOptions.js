import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
const _excluded = ["children", "options"];

const flattenOptions = (options, parent) => options.reduce((opts, opt, index) => {
  const {
    options
  } = opt,
        option = _objectWithoutPropertiesLoose(opt, _excluded);

  opts.push(_extends({
    'data-option-id': parent > -1 ? `${parent}-${index}` : `${index}`
  }, option));

  if (options) {
    opts.push(flattenOptions(options, index));
  }

  return opts.flat();
}, []);

export { flattenOptions };
export default flattenOptions;
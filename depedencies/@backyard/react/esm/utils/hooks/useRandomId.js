import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import * as React from 'react';

var useRandomId = function useRandomId() {
  var idOverride = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var _React$useState = React.useState(idOverride),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      defaultId = _React$useState2[0],
      setDefaultId = _React$useState2[1];

  var id = idOverride || defaultId;
  React.useEffect(function () {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the random value for client-side rendering only.
      // We can't use it server-side.
      setDefaultId("backyard-".concat(Math.round(Math.random() * 1e5)));
    }
  }, [defaultId]);
  return id;
};

export { useRandomId };
export default useRandomId;
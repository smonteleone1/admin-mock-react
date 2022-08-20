import * as React from 'react';

function isBDSElement(element, bdsNames) {
  return /*#__PURE__*/React.isValidElement(element) && bdsNames.indexOf(element.type.bdsName) !== -1;
}

export { isBDSElement };
export default isBDSElement;
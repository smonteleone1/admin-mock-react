import * as React from 'react';
var TabContext = /*#__PURE__*/React.createContext({
  selected: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleClick: function handleClick(index, event) {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleKeyDown: function handleKeyDown(index, event) {},
  isOnLayer: false
});
export default TabContext;
import * as React from 'react';
import MenuPopoverContext from './MenuPopoverContext';

var useMenuPopover = function useMenuPopover() {
  return React.useContext(MenuPopoverContext);
};

export { useMenuPopover };
export default useMenuPopover;
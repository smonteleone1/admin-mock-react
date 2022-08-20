import * as React from 'react';
import { ModalContext } from '../Modal/ModalProvider';

var useDrawer = function useDrawer() {
  return React.useContext(ModalContext);
};

export { useDrawer };
export default useDrawer;
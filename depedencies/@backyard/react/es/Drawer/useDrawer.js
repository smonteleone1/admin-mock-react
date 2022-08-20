import * as React from 'react';
import { ModalContext } from '../Modal/ModalProvider';

const useDrawer = () => {
  return React.useContext(ModalContext);
};

export { useDrawer };
export default useDrawer;
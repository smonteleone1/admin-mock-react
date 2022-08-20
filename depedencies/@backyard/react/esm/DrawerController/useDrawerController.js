import * as React from 'react';
import { ModalControllerContext } from '../ModalController/ModalControllerProvider';

var useDrawerController = function useDrawerController() {
  return React.useContext(ModalControllerContext);
};

export { useDrawerController };
export default useDrawerController;
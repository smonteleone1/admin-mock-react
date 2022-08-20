import * as React from 'react';
import { ModalControllerContext } from '../ModalController/ModalControllerProvider';

const useDrawerController = () => {
  return React.useContext(ModalControllerContext);
};

export { useDrawerController };
export default useDrawerController;
import * as React from 'react';
import { ModalControllerContext } from './ModalControllerProvider';

var useModalController = function useModalController() {
  return React.useContext(ModalControllerContext);
};

export { useModalController };
export default useModalController;
import * as React from 'react';
import { ModalContext } from './ModalProvider';

var useModal = function useModal() {
  return React.useContext(ModalContext);
};

export { useModal };
export default useModal;
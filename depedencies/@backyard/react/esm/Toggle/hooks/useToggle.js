import * as React from 'react';
import { ToggleContext } from '../ToggleProvider';
/**
 * Provide `ToggleProvider` values
 */

var useToggle = function useToggle() {
  return React.useContext(ToggleContext);
};

export { useToggle };
export default useToggle;
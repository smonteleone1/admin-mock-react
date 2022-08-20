import * as React from 'react';
import RadioGroupContext from './RadioGroupContext';

var useRadioGroup = function useRadioGroup() {
  return React.useContext(RadioGroupContext);
};

export { useRadioGroup };
export default useRadioGroup;
import { useRef } from 'react';
import useAdapter from './useAdapter';

var useNow = function useNow() {
  var adapter = useAdapter();
  var now = useRef(adapter.date());
  return now.current;
};

export { useNow };
export default useNow;
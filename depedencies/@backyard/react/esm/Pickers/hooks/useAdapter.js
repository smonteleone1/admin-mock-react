import DateAdapter from '../classes/DateAdapter';

var useAdapter = function useAdapter(options) {
  var adapter = new DateAdapter(options);
  return adapter;
};

export { useAdapter };
export default useAdapter;
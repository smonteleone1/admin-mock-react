import DateAdapter from '../classes/DateAdapter';

const useAdapter = options => {
  const adapter = new DateAdapter(options);
  return adapter;
};

export { useAdapter };
export default useAdapter;
const persistSyntheticEvent = event => {
  if (typeof event?.persist === 'function') {
    event.persist();
  }
};

export { persistSyntheticEvent };
export default persistSyntheticEvent;
var persistSyntheticEvent = function persistSyntheticEvent(event) {
  if (typeof (event === null || event === void 0 ? void 0 : event.persist) === 'function') {
    event.persist();
  }
};

export { persistSyntheticEvent };
export default persistSyntheticEvent;
const useScrollbarColumn = (scrollbarWidth, disableScrollbar) => {
  const addScrollbarColumn = hooks => {
    hooks.visibleColumns.push(columns => [...columns, {
      id: 'scrollbar',
      Filter: () => null,
      width: scrollbarWidth,
      minWidth: scrollbarWidth,
      maxWidth: scrollbarWidth
    }]);
  };

  return !disableScrollbar ? addScrollbarColumn : () => null;
};

export { useScrollbarColumn };
export default useScrollbarColumn;
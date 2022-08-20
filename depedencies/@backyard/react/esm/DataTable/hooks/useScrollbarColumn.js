import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";

var useScrollbarColumn = function useScrollbarColumn(scrollbarWidth, disableScrollbar) {
  var addScrollbarColumn = function addScrollbarColumn(hooks) {
    hooks.visibleColumns.push(function (columns) {
      return [].concat(_toConsumableArray(columns), [{
        id: 'scrollbar',
        Filter: function Filter() {
          return null;
        },
        width: scrollbarWidth,
        minWidth: scrollbarWidth,
        maxWidth: scrollbarWidth
      }]);
    });
  };

  return !disableScrollbar ? addScrollbarColumn : function () {
    return null;
  };
};

export { useScrollbarColumn };
export default useScrollbarColumn;
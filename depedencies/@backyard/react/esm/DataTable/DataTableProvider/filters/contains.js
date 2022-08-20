export var contains = function contains(rows, id, filterValue) {
  if (rows && id && typeof filterValue !== 'undefined') {
    return rows.filter(function (row) {
      var rowValue = row.values[id];
      return rowValue !== undefined ? rowValue.includes(filterValue) : false;
    });
  }

  return false;
};
export default contains;
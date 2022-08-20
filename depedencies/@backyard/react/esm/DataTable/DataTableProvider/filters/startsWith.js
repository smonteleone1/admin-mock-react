export var startsWith = function startsWith(rows, id, filterValue) {
  if (rows && id && typeof filterValue !== 'undefined') {
    return rows.filter(function (row) {
      var rowValue = row.values[id];
      return rowValue !== undefined ? String(rowValue).startsWith(String(filterValue)) : false;
    });
  }

  return false;
};
export default startsWith;
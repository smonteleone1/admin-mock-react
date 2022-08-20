/**
 * Checks for whether array of strings `a` is equal to array `b`
 *
 * @param a - array to check for equality
 * @param b - array to check for equality
 */
function arrayEquals(a, b) {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every(function (val, index) {
    return val === b[index];
  });
}

export { arrayEquals };
export default arrayEquals;
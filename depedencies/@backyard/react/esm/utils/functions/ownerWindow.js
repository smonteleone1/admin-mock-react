import ownerDocument from './ownerDocument';

var ownerWindow = function ownerWindow(node) {
  var doc = ownerDocument(node);
  return doc.defaultView || window;
};

export { ownerWindow };
export default ownerWindow;
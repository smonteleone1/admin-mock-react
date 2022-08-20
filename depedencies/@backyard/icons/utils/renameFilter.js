"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function renameFilter(svgPathObj) {
  var fileName = svgPathObj.base;
  fileName = fileName.replace(/(_([0-9]+)px)?\.svg/, '.js') // or... (match, p1, p2, p3) => (p1 || p3).toUpperCase()
  .replace(/(^.)|(_)(.)/g, function (match, p1) {
    return p1.toUpperCase();
  }); // Example way to rename a file
  // if (fileName.indexOf('3dRotation') === 0) {
  //     fileName = `ThreeD${fileName.slice(2)}`
  // }

  return fileName;
}

var _default = renameFilter;
exports["default"] = _default;
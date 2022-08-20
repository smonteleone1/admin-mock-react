import path from 'path';

function getComponentName(destPath) {
  var splitregex = new RegExp("[\\".concat(path.sep, "-]+"));
  var parts = destPath.replace('.js', '').split(splitregex).map(function (part) {
    return part.charAt(0).toUpperCase() + part.substring(1);
  });
  return parts.join('');
}

export default getComponentName;
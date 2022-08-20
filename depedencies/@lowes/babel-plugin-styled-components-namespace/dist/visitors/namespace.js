"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var findModuleRoot = function findModuleRoot(filename) {
  if (!filename) {
    return null;
  }

  var dir = _path.default.dirname(filename);

  if (_fs.default.existsSync(_path.default.join(dir, 'package.json'))) {
    return dir;
  } else if (dir !== filename) {
    return findModuleRoot(dir);
  } else {
    return null;
  }
};

var FILE_HASH = 'styled-components-file-hash';
var separatorRegExp = new RegExp(`\\${_path.default.sep}`, 'g');

var getFileHash = function getFileHash(state) {
  var file = state.file; // hash calculation is costly due to fs operations, so we'll cache it per file.

  if (file.get(FILE_HASH)) {
    return file.get(FILE_HASH);
  }

  var filename = file.opts.filename; // find module root directory

  var moduleRoot = findModuleRoot(filename);

  var filePath = moduleRoot && _path.default.relative(moduleRoot, filename).replace(separatorRegExp, '/');

  var moduleName = moduleRoot && JSON.parse(_fs.default.readFileSync(_path.default.join(moduleRoot, 'package.json'))).name;
  var code = file.code;
  var stuffToHash = [moduleName];

  if (filePath) {
    stuffToHash.push(filePath);
  } else {
    stuffToHash.push(code);
  }

  var fileHash = `${(0, _utils.hash)(stuffToHash.join(''))}${(0, _utils.useNamespace)(state)}`;
  file.set(FILE_HASH, fileHash);
  return fileHash;
};

var getComponentId = function getComponentId(state) {
  getFileHash(state);
};

var _default = function _default(t) {
  return function (path, state) {
    if (path.node.tag ? (0, _utils.isStyled)(t)(path.node.tag, state) :
    /* styled()`` */
    (0, _utils.isStyled)(t)(path.node.callee, state) && path.node.callee.property && path.node.callee.property.name !== 'withConfig' || // styled(x)({})
    (0, _utils.isStyled)(t)(path.node.callee, state) && !t.isMemberExpression(path.node.callee.callee) || // styled(x).attrs()({})
    (0, _utils.isStyled)(t)(path.node.callee, state) && t.isMemberExpression(path.node.callee.callee) && path.node.callee.callee.property && path.node.callee.callee.property.name && path.node.callee.callee.property.name !== 'withConfig') {
      (0, _utils.useSSR)(state) && getComponentId(state);
    }
  };
};

exports.default = _default;
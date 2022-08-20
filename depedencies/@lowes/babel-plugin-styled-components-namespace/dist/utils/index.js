"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hash = exports.isStyled = exports.importLocalName = exports.isValidTopLevelImport = exports.useNamespace = exports.useSSR = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var VALID_TOP_LEVEL_IMPORT_PATHS = ['styled-components', 'styled-components/no-tags', 'styled-components/native', 'styled-components/primitives'];

function getOption(_ref, name) {
  var opts = _ref.opts;
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return opts[name] === undefined || opts[name] === null ? defaultValue : opts[name];
}

var useSSR = function useSSR(state) {
  return getOption(state, 'ssr', true);
};

exports.useSSR = useSSR;

var useNamespace = function useNamespace(state) {
  var namespace = getOption(state, 'namespace', '');

  if (namespace) {
    return `_${namespace}`;
  }

  return 'uuuu';
};

exports.useNamespace = useNamespace;

var isValidTopLevelImport = function isValidTopLevelImport(x) {
  return VALID_TOP_LEVEL_IMPORT_PATHS.includes(x);
};

exports.isValidTopLevelImport = isValidTopLevelImport;
var localNameCache = {};

var importLocalName = function importLocalName(name, state) {
  var bypassCache = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var cacheKey = name + state.file.opts.filename;

  if (!bypassCache && cacheKey in localNameCache) {
    return localNameCache[cacheKey];
  }

  var localName = state.styledRequired ? name === 'default' ? 'styled' : name : false;
  state.file.path.traverse({
    ImportDeclaration: {
      exit(path) {
        var node = path.node;

        if (isValidTopLevelImport(node.source.value)) {
          var _iterator = _createForOfIteratorHelper(path.get('specifiers')),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var specifier = _step.value;

              if (specifier.isImportDefaultSpecifier()) {
                localName = specifier.node.local.name;
              }

              if (specifier.isImportSpecifier() && specifier.node.imported.name === name) {
                localName = specifier.node.local.name;
              }

              if (specifier.isImportNamespaceSpecifier()) {
                localName = specifier.node.local.name;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }

    }
  });
  localNameCache[cacheKey] = localName;
  return localName;
};

exports.importLocalName = importLocalName;

var isStyled = function isStyled(t) {
  return function (tag, state) {
    if (t.isCallExpression(tag) && t.isMemberExpression(tag.callee) && tag.callee.property.name !== 'default'
    /** ignore default for #93 below */
    ) {
        // styled.something()
        return isStyled(t)(tag.callee.object, state);
      } else {
      return t.isMemberExpression(tag) && tag.object.name === importLocalName('default', state) || t.isCallExpression(tag) && tag.callee.name === importLocalName('default', state) || state.styledRequired && t.isMemberExpression(tag) && t.isMemberExpression(tag.object) && tag.object.property.name === 'default' && tag.object.object.name === state.styledRequired || state.styledRequired && t.isCallExpression(tag) && t.isMemberExpression(tag.callee) && tag.callee.property.name === 'default' && tag.callee.object.name === state.styledRequired;
    }
  };
};

exports.isStyled = isStyled;

var hash = function hash(str) {
  var l = str.length;
  var h = l;
  var i = 0;
  var k;

  while (l >= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    k ^= k >>> 24;
    k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;
    l -= 4;
    ++i;
  }

  switch (l) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  }

  h ^= h >>> 13;
  h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
  h ^= h >>> 15;
  return (h >>> 0).toString(36);
};

exports.hash = hash;
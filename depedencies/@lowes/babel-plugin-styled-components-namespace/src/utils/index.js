const VALID_TOP_LEVEL_IMPORT_PATHS = [
  'styled-components',
  'styled-components/no-tags',
  'styled-components/native',
  'styled-components/primitives',
];

function getOption({ opts }, name, defaultValue = true) {
  return opts[name] === undefined || opts[name] === null
    ? defaultValue
    : opts[name];
}

export const useSSR = state => getOption(state, 'ssr', true)

export const useNamespace = state => {
  const namespace = getOption(state, 'namespace', '');
  if (namespace) {
    return `_${namespace}`;
  }
  return 'uuuu';
}

export const isValidTopLevelImport = x =>
  VALID_TOP_LEVEL_IMPORT_PATHS.includes(x)

const localNameCache = {}

export const importLocalName = (name, state, bypassCache = false) => {
  const cacheKey = name + state.file.opts.filename

  if (!bypassCache && cacheKey in localNameCache) {
    return localNameCache[cacheKey]
  }

  let localName = state.styledRequired
    ? name === 'default'
      ? 'styled'
      : name
    : false

  state.file.path.traverse({
    ImportDeclaration: {
      exit(path) {
        const { node } = path
        if (isValidTopLevelImport(node.source.value)) {
          for (const specifier of path.get('specifiers')) {
            if (specifier.isImportDefaultSpecifier()) {
              localName = specifier.node.local.name
            }

            if (
              specifier.isImportSpecifier() &&
              specifier.node.imported.name === name
            ) {
              localName = specifier.node.local.name
            }

            if (specifier.isImportNamespaceSpecifier()) {
              localName = specifier.node.local.name
            }
          }
        }
      },
    },
  })
  localNameCache[cacheKey] = localName
  return localName
};

export const isStyled = t => (tag, state) => {
  if (
    t.isCallExpression(tag) &&
    t.isMemberExpression(tag.callee) &&
    tag.callee.property.name !== 'default' /** ignore default for #93 below */
  ) {
    // styled.something()
    return isStyled(t)(tag.callee.object, state)
  } else {
    return (
      (t.isMemberExpression(tag) &&
        tag.object.name === importLocalName('default', state)) ||
      (t.isCallExpression(tag) &&
        tag.callee.name === importLocalName('default', state)) ||
      (state.styledRequired &&
        t.isMemberExpression(tag) &&
        t.isMemberExpression(tag.object) &&
        tag.object.property.name === 'default' &&
        tag.object.object.name === state.styledRequired) ||
      (state.styledRequired &&
        t.isCallExpression(tag) &&
        t.isMemberExpression(tag.callee) &&
        tag.callee.property.name === 'default' &&
        tag.callee.object.name === state.styledRequired)
    )
  }
};

export const hash = (str) => {
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
}

import path from 'path'
import fs from 'fs'
import { useSSR, useNamespace, isStyled, hash } from '../utils'

const findModuleRoot = filename => {
  if (!filename) {
    return null
  }
  let dir = path.dirname(filename)
  if (fs.existsSync(path.join(dir, 'package.json'))) {
    return dir
  } else if (dir !== filename) {
    return findModuleRoot(dir)
  } else {
    return null
  }
}

const FILE_HASH = 'styled-components-file-hash';
const separatorRegExp = new RegExp(`\\${path.sep}`, 'g');

const getFileHash = state => {
  const { file } = state
  // hash calculation is costly due to fs operations, so we'll cache it per file.
  if (file.get(FILE_HASH)) {
    return file.get(FILE_HASH)
  }
  const filename = file.opts.filename
  // find module root directory
  const moduleRoot = findModuleRoot(filename)
  const filePath =
    moduleRoot &&
    path.relative(moduleRoot, filename).replace(separatorRegExp, '/')
  const moduleName =
    moduleRoot &&
    JSON.parse(fs.readFileSync(path.join(moduleRoot, 'package.json'))).name
  const code = file.code

  const stuffToHash = [moduleName]

  if (filePath) {
    stuffToHash.push(filePath)
  } else {
    stuffToHash.push(code)
  }

  const fileHash = `${hash(stuffToHash.join(''))}${useNamespace(state)}`;
  file.set(FILE_HASH, fileHash)
  return fileHash
}

const getComponentId = state => {
  getFileHash(state);
}

export default t => (path, state) => {
  if (
    path.node.tag
      ? isStyled(t)(path.node.tag, state)
      : /* styled()`` */ (isStyled(t)(path.node.callee, state) &&
        path.node.callee.property &&
        path.node.callee.property.name !== 'withConfig') ||
      // styled(x)({})
      (isStyled(t)(path.node.callee, state) &&
        !t.isMemberExpression(path.node.callee.callee)) ||
      // styled(x).attrs()({})
      (isStyled(t)(path.node.callee, state) &&
        t.isMemberExpression(path.node.callee.callee) &&
        path.node.callee.callee.property &&
        path.node.callee.callee.property.name &&
        path.node.callee.callee.property.name !== 'withConfig')
  ) {
      useSSR(state) && getComponentId(state)
  }
}

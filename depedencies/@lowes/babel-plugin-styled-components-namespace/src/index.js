import namespace from './visitors/namespace';

export default function({ types: t }) {
  return {
    visitor: {
      CallExpression(path, state) {
        namespace(t)(path, state);
      },
      TaggedTemplateExpression(path, state) {
        namespace(t)(path, state);
      }
    }
  }
}

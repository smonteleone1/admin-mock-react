/**
 * Lowe's eslint-config extending from [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base)
 * @module @lowes/eslint-config
 * @namespace
 *
 * @example
 * {
 *  extends: '@lowes'
 * }
 */
module.exports = {
    extends: 'airbnb-base',
    rules: {
        /**
         * @namespace Rules
         * @kind constant
         */

        /**
         * Use soft tabs (space character) set to 4 spaces.
         *
         * @memberof Rules
         * @see {@link https://eslint.org/docs/rules/indent}
         * @see {@link https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb-base/rules/style.js#L122}
         */
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1
            },
            FunctionExpression: {
                parameters: 1,
                body: 1
            },
            CallExpression: {
                arguments: 1
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            // list derived from https://github.com/benjamn/ast-types/blob/HEAD/def/jsx.js
            ignoredNodes: ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
            ignoreComments: false
        }],

        /**
         * Additional trailing comma: Nope.
         *
         * @memberof Rules
         * @see {@link https://eslint.org/docs/rules/comma-dangle}
         */
        'comma-dangle': ['error', 'never']
    }
};

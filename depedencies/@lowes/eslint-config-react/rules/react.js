/**
 * Lowe's eslint-config-react extending from
 * [airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
 * @module @lowes/eslint-config-react
 * @namespace
 *
 * @example
 * {
 *     extends: [
 *         '@lowes/eslint-config-react'
 *     ]
 * }
 */
module.exports = {
    plugins: [
        'react',
        'react-hooks'
    ],

    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    },

    settings: {
        react: {
            pragma: 'React',
            version: '16.8.6'
        }
    },

    rules: {
        /**
         * @namespace BasicRules
         * @kind constant
         */
        'react/jsx-uses-react': ['error'],
        'react/jsx-uses-vars': 'error',

        /**
         * Only include one React component per file.
         *
         * @memberof BasicRules
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md}
         */
        'react/no-multi-comp': [
            'error', {
                ignoreStateless: false
            }
        ],

        /**
         * Always use JSX syntax.
         * (Must be enforced by code review)
         *
         * @name enforce-jsx-syntax
         * @memberof BasicRules
         */

        /**
         * 1. Do not use React classes, only functional components.
         *
         * @memberof BasicRules
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md}
         */
        'react/prefer-es6-class': 'off',
        /**
         * 2. Do not use React classes, only functional components.
         *
         * @memberof BasicRules
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md}
         */
        'react/prefer-stateless-function': [
            'error', {
                ignorePureComponents: false
            }
        ],

        /**
         * 'react/forbid-prod-types' will allow `arrays` and `objects` only if it explicitly noted
         *  what `array` and `object` contains, using `arrayOf`, `objectOf`, or `shape`.
         *
         * @memberof BasicRules
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md}
         */
        'react/forbid-prop-types': [
            'error', {
                forbid: ['any', 'array', 'object'],
                checkContextTypes: true,
                checkChildContextTypes: true
            }
        ],

        /**
         * Do not use mixins.
         * (Must be enforced by code review)
         *
         * @name dont-use-mixins
         * @memberof BasicRules
         */

        /**
         * @namespace Naming
         * @kind constant
         */

        /**
         * Extensions: use `.jsx` extensions for all react components.
         *
         * @memberof Naming
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md}
         */
        'react/jsx-filename-extension': [
            'error', {
                extensions: ['.jsx']
            }
        ],

        /**
         * Filename: Use PascalCase for filenames. eg, `CommerceButton.js`
         * (Must be enforced by code review)
         *
         * @name enforce-jsx-syntax
         * @memberof Naming
         */

        /**
         * Reference Naming: Use PascalCase for React components and camelCase for their instances.
         *
         * @memberof Naming
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md}
         */
        'react/jsx-pascal-case': [
            'error', {
                allowAllCaps: true,
                ignore: []
            }
        ],

        /**
         * Prop Naming: Avoid using DOM component prop names for different purposes.
         * (Must be enforced by code review)
         *
         * @name avoid-using-dom-prop-names
         * @memberof Naming
         */

        /**
         * @namespace Alignment
         * @kind constant
         */

        /**
         * Follow these alignment styles for JSX syntax.
         * Note: Also enforced by Tags -> multiline-properties
         *
         * @memberof Alignment
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md}
         */
        'react/jsx-closing-tag-location': 'error',

        /**
         * @namespace Quotes
         * @kind constant
         */

        /**
         * Always use double quotes (") for JSX attributes, but single quotes (') for all other JS.
         *
         * @memberof Quotes
         * @see {@link https://eslint.org/docs/rules/jsx-quotes}
         */
        'jsx-quotes': [
            'error', 'prefer-double'
        ],

        /**
         * @namespace Spacing
         * @kind constant
         */

        /**
         * 1. Always include a single space in your self-closing tag.
         *
         * @memberof Spacing
         * @see {@link https://eslint.org/docs/rules/no-multi-spaces}
         */
        'no-multi-spaces': 'error',
        /**
         * 2. Always include a single space in your self-closing tag.
         *
         * @memberof Spacing
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md}
         */
        'react/jsx-tag-spacing': [
            'error', {
                closingSlash: 'never',
                beforeSelfClosing: 'always',
                afterOpening: 'never',
                beforeClosing: 'never'
            }
        ],

        /**
         * Pad JSX curly braces with spaces.
         *
         * @memberof Spacing
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md}
         */
        'react/jsx-curly-spacing': [
            'error', {
                when: 'always',
                spacing: {
                    objectLiterals: 'never'
                }
            }
        ],

        /**
         * @namespace Props
         * @kind constant
         */

        /**
         * Always use camelCase for prop names.
         *
         * @memberof Props
         * @see {@link https://eslint.org/docs/2.0.0/rules/camelcase}
         */
        camelcase: [
            'error', {
                properties: 'always'
            }
        ],

        /**
         * Omit the value of the prop when it is explicitly true.
         *
         * @memberof Props
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md}
         */
        'react/jsx-boolean-value': [
            'error', 'never', {
                always: []
            }
        ],

        /**
         * Always include an alt prop on <img> tags. If the image is presentational, alt can be an
         * empty string or the <img> must have role="presentation"
         *
         * @memberof Props
         * @see {@link https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md}
         */
        'jsx-a11y/alt-text': [
            'error', {
                elements: ['img', 'object', 'area', 'input[type="images"]'],
                img: [],
                object: [],
                area: [],
                'input[type="images"]': []
            }
        ],

        /**
         * Avoid using an array index as key prop, prefer a stable ID. We don’t recommend using
         * indexes for keys if the order of items may change.
         *
         * @memberof Props
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md}
         */
        'react/no-array-index-key': 'error',

        /**
         * Always define explicit defaultProps for all non-required-props.
         * (Must be enforced by code review)
         *
         * @name define-explicit-default-props
         * @memberof Props
         */

        /**
         * Intelligently filter out unnecessary props when possible.
         * (Must be enforced by code review)
         *
         * @name Intelligently-filter-props
         * @memberof Props
         */

        /**
         * @namespace Parentheses
         * @kind constant
         */

        /**
         * Wrap JSX tags in parentheses when they span more than one line.
         *
         * @memberof Parentheses
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md}
         */
        'react/jsx-wrap-multilines': [
            'error', {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line'
            }
        ],

        /**
         * @namespace Tags
         * @kind constant
         */

        /**
         * Always self-close tags that have no children.
         *
         * @memberof Tags
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md}
         */
        'react/self-closing-comp': 'error',

        /**
         * If your component has multi-line properties, close its tag on a new line.
         *
         * @memberof Tags
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md}
         */
        'react/jsx-closing-bracket-location': [
            'error', 'line-aligned'
        ],

        /**
         * @namespace Methods
         * @kind constant
         */

        /**
         * Be sure to return a value in your `render` methods.
         *
         * @memberof Methods
         * @see {@link https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md}
         */
        'react/require-render-return': 'error',

        /**
         * @namespace Ordering
         * @kind constant
         */

        /**
         * Ordering for React fuctional component
         *  1. imports
         *  2. state reducer
         *  3. function declaration
         *  4. useState Hooks
         *  5. useReducer Hooks
         *  6. useEffect Hooks
         *  7. render
         *  8. propTypes
         *  9. defaultProps
         * 10. export
         * (Must be enforced by code review)
         *
         * @name ordering-for-component
         * @memberof Ordering
         */


        /**
         * Rules of hooks
         *
         * 1. Checks rules of Hooks
         * 2. Checks effect dependencies
         *
         * @memberof Hooks
         * @see {@link https://reactjs.org/docs/hooks-rules.html}
         */
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'off'
    }
};

## Objects

<dl>
<dt><a href="#@lowes/eslint-react-config">@lowes/eslint-react-config</a> : <code>object</code></dt>
<dd><p>Lowe&#39;s eslint-react-config extending from <a href="https://www.npmjs.com/package/eslint-config-airbnb">airbnb</a></p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#BasicRules">BasicRules</a></dt>
<dd></dd>
<dt><a href="#Naming">Naming</a></dt>
<dd></dd>
<dt><a href="#Alignment">Alignment</a></dt>
<dd></dd>
<dt><a href="#Quotes">Quotes</a></dt>
<dd></dd>
<dt><a href="#Spacing">Spacing</a></dt>
<dd></dd>
<dt><a href="#Props">Props</a></dt>
<dd></dd>
<dt><a href="#Parentheses">Parentheses</a></dt>
<dd></dd>
<dt><a href="#Tags">Tags</a></dt>
<dd></dd>
<dt><a href="#Methods">Methods</a></dt>
<dd></dd>
</dl>

<a name="@lowes/eslint-react-config"></a>

## @lowes/eslint-react-config : <code>object</code>
Lowe's eslint-react-config extending from [airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

**Kind**: global namespace  
**Example**  
```js
{
 extends: '@lowes/eslint-react-config'
}
```
<a name="BasicRules"></a>

## BasicRules
**Kind**: global constant  

* [BasicRules](#BasicRules)
    * [.react/no-multi-comp](#BasicRules.react/no-multi-comp)
    * [.enforce-jsx-syntax](#BasicRules.enforce-jsx-syntax)
    * [.react/prefer-es6-class](#BasicRules.react/prefer-es6-class)
    * [.react/prefer-stateless-function](#BasicRules.react/prefer-stateless-function)
    * [.react/forbid-prop-types](#BasicRules.react/forbid-prop-types)
    * [.dont-use-mixins](#BasicRules.dont-use-mixins)

<a name="BasicRules.react/no-multi-comp"></a>

### BasicRules.react/no-multi-comp
Only include one React component per file.

**Kind**: static property of [<code>BasicRules</code>](#BasicRules)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md)  
<a name="BasicRules.enforce-jsx-syntax"></a>

### BasicRules.enforce-jsx-syntax
Always use JSX syntax.
(Must be enforced by code review)

**Kind**: static property of [<code>BasicRules</code>](#BasicRules)  
<a name="BasicRules.react/prefer-es6-class"></a>

### BasicRules.react/prefer-es6-class
1. Do not use React classes, only functional components.

**Kind**: static property of [<code>BasicRules</code>](#BasicRules)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md)  
<a name="BasicRules.react/prefer-stateless-function"></a>

### BasicRules.react/prefer-stateless-function
2. Do not use React classes, only functional components.

**Kind**: static property of [<code>BasicRules</code>](#BasicRules)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md)  
<a name="BasicRules.react/forbid-prop-types"></a>

### BasicRules.react/forbid-prop-types
'react/forbid-prod-types' will allow `arrays` and `objects` only if it explicitly noted what `array` and `object` contains, using `arrayOf`, `objectOf`, or `shape`.

**Kind**: static property of [<code>BasicRules</code>](#BasicRules)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md)  
<a name="BasicRules.dont-use-mixins"></a>

### BasicRules.dont-use-mixins
Do not use mixins.
(Must be enforced by code review)

**Kind**: static property of [<code>BasicRules</code>](#BasicRules)  
<a name="Naming"></a>

## Naming
**Kind**: global constant  

* [Naming](#Naming)
    * [.react/jsx-filename-extension](#Naming.react/jsx-filename-extension)
    * [.enforce-jsx-syntax](#Naming.enforce-jsx-syntax)
    * [.react/jsx-pascal-case](#Naming.react/jsx-pascal-case)
    * [.avoid-using-dom-prop-names](#Naming.avoid-using-dom-prop-names)

<a name="Naming.react/jsx-filename-extension"></a>

### Naming.react/jsx-filename-extension
Extensions: use `.jsx` extensions for all react components.

**Kind**: static property of [<code>Naming</code>](#Naming)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md)  
<a name="Naming.enforce-jsx-syntax"></a>

### Naming.enforce-jsx-syntax
Filename: Use PascalCase for filenames. eg, `CommerceButton.js`
(Must be enforced by code review)

**Kind**: static property of [<code>Naming</code>](#Naming)  
<a name="Naming.react/jsx-pascal-case"></a>

### Naming.react/jsx-pascal-case
Reference Naming: Use PascalCase for React components and camelCase for their instances.

**Kind**: static property of [<code>Naming</code>](#Naming)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)  
<a name="Naming.avoid-using-dom-prop-names"></a>

### Naming.avoid-using-dom-prop-names
Prop Naming: Avoid using DOM component prop names for different purposes.
(Must be enforced by code review)

**Kind**: static property of [<code>Naming</code>](#Naming)  
<a name="Alignment"></a>

## Alignment
**Kind**: global constant  
<a name="Alignment.react/jsx-closing-tag-location"></a>

### Alignment.react/jsx-closing-tag-location
Follow these alignment styles for JSX syntax.
Note: Also enforced by Tags -> multiline-properties

**Kind**: static property of [<code>Alignment</code>](#Alignment)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-tag-location.md)  
<a name="Quotes"></a>

## Quotes
**Kind**: global constant  
<a name="Quotes.jsx-quotes"></a>

### Quotes.jsx-quotes
Always use double quotes (") for JSX attributes, but single quotes (') for all other JS.

**Kind**: static property of [<code>Quotes</code>](#Quotes)  
**See**: [https://eslint.org/docs/rules/jsx-quotes](https://eslint.org/docs/rules/jsx-quotes)  
<a name="Spacing"></a>

## Spacing
**Kind**: global constant  

* [Spacing](#Spacing)
    * [.no-multi-spaces](#Spacing.no-multi-spaces)
    * [.react/jsx-tag-spacing](#Spacing.react/jsx-tag-spacing)
    * [.react/jsx-curly-spacing](#Spacing.react/jsx-curly-spacing)

<a name="Spacing.no-multi-spaces"></a>

### Spacing.no-multi-spaces
1. Always include a single space in your self-closing tag.

**Kind**: static property of [<code>Spacing</code>](#Spacing)  
**See**: [https://eslint.org/docs/rules/no-multi-spaces](https://eslint.org/docs/rules/no-multi-spaces)  
<a name="Spacing.react/jsx-tag-spacing"></a>

### Spacing.react/jsx-tag-spacing
2. Always include a single space in your self-closing tag.

**Kind**: static property of [<code>Spacing</code>](#Spacing)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-tag-spacing.md)  
<a name="Spacing.react/jsx-curly-spacing"></a>

### Spacing.react/jsx-curly-spacing
Pad JSX curly braces with spaces.

**Kind**: static property of [<code>Spacing</code>](#Spacing)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md)  
<a name="Props"></a>

## Props
**Kind**: global constant  

* [Props](#Props)
    * [.camelcase](#Props.camelcase)
    * [.react/jsx-boolean-value](#Props.react/jsx-boolean-value)
    * [.jsx-a11y/alt-text](#Props.jsx-a11y/alt-text)
    * [.react/no-array-index-key](#Props.react/no-array-index-key)
    * [.define-explicit-default-props](#Props.define-explicit-default-props)
    * [.Intelligently-filter-props](#Props.Intelligently-filter-props)

<a name="Props.camelcase"></a>

### Props.camelcase
Always use camelCase for prop names.

**Kind**: static property of [<code>Props</code>](#Props)  
**See**: [https://eslint.org/docs/2.0.0/rules/camelcase](https://eslint.org/docs/2.0.0/rules/camelcase)  
<a name="Props.react/jsx-boolean-value"></a>

### Props.react/jsx-boolean-value
Omit the value of the prop when it is explicitly true.

**Kind**: static property of [<code>Props</code>](#Props)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md)  
<a name="Props.jsx-a11y/alt-text"></a>

### Props.jsx-a11y/alt-text
Always include an alt prop on <img> tags. If the image is presentational, alt can be an empty string or the <img> must have role="presentation"

**Kind**: static property of [<code>Props</code>](#Props)  
**See**: [https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md)  
<a name="Props.react/no-array-index-key"></a>

### Props.react/no-array-index-key
Avoid using an array index as key prop, prefer a stable ID. We don’t recommend using indexes for keys if the order of items may change.

**Kind**: static property of [<code>Props</code>](#Props)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md)  
<a name="Props.define-explicit-default-props"></a>

### Props.define-explicit-default-props
Always define explicit defaultProps for all non-required-props.
(Must be enforced by code review)

**Kind**: static property of [<code>Props</code>](#Props)  
<a name="Props.Intelligently-filter-props"></a>

### Props.Intelligently-filter-props
Intelligently filter out unnecessary props when possible.
(Must be enforced by code review)

**Kind**: static property of [<code>Props</code>](#Props)  
<a name="Parentheses"></a>

## Parentheses
**Kind**: global constant  
<a name="Parentheses.react/jsx-wrap-multilines"></a>

### Parentheses.react/jsx-wrap-multilines
Wrap JSX tags in parentheses when they span more than one line.

**Kind**: static property of [<code>Parentheses</code>](#Parentheses)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md)  
<a name="Tags"></a>

## Tags
**Kind**: global constant  

* [Tags](#Tags)
    * [.react/self-closing-comp](#Tags.react/self-closing-comp)
    * [.react/jsx-closing-bracket-location](#Tags.react/jsx-closing-bracket-location)

<a name="Tags.react/self-closing-comp"></a>

### Tags.react/self-closing-comp
Always self-close tags that have no children.

**Kind**: static property of [<code>Tags</code>](#Tags)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md)  
<a name="Tags.react/jsx-closing-bracket-location"></a>

### Tags.react/jsx-closing-bracket-location
If your component has multi-line properties, close its tag on a new line.

**Kind**: static property of [<code>Tags</code>](#Tags)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md)  
<a name="Methods"></a>

## Methods
**Kind**: global constant  
<a name="Methods.react/require-render-return"></a>

### Methods.react/require-render-return
Be sure to return a value in your `render` methods.

**Kind**: static property of [<code>Methods</code>](#Methods)  
**See**: [https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md)  

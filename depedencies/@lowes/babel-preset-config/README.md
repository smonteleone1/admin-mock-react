## babel-preset-config

[![Build Status](http://vmlnxjenkinsmaster01.lowes.com/buildStatus/icon?job=Framework/babel-preset-config/master)](http://vmlnxjenkinsmaster01.lowes.com/job/Framework/job/babel-preset-config/job/master/)

[![Quality Gate Status](http://lxappsonrqas001.lowes.com:9000/api/project_badges/measure?project=d-frw%2Fbabel-preset-config&metric=alert_status)](http://lxappsonrqas001.lowes.com:9000/dashboard?id=d-frw/babel-preset-config)

Babel-presets configuration for Lowe's.

## Usage

```bash
# Confirm you installed the requirements or add them to your install
npm install --save-dev @lowes/babel-preset-config
```
or 

```bash
yarn add @lowes/babel-preset-config -D
```
Then create a file named .babelrc.js with following contents in the root folder of your project:

```js
module.exports = {
  presets: [
      ['@lowes/config', {
          target: 'node',
          modules: 'auto'
      }]
  ],
  ignore: ['node_modules', 'build']
};
```

See [API.md](API.md) for more details.

## Examples

### node modules
```js
module.exports = {
  presets: [
      ['@lowes/config', { target: 'node', modules: 'auto' }]
  ],
  ignore: ['node_modules', 'build']
};
```

### browser assets processed by babel
```js
module.exports = {
  presets: [
      ['@lowes/config', { target: 'browser', modules: 'auto' }]
  ],
  ignore: ['node_modules', 'build']
};
```

### browser assets processed by webpack
```js
module.exports = {
  presets: [
      ['@lowes/config', { target: 'browser', modules: 'false' }]
  ],
  ignore: ['node_modules', 'build']
};
```

### Typescript support
```js
module.exports = {
  presets: [
      ['@lowes/config', { isTypescriptEnabled: true }]
  ],
  ignore: ['node_modules', 'build']
};
```

### Configure *'preset-env'* to polyfill using ***core-js***
```js
module.exports = {
  presets: [
      ['@lowes/config', { presetEnvUseBuiltIns: 'usage', presetEnvCoreJs: { version: 3, proposals: true}}]
  ],
  ignore: ['node_modules', 'build']
};
```

### Configure *'plugin-transform-runtime'* to polyfill using ***core-js-pure***
```js
module.exports = {
  presets: [
      ['@lowes/config', { runtimeCorejs: 3, runtimeVersion: '^7.6.9' }]
  ],
  ignore: ['node_modules', 'build']
};
```

### ***core-js*** vs ***core-js-pure*** 
- *core-js* provides global polyfill which overwrites/adds native implementaion whereas *core-js-pure* provides alias polyfills without polluting the global namespace.
- If you are building an application where you have full controll, if you could opt for ***core-js*** and you are authoring a library for others to use, you might be better of with ***core-js-pure***
- https://github.com/babel/babel/issues/9853#issuecomment-619587386 this comment in babel repo will give you a better picture._

- With *core-js*

  IN
    ```js
    var a = new Promise();
    var b = new Map();
    ```

  OUT
  ```js
  import "core-js/modules/es.promise";
  import "core-js/modules/es.map";

  var a = new Promise();
  var b = new Map();
  ```


- With *core-js-pure*

  IN
  ```js
  var a = new Promise();
  var b = new Map();
  ```

  OUT
  ```js
  import _Promise from "@babel/runtime-corejs3/core-js-stable/promise";
  import _Map from "@babel/runtime-corejs3/core-js-stable/map";

  var a = new _Promise();
  var b = new _Map();
  ```
- code ref: https://babeljs.io/docs/en/babel-plugin-transform-runtime#core-js-aliasing
- One caveat with *'plugin-transform-runtime'* is that if you are using dynamic imports in your source and webpack for bundling, which transforms dynamic imports to Promise based implementation so the ordering of transformation and polyfilling has to be aligned. In other sense if *'plugin-transform-runtime'* runs first it won't find the Promise instance in your source in turn not including polyfill for Promise.

### Wh
## Maintainers
- [Frameworks Team](mailto:DL-DIST-DIGITAL-FRAMEWORKSl@lowes.com)

## Contribution

This project follows the [innersource contribution model](https://tools.lowes.com/confluence/display/AR/Inner+source+contribution).

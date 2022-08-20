# helix-webpack

[![Build Status](http://vmlnxjenkinsmaster01.lowes.com/buildStatus/icon?job=Framework/helix-webpack/master)](http://vmlnxjenkinsmaster01.lowes.com/job/Framework/job/helix-webpack/job/master/)


## Usage

```bash
npm install --save-prod @lowes/helix-webpack
```

## How to run
we can run this module in 2 ways.

#### option 1: 
If you don't customize this, then update your package json script
```js
 "scripts": {
  "start": "node ./node_modules/@lowes/helix-webpack/lib/devServer"
 }
```
#### option 2:

If you customize this, then update it as per your own dev-server or prod-server builder path.

### How to Customize

 - create a config folder inside root.
 - create a webpack.config.js file inside config folder
 - Add webpack configuration as below.
```js

const path = require('path');
const merge = require('webpack-merge');
const { client, server } = require('@lowes/helix-webpack');

const ROOT_DIR = path.resolve(__dirname, '..');
const resolvePath = (...args) => path.resolve(ROOT_DIR, ...args);

const commonConfig = {
  module: {
    rules: [
      {
        test: /\.(css|less|styl|scss|sass|sss)$/,
        use: [
          {
            loader: 'sass-loader',
          },
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                resolvePath(process.cwd(), 'node_modules/@lowes/r-components/src/styles/*.scss'),          
                resolvePath(process.cwd(), './src/components/**/*.scss')]
            }
          }
        ],
      },
    ]
  },
};
const customizeServerConfig = {
  name: 'server',
  entry: {
    server: ['@babel/polyfill', path.resolve(process.cwd(), './config/server')],
  },
};

const customizeServer = merge.strategy({
  entry: 'replace'
}
)(server, commonConfig, customizeServerConfig);

const customizeClient = merge.strategy({
  entry: 'replace'
})(client, commonConfig, {});

module.exports = [customizeClient, customizeServer];
```

## Maintainers
- [Framework Developers](mailto:DL-DIST-DIGITAL-FRAMEWORKS@lowes.com)

## Contribution

This project follows the [innersource contribution model](https://tools.lowes.com/confluence/display/AR/Inner+source+contribution).

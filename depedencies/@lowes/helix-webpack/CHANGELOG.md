# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [0.8.2] - April. 30, 2020
- Move babel-preset-config to peer dependency.

## [0.8.1] - Feb. 27, 2020
- Yarn update
- Babel preset config modules change from 'false' ==> false
- Updated package dependencies.

## [0.8.0] - Feb. 27, 2020
- feature to bundle out helix-config.js which will be used by helix core module
- updated package dependencies.

## [0.7.1] - Jan. 20, 2020
- Updated dependencies. 

## [0.7.0] - Jan. 13, 2020
- Added Typescript compilation support,
- Updated dependencies. 

## [0.6.1] - Jul. 28, 2019
- Fixed CDN issue.

## [0.6.1] - Jul. 10, 2019
- Added CDN code in asset manifest.

## [0.6.1] - Jun. 24, 2019
- @lowes specific module bundle outside vendor.chunk file.

## [0.6.0] - Jun. 7, 2019
- __SERVER__ create as a global constant.

## [0.5.0] - May. 15, 2019
- Static file copy from client public folder to build folder.

## [0.4.2] - May. 3, 2019
- Fix NODE_ENV issue, global node_ENV set remove from client and server bundler file.
- added cacheIdentifier for babel-loader.

## [0.4.1] - Apr. 30, 2019
- Exclude html file from file-loader.

## [0.4.0] - Apr. 8, 2019
- Drop parital HMR support resulting in 404 until complete solution implimented.
- Update dependencies and re-categorize a few to devDependencies to reduce package size.
- Allow `analyze` to be ran for production builds.

## [0.3.1] - Apr. 3, 2019
- Adjust sourcemapping differently for server and client

## [0.3.0] - March. 29, 2019
- Use the latest `@lowes/babel-preset-config`

## [0.2.0] - March. 22, 2019
- Refactor client and server configuration.
- create an example module.
- Create client and server bundler.

## [0.1.0] - March. 5, 2019
- Project generated

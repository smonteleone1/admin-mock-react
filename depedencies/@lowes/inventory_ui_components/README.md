<p align="center">

  <h3 align="center">Lowe's MFEs</h3>

  <p align="center">
    A starting point for MFEs at Lowe's.
    <p align="center">
      <img alt="made with ♥" src="https://forthebadge.com/images/badges/built-with-love.svg"
    </p>
    <br />
    <a href="#"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="#">Code Playground</a>
    ·
    <a href="#">Report Bug</a>
  </p>
</p>

## About The Project

By relying on Storybook to contain the separation of Node and Module Federation workspaces, we are able to remove duplicitive efforts of implementing new developer work in progress as well as lowering the amount of exponentially increasing complexity as the Tracked Component matures.

### Built With

- 🧬 [Module Federation](https://github.com/module-federation) - Webpack 5 plugin that allows multiple seperate builds to form a single application and much more
- 💙 [TypeScript](https://www.typescriptlang.org/docs/) - Typed javascript

### Prerequisites

_Can be installed in Lowe's Self Service_

- [Node](<[Node.js](https://nodejs.org/en/)>)
- [Yarn](https://yarnpkg.com/)

## Getting Started
```jsx
yarn setup
```

- Installs Dependencies
- Runs **storybook:coverage** to enable 'Tests' Storybook Addon

```jsx
yarn storybook
```

- Generate Module Federation Webpack build in watch mode, which generates new build on detected code change and will force refresh of dev server / storybook
- Serves federated modules from http://localhost:3010/remoteEntry.js
- Serves Storybook to http://localhost:3000

## ❓ FAQ

### **How do I view Node and Module Federation as separate workspaces?**

Storybook will let you 'Open Canvas In New Tab' for any story that you are viewing. Simply navigate to the Node or Federated story of the Tracked Component you are working on and look in the top right for the appropriate button in the top right.

### **How do I use the DynamicRemoteContainer component?**

**This component takes 4 props:**

1. **remoteEntry.js URL**

    By default and for local dev work only, this is set to ***http://localhost:3010/remoteEntry.js.** However*, once your Tracked Component is published, we will replace this [localhost](http://localhost) url with an akamai cdn url

2. **Scope**

    You can find this in **webpack.config.modfed.js** in the root directory under the ModuleFederationPlugin's **'name'**

3. **Module**

    You can find this in **webpack.config.modfed.js** in the root directory under the ModuleFederationPlugin's **'exposes'** object, which you will need to refer to the route/key you have assigned to the module/component file path that you are exposing. 

4. **CompProps** *(optional)*

    an object containing the props you wish to pass down to the federated module you are aiming to pull into your project

**Example:**

```jsx
<DynamicRemoteContainer
  url='http://localhost:3010/remoteEntry.js'
  scope='ExampleTrackedComponent'
  module='./Workspace'
  compProps={{ text: 'Text from Federated args' }}
/>
```
## Usage

Modify ./src/workspace.tsx with react code and update workspace.stories.tsx accordingly

### Generate Component with Example Template

```
yarn generate:comp <component name>

or

node scripts/generateComponent.js --name <component name>
```

### Distribute to CDN

must have modfed server running

```
npm run publish
```

> Webpack will package code as module federation in scripts/webpack/dist folder

> code will post to modfed server by version

> modules ready to be consumed by mod federation

### Distribution to NPM

#### For Local npm registry publishing, we'll make use of <a href="https://verdaccio.org/en">Verdaccio</a>.

1. Add Verdaccio globally

```
yarn global add verdaccio
```

or

```
npm install -g verdaccio
```

2. Next start Verdaccio server (Create a account if shows up)

```
verdaccio
```

3. Next login to Verdaccio registry

```
npm login --registry http://localhost:4873
```

4. Open an another Terminal and publish the package using

```
RELEASE_TYPE=patch yarn publish:local
```

or

```
RELEASE_TYPE=patch npm run publish:local
```

5. Add the published package in another repository or project using

```
yarn add @lowesmfe/select_application-shell --registry http://localhost:4873
```

or

```
npm install @lowesmfe/select_application-shell --registry http://localhost:4873
```

#### For publishing package in Jenkins

For Publishing in Jenkins, need to set few environment variables like

- CI to true, which enables to publish to NPM registry
- PUSH_VERSION to true, which will allow to commit the version updated in the package.json
- RELEASE_TYPE can have <b>alpha, beta, next, patch, major, minor</b>

```
CI=true PUSH_VERSION=true RELEASE_TYPE=alpha yarn publish:npm
```

or

```
CI=true PUSH_VERSION=true RELEASE_TYPE=major yarn publish:npm
```

or

```
CI=true yarn release:stable
```

## Server Side Inclusion into Helix or Another MFE

```bash
npm install --save tracked_component_name_here

```

## Client Side Inclusion

> TO DO

## Usage

```jsx
import React from 'react';
import styles from './styles.css';
import Button from '@backyard/react/Button';

export const ExampleComponent = ({ text }) => {
  return (
    <div className={styles.test}>
      {text}
      <br />
      <Button>Here is a backyard button!</Button>
    </div>
  );
};
```

_For more examples, refer to the [Documentation](#)_

## Contributing

1. Clone project
2. Create Feature Branch (`git checkout -b DCE-<JiraTicket#>-newfeature`)
3. Pass All Test Suites (`yarn test`)
4. Commit Changes (`git push origin DCE-<JiraTicket#>-newfeature`)
5. Open Pull Request

## Acknowledgements

---

_Include any notable contributions that we should credit here_

Lowe's internal use only

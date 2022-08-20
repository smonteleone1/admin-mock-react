
type options = {
    target?: string;
    modules?: "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false;
    isTypescriptEnabled?: boolean,
    isDefinePluginEnabled?: boolean,
    runtimeCorejs?: number | string,
    runtimeVersion?: string,
    isStyledComponentPluginEnabled?: boolean,
    presetEnvUseBuiltIns?: "usage" | "entry",
    presetEnvCoreJs?: number | object // 2, 3 or { version: 2 | 3, proposals: boolean },
    namespace?: string
}

interface ApiOptions {
    api: any;
    opts: options
}

function addPresets(apiOptions: ApiOptions, presets: Array<any>) {
    /*
    * “@babel/preset-env”
    * It is a smart preset that allows you to use the latest JavaScript without needing
    * to micromanage which syntax transforms (and optionally, browser polyfills) are
    * needed by your target environment(s).
    * This both makes your life easier and JavaScript bundles smaller!
    */
    const presetEnvConfig = {
        // In the test environment `modules` is often needed to be set to true,
        // babel figures that out by itself using the `'auto'` option
        // In production/development this option is set to `false` so that webpack
        // can handle import/export with tree-shaking
        targets: {},
        modules: apiOptions.opts.modules,
        exclude: ['transform-typeof-symbol'],
        // configure @babel/preset-env to handle polyfill 
        // https://babeljs.io/docs/en/babel-preset-env#usebuiltins
        // useBuiltIns: { "usage" | "entry" }, defaults to false internally.
        ...apiOptions.opts.presetEnvUseBuiltIns && { useBuiltIns: apiOptions.opts.presetEnvUseBuiltIns },
        // corejs: 2 | 3 | { version: 2 | 3, proposals: boolean }, defaults to 2 internally
        ...apiOptions.opts.presetEnvCoreJs && { corejs: apiOptions.opts.presetEnvCoreJs }
    };
    if (apiOptions.opts.target === 'node') {
        presetEnvConfig.targets = {
            // Targets the current process' version of Node. This requires apps be
            // built and deployed on the same version of Node.
            node: 'current'
        };
    } else if (apiOptions.opts.target === 'browser') {
        presetEnvConfig.targets = {
            browsers: require('@lowes/browserslist-config-lowes')
        };
    }
    presets.push([
        require('@babel/preset-env').default,
        presetEnvConfig
    ]);

    // Add React Support
    presets.push([
        require('@babel/preset-react').default,
        {
            // This adds @babel/plugin-transform-react-jsx-source and
            // @babel/plugin-transform-react-jsx-self automatically in development
            // Adds component stack to warning messages
            development: apiOptions.api.env(['development', 'test'])
        }
    ]);

    // Add Typescript support
    if (apiOptions.opts.isTypescriptEnabled) { presets.push([require('@babel/preset-typescript').default]); }
}

function addPlugins(apiOptions: ApiOptions, plugins: Array<any>) {
    // Allows you to build simple compile-time libraries
    // https://github.com/kentcdodds/babel-plugin-macros
    plugins.push(require('babel-plugin-macros'));
    // Necessary to include because in practice some other transforms
    // (such as object-rest-spread) don't work without it: https://github.com/babel/babel/issues/7215
    plugins.push(require('@babel/plugin-transform-destructuring').default);
    // Removes numeric separators from Dec, Bin, Hex and Oct literals. Makes literals readable
    // https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-numeric-separator
    plugins.push(require('@babel/plugin-proposal-numeric-separator').default);

    // The following two plugins use Object.assign directly, instead of Babel's
    // extends helper. Note that this assumes `Object.assign` is available.
    // { ...todo, completed: true }
    plugins.push([
        require('@babel/plugin-proposal-object-rest-spread').default,
        {
            useBuiltIns: true
        }
    ]);

    // Polyfills the runtime needed for async/await, generators
    // https://babeljs.io/docs/en/babel-plugin-transform-runtime
    plugins.push([
        require('@babel/plugin-transform-runtime').default,
        {
            corejs: apiOptions.opts.runtimeCorejs || false,
            helpers: false,
            regenerator: true,
            // https://babeljs.io/docs/en/babel-plugin-transform-runtime#useesmodules
            // We should turn this on once the lowest version of Node LTS
            // supports ES Modules.
            useESModules: true,
            // There is no explicit default value for `version`
            // By default plugin-transform-runtime assumes that @babel/runtime@7.0.0 is installed
            // https://babeljs.io/docs/en/babel-plugin-transform-runtime#version
            ...apiOptions.opts.runtimeVersion && { version: apiOptions.opts.runtimeVersion }
        }
    ]);

    // Adds syntax support for import()
    plugins.push(require('@babel/plugin-syntax-dynamic-import').default);

    plugins.push(require('@babel/plugin-transform-react-display-name').default);

    // This plugin can speed up reconciliation and reduce garbage collection pressure by
    // hoisting React elements to the highest possible scope, preventing multiple
    // unnecessary reinstantiations.
    plugins.push(require('@babel/plugin-transform-react-constant-elements').default);

    plugins.push(require('@babel/plugin-syntax-import-meta').default);

    if (apiOptions.api.env('production')) {
        plugins.push([
            // Remove PropTypes from production build
            require('babel-plugin-transform-react-remove-prop-types').default,
            {
                removeImport: true
            }
        ]);
    }

    // Plugin to support typescript decorators and transform typescript class properties
    if (apiOptions.opts.isTypescriptEnabled) {
        plugins.push([
            require('@babel/plugin-proposal-decorators').default, {
                legacy: true
            }]
        );
    }

    // Plugin to transform the class properties.
    plugins.push([
        require('@babel/plugin-proposal-class-properties').default
    ]);

    // Compile time code replacement for babel
    if (apiOptions.opts.isDefinePluginEnabled) {
        plugins.push([
            require.resolve('babel-plugin-transform-define'),
            {
                'typeof window': apiOptions.opts.target === 'node' ? 'undefined' : 'object'
            }
        ]);
    }

    // Plugin to enable minification and dead code eliminiation in styled-components
    // Also helps debugging in development mode by adding display classes 
    // https://github.com/styled-components/babel-plugin-styled-components
    if (apiOptions.opts.namespace) {
        plugins.push([
            require('@lowes/babel-plugin-styled-components-namespace'),
            {"namespace": apiOptions.opts.namespace}
        ]);
    }
    if (apiOptions.opts.isStyledComponentPluginEnabled) {
        plugins.push([
            require('babel-plugin-styled-components'),
            {
                pure: true,
                minify: true,
                displayName: apiOptions.api.env('production') ? false : true
            }
        ]);
    }
}

const defaults: options = {
    modules: 'auto',
    target: 'node',
    namespace: ''
};

/**
 * Babel Preset for Lowes
 * @module @lowes/babel-preset-config
 * @param {Object} api [Babel's configuration API](https://babeljs.io/docs/en/config-files#config-function-api)
 * @param {Object} [opts] Lowe's configuration options
 * @param {String} [opts.target=node] Target runtime for the Babel output.
 *     Only accepts `node` and `browser`.
 * @param {String} [opts.modules=false] [Preset-env `modules`](https://babeljs.io/docs/en/babel-preset-env) value.
 *     Only accepts `true`, `false` and `'auto'`.
 * @example
 * // .babelrc
 * {
 *      "presets": [
 *          ["@lowes/config", { "target": "node", "modules": "auto" }]
 *      ],
 *      "ignore": ["node_modules", "dist"]
 * }
 */
function babelPresetConfig(api: any, opts: options = defaults) {
    const presets: Array<any> = [];
    addPresets({ api, opts }, presets);

    const plugins: Array<any> = [];
    addPlugins({ api, opts }, plugins);

    return {
        presets,
        plugins
    };
};
export default babelPresetConfig;


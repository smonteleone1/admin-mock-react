"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof3 = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyRenderer = exports.defaultRenderer = exports.defaultColumn = exports.actions = void 0;
exports.ensurePluginOrder = ensurePluginOrder;
exports.flexRender = flexRender;
exports.functionalUpdate = functionalUpdate;
exports.makePropGetter = exports.loopHooks = void 0;
exports.makeRenderer = makeRenderer;
exports.safeUseLayoutEffect = exports.reduceHooks = void 0;
exports.useAsyncDebounce = useAsyncDebounce;
exports.useGetLatest = useGetLatest;
exports.useMountedLayoutEffect = useMountedLayoutEffect;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _excluded = ["style", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var renderErr = 'Renderer Error ☝️';
var actions = {
  init: 'init'
};
exports.actions = actions;

var defaultRenderer = function defaultRenderer(_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value;
  return value;
};

exports.defaultRenderer = defaultRenderer;

var emptyRenderer = function emptyRenderer() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, "\xA0");
};

exports.emptyRenderer = emptyRenderer;
var defaultColumn = {
  Cell: defaultRenderer,
  width: 150,
  minWidth: 0,
  maxWidth: Number.MAX_SAFE_INTEGER
};
exports.defaultColumn = defaultColumn;

function mergeProps() {
  for (var _len = arguments.length, propList = new Array(_len), _key = 0; _key < _len; _key++) {
    propList[_key] = arguments[_key];
  }

  return propList.reduce(function (props, next) {
    var style = next.style,
        className = next.className,
        rest = (0, _objectWithoutProperties2["default"])(next, _excluded);
    props = (0, _extends2["default"])({}, props, rest);

    if (style) {
      props.style = props.style ? (0, _extends2["default"])({}, props.style || {}, style || {}) : style;
    }

    if (className) {
      props.className = props.className ? props.className + ' ' + className : className;
    }

    if (props.className === '') {
      delete props.className;
    }

    return props;
  }, {});
}

function handlePropGetter(prevProps, userProps, meta) {
  // Handle a lambda, pass it the previous props
  if (typeof userProps === 'function') {
    return handlePropGetter({}, userProps(prevProps, meta));
  } // Handle an array, merge each item as separate props


  if (Array.isArray(userProps)) {
    return mergeProps.apply(void 0, [prevProps].concat((0, _toConsumableArray2["default"])(userProps)));
  } // Handle an object by default, merge the two objects


  return mergeProps(prevProps, userProps);
}

var makePropGetter = function makePropGetter(hooks) {
  var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function () {
    var userProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return [].concat((0, _toConsumableArray2["default"])(hooks), [userProps]).reduce(function (prev, next) {
      return handlePropGetter(prev, next, (0, _extends2["default"])({}, meta, {
        userProps: userProps
      }));
    }, {});
  };
};

exports.makePropGetter = makePropGetter;

var reduceHooks = function reduceHooks(hooks, initial) {
  var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var allowUndefined = arguments.length > 3 ? arguments[3] : undefined;
  return hooks.reduce(function (prev, next) {
    var nextValue = next(prev, meta);

    if (process.env.NODE_ENV !== 'production') {
      if (!allowUndefined && typeof nextValue === 'undefined') {
        console.info(next);
        throw new Error('React Table: A reducer hook ☝️ just returned undefined! This is not allowed.');
      }
    }

    return nextValue;
  }, initial);
};

exports.reduceHooks = reduceHooks;

var loopHooks = function loopHooks(hooks, context) {
  var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return hooks.forEach(function (hook) {
    var nextValue = hook(context, meta);

    if (process.env.NODE_ENV !== 'production') {
      if (typeof nextValue !== 'undefined') {
        console.info(hook, nextValue);
        throw new Error('React Table: A loop-type hook ☝️ just returned a value! This is not allowed.');
      }
    }
  });
};

exports.loopHooks = loopHooks;

function ensurePluginOrder(plugins, befores, pluginName, afters) {
  if (process.env.NODE_ENV !== 'production' && afters) {
    throw new Error("Defining plugins in the \"after\" section of ensurePluginOrder is no longer supported (see plugin ".concat(pluginName, ")"));
  }

  var pluginIndex = plugins.findIndex(function (plugin) {
    return plugin.pluginName === pluginName;
  });

  if (pluginIndex === -1) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error("The plugin \"".concat(pluginName, "\" was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  ").concat(pluginName, ".pluginName = '").concat(pluginName, "'\n"));
    }
  }

  befores.forEach(function (before) {
    var beforeIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === before;
    });

    if (beforeIndex > -1 && beforeIndex > pluginIndex) {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error("React Table: The ".concat(pluginName, " plugin hook must be placed after the ").concat(before, " plugin hook!"));
      }
    }
  });
}

function functionalUpdate(updater, old) {
  return typeof updater === 'function' ? updater(old) : updater;
}

function useGetLatest(obj) {
  var ref = React.useRef();
  ref.current = obj;
  return React.useCallback(function () {
    return ref.current;
  }, []);
} // SSR has issues with useLayoutEffect still, so use useEffect during SSR


var safeUseLayoutEffect = typeof document !== 'undefined' && typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
exports.safeUseLayoutEffect = safeUseLayoutEffect;

function useMountedLayoutEffect(fn, deps) {
  var mountedRef = React.useRef(false);
  safeUseLayoutEffect(function () {
    if (mountedRef.current) {
      fn();
    }

    mountedRef.current = true; // eslint-disable-next-line
  }, deps);
}

function useAsyncDebounce(defaultFn) {
  var defaultWait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var debounceRef = React.useRef({});
  var getDefaultFn = useGetLatest(defaultFn);
  var getDefaultWait = useGetLatest(defaultWait);
  return React.useCallback( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var _len2,
        args,
        _key2,
        _args2 = arguments;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            for (_len2 = _args2.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = _args2[_key2];
            }

            if (!debounceRef.current.promise) {
              debounceRef.current.promise = new Promise(function (resolve, reject) {
                debounceRef.current.resolve = resolve;
                debounceRef.current.reject = reject;
              });
            }

            if (debounceRef.current.timeout) {
              clearTimeout(debounceRef.current.timeout);
            }

            debounceRef.current.timeout = setTimeout( /*#__PURE__*/(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      delete debounceRef.current.timeout;
                      _context.prev = 1;
                      _context.t0 = debounceRef.current;
                      _context.next = 5;
                      return getDefaultFn().apply(void 0, args);

                    case 5:
                      _context.t1 = _context.sent;

                      _context.t0.resolve.call(_context.t0, _context.t1);

                      _context.next = 12;
                      break;

                    case 9:
                      _context.prev = 9;
                      _context.t2 = _context["catch"](1);
                      debounceRef.current.reject(_context.t2);

                    case 12:
                      _context.prev = 12;
                      delete debounceRef.current.promise;
                      return _context.finish(12);

                    case 15:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[1, 9, 12, 15]]);
            })), getDefaultWait());
            return _context2.abrupt("return", debounceRef.current.promise);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  })), [getDefaultFn, getDefaultWait]);
}

function makeRenderer(instance, column) {
  var meta = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return function (type) {
    var userProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var Comp = typeof type === 'string' ? column[type] : type;

    if (typeof Comp === 'undefined') {
      console.info(column);
      throw new Error(renderErr);
    }

    return flexRender(Comp, (0, _extends2["default"])({}, instance, {
      column: column
    }, meta, userProps));
  };
}

function flexRender(Comp, props) {
  return isReactComponent(Comp) ? /*#__PURE__*/React.createElement(Comp, props) : Comp;
}

function isReactComponent(component) {
  return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
}

function isClassComponent(component) {
  return typeof component === 'function' && function () {
    var proto = Object.getPrototypeOf(component);
    return proto.prototype && proto.prototype.isReactComponent;
  }();
}

function isExoticComponent(component) {
  return (0, _typeof2["default"])(component) === 'object' && (0, _typeof2["default"])(component.$$typeof) === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
}
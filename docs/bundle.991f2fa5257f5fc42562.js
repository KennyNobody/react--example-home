(self["webpackChunkreact_home"] = self["webpackChunkreact_home"] || []).push([["vendors-node_modules_strapi_blocks-react-renderer_dist_index_mjs-node_modules_react-share_dis-462d14"],{

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "./node_modules/debug/src/debug.js":
/*!*****************************************!*\
  !*** ./node_modules/debug/src/debug.js ***!
  \*****************************************/
/***/ ((module, exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "./node_modules/jsonp/index.js":
/*!*************************************!*\
  !*** ./node_modules/jsonp/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Module dependencies
 */

var debug = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js")('jsonp');

/**
 * Module exports.
 */

module.exports = jsonp;

/**
 * Callback index.
 */

var count = 0;

/**
 * Noop function.
 */

function noop(){}

/**
 * JSONP handler
 *
 * Options:
 *  - param {String} qs parameter (`callback`)
 *  - prefix {String} qs parameter (`__jp`)
 *  - name {String} qs parameter (`prefix` + incr)
 *  - timeout {Number} how long after a timeout error is emitted (`60000`)
 *
 * @param {String} url
 * @param {Object|Function} optional options / callback
 * @param {Function} optional callback
 */

function jsonp(url, opts, fn){
  if ('function' == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts) opts = {};

  var prefix = opts.prefix || '__jp';

  // use the callback name that was passed if one was provided.
  // otherwise generate a unique name by incrementing our counter.
  var id = opts.name || (prefix + (count++));

  var param = opts.param || 'callback';
  var timeout = null != opts.timeout ? opts.timeout : 60000;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName('script')[0] || document.head;
  var script;
  var timer;


  if (timeout) {
    timer = setTimeout(function(){
      cleanup();
      if (fn) fn(new Error('Timeout'));
    }, timeout);
  }

  function cleanup(){
    if (script.parentNode) script.parentNode.removeChild(script);
    window[id] = noop;
    if (timer) clearTimeout(timer);
  }

  function cancel(){
    if (window[id]) {
      cleanup();
    }
  }

  window[id] = function(data){
    debug('jsonp got', data);
    cleanup();
    if (fn) fn(null, data);
  };

  // add qs component
  url += (~url.indexOf('?') ? '&' : '?') + param + '=' + enc(id);
  url = url.replace('?&', '?');

  debug('jsonp req "%s"', url);

  // create script
  script = document.createElement('script');
  script.src = url;
  target.parentNode.insertBefore(script, target);

  return cancel;
}


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/@strapi/blocks-react-renderer/dist/Block.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@strapi/blocks-react-renderer/dist/Block.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Block: () => (/* binding */ Block)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _BlocksRenderer_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlocksRenderer.mjs */ "./node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer.mjs");
/* harmony import */ var _Text_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text.mjs */ "./node_modules/@strapi/blocks-react-renderer/dist/Text.mjs");




const voidTypes = ["image"];
const augmentProps = (content) => {
  const { children: childrenNodes, type, ...props } = content;
  if (type === "code") {
    const getPlainText = (children) => {
      return children.reduce((currentPlainText, node) => {
        if (node.type === "text") {
          return currentPlainText.concat(node.text);
        }
        if (node.type === "link") {
          return currentPlainText.concat(getPlainText(node.children));
        }
        return currentPlainText;
      }, "");
    };
    return {
      ...props,
      plainText: getPlainText(content.children)
    };
  }
  return props;
};
const Block = ({ content }) => {
  const { children: childrenNodes, type, ...props } = content;
  const { blocks, missingBlockTypes } = (0,_BlocksRenderer_mjs__WEBPACK_IMPORTED_MODULE_2__.useComponentsContext)();
  const BlockComponent = blocks[type];
  if (!BlockComponent) {
    if (!missingBlockTypes.includes(type)) {
      console.warn(`[@strapi/block-react-renderer] No component found for block type "${type}"`);
      missingBlockTypes.push(type);
    }
    return null;
  }
  if (voidTypes.includes(type)) {
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockComponent, { ...props });
  }
  const augmentedProps = augmentProps(content);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BlockComponent, { ...augmentedProps, children: childrenNodes.map((childNode, index) => {
    if (childNode.type === "text") {
      const { type: _type, ...childNodeProps } = childNode;
      return /* @__PURE__ */ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_Text_mjs__WEBPACK_IMPORTED_MODULE_3__.Text, { ...childNodeProps, key: index });
    }
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Block, { content: childNode }, index);
  }) });
};

//# sourceMappingURL=Block.mjs.map


/***/ }),

/***/ "./node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer.mjs":
/*!****************************************************************************!*\
  !*** ./node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer.mjs ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlocksRenderer: () => (/* binding */ BlocksRenderer),
/* harmony export */   ComponentsProvider: () => (/* binding */ ComponentsProvider),
/* harmony export */   useComponentsContext: () => (/* binding */ useComponentsContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Block_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Block.mjs */ "./node_modules/@strapi/blocks-react-renderer/dist/Block.mjs");
'use client';



const defaultComponents = {
  blocks: {
    paragraph: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { children: props.children }),
    quote: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("blockquote", { children: props.children }),
    code: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("pre", { children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: props.plainText }) }),
    heading: ({ level, children }) => {
      switch (level) {
        case 1:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1", { children });
        case 2:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { children });
        case 3:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h3", { children });
        case 4:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h4", { children });
        case 5:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h5", { children });
        case 6:
          return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h6", { children });
      }
    },
    link: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: props.url, children: props.children }),
    list: (props) => {
      if (props.format === "ordered") {
        return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ol", { children: props.children });
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: props.children });
    },
    "list-item": (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { children: props.children }),
    image: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", { src: props.image.url, alt: props.image.alternativeText || void 0 })
  },
  modifiers: {
    bold: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong", { children: props.children }),
    italic: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em", { children: props.children }),
    underline: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("u", { children: props.children }),
    strikethrough: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("del", { children: props.children }),
    code: (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("code", { children: props.children })
  },
  missingBlockTypes: [],
  missingModifierTypes: []
};
const ComponentsContext = react__WEBPACK_IMPORTED_MODULE_1__.createContext(defaultComponents);
const ComponentsProvider = ({ children, value = defaultComponents }) => {
  const memoizedValue = react__WEBPACK_IMPORTED_MODULE_1__.useMemo(() => value, [value]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ComponentsContext.Provider, { value: memoizedValue, children });
};
function useComponentsContext() {
  return react__WEBPACK_IMPORTED_MODULE_1__.useContext(ComponentsContext);
}
const BlocksRenderer = (props) => {
  const blocks = {
    ...defaultComponents.blocks,
    ...props.blocks
  };
  const modifiers = {
    ...defaultComponents.modifiers,
    ...props.modifiers
  };
  const missingBlockTypes = react__WEBPACK_IMPORTED_MODULE_1__.useRef([]);
  const missingModifierTypes = react__WEBPACK_IMPORTED_MODULE_1__.useRef([]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    ComponentsProvider,
    {
      value: {
        blocks,
        modifiers,
        missingBlockTypes: missingBlockTypes.current,
        missingModifierTypes: missingModifierTypes.current
      },
      children: props.content.map((content, index) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Block_mjs__WEBPACK_IMPORTED_MODULE_2__.Block, { content }, index))
    }
  );
};

//# sourceMappingURL=BlocksRenderer.mjs.map


/***/ }),

/***/ "./node_modules/@strapi/blocks-react-renderer/dist/Text.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@strapi/blocks-react-renderer/dist/Text.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Text: () => (/* binding */ Text)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _BlocksRenderer_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlocksRenderer.mjs */ "./node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer.mjs");


const Text = ({ text, ...modifiers }) => {
  const { modifiers: modifierComponents, missingModifierTypes } = (0,_BlocksRenderer_mjs__WEBPACK_IMPORTED_MODULE_1__.useComponentsContext)();
  const modifierNames = Object.keys(modifiers);
  return modifierNames.reduce(
    (children, modifierName) => {
      if (!modifiers[modifierName]) {
        return children;
      }
      const ModifierComponent = modifierComponents[modifierName];
      if (!ModifierComponent) {
        if (!missingModifierTypes.includes(modifierName)) {
          console.warn(
            `[@strapi/block-react-renderer] No component found for modifier "${modifierName}"`
          );
          missingModifierTypes.push(modifierName);
        }
        return children;
      }
      return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ModifierComponent, { children });
    },
    // By default, return the text without any wrapper to avoid useless nesting
    /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: text })
  );
};

//# sourceMappingURL=Text.mjs.map


/***/ }),

/***/ "./node_modules/@strapi/blocks-react-renderer/dist/index.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/@strapi/blocks-react-renderer/dist/index.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlocksRenderer: () => (/* reexport safe */ _BlocksRenderer_mjs__WEBPACK_IMPORTED_MODULE_0__.BlocksRenderer)
/* harmony export */ });
/* harmony import */ var _BlocksRenderer_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlocksRenderer.mjs */ "./node_modules/@strapi/blocks-react-renderer/dist/BlocksRenderer.mjs");


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/react-share/dist/index.js":
/*!************************************************!*\
  !*** ./node_modules/react-share/dist/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EmailIcon: () => (/* binding */ EmailIcon$1),
/* harmony export */   EmailShareButton: () => (/* binding */ EmailShareButton$1),
/* harmony export */   FacebookIcon: () => (/* binding */ FacebookIcon$1),
/* harmony export */   FacebookMessengerIcon: () => (/* binding */ FacebookMessengerIcon$1),
/* harmony export */   FacebookMessengerShareButton: () => (/* binding */ FacebookMessengerShareButton$1),
/* harmony export */   FacebookShareButton: () => (/* binding */ FacebookShareButton$1),
/* harmony export */   FacebookShareCount: () => (/* binding */ FacebookShareCount),
/* harmony export */   GabIcon: () => (/* binding */ GabIcon$1),
/* harmony export */   GabShareButton: () => (/* binding */ GabShareButton$1),
/* harmony export */   HatenaIcon: () => (/* binding */ HatenaIcon$1),
/* harmony export */   HatenaShareButton: () => (/* binding */ HatenaShareButton$1),
/* harmony export */   HatenaShareCount: () => (/* binding */ HatenaShareCount),
/* harmony export */   InstapaperIcon: () => (/* binding */ InstapaperIcon$1),
/* harmony export */   InstapaperShareButton: () => (/* binding */ InstapaperShareButton$1),
/* harmony export */   LineIcon: () => (/* binding */ LineIcon$1),
/* harmony export */   LineShareButton: () => (/* binding */ LineShareButton$1),
/* harmony export */   LinkedinIcon: () => (/* binding */ LinkedinIcon$1),
/* harmony export */   LinkedinShareButton: () => (/* binding */ LinkedinShareButton$1),
/* harmony export */   LivejournalIcon: () => (/* binding */ LivejournalIcon$1),
/* harmony export */   LivejournalShareButton: () => (/* binding */ LivejournalShareButton$1),
/* harmony export */   MailruIcon: () => (/* binding */ MailruIcon$1),
/* harmony export */   MailruShareButton: () => (/* binding */ MailruShareButton$1),
/* harmony export */   OKIcon: () => (/* binding */ OKIcon$1),
/* harmony export */   OKShareButton: () => (/* binding */ OKShareButton$1),
/* harmony export */   OKShareCount: () => (/* binding */ OKShareCount),
/* harmony export */   PinterestIcon: () => (/* binding */ PinterestIcon$1),
/* harmony export */   PinterestShareButton: () => (/* binding */ PinterestShareButton$1),
/* harmony export */   PinterestShareCount: () => (/* binding */ PinterestShareCount),
/* harmony export */   PocketIcon: () => (/* binding */ PocketIcon$1),
/* harmony export */   PocketShareButton: () => (/* binding */ PocketShareButton$1),
/* harmony export */   RedditIcon: () => (/* binding */ RedditIcon$1),
/* harmony export */   RedditShareButton: () => (/* binding */ RedditShareButton$1),
/* harmony export */   RedditShareCount: () => (/* binding */ RedditShareCount),
/* harmony export */   TelegramIcon: () => (/* binding */ TelegramIcon$1),
/* harmony export */   TelegramShareButton: () => (/* binding */ TelegramShareButton$1),
/* harmony export */   TumblrIcon: () => (/* binding */ TumblrIcon$1),
/* harmony export */   TumblrShareButton: () => (/* binding */ TumblrShareButton$1),
/* harmony export */   TumblrShareCount: () => (/* binding */ TumblrShareCount),
/* harmony export */   TwitterIcon: () => (/* binding */ TwitterIcon$1),
/* harmony export */   TwitterShareButton: () => (/* binding */ TwitterShareButton$1),
/* harmony export */   VKIcon: () => (/* binding */ VKIcon$1),
/* harmony export */   VKShareButton: () => (/* binding */ VKShareButton$1),
/* harmony export */   VKShareCount: () => (/* binding */ VKShareCount),
/* harmony export */   ViberIcon: () => (/* binding */ ViberIcon$1),
/* harmony export */   ViberShareButton: () => (/* binding */ ViberShareButton$1),
/* harmony export */   WeiboIcon: () => (/* binding */ WeiboIcon$1),
/* harmony export */   WeiboShareButton: () => (/* binding */ WeiboShareButton$1),
/* harmony export */   WhatsappIcon: () => (/* binding */ WhatsappIcon$1),
/* harmony export */   WhatsappShareButton: () => (/* binding */ WhatsappShareButton$1),
/* harmony export */   WorkplaceIcon: () => (/* binding */ WorkplaceIcon$1),
/* harmony export */   WorkplaceShareButton: () => (/* binding */ WorkplaceShareButton$1),
/* harmony export */   XIcon: () => (/* binding */ XIcon$1)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var jsonp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jsonp */ "./node_modules/jsonp/index.js");
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};




function createIcon(iconConfig) {
  const Icon = (_a) => {
    var _b = _a, {
      bgStyle = {},
      borderRadius = 0,
      iconFillColor = "white",
      round = false,
      size = 64
    } = _b, rest = __objRest(_b, [
      "bgStyle",
      "borderRadius",
      "iconFillColor",
      "round",
      "size"
    ]);
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", __spreadProps(__spreadValues({ viewBox: "0 0 64 64", width: size, height: size }, rest), { children: [
      round ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", { cx: "32", cy: "32", r: "32", fill: iconConfig.color, style: bgStyle }) : /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        "rect",
        {
          width: "64",
          height: "64",
          rx: borderRadius,
          ry: borderRadius,
          fill: iconConfig.color,
          style: bgStyle
        }
      ),
      /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", { d: iconConfig.path, fill: iconFillColor })
    ] }));
  };
  return Icon;
}
const EmailIcon = createIcon({
  color: "#7f7f7f",
  networkName: "email",
  path: "M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
});
const EmailIcon$1 = EmailIcon;
function objectToGetParams(object) {
  const params = Object.entries(object).filter(([, value]) => value !== void 0 && value !== null).map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`);
  return params.length > 0 ? `?${params.join("&")}` : "";
}
const isPromise = (obj) => !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
const getBoxPositionOnWindowCenter = (width, height) => ({
  left: window.outerWidth / 2 + (window.screenX || window.screenLeft || 0) - width / 2,
  top: window.outerHeight / 2 + (window.screenY || window.screenTop || 0) - height / 2
});
const getBoxPositionOnScreenCenter = (width, height) => ({
  top: (window.screen.height - height) / 2,
  left: (window.screen.width - width) / 2
});
function windowOpen(url, _a, onClose) {
  var _b = _a, { height, width } = _b, configRest = __objRest(_b, ["height", "width"]);
  const config = __spreadValues({
    height,
    width,
    location: "no",
    toolbar: "no",
    status: "no",
    directories: "no",
    menubar: "no",
    scrollbars: "yes",
    resizable: "no",
    centerscreen: "yes",
    chrome: "yes"
  }, configRest);
  const shareDialog = window.open(
    url,
    "",
    Object.keys(config).map((key) => `${key}=${config[key]}`).join(", ")
  );
  if (onClose) {
    const interval = window.setInterval(() => {
      try {
        if (shareDialog === null || shareDialog.closed) {
          window.clearInterval(interval);
          onClose(shareDialog);
        }
      } catch (e) {
        console.error(e);
      }
    }, 1e3);
  }
  return shareDialog;
}
function ShareButton(_c) {
  var _d = _c, {
    beforeOnClick,
    children,
    className,
    disabled,
    disabledStyle = { opacity: 0.6 },
    forwardedRef,
    htmlTitle,
    networkLink,
    networkName,
    onClick,
    onShareWindowClose,
    openShareDialogOnClick = true,
    opts,
    resetButtonStyle = true,
    style,
    url,
    windowHeight = 400,
    windowPosition = "windowCenter",
    windowWidth = 550
  } = _d, rest = __objRest(_d, [
    "beforeOnClick",
    "children",
    "className",
    "disabled",
    "disabledStyle",
    "forwardedRef",
    "htmlTitle",
    "networkLink",
    "networkName",
    "onClick",
    "onShareWindowClose",
    "openShareDialogOnClick",
    "opts",
    "resetButtonStyle",
    "style",
    "url",
    "windowHeight",
    "windowPosition",
    "windowWidth"
  ]);
  const handleClick = async (event) => {
    const link = networkLink(url, opts);
    if (disabled) {
      return;
    }
    event.preventDefault();
    if (beforeOnClick) {
      const returnVal = beforeOnClick();
      if (isPromise(returnVal)) {
        await returnVal;
      }
    }
    if (openShareDialogOnClick) {
      const windowConfig = __spreadValues({
        height: windowHeight,
        width: windowWidth
      }, windowPosition === "windowCenter" ? getBoxPositionOnWindowCenter(windowWidth, windowHeight) : getBoxPositionOnScreenCenter(windowWidth, windowHeight));
      windowOpen(link, windowConfig, onShareWindowClose);
    }
    if (onClick) {
      onClick(event, link);
    }
  };
  const newClassName = classnames__WEBPACK_IMPORTED_MODULE_2__(
    "react-share__ShareButton",
    {
      "react-share__ShareButton--disabled": !!disabled,
      disabled: !!disabled
    },
    className
  );
  const newStyle = resetButtonStyle ? __spreadValues(__spreadValues({
    backgroundColor: "transparent",
    border: "none",
    padding: 0,
    font: "inherit",
    color: "inherit",
    cursor: "pointer"
  }, style), disabled && disabledStyle) : __spreadValues(__spreadValues({}, style), disabled && disabledStyle);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    "button",
    __spreadProps(__spreadValues({}, rest), {
      className: newClassName,
      onClick: handleClick,
      ref: forwardedRef,
      style: newStyle,
      title: htmlTitle,
      children
    })
  );
}
function createShareButton(networkName, link, optsMap, defaultProps) {
  function CreatedButton(props, ref) {
    const opts = optsMap(props);
    const passedProps = __spreadValues({}, props);
    const optsKeys = Object.keys(opts);
    optsKeys.forEach((key) => {
      delete passedProps[key];
    });
    return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
      ShareButton,
      __spreadProps(__spreadValues(__spreadValues({}, defaultProps), passedProps), {
        forwardedRef: ref,
        networkName,
        networkLink: link,
        opts: optsMap(props)
      })
    );
  }
  CreatedButton.displayName = `ShareButton-${networkName}`;
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(CreatedButton);
}
function emailLink(url, { subject, body, separator }) {
  return "mailto:" + objectToGetParams({ subject, body: body ? body + separator + url : url });
}
const EmailShareButton = createShareButton(
  "email",
  emailLink,
  (props) => ({
    subject: props.subject,
    body: props.body,
    separator: props.separator || " "
  }),
  {
    openShareDialogOnClick: false,
    onClick: (_, link) => {
      window.location.href = link;
    }
  }
);
const EmailShareButton$1 = EmailShareButton;
const FacebookIcon = createIcon({
  color: "#0965FE",
  networkName: "facebook",
  path: "M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
});
const FacebookIcon$1 = FacebookIcon;
const FacebookMessengerIcon = createIcon({
  color: "#0A7CFF",
  networkName: "facebookmessenger",
  path: "M 53.066406 21.871094 C 52.667969 21.339844 51.941406 21.179688 51.359375 21.496094 L 37.492188 29.058594 L 28.867188 21.660156 C 28.339844 21.207031 27.550781 21.238281 27.054688 21.730469 L 11.058594 37.726562 C 10.539062 38.25 10.542969 39.09375 11.0625 39.613281 C 11.480469 40.027344 12.121094 40.121094 12.640625 39.839844 L 26.503906 32.28125 L 35.136719 39.679688 C 35.667969 40.132812 36.457031 40.101562 36.949219 39.609375 L 52.949219 23.613281 C 53.414062 23.140625 53.464844 22.398438 53.066406 21.871094 Z M 53.066406 21.871094"
});
const FacebookMessengerIcon$1 = FacebookMessengerIcon;
function facebookMessengerLink(url, { appId, redirectUri, to }) {
  return "https://www.facebook.com/dialog/send" + objectToGetParams({
    link: url,
    redirect_uri: redirectUri || url,
    app_id: appId,
    to
  });
}
const FacebookMessengerShareButton = createShareButton(
  "facebookmessenger",
  facebookMessengerLink,
  (props) => ({
    appId: props.appId,
    redirectUri: props.redirectUri,
    to: props.to
  }),
  {
    windowWidth: 1e3,
    windowHeight: 820
  }
);
const FacebookMessengerShareButton$1 = FacebookMessengerShareButton;
class AssertionError extends Error {
  constructor(message) {
    super(message);
    this.name = "AssertionError";
  }
}
function assert(value, message) {
  if (!value) {
    throw new AssertionError(message);
  }
}
function facebookLink(url, { hashtag }) {
  assert(url, "facebook.url");
  return "https://www.facebook.com/sharer/sharer.php" + objectToGetParams({ u: url, hashtag });
}
const FacebookShareButton = createShareButton(
  "facebook",
  facebookLink,
  (props) => ({ hashtag: props.hashtag }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const FacebookShareButton$1 = FacebookShareButton;
function useIsMounted() {
  const isMounted = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(() => isMounted.current, []);
}
function SocialMediaShareCount(_e) {
  var _f = _e, {
    children = (shareCount) => shareCount,
    className,
    getCount,
    url
  } = _f, rest = __objRest(_f, [
    "children",
    "className",
    "getCount",
    "url"
  ]);
  const isMounted = useIsMounted();
  const [count, setCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(void 0);
  const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setIsLoading(true);
    getCount(url, (count2) => {
      if (isMounted()) {
        setCount(count2);
        setIsLoading(false);
      }
    });
  }, [url]);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", __spreadProps(__spreadValues({ className: classnames__WEBPACK_IMPORTED_MODULE_2__("react-share__ShareCount", className) }, rest), { children: !isLoading && count !== void 0 && children(count) }));
}
function createShareCount(getCount) {
  const ShareCount = (props) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SocialMediaShareCount, __spreadValues({ getCount }, props));
  ShareCount.displayName = `ShareCount(${getCount.name})`;
  return ShareCount;
}
function getFacebookShareCount(shareUrl, callback) {
  const endpoint = `https://graph.facebook.com/?id=${shareUrl}&fields=og_object{engagement}`;
  jsonp__WEBPACK_IMPORTED_MODULE_3__(endpoint, (err, data) => {
    callback(
      !err && data && data.og_object && data.og_object.engagement ? data.og_object.engagement.count : void 0
    );
  });
}
const FacebookShareCount = createShareCount(getFacebookShareCount);
const HatenaIcon = createIcon({
  color: "#009ad9",
  networkName: "hatena",
  path: "M 36.164062 33.554688 C 34.988281 32.234375 33.347656 31.5 31.253906 31.34375 C 33.125 30.835938 34.476562 30.09375 35.335938 29.09375 C 36.191406 28.09375 36.609375 26.78125 36.609375 25.101562 C 36.628906 23.875 36.332031 22.660156 35.75 21.578125 C 35.160156 20.558594 34.292969 19.71875 33.253906 19.160156 C 32.304688 18.640625 31.175781 18.265625 29.847656 18.042969 C 28.523438 17.824219 26.195312 17.730469 22.867188 17.730469 L 14.769531 17.730469 L 14.769531 47.269531 L 23.113281 47.269531 C 26.46875 47.269531 28.886719 47.15625 30.367188 46.929688 C 31.851562 46.695312 33.085938 46.304688 34.085938 45.773438 C 35.289062 45.148438 36.28125 44.179688 36.933594 42.992188 C 37.597656 41.796875 37.933594 40.402344 37.933594 38.816406 C 37.933594 36.621094 37.347656 34.867188 36.164062 33.554688 Z M 22.257812 24.269531 L 23.984375 24.269531 C 25.988281 24.269531 27.332031 24.496094 28.015625 24.945312 C 28.703125 25.402344 29.042969 26.183594 29.042969 27.285156 C 29.042969 28.390625 28.664062 29.105469 27.9375 29.550781 C 27.210938 29.992188 25.84375 30.199219 23.855469 30.199219 L 22.257812 30.199219 Z M 29.121094 41.210938 C 28.328125 41.691406 26.976562 41.925781 25.078125 41.925781 L 22.257812 41.925781 L 22.257812 35.488281 L 25.195312 35.488281 C 27.144531 35.488281 28.496094 35.738281 29.210938 36.230469 C 29.925781 36.726562 30.304688 37.582031 30.304688 38.832031 C 30.304688 40.078125 29.914062 40.742188 29.105469 41.222656 Z M 29.121094 41.210938 M 46.488281 39.792969 C 44.421875 39.792969 42.742188 41.46875 42.742188 43.535156 C 42.742188 45.605469 44.421875 47.28125 46.488281 47.28125 C 48.554688 47.28125 50.230469 45.605469 50.230469 43.535156 C 50.230469 41.46875 48.554688 39.792969 46.488281 39.792969 Z M 46.488281 39.792969 M 43.238281 17.730469 L 49.738281 17.730469 L 49.738281 37.429688 L 43.238281 37.429688 Z M 43.238281 17.730469 "
});
const HatenaIcon$1 = HatenaIcon;
function hatenaLink(url, { title }) {
  assert(url, "hatena.url");
  return `http://b.hatena.ne.jp/add?mode=confirm&url=${url}&title=${title}`;
}
const HatenaShareButton = createShareButton(
  "hatena",
  hatenaLink,
  (props) => ({
    title: props.title
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: "windowCenter"
  }
);
const HatenaShareButton$1 = HatenaShareButton;
function getHatenaShareCount(shareUrl, callback) {
  const url = "https://bookmark.hatenaapis.com/count/entry";
  jsonp__WEBPACK_IMPORTED_MODULE_3__(
    url + objectToGetParams({
      url: shareUrl
    }),
    (err, data) => {
      callback(data != null ? data : void 0);
    }
  );
}
const HatenaShareCount = createShareCount(getHatenaShareCount);
const InstapaperIcon = createIcon({
  color: "#1F1F1F",
  networkName: "instapaper",
  path: "M35.688 43.012c0 2.425.361 2.785 3.912 3.056V48H24.401v-1.932c3.555-.27 3.912-.63 3.912-3.056V20.944c0-2.379-.36-2.785-3.912-3.056V16H39.6v1.888c-3.55.27-3.912.675-3.912 3.056v22.068h.001z"
});
const InstapaperIcon$1 = InstapaperIcon;
function instapaperLink(url, { title, description }) {
  assert(url, "instapaper.url");
  return "http://www.instapaper.com/hello2" + objectToGetParams({
    url,
    title,
    description
  });
}
const InstapaperShareButton = createShareButton(
  "instapaper",
  instapaperLink,
  (props) => ({
    title: props.title,
    description: props.description
  }),
  {
    windowWidth: 500,
    windowHeight: 500,
    windowPosition: "windowCenter"
  }
);
const InstapaperShareButton$1 = InstapaperShareButton;
const LineIcon = createIcon({
  color: "#00b800",
  networkName: "line",
  path: "M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z"
});
const LineIcon$1 = LineIcon;
function lineLink(url, { title }) {
  assert(url, "line.url");
  return "https://social-plugins.line.me/lineit/share" + objectToGetParams({
    url,
    text: title
  });
}
const LineShareButton = createShareButton(
  "line",
  lineLink,
  (props) => ({
    title: props.title
  }),
  {
    windowWidth: 500,
    windowHeight: 500
  }
);
const LineShareButton$1 = LineShareButton;
const LinkedinIcon = createIcon({
  color: "#0077B5",
  networkName: "linkedin",
  path: "M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
});
const LinkedinIcon$1 = LinkedinIcon;
function linkedinLink(url, { title, summary, source }) {
  assert(url, "linkedin.url");
  return "https://linkedin.com/shareArticle" + objectToGetParams({ url, mini: "true", title, summary, source });
}
const LinkedinShareButton = createShareButton(
  "linkedin",
  linkedinLink,
  ({ title, summary, source }) => ({ title, summary, source }),
  {
    windowWidth: 750,
    windowHeight: 600
  }
);
const LinkedinShareButton$1 = LinkedinShareButton;
const LivejournalIcon = createIcon({
  color: "#21A5D8",
  networkName: "livejournal",
  path: "M18.3407821,28.1764706 L21.9441341,31.789916 L33.0055865,42.882353 C33.0055865,42.882353 33.0893855,42.9663866 33.0893855,42.9663866 L46.6648046,47 C46.6648046,47 46.6648046,47 46.7486034,47 C46.8324022,47 46.8324022,47 46.9162012,46.9159664 C47,46.8319327 47,46.8319327 47,46.7478991 L42.9776536,33.1344537 C42.9776536,33.1344537 42.9776536,33.1344537 42.8938548,33.0504202 L31.1620111,21.3697479 L31.1620111,21.3697479 L28.1452514,18.2605042 C27.3072626,17.4201681 26.5530726,17 25.7150838,17 C24.2905028,17 23.0335195,18.3445378 21.5251397,19.8571429 C21.273743,20.1092437 20.9385475,20.4453781 20.6871508,20.697479 C20.3519553,21.0336134 20.1005586,21.2857143 19.849162,21.5378151 C18.3407821,22.9663866 17.0837989,24.2268908 17,25.7394958 C17.0837989,26.4957983 17.5027933,27.3361345 18.3407821,28.1764706 Z M39.9012319,39.6134454 C39.7336341,39.4453781 39.4822374,37.6806724 40.2364275,36.8403362 C40.9906174,36.0840337 41.6610084,36 42.1638017,36 C42.3313995,36 42.4989973,36 42.5827961,36 L44.8453659,43.5630253 L43.5883828,44.8235295 L36.0464833,42.5546218 C35.9626843,42.2184874 35.8788855,41.2100841 36.8844722,40.2016807 C37.2196676,39.8655463 37.8900587,39.6134454 38.5604498,39.6134454 C39.147042,39.6134454 39.5660364,39.7815126 39.5660364,39.7815126 C39.6498353,39.8655463 39.8174331,39.8655463 39.8174331,39.7815126 C39.9850307,39.7815126 39.9850307,39.697479 39.9012319,39.6134454 Z"
});
const LivejournalIcon$1 = LivejournalIcon;
function livejournalLink(url, { title, description }) {
  assert(url, "livejournal.url");
  return "https://www.livejournal.com/update.bml" + objectToGetParams({
    subject: title,
    event: description
  });
}
const LivejournalShareButton = createShareButton(
  "livejournal",
  livejournalLink,
  (props) => ({
    title: props.title,
    description: props.description
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
const LivejournalShareButton$1 = LivejournalShareButton;
const MailruIcon = createIcon({
  color: "#168DE2",
  networkName: "mailru",
  path: "M39.7107745,17 C41.6619755,17 43.3204965,18.732852 43.3204965,21.0072202 C43.3204965,23.2815885 41.7595357,25.0144404 39.7107745,25.0144404 C37.7595732,25.0144404 36.1010522,23.2815885 36.1010522,21.0072202 C36.1010522,18.732852 37.7595732,17 39.7107745,17 Z M24.3938451,17 C26.3450463,17 28.0035672,18.732852 28.0035672,21.0072202 C28.0035672,23.2815885 26.4426063,25.0144404 24.3938451,25.0144404 C22.4426439,25.0144404 20.7841229,23.2815885 20.7841229,21.0072202 C20.7841229,18.732852 22.4426439,17 24.3938451,17 Z M51.9057817,43.4259928 C51.7106617,44.0758123 51.4179815,44.6173285 50.9301812,44.9422383 C50.637501,45.1588448 50.2472607,45.267148 49.8570205,45.267148 C49.07654,45.267148 48.3936197,44.833935 48.0033795,44.0758123 L46.2472985,40.7184115 L45.759498,41.2599278 C42.5400162,44.9422383 37.466893,47 32.0035297,47 C26.5401664,47 21.5646034,44.9422383 18.2475614,41.2599278 L17.7597611,40.7184115 L16.00368,44.0758123 C15.6134398,44.833935 14.9305194,45.267148 14.1500389,45.267148 C13.7597986,45.267148 13.3695584,45.1588448 13.0768782,44.9422383 C12.0037176,44.2924187 11.7110374,42.7761733 12.2963978,41.5848375 L16.7841605,33.0288807 C17.1744007,32.270758 17.8573211,31.8375453 18.6378016,31.8375453 C19.0280418,31.8375453 19.4182821,31.9458485 19.7109623,32.1624548 C20.7841229,32.8122743 21.0768031,34.3285197 20.4914427,35.5198555 L20.1012025,36.2779783 L20.2963226,36.602888 C22.4426439,39.9602888 27.0279667,42.234657 31.9059697,42.234657 C36.7839727,42.234657 41.3692955,40.068592 43.5156167,36.602888 L43.7107367,36.2779783 L43.3204965,35.6281587 C43.0278165,35.0866425 42.9302562,34.436823 43.1253765,33.7870035 C43.3204965,33.137184 43.6131767,32.5956678 44.100977,32.270758 C44.3936572,32.0541515 44.7838975,31.9458485 45.1741377,31.9458485 C45.9546182,31.9458485 46.6375385,32.3790613 47.0277787,33.137184 L51.5155415,41.6931408 C52.003342,42.234657 52.100902,42.8844765 51.9057817,43.4259928 Z"
});
const MailruIcon$1 = MailruIcon;
function mailruLink(url, { title, description, imageUrl }) {
  assert(url, "mailru.url");
  return "https://connect.mail.ru/share" + objectToGetParams({
    url,
    title,
    description,
    image_url: imageUrl
  });
}
const MailruShareButton = createShareButton(
  "mailru",
  mailruLink,
  (props) => ({
    title: props.title,
    description: props.description,
    imageUrl: props.imageUrl
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
const MailruShareButton$1 = MailruShareButton;
const OKIcon = createIcon({
  color: "#F97400",
  networkName: "ok",
  path: "M39,30c-1,0-3,2-7,2s-6-2-7-2c-1.1,0-2,0.9-2,2c0,1,0.6,1.5,1,1.7c1.2,0.7,5,2.3,5,2.3l-4.3,5.4   c0,0-0.8,0.9-0.8,1.6c0,1.1,0.9,2,2,2c1,0,1.5-0.7,1.5-0.7S32,39,32,39c0,0,4.5,5.3,4.5,5.3S37,45,38,45c1.1,0,2-0.9,2-2   c0-0.6-0.8-1.6-0.8-1.6L35,36c0,0,3.8-1.6,5-2.3c0.4-0.3,1-0.7,1-1.7C41,30.9,40.1,30,39,30z M32,15c-3.9,0-7,3.1-7,7s3.1,7,7,7c3.9,0,7-3.1,7-7S35.9,15,32,15z M32,25.5   c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5c1.9,0,3.5,1.6,3.5,3.5C35.5,23.9,33.9,22.5,35,22.5z "
});
const OKIcon$1 = OKIcon;
function okLink(url, { title, description, image }) {
  assert(url, "ok.url");
  return "https://connect.ok.ru/offer" + objectToGetParams({
    url,
    title,
    description,
    imageUrl: image
  });
}
const OKShareButton = createShareButton(
  "ok",
  okLink,
  (props) => ({
    title: props.title,
    description: props.description,
    image: props.image
  }),
  {
    windowWidth: 588,
    windowHeight: 480,
    windowPosition: "screenCenter"
  }
);
const OKShareButton$1 = OKShareButton;
function getOKShareCount(shareUrl, callback) {
  if (!window.OK) {
    window.OK = {
      Share: {
        count: function count(index2, _count) {
          var _a, _b;
          (_b = (_a = window.OK.callbacks)[index2]) == null ? void 0 : _b.call(_a, _count);
        }
      },
      callbacks: []
    };
  }
  const url = "https://connect.ok.ru/dk";
  const index = window.OK.callbacks.length;
  window.ODKL = {
    updateCount(index2, count) {
      var _a, _b;
      const callbackIndex = index2 === "" ? 0 : parseInt(index2.replace("react-share-", ""), 10);
      (_b = (_a = window.OK.callbacks)[callbackIndex]) == null ? void 0 : _b.call(_a, count === "" ? void 0 : parseInt(count, 10));
    }
  };
  window.OK.callbacks.push(callback);
  return jsonp__WEBPACK_IMPORTED_MODULE_3__(
    url + objectToGetParams({
      "st.cmd": "extLike",
      uid: `react-share-${index}`,
      ref: shareUrl
    })
  );
}
const OKShareCount = createShareCount(getOKShareCount);
const PinterestIcon = createIcon({
  color: "#E60023",
  networkName: "pinterest",
  path: "M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z"
});
const PinterestIcon$1 = PinterestIcon;
function pinterestLink(url, { media, description, pinId }) {
  if (pinId) {
    return `https://pinterest.com/pin/${pinId}/repin/x/`;
  }
  assert(url, "pinterest.url");
  assert(media, "pinterest.media");
  return "https://pinterest.com/pin/create/button/" + objectToGetParams({
    url,
    media,
    description
  });
}
const PinterestShareButton = createShareButton(
  "pinterest",
  pinterestLink,
  (props) => ({
    media: props.media,
    description: props.description,
    pinId: props.pinId
  }),
  {
    windowWidth: 1e3,
    windowHeight: 730
  }
);
const PinterestShareButton$1 = PinterestShareButton;
function getPinterestShareCount(shareUrl, callback) {
  const url = "https://api.pinterest.com/v1/urls/count.json";
  jsonp__WEBPACK_IMPORTED_MODULE_3__(
    url + objectToGetParams({
      url: shareUrl
    }),
    (err, data) => {
      callback(data ? data.count : void 0);
    }
  );
}
const PinterestShareCount = createShareCount(getPinterestShareCount);
const PocketIcon = createIcon({
  color: "#EF3F56",
  networkName: "pocket",
  path: "M41.084 29.065l-7.528 7.882a2.104 2.104 0 0 1-1.521.666 2.106 2.106 0 0 1-1.522-.666l-7.528-7.882c-.876-.914-.902-2.43-.065-3.384.84-.955 2.228-.987 3.1-.072l6.015 6.286 6.022-6.286c.88-.918 2.263-.883 3.102.071.841.938.82 2.465-.06 3.383l-.015.002zm6.777-10.976C47.463 16.84 46.361 16 45.14 16H18.905c-1.2 0-2.289.82-2.716 2.044-.125.363-.189.743-.189 1.125v10.539l.112 2.096c.464 4.766 2.73 8.933 6.243 11.838.06.053.125.102.19.153l.04.033c1.882 1.499 3.986 2.514 6.259 3.014a14.662 14.662 0 0 0 6.13.052c.118-.042.235-.065.353-.087.03 0 .065-.022.098-.042a15.395 15.395 0 0 0 6.011-2.945l.039-.045.18-.153c3.502-2.902 5.765-7.072 6.248-11.852L48 29.674v-10.52c0-.366-.041-.728-.161-1.08l.022.015z"
});
const PocketIcon$1 = PocketIcon;
function pocketLink(url, { title }) {
  assert(url, "pocket.url");
  return "https://getpocket.com/save" + objectToGetParams({
    url,
    title
  });
}
const PocketShareButton = createShareButton(
  "pocket",
  pocketLink,
  (props) => ({
    title: props.title
  }),
  {
    windowWidth: 500,
    windowHeight: 500
  }
);
const PocketShareButton$1 = PocketShareButton;
const RedditIcon = createIcon({
  color: "#FF5700",
  networkName: "reddit",
  path: "M 53.34375 32 C 53.277344 30.160156 52.136719 28.53125 50.429688 27.839844 C 48.722656 27.148438 46.769531 27.523438 45.441406 28.800781 C 41.800781 26.324219 37.519531 24.957031 33.121094 24.863281 L 35.199219 14.878906 L 42.046875 16.320312 C 42.214844 17.882812 43.496094 19.09375 45.066406 19.171875 C 46.636719 19.253906 48.03125 18.183594 48.359375 16.644531 C 48.6875 15.105469 47.847656 13.558594 46.382812 12.992188 C 44.914062 12.425781 43.253906 13.007812 42.464844 14.367188 L 34.625 12.800781 C 34.363281 12.742188 34.09375 12.792969 33.871094 12.9375 C 33.648438 13.082031 33.492188 13.308594 33.441406 13.566406 L 31.070312 24.671875 C 26.617188 24.738281 22.277344 26.105469 18.59375 28.609375 C 17.242188 27.339844 15.273438 26.988281 13.570312 27.707031 C 11.863281 28.429688 10.746094 30.089844 10.71875 31.941406 C 10.691406 33.789062 11.757812 35.484375 13.441406 36.257812 C 13.402344 36.726562 13.402344 37.195312 13.441406 37.664062 C 13.441406 44.832031 21.792969 50.65625 32.097656 50.65625 C 42.398438 50.65625 50.753906 44.832031 50.753906 37.664062 C 50.789062 37.195312 50.789062 36.726562 50.753906 36.257812 C 52.363281 35.453125 53.371094 33.800781 53.34375 32 Z M 21.34375 35.199219 C 21.34375 33.433594 22.777344 32 24.542969 32 C 26.3125 32 27.742188 33.433594 27.742188 35.199219 C 27.742188 36.96875 26.3125 38.398438 24.542969 38.398438 C 22.777344 38.398438 21.34375 36.96875 21.34375 35.199219 Z M 39.9375 44 C 37.664062 45.710938 34.871094 46.582031 32.03125 46.464844 C 29.191406 46.582031 26.398438 45.710938 24.128906 44 C 23.847656 43.65625 23.871094 43.15625 24.183594 42.839844 C 24.5 42.527344 25 42.503906 25.34375 42.785156 C 27.269531 44.195312 29.617188 44.90625 32 44.800781 C 34.386719 44.929688 36.746094 44.242188 38.6875 42.847656 C 39.042969 42.503906 39.605469 42.511719 39.953125 42.863281 C 40.296875 43.21875 40.289062 43.785156 39.9375 44.128906 Z M 39.359375 38.527344 C 37.59375 38.527344 36.160156 37.09375 36.160156 35.328125 C 36.160156 33.5625 37.59375 32.128906 39.359375 32.128906 C 41.128906 32.128906 42.558594 33.5625 42.558594 35.328125 C 42.59375 36.203125 42.269531 37.054688 41.65625 37.6875 C 41.046875 38.316406 40.203125 38.664062 39.328125 38.65625 Z M 39.359375 38.527344"
});
const RedditIcon$1 = RedditIcon;
function redditLink(url, { title }) {
  assert(url, "reddit.url");
  return "https://www.reddit.com/submit" + objectToGetParams({
    url,
    title
  });
}
const RedditShareButton = createShareButton(
  "reddit",
  redditLink,
  (props) => ({
    title: props.title
  }),
  {
    windowWidth: 660,
    windowHeight: 460,
    windowPosition: "windowCenter"
  }
);
const RedditShareButton$1 = RedditShareButton;
function gabLink(url, { title }) {
  assert(url, "gab.url");
  return "https://gab.com/compose" + objectToGetParams({
    url,
    text: title
  });
}
const GabShareButton = createShareButton(
  "gab",
  gabLink,
  (props) => ({
    title: props.title
  }),
  {
    windowWidth: 660,
    windowHeight: 640,
    windowPosition: "windowCenter"
  }
);
const GabShareButton$1 = GabShareButton;
const GabIcon = createIcon({
  color: "#00d178",
  networkName: "gab",
  path: "m17.0506,23.97457l5.18518,0l0,14.23933c0,6.82699 -3.72695,10.09328 -9.33471,10.09328c-2.55969,0 -4.82842,-0.87286 -6.22084,-2.0713l2.07477,-3.88283c1.19844,0.81051 2.33108,1.29543 3.85511,1.29543c2.75366,0 4.44049,-1.97432 4.44049,-4.82149l0,-0.87286c-1.16728,1.39242 -2.81947,2.0713 -4.63446,2.0713c-4.44048,0 -7.81068,-3.68885 -7.81068,-8.28521c0,-4.59289 3.37019,-8.28174 7.81068,-8.28174c1.81499,0 3.46718,0.67888 4.63446,2.0713l0,-1.55521zm-3.62997,11.39217c1.97777,0 3.62997,-1.6522 3.62997,-3.62652c0,-1.97432 -1.6522,-3.62305 -3.62997,-3.62305c-1.97778,0 -3.62997,1.64873 -3.62997,3.62305c0,1.97432 1.65219,3.62652 3.62997,3.62652zm25.7077,4.13913l-5.18518,0l0,-1.29197c-1.00448,1.13264 -2.3969,1.81152 -4.21188,1.81152c-3.62997,0 -5.63893,-2.52504 -5.63893,-5.4034c0,-4.27076 5.251,-5.85715 9.78846,-4.49937c-0.09698,-1.39241 -0.9733,-2.39343 -2.78829,-2.39343c-1.26426,0 -2.72248,0.48492 -3.62997,1.00102l-1.5552,-3.72003c1.19844,-0.77587 3.40136,-1.55174 5.96452,-1.55174c3.78931,0 7.25648,2.13365 7.25648,7.95962l0,8.08777zm-5.18518,-6.14809c-2.42806,-0.77587 -4.66563,-0.3533 -4.66563,1.36124c0,1.00101 0.84168,1.6799 1.84616,1.6799c1.20191,0 2.56315,-0.96984 2.81947,-3.04115zm13.00626,-17.66495l0,9.83695c1.16727,-1.39242 2.81946,-2.0713 4.63445,-2.0713c4.44048,0 7.81068,3.68885 7.81068,8.28174c0,4.59636 -3.37019,8.28521 -7.81068,8.28521c-1.81499,0 -3.46718,-0.67888 -4.63445,-2.0713l0,1.55174l-5.18519,0l0,-23.81304l5.18519,0zm3.62997,19.67391c1.97777,0 3.62997,-1.6522 3.62997,-3.62652c0,-1.97432 -1.6522,-3.62305 -3.62997,-3.62305c-1.97778,0 -3.62997,1.64873 -3.62997,3.62305c0,1.97432 1.65219,3.62652 3.62997,3.62652zm0,0"
});
const GabIcon$1 = GabIcon;
function getRedditShareCount(shareUrl, callback) {
  const endpoint = `https://www.reddit.com/api/info.json?limit=1&url=${shareUrl}`;
  jsonp__WEBPACK_IMPORTED_MODULE_3__(endpoint, { param: "jsonp" }, (err, response) => {
    callback(
      !err && response && response.data && response.data.children.length > 0 && response.data.children[0].data.score ? response.data.children[0].data.score : void 0
    );
  });
}
const RedditShareCount = createShareCount(getRedditShareCount);
const TelegramIcon = createIcon({
  color: "#25A3E3",
  networkName: "telegram",
  path: "m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"
});
const TelegramIcon$1 = TelegramIcon;
function telegramLink(url, { title }) {
  assert(url, "telegram.url");
  return "https://telegram.me/share/url" + objectToGetParams({
    url,
    text: title
  });
}
const TelegramShareButton = createShareButton(
  "telegram",
  telegramLink,
  (props) => ({
    title: props.title
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const TelegramShareButton$1 = TelegramShareButton;
const TumblrIcon = createIcon({
  color: "#34526f",
  networkName: "tumblr",
  path: "M39.2,41c-0.6,0.3-1.6,0.5-2.4,0.5c-2.4,0.1-2.9-1.7-2.9-3v-9.3h6v-4.5h-6V17c0,0-4.3,0-4.4,0 c-0.1,0-0.2,0.1-0.2,0.2c-0.3,2.3-1.4,6.4-5.9,8.1v3.9h3V39c0,3.4,2.5,8.1,9,8c2.2,0,4.7-1,5.2-1.8L39.2,41z"
});
const TumblrIcon$1 = TumblrIcon;
function tumblrLink(url, {
  title,
  caption,
  tags,
  posttype
}) {
  assert(url, "tumblr.url");
  return "https://www.tumblr.com/widgets/share/tool" + objectToGetParams({
    canonicalUrl: url,
    title,
    caption,
    tags,
    posttype
  });
}
const TumblrShareButton = createShareButton(
  "tumblr",
  tumblrLink,
  (props) => ({
    title: props.title,
    tags: (props.tags || []).join(","),
    caption: props.caption,
    posttype: props.posttype || "link"
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
const TumblrShareButton$1 = TumblrShareButton;
function getTumblrShareCount(shareUrl, callback) {
  const endpoint = "https://api.tumblr.com/v2/share/stats";
  return jsonp__WEBPACK_IMPORTED_MODULE_3__(
    endpoint + objectToGetParams({
      url: shareUrl
    }),
    (err, data) => {
      callback(!err && data && data.response ? data.response.note_count : void 0);
    }
  );
}
const TumblrShareCount = createShareCount(getTumblrShareCount);
const TwitterIcon = createIcon({
  color: "#00aced",
  networkName: "twitter",
  path: "M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
});
const TwitterIcon$1 = TwitterIcon;
function twitterLink(url, {
  title,
  via,
  hashtags = [],
  related = []
}) {
  assert(url, "twitter.url");
  assert(Array.isArray(hashtags), "twitter.hashtags is not an array");
  assert(Array.isArray(related), "twitter.related is not an array");
  return "https://twitter.com/intent/tweet" + objectToGetParams({
    url,
    text: title,
    via,
    hashtags: hashtags.length > 0 ? hashtags.join(",") : void 0,
    related: related.length > 0 ? related.join(",") : void 0
  });
}
const TwitterShareButton = createShareButton(
  "twitter",
  twitterLink,
  (props) => ({
    hashtags: props.hashtags,
    title: props.title,
    via: props.via,
    related: props.related
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const TwitterShareButton$1 = TwitterShareButton;
const ViberIcon = createIcon({
  color: "#7360f2",
  networkName: "viber",
  path: "m31.0,12.3c9.0,0.2 16.4,6.2 18.0,15.2c0.2,1.5 0.3,3.0 0.4,4.6a1.0,1.0 0 0 1 -0.8,1.2l-0.1,0a1.1,1.1 0 0 1 -1.0,-1.2l0,0c-0.0,-1.2 -0.1,-2.5 -0.3,-3.8a16.1,16.1 0 0 0 -13.0,-13.5c-1.0,-0.1 -2.0,-0.2 -3.0,-0.3c-0.6,-0.0 -1.4,-0.1 -1.6,-0.8a1.1,1.1 0 0 1 0.9,-1.2l0.6,0l0.0,-0.0zm10.6,39.2a19.9,19.9 0 0 1 -2.1,-0.6c-6.9,-2.9 -13.2,-6.6 -18.3,-12.2a47.5,47.5 0 0 1 -7.0,-10.7c-0.8,-1.8 -1.6,-3.7 -2.4,-5.6c-0.6,-1.7 0.3,-3.4 1.4,-4.7a11.3,11.3 0 0 1 3.7,-2.8a2.4,2.4 0 0 1 3.0,0.7a39.0,39.0 0 0 1 4.7,6.5a3.1,3.1 0 0 1 -0.8,4.2c-0.3,0.2 -0.6,0.5 -1.0,0.8a3.3,3.3 0 0 0 -0.7,0.7a2.1,2.1 0 0 0 -0.1,1.9c1.7,4.9 4.7,8.7 9.7,10.8a5.0,5.0 0 0 0 2.5,0.6c1.5,-0.1 2.0,-1.8 3.1,-2.7a2.9,2.9 0 0 1 3.5,-0.1c1.1,0.7 2.2,1.4 3.3,2.2a37.8,37.8 0 0 1 3.1,2.4a2.4,2.4 0 0 1 0.7,3.0a10.4,10.4 0 0 1 -4.4,4.8a10.8,10.8 0 0 1 -1.9,0.6c-0.7,-0.2 0.6,-0.2 0,0l0.0,0l0,-0.0zm3.1,-21.4a4.2,4.2 0 0 1 -0.0,0.6a1.0,1.0 0 0 1 -1.9,0.1a2.7,2.7 0 0 1 -0.1,-0.8a10.9,10.9 0 0 0 -1.4,-5.5a10.2,10.2 0 0 0 -4.2,-4.0a12.3,12.3 0 0 0 -3.4,-1.0c-0.5,-0.0 -1.0,-0.1 -1.5,-0.2a0.9,0.9 0 0 1 -0.9,-1.0l0,-0.1a0.9,0.9 0 0 1 0.9,-0.9l0.1,0a14.1,14.1 0 0 1 5.9,1.5a11.9,11.9 0 0 1 6.5,9.3c0,0.1 0.0,0.3 0.0,0.5c0,0.4 0.0,0.9 0.0,1.5l0,0l0.0,0.0zm-5.6,-0.2a1.1,1.1 0 0 1 -1.2,-0.9l0,-0.1a11.3,11.3 0 0 0 -0.2,-1.4a4.0,4.0 0 0 0 -1.5,-2.3a3.9,3.9 0 0 0 -1.2,-0.5c-0.5,-0.1 -1.1,-0.1 -1.6,-0.2a1.0,1.0 0 0 1 -0.8,-1.1l0,0l0,0a1.0,1.0 0 0 1 1.1,-0.8c3.4,0.2 6.0,2.0 6.3,6.2a2.8,2.8 0 0 1 0,0.8a0.8,0.8 0 0 1 -0.8,0.7l0,0l0.0,-0.0z"
});
const ViberIcon$1 = ViberIcon;
function viberLink(url, { title, separator }) {
  assert(url, "viber.url");
  return "viber://forward" + objectToGetParams({
    text: title ? title + separator + url : url
  });
}
const ViberShareButton = createShareButton(
  "viber",
  viberLink,
  (props) => ({
    title: props.title,
    separator: props.separator || " "
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
const ViberShareButton$1 = ViberShareButton;
const VKIcon = createIcon({
  color: "#4C75A3",
  networkName: "vk",
  path: "M44.94,44.84h-0.2c-2.17-.36-3.66-1.92-4.92-3.37C39.1,40.66,38,38.81,36.7,39c-1.85.3-.93,3.52-1.71,4.9-0.62,1.11-3.29.91-5.12,0.71-5.79-.62-8.75-3.77-11.35-7.14A64.13,64.13,0,0,1,11.6,26a10.59,10.59,0,0,1-1.51-4.49C11,20.7,12.56,21,14.11,21c1.31,0,3.36-.29,4.32.2C19,21.46,19.57,23,20,24a37.18,37.18,0,0,0,3.31,5.82c0.56,0.81,1.41,2.35,2.41,2.14s1.06-2.63,1.1-4.18c0-1.77,0-4-.5-4.9S25,22,24.15,21.47c0.73-1.49,2.72-1.63,5.12-1.63,2,0,4.84-.23,5.62,1.12s0.25,3.85.2,5.71c-0.06,2.09-.41,4.25,1,5.21,1.09-.12,1.68-1.2,2.31-2A28,28,0,0,0,41.72,24c0.44-1,.91-2.65,1.71-3,1.21-.47,3.15-0.1,4.92-0.1,1.46,0,4.05-.41,4.52.61,0.39,0.85-.75,3-1.1,3.57a61.88,61.88,0,0,1-4.12,5.61c-0.58.78-1.78,2-1.71,3.27,0.05,0.94,1,1.67,1.71,2.35a33.12,33.12,0,0,1,3.92,4.18c0.47,0.62,1.5,2,1.4,2.76C52.66,45.81,46.88,44.24,44.94,44.84Z"
});
const VKIcon$1 = VKIcon;
function vkLink(url, { title, image, noParse, noVkLinks }) {
  assert(url, "vk.url");
  return "https://vk.com/share.php" + objectToGetParams({
    url,
    title,
    image,
    noparse: noParse ? 1 : 0,
    no_vk_links: noVkLinks ? 1 : 0
  });
}
const VKShareButton = createShareButton(
  "vk",
  vkLink,
  (props) => ({
    title: props.title,
    image: props.image,
    noParse: props.noParse,
    noVkLinks: props.noVkLinks
  }),
  {
    windowWidth: 660,
    windowHeight: 460
  }
);
const VKShareButton$1 = VKShareButton;
function getVKShareCount(shareUrl, callback) {
  if (!window.VK)
    window.VK = {};
  window.VK.Share = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    count: (index2, count) => {
      var _a, _b;
      return (_b = (_a = window.VK.callbacks) == null ? void 0 : _a[index2]) == null ? void 0 : _b.call(_a, count);
    }
  };
  window.VK.callbacks = [];
  const url = "https://vk.com/share.php";
  const index = window.VK.callbacks.length;
  window.VK.callbacks.push(callback);
  return jsonp__WEBPACK_IMPORTED_MODULE_3__(
    url + objectToGetParams({
      act: "count",
      index,
      url: shareUrl
    })
  );
}
const VKShareCount = createShareCount(getVKShareCount);
const WeiboIcon = createIcon({
  color: "#DF2029",
  networkName: "weibo",
  path: "M40.9756152,15.0217119 C40.5000732,15.0546301 39.9999314,15.1204666 39.5325878,15.2192213 C38.6634928,15.4085016 38.0977589,16.2643757 38.2863368,17.1284787 C38.4667163,18.0008129 39.3194143,18.5686519 40.1885094,18.3793715 C42.8613908,17.8115326 45.7720411,18.6427174 47.7316073,20.8153207 C49.6911735,22.996153 50.2077122,25.975254 49.3714112,28.5840234 C49.1008441,29.4316684 49.5763861,30.3533789 50.4208857,30.6249537 C51.2653852,30.8965286 52.1754769,30.4192153 52.4542425,29.5715703 C53.6349013,25.9011885 52.9133876,21.7699494 50.1585171,18.7085538 C48.0923641,16.4042776 45.2063093,15.1533848 42.3530505,15.0217119 C41.8775084,14.9970227 41.4511594,14.9887937 40.9756152,15.0217119 Z M27.9227762,19.8277737 C24.9957268,20.140498 20.863421,22.4365431 17.2312548,26.0822378 C13.2711279,30.0571148 11,34.2871065 11,37.9328012 C11,44.9032373 19.8713401,49.125 28.5786978,49.125 C39.9917329,49.125 47.600423,42.4261409 47.600423,37.1427636 C47.600423,33.9496952 44.9603397,32.1638816 42.549827,31.4149913 C41.9594976,31.2339421 41.5167516,31.1434164 41.8283133,30.3616079 C42.5006339,28.66632 42.6236176,27.1932286 41.8939054,26.1480742 C40.5328692,24.1894405 36.7203236,24.2881952 32.448635,26.0822378 C32.448635,26.0822378 31.1203949,26.6912261 31.4647526,25.6213825 C32.1206742,23.4981576 32.0304845,21.712342 31.0056075,20.6836478 C30.2840938,19.9512176 29.2510184,19.6878718 27.9227762,19.8277737 Z M42.0906819,20.6836478 C41.6233383,20.6589586 41.1723917,20.716566 40.7132466,20.8153207 C39.9671353,20.9716828 39.4997917,21.7781784 39.6637721,22.5270687 C39.8277525,23.275959 40.5574647,23.7450433 41.303576,23.5804521 C42.1972686,23.3911718 43.2057485,23.6380596 43.8616701,24.3704897 C44.5175916,25.1029198 44.6733735,26.0657797 44.3864073,26.9381118 C44.1486363,27.6705419 44.5093932,28.4770397 45.2391054,28.7156963 C45.9688176,28.9461239 46.780521,28.5922524 47.0100936,27.8598223 C47.584026,26.0740087 47.2396661,24.0248493 45.8950269,22.5270687 C44.886547,21.4078489 43.4845162,20.7494842 42.0906819,20.6836478 Z M29.496988,29.9665891 C35.3100922,30.1723275 39.9917329,33.0691319 40.3852858,37.0769272 C40.8362324,41.6607904 35.5970585,45.9319315 28.6442899,46.6232144 C21.6915214,47.3144973 15.6488446,44.154347 15.197898,39.5787128 C14.7469514,34.9948495 20.059916,30.7237084 27.004486,30.0324256 C27.8735831,29.950131 28.6688875,29.9336709 29.496988,29.9665891 Z M25.5614586,34.3776322 C23.183744,34.5916017 20.9372116,35.9577073 19.9205332,37.9328012 C18.5348994,40.6238672 19.9041362,43.6029661 23.0689567,44.582284 C26.340366,45.5945202 30.1857056,44.0638213 31.5303448,41.1587879 C32.8503864,38.3195909 31.1613894,35.3734082 27.9227762,34.5751416 C27.1438688,34.3776322 26.356763,34.3035667 25.5614586,34.3776322 Z M24.052839,38.7228388 C24.3316067,38.7310678 24.5857748,38.8215935 24.8399449,38.9203482 C25.8648218,39.3400561 26.1845841,40.4428158 25.5614586,41.4221338 C24.9219361,42.3932227 23.5690963,42.8623069 22.5442194,42.4096807 C21.5357395,41.9652856 21.2487754,40.8542948 21.8882979,39.9078951 C22.3638421,39.2001542 23.2247386,38.7146097 24.052839,38.7228388 Z"
});
const WeiboIcon$1 = WeiboIcon;
function weiboLink(url, { title, image }) {
  assert(url, "weibo.url");
  return "http://service.weibo.com/share/share.php" + objectToGetParams({
    url,
    title,
    pic: image
  });
}
const WeiboShareButton = createShareButton(
  "weibo",
  weiboLink,
  (props) => ({
    title: props.title,
    image: props.image
  }),
  {
    windowWidth: 660,
    windowHeight: 550,
    windowPosition: "screenCenter"
  }
);
const WeiboShareButton$1 = WeiboShareButton;
const WhatsappIcon = createIcon({
  color: "#25D366",
  networkName: "whatsapp",
  path: "m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"
});
const WhatsappIcon$1 = WhatsappIcon;
function isMobileOrTablet() {
  return /(android|iphone|ipad|mobile)/i.test(navigator.userAgent);
}
function whatsappLink(url, { title, separator }) {
  assert(url, "whatsapp.url");
  return "https://" + (isMobileOrTablet() ? "api" : "web") + ".whatsapp.com/send" + objectToGetParams({
    text: title ? title + separator + url : url
  });
}
const WhatsappShareButton = createShareButton(
  "whatsapp",
  whatsappLink,
  (props) => ({
    title: props.title,
    separator: props.separator || " "
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const WhatsappShareButton$1 = WhatsappShareButton;
const WorkplaceIcon = createIcon({
  color: "#4326c4",
  networkName: "workplace",
  path: "M34.019,10.292c0.21,0.017,0.423,0.034,0.636,0.049 c3.657,0.262,6.976,1.464,9.929,3.635c3.331,2.448,5.635,5.65,6.914,9.584c0.699,2.152,0.983,4.365,0.885,6.623 c-0.136,3.171-1.008,6.13-2.619,8.867c-0.442,0.75-0.908,1.492-1.495,2.141c-0.588,0.651-1.29,1.141-2.146,1.383 c-1.496,0.426-3.247-0.283-3.961-1.642c-0.26-0.494-0.442-1.028-0.654-1.548c-1.156-2.838-2.311-5.679-3.465-8.519 c-0.017-0.042-0.037-0.082-0.065-0.145c-0.101,0.245-0.192,0.472-0.284,0.698c-1.237,3.051-2.475,6.103-3.711,9.155 c-0.466,1.153-1.351,1.815-2.538,2.045c-1.391,0.267-2.577-0.154-3.496-1.247c-0.174-0.209-0.31-0.464-0.415-0.717 c-2.128-5.22-4.248-10.442-6.37-15.665c-0.012-0.029-0.021-0.059-0.036-0.104c0.054-0.003,0.103-0.006,0.15-0.006 c1.498-0.001,2.997,0,4.495-0.004c0.12-0.001,0.176,0.03,0.222,0.146c1.557,3.846,3.117,7.691,4.679,11.536 c0.018,0.046,0.039,0.091,0.067,0.159c0.273-0.673,0.536-1.32,0.797-1.968c1.064-2.627,2.137-5.25,3.19-7.883 c0.482-1.208,1.376-1.917,2.621-2.135c1.454-0.255,2.644,0.257,3.522,1.449c0.133,0.18,0.229,0.393,0.313,0.603 c1.425,3.495,2.848,6.991,4.269,10.488c0.02,0.047,0.04,0.093,0.073,0.172c0.196-0.327,0.385-0.625,0.559-0.935 c0.783-1.397,1.323-2.886,1.614-4.461c0.242-1.312,0.304-2.634,0.187-3.962c-0.242-2.721-1.16-5.192-2.792-7.38 c-2.193-2.939-5.086-4.824-8.673-5.625c-1.553-0.346-3.124-0.405-4.705-0.257c-3.162,0.298-6.036,1.366-8.585,3.258 c-3.414,2.534-5.638,5.871-6.623,10.016c-0.417,1.76-0.546,3.547-0.384,5.348c0.417,4.601,2.359,8.444,5.804,11.517 c2.325,2.073,5.037,3.393,8.094,3.989c1.617,0.317,3.247,0.395,4.889,0.242c1-0.094,1.982-0.268,2.952-0.529 c0.04-0.01,0.081-0.018,0.128-0.028c0,1.526,0,3.047,0,4.586c-0.402,0.074-0.805,0.154-1.21,0.221 c-0.861,0.14-1.728,0.231-2.601,0.258c-0.035,0.002-0.071,0.013-0.108,0.021c-0.493,0-0.983,0-1.476,0 c-0.049-0.007-0.1-0.018-0.149-0.022c-0.315-0.019-0.629-0.033-0.945-0.058c-1.362-0.105-2.702-0.346-4.017-0.716 c-3.254-0.914-6.145-2.495-8.66-4.752c-2.195-1.971-3.926-4.29-5.176-6.963c-1.152-2.466-1.822-5.057-1.993-7.774 c-0.014-0.226-0.033-0.451-0.05-0.676c0-0.502,0-1.003,0-1.504c0.008-0.049,0.02-0.099,0.022-0.148 c0.036-1.025,0.152-2.043,0.338-3.052c0.481-2.616,1.409-5.066,2.8-7.331c2.226-3.625,5.25-6.386,9.074-8.254 c2.536-1.24,5.217-1.947,8.037-2.126c0.23-0.015,0.461-0.034,0.691-0.051C33.052,10.292,33.535,10.292,34.019,10.292z"
});
const WorkplaceIcon$1 = WorkplaceIcon;
function workplaceLink(url, { quote, hashtag }) {
  assert(url, "workplace.url");
  return "https://work.facebook.com/sharer.php" + objectToGetParams({
    u: url,
    quote,
    hashtag
  });
}
const WorkplaceShareButton = createShareButton(
  "workplace",
  workplaceLink,
  (props) => ({
    quote: props.quote,
    hashtag: props.hashtag
  }),
  {
    windowWidth: 550,
    windowHeight: 400
  }
);
const WorkplaceShareButton$1 = WorkplaceShareButton;
const XIcon = createIcon({
  color: "#000000",
  networkName: "X",
  path: "M 41.116 18.375 h 4.962 l -10.8405 12.39 l 12.753 16.86 H 38.005 l -7.821 -10.2255 L 21.235 47.625 H 16.27 l 11.595 -13.2525 L 15.631 18.375 H 25.87 l 7.0695 9.3465 z m -1.7415 26.28 h 2.7495 L 24.376 21.189 H 21.4255 z"
});
const XIcon$1 = XIcon;

//# sourceMappingURL=index.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsOEJBQThCLGdCQUFnQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBc0RFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL25vZGVfbW9kdWxlcy9kZWJ1Zy9zcmMvZGVidWcuanMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9ub2RlX21vZHVsZXMvanNvbnAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9ub2RlX21vZHVsZXMvbXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9ub2RlX21vZHVsZXMvQHN0cmFwaS9ibG9ja3MtcmVhY3QtcmVuZGVyZXIvZGlzdC9CbG9jay5tanMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9ub2RlX21vZHVsZXMvQHN0cmFwaS9ibG9ja3MtcmVhY3QtcmVuZGVyZXIvZGlzdC9CbG9ja3NSZW5kZXJlci5tanMiLCJ3ZWJwYWNrOi8vcmVhY3QtLWhvbWUvLi9ub2RlX21vZHVsZXMvQHN0cmFwaS9ibG9ja3MtcmVhY3QtcmVuZGVyZXIvZGlzdC9UZXh0Lm1qcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL25vZGVfbW9kdWxlcy9Ac3RyYXBpL2Jsb2Nrcy1yZWFjdC1yZW5kZXJlci9kaXN0L2luZGV4Lm1qcyIsIndlYnBhY2s6Ly9yZWFjdC0taG9tZS8uL25vZGVfbW9kdWxlcy9yZWFjdC1zaGFyZS9kaXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2RlYnVnJyk7XG5leHBvcnRzLmxvZyA9IGxvZztcbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZVxuICAgICAgICAgICAgICAgJiYgJ3VuZGVmaW5lZCcgIT0gdHlwZW9mIGNocm9tZS5zdG9yYWdlXG4gICAgICAgICAgICAgICAgICA/IGNocm9tZS5zdG9yYWdlLmxvY2FsXG4gICAgICAgICAgICAgICAgICA6IGxvY2Fsc3RvcmFnZSgpO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFtcbiAgJ2xpZ2h0c2VhZ3JlZW4nLFxuICAnZm9yZXN0Z3JlZW4nLFxuICAnZ29sZGVucm9kJyxcbiAgJ2RvZGdlcmJsdWUnLFxuICAnZGFya29yY2hpZCcsXG4gICdjcmltc29uJ1xuXTtcblxuLyoqXG4gKiBDdXJyZW50bHkgb25seSBXZWJLaXQtYmFzZWQgV2ViIEluc3BlY3RvcnMsIEZpcmVmb3ggPj0gdjMxLFxuICogYW5kIHRoZSBGaXJlYnVnIGV4dGVuc2lvbiAoYW55IEZpcmVmb3ggdmVyc2lvbikgYXJlIGtub3duXG4gKiB0byBzdXBwb3J0IFwiJWNcIiBDU1MgY3VzdG9taXphdGlvbnMuXG4gKlxuICogVE9ETzogYWRkIGEgYGxvY2FsU3RvcmFnZWAgdmFyaWFibGUgdG8gZXhwbGljaXRseSBlbmFibGUvZGlzYWJsZSBjb2xvcnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VDb2xvcnMoKSB7XG4gIC8vIE5COiBJbiBhbiBFbGVjdHJvbiBwcmVsb2FkIHNjcmlwdCwgZG9jdW1lbnQgd2lsbCBiZSBkZWZpbmVkIGJ1dCBub3QgZnVsbHlcbiAgLy8gaW5pdGlhbGl6ZWQuIFNpbmNlIHdlIGtub3cgd2UncmUgaW4gQ2hyb21lLCB3ZSdsbCBqdXN0IGRldGVjdCB0aGlzIGNhc2VcbiAgLy8gZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnByb2Nlc3MgJiYgd2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gaXMgd2Via2l0PyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xNjQ1OTYwNi8zNzY3NzNcbiAgLy8gZG9jdW1lbnQgaXMgdW5kZWZpbmVkIGluIHJlYWN0LW5hdGl2ZTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0LW5hdGl2ZS9wdWxsLzE2MzJcbiAgcmV0dXJuICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLldlYmtpdEFwcGVhcmFuY2UpIHx8XG4gICAgLy8gaXMgZmlyZWJ1Zz8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzk4MTIwLzM3Njc3M1xuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uc29sZSAmJiAod2luZG93LmNvbnNvbGUuZmlyZWJ1ZyB8fCAod2luZG93LmNvbnNvbGUuZXhjZXB0aW9uICYmIHdpbmRvdy5jb25zb2xlLnRhYmxlKSkpIHx8XG4gICAgLy8gaXMgZmlyZWZveCA+PSB2MzE/XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9Ub29scy9XZWJfQ29uc29sZSNTdHlsaW5nX21lc3NhZ2VzXG4gICAgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIG5hdmlnYXRvci51c2VyQWdlbnQgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLm1hdGNoKC9maXJlZm94XFwvKFxcZCspLykgJiYgcGFyc2VJbnQoUmVnRXhwLiQxLCAxMCkgPj0gMzEpIHx8XG4gICAgLy8gZG91YmxlIGNoZWNrIHdlYmtpdCBpbiB1c2VyQWdlbnQganVzdCBpbiBjYXNlIHdlIGFyZSBpbiBhIHdvcmtlclxuICAgICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvYXBwbGV3ZWJraXRcXC8oXFxkKykvKSk7XG59XG5cbi8qKlxuICogTWFwICVqIHRvIGBKU09OLnN0cmluZ2lmeSgpYCwgc2luY2Ugbm8gV2ViIEluc3BlY3RvcnMgZG8gdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycy5qID0gZnVuY3Rpb24odikge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuICdbVW5leHBlY3RlZEpTT05QYXJzZUVycm9yXTogJyArIGVyci5tZXNzYWdlO1xuICB9XG59O1xuXG5cbi8qKlxuICogQ29sb3JpemUgbG9nIGFyZ3VtZW50cyBpZiBlbmFibGVkLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZm9ybWF0QXJncyhhcmdzKSB7XG4gIHZhciB1c2VDb2xvcnMgPSB0aGlzLnVzZUNvbG9ycztcblxuICBhcmdzWzBdID0gKHVzZUNvbG9ycyA/ICclYycgOiAnJylcbiAgICArIHRoaXMubmFtZXNwYWNlXG4gICAgKyAodXNlQ29sb3JzID8gJyAlYycgOiAnICcpXG4gICAgKyBhcmdzWzBdXG4gICAgKyAodXNlQ29sb3JzID8gJyVjICcgOiAnICcpXG4gICAgKyAnKycgKyBleHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZik7XG5cbiAgaWYgKCF1c2VDb2xvcnMpIHJldHVybjtcblxuICB2YXIgYyA9ICdjb2xvcjogJyArIHRoaXMuY29sb3I7XG4gIGFyZ3Muc3BsaWNlKDEsIDAsIGMsICdjb2xvcjogaW5oZXJpdCcpXG5cbiAgLy8gdGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcbiAgLy8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuICAvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxhc3RDID0gMDtcbiAgYXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgaWYgKCclJScgPT09IG1hdGNoKSByZXR1cm47XG4gICAgaW5kZXgrKztcbiAgICBpZiAoJyVjJyA9PT0gbWF0Y2gpIHtcbiAgICAgIC8vIHdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuICAgICAgLy8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcbiAgICAgIGxhc3RDID0gaW5kZXg7XG4gICAgfVxuICB9KTtcblxuICBhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5sb2coKWAgd2hlbiBhdmFpbGFibGUuXG4gKiBOby1vcCB3aGVuIGBjb25zb2xlLmxvZ2AgaXMgbm90IGEgXCJmdW5jdGlvblwiLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gbG9nKCkge1xuICAvLyB0aGlzIGhhY2tlcnkgaXMgcmVxdWlyZWQgZm9yIElFOC85LCB3aGVyZVxuICAvLyB0aGUgYGNvbnNvbGUubG9nYCBmdW5jdGlvbiBkb2Vzbid0IGhhdmUgJ2FwcGx5J1xuICByZXR1cm4gJ29iamVjdCcgPT09IHR5cGVvZiBjb25zb2xlXG4gICAgJiYgY29uc29sZS5sb2dcbiAgICAmJiBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlLmxvZywgY29uc29sZSwgYXJndW1lbnRzKTtcbn1cblxuLyoqXG4gKiBTYXZlIGBuYW1lc3BhY2VzYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG4gIHRyeSB7XG4gICAgaWYgKG51bGwgPT0gbmFtZXNwYWNlcykge1xuICAgICAgZXhwb3J0cy5zdG9yYWdlLnJlbW92ZUl0ZW0oJ2RlYnVnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZyA9IG5hbWVzcGFjZXM7XG4gICAgfVxuICB9IGNhdGNoKGUpIHt9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgdmFyIHI7XG4gIHRyeSB7XG4gICAgciA9IGV4cG9ydHMuc3RvcmFnZS5kZWJ1ZztcbiAgfSBjYXRjaChlKSB7fVxuXG4gIC8vIElmIGRlYnVnIGlzbid0IHNldCBpbiBMUywgYW5kIHdlJ3JlIGluIEVsZWN0cm9uLCB0cnkgdG8gbG9hZCAkREVCVUdcbiAgaWYgKCFyICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAnZW52JyBpbiBwcm9jZXNzKSB7XG4gICAgciA9IHByb2Nlc3MuZW52LkRFQlVHO1xuICB9XG5cbiAgcmV0dXJuIHI7XG59XG5cbi8qKlxuICogRW5hYmxlIG5hbWVzcGFjZXMgbGlzdGVkIGluIGBsb2NhbFN0b3JhZ2UuZGVidWdgIGluaXRpYWxseS5cbiAqL1xuXG5leHBvcnRzLmVuYWJsZShsb2FkKCkpO1xuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gd2luZG93LmxvY2FsU3RvcmFnZTtcbiAgfSBjYXRjaCAoZSkge31cbn1cbiIsIlxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21tb24gbG9naWMgZm9yIGJvdGggdGhlIE5vZGUuanMgYW5kIHdlYiBicm93c2VyXG4gKiBpbXBsZW1lbnRhdGlvbnMgb2YgYGRlYnVnKClgLlxuICpcbiAqIEV4cG9zZSBgZGVidWcoKWAgYXMgdGhlIG1vZHVsZS5cbiAqL1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVEZWJ1Zy5kZWJ1ZyA9IGNyZWF0ZURlYnVnWydkZWZhdWx0J10gPSBjcmVhdGVEZWJ1ZztcbmV4cG9ydHMuY29lcmNlID0gY29lcmNlO1xuZXhwb3J0cy5kaXNhYmxlID0gZGlzYWJsZTtcbmV4cG9ydHMuZW5hYmxlID0gZW5hYmxlO1xuZXhwb3J0cy5lbmFibGVkID0gZW5hYmxlZDtcbmV4cG9ydHMuaHVtYW5pemUgPSByZXF1aXJlKCdtcycpO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50bHkgYWN0aXZlIGRlYnVnIG1vZGUgbmFtZXMsIGFuZCBuYW1lcyB0byBza2lwLlxuICovXG5cbmV4cG9ydHMubmFtZXMgPSBbXTtcbmV4cG9ydHMuc2tpcHMgPSBbXTtcblxuLyoqXG4gKiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG4gKlxuICogVmFsaWQga2V5IG5hbWVzIGFyZSBhIHNpbmdsZSwgbG93ZXIgb3IgdXBwZXItY2FzZSBsZXR0ZXIsIGkuZS4gXCJuXCIgYW5kIFwiTlwiLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0dGVycyA9IHt9O1xuXG4vKipcbiAqIFByZXZpb3VzIGxvZyB0aW1lc3RhbXAuXG4gKi9cblxudmFyIHByZXZUaW1lO1xuXG4vKipcbiAqIFNlbGVjdCBhIGNvbG9yLlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gc2VsZWN0Q29sb3IobmFtZXNwYWNlKSB7XG4gIHZhciBoYXNoID0gMCwgaTtcblxuICBmb3IgKGkgaW4gbmFtZXNwYWNlKSB7XG4gICAgaGFzaCAgPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIG5hbWVzcGFjZS5jaGFyQ29kZUF0KGkpO1xuICAgIGhhc2ggfD0gMDsgLy8gQ29udmVydCB0byAzMmJpdCBpbnRlZ2VyXG4gIH1cblxuICByZXR1cm4gZXhwb3J0cy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBleHBvcnRzLmNvbG9ycy5sZW5ndGhdO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVEZWJ1ZyhuYW1lc3BhY2UpIHtcblxuICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAvLyBkaXNhYmxlZD9cbiAgICBpZiAoIWRlYnVnLmVuYWJsZWQpIHJldHVybjtcblxuICAgIHZhciBzZWxmID0gZGVidWc7XG5cbiAgICAvLyBzZXQgYGRpZmZgIHRpbWVzdGFtcFxuICAgIHZhciBjdXJyID0gK25ldyBEYXRlKCk7XG4gICAgdmFyIG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcbiAgICBzZWxmLmRpZmYgPSBtcztcbiAgICBzZWxmLnByZXYgPSBwcmV2VGltZTtcbiAgICBzZWxmLmN1cnIgPSBjdXJyO1xuICAgIHByZXZUaW1lID0gY3VycjtcblxuICAgIC8vIHR1cm4gdGhlIGBhcmd1bWVudHNgIGludG8gYSBwcm9wZXIgQXJyYXlcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuXG4gICAgYXJnc1swXSA9IGV4cG9ydHMuY29lcmNlKGFyZ3NbMF0pO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgYXJnc1swXSkge1xuICAgICAgLy8gYW55dGhpbmcgZWxzZSBsZXQncyBpbnNwZWN0IHdpdGggJU9cbiAgICAgIGFyZ3MudW5zaGlmdCgnJU8nKTtcbiAgICB9XG5cbiAgICAvLyBhcHBseSBhbnkgYGZvcm1hdHRlcnNgIHRyYW5zZm9ybWF0aW9uc1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgYXJnc1swXSA9IGFyZ3NbMF0ucmVwbGFjZSgvJShbYS16QS1aJV0pL2csIGZ1bmN0aW9uKG1hdGNoLCBmb3JtYXQpIHtcbiAgICAgIC8vIGlmIHdlIGVuY291bnRlciBhbiBlc2NhcGVkICUgdGhlbiBkb24ndCBpbmNyZWFzZSB0aGUgYXJyYXkgaW5kZXhcbiAgICAgIGlmIChtYXRjaCA9PT0gJyUlJykgcmV0dXJuIG1hdGNoO1xuICAgICAgaW5kZXgrKztcbiAgICAgIHZhciBmb3JtYXR0ZXIgPSBleHBvcnRzLmZvcm1hdHRlcnNbZm9ybWF0XTtcbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgZm9ybWF0dGVyKSB7XG4gICAgICAgIHZhciB2YWwgPSBhcmdzW2luZGV4XTtcbiAgICAgICAgbWF0Y2ggPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCB2YWwpO1xuXG4gICAgICAgIC8vIG5vdyB3ZSBuZWVkIHRvIHJlbW92ZSBgYXJnc1tpbmRleF1gIHNpbmNlIGl0J3MgaW5saW5lZCBpbiB0aGUgYGZvcm1hdGBcbiAgICAgICAgYXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBpbmRleC0tO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1hdGNoO1xuICAgIH0pO1xuXG4gICAgLy8gYXBwbHkgZW52LXNwZWNpZmljIGZvcm1hdHRpbmcgKGNvbG9ycywgZXRjLilcbiAgICBleHBvcnRzLmZvcm1hdEFyZ3MuY2FsbChzZWxmLCBhcmdzKTtcblxuICAgIHZhciBsb2dGbiA9IGRlYnVnLmxvZyB8fCBleHBvcnRzLmxvZyB8fCBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuICAgIGxvZ0ZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICB9XG5cbiAgZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuICBkZWJ1Zy5lbmFibGVkID0gZXhwb3J0cy5lbmFibGVkKG5hbWVzcGFjZSk7XG4gIGRlYnVnLnVzZUNvbG9ycyA9IGV4cG9ydHMudXNlQ29sb3JzKCk7XG4gIGRlYnVnLmNvbG9yID0gc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblxuICAvLyBlbnYtc3BlY2lmaWMgaW5pdGlhbGl6YXRpb24gbG9naWMgZm9yIGRlYnVnIGluc3RhbmNlc1xuICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIGV4cG9ydHMuaW5pdCkge1xuICAgIGV4cG9ydHMuaW5pdChkZWJ1Zyk7XG4gIH1cblxuICByZXR1cm4gZGVidWc7XG59XG5cbi8qKlxuICogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuICogc2VwYXJhdGVkIGJ5IGEgY29sb24gYW5kIHdpbGRjYXJkcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBlbmFibGUobmFtZXNwYWNlcykge1xuICBleHBvcnRzLnNhdmUobmFtZXNwYWNlcyk7XG5cbiAgZXhwb3J0cy5uYW1lcyA9IFtdO1xuICBleHBvcnRzLnNraXBzID0gW107XG5cbiAgdmFyIHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcbiAgdmFyIGxlbiA9IHNwbGl0Lmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKCFzcGxpdFtpXSkgY29udGludWU7IC8vIGlnbm9yZSBlbXB0eSBzdHJpbmdzXG4gICAgbmFtZXNwYWNlcyA9IHNwbGl0W2ldLnJlcGxhY2UoL1xcKi9nLCAnLio/Jyk7XG4gICAgaWYgKG5hbWVzcGFjZXNbMF0gPT09ICctJykge1xuICAgICAgZXhwb3J0cy5za2lwcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcy5zdWJzdHIoMSkgKyAnJCcpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZXhwb3J0cy5uYW1lcy5wdXNoKG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlcyArICckJykpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIERpc2FibGUgZGVidWcgb3V0cHV0LlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgZXhwb3J0cy5lbmFibGUoJycpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gbW9kZSBuYW1lIGlzIGVuYWJsZWQsIGZhbHNlIG90aGVyd2lzZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG4gIHZhciBpLCBsZW47XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAoaSA9IDAsIGxlbiA9IGV4cG9ydHMubmFtZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBpZiAoZXhwb3J0cy5uYW1lc1tpXS50ZXN0KG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIENvZXJjZSBgdmFsYC5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWxcbiAqIEByZXR1cm4ge01peGVkfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHJldHVybiB2YWwuc3RhY2sgfHwgdmFsLm1lc3NhZ2U7XG4gIHJldHVybiB2YWw7XG59XG4iLCIvKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xuXG52YXIgZGVidWcgPSByZXF1aXJlKCdkZWJ1ZycpKCdqc29ucCcpO1xuXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0ganNvbnA7XG5cbi8qKlxuICogQ2FsbGJhY2sgaW5kZXguXG4gKi9cblxudmFyIGNvdW50ID0gMDtcblxuLyoqXG4gKiBOb29wIGZ1bmN0aW9uLlxuICovXG5cbmZ1bmN0aW9uIG5vb3AoKXt9XG5cbi8qKlxuICogSlNPTlAgaGFuZGxlclxuICpcbiAqIE9wdGlvbnM6XG4gKiAgLSBwYXJhbSB7U3RyaW5nfSBxcyBwYXJhbWV0ZXIgKGBjYWxsYmFja2ApXG4gKiAgLSBwcmVmaXgge1N0cmluZ30gcXMgcGFyYW1ldGVyIChgX19qcGApXG4gKiAgLSBuYW1lIHtTdHJpbmd9IHFzIHBhcmFtZXRlciAoYHByZWZpeGAgKyBpbmNyKVxuICogIC0gdGltZW91dCB7TnVtYmVyfSBob3cgbG9uZyBhZnRlciBhIHRpbWVvdXQgZXJyb3IgaXMgZW1pdHRlZCAoYDYwMDAwYClcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge09iamVjdHxGdW5jdGlvbn0gb3B0aW9uYWwgb3B0aW9ucyAvIGNhbGxiYWNrXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvcHRpb25hbCBjYWxsYmFja1xuICovXG5cbmZ1bmN0aW9uIGpzb25wKHVybCwgb3B0cywgZm4pe1xuICBpZiAoJ2Z1bmN0aW9uJyA9PSB0eXBlb2Ygb3B0cykge1xuICAgIGZuID0gb3B0cztcbiAgICBvcHRzID0ge307XG4gIH1cbiAgaWYgKCFvcHRzKSBvcHRzID0ge307XG5cbiAgdmFyIHByZWZpeCA9IG9wdHMucHJlZml4IHx8ICdfX2pwJztcblxuICAvLyB1c2UgdGhlIGNhbGxiYWNrIG5hbWUgdGhhdCB3YXMgcGFzc2VkIGlmIG9uZSB3YXMgcHJvdmlkZWQuXG4gIC8vIG90aGVyd2lzZSBnZW5lcmF0ZSBhIHVuaXF1ZSBuYW1lIGJ5IGluY3JlbWVudGluZyBvdXIgY291bnRlci5cbiAgdmFyIGlkID0gb3B0cy5uYW1lIHx8IChwcmVmaXggKyAoY291bnQrKykpO1xuXG4gIHZhciBwYXJhbSA9IG9wdHMucGFyYW0gfHwgJ2NhbGxiYWNrJztcbiAgdmFyIHRpbWVvdXQgPSBudWxsICE9IG9wdHMudGltZW91dCA/IG9wdHMudGltZW91dCA6IDYwMDAwO1xuICB2YXIgZW5jID0gZW5jb2RlVVJJQ29tcG9uZW50O1xuICB2YXIgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdIHx8IGRvY3VtZW50LmhlYWQ7XG4gIHZhciBzY3JpcHQ7XG4gIHZhciB0aW1lcjtcblxuXG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICBjbGVhbnVwKCk7XG4gICAgICBpZiAoZm4pIGZuKG5ldyBFcnJvcignVGltZW91dCcpKTtcbiAgICB9LCB0aW1lb3V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsZWFudXAoKXtcbiAgICBpZiAoc2NyaXB0LnBhcmVudE5vZGUpIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG4gICAgd2luZG93W2lkXSA9IG5vb3A7XG4gICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCl7XG4gICAgaWYgKHdpbmRvd1tpZF0pIHtcbiAgICAgIGNsZWFudXAoKTtcbiAgICB9XG4gIH1cblxuICB3aW5kb3dbaWRdID0gZnVuY3Rpb24oZGF0YSl7XG4gICAgZGVidWcoJ2pzb25wIGdvdCcsIGRhdGEpO1xuICAgIGNsZWFudXAoKTtcbiAgICBpZiAoZm4pIGZuKG51bGwsIGRhdGEpO1xuICB9O1xuXG4gIC8vIGFkZCBxcyBjb21wb25lbnRcbiAgdXJsICs9ICh+dXJsLmluZGV4T2YoJz8nKSA/ICcmJyA6ICc/JykgKyBwYXJhbSArICc9JyArIGVuYyhpZCk7XG4gIHVybCA9IHVybC5yZXBsYWNlKCc/JicsICc/Jyk7XG5cbiAgZGVidWcoJ2pzb25wIHJlcSBcIiVzXCInLCB1cmwpO1xuXG4gIC8vIGNyZWF0ZSBzY3JpcHRcbiAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gIHNjcmlwdC5zcmMgPSB1cmw7XG4gIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzY3JpcHQsIHRhcmdldCk7XG5cbiAgcmV0dXJuIGNhbmNlbDtcbn1cbiIsIi8qKlxuICogSGVscGVycy5cbiAqL1xuXG52YXIgcyA9IDEwMDA7XG52YXIgbSA9IHMgKiA2MDtcbnZhciBoID0gbSAqIDYwO1xudmFyIGQgPSBoICogMjQ7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzTmFOKHZhbCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMubG9uZyA/IGZtdExvbmcodmFsKSA6IGZtdFNob3J0KHZhbCk7XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgICd2YWwgaXMgbm90IGEgbm9uLWVtcHR5IHN0cmluZyBvciBhIHZhbGlkIG51bWJlci4gdmFsPScgK1xuICAgICAgSlNPTi5zdHJpbmdpZnkodmFsKVxuICApO1xufTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gYHN0cmAgYW5kIHJldHVybiBtaWxsaXNlY29uZHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7TnVtYmVyfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gcGFyc2Uoc3RyKSB7XG4gIHN0ciA9IFN0cmluZyhzdHIpO1xuICBpZiAoc3RyLmxlbmd0aCA+IDEwMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbWF0Y2ggPSAvXigoPzpcXGQrKT9cXC4/XFxkKykgKihtaWxsaXNlY29uZHM/fG1zZWNzP3xtc3xzZWNvbmRzP3xzZWNzP3xzfG1pbnV0ZXM/fG1pbnM/fG18aG91cnM/fGhycz98aHxkYXlzP3xkfHllYXJzP3x5cnM/fHkpPyQvaS5leGVjKFxuICAgIHN0clxuICApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBuID0gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIHZhciB0eXBlID0gKG1hdGNoWzJdIHx8ICdtcycpLnRvTG93ZXJDYXNlKCk7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3llYXJzJzpcbiAgICBjYXNlICd5ZWFyJzpcbiAgICBjYXNlICd5cnMnOlxuICAgIGNhc2UgJ3lyJzpcbiAgICBjYXNlICd5JzpcbiAgICAgIHJldHVybiBuICogeTtcbiAgICBjYXNlICdkYXlzJzpcbiAgICBjYXNlICdkYXknOlxuICAgIGNhc2UgJ2QnOlxuICAgICAgcmV0dXJuIG4gKiBkO1xuICAgIGNhc2UgJ2hvdXJzJzpcbiAgICBjYXNlICdob3VyJzpcbiAgICBjYXNlICdocnMnOlxuICAgIGNhc2UgJ2hyJzpcbiAgICBjYXNlICdoJzpcbiAgICAgIHJldHVybiBuICogaDtcbiAgICBjYXNlICdtaW51dGVzJzpcbiAgICBjYXNlICdtaW51dGUnOlxuICAgIGNhc2UgJ21pbnMnOlxuICAgIGNhc2UgJ21pbic6XG4gICAgY2FzZSAnbSc6XG4gICAgICByZXR1cm4gbiAqIG07XG4gICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgY2FzZSAnc2Vjb25kJzpcbiAgICBjYXNlICdzZWNzJzpcbiAgICBjYXNlICdzZWMnOlxuICAgIGNhc2UgJ3MnOlxuICAgICAgcmV0dXJuIG4gKiBzO1xuICAgIGNhc2UgJ21pbGxpc2Vjb25kcyc6XG4gICAgY2FzZSAnbWlsbGlzZWNvbmQnOlxuICAgIGNhc2UgJ21zZWNzJzpcbiAgICBjYXNlICdtc2VjJzpcbiAgICBjYXNlICdtcyc6XG4gICAgICByZXR1cm4gbjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuXG4vKipcbiAqIFNob3J0IGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdFNob3J0KG1zKSB7XG4gIGlmIChtcyA+PSBkKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBkKSArICdkJztcbiAgfVxuICBpZiAobXMgPj0gaCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gaCkgKyAnaCc7XG4gIH1cbiAgaWYgKG1zID49IG0pIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIG0pICsgJ20nO1xuICB9XG4gIGlmIChtcyA+PSBzKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBzKSArICdzJztcbiAgfVxuICByZXR1cm4gbXMgKyAnbXMnO1xufVxuXG4vKipcbiAqIExvbmcgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10TG9uZyhtcykge1xuICByZXR1cm4gcGx1cmFsKG1zLCBkLCAnZGF5JykgfHxcbiAgICBwbHVyYWwobXMsIGgsICdob3VyJykgfHxcbiAgICBwbHVyYWwobXMsIG0sICdtaW51dGUnKSB8fFxuICAgIHBsdXJhbChtcywgcywgJ3NlY29uZCcpIHx8XG4gICAgbXMgKyAnIG1zJztcbn1cblxuLyoqXG4gKiBQbHVyYWxpemF0aW9uIGhlbHBlci5cbiAqL1xuXG5mdW5jdGlvbiBwbHVyYWwobXMsIG4sIG5hbWUpIHtcbiAgaWYgKG1zIDwgbikge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAobXMgPCBuICogMS41KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IobXMgLyBuKSArICcgJyArIG5hbWU7XG4gIH1cbiAgcmV0dXJuIE1hdGguY2VpbChtcyAvIG4pICsgJyAnICsgbmFtZSArICdzJztcbn1cbiIsImltcG9ydCB7IGpzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlQ29tcG9uZW50c0NvbnRleHQgfSBmcm9tIFwiLi9CbG9ja3NSZW5kZXJlci5tanNcIjtcbmltcG9ydCB7IFRleHQgfSBmcm9tIFwiLi9UZXh0Lm1qc1wiO1xuY29uc3Qgdm9pZFR5cGVzID0gW1wiaW1hZ2VcIl07XG5jb25zdCBhdWdtZW50UHJvcHMgPSAoY29udGVudCkgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuOiBjaGlsZHJlbk5vZGVzLCB0eXBlLCAuLi5wcm9wcyB9ID0gY29udGVudDtcbiAgaWYgKHR5cGUgPT09IFwiY29kZVwiKSB7XG4gICAgY29uc3QgZ2V0UGxhaW5UZXh0ID0gKGNoaWxkcmVuKSA9PiB7XG4gICAgICByZXR1cm4gY2hpbGRyZW4ucmVkdWNlKChjdXJyZW50UGxhaW5UZXh0LCBub2RlKSA9PiB7XG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgcmV0dXJuIGN1cnJlbnRQbGFpblRleHQuY29uY2F0KG5vZGUudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vZGUudHlwZSA9PT0gXCJsaW5rXCIpIHtcbiAgICAgICAgICByZXR1cm4gY3VycmVudFBsYWluVGV4dC5jb25jYXQoZ2V0UGxhaW5UZXh0KG5vZGUuY2hpbGRyZW4pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycmVudFBsYWluVGV4dDtcbiAgICAgIH0sIFwiXCIpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnByb3BzLFxuICAgICAgcGxhaW5UZXh0OiBnZXRQbGFpblRleHQoY29udGVudC5jaGlsZHJlbilcbiAgICB9O1xuICB9XG4gIHJldHVybiBwcm9wcztcbn07XG5jb25zdCBCbG9jayA9ICh7IGNvbnRlbnQgfSkgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuOiBjaGlsZHJlbk5vZGVzLCB0eXBlLCAuLi5wcm9wcyB9ID0gY29udGVudDtcbiAgY29uc3QgeyBibG9ja3MsIG1pc3NpbmdCbG9ja1R5cGVzIH0gPSB1c2VDb21wb25lbnRzQ29udGV4dCgpO1xuICBjb25zdCBCbG9ja0NvbXBvbmVudCA9IGJsb2Nrc1t0eXBlXTtcbiAgaWYgKCFCbG9ja0NvbXBvbmVudCkge1xuICAgIGlmICghbWlzc2luZ0Jsb2NrVHlwZXMuaW5jbHVkZXModHlwZSkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW0BzdHJhcGkvYmxvY2stcmVhY3QtcmVuZGVyZXJdIE5vIGNvbXBvbmVudCBmb3VuZCBmb3IgYmxvY2sgdHlwZSBcIiR7dHlwZX1cImApO1xuICAgICAgbWlzc2luZ0Jsb2NrVHlwZXMucHVzaCh0eXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHZvaWRUeXBlcy5pbmNsdWRlcyh0eXBlKSkge1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KEJsb2NrQ29tcG9uZW50LCB7IC4uLnByb3BzIH0pO1xuICB9XG4gIGNvbnN0IGF1Z21lbnRlZFByb3BzID0gYXVnbWVudFByb3BzKGNvbnRlbnQpO1xuICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChCbG9ja0NvbXBvbmVudCwgeyAuLi5hdWdtZW50ZWRQcm9wcywgY2hpbGRyZW46IGNoaWxkcmVuTm9kZXMubWFwKChjaGlsZE5vZGUsIGluZGV4KSA9PiB7XG4gICAgaWYgKGNoaWxkTm9kZS50eXBlID09PSBcInRleHRcIikge1xuICAgICAgY29uc3QgeyB0eXBlOiBfdHlwZSwgLi4uY2hpbGROb2RlUHJvcHMgfSA9IGNoaWxkTm9kZTtcbiAgICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8gY3JlYXRlRWxlbWVudChUZXh0LCB7IC4uLmNoaWxkTm9kZVByb3BzLCBrZXk6IGluZGV4IH0pO1xuICAgIH1cbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChCbG9jaywgeyBjb250ZW50OiBjaGlsZE5vZGUgfSwgaW5kZXgpO1xuICB9KSB9KTtcbn07XG5leHBvcnQge1xuICBCbG9ja1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJsb2NrLm1qcy5tYXBcbiIsIid1c2UgY2xpZW50JztcbmltcG9ydCB7IGpzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCbG9jayB9IGZyb20gXCIuL0Jsb2NrLm1qc1wiO1xuY29uc3QgZGVmYXVsdENvbXBvbmVudHMgPSB7XG4gIGJsb2Nrczoge1xuICAgIHBhcmFncmFwaDogKHByb3BzKSA9PiAvKiBAX19QVVJFX18gKi8ganN4KFwicFwiLCB7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KSxcbiAgICBxdW90ZTogKHByb3BzKSA9PiAvKiBAX19QVVJFX18gKi8ganN4KFwiYmxvY2txdW90ZVwiLCB7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KSxcbiAgICBjb2RlOiAocHJvcHMpID0+IC8qIEBfX1BVUkVfXyAqLyBqc3goXCJwcmVcIiwgeyBjaGlsZHJlbjogLyogQF9fUFVSRV9fICovIGpzeChcImNvZGVcIiwgeyBjaGlsZHJlbjogcHJvcHMucGxhaW5UZXh0IH0pIH0pLFxuICAgIGhlYWRpbmc6ICh7IGxldmVsLCBjaGlsZHJlbiB9KSA9PiB7XG4gICAgICBzd2l0Y2ggKGxldmVsKSB7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcImgxXCIsIHsgY2hpbGRyZW4gfSk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcImgyXCIsIHsgY2hpbGRyZW4gfSk7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcImgzXCIsIHsgY2hpbGRyZW4gfSk7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcImg0XCIsIHsgY2hpbGRyZW4gfSk7XG4gICAgICAgIGNhc2UgNTpcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcImg1XCIsIHsgY2hpbGRyZW4gfSk7XG4gICAgICAgIGNhc2UgNjpcbiAgICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcImg2XCIsIHsgY2hpbGRyZW4gfSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBsaW5rOiAocHJvcHMpID0+IC8qIEBfX1BVUkVfXyAqLyBqc3goXCJhXCIsIHsgaHJlZjogcHJvcHMudXJsLCBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW4gfSksXG4gICAgbGlzdDogKHByb3BzKSA9PiB7XG4gICAgICBpZiAocHJvcHMuZm9ybWF0ID09PSBcIm9yZGVyZWRcIikge1xuICAgICAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeChcIm9sXCIsIHsgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJ1bFwiLCB7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KTtcbiAgICB9LFxuICAgIFwibGlzdC1pdGVtXCI6IChwcm9wcykgPT4gLyogQF9fUFVSRV9fICovIGpzeChcImxpXCIsIHsgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pLFxuICAgIGltYWdlOiAocHJvcHMpID0+IC8qIEBfX1BVUkVfXyAqLyBqc3goXCJpbWdcIiwgeyBzcmM6IHByb3BzLmltYWdlLnVybCwgYWx0OiBwcm9wcy5pbWFnZS5hbHRlcm5hdGl2ZVRleHQgfHwgdm9pZCAwIH0pXG4gIH0sXG4gIG1vZGlmaWVyczoge1xuICAgIGJvbGQ6IChwcm9wcykgPT4gLyogQF9fUFVSRV9fICovIGpzeChcInN0cm9uZ1wiLCB7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KSxcbiAgICBpdGFsaWM6IChwcm9wcykgPT4gLyogQF9fUFVSRV9fICovIGpzeChcImVtXCIsIHsgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuIH0pLFxuICAgIHVuZGVybGluZTogKHByb3BzKSA9PiAvKiBAX19QVVJFX18gKi8ganN4KFwidVwiLCB7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KSxcbiAgICBzdHJpa2V0aHJvdWdoOiAocHJvcHMpID0+IC8qIEBfX1BVUkVfXyAqLyBqc3goXCJkZWxcIiwgeyBjaGlsZHJlbjogcHJvcHMuY2hpbGRyZW4gfSksXG4gICAgY29kZTogKHByb3BzKSA9PiAvKiBAX19QVVJFX18gKi8ganN4KFwiY29kZVwiLCB7IGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbiB9KVxuICB9LFxuICBtaXNzaW5nQmxvY2tUeXBlczogW10sXG4gIG1pc3NpbmdNb2RpZmllclR5cGVzOiBbXVxufTtcbmNvbnN0IENvbXBvbmVudHNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChkZWZhdWx0Q29tcG9uZW50cyk7XG5jb25zdCBDb21wb25lbnRzUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiwgdmFsdWUgPSBkZWZhdWx0Q29tcG9uZW50cyB9KSA9PiB7XG4gIGNvbnN0IG1lbW9pemVkVmFsdWUgPSBSZWFjdC51c2VNZW1vKCgpID0+IHZhbHVlLCBbdmFsdWVdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goQ29tcG9uZW50c0NvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IG1lbW9pemVkVmFsdWUsIGNoaWxkcmVuIH0pO1xufTtcbmZ1bmN0aW9uIHVzZUNvbXBvbmVudHNDb250ZXh0KCkge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChDb21wb25lbnRzQ29udGV4dCk7XG59XG5jb25zdCBCbG9ja3NSZW5kZXJlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBibG9ja3MgPSB7XG4gICAgLi4uZGVmYXVsdENvbXBvbmVudHMuYmxvY2tzLFxuICAgIC4uLnByb3BzLmJsb2Nrc1xuICB9O1xuICBjb25zdCBtb2RpZmllcnMgPSB7XG4gICAgLi4uZGVmYXVsdENvbXBvbmVudHMubW9kaWZpZXJzLFxuICAgIC4uLnByb3BzLm1vZGlmaWVyc1xuICB9O1xuICBjb25zdCBtaXNzaW5nQmxvY2tUeXBlcyA9IFJlYWN0LnVzZVJlZihbXSk7XG4gIGNvbnN0IG1pc3NpbmdNb2RpZmllclR5cGVzID0gUmVhY3QudXNlUmVmKFtdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goXG4gICAgQ29tcG9uZW50c1Byb3ZpZGVyLFxuICAgIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIGJsb2NrcyxcbiAgICAgICAgbW9kaWZpZXJzLFxuICAgICAgICBtaXNzaW5nQmxvY2tUeXBlczogbWlzc2luZ0Jsb2NrVHlwZXMuY3VycmVudCxcbiAgICAgICAgbWlzc2luZ01vZGlmaWVyVHlwZXM6IG1pc3NpbmdNb2RpZmllclR5cGVzLmN1cnJlbnRcbiAgICAgIH0sXG4gICAgICBjaGlsZHJlbjogcHJvcHMuY29udGVudC5tYXAoKGNvbnRlbnQsIGluZGV4KSA9PiAvKiBAX19QVVJFX18gKi8ganN4KEJsb2NrLCB7IGNvbnRlbnQgfSwgaW5kZXgpKVxuICAgIH1cbiAgKTtcbn07XG5leHBvcnQge1xuICBCbG9ja3NSZW5kZXJlcixcbiAgQ29tcG9uZW50c1Byb3ZpZGVyLFxuICB1c2VDb21wb25lbnRzQ29udGV4dFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJsb2Nrc1JlbmRlcmVyLm1qcy5tYXBcbiIsImltcG9ydCB7IGpzeCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUNvbXBvbmVudHNDb250ZXh0IH0gZnJvbSBcIi4vQmxvY2tzUmVuZGVyZXIubWpzXCI7XG5jb25zdCBUZXh0ID0gKHsgdGV4dCwgLi4ubW9kaWZpZXJzIH0pID0+IHtcbiAgY29uc3QgeyBtb2RpZmllcnM6IG1vZGlmaWVyQ29tcG9uZW50cywgbWlzc2luZ01vZGlmaWVyVHlwZXMgfSA9IHVzZUNvbXBvbmVudHNDb250ZXh0KCk7XG4gIGNvbnN0IG1vZGlmaWVyTmFtZXMgPSBPYmplY3Qua2V5cyhtb2RpZmllcnMpO1xuICByZXR1cm4gbW9kaWZpZXJOYW1lcy5yZWR1Y2UoXG4gICAgKGNoaWxkcmVuLCBtb2RpZmllck5hbWUpID0+IHtcbiAgICAgIGlmICghbW9kaWZpZXJzW21vZGlmaWVyTmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgfVxuICAgICAgY29uc3QgTW9kaWZpZXJDb21wb25lbnQgPSBtb2RpZmllckNvbXBvbmVudHNbbW9kaWZpZXJOYW1lXTtcbiAgICAgIGlmICghTW9kaWZpZXJDb21wb25lbnQpIHtcbiAgICAgICAgaWYgKCFtaXNzaW5nTW9kaWZpZXJUeXBlcy5pbmNsdWRlcyhtb2RpZmllck5hbWUpKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFtAc3RyYXBpL2Jsb2NrLXJlYWN0LXJlbmRlcmVyXSBObyBjb21wb25lbnQgZm91bmQgZm9yIG1vZGlmaWVyIFwiJHttb2RpZmllck5hbWV9XCJgXG4gICAgICAgICAgKTtcbiAgICAgICAgICBtaXNzaW5nTW9kaWZpZXJUeXBlcy5wdXNoKG1vZGlmaWVyTmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkcmVuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goTW9kaWZpZXJDb21wb25lbnQsIHsgY2hpbGRyZW4gfSk7XG4gICAgfSxcbiAgICAvLyBCeSBkZWZhdWx0LCByZXR1cm4gdGhlIHRleHQgd2l0aG91dCBhbnkgd3JhcHBlciB0byBhdm9pZCB1c2VsZXNzIG5lc3RpbmdcbiAgICAvKiBAX19QVVJFX18gKi8ganN4KEZyYWdtZW50LCB7IGNoaWxkcmVuOiB0ZXh0IH0pXG4gICk7XG59O1xuZXhwb3J0IHtcbiAgVGV4dFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRleHQubWpzLm1hcFxuIiwiaW1wb3J0IHsgQmxvY2tzUmVuZGVyZXIgfSBmcm9tIFwiLi9CbG9ja3NSZW5kZXJlci5tanNcIjtcbmV4cG9ydCB7XG4gIEJsb2Nrc1JlbmRlcmVyXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcFxuIiwidmFyIF9fZGVmUHJvcCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcbnZhciBfX2RlZlByb3BzID0gT2JqZWN0LmRlZmluZVByb3BlcnRpZXM7XG52YXIgX19nZXRPd25Qcm9wRGVzY3MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycztcbnZhciBfX2dldE93blByb3BTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBfX2hhc093blByb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIF9fcHJvcElzRW51bSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgX19kZWZOb3JtYWxQcm9wID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ga2V5IGluIG9iaiA/IF9fZGVmUHJvcChvYmosIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZSB9KSA6IG9ialtrZXldID0gdmFsdWU7XG52YXIgX19zcHJlYWRWYWx1ZXMgPSAoYSwgYikgPT4ge1xuICBmb3IgKHZhciBwcm9wIGluIGIgfHwgKGIgPSB7fSkpXG4gICAgaWYgKF9faGFzT3duUHJvcC5jYWxsKGIsIHByb3ApKVxuICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICBpZiAoX19nZXRPd25Qcm9wU3ltYm9scylcbiAgICBmb3IgKHZhciBwcm9wIG9mIF9fZ2V0T3duUHJvcFN5bWJvbHMoYikpIHtcbiAgICAgIGlmIChfX3Byb3BJc0VudW0uY2FsbChiLCBwcm9wKSlcbiAgICAgICAgX19kZWZOb3JtYWxQcm9wKGEsIHByb3AsIGJbcHJvcF0pO1xuICAgIH1cbiAgcmV0dXJuIGE7XG59O1xudmFyIF9fc3ByZWFkUHJvcHMgPSAoYSwgYikgPT4gX19kZWZQcm9wcyhhLCBfX2dldE93blByb3BEZXNjcyhiKSk7XG52YXIgX19vYmpSZXN0ID0gKHNvdXJjZSwgZXhjbHVkZSkgPT4ge1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIGZvciAodmFyIHByb3AgaW4gc291cmNlKVxuICAgIGlmIChfX2hhc093blByb3AuY2FsbChzb3VyY2UsIHByb3ApICYmIGV4Y2x1ZGUuaW5kZXhPZihwcm9wKSA8IDApXG4gICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gIGlmIChzb3VyY2UgIT0gbnVsbCAmJiBfX2dldE93blByb3BTeW1ib2xzKVxuICAgIGZvciAodmFyIHByb3Agb2YgX19nZXRPd25Qcm9wU3ltYm9scyhzb3VyY2UpKSB7XG4gICAgICBpZiAoZXhjbHVkZS5pbmRleE9mKHByb3ApIDwgMCAmJiBfX3Byb3BJc0VudW0uY2FsbChzb3VyY2UsIHByb3ApKVxuICAgICAgICB0YXJnZXRbcHJvcF0gPSBzb3VyY2VbcHJvcF07XG4gICAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbmltcG9ydCB7IGpzeHMsIGpzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGN4IGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQganNvbnAgZnJvbSBcImpzb25wXCI7XG5mdW5jdGlvbiBjcmVhdGVJY29uKGljb25Db25maWcpIHtcbiAgY29uc3QgSWNvbiA9IChfYSkgPT4ge1xuICAgIHZhciBfYiA9IF9hLCB7XG4gICAgICBiZ1N0eWxlID0ge30sXG4gICAgICBib3JkZXJSYWRpdXMgPSAwLFxuICAgICAgaWNvbkZpbGxDb2xvciA9IFwid2hpdGVcIixcbiAgICAgIHJvdW5kID0gZmFsc2UsXG4gICAgICBzaXplID0gNjRcbiAgICB9ID0gX2IsIHJlc3QgPSBfX29ialJlc3QoX2IsIFtcbiAgICAgIFwiYmdTdHlsZVwiLFxuICAgICAgXCJib3JkZXJSYWRpdXNcIixcbiAgICAgIFwiaWNvbkZpbGxDb2xvclwiLFxuICAgICAgXCJyb3VuZFwiLFxuICAgICAgXCJzaXplXCJcbiAgICBdKTtcbiAgICByZXR1cm4gLyogQF9fUFVSRV9fICovIGpzeHMoXCJzdmdcIiwgX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7IHZpZXdCb3g6IFwiMCAwIDY0IDY0XCIsIHdpZHRoOiBzaXplLCBoZWlnaHQ6IHNpemUgfSwgcmVzdCksIHsgY2hpbGRyZW46IFtcbiAgICAgIHJvdW5kID8gLyogQF9fUFVSRV9fICovIGpzeChcImNpcmNsZVwiLCB7IGN4OiBcIjMyXCIsIGN5OiBcIjMyXCIsIHI6IFwiMzJcIiwgZmlsbDogaWNvbkNvbmZpZy5jb2xvciwgc3R5bGU6IGJnU3R5bGUgfSkgOiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgICAgICBcInJlY3RcIixcbiAgICAgICAge1xuICAgICAgICAgIHdpZHRoOiBcIjY0XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjY0XCIsXG4gICAgICAgICAgcng6IGJvcmRlclJhZGl1cyxcbiAgICAgICAgICByeTogYm9yZGVyUmFkaXVzLFxuICAgICAgICAgIGZpbGw6IGljb25Db25maWcuY29sb3IsXG4gICAgICAgICAgc3R5bGU6IGJnU3R5bGVcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJwYXRoXCIsIHsgZDogaWNvbkNvbmZpZy5wYXRoLCBmaWxsOiBpY29uRmlsbENvbG9yIH0pXG4gICAgXSB9KSk7XG4gIH07XG4gIHJldHVybiBJY29uO1xufVxuY29uc3QgRW1haWxJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiM3ZjdmN2ZcIixcbiAgbmV0d29ya05hbWU6IFwiZW1haWxcIixcbiAgcGF0aDogXCJNMTcsMjJ2MjBoMzBWMjJIMTd6IE00MS4xLDI1TDMyLDMyLjFMMjIuOSwyNUg0MS4xeiBNMjAsMzlWMjYuNmwxMiw5LjNsMTItOS4zVjM5SDIwelwiXG59KTtcbmNvbnN0IEVtYWlsSWNvbiQxID0gRW1haWxJY29uO1xuZnVuY3Rpb24gb2JqZWN0VG9HZXRQYXJhbXMob2JqZWN0KSB7XG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5lbnRyaWVzKG9iamVjdCkuZmlsdGVyKChbLCB2YWx1ZV0pID0+IHZhbHVlICE9PSB2b2lkIDAgJiYgdmFsdWUgIT09IG51bGwpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBgJHtlbmNvZGVVUklDb21wb25lbnQoa2V5KX09JHtlbmNvZGVVUklDb21wb25lbnQoU3RyaW5nKHZhbHVlKSl9YCk7XG4gIHJldHVybiBwYXJhbXMubGVuZ3RoID4gMCA/IGA/JHtwYXJhbXMuam9pbihcIiZcIil9YCA6IFwiXCI7XG59XG5jb25zdCBpc1Byb21pc2UgPSAob2JqKSA9PiAhIW9iaiAmJiAodHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpICYmIHR5cGVvZiBvYmoudGhlbiA9PT0gXCJmdW5jdGlvblwiO1xuY29uc3QgZ2V0Qm94UG9zaXRpb25PbldpbmRvd0NlbnRlciA9ICh3aWR0aCwgaGVpZ2h0KSA9PiAoe1xuICBsZWZ0OiB3aW5kb3cub3V0ZXJXaWR0aCAvIDIgKyAod2luZG93LnNjcmVlblggfHwgd2luZG93LnNjcmVlbkxlZnQgfHwgMCkgLSB3aWR0aCAvIDIsXG4gIHRvcDogd2luZG93Lm91dGVySGVpZ2h0IC8gMiArICh3aW5kb3cuc2NyZWVuWSB8fCB3aW5kb3cuc2NyZWVuVG9wIHx8IDApIC0gaGVpZ2h0IC8gMlxufSk7XG5jb25zdCBnZXRCb3hQb3NpdGlvbk9uU2NyZWVuQ2VudGVyID0gKHdpZHRoLCBoZWlnaHQpID0+ICh7XG4gIHRvcDogKHdpbmRvdy5zY3JlZW4uaGVpZ2h0IC0gaGVpZ2h0KSAvIDIsXG4gIGxlZnQ6ICh3aW5kb3cuc2NyZWVuLndpZHRoIC0gd2lkdGgpIC8gMlxufSk7XG5mdW5jdGlvbiB3aW5kb3dPcGVuKHVybCwgX2EsIG9uQ2xvc2UpIHtcbiAgdmFyIF9iID0gX2EsIHsgaGVpZ2h0LCB3aWR0aCB9ID0gX2IsIGNvbmZpZ1Jlc3QgPSBfX29ialJlc3QoX2IsIFtcImhlaWdodFwiLCBcIndpZHRoXCJdKTtcbiAgY29uc3QgY29uZmlnID0gX19zcHJlYWRWYWx1ZXMoe1xuICAgIGhlaWdodCxcbiAgICB3aWR0aCxcbiAgICBsb2NhdGlvbjogXCJub1wiLFxuICAgIHRvb2xiYXI6IFwibm9cIixcbiAgICBzdGF0dXM6IFwibm9cIixcbiAgICBkaXJlY3RvcmllczogXCJub1wiLFxuICAgIG1lbnViYXI6IFwibm9cIixcbiAgICBzY3JvbGxiYXJzOiBcInllc1wiLFxuICAgIHJlc2l6YWJsZTogXCJub1wiLFxuICAgIGNlbnRlcnNjcmVlbjogXCJ5ZXNcIixcbiAgICBjaHJvbWU6IFwieWVzXCJcbiAgfSwgY29uZmlnUmVzdCk7XG4gIGNvbnN0IHNoYXJlRGlhbG9nID0gd2luZG93Lm9wZW4oXG4gICAgdXJsLFxuICAgIFwiXCIsXG4gICAgT2JqZWN0LmtleXMoY29uZmlnKS5tYXAoKGtleSkgPT4gYCR7a2V5fT0ke2NvbmZpZ1trZXldfWApLmpvaW4oXCIsIFwiKVxuICApO1xuICBpZiAob25DbG9zZSkge1xuICAgIGNvbnN0IGludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChzaGFyZURpYWxvZyA9PT0gbnVsbCB8fCBzaGFyZURpYWxvZy5jbG9zZWQpIHtcbiAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XG4gICAgICAgICAgb25DbG9zZShzaGFyZURpYWxvZyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH1cbiAgICB9LCAxZTMpO1xuICB9XG4gIHJldHVybiBzaGFyZURpYWxvZztcbn1cbmZ1bmN0aW9uIFNoYXJlQnV0dG9uKF9jKSB7XG4gIHZhciBfZCA9IF9jLCB7XG4gICAgYmVmb3JlT25DbGljayxcbiAgICBjaGlsZHJlbixcbiAgICBjbGFzc05hbWUsXG4gICAgZGlzYWJsZWQsXG4gICAgZGlzYWJsZWRTdHlsZSA9IHsgb3BhY2l0eTogMC42IH0sXG4gICAgZm9yd2FyZGVkUmVmLFxuICAgIGh0bWxUaXRsZSxcbiAgICBuZXR3b3JrTGluayxcbiAgICBuZXR3b3JrTmFtZSxcbiAgICBvbkNsaWNrLFxuICAgIG9uU2hhcmVXaW5kb3dDbG9zZSxcbiAgICBvcGVuU2hhcmVEaWFsb2dPbkNsaWNrID0gdHJ1ZSxcbiAgICBvcHRzLFxuICAgIHJlc2V0QnV0dG9uU3R5bGUgPSB0cnVlLFxuICAgIHN0eWxlLFxuICAgIHVybCxcbiAgICB3aW5kb3dIZWlnaHQgPSA0MDAsXG4gICAgd2luZG93UG9zaXRpb24gPSBcIndpbmRvd0NlbnRlclwiLFxuICAgIHdpbmRvd1dpZHRoID0gNTUwXG4gIH0gPSBfZCwgcmVzdCA9IF9fb2JqUmVzdChfZCwgW1xuICAgIFwiYmVmb3JlT25DbGlja1wiLFxuICAgIFwiY2hpbGRyZW5cIixcbiAgICBcImNsYXNzTmFtZVwiLFxuICAgIFwiZGlzYWJsZWRcIixcbiAgICBcImRpc2FibGVkU3R5bGVcIixcbiAgICBcImZvcndhcmRlZFJlZlwiLFxuICAgIFwiaHRtbFRpdGxlXCIsXG4gICAgXCJuZXR3b3JrTGlua1wiLFxuICAgIFwibmV0d29ya05hbWVcIixcbiAgICBcIm9uQ2xpY2tcIixcbiAgICBcIm9uU2hhcmVXaW5kb3dDbG9zZVwiLFxuICAgIFwib3BlblNoYXJlRGlhbG9nT25DbGlja1wiLFxuICAgIFwib3B0c1wiLFxuICAgIFwicmVzZXRCdXR0b25TdHlsZVwiLFxuICAgIFwic3R5bGVcIixcbiAgICBcInVybFwiLFxuICAgIFwid2luZG93SGVpZ2h0XCIsXG4gICAgXCJ3aW5kb3dQb3NpdGlvblwiLFxuICAgIFwid2luZG93V2lkdGhcIlxuICBdKTtcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBsaW5rID0gbmV0d29ya0xpbmsodXJsLCBvcHRzKTtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoYmVmb3JlT25DbGljaykge1xuICAgICAgY29uc3QgcmV0dXJuVmFsID0gYmVmb3JlT25DbGljaygpO1xuICAgICAgaWYgKGlzUHJvbWlzZShyZXR1cm5WYWwpKSB7XG4gICAgICAgIGF3YWl0IHJldHVyblZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wZW5TaGFyZURpYWxvZ09uQ2xpY2spIHtcbiAgICAgIGNvbnN0IHdpbmRvd0NvbmZpZyA9IF9fc3ByZWFkVmFsdWVzKHtcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3dIZWlnaHQsXG4gICAgICAgIHdpZHRoOiB3aW5kb3dXaWR0aFxuICAgICAgfSwgd2luZG93UG9zaXRpb24gPT09IFwid2luZG93Q2VudGVyXCIgPyBnZXRCb3hQb3NpdGlvbk9uV2luZG93Q2VudGVyKHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpIDogZ2V0Qm94UG9zaXRpb25PblNjcmVlbkNlbnRlcih3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KSk7XG4gICAgICB3aW5kb3dPcGVuKGxpbmssIHdpbmRvd0NvbmZpZywgb25TaGFyZVdpbmRvd0Nsb3NlKTtcbiAgICB9XG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZXZlbnQsIGxpbmspO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgbmV3Q2xhc3NOYW1lID0gY3goXG4gICAgXCJyZWFjdC1zaGFyZV9fU2hhcmVCdXR0b25cIixcbiAgICB7XG4gICAgICBcInJlYWN0LXNoYXJlX19TaGFyZUJ1dHRvbi0tZGlzYWJsZWRcIjogISFkaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkOiAhIWRpc2FibGVkXG4gICAgfSxcbiAgICBjbGFzc05hbWVcbiAgKTtcbiAgY29uc3QgbmV3U3R5bGUgPSByZXNldEJ1dHRvblN0eWxlID8gX19zcHJlYWRWYWx1ZXMoX19zcHJlYWRWYWx1ZXMoe1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgcGFkZGluZzogMCxcbiAgICBmb250OiBcImluaGVyaXRcIixcbiAgICBjb2xvcjogXCJpbmhlcml0XCIsXG4gICAgY3Vyc29yOiBcInBvaW50ZXJcIlxuICB9LCBzdHlsZSksIGRpc2FibGVkICYmIGRpc2FibGVkU3R5bGUpIDogX19zcHJlYWRWYWx1ZXMoX19zcHJlYWRWYWx1ZXMoe30sIHN0eWxlKSwgZGlzYWJsZWQgJiYgZGlzYWJsZWRTdHlsZSk7XG4gIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgIFwiYnV0dG9uXCIsXG4gICAgX19zcHJlYWRQcm9wcyhfX3NwcmVhZFZhbHVlcyh7fSwgcmVzdCksIHtcbiAgICAgIGNsYXNzTmFtZTogbmV3Q2xhc3NOYW1lLFxuICAgICAgb25DbGljazogaGFuZGxlQ2xpY2ssXG4gICAgICByZWY6IGZvcndhcmRlZFJlZixcbiAgICAgIHN0eWxlOiBuZXdTdHlsZSxcbiAgICAgIHRpdGxlOiBodG1sVGl0bGUsXG4gICAgICBjaGlsZHJlblxuICAgIH0pXG4gICk7XG59XG5mdW5jdGlvbiBjcmVhdGVTaGFyZUJ1dHRvbihuZXR3b3JrTmFtZSwgbGluaywgb3B0c01hcCwgZGVmYXVsdFByb3BzKSB7XG4gIGZ1bmN0aW9uIENyZWF0ZWRCdXR0b24ocHJvcHMsIHJlZikge1xuICAgIGNvbnN0IG9wdHMgPSBvcHRzTWFwKHByb3BzKTtcbiAgICBjb25zdCBwYXNzZWRQcm9wcyA9IF9fc3ByZWFkVmFsdWVzKHt9LCBwcm9wcyk7XG4gICAgY29uc3Qgb3B0c0tleXMgPSBPYmplY3Qua2V5cyhvcHRzKTtcbiAgICBvcHRzS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGRlbGV0ZSBwYXNzZWRQcm9wc1trZXldO1xuICAgIH0pO1xuICAgIHJldHVybiAvKiBAX19QVVJFX18gKi8ganN4KFxuICAgICAgU2hhcmVCdXR0b24sXG4gICAgICBfX3NwcmVhZFByb3BzKF9fc3ByZWFkVmFsdWVzKF9fc3ByZWFkVmFsdWVzKHt9LCBkZWZhdWx0UHJvcHMpLCBwYXNzZWRQcm9wcyksIHtcbiAgICAgICAgZm9yd2FyZGVkUmVmOiByZWYsXG4gICAgICAgIG5ldHdvcmtOYW1lLFxuICAgICAgICBuZXR3b3JrTGluazogbGluayxcbiAgICAgICAgb3B0czogb3B0c01hcChwcm9wcylcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuICBDcmVhdGVkQnV0dG9uLmRpc3BsYXlOYW1lID0gYFNoYXJlQnV0dG9uLSR7bmV0d29ya05hbWV9YDtcbiAgcmV0dXJuIGZvcndhcmRSZWYoQ3JlYXRlZEJ1dHRvbik7XG59XG5mdW5jdGlvbiBlbWFpbExpbmsodXJsLCB7IHN1YmplY3QsIGJvZHksIHNlcGFyYXRvciB9KSB7XG4gIHJldHVybiBcIm1haWx0bzpcIiArIG9iamVjdFRvR2V0UGFyYW1zKHsgc3ViamVjdCwgYm9keTogYm9keSA/IGJvZHkgKyBzZXBhcmF0b3IgKyB1cmwgOiB1cmwgfSk7XG59XG5jb25zdCBFbWFpbFNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oXG4gIFwiZW1haWxcIixcbiAgZW1haWxMaW5rLFxuICAocHJvcHMpID0+ICh7XG4gICAgc3ViamVjdDogcHJvcHMuc3ViamVjdCxcbiAgICBib2R5OiBwcm9wcy5ib2R5LFxuICAgIHNlcGFyYXRvcjogcHJvcHMuc2VwYXJhdG9yIHx8IFwiIFwiXG4gIH0pLFxuICB7XG4gICAgb3BlblNoYXJlRGlhbG9nT25DbGljazogZmFsc2UsXG4gICAgb25DbGljazogKF8sIGxpbmspID0+IHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gbGluaztcbiAgICB9XG4gIH1cbik7XG5jb25zdCBFbWFpbFNoYXJlQnV0dG9uJDEgPSBFbWFpbFNoYXJlQnV0dG9uO1xuY29uc3QgRmFjZWJvb2tJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiMwOTY1RkVcIixcbiAgbmV0d29ya05hbWU6IFwiZmFjZWJvb2tcIixcbiAgcGF0aDogXCJNMzQuMSw0N1YzMy4zaDQuNmwwLjctNS4zaC01LjN2LTMuNGMwLTEuNSwwLjQtMi42LDIuNi0yLjZsMi44LDB2LTQuOGMtMC41LTAuMS0yLjItMC4yLTQuMS0wLjIgYy00LjEsMC02LjksMi41LTYuOSw3VjI4SDI0djUuM2g0LjZWNDdIMzQuMXpcIlxufSk7XG5jb25zdCBGYWNlYm9va0ljb24kMSA9IEZhY2Vib29rSWNvbjtcbmNvbnN0IEZhY2Vib29rTWVzc2VuZ2VySWNvbiA9IGNyZWF0ZUljb24oe1xuICBjb2xvcjogXCIjMEE3Q0ZGXCIsXG4gIG5ldHdvcmtOYW1lOiBcImZhY2Vib29rbWVzc2VuZ2VyXCIsXG4gIHBhdGg6IFwiTSA1My4wNjY0MDYgMjEuODcxMDk0IEMgNTIuNjY3OTY5IDIxLjMzOTg0NCA1MS45NDE0MDYgMjEuMTc5Njg4IDUxLjM1OTM3NSAyMS40OTYwOTQgTCAzNy40OTIxODggMjkuMDU4NTk0IEwgMjguODY3MTg4IDIxLjY2MDE1NiBDIDI4LjMzOTg0NCAyMS4yMDcwMzEgMjcuNTUwNzgxIDIxLjIzODI4MSAyNy4wNTQ2ODggMjEuNzMwNDY5IEwgMTEuMDU4NTk0IDM3LjcyNjU2MiBDIDEwLjUzOTA2MiAzOC4yNSAxMC41NDI5NjkgMzkuMDkzNzUgMTEuMDYyNSAzOS42MTMyODEgQyAxMS40ODA0NjkgNDAuMDI3MzQ0IDEyLjEyMTA5NCA0MC4xMjEwOTQgMTIuNjQwNjI1IDM5LjgzOTg0NCBMIDI2LjUwMzkwNiAzMi4yODEyNSBMIDM1LjEzNjcxOSAzOS42Nzk2ODggQyAzNS42Njc5NjkgNDAuMTMyODEyIDM2LjQ1NzAzMSA0MC4xMDE1NjIgMzYuOTQ5MjE5IDM5LjYwOTM3NSBMIDUyLjk0OTIxOSAyMy42MTMyODEgQyA1My40MTQwNjIgMjMuMTQwNjI1IDUzLjQ2NDg0NCAyMi4zOTg0MzggNTMuMDY2NDA2IDIxLjg3MTA5NCBaIE0gNTMuMDY2NDA2IDIxLjg3MTA5NFwiXG59KTtcbmNvbnN0IEZhY2Vib29rTWVzc2VuZ2VySWNvbiQxID0gRmFjZWJvb2tNZXNzZW5nZXJJY29uO1xuZnVuY3Rpb24gZmFjZWJvb2tNZXNzZW5nZXJMaW5rKHVybCwgeyBhcHBJZCwgcmVkaXJlY3RVcmksIHRvIH0pIHtcbiAgcmV0dXJuIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL2RpYWxvZy9zZW5kXCIgKyBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgbGluazogdXJsLFxuICAgIHJlZGlyZWN0X3VyaTogcmVkaXJlY3RVcmkgfHwgdXJsLFxuICAgIGFwcF9pZDogYXBwSWQsXG4gICAgdG9cbiAgfSk7XG59XG5jb25zdCBGYWNlYm9va01lc3NlbmdlclNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oXG4gIFwiZmFjZWJvb2ttZXNzZW5nZXJcIixcbiAgZmFjZWJvb2tNZXNzZW5nZXJMaW5rLFxuICAocHJvcHMpID0+ICh7XG4gICAgYXBwSWQ6IHByb3BzLmFwcElkLFxuICAgIHJlZGlyZWN0VXJpOiBwcm9wcy5yZWRpcmVjdFVyaSxcbiAgICB0bzogcHJvcHMudG9cbiAgfSksXG4gIHtcbiAgICB3aW5kb3dXaWR0aDogMWUzLFxuICAgIHdpbmRvd0hlaWdodDogODIwXG4gIH1cbik7XG5jb25zdCBGYWNlYm9va01lc3NlbmdlclNoYXJlQnV0dG9uJDEgPSBGYWNlYm9va01lc3NlbmdlclNoYXJlQnV0dG9uO1xuY2xhc3MgQXNzZXJ0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLm5hbWUgPSBcIkFzc2VydGlvbkVycm9yXCI7XG4gIH1cbn1cbmZ1bmN0aW9uIGFzc2VydCh2YWx1ZSwgbWVzc2FnZSkge1xuICBpZiAoIXZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IEFzc2VydGlvbkVycm9yKG1lc3NhZ2UpO1xuICB9XG59XG5mdW5jdGlvbiBmYWNlYm9va0xpbmsodXJsLCB7IGhhc2h0YWcgfSkge1xuICBhc3NlcnQodXJsLCBcImZhY2Vib29rLnVybFwiKTtcbiAgcmV0dXJuIFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwXCIgKyBvYmplY3RUb0dldFBhcmFtcyh7IHU6IHVybCwgaGFzaHRhZyB9KTtcbn1cbmNvbnN0IEZhY2Vib29rU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbihcbiAgXCJmYWNlYm9va1wiLFxuICBmYWNlYm9va0xpbmssXG4gIChwcm9wcykgPT4gKHsgaGFzaHRhZzogcHJvcHMuaGFzaHRhZyB9KSxcbiAge1xuICAgIHdpbmRvd1dpZHRoOiA1NTAsXG4gICAgd2luZG93SGVpZ2h0OiA0MDBcbiAgfVxuKTtcbmNvbnN0IEZhY2Vib29rU2hhcmVCdXR0b24kMSA9IEZhY2Vib29rU2hhcmVCdXR0b247XG5mdW5jdGlvbiB1c2VJc01vdW50ZWQoKSB7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZVJlZihmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNNb3VudGVkLmN1cnJlbnQgPSB0cnVlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWQuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgcmV0dXJuIHVzZUNhbGxiYWNrKCgpID0+IGlzTW91bnRlZC5jdXJyZW50LCBbXSk7XG59XG5mdW5jdGlvbiBTb2NpYWxNZWRpYVNoYXJlQ291bnQoX2UpIHtcbiAgdmFyIF9mID0gX2UsIHtcbiAgICBjaGlsZHJlbiA9IChzaGFyZUNvdW50KSA9PiBzaGFyZUNvdW50LFxuICAgIGNsYXNzTmFtZSxcbiAgICBnZXRDb3VudCxcbiAgICB1cmxcbiAgfSA9IF9mLCByZXN0ID0gX19vYmpSZXN0KF9mLCBbXG4gICAgXCJjaGlsZHJlblwiLFxuICAgIFwiY2xhc3NOYW1lXCIsXG4gICAgXCJnZXRDb3VudFwiLFxuICAgIFwidXJsXCJcbiAgXSk7XG4gIGNvbnN0IGlzTW91bnRlZCA9IHVzZUlzTW91bnRlZCgpO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKHZvaWQgMCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGdldENvdW50KHVybCwgKGNvdW50MikgPT4ge1xuICAgICAgaWYgKGlzTW91bnRlZCgpKSB7XG4gICAgICAgIHNldENvdW50KGNvdW50Mik7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIFt1cmxdKTtcbiAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBqc3goXCJzcGFuXCIsIF9fc3ByZWFkUHJvcHMoX19zcHJlYWRWYWx1ZXMoeyBjbGFzc05hbWU6IGN4KFwicmVhY3Qtc2hhcmVfX1NoYXJlQ291bnRcIiwgY2xhc3NOYW1lKSB9LCByZXN0KSwgeyBjaGlsZHJlbjogIWlzTG9hZGluZyAmJiBjb3VudCAhPT0gdm9pZCAwICYmIGNoaWxkcmVuKGNvdW50KSB9KSk7XG59XG5mdW5jdGlvbiBjcmVhdGVTaGFyZUNvdW50KGdldENvdW50KSB7XG4gIGNvbnN0IFNoYXJlQ291bnQgPSAocHJvcHMpID0+IC8qIEBfX1BVUkVfXyAqLyBqc3goU29jaWFsTWVkaWFTaGFyZUNvdW50LCBfX3NwcmVhZFZhbHVlcyh7IGdldENvdW50IH0sIHByb3BzKSk7XG4gIFNoYXJlQ291bnQuZGlzcGxheU5hbWUgPSBgU2hhcmVDb3VudCgke2dldENvdW50Lm5hbWV9KWA7XG4gIHJldHVybiBTaGFyZUNvdW50O1xufVxuZnVuY3Rpb24gZ2V0RmFjZWJvb2tTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICBjb25zdCBlbmRwb2ludCA9IGBodHRwczovL2dyYXBoLmZhY2Vib29rLmNvbS8/aWQ9JHtzaGFyZVVybH0mZmllbGRzPW9nX29iamVjdHtlbmdhZ2VtZW50fWA7XG4gIGpzb25wKGVuZHBvaW50LCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgY2FsbGJhY2soXG4gICAgICAhZXJyICYmIGRhdGEgJiYgZGF0YS5vZ19vYmplY3QgJiYgZGF0YS5vZ19vYmplY3QuZW5nYWdlbWVudCA/IGRhdGEub2dfb2JqZWN0LmVuZ2FnZW1lbnQuY291bnQgOiB2b2lkIDBcbiAgICApO1xuICB9KTtcbn1cbmNvbnN0IEZhY2Vib29rU2hhcmVDb3VudCA9IGNyZWF0ZVNoYXJlQ291bnQoZ2V0RmFjZWJvb2tTaGFyZUNvdW50KTtcbmNvbnN0IEhhdGVuYUljb24gPSBjcmVhdGVJY29uKHtcbiAgY29sb3I6IFwiIzAwOWFkOVwiLFxuICBuZXR3b3JrTmFtZTogXCJoYXRlbmFcIixcbiAgcGF0aDogXCJNIDM2LjE2NDA2MiAzMy41NTQ2ODggQyAzNC45ODgyODEgMzIuMjM0Mzc1IDMzLjM0NzY1NiAzMS41IDMxLjI1MzkwNiAzMS4zNDM3NSBDIDMzLjEyNSAzMC44MzU5MzggMzQuNDc2NTYyIDMwLjA5Mzc1IDM1LjMzNTkzOCAyOS4wOTM3NSBDIDM2LjE5MTQwNiAyOC4wOTM3NSAzNi42MDkzNzUgMjYuNzgxMjUgMzYuNjA5Mzc1IDI1LjEwMTU2MiBDIDM2LjYyODkwNiAyMy44NzUgMzYuMzMyMDMxIDIyLjY2MDE1NiAzNS43NSAyMS41NzgxMjUgQyAzNS4xNjAxNTYgMjAuNTU4NTk0IDM0LjI5Mjk2OSAxOS43MTg3NSAzMy4yNTM5MDYgMTkuMTYwMTU2IEMgMzIuMzA0Njg4IDE4LjY0MDYyNSAzMS4xNzU3ODEgMTguMjY1NjI1IDI5Ljg0NzY1NiAxOC4wNDI5NjkgQyAyOC41MjM0MzggMTcuODI0MjE5IDI2LjE5NTMxMiAxNy43MzA0NjkgMjIuODY3MTg4IDE3LjczMDQ2OSBMIDE0Ljc2OTUzMSAxNy43MzA0NjkgTCAxNC43Njk1MzEgNDcuMjY5NTMxIEwgMjMuMTEzMjgxIDQ3LjI2OTUzMSBDIDI2LjQ2ODc1IDQ3LjI2OTUzMSAyOC44ODY3MTkgNDcuMTU2MjUgMzAuMzY3MTg4IDQ2LjkyOTY4OCBDIDMxLjg1MTU2MiA0Ni42OTUzMTIgMzMuMDg1OTM4IDQ2LjMwNDY4OCAzNC4wODU5MzggNDUuNzczNDM4IEMgMzUuMjg5MDYyIDQ1LjE0ODQzOCAzNi4yODEyNSA0NC4xNzk2ODggMzYuOTMzNTk0IDQyLjk5MjE4OCBDIDM3LjU5NzY1NiA0MS43OTY4NzUgMzcuOTMzNTk0IDQwLjQwMjM0NCAzNy45MzM1OTQgMzguODE2NDA2IEMgMzcuOTMzNTk0IDM2LjYyMTA5NCAzNy4zNDc2NTYgMzQuODY3MTg4IDM2LjE2NDA2MiAzMy41NTQ2ODggWiBNIDIyLjI1NzgxMiAyNC4yNjk1MzEgTCAyMy45ODQzNzUgMjQuMjY5NTMxIEMgMjUuOTg4MjgxIDI0LjI2OTUzMSAyNy4zMzIwMzEgMjQuNDk2MDk0IDI4LjAxNTYyNSAyNC45NDUzMTIgQyAyOC43MDMxMjUgMjUuNDAyMzQ0IDI5LjA0Mjk2OSAyNi4xODM1OTQgMjkuMDQyOTY5IDI3LjI4NTE1NiBDIDI5LjA0Mjk2OSAyOC4zOTA2MjUgMjguNjY0MDYyIDI5LjEwNTQ2OSAyNy45Mzc1IDI5LjU1MDc4MSBDIDI3LjIxMDkzOCAyOS45OTIxODggMjUuODQzNzUgMzAuMTk5MjE5IDIzLjg1NTQ2OSAzMC4xOTkyMTkgTCAyMi4yNTc4MTIgMzAuMTk5MjE5IFogTSAyOS4xMjEwOTQgNDEuMjEwOTM4IEMgMjguMzI4MTI1IDQxLjY5MTQwNiAyNi45NzY1NjIgNDEuOTI1NzgxIDI1LjA3ODEyNSA0MS45MjU3ODEgTCAyMi4yNTc4MTIgNDEuOTI1NzgxIEwgMjIuMjU3ODEyIDM1LjQ4ODI4MSBMIDI1LjE5NTMxMiAzNS40ODgyODEgQyAyNy4xNDQ1MzEgMzUuNDg4MjgxIDI4LjQ5NjA5NCAzNS43MzgyODEgMjkuMjEwOTM4IDM2LjIzMDQ2OSBDIDI5LjkyNTc4MSAzNi43MjY1NjIgMzAuMzA0Njg4IDM3LjU4MjAzMSAzMC4zMDQ2ODggMzguODMyMDMxIEMgMzAuMzA0Njg4IDQwLjA3ODEyNSAyOS45MTQwNjIgNDAuNzQyMTg4IDI5LjEwNTQ2OSA0MS4yMjI2NTYgWiBNIDI5LjEyMTA5NCA0MS4yMTA5MzggTSA0Ni40ODgyODEgMzkuNzkyOTY5IEMgNDQuNDIxODc1IDM5Ljc5Mjk2OSA0Mi43NDIxODggNDEuNDY4NzUgNDIuNzQyMTg4IDQzLjUzNTE1NiBDIDQyLjc0MjE4OCA0NS42MDU0NjkgNDQuNDIxODc1IDQ3LjI4MTI1IDQ2LjQ4ODI4MSA0Ny4yODEyNSBDIDQ4LjU1NDY4OCA0Ny4yODEyNSA1MC4yMzA0NjkgNDUuNjA1NDY5IDUwLjIzMDQ2OSA0My41MzUxNTYgQyA1MC4yMzA0NjkgNDEuNDY4NzUgNDguNTU0Njg4IDM5Ljc5Mjk2OSA0Ni40ODgyODEgMzkuNzkyOTY5IFogTSA0Ni40ODgyODEgMzkuNzkyOTY5IE0gNDMuMjM4MjgxIDE3LjczMDQ2OSBMIDQ5LjczODI4MSAxNy43MzA0NjkgTCA0OS43MzgyODEgMzcuNDI5Njg4IEwgNDMuMjM4MjgxIDM3LjQyOTY4OCBaIE0gNDMuMjM4MjgxIDE3LjczMDQ2OSBcIlxufSk7XG5jb25zdCBIYXRlbmFJY29uJDEgPSBIYXRlbmFJY29uO1xuZnVuY3Rpb24gaGF0ZW5hTGluayh1cmwsIHsgdGl0bGUgfSkge1xuICBhc3NlcnQodXJsLCBcImhhdGVuYS51cmxcIik7XG4gIHJldHVybiBgaHR0cDovL2IuaGF0ZW5hLm5lLmpwL2FkZD9tb2RlPWNvbmZpcm0mdXJsPSR7dXJsfSZ0aXRsZT0ke3RpdGxlfWA7XG59XG5jb25zdCBIYXRlbmFTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKFxuICBcImhhdGVuYVwiLFxuICBoYXRlbmFMaW5rLFxuICAocHJvcHMpID0+ICh7XG4gICAgdGl0bGU6IHByb3BzLnRpdGxlXG4gIH0pLFxuICB7XG4gICAgd2luZG93V2lkdGg6IDY2MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQ2MCxcbiAgICB3aW5kb3dQb3NpdGlvbjogXCJ3aW5kb3dDZW50ZXJcIlxuICB9XG4pO1xuY29uc3QgSGF0ZW5hU2hhcmVCdXR0b24kMSA9IEhhdGVuYVNoYXJlQnV0dG9uO1xuZnVuY3Rpb24gZ2V0SGF0ZW5hU2hhcmVDb3VudChzaGFyZVVybCwgY2FsbGJhY2spIHtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL2Jvb2ttYXJrLmhhdGVuYWFwaXMuY29tL2NvdW50L2VudHJ5XCI7XG4gIGpzb25wKFxuICAgIHVybCArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgIHVybDogc2hhcmVVcmxcbiAgICB9KSxcbiAgICAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBjYWxsYmFjayhkYXRhICE9IG51bGwgPyBkYXRhIDogdm9pZCAwKTtcbiAgICB9XG4gICk7XG59XG5jb25zdCBIYXRlbmFTaGFyZUNvdW50ID0gY3JlYXRlU2hhcmVDb3VudChnZXRIYXRlbmFTaGFyZUNvdW50KTtcbmNvbnN0IEluc3RhcGFwZXJJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiMxRjFGMUZcIixcbiAgbmV0d29ya05hbWU6IFwiaW5zdGFwYXBlclwiLFxuICBwYXRoOiBcIk0zNS42ODggNDMuMDEyYzAgMi40MjUuMzYxIDIuNzg1IDMuOTEyIDMuMDU2VjQ4SDI0LjQwMXYtMS45MzJjMy41NTUtLjI3IDMuOTEyLS42MyAzLjkxMi0zLjA1NlYyMC45NDRjMC0yLjM3OS0uMzYtMi43ODUtMy45MTItMy4wNTZWMTZIMzkuNnYxLjg4OGMtMy41NS4yNy0zLjkxMi42NzUtMy45MTIgMy4wNTZ2MjIuMDY4aC4wMDF6XCJcbn0pO1xuY29uc3QgSW5zdGFwYXBlckljb24kMSA9IEluc3RhcGFwZXJJY29uO1xuZnVuY3Rpb24gaW5zdGFwYXBlckxpbmsodXJsLCB7IHRpdGxlLCBkZXNjcmlwdGlvbiB9KSB7XG4gIGFzc2VydCh1cmwsIFwiaW5zdGFwYXBlci51cmxcIik7XG4gIHJldHVybiBcImh0dHA6Ly93d3cuaW5zdGFwYXBlci5jb20vaGVsbG8yXCIgKyBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgdXJsLFxuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uXG4gIH0pO1xufVxuY29uc3QgSW5zdGFwYXBlclNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oXG4gIFwiaW5zdGFwYXBlclwiLFxuICBpbnN0YXBhcGVyTGluayxcbiAgKHByb3BzKSA9PiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb25cbiAgfSksXG4gIHtcbiAgICB3aW5kb3dXaWR0aDogNTAwLFxuICAgIHdpbmRvd0hlaWdodDogNTAwLFxuICAgIHdpbmRvd1Bvc2l0aW9uOiBcIndpbmRvd0NlbnRlclwiXG4gIH1cbik7XG5jb25zdCBJbnN0YXBhcGVyU2hhcmVCdXR0b24kMSA9IEluc3RhcGFwZXJTaGFyZUJ1dHRvbjtcbmNvbnN0IExpbmVJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiMwMGI4MDBcIixcbiAgbmV0d29ya05hbWU6IFwibGluZVwiLFxuICBwYXRoOiBcIk01Mi42MiAzMC4xMzhjMCAzLjY5My0xLjQzMiA3LjAxOS00LjQyIDEwLjI5NmguMDAxYy00LjMyNiA0Ljk3OS0xNCAxMS4wNDQtMTYuMjAxIDExLjk3Mi0yLjIuOTI3LTEuODc2LS41OTEtMS43ODYtMS4xMTJsLjI5NC0xLjc2NWMuMDY5LS41MjcuMTQyLTEuMzQzLS4wNjYtMS44NjUtLjIzMi0uNTc0LTEuMTQ2LS44NzItMS44MTctMS4wMTYtOS45MDktMS4zMS0xNy4yNDUtOC4yMzgtMTcuMjQ1LTE2LjUxIDAtOS4yMjYgOS4yNTEtMTYuNzMzIDIwLjYyLTE2LjczMyAxMS4zNyAwIDIwLjYyIDcuNTA3IDIwLjYyIDE2LjczM3pNMjcuODEgMjUuNjhoLTEuNDQ2YS40MDIuNDAyIDAgMCAwLS40MDIuNDAxdjguOTg1YzAgLjIyMS4xOC40LjQwMi40aDEuNDQ2YS40MDEuNDAxIDAgMCAwIC40MDItLjR2LTguOTg1YS40MDIuNDAyIDAgMCAwLS40MDItLjQwMXptOS45NTYgMEgzNi4zMmEuNDAyLjQwMiAwIDAgMC0uNDAyLjQwMXY1LjMzOEwzMS44IDI1Ljg1OGEuMzkuMzkgMCAwIDAtLjAzMS0uMDRsLS4wMDItLjAwMy0uMDI0LS4wMjUtLjAwOC0uMDA3YS4zMTMuMzEzIDAgMCAwLS4wMzItLjAyNi4yNTUuMjU1IDAgMCAxLS4wMjEtLjAxNGwtLjAxMi0uMDA3LS4wMjEtLjAxMi0uMDEzLS4wMDYtLjAyMy0uMDEtLjAxMy0uMDA1LS4wMjQtLjAwOC0uMDE0LS4wMDMtLjAyMy0uMDA1LS4wMTctLjAwMi0uMDIxLS4wMDMtLjAyMS0uMDAyaC0xLjQ2YS40MDIuNDAyIDAgMCAwLS40MDIuNDAxdjguOTg1YzAgLjIyMS4xOC40LjQwMi40aDEuNDQ2YS40MDEuNDAxIDAgMCAwIC40MDItLjR2LTUuMzM3bDQuMTIzIDUuNTY4Yy4wMjguMDQuMDYzLjA3Mi4xMDEuMDk5bC4wMDQuMDAzYS4yMzYuMjM2IDAgMCAwIC4wMjUuMDE1bC4wMTIuMDA2LjAxOS4wMWEuMTU0LjE1NCAwIDAgMSAuMDE5LjAwOGwuMDEyLjAwNC4wMjguMDEuMDA1LjAwMWEuNDQyLjQ0MiAwIDAgMCAuMTA0LjAxM2gxLjQ0NmEuNC40IDAgMCAwIC40MDEtLjR2LTguOTg1YS40MDIuNDAyIDAgMCAwLS40MDEtLjQwMXptLTEzLjQ0MiA3LjUzN2gtMy45M3YtNy4xMzZhLjQwMS40MDEgMCAwIDAtLjQwMS0uNDAxaC0xLjQ0N2EuNC40IDAgMCAwLS40MDEuNDAxdjguOTg0YS4zOTIuMzkyIDAgMCAwIC4xMjMuMjljLjA3Mi4wNjguMTcuMTExLjI3OC4xMTFoNS43NzhhLjQuNCAwIDAgMCAuNDAxLS40MDF2LTEuNDQ3YS40MDEuNDAxIDAgMCAwLS40MDEtLjQwMXptMjEuNDI5LTUuMjg3Yy4yMjIgMCAuNDAxLS4xOC40MDEtLjQwMnYtMS40NDZhLjQwMS40MDEgMCAwIDAtLjQwMS0uNDAyaC01Ljc3OGEuMzk4LjM5OCAwIDAgMC0uMjc5LjExM2wtLjAwNS4wMDQtLjAwNi4wMDhhLjM5Ny4zOTcgMCAwIDAtLjExMS4yNzZ2OC45ODRjMCAuMTA4LjA0My4yMDYuMTEyLjI3OGwuMDA1LjAwNmEuNDAxLjQwMSAwIDAgMCAuMjg0LjExN2g1Ljc3OGEuNC40IDAgMCAwIC40MDEtLjQwMXYtMS40NDdhLjQwMS40MDEgMCAwIDAtLjQwMS0uNDAxaC0zLjkzdi0xLjUxOWgzLjkzYy4yMjIgMCAuNDAxLS4xOC40MDEtLjQwMlYyOS44NWEuNDAxLjQwMSAwIDAgMC0uNDAxLS40MDJoLTMuOTNWMjcuOTNoMy45M3pcIlxufSk7XG5jb25zdCBMaW5lSWNvbiQxID0gTGluZUljb247XG5mdW5jdGlvbiBsaW5lTGluayh1cmwsIHsgdGl0bGUgfSkge1xuICBhc3NlcnQodXJsLCBcImxpbmUudXJsXCIpO1xuICByZXR1cm4gXCJodHRwczovL3NvY2lhbC1wbHVnaW5zLmxpbmUubWUvbGluZWl0L3NoYXJlXCIgKyBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgdXJsLFxuICAgIHRleHQ6IHRpdGxlXG4gIH0pO1xufVxuY29uc3QgTGluZVNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oXG4gIFwibGluZVwiLFxuICBsaW5lTGluayxcbiAgKHByb3BzKSA9PiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZVxuICB9KSxcbiAge1xuICAgIHdpbmRvd1dpZHRoOiA1MDAsXG4gICAgd2luZG93SGVpZ2h0OiA1MDBcbiAgfVxuKTtcbmNvbnN0IExpbmVTaGFyZUJ1dHRvbiQxID0gTGluZVNoYXJlQnV0dG9uO1xuY29uc3QgTGlua2VkaW5JY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiMwMDc3QjVcIixcbiAgbmV0d29ya05hbWU6IFwibGlua2VkaW5cIixcbiAgcGF0aDogXCJNMjAuNCw0NGg1LjRWMjYuNmgtNS40VjQ0eiBNMjMuMSwxOGMtMS43LDAtMy4xLDEuNC0zLjEsMy4xYzAsMS43LDEuNCwzLjEsMy4xLDMuMSBjMS43LDAsMy4xLTEuNCwzLjEtMy4xQzI2LjIsMTkuNCwyNC44LDE4LDIzLjEsMTh6IE0zOS41LDI2LjJjLTIuNiwwLTQuNCwxLjQtNS4xLDIuOGgtMC4xdi0yLjRoLTUuMlY0NGg1LjR2LTguNiBjMC0yLjMsMC40LTQuNSwzLjItNC41YzIuOCwwLDIuOCwyLjYsMi44LDQuNlY0NEg0NnYtOS41QzQ2LDI5LjgsNDUsMjYuMiwzOS41LDI2LjJ6XCJcbn0pO1xuY29uc3QgTGlua2VkaW5JY29uJDEgPSBMaW5rZWRpbkljb247XG5mdW5jdGlvbiBsaW5rZWRpbkxpbmsodXJsLCB7IHRpdGxlLCBzdW1tYXJ5LCBzb3VyY2UgfSkge1xuICBhc3NlcnQodXJsLCBcImxpbmtlZGluLnVybFwiKTtcbiAgcmV0dXJuIFwiaHR0cHM6Ly9saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlXCIgKyBvYmplY3RUb0dldFBhcmFtcyh7IHVybCwgbWluaTogXCJ0cnVlXCIsIHRpdGxlLCBzdW1tYXJ5LCBzb3VyY2UgfSk7XG59XG5jb25zdCBMaW5rZWRpblNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oXG4gIFwibGlua2VkaW5cIixcbiAgbGlua2VkaW5MaW5rLFxuICAoeyB0aXRsZSwgc3VtbWFyeSwgc291cmNlIH0pID0+ICh7IHRpdGxlLCBzdW1tYXJ5LCBzb3VyY2UgfSksXG4gIHtcbiAgICB3aW5kb3dXaWR0aDogNzUwLFxuICAgIHdpbmRvd0hlaWdodDogNjAwXG4gIH1cbik7XG5jb25zdCBMaW5rZWRpblNoYXJlQnV0dG9uJDEgPSBMaW5rZWRpblNoYXJlQnV0dG9uO1xuY29uc3QgTGl2ZWpvdXJuYWxJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiMyMUE1RDhcIixcbiAgbmV0d29ya05hbWU6IFwibGl2ZWpvdXJuYWxcIixcbiAgcGF0aDogXCJNMTguMzQwNzgyMSwyOC4xNzY0NzA2IEwyMS45NDQxMzQxLDMxLjc4OTkxNiBMMzMuMDA1NTg2NSw0Mi44ODIzNTMgQzMzLjAwNTU4NjUsNDIuODgyMzUzIDMzLjA4OTM4NTUsNDIuOTY2Mzg2NiAzMy4wODkzODU1LDQyLjk2NjM4NjYgTDQ2LjY2NDgwNDYsNDcgQzQ2LjY2NDgwNDYsNDcgNDYuNjY0ODA0Niw0NyA0Ni43NDg2MDM0LDQ3IEM0Ni44MzI0MDIyLDQ3IDQ2LjgzMjQwMjIsNDcgNDYuOTE2MjAxMiw0Ni45MTU5NjY0IEM0Nyw0Ni44MzE5MzI3IDQ3LDQ2LjgzMTkzMjcgNDcsNDYuNzQ3ODk5MSBMNDIuOTc3NjUzNiwzMy4xMzQ0NTM3IEM0Mi45Nzc2NTM2LDMzLjEzNDQ1MzcgNDIuOTc3NjUzNiwzMy4xMzQ0NTM3IDQyLjg5Mzg1NDgsMzMuMDUwNDIwMiBMMzEuMTYyMDExMSwyMS4zNjk3NDc5IEwzMS4xNjIwMTExLDIxLjM2OTc0NzkgTDI4LjE0NTI1MTQsMTguMjYwNTA0MiBDMjcuMzA3MjYyNiwxNy40MjAxNjgxIDI2LjU1MzA3MjYsMTcgMjUuNzE1MDgzOCwxNyBDMjQuMjkwNTAyOCwxNyAyMy4wMzM1MTk1LDE4LjM0NDUzNzggMjEuNTI1MTM5NywxOS44NTcxNDI5IEMyMS4yNzM3NDMsMjAuMTA5MjQzNyAyMC45Mzg1NDc1LDIwLjQ0NTM3ODEgMjAuNjg3MTUwOCwyMC42OTc0NzkgQzIwLjM1MTk1NTMsMjEuMDMzNjEzNCAyMC4xMDA1NTg2LDIxLjI4NTcxNDMgMTkuODQ5MTYyLDIxLjUzNzgxNTEgQzE4LjM0MDc4MjEsMjIuOTY2Mzg2NiAxNy4wODM3OTg5LDI0LjIyNjg5MDggMTcsMjUuNzM5NDk1OCBDMTcuMDgzNzk4OSwyNi40OTU3OTgzIDE3LjUwMjc5MzMsMjcuMzM2MTM0NSAxOC4zNDA3ODIxLDI4LjE3NjQ3MDYgWiBNMzkuOTAxMjMxOSwzOS42MTM0NDU0IEMzOS43MzM2MzQxLDM5LjQ0NTM3ODEgMzkuNDgyMjM3NCwzNy42ODA2NzI0IDQwLjIzNjQyNzUsMzYuODQwMzM2MiBDNDAuOTkwNjE3NCwzNi4wODQwMzM3IDQxLjY2MTAwODQsMzYgNDIuMTYzODAxNywzNiBDNDIuMzMxMzk5NSwzNiA0Mi40OTg5OTczLDM2IDQyLjU4Mjc5NjEsMzYgTDQ0Ljg0NTM2NTksNDMuNTYzMDI1MyBMNDMuNTg4MzgyOCw0NC44MjM1Mjk1IEwzNi4wNDY0ODMzLDQyLjU1NDYyMTggQzM1Ljk2MjY4NDMsNDIuMjE4NDg3NCAzNS44Nzg4ODU1LDQxLjIxMDA4NDEgMzYuODg0NDcyMiw0MC4yMDE2ODA3IEMzNy4yMTk2Njc2LDM5Ljg2NTU0NjMgMzcuODkwMDU4NywzOS42MTM0NDU0IDM4LjU2MDQ0OTgsMzkuNjEzNDQ1NCBDMzkuMTQ3MDQyLDM5LjYxMzQ0NTQgMzkuNTY2MDM2NCwzOS43ODE1MTI2IDM5LjU2NjAzNjQsMzkuNzgxNTEyNiBDMzkuNjQ5ODM1MywzOS44NjU1NDYzIDM5LjgxNzQzMzEsMzkuODY1NTQ2MyAzOS44MTc0MzMxLDM5Ljc4MTUxMjYgQzM5Ljk4NTAzMDcsMzkuNzgxNTEyNiAzOS45ODUwMzA3LDM5LjY5NzQ3OSAzOS45MDEyMzE5LDM5LjYxMzQ0NTQgWlwiXG59KTtcbmNvbnN0IExpdmVqb3VybmFsSWNvbiQxID0gTGl2ZWpvdXJuYWxJY29uO1xuZnVuY3Rpb24gbGl2ZWpvdXJuYWxMaW5rKHVybCwgeyB0aXRsZSwgZGVzY3JpcHRpb24gfSkge1xuICBhc3NlcnQodXJsLCBcImxpdmVqb3VybmFsLnVybFwiKTtcbiAgcmV0dXJuIFwiaHR0cHM6Ly93d3cubGl2ZWpvdXJuYWwuY29tL3VwZGF0ZS5ibWxcIiArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICBzdWJqZWN0OiB0aXRsZSxcbiAgICBldmVudDogZGVzY3JpcHRpb25cbiAgfSk7XG59XG5jb25zdCBMaXZlam91cm5hbFNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oXG4gIFwibGl2ZWpvdXJuYWxcIixcbiAgbGl2ZWpvdXJuYWxMaW5rLFxuICAocHJvcHMpID0+ICh7XG4gICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvblxuICB9KSxcbiAge1xuICAgIHdpbmRvd1dpZHRoOiA2NjAsXG4gICAgd2luZG93SGVpZ2h0OiA0NjBcbiAgfVxuKTtcbmNvbnN0IExpdmVqb3VybmFsU2hhcmVCdXR0b24kMSA9IExpdmVqb3VybmFsU2hhcmVCdXR0b247XG5jb25zdCBNYWlscnVJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiMxNjhERTJcIixcbiAgbmV0d29ya05hbWU6IFwibWFpbHJ1XCIsXG4gIHBhdGg6IFwiTTM5LjcxMDc3NDUsMTcgQzQxLjY2MTk3NTUsMTcgNDMuMzIwNDk2NSwxOC43MzI4NTIgNDMuMzIwNDk2NSwyMS4wMDcyMjAyIEM0My4zMjA0OTY1LDIzLjI4MTU4ODUgNDEuNzU5NTM1NywyNS4wMTQ0NDA0IDM5LjcxMDc3NDUsMjUuMDE0NDQwNCBDMzcuNzU5NTczMiwyNS4wMTQ0NDA0IDM2LjEwMTA1MjIsMjMuMjgxNTg4NSAzNi4xMDEwNTIyLDIxLjAwNzIyMDIgQzM2LjEwMTA1MjIsMTguNzMyODUyIDM3Ljc1OTU3MzIsMTcgMzkuNzEwNzc0NSwxNyBaIE0yNC4zOTM4NDUxLDE3IEMyNi4zNDUwNDYzLDE3IDI4LjAwMzU2NzIsMTguNzMyODUyIDI4LjAwMzU2NzIsMjEuMDA3MjIwMiBDMjguMDAzNTY3MiwyMy4yODE1ODg1IDI2LjQ0MjYwNjMsMjUuMDE0NDQwNCAyNC4zOTM4NDUxLDI1LjAxNDQ0MDQgQzIyLjQ0MjY0MzksMjUuMDE0NDQwNCAyMC43ODQxMjI5LDIzLjI4MTU4ODUgMjAuNzg0MTIyOSwyMS4wMDcyMjAyIEMyMC43ODQxMjI5LDE4LjczMjg1MiAyMi40NDI2NDM5LDE3IDI0LjM5Mzg0NTEsMTcgWiBNNTEuOTA1NzgxNyw0My40MjU5OTI4IEM1MS43MTA2NjE3LDQ0LjA3NTgxMjMgNTEuNDE3OTgxNSw0NC42MTczMjg1IDUwLjkzMDE4MTIsNDQuOTQyMjM4MyBDNTAuNjM3NTAxLDQ1LjE1ODg0NDggNTAuMjQ3MjYwNyw0NS4yNjcxNDggNDkuODU3MDIwNSw0NS4yNjcxNDggQzQ5LjA3NjU0LDQ1LjI2NzE0OCA0OC4zOTM2MTk3LDQ0LjgzMzkzNSA0OC4wMDMzNzk1LDQ0LjA3NTgxMjMgTDQ2LjI0NzI5ODUsNDAuNzE4NDExNSBMNDUuNzU5NDk4LDQxLjI1OTkyNzggQzQyLjU0MDAxNjIsNDQuOTQyMjM4MyAzNy40NjY4OTMsNDcgMzIuMDAzNTI5Nyw0NyBDMjYuNTQwMTY2NCw0NyAyMS41NjQ2MDM0LDQ0Ljk0MjIzODMgMTguMjQ3NTYxNCw0MS4yNTk5Mjc4IEwxNy43NTk3NjExLDQwLjcxODQxMTUgTDE2LjAwMzY4LDQ0LjA3NTgxMjMgQzE1LjYxMzQzOTgsNDQuODMzOTM1IDE0LjkzMDUxOTQsNDUuMjY3MTQ4IDE0LjE1MDAzODksNDUuMjY3MTQ4IEMxMy43NTk3OTg2LDQ1LjI2NzE0OCAxMy4zNjk1NTg0LDQ1LjE1ODg0NDggMTMuMDc2ODc4Miw0NC45NDIyMzgzIEMxMi4wMDM3MTc2LDQ0LjI5MjQxODcgMTEuNzExMDM3NCw0Mi43NzYxNzMzIDEyLjI5NjM5NzgsNDEuNTg0ODM3NSBMMTYuNzg0MTYwNSwzMy4wMjg4ODA3IEMxNy4xNzQ0MDA3LDMyLjI3MDc1OCAxNy44NTczMjExLDMxLjgzNzU0NTMgMTguNjM3ODAxNiwzMS44Mzc1NDUzIEMxOS4wMjgwNDE4LDMxLjgzNzU0NTMgMTkuNDE4MjgyMSwzMS45NDU4NDg1IDE5LjcxMDk2MjMsMzIuMTYyNDU0OCBDMjAuNzg0MTIyOSwzMi44MTIyNzQzIDIxLjA3NjgwMzEsMzQuMzI4NTE5NyAyMC40OTE0NDI3LDM1LjUxOTg1NTUgTDIwLjEwMTIwMjUsMzYuMjc3OTc4MyBMMjAuMjk2MzIyNiwzNi42MDI4ODggQzIyLjQ0MjY0MzksMzkuOTYwMjg4OCAyNy4wMjc5NjY3LDQyLjIzNDY1NyAzMS45MDU5Njk3LDQyLjIzNDY1NyBDMzYuNzgzOTcyNyw0Mi4yMzQ2NTcgNDEuMzY5Mjk1NSw0MC4wNjg1OTIgNDMuNTE1NjE2NywzNi42MDI4ODggTDQzLjcxMDczNjcsMzYuMjc3OTc4MyBMNDMuMzIwNDk2NSwzNS42MjgxNTg3IEM0My4wMjc4MTY1LDM1LjA4NjY0MjUgNDIuOTMwMjU2MiwzNC40MzY4MjMgNDMuMTI1Mzc2NSwzMy43ODcwMDM1IEM0My4zMjA0OTY1LDMzLjEzNzE4NCA0My42MTMxNzY3LDMyLjU5NTY2NzggNDQuMTAwOTc3LDMyLjI3MDc1OCBDNDQuMzkzNjU3MiwzMi4wNTQxNTE1IDQ0Ljc4Mzg5NzUsMzEuOTQ1ODQ4NSA0NS4xNzQxMzc3LDMxLjk0NTg0ODUgQzQ1Ljk1NDYxODIsMzEuOTQ1ODQ4NSA0Ni42Mzc1Mzg1LDMyLjM3OTA2MTMgNDcuMDI3Nzc4NywzMy4xMzcxODQgTDUxLjUxNTU0MTUsNDEuNjkzMTQwOCBDNTIuMDAzMzQyLDQyLjIzNDY1NyA1Mi4xMDA5MDIsNDIuODg0NDc2NSA1MS45MDU3ODE3LDQzLjQyNTk5MjggWlwiXG59KTtcbmNvbnN0IE1haWxydUljb24kMSA9IE1haWxydUljb247XG5mdW5jdGlvbiBtYWlscnVMaW5rKHVybCwgeyB0aXRsZSwgZGVzY3JpcHRpb24sIGltYWdlVXJsIH0pIHtcbiAgYXNzZXJ0KHVybCwgXCJtYWlscnUudXJsXCIpO1xuICByZXR1cm4gXCJodHRwczovL2Nvbm5lY3QubWFpbC5ydS9zaGFyZVwiICsgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgIHVybCxcbiAgICB0aXRsZSxcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpbWFnZV91cmw6IGltYWdlVXJsXG4gIH0pO1xufVxuY29uc3QgTWFpbHJ1U2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbihcbiAgXCJtYWlscnVcIixcbiAgbWFpbHJ1TGluayxcbiAgKHByb3BzKSA9PiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgaW1hZ2VVcmw6IHByb3BzLmltYWdlVXJsXG4gIH0pLFxuICB7XG4gICAgd2luZG93V2lkdGg6IDY2MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQ2MFxuICB9XG4pO1xuY29uc3QgTWFpbHJ1U2hhcmVCdXR0b24kMSA9IE1haWxydVNoYXJlQnV0dG9uO1xuY29uc3QgT0tJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiNGOTc0MDBcIixcbiAgbmV0d29ya05hbWU6IFwib2tcIixcbiAgcGF0aDogXCJNMzksMzBjLTEsMC0zLDItNywycy02LTItNy0yYy0xLjEsMC0yLDAuOS0yLDJjMCwxLDAuNiwxLjUsMSwxLjdjMS4yLDAuNyw1LDIuMyw1LDIuM2wtNC4zLDUuNCAgIGMwLDAtMC44LDAuOS0wLjgsMS42YzAsMS4xLDAuOSwyLDIsMmMxLDAsMS41LTAuNywxLjUtMC43UzMyLDM5LDMyLDM5YzAsMCw0LjUsNS4zLDQuNSw1LjNTMzcsNDUsMzgsNDVjMS4xLDAsMi0wLjksMi0yICAgYzAtMC42LTAuOC0xLjYtMC44LTEuNkwzNSwzNmMwLDAsMy44LTEuNiw1LTIuM2MwLjQtMC4zLDEtMC43LDEtMS43QzQxLDMwLjksNDAuMSwzMCwzOSwzMHogTTMyLDE1Yy0zLjksMC03LDMuMS03LDdzMy4xLDcsNyw3YzMuOSwwLDctMy4xLDctN1MzNS45LDE1LDMyLDE1eiBNMzIsMjUuNSAgIGMtMS45LDAtMy41LTEuNi0zLjUtMy41YzAtMS45LDEuNi0zLjUsMy41LTMuNWMxLjksMCwzLjUsMS42LDMuNSwzLjVDMzUuNSwyMy45LDMzLjksMjIuNSwzNSwyMi41eiBcIlxufSk7XG5jb25zdCBPS0ljb24kMSA9IE9LSWNvbjtcbmZ1bmN0aW9uIG9rTGluayh1cmwsIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBpbWFnZSB9KSB7XG4gIGFzc2VydCh1cmwsIFwib2sudXJsXCIpO1xuICByZXR1cm4gXCJodHRwczovL2Nvbm5lY3Qub2sucnUvb2ZmZXJcIiArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmwsXG4gICAgdGl0bGUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgaW1hZ2VVcmw6IGltYWdlXG4gIH0pO1xufVxuY29uc3QgT0tTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKFxuICBcIm9rXCIsXG4gIG9rTGluayxcbiAgKHByb3BzKSA9PiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZSxcbiAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgaW1hZ2U6IHByb3BzLmltYWdlXG4gIH0pLFxuICB7XG4gICAgd2luZG93V2lkdGg6IDU4OCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQ4MCxcbiAgICB3aW5kb3dQb3NpdGlvbjogXCJzY3JlZW5DZW50ZXJcIlxuICB9XG4pO1xuY29uc3QgT0tTaGFyZUJ1dHRvbiQxID0gT0tTaGFyZUJ1dHRvbjtcbmZ1bmN0aW9uIGdldE9LU2hhcmVDb3VudChzaGFyZVVybCwgY2FsbGJhY2spIHtcbiAgaWYgKCF3aW5kb3cuT0spIHtcbiAgICB3aW5kb3cuT0sgPSB7XG4gICAgICBTaGFyZToge1xuICAgICAgICBjb3VudDogZnVuY3Rpb24gY291bnQoaW5kZXgyLCBfY291bnQpIHtcbiAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgIChfYiA9IChfYSA9IHdpbmRvdy5PSy5jYWxsYmFja3MpW2luZGV4Ml0pID09IG51bGwgPyB2b2lkIDAgOiBfYi5jYWxsKF9hLCBfY291bnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2FsbGJhY2tzOiBbXVxuICAgIH07XG4gIH1cbiAgY29uc3QgdXJsID0gXCJodHRwczovL2Nvbm5lY3Qub2sucnUvZGtcIjtcbiAgY29uc3QgaW5kZXggPSB3aW5kb3cuT0suY2FsbGJhY2tzLmxlbmd0aDtcbiAgd2luZG93Lk9ES0wgPSB7XG4gICAgdXBkYXRlQ291bnQoaW5kZXgyLCBjb3VudCkge1xuICAgICAgdmFyIF9hLCBfYjtcbiAgICAgIGNvbnN0IGNhbGxiYWNrSW5kZXggPSBpbmRleDIgPT09IFwiXCIgPyAwIDogcGFyc2VJbnQoaW5kZXgyLnJlcGxhY2UoXCJyZWFjdC1zaGFyZS1cIiwgXCJcIiksIDEwKTtcbiAgICAgIChfYiA9IChfYSA9IHdpbmRvdy5PSy5jYWxsYmFja3MpW2NhbGxiYWNrSW5kZXhdKSA9PSBudWxsID8gdm9pZCAwIDogX2IuY2FsbChfYSwgY291bnQgPT09IFwiXCIgPyB2b2lkIDAgOiBwYXJzZUludChjb3VudCwgMTApKTtcbiAgICB9XG4gIH07XG4gIHdpbmRvdy5PSy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gIHJldHVybiBqc29ucChcbiAgICB1cmwgKyBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgICBcInN0LmNtZFwiOiBcImV4dExpa2VcIixcbiAgICAgIHVpZDogYHJlYWN0LXNoYXJlLSR7aW5kZXh9YCxcbiAgICAgIHJlZjogc2hhcmVVcmxcbiAgICB9KVxuICApO1xufVxuY29uc3QgT0tTaGFyZUNvdW50ID0gY3JlYXRlU2hhcmVDb3VudChnZXRPS1NoYXJlQ291bnQpO1xuY29uc3QgUGludGVyZXN0SWNvbiA9IGNyZWF0ZUljb24oe1xuICBjb2xvcjogXCIjRTYwMDIzXCIsXG4gIG5ldHdvcmtOYW1lOiBcInBpbnRlcmVzdFwiLFxuICBwYXRoOiBcIk0zMiwxNmMtOC44LDAtMTYsNy4yLTE2LDE2YzAsNi42LDMuOSwxMi4yLDkuNiwxNC43YzAtMS4xLDAtMi41LDAuMy0zLjcgYzAuMy0xLjMsMi4xLTguNywyLjEtOC43cy0wLjUtMS0wLjUtMi41YzAtMi40LDEuNC00LjEsMy4xLTQuMWMxLjUsMCwyLjIsMS4xLDIuMiwyLjRjMCwxLjUtMC45LDMuNy0xLjQsNS43IGMtMC40LDEuNywwLjksMy4xLDIuNSwzLjFjMywwLDUuMS0zLjksNS4xLTguNWMwLTMuNS0yLjQtNi4xLTYuNy02LjFjLTQuOSwwLTcuOSwzLjYtNy45LDcuN2MwLDEuNCwwLjQsMi40LDEuMSwzLjEgYzAuMywwLjMsMC4zLDAuNSwwLjIsMC45Yy0wLjEsMC4zLTAuMywxLTAuMywxLjNjLTAuMSwwLjQtMC40LDAuNi0wLjgsMC40Yy0yLjItMC45LTMuMy0zLjQtMy4zLTYuMWMwLTQuNSwzLjgtMTAsMTEuNC0xMCBjNi4xLDAsMTAuMSw0LjQsMTAuMSw5LjJjMCw2LjMtMy41LDExLTguNiwxMWMtMS43LDAtMy40LTAuOS0zLjktMmMwLDAtMC45LDMuNy0xLjEsNC40Yy0wLjMsMS4yLTEsMi41LTEuNiwzLjQgYzEuNCwwLjQsMywwLjcsNC41LDAuN2M4LjgsMCwxNi03LjIsMTYtMTZDNDgsMjMuMiw0MC44LDE2LDMyLDE2elwiXG59KTtcbmNvbnN0IFBpbnRlcmVzdEljb24kMSA9IFBpbnRlcmVzdEljb247XG5mdW5jdGlvbiBwaW50ZXJlc3RMaW5rKHVybCwgeyBtZWRpYSwgZGVzY3JpcHRpb24sIHBpbklkIH0pIHtcbiAgaWYgKHBpbklkKSB7XG4gICAgcmV0dXJuIGBodHRwczovL3BpbnRlcmVzdC5jb20vcGluLyR7cGluSWR9L3JlcGluL3gvYDtcbiAgfVxuICBhc3NlcnQodXJsLCBcInBpbnRlcmVzdC51cmxcIik7XG4gIGFzc2VydChtZWRpYSwgXCJwaW50ZXJlc3QubWVkaWFcIik7XG4gIHJldHVybiBcImh0dHBzOi8vcGludGVyZXN0LmNvbS9waW4vY3JlYXRlL2J1dHRvbi9cIiArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmwsXG4gICAgbWVkaWEsXG4gICAgZGVzY3JpcHRpb25cbiAgfSk7XG59XG5jb25zdCBQaW50ZXJlc3RTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKFxuICBcInBpbnRlcmVzdFwiLFxuICBwaW50ZXJlc3RMaW5rLFxuICAocHJvcHMpID0+ICh7XG4gICAgbWVkaWE6IHByb3BzLm1lZGlhLFxuICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICBwaW5JZDogcHJvcHMucGluSWRcbiAgfSksXG4gIHtcbiAgICB3aW5kb3dXaWR0aDogMWUzLFxuICAgIHdpbmRvd0hlaWdodDogNzMwXG4gIH1cbik7XG5jb25zdCBQaW50ZXJlc3RTaGFyZUJ1dHRvbiQxID0gUGludGVyZXN0U2hhcmVCdXR0b247XG5mdW5jdGlvbiBnZXRQaW50ZXJlc3RTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLnBpbnRlcmVzdC5jb20vdjEvdXJscy9jb3VudC5qc29uXCI7XG4gIGpzb25wKFxuICAgIHVybCArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICAgIHVybDogc2hhcmVVcmxcbiAgICB9KSxcbiAgICAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBjYWxsYmFjayhkYXRhID8gZGF0YS5jb3VudCA6IHZvaWQgMCk7XG4gICAgfVxuICApO1xufVxuY29uc3QgUGludGVyZXN0U2hhcmVDb3VudCA9IGNyZWF0ZVNoYXJlQ291bnQoZ2V0UGludGVyZXN0U2hhcmVDb3VudCk7XG5jb25zdCBQb2NrZXRJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiNFRjNGNTZcIixcbiAgbmV0d29ya05hbWU6IFwicG9ja2V0XCIsXG4gIHBhdGg6IFwiTTQxLjA4NCAyOS4wNjVsLTcuNTI4IDcuODgyYTIuMTA0IDIuMTA0IDAgMCAxLTEuNTIxLjY2NiAyLjEwNiAyLjEwNiAwIDAgMS0xLjUyMi0uNjY2bC03LjUyOC03Ljg4MmMtLjg3Ni0uOTE0LS45MDItMi40My0uMDY1LTMuMzg0Ljg0LS45NTUgMi4yMjgtLjk4NyAzLjEtLjA3Mmw2LjAxNSA2LjI4NiA2LjAyMi02LjI4NmMuODgtLjkxOCAyLjI2My0uODgzIDMuMTAyLjA3MS44NDEuOTM4LjgyIDIuNDY1LS4wNiAzLjM4M2wtLjAxNS4wMDJ6bTYuNzc3LTEwLjk3NkM0Ny40NjMgMTYuODQgNDYuMzYxIDE2IDQ1LjE0IDE2SDE4LjkwNWMtMS4yIDAtMi4yODkuODItMi43MTYgMi4wNDQtLjEyNS4zNjMtLjE4OS43NDMtLjE4OSAxLjEyNXYxMC41MzlsLjExMiAyLjA5NmMuNDY0IDQuNzY2IDIuNzMgOC45MzMgNi4yNDMgMTEuODM4LjA2LjA1My4xMjUuMTAyLjE5LjE1M2wuMDQuMDMzYzEuODgyIDEuNDk5IDMuOTg2IDIuNTE0IDYuMjU5IDMuMDE0YTE0LjY2MiAxNC42NjIgMCAwIDAgNi4xMy4wNTJjLjExOC0uMDQyLjIzNS0uMDY1LjM1My0uMDg3LjAzIDAgLjA2NS0uMDIyLjA5OC0uMDQyYTE1LjM5NSAxNS4zOTUgMCAwIDAgNi4wMTEtMi45NDVsLjAzOS0uMDQ1LjE4LS4xNTNjMy41MDItMi45MDIgNS43NjUtNy4wNzIgNi4yNDgtMTEuODUyTDQ4IDI5LjY3NHYtMTAuNTJjMC0uMzY2LS4wNDEtLjcyOC0uMTYxLTEuMDhsLjAyMi4wMTV6XCJcbn0pO1xuY29uc3QgUG9ja2V0SWNvbiQxID0gUG9ja2V0SWNvbjtcbmZ1bmN0aW9uIHBvY2tldExpbmsodXJsLCB7IHRpdGxlIH0pIHtcbiAgYXNzZXJ0KHVybCwgXCJwb2NrZXQudXJsXCIpO1xuICByZXR1cm4gXCJodHRwczovL2dldHBvY2tldC5jb20vc2F2ZVwiICsgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgIHVybCxcbiAgICB0aXRsZVxuICB9KTtcbn1cbmNvbnN0IFBvY2tldFNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oXG4gIFwicG9ja2V0XCIsXG4gIHBvY2tldExpbmssXG4gIChwcm9wcykgPT4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGVcbiAgfSksXG4gIHtcbiAgICB3aW5kb3dXaWR0aDogNTAwLFxuICAgIHdpbmRvd0hlaWdodDogNTAwXG4gIH1cbik7XG5jb25zdCBQb2NrZXRTaGFyZUJ1dHRvbiQxID0gUG9ja2V0U2hhcmVCdXR0b247XG5jb25zdCBSZWRkaXRJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiNGRjU3MDBcIixcbiAgbmV0d29ya05hbWU6IFwicmVkZGl0XCIsXG4gIHBhdGg6IFwiTSA1My4zNDM3NSAzMiBDIDUzLjI3NzM0NCAzMC4xNjAxNTYgNTIuMTM2NzE5IDI4LjUzMTI1IDUwLjQyOTY4OCAyNy44Mzk4NDQgQyA0OC43MjI2NTYgMjcuMTQ4NDM4IDQ2Ljc2OTUzMSAyNy41MjM0MzggNDUuNDQxNDA2IDI4LjgwMDc4MSBDIDQxLjgwMDc4MSAyNi4zMjQyMTkgMzcuNTE5NTMxIDI0Ljk1NzAzMSAzMy4xMjEwOTQgMjQuODYzMjgxIEwgMzUuMTk5MjE5IDE0Ljg3ODkwNiBMIDQyLjA0Njg3NSAxNi4zMjAzMTIgQyA0Mi4yMTQ4NDQgMTcuODgyODEyIDQzLjQ5NjA5NCAxOS4wOTM3NSA0NS4wNjY0MDYgMTkuMTcxODc1IEMgNDYuNjM2NzE5IDE5LjI1MzkwNiA0OC4wMzEyNSAxOC4xODM1OTQgNDguMzU5Mzc1IDE2LjY0NDUzMSBDIDQ4LjY4NzUgMTUuMTA1NDY5IDQ3Ljg0NzY1NiAxMy41NTg1OTQgNDYuMzgyODEyIDEyLjk5MjE4OCBDIDQ0LjkxNDA2MiAxMi40MjU3ODEgNDMuMjUzOTA2IDEzLjAwNzgxMiA0Mi40NjQ4NDQgMTQuMzY3MTg4IEwgMzQuNjI1IDEyLjgwMDc4MSBDIDM0LjM2MzI4MSAxMi43NDIxODggMzQuMDkzNzUgMTIuNzkyOTY5IDMzLjg3MTA5NCAxMi45Mzc1IEMgMzMuNjQ4NDM4IDEzLjA4MjAzMSAzMy40OTIxODggMTMuMzA4NTk0IDMzLjQ0MTQwNiAxMy41NjY0MDYgTCAzMS4wNzAzMTIgMjQuNjcxODc1IEMgMjYuNjE3MTg4IDI0LjczODI4MSAyMi4yNzczNDQgMjYuMTA1NDY5IDE4LjU5Mzc1IDI4LjYwOTM3NSBDIDE3LjI0MjE4OCAyNy4zMzk4NDQgMTUuMjczNDM4IDI2Ljk4ODI4MSAxMy41NzAzMTIgMjcuNzA3MDMxIEMgMTEuODYzMjgxIDI4LjQyOTY4OCAxMC43NDYwOTQgMzAuMDg5ODQ0IDEwLjcxODc1IDMxLjk0MTQwNiBDIDEwLjY5MTQwNiAzMy43ODkwNjIgMTEuNzU3ODEyIDM1LjQ4NDM3NSAxMy40NDE0MDYgMzYuMjU3ODEyIEMgMTMuNDAyMzQ0IDM2LjcyNjU2MiAxMy40MDIzNDQgMzcuMTk1MzEyIDEzLjQ0MTQwNiAzNy42NjQwNjIgQyAxMy40NDE0MDYgNDQuODMyMDMxIDIxLjc5Mjk2OSA1MC42NTYyNSAzMi4wOTc2NTYgNTAuNjU2MjUgQyA0Mi4zOTg0MzggNTAuNjU2MjUgNTAuNzUzOTA2IDQ0LjgzMjAzMSA1MC43NTM5MDYgMzcuNjY0MDYyIEMgNTAuNzg5MDYyIDM3LjE5NTMxMiA1MC43ODkwNjIgMzYuNzI2NTYyIDUwLjc1MzkwNiAzNi4yNTc4MTIgQyA1Mi4zNjMyODEgMzUuNDUzMTI1IDUzLjM3MTA5NCAzMy44MDA3ODEgNTMuMzQzNzUgMzIgWiBNIDIxLjM0Mzc1IDM1LjE5OTIxOSBDIDIxLjM0Mzc1IDMzLjQzMzU5NCAyMi43NzczNDQgMzIgMjQuNTQyOTY5IDMyIEMgMjYuMzEyNSAzMiAyNy43NDIxODggMzMuNDMzNTk0IDI3Ljc0MjE4OCAzNS4xOTkyMTkgQyAyNy43NDIxODggMzYuOTY4NzUgMjYuMzEyNSAzOC4zOTg0MzggMjQuNTQyOTY5IDM4LjM5ODQzOCBDIDIyLjc3NzM0NCAzOC4zOTg0MzggMjEuMzQzNzUgMzYuOTY4NzUgMjEuMzQzNzUgMzUuMTk5MjE5IFogTSAzOS45Mzc1IDQ0IEMgMzcuNjY0MDYyIDQ1LjcxMDkzOCAzNC44NzEwOTQgNDYuNTgyMDMxIDMyLjAzMTI1IDQ2LjQ2NDg0NCBDIDI5LjE5MTQwNiA0Ni41ODIwMzEgMjYuMzk4NDM4IDQ1LjcxMDkzOCAyNC4xMjg5MDYgNDQgQyAyMy44NDc2NTYgNDMuNjU2MjUgMjMuODcxMDk0IDQzLjE1NjI1IDI0LjE4MzU5NCA0Mi44Mzk4NDQgQyAyNC41IDQyLjUyNzM0NCAyNSA0Mi41MDM5MDYgMjUuMzQzNzUgNDIuNzg1MTU2IEMgMjcuMjY5NTMxIDQ0LjE5NTMxMiAyOS42MTcxODggNDQuOTA2MjUgMzIgNDQuODAwNzgxIEMgMzQuMzg2NzE5IDQ0LjkyOTY4OCAzNi43NDYwOTQgNDQuMjQyMTg4IDM4LjY4NzUgNDIuODQ3NjU2IEMgMzkuMDQyOTY5IDQyLjUwMzkwNiAzOS42MDU0NjkgNDIuNTExNzE5IDM5Ljk1MzEyNSA0Mi44NjMyODEgQyA0MC4yOTY4NzUgNDMuMjE4NzUgNDAuMjg5MDYyIDQzLjc4NTE1NiAzOS45Mzc1IDQ0LjEyODkwNiBaIE0gMzkuMzU5Mzc1IDM4LjUyNzM0NCBDIDM3LjU5Mzc1IDM4LjUyNzM0NCAzNi4xNjAxNTYgMzcuMDkzNzUgMzYuMTYwMTU2IDM1LjMyODEyNSBDIDM2LjE2MDE1NiAzMy41NjI1IDM3LjU5Mzc1IDMyLjEyODkwNiAzOS4zNTkzNzUgMzIuMTI4OTA2IEMgNDEuMTI4OTA2IDMyLjEyODkwNiA0Mi41NTg1OTQgMzMuNTYyNSA0Mi41NTg1OTQgMzUuMzI4MTI1IEMgNDIuNTkzNzUgMzYuMjAzMTI1IDQyLjI2OTUzMSAzNy4wNTQ2ODggNDEuNjU2MjUgMzcuNjg3NSBDIDQxLjA0Njg3NSAzOC4zMTY0MDYgNDAuMjAzMTI1IDM4LjY2NDA2MiAzOS4zMjgxMjUgMzguNjU2MjUgWiBNIDM5LjM1OTM3NSAzOC41MjczNDRcIlxufSk7XG5jb25zdCBSZWRkaXRJY29uJDEgPSBSZWRkaXRJY29uO1xuZnVuY3Rpb24gcmVkZGl0TGluayh1cmwsIHsgdGl0bGUgfSkge1xuICBhc3NlcnQodXJsLCBcInJlZGRpdC51cmxcIik7XG4gIHJldHVybiBcImh0dHBzOi8vd3d3LnJlZGRpdC5jb20vc3VibWl0XCIgKyBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgdXJsLFxuICAgIHRpdGxlXG4gIH0pO1xufVxuY29uc3QgUmVkZGl0U2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbihcbiAgXCJyZWRkaXRcIixcbiAgcmVkZGl0TGluayxcbiAgKHByb3BzKSA9PiAoe1xuICAgIHRpdGxlOiBwcm9wcy50aXRsZVxuICB9KSxcbiAge1xuICAgIHdpbmRvd1dpZHRoOiA2NjAsXG4gICAgd2luZG93SGVpZ2h0OiA0NjAsXG4gICAgd2luZG93UG9zaXRpb246IFwid2luZG93Q2VudGVyXCJcbiAgfVxuKTtcbmNvbnN0IFJlZGRpdFNoYXJlQnV0dG9uJDEgPSBSZWRkaXRTaGFyZUJ1dHRvbjtcbmZ1bmN0aW9uIGdhYkxpbmsodXJsLCB7IHRpdGxlIH0pIHtcbiAgYXNzZXJ0KHVybCwgXCJnYWIudXJsXCIpO1xuICByZXR1cm4gXCJodHRwczovL2dhYi5jb20vY29tcG9zZVwiICsgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgIHVybCxcbiAgICB0ZXh0OiB0aXRsZVxuICB9KTtcbn1cbmNvbnN0IEdhYlNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oXG4gIFwiZ2FiXCIsXG4gIGdhYkxpbmssXG4gIChwcm9wcykgPT4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGVcbiAgfSksXG4gIHtcbiAgICB3aW5kb3dXaWR0aDogNjYwLFxuICAgIHdpbmRvd0hlaWdodDogNjQwLFxuICAgIHdpbmRvd1Bvc2l0aW9uOiBcIndpbmRvd0NlbnRlclwiXG4gIH1cbik7XG5jb25zdCBHYWJTaGFyZUJ1dHRvbiQxID0gR2FiU2hhcmVCdXR0b247XG5jb25zdCBHYWJJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiMwMGQxNzhcIixcbiAgbmV0d29ya05hbWU6IFwiZ2FiXCIsXG4gIHBhdGg6IFwibTE3LjA1MDYsMjMuOTc0NTdsNS4xODUxOCwwbDAsMTQuMjM5MzNjMCw2LjgyNjk5IC0zLjcyNjk1LDEwLjA5MzI4IC05LjMzNDcxLDEwLjA5MzI4Yy0yLjU1OTY5LDAgLTQuODI4NDIsLTAuODcyODYgLTYuMjIwODQsLTIuMDcxM2wyLjA3NDc3LC0zLjg4MjgzYzEuMTk4NDQsMC44MTA1MSAyLjMzMTA4LDEuMjk1NDMgMy44NTUxMSwxLjI5NTQzYzIuNzUzNjYsMCA0LjQ0MDQ5LC0xLjk3NDMyIDQuNDQwNDksLTQuODIxNDlsMCwtMC44NzI4NmMtMS4xNjcyOCwxLjM5MjQyIC0yLjgxOTQ3LDIuMDcxMyAtNC42MzQ0NiwyLjA3MTNjLTQuNDQwNDgsMCAtNy44MTA2OCwtMy42ODg4NSAtNy44MTA2OCwtOC4yODUyMWMwLC00LjU5Mjg5IDMuMzcwMTksLTguMjgxNzQgNy44MTA2OCwtOC4yODE3NGMxLjgxNDk5LDAgMy40NjcxOCwwLjY3ODg4IDQuNjM0NDYsMi4wNzEzbDAsLTEuNTU1MjF6bS0zLjYyOTk3LDExLjM5MjE3YzEuOTc3NzcsMCAzLjYyOTk3LC0xLjY1MjIgMy42Mjk5NywtMy42MjY1MmMwLC0xLjk3NDMyIC0xLjY1MjIsLTMuNjIzMDUgLTMuNjI5OTcsLTMuNjIzMDVjLTEuOTc3NzgsMCAtMy42Mjk5NywxLjY0ODczIC0zLjYyOTk3LDMuNjIzMDVjMCwxLjk3NDMyIDEuNjUyMTksMy42MjY1MiAzLjYyOTk3LDMuNjI2NTJ6bTI1LjcwNzcsNC4xMzkxM2wtNS4xODUxOCwwbDAsLTEuMjkxOTdjLTEuMDA0NDgsMS4xMzI2NCAtMi4zOTY5LDEuODExNTIgLTQuMjExODgsMS44MTE1MmMtMy42Mjk5NywwIC01LjYzODkzLC0yLjUyNTA0IC01LjYzODkzLC01LjQwMzRjMCwtNC4yNzA3NiA1LjI1MSwtNS44NTcxNSA5Ljc4ODQ2LC00LjQ5OTM3Yy0wLjA5Njk4LC0xLjM5MjQxIC0wLjk3MzMsLTIuMzkzNDMgLTIuNzg4MjksLTIuMzkzNDNjLTEuMjY0MjYsMCAtMi43MjI0OCwwLjQ4NDkyIC0zLjYyOTk3LDEuMDAxMDJsLTEuNTU1MiwtMy43MjAwM2MxLjE5ODQ0LC0wLjc3NTg3IDMuNDAxMzYsLTEuNTUxNzQgNS45NjQ1MiwtMS41NTE3NGMzLjc4OTMxLDAgNy4yNTY0OCwyLjEzMzY1IDcuMjU2NDgsNy45NTk2MmwwLDguMDg3Nzd6bS01LjE4NTE4LC02LjE0ODA5Yy0yLjQyODA2LC0wLjc3NTg3IC00LjY2NTYzLC0wLjM1MzMgLTQuNjY1NjMsMS4zNjEyNGMwLDEuMDAxMDEgMC44NDE2OCwxLjY3OTkgMS44NDYxNiwxLjY3OTljMS4yMDE5MSwwIDIuNTYzMTUsLTAuOTY5ODQgMi44MTk0NywtMy4wNDExNXptMTMuMDA2MjYsLTE3LjY2NDk1bDAsOS44MzY5NWMxLjE2NzI3LC0xLjM5MjQyIDIuODE5NDYsLTIuMDcxMyA0LjYzNDQ1LC0yLjA3MTNjNC40NDA0OCwwIDcuODEwNjgsMy42ODg4NSA3LjgxMDY4LDguMjgxNzRjMCw0LjU5NjM2IC0zLjM3MDE5LDguMjg1MjEgLTcuODEwNjgsOC4yODUyMWMtMS44MTQ5OSwwIC0zLjQ2NzE4LC0wLjY3ODg4IC00LjYzNDQ1LC0yLjA3MTNsMCwxLjU1MTc0bC01LjE4NTE5LDBsMCwtMjMuODEzMDRsNS4xODUxOSwwem0zLjYyOTk3LDE5LjY3MzkxYzEuOTc3NzcsMCAzLjYyOTk3LC0xLjY1MjIgMy42Mjk5NywtMy42MjY1MmMwLC0xLjk3NDMyIC0xLjY1MjIsLTMuNjIzMDUgLTMuNjI5OTcsLTMuNjIzMDVjLTEuOTc3NzgsMCAtMy42Mjk5NywxLjY0ODczIC0zLjYyOTk3LDMuNjIzMDVjMCwxLjk3NDMyIDEuNjUyMTksMy42MjY1MiAzLjYyOTk3LDMuNjI2NTJ6bTAsMFwiXG59KTtcbmNvbnN0IEdhYkljb24kMSA9IEdhYkljb247XG5mdW5jdGlvbiBnZXRSZWRkaXRTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICBjb25zdCBlbmRwb2ludCA9IGBodHRwczovL3d3dy5yZWRkaXQuY29tL2FwaS9pbmZvLmpzb24/bGltaXQ9MSZ1cmw9JHtzaGFyZVVybH1gO1xuICBqc29ucChlbmRwb2ludCwgeyBwYXJhbTogXCJqc29ucFwiIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgY2FsbGJhY2soXG4gICAgICAhZXJyICYmIHJlc3BvbnNlICYmIHJlc3BvbnNlLmRhdGEgJiYgcmVzcG9uc2UuZGF0YS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIHJlc3BvbnNlLmRhdGEuY2hpbGRyZW5bMF0uZGF0YS5zY29yZSA/IHJlc3BvbnNlLmRhdGEuY2hpbGRyZW5bMF0uZGF0YS5zY29yZSA6IHZvaWQgMFxuICAgICk7XG4gIH0pO1xufVxuY29uc3QgUmVkZGl0U2hhcmVDb3VudCA9IGNyZWF0ZVNoYXJlQ291bnQoZ2V0UmVkZGl0U2hhcmVDb3VudCk7XG5jb25zdCBUZWxlZ3JhbUljb24gPSBjcmVhdGVJY29uKHtcbiAgY29sb3I6IFwiIzI1QTNFM1wiLFxuICBuZXR3b3JrTmFtZTogXCJ0ZWxlZ3JhbVwiLFxuICBwYXRoOiBcIm00NS45MDg3MywxNS40NDMzNWMtMC42OTAxLC0wLjAyODEgLTEuMzc2NjgsMC4xNDA0OCAtMS45NjE0MiwwLjQxMjY1Yy0wLjg0OTg5LDAuMzI2NjEgLTguNjM5MzksMy4zMzk4NiAtMTYuNTIzNyw2LjM5MTc0Yy0zLjk2ODUsMS41MzI5NiAtNy45MzM0OSwzLjA2NTkzIC0xMC45ODUzNyw0LjI0MDY3Yy0zLjA1MDEyLDEuMTc2NSAtNS4zNDY5NCwyLjA1MDk4IC01LjQ2ODEsMi4wOTMxMmMtMC44MDc3NSwwLjI4MDk2IC0xLjg5OTk2LDAuNjM1NjYgLTIuODI3MTIsMS43Mjc4OGMtMC4yMzM1NCwwLjI3MjE4IC0wLjQ2ODg0LDAuNjIxNjEgLTAuNTg4MjUsMS4xMDI3NWMtMC4xMTk0MSwwLjQ4MTE0IC0wLjA2NjczLDEuMDkyMjIgMC4xNjY4MiwxLjU3MTZjMC40NjUzMywwLjk2MDUyIDEuMjUzNzYsMS4zNTczNyAyLjE4NDQzLDEuNzEzODNjMy4wOTA1MSwwLjk5MDM3IDYuMjg2MzgsMS45MzUwOCA4LjkzMjYzLDIuODIzNmMwLjk3NjMyLDMuNDQxNzEgMS45MTQwMSw2Ljg5NTcxIDIuODQxMTYsMTAuMzQyNjhjMC4zMDU1NCwwLjY5MTg1IDAuOTcxMDUsMC45NDgyMyAxLjY1NzY0LDAuOTU1MjVsLTAuMDAzNTEsMC4wMzUxMmMwLDAgMC41MzkwOCwwLjA1MjY4IDEuMDY0MTIsLTAuMDczNzVjMC41MjY3OSwtMC4xMjI5MiAxLjE4ODc5LC0wLjQyODQ2IDEuNzkxMDksLTAuOTkyMTJjMC42NjIsLTAuNjIxNjEgMi40NTgzNiwtMi4zODgxMiAzLjQ3NjgzLC0zLjM4NTUybDcuNjczNiw1LjY2NDc3bDAuMDYxNDYsMC4wMzUxMmMwLDAgMC44NDk4OSwwLjU5NzAzIDIuMDkzMTIsMC42ODEzMmMwLjYyMTYxLDAuMDQyMTQgMS40Mzk5LC0wLjA3NzI2IDIuMTQyMjksLTAuNTkxNzZjMC43MDc2NiwtMC41MTYyNiAxLjE3NjUsLTEuMzQ2ODMgMS4zOTYsLTIuMjk1MDZjMC42NTY3MywtMi44NjIyNCA1LjAwOTc5LC0yMy41Nzc0NSA1Ljc1MjU3LC0yNy4wMDY4NmwtMC4wMjEwNywwLjA4MDc3YzAuNTE5NzcsLTEuOTMxNTcgMC4zMjgzNywtMy43MDE1OSAtMC44NzA5NiwtNC43NDk5MWMtMC42MDA1NCwtMC41MjE1MiAtMS4yOTI0LC0wLjc0OTggLTEuOTg0MjUsLTAuNzc5NjVsMCwwLjAwMTc2em0tMC4yMDcyLDMuMjkwNjljMC4wNDc0MSwwLjA0MzkgMC4wNDM5LDAuMDQzOSAwLjAwMzUxLDAuMDQ3NDFjLTAuMDEyMjksLTAuMDAzNTEgMC4xNDA0OCwwLjIwNzIgLTAuMTU4MDQsMS4zMjU3NmwtMC4wMTIyOSwwLjA0MjE0bC0wLjAwODc4LDAuMDM4NjNjLTAuNzU4NTgsMy41MDY2OCAtNS4xNTU1NCwyNC40MDgwMiAtNS43NDIwMywyNi45NjQ3MmMtMC4wODA3NywwLjM0NDE3IC0wLjExNDE0LDAuMzE5NTkgLTAuMDk0ODIsMC4yOTg1MmMtMC4xNzU2LC0wLjAyNjM0IC0wLjUwMDQ1LC0wLjE2NTA2IC0wLjUyNjc5LC0wLjE3NTZsLTEzLjEzNDY4LC05LjcwMTc1YzQuNDk4OCwtNC4zMzE5OSA5LjA5OTQ1LC04LjI1MzA3IDEzLjc0NCwtMTIuNDMyMjljMC44MjE4LC0wLjQxMjY1IDAuNjg0ODMsLTEuNjg1NzMgLTAuMjk4NTIsLTEuNzA2ODFjLTEuMDQzMDUsMC4yNDU4NCAtMS45MjI3OSwwLjk5NTY0IC0yLjg3OTgsMS40NzUwMmMtNS40OTk3MSwzLjI2MjYgLTExLjExODgyLDYuMTMxODYgLTE2LjU1ODgyLDkuNDkyNzljLTIuNzkyLC0wLjk3MTA1IC01LjU3ODczLC0xLjc3NzA0IC04LjE1Mjk4LC0yLjU3NjAxYzIuMjMzNiwtMC44OTU1NSA0LjAwODg5LC0xLjU1NTc5IDUuNzU2MDgsLTIuMjMwMDljMy4wNTE4OCwtMS4xNzY1IDcuMDE2ODcsLTIuNzA0MiAxMC45ODUzNywtNC4yNDA2N2M3Ljk0MDUxLC0zLjA2OTQ0IDE1LjkyNjY3LC02LjE2MzQ2IDE2LjYyMDI4LC02LjQzMDM3bDAuMDU2MTksLTAuMDIyODNsMC4wNTI2OCwtMC4wMjI4M2MwLjE5MzE2LC0wLjA4NzggMC4zMDM3OCwtMC4wOTY1OCAwLjM1NDcxLC0wLjEwMDA5YzAsMCAtMC4wMTc1NiwtMC4wNTc5NSAtMC4wMDM1MSwtMC4wNDU2NmwtMC4wMDE3Niwwem0tMjAuOTE3MTUsMjIuMDYzOGwyLjE2Njg3LDEuNjAxNDVjLTAuOTM0MTgsMC45MTMxMSAtMS44MTc0MywxLjc3MzUzIC0yLjQ1NDg1LDIuMzg4MTJsMC4yODc5OCwtMy45ODk1N1wiXG59KTtcbmNvbnN0IFRlbGVncmFtSWNvbiQxID0gVGVsZWdyYW1JY29uO1xuZnVuY3Rpb24gdGVsZWdyYW1MaW5rKHVybCwgeyB0aXRsZSB9KSB7XG4gIGFzc2VydCh1cmwsIFwidGVsZWdyYW0udXJsXCIpO1xuICByZXR1cm4gXCJodHRwczovL3RlbGVncmFtLm1lL3NoYXJlL3VybFwiICsgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgIHVybCxcbiAgICB0ZXh0OiB0aXRsZVxuICB9KTtcbn1cbmNvbnN0IFRlbGVncmFtU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbihcbiAgXCJ0ZWxlZ3JhbVwiLFxuICB0ZWxlZ3JhbUxpbmssXG4gIChwcm9wcykgPT4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGVcbiAgfSksXG4gIHtcbiAgICB3aW5kb3dXaWR0aDogNTUwLFxuICAgIHdpbmRvd0hlaWdodDogNDAwXG4gIH1cbik7XG5jb25zdCBUZWxlZ3JhbVNoYXJlQnV0dG9uJDEgPSBUZWxlZ3JhbVNoYXJlQnV0dG9uO1xuY29uc3QgVHVtYmxySWNvbiA9IGNyZWF0ZUljb24oe1xuICBjb2xvcjogXCIjMzQ1MjZmXCIsXG4gIG5ldHdvcmtOYW1lOiBcInR1bWJsclwiLFxuICBwYXRoOiBcIk0zOS4yLDQxYy0wLjYsMC4zLTEuNiwwLjUtMi40LDAuNWMtMi40LDAuMS0yLjktMS43LTIuOS0zdi05LjNoNnYtNC41aC02VjE3YzAsMC00LjMsMC00LjQsMCBjLTAuMSwwLTAuMiwwLjEtMC4yLDAuMmMtMC4zLDIuMy0xLjQsNi40LTUuOSw4LjF2My45aDNWMzljMCwzLjQsMi41LDguMSw5LDhjMi4yLDAsNC43LTEsNS4yLTEuOEwzOS4yLDQxelwiXG59KTtcbmNvbnN0IFR1bWJsckljb24kMSA9IFR1bWJsckljb247XG5mdW5jdGlvbiB0dW1ibHJMaW5rKHVybCwge1xuICB0aXRsZSxcbiAgY2FwdGlvbixcbiAgdGFncyxcbiAgcG9zdHR5cGVcbn0pIHtcbiAgYXNzZXJ0KHVybCwgXCJ0dW1ibHIudXJsXCIpO1xuICByZXR1cm4gXCJodHRwczovL3d3dy50dW1ibHIuY29tL3dpZGdldHMvc2hhcmUvdG9vbFwiICsgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgIGNhbm9uaWNhbFVybDogdXJsLFxuICAgIHRpdGxlLFxuICAgIGNhcHRpb24sXG4gICAgdGFncyxcbiAgICBwb3N0dHlwZVxuICB9KTtcbn1cbmNvbnN0IFR1bWJsclNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oXG4gIFwidHVtYmxyXCIsXG4gIHR1bWJsckxpbmssXG4gIChwcm9wcykgPT4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgdGFnczogKHByb3BzLnRhZ3MgfHwgW10pLmpvaW4oXCIsXCIpLFxuICAgIGNhcHRpb246IHByb3BzLmNhcHRpb24sXG4gICAgcG9zdHR5cGU6IHByb3BzLnBvc3R0eXBlIHx8IFwibGlua1wiXG4gIH0pLFxuICB7XG4gICAgd2luZG93V2lkdGg6IDY2MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDQ2MFxuICB9XG4pO1xuY29uc3QgVHVtYmxyU2hhcmVCdXR0b24kMSA9IFR1bWJsclNoYXJlQnV0dG9uO1xuZnVuY3Rpb24gZ2V0VHVtYmxyU2hhcmVDb3VudChzaGFyZVVybCwgY2FsbGJhY2spIHtcbiAgY29uc3QgZW5kcG9pbnQgPSBcImh0dHBzOi8vYXBpLnR1bWJsci5jb20vdjIvc2hhcmUvc3RhdHNcIjtcbiAgcmV0dXJuIGpzb25wKFxuICAgIGVuZHBvaW50ICsgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgdXJsOiBzaGFyZVVybFxuICAgIH0pLFxuICAgIChlcnIsIGRhdGEpID0+IHtcbiAgICAgIGNhbGxiYWNrKCFlcnIgJiYgZGF0YSAmJiBkYXRhLnJlc3BvbnNlID8gZGF0YS5yZXNwb25zZS5ub3RlX2NvdW50IDogdm9pZCAwKTtcbiAgICB9XG4gICk7XG59XG5jb25zdCBUdW1ibHJTaGFyZUNvdW50ID0gY3JlYXRlU2hhcmVDb3VudChnZXRUdW1ibHJTaGFyZUNvdW50KTtcbmNvbnN0IFR3aXR0ZXJJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiMwMGFjZWRcIixcbiAgbmV0d29ya05hbWU6IFwidHdpdHRlclwiLFxuICBwYXRoOiBcIk00OCwyMi4xYy0xLjIsMC41LTIuNCwwLjktMy44LDFjMS40LTAuOCwyLjQtMi4xLDIuOS0zLjZjLTEuMywwLjgtMi43LDEuMy00LjIsMS42IEM0MS43LDE5LjgsNDAsMTksMzguMiwxOWMtMy42LDAtNi42LDIuOS02LjYsNi42YzAsMC41LDAuMSwxLDAuMiwxLjVjLTUuNS0wLjMtMTAuMy0yLjktMTMuNS02LjljLTAuNiwxLTAuOSwyLjEtMC45LDMuMyBjMCwyLjMsMS4yLDQuMywyLjksNS41Yy0xLjEsMC0yLjEtMC4zLTMtMC44YzAsMCwwLDAuMSwwLDAuMWMwLDMuMiwyLjMsNS44LDUuMyw2LjRjLTAuNiwwLjEtMS4xLDAuMi0xLjcsMC4yYy0wLjQsMC0wLjgsMC0xLjItMC4xIGMwLjgsMi42LDMuMyw0LjUsNi4xLDQuNmMtMi4yLDEuOC01LjEsMi44LTguMiwyLjhjLTAuNSwwLTEuMSwwLTEuNi0wLjFjMi45LDEuOSw2LjQsMi45LDEwLjEsMi45YzEyLjEsMCwxOC43LTEwLDE4LjctMTguNyBjMC0wLjMsMC0wLjYsMC0wLjhDNDYsMjQuNSw0Ny4xLDIzLjQsNDgsMjIuMXpcIlxufSk7XG5jb25zdCBUd2l0dGVySWNvbiQxID0gVHdpdHRlckljb247XG5mdW5jdGlvbiB0d2l0dGVyTGluayh1cmwsIHtcbiAgdGl0bGUsXG4gIHZpYSxcbiAgaGFzaHRhZ3MgPSBbXSxcbiAgcmVsYXRlZCA9IFtdXG59KSB7XG4gIGFzc2VydCh1cmwsIFwidHdpdHRlci51cmxcIik7XG4gIGFzc2VydChBcnJheS5pc0FycmF5KGhhc2h0YWdzKSwgXCJ0d2l0dGVyLmhhc2h0YWdzIGlzIG5vdCBhbiBhcnJheVwiKTtcbiAgYXNzZXJ0KEFycmF5LmlzQXJyYXkocmVsYXRlZCksIFwidHdpdHRlci5yZWxhdGVkIGlzIG5vdCBhbiBhcnJheVwiKTtcbiAgcmV0dXJuIFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9pbnRlbnQvdHdlZXRcIiArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmwsXG4gICAgdGV4dDogdGl0bGUsXG4gICAgdmlhLFxuICAgIGhhc2h0YWdzOiBoYXNodGFncy5sZW5ndGggPiAwID8gaGFzaHRhZ3Muam9pbihcIixcIikgOiB2b2lkIDAsXG4gICAgcmVsYXRlZDogcmVsYXRlZC5sZW5ndGggPiAwID8gcmVsYXRlZC5qb2luKFwiLFwiKSA6IHZvaWQgMFxuICB9KTtcbn1cbmNvbnN0IFR3aXR0ZXJTaGFyZUJ1dHRvbiA9IGNyZWF0ZVNoYXJlQnV0dG9uKFxuICBcInR3aXR0ZXJcIixcbiAgdHdpdHRlckxpbmssXG4gIChwcm9wcykgPT4gKHtcbiAgICBoYXNodGFnczogcHJvcHMuaGFzaHRhZ3MsXG4gICAgdGl0bGU6IHByb3BzLnRpdGxlLFxuICAgIHZpYTogcHJvcHMudmlhLFxuICAgIHJlbGF0ZWQ6IHByb3BzLnJlbGF0ZWRcbiAgfSksXG4gIHtcbiAgICB3aW5kb3dXaWR0aDogNTUwLFxuICAgIHdpbmRvd0hlaWdodDogNDAwXG4gIH1cbik7XG5jb25zdCBUd2l0dGVyU2hhcmVCdXR0b24kMSA9IFR3aXR0ZXJTaGFyZUJ1dHRvbjtcbmNvbnN0IFZpYmVySWNvbiA9IGNyZWF0ZUljb24oe1xuICBjb2xvcjogXCIjNzM2MGYyXCIsXG4gIG5ldHdvcmtOYW1lOiBcInZpYmVyXCIsXG4gIHBhdGg6IFwibTMxLjAsMTIuM2M5LjAsMC4yIDE2LjQsNi4yIDE4LjAsMTUuMmMwLjIsMS41IDAuMywzLjAgMC40LDQuNmExLjAsMS4wIDAgMCAxIC0wLjgsMS4ybC0wLjEsMGExLjEsMS4xIDAgMCAxIC0xLjAsLTEuMmwwLDBjLTAuMCwtMS4yIC0wLjEsLTIuNSAtMC4zLC0zLjhhMTYuMSwxNi4xIDAgMCAwIC0xMy4wLC0xMy41Yy0xLjAsLTAuMSAtMi4wLC0wLjIgLTMuMCwtMC4zYy0wLjYsLTAuMCAtMS40LC0wLjEgLTEuNiwtMC44YTEuMSwxLjEgMCAwIDEgMC45LC0xLjJsMC42LDBsMC4wLC0wLjB6bTEwLjYsMzkuMmExOS45LDE5LjkgMCAwIDEgLTIuMSwtMC42Yy02LjksLTIuOSAtMTMuMiwtNi42IC0xOC4zLC0xMi4yYTQ3LjUsNDcuNSAwIDAgMSAtNy4wLC0xMC43Yy0wLjgsLTEuOCAtMS42LC0zLjcgLTIuNCwtNS42Yy0wLjYsLTEuNyAwLjMsLTMuNCAxLjQsLTQuN2ExMS4zLDExLjMgMCAwIDEgMy43LC0yLjhhMi40LDIuNCAwIDAgMSAzLjAsMC43YTM5LjAsMzkuMCAwIDAgMSA0LjcsNi41YTMuMSwzLjEgMCAwIDEgLTAuOCw0LjJjLTAuMywwLjIgLTAuNiwwLjUgLTEuMCwwLjhhMy4zLDMuMyAwIDAgMCAtMC43LDAuN2EyLjEsMi4xIDAgMCAwIC0wLjEsMS45YzEuNyw0LjkgNC43LDguNyA5LjcsMTAuOGE1LjAsNS4wIDAgMCAwIDIuNSwwLjZjMS41LC0wLjEgMi4wLC0xLjggMy4xLC0yLjdhMi45LDIuOSAwIDAgMSAzLjUsLTAuMWMxLjEsMC43IDIuMiwxLjQgMy4zLDIuMmEzNy44LDM3LjggMCAwIDEgMy4xLDIuNGEyLjQsMi40IDAgMCAxIDAuNywzLjBhMTAuNCwxMC40IDAgMCAxIC00LjQsNC44YTEwLjgsMTAuOCAwIDAgMSAtMS45LDAuNmMtMC43LC0wLjIgMC42LC0wLjIgMCwwbDAuMCwwbDAsLTAuMHptMy4xLC0yMS40YTQuMiw0LjIgMCAwIDEgLTAuMCwwLjZhMS4wLDEuMCAwIDAgMSAtMS45LDAuMWEyLjcsMi43IDAgMCAxIC0wLjEsLTAuOGExMC45LDEwLjkgMCAwIDAgLTEuNCwtNS41YTEwLjIsMTAuMiAwIDAgMCAtNC4yLC00LjBhMTIuMywxMi4zIDAgMCAwIC0zLjQsLTEuMGMtMC41LC0wLjAgLTEuMCwtMC4xIC0xLjUsLTAuMmEwLjksMC45IDAgMCAxIC0wLjksLTEuMGwwLC0wLjFhMC45LDAuOSAwIDAgMSAwLjksLTAuOWwwLjEsMGExNC4xLDE0LjEgMCAwIDEgNS45LDEuNWExMS45LDExLjkgMCAwIDEgNi41LDkuM2MwLDAuMSAwLjAsMC4zIDAuMCwwLjVjMCwwLjQgMC4wLDAuOSAwLjAsMS41bDAsMGwwLjAsMC4wem0tNS42LC0wLjJhMS4xLDEuMSAwIDAgMSAtMS4yLC0wLjlsMCwtMC4xYTExLjMsMTEuMyAwIDAgMCAtMC4yLC0xLjRhNC4wLDQuMCAwIDAgMCAtMS41LC0yLjNhMy45LDMuOSAwIDAgMCAtMS4yLC0wLjVjLTAuNSwtMC4xIC0xLjEsLTAuMSAtMS42LC0wLjJhMS4wLDEuMCAwIDAgMSAtMC44LC0xLjFsMCwwbDAsMGExLjAsMS4wIDAgMCAxIDEuMSwtMC44YzMuNCwwLjIgNi4wLDIuMCA2LjMsNi4yYTIuOCwyLjggMCAwIDEgMCwwLjhhMC44LDAuOCAwIDAgMSAtMC44LDAuN2wwLDBsMC4wLC0wLjB6XCJcbn0pO1xuY29uc3QgVmliZXJJY29uJDEgPSBWaWJlckljb247XG5mdW5jdGlvbiB2aWJlckxpbmsodXJsLCB7IHRpdGxlLCBzZXBhcmF0b3IgfSkge1xuICBhc3NlcnQodXJsLCBcInZpYmVyLnVybFwiKTtcbiAgcmV0dXJuIFwidmliZXI6Ly9mb3J3YXJkXCIgKyBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgdGV4dDogdGl0bGUgPyB0aXRsZSArIHNlcGFyYXRvciArIHVybCA6IHVybFxuICB9KTtcbn1cbmNvbnN0IFZpYmVyU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbihcbiAgXCJ2aWJlclwiLFxuICB2aWJlckxpbmssXG4gIChwcm9wcykgPT4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgc2VwYXJhdG9yOiBwcm9wcy5zZXBhcmF0b3IgfHwgXCIgXCJcbiAgfSksXG4gIHtcbiAgICB3aW5kb3dXaWR0aDogNjYwLFxuICAgIHdpbmRvd0hlaWdodDogNDYwXG4gIH1cbik7XG5jb25zdCBWaWJlclNoYXJlQnV0dG9uJDEgPSBWaWJlclNoYXJlQnV0dG9uO1xuY29uc3QgVktJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiM0Qzc1QTNcIixcbiAgbmV0d29ya05hbWU6IFwidmtcIixcbiAgcGF0aDogXCJNNDQuOTQsNDQuODRoLTAuMmMtMi4xNy0uMzYtMy42Ni0xLjkyLTQuOTItMy4zN0MzOS4xLDQwLjY2LDM4LDM4LjgxLDM2LjcsMzljLTEuODUuMy0uOTMsMy41Mi0xLjcxLDQuOS0wLjYyLDEuMTEtMy4yOS45MS01LjEyLDAuNzEtNS43OS0uNjItOC43NS0zLjc3LTExLjM1LTcuMTRBNjQuMTMsNjQuMTMsMCwwLDEsMTEuNiwyNmExMC41OSwxMC41OSwwLDAsMS0xLjUxLTQuNDlDMTEsMjAuNywxMi41NiwyMSwxNC4xMSwyMWMxLjMxLDAsMy4zNi0uMjksNC4zMi4yQzE5LDIxLjQ2LDE5LjU3LDIzLDIwLDI0YTM3LjE4LDM3LjE4LDAsMCwwLDMuMzEsNS44MmMwLjU2LDAuODEsMS40MSwyLjM1LDIuNDEsMi4xNHMxLjA2LTIuNjMsMS4xLTQuMThjMC0xLjc3LDAtNC0uNS00LjlTMjUsMjIsMjQuMTUsMjEuNDdjMC43My0xLjQ5LDIuNzItMS42Myw1LjEyLTEuNjMsMiwwLDQuODQtLjIzLDUuNjIsMS4xMnMwLjI1LDMuODUuMiw1LjcxYy0wLjA2LDIuMDktLjQxLDQuMjUsMSw1LjIxLDEuMDktLjEyLDEuNjgtMS4yLDIuMzEtMkEyOCwyOCwwLDAsMCw0MS43MiwyNGMwLjQ0LTEsLjkxLTIuNjUsMS43MS0zLDEuMjEtLjQ3LDMuMTUtMC4xLDQuOTItMC4xLDEuNDYsMCw0LjA1LS40MSw0LjUyLjYxLDAuMzksMC44NS0uNzUsMy0xLjEsMy41N2E2MS44OCw2MS44OCwwLDAsMS00LjEyLDUuNjFjLTAuNTguNzgtMS43OCwyLTEuNzEsMy4yNywwLjA1LDAuOTQsMSwxLjY3LDEuNzEsMi4zNWEzMy4xMiwzMy4xMiwwLDAsMSwzLjkyLDQuMThjMC40NywwLjYyLDEuNSwyLDEuNCwyLjc2QzUyLjY2LDQ1LjgxLDQ2Ljg4LDQ0LjI0LDQ0Ljk0LDQ0Ljg0WlwiXG59KTtcbmNvbnN0IFZLSWNvbiQxID0gVktJY29uO1xuZnVuY3Rpb24gdmtMaW5rKHVybCwgeyB0aXRsZSwgaW1hZ2UsIG5vUGFyc2UsIG5vVmtMaW5rcyB9KSB7XG4gIGFzc2VydCh1cmwsIFwidmsudXJsXCIpO1xuICByZXR1cm4gXCJodHRwczovL3ZrLmNvbS9zaGFyZS5waHBcIiArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmwsXG4gICAgdGl0bGUsXG4gICAgaW1hZ2UsXG4gICAgbm9wYXJzZTogbm9QYXJzZSA/IDEgOiAwLFxuICAgIG5vX3ZrX2xpbmtzOiBub1ZrTGlua3MgPyAxIDogMFxuICB9KTtcbn1cbmNvbnN0IFZLU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbihcbiAgXCJ2a1wiLFxuICB2a0xpbmssXG4gIChwcm9wcykgPT4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgaW1hZ2U6IHByb3BzLmltYWdlLFxuICAgIG5vUGFyc2U6IHByb3BzLm5vUGFyc2UsXG4gICAgbm9Wa0xpbmtzOiBwcm9wcy5ub1ZrTGlua3NcbiAgfSksXG4gIHtcbiAgICB3aW5kb3dXaWR0aDogNjYwLFxuICAgIHdpbmRvd0hlaWdodDogNDYwXG4gIH1cbik7XG5jb25zdCBWS1NoYXJlQnV0dG9uJDEgPSBWS1NoYXJlQnV0dG9uO1xuZnVuY3Rpb24gZ2V0VktTaGFyZUNvdW50KHNoYXJlVXJsLCBjYWxsYmFjaykge1xuICBpZiAoIXdpbmRvdy5WSylcbiAgICB3aW5kb3cuVksgPSB7fTtcbiAgd2luZG93LlZLLlNoYXJlID0ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgY291bnQ6IChpbmRleDIsIGNvdW50KSA9PiB7XG4gICAgICB2YXIgX2EsIF9iO1xuICAgICAgcmV0dXJuIChfYiA9IChfYSA9IHdpbmRvdy5WSy5jYWxsYmFja3MpID09IG51bGwgPyB2b2lkIDAgOiBfYVtpbmRleDJdKSA9PSBudWxsID8gdm9pZCAwIDogX2IuY2FsbChfYSwgY291bnQpO1xuICAgIH1cbiAgfTtcbiAgd2luZG93LlZLLmNhbGxiYWNrcyA9IFtdO1xuICBjb25zdCB1cmwgPSBcImh0dHBzOi8vdmsuY29tL3NoYXJlLnBocFwiO1xuICBjb25zdCBpbmRleCA9IHdpbmRvdy5WSy5jYWxsYmFja3MubGVuZ3RoO1xuICB3aW5kb3cuVksuY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICByZXR1cm4ganNvbnAoXG4gICAgdXJsICsgb2JqZWN0VG9HZXRQYXJhbXMoe1xuICAgICAgYWN0OiBcImNvdW50XCIsXG4gICAgICBpbmRleCxcbiAgICAgIHVybDogc2hhcmVVcmxcbiAgICB9KVxuICApO1xufVxuY29uc3QgVktTaGFyZUNvdW50ID0gY3JlYXRlU2hhcmVDb3VudChnZXRWS1NoYXJlQ291bnQpO1xuY29uc3QgV2VpYm9JY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiNERjIwMjlcIixcbiAgbmV0d29ya05hbWU6IFwid2VpYm9cIixcbiAgcGF0aDogXCJNNDAuOTc1NjE1MiwxNS4wMjE3MTE5IEM0MC41MDAwNzMyLDE1LjA1NDYzMDEgMzkuOTk5OTMxNCwxNS4xMjA0NjY2IDM5LjUzMjU4NzgsMTUuMjE5MjIxMyBDMzguNjYzNDkyOCwxNS40MDg1MDE2IDM4LjA5Nzc1ODksMTYuMjY0Mzc1NyAzOC4yODYzMzY4LDE3LjEyODQ3ODcgQzM4LjQ2NjcxNjMsMTguMDAwODEyOSAzOS4zMTk0MTQzLDE4LjU2ODY1MTkgNDAuMTg4NTA5NCwxOC4zNzkzNzE1IEM0Mi44NjEzOTA4LDE3LjgxMTUzMjYgNDUuNzcyMDQxMSwxOC42NDI3MTc0IDQ3LjczMTYwNzMsMjAuODE1MzIwNyBDNDkuNjkxMTczNSwyMi45OTYxNTMgNTAuMjA3NzEyMiwyNS45NzUyNTQgNDkuMzcxNDExMiwyOC41ODQwMjM0IEM0OS4xMDA4NDQxLDI5LjQzMTY2ODQgNDkuNTc2Mzg2MSwzMC4zNTMzNzg5IDUwLjQyMDg4NTcsMzAuNjI0OTUzNyBDNTEuMjY1Mzg1MiwzMC44OTY1Mjg2IDUyLjE3NTQ3NjksMzAuNDE5MjE1MyA1Mi40NTQyNDI1LDI5LjU3MTU3MDMgQzUzLjYzNDkwMTMsMjUuOTAxMTg4NSA1Mi45MTMzODc2LDIxLjc2OTk0OTQgNTAuMTU4NTE3MSwxOC43MDg1NTM4IEM0OC4wOTIzNjQxLDE2LjQwNDI3NzYgNDUuMjA2MzA5MywxNS4xNTMzODQ4IDQyLjM1MzA1MDUsMTUuMDIxNzExOSBDNDEuODc3NTA4NCwxNC45OTcwMjI3IDQxLjQ1MTE1OTQsMTQuOTg4NzkzNyA0MC45NzU2MTUyLDE1LjAyMTcxMTkgWiBNMjcuOTIyNzc2MiwxOS44Mjc3NzM3IEMyNC45OTU3MjY4LDIwLjE0MDQ5OCAyMC44NjM0MjEsMjIuNDM2NTQzMSAxNy4yMzEyNTQ4LDI2LjA4MjIzNzggQzEzLjI3MTEyNzksMzAuMDU3MTE0OCAxMSwzNC4yODcxMDY1IDExLDM3LjkzMjgwMTIgQzExLDQ0LjkwMzIzNzMgMTkuODcxMzQwMSw0OS4xMjUgMjguNTc4Njk3OCw0OS4xMjUgQzM5Ljk5MTczMjksNDkuMTI1IDQ3LjYwMDQyMyw0Mi40MjYxNDA5IDQ3LjYwMDQyMywzNy4xNDI3NjM2IEM0Ny42MDA0MjMsMzMuOTQ5Njk1MiA0NC45NjAzMzk3LDMyLjE2Mzg4MTYgNDIuNTQ5ODI3LDMxLjQxNDk5MTMgQzQxLjk1OTQ5NzYsMzEuMjMzOTQyMSA0MS41MTY3NTE2LDMxLjE0MzQxNjQgNDEuODI4MzEzMywzMC4zNjE2MDc5IEM0Mi41MDA2MzM5LDI4LjY2NjMyIDQyLjYyMzYxNzYsMjcuMTkzMjI4NiA0MS44OTM5MDU0LDI2LjE0ODA3NDIgQzQwLjUzMjg2OTIsMjQuMTg5NDQwNSAzNi43MjAzMjM2LDI0LjI4ODE5NTIgMzIuNDQ4NjM1LDI2LjA4MjIzNzggQzMyLjQ0ODYzNSwyNi4wODIyMzc4IDMxLjEyMDM5NDksMjYuNjkxMjI2MSAzMS40NjQ3NTI2LDI1LjYyMTM4MjUgQzMyLjEyMDY3NDIsMjMuNDk4MTU3NiAzMi4wMzA0ODQ1LDIxLjcxMjM0MiAzMS4wMDU2MDc1LDIwLjY4MzY0NzggQzMwLjI4NDA5MzgsMTkuOTUxMjE3NiAyOS4yNTEwMTg0LDE5LjY4Nzg3MTggMjcuOTIyNzc2MiwxOS44Mjc3NzM3IFogTTQyLjA5MDY4MTksMjAuNjgzNjQ3OCBDNDEuNjIzMzM4MywyMC42NTg5NTg2IDQxLjE3MjM5MTcsMjAuNzE2NTY2IDQwLjcxMzI0NjYsMjAuODE1MzIwNyBDMzkuOTY3MTM1MywyMC45NzE2ODI4IDM5LjQ5OTc5MTcsMjEuNzc4MTc4NCAzOS42NjM3NzIxLDIyLjUyNzA2ODcgQzM5LjgyNzc1MjUsMjMuMjc1OTU5IDQwLjU1NzQ2NDcsMjMuNzQ1MDQzMyA0MS4zMDM1NzYsMjMuNTgwNDUyMSBDNDIuMTk3MjY4NiwyMy4zOTExNzE4IDQzLjIwNTc0ODUsMjMuNjM4MDU5NiA0My44NjE2NzAxLDI0LjM3MDQ4OTcgQzQ0LjUxNzU5MTYsMjUuMTAyOTE5OCA0NC42NzMzNzM1LDI2LjA2NTc3OTcgNDQuMzg2NDA3MywyNi45MzgxMTE4IEM0NC4xNDg2MzYzLDI3LjY3MDU0MTkgNDQuNTA5MzkzMiwyOC40NzcwMzk3IDQ1LjIzOTEwNTQsMjguNzE1Njk2MyBDNDUuOTY4ODE3NiwyOC45NDYxMjM5IDQ2Ljc4MDUyMSwyOC41OTIyNTI0IDQ3LjAxMDA5MzYsMjcuODU5ODIyMyBDNDcuNTg0MDI2LDI2LjA3NDAwODcgNDcuMjM5NjY2MSwyNC4wMjQ4NDkzIDQ1Ljg5NTAyNjksMjIuNTI3MDY4NyBDNDQuODg2NTQ3LDIxLjQwNzg0ODkgNDMuNDg0NTE2MiwyMC43NDk0ODQyIDQyLjA5MDY4MTksMjAuNjgzNjQ3OCBaIE0yOS40OTY5ODgsMjkuOTY2NTg5MSBDMzUuMzEwMDkyMiwzMC4xNzIzMjc1IDM5Ljk5MTczMjksMzMuMDY5MTMxOSA0MC4zODUyODU4LDM3LjA3NjkyNzIgQzQwLjgzNjIzMjQsNDEuNjYwNzkwNCAzNS41OTcwNTg1LDQ1LjkzMTkzMTUgMjguNjQ0Mjg5OSw0Ni42MjMyMTQ0IEMyMS42OTE1MjE0LDQ3LjMxNDQ5NzMgMTUuNjQ4ODQ0Niw0NC4xNTQzNDcgMTUuMTk3ODk4LDM5LjU3ODcxMjggQzE0Ljc0Njk1MTQsMzQuOTk0ODQ5NSAyMC4wNTk5MTYsMzAuNzIzNzA4NCAyNy4wMDQ0ODYsMzAuMDMyNDI1NiBDMjcuODczNTgzMSwyOS45NTAxMzEgMjguNjY4ODg3NSwyOS45MzM2NzA5IDI5LjQ5Njk4OCwyOS45NjY1ODkxIFogTTI1LjU2MTQ1ODYsMzQuMzc3NjMyMiBDMjMuMTgzNzQ0LDM0LjU5MTYwMTcgMjAuOTM3MjExNiwzNS45NTc3MDczIDE5LjkyMDUzMzIsMzcuOTMyODAxMiBDMTguNTM0ODk5NCw0MC42MjM4NjcyIDE5LjkwNDEzNjIsNDMuNjAyOTY2MSAyMy4wNjg5NTY3LDQ0LjU4MjI4NCBDMjYuMzQwMzY2LDQ1LjU5NDUyMDIgMzAuMTg1NzA1Niw0NC4wNjM4MjEzIDMxLjUzMDM0NDgsNDEuMTU4Nzg3OSBDMzIuODUwMzg2NCwzOC4zMTk1OTA5IDMxLjE2MTM4OTQsMzUuMzczNDA4MiAyNy45MjI3NzYyLDM0LjU3NTE0MTYgQzI3LjE0Mzg2ODgsMzQuMzc3NjMyMiAyNi4zNTY3NjMsMzQuMzAzNTY2NyAyNS41NjE0NTg2LDM0LjM3NzYzMjIgWiBNMjQuMDUyODM5LDM4LjcyMjgzODggQzI0LjMzMTYwNjcsMzguNzMxMDY3OCAyNC41ODU3NzQ4LDM4LjgyMTU5MzUgMjQuODM5OTQ0OSwzOC45MjAzNDgyIEMyNS44NjQ4MjE4LDM5LjM0MDA1NjEgMjYuMTg0NTg0MSw0MC40NDI4MTU4IDI1LjU2MTQ1ODYsNDEuNDIyMTMzOCBDMjQuOTIxOTM2MSw0Mi4zOTMyMjI3IDIzLjU2OTA5NjMsNDIuODYyMzA2OSAyMi41NDQyMTk0LDQyLjQwOTY4MDcgQzIxLjUzNTczOTUsNDEuOTY1Mjg1NiAyMS4yNDg3NzU0LDQwLjg1NDI5NDggMjEuODg4Mjk3OSwzOS45MDc4OTUxIEMyMi4zNjM4NDIxLDM5LjIwMDE1NDIgMjMuMjI0NzM4NiwzOC43MTQ2MDk3IDI0LjA1MjgzOSwzOC43MjI4Mzg4IFpcIlxufSk7XG5jb25zdCBXZWlib0ljb24kMSA9IFdlaWJvSWNvbjtcbmZ1bmN0aW9uIHdlaWJvTGluayh1cmwsIHsgdGl0bGUsIGltYWdlIH0pIHtcbiAgYXNzZXJ0KHVybCwgXCJ3ZWliby51cmxcIik7XG4gIHJldHVybiBcImh0dHA6Ly9zZXJ2aWNlLndlaWJvLmNvbS9zaGFyZS9zaGFyZS5waHBcIiArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1cmwsXG4gICAgdGl0bGUsXG4gICAgcGljOiBpbWFnZVxuICB9KTtcbn1cbmNvbnN0IFdlaWJvU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbihcbiAgXCJ3ZWlib1wiLFxuICB3ZWlib0xpbmssXG4gIChwcm9wcykgPT4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgaW1hZ2U6IHByb3BzLmltYWdlXG4gIH0pLFxuICB7XG4gICAgd2luZG93V2lkdGg6IDY2MCxcbiAgICB3aW5kb3dIZWlnaHQ6IDU1MCxcbiAgICB3aW5kb3dQb3NpdGlvbjogXCJzY3JlZW5DZW50ZXJcIlxuICB9XG4pO1xuY29uc3QgV2VpYm9TaGFyZUJ1dHRvbiQxID0gV2VpYm9TaGFyZUJ1dHRvbjtcbmNvbnN0IFdoYXRzYXBwSWNvbiA9IGNyZWF0ZUljb24oe1xuICBjb2xvcjogXCIjMjVEMzY2XCIsXG4gIG5ldHdvcmtOYW1lOiBcIndoYXRzYXBwXCIsXG4gIHBhdGg6IFwibTQyLjMyMjg2LDMzLjkzMjg3Yy0wLjUxNzgsLTAuMjU4OSAtMy4wNDcyNiwtMS40OTY0NCAtMy41MjEwNSwtMS42NjczMmMtMC40NzEyLC0wLjE3MzQ2IC0wLjgxNTU0LC0wLjI1ODkgLTEuMTU5ODcsMC4yNTg5Yy0wLjM0MTc1LDAuNTEwMDQgLTEuMzMwNzUsMS42NjQ3NCAtMS42MzEwOCwyLjAwNjQ4Yy0wLjMwMDMyLDAuMzM2NTggLTAuNjAwNjQsMC4zNjI0NyAtMS4xMTMyNywwLjEyOTQ1Yy0wLjUxNzgsLTAuMjU4OSAtMi4xNzk5NCwtMC44MDI1OSAtNC4xNDc1OSwtMi41NjMxMmMtMS41MzI2OSwtMS4zNzIxNyAtMi41NjMxMiwtMy4wNTUwMyAtMi44NjYwMywtMy41NzI4M2MtMC4zMDAzMywtMC41MTc4IC0wLjAzMzY2LC0wLjgwMjU5IDAuMjI1MjQsLTEuMDYxNDljMC4yMzMwMSwtMC4yMzMwMSAwLjUxNzgsLTAuNTk1NDcgMC43NzY3LC0wLjkwNjE2YzAuMjUzNzIsLTAuMzEwNjggMC4zMzY1NywtMC41MTc4IDAuNTEyNjIsLTAuODU0MzdjMC4xNzA4OCwtMC4zNjI0NiAwLjA4NTQ0LC0wLjY0NzI1IC0wLjA0NDAyLC0wLjkwNjE1Yy0wLjEyOTQ1LC0wLjI1ODkgLTEuMTU5ODcsLTIuNzk2MTMgLTEuNTg5NjQsLTMuODA1ODRjLTAuNDE0MjQsLTEuMDA5NzEgLTAuODQxNDIsLTAuODgwMjcgLTEuMTU5ODcsLTAuODgwMjdjLTAuMjk3NzMsLTAuMDI1ODggLTAuNjQyMDgsLTAuMDI1ODggLTAuOTgzODIsLTAuMDI1ODhjLTAuMzQ2OTMsMCAtMC45MDYxNiwwLjEyOTQ1IC0xLjM3NzM2LDAuNjIxMzZjLTAuNDcxMiwwLjUxNzggLTEuODAxOTQsMS43NjA1MyAtMS44MDE5NCw0LjI3MTg2YzAsMi41MTEzNCAxLjg0NTk2LDQuOTQ1IDIuMTAyMjcsNS4zMDc0N2MwLjI1ODksMC4zMzY1NyAzLjYzNDk3LDUuNTE0NTggOC44MDI2Miw3Ljc0MTEzYzEuMjMyMzcsMC41MTc4IDIuMTkwMywwLjgyODQ4IDIuOTQxMTEsMS4wODczOGMxLjIzMjM3LDAuMzg4MzYgMi4zNTU5OSwwLjMzNjU3IDMuMjQ0MDIsMC4yMDcxMmMwLjk5MTU5LC0wLjE1NTM0IDMuMDQ5ODUsLTEuMjQyNzIgMy40Nzk2MywtMi40NTk1NmMwLjQ0MDEzLC0xLjIxNjgzIDAuNDQwMTMsLTIuMjI2NTQgMC4zMTA2OCwtMi40NTk1NWMtMC4xMjk0NSwtMC4yMzMwMSAtMC40NjYwMSwtMC4zNjI0NyAtMC45ODM4MiwtMC41OTU0OG0tOS40MDA2OCwxMi44NDQwN2wtMC4wMjU4OSwwYy0zLjA1NTAzLDAgLTYuMDg0MTcsLTAuODI4NDkgLTguNzI0OTUsLTIuMzgxODlsLTAuNjIxMzYsLTAuMzcwMjNsLTYuNDcyNTIsMS42ODI4NmwxLjczNDYzLC02LjI5MTI5bC0wLjQxNDI0LC0wLjY0NzI1Yy0xLjcwODc1LC0yLjcxODQ2IC0yLjYxNDksLTUuODUxMTYgLTIuNjE0OSwtOS4wNzcwNmMwLC05LjM5ODA5IDcuNjg5MzQsLTE3LjA2MTU1IDE3LjE1OTkzLC0xNy4wNjE1NWM0LjU4MjUzLDAgOC44ODAyOSwxLjc4NjQyIDEyLjExNjU1LDUuMDIyNjhjMy4yMzYyNSwzLjIxMDM2IDUuMDIyNjcsNy41MDgxMiA1LjAyMjY3LDEyLjA2NDc2Yy0wLjAwNzgsOS4zOTgxIC03LjY5NzEyLDE3LjA2MTU1IC0xNy4xNDY5OSwxNy4wNjE1NW0xNC41ODkwNiwtMzEuNTg4NDZjLTMuOTM1MjksLTMuODA1ODQgLTkuMTEzMywtNS45NTQ3MSAtMTQuNjI3ODksLTUuOTU0NzFjLTExLjM2MDU1LDAgLTIwLjYwODQ4LDkuMjA2NSAtMjAuNjE2MjUsMjAuNTI1NjRjMCwzLjYxNjg0IDAuOTQ3NTcsNy4xNDU2NSAyLjc1MjExLDEwLjI2MjgybC0yLjkyNTU3LDEwLjYzNTY0bDEwLjkzMzM3LC0yLjg1MzA5YzMuMDEzNiwxLjYzMTA4IDYuNDA1MiwyLjQ5NTggOS44NTYzNCwyLjQ5ODM5bDAuMDEwMzcsMGMxMS4zNjU3NCwwIDIwLjYxODg0LC05LjIwOTEgMjAuNjI0MDMsLTIwLjUzMDgyYzAsLTUuNDgwOTMgLTIuMTQxMTEsLTEwLjY0MDgxIC02LjAzMjM5LC0xNC41MTkxNVwiXG59KTtcbmNvbnN0IFdoYXRzYXBwSWNvbiQxID0gV2hhdHNhcHBJY29uO1xuZnVuY3Rpb24gaXNNb2JpbGVPclRhYmxldCgpIHtcbiAgcmV0dXJuIC8oYW5kcm9pZHxpcGhvbmV8aXBhZHxtb2JpbGUpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbn1cbmZ1bmN0aW9uIHdoYXRzYXBwTGluayh1cmwsIHsgdGl0bGUsIHNlcGFyYXRvciB9KSB7XG4gIGFzc2VydCh1cmwsIFwid2hhdHNhcHAudXJsXCIpO1xuICByZXR1cm4gXCJodHRwczovL1wiICsgKGlzTW9iaWxlT3JUYWJsZXQoKSA/IFwiYXBpXCIgOiBcIndlYlwiKSArIFwiLndoYXRzYXBwLmNvbS9zZW5kXCIgKyBvYmplY3RUb0dldFBhcmFtcyh7XG4gICAgdGV4dDogdGl0bGUgPyB0aXRsZSArIHNlcGFyYXRvciArIHVybCA6IHVybFxuICB9KTtcbn1cbmNvbnN0IFdoYXRzYXBwU2hhcmVCdXR0b24gPSBjcmVhdGVTaGFyZUJ1dHRvbihcbiAgXCJ3aGF0c2FwcFwiLFxuICB3aGF0c2FwcExpbmssXG4gIChwcm9wcykgPT4gKHtcbiAgICB0aXRsZTogcHJvcHMudGl0bGUsXG4gICAgc2VwYXJhdG9yOiBwcm9wcy5zZXBhcmF0b3IgfHwgXCIgXCJcbiAgfSksXG4gIHtcbiAgICB3aW5kb3dXaWR0aDogNTUwLFxuICAgIHdpbmRvd0hlaWdodDogNDAwXG4gIH1cbik7XG5jb25zdCBXaGF0c2FwcFNoYXJlQnV0dG9uJDEgPSBXaGF0c2FwcFNoYXJlQnV0dG9uO1xuY29uc3QgV29ya3BsYWNlSWNvbiA9IGNyZWF0ZUljb24oe1xuICBjb2xvcjogXCIjNDMyNmM0XCIsXG4gIG5ldHdvcmtOYW1lOiBcIndvcmtwbGFjZVwiLFxuICBwYXRoOiBcIk0zNC4wMTksMTAuMjkyYzAuMjEsMC4wMTcsMC40MjMsMC4wMzQsMC42MzYsMC4wNDkgYzMuNjU3LDAuMjYyLDYuOTc2LDEuNDY0LDkuOTI5LDMuNjM1YzMuMzMxLDIuNDQ4LDUuNjM1LDUuNjUsNi45MTQsOS41ODRjMC42OTksMi4xNTIsMC45ODMsNC4zNjUsMC44ODUsNi42MjMgYy0wLjEzNiwzLjE3MS0xLjAwOCw2LjEzLTIuNjE5LDguODY3Yy0wLjQ0MiwwLjc1LTAuOTA4LDEuNDkyLTEuNDk1LDIuMTQxYy0wLjU4OCwwLjY1MS0xLjI5LDEuMTQxLTIuMTQ2LDEuMzgzIGMtMS40OTYsMC40MjYtMy4yNDctMC4yODMtMy45NjEtMS42NDJjLTAuMjYtMC40OTQtMC40NDItMS4wMjgtMC42NTQtMS41NDhjLTEuMTU2LTIuODM4LTIuMzExLTUuNjc5LTMuNDY1LTguNTE5IGMtMC4wMTctMC4wNDItMC4wMzctMC4wODItMC4wNjUtMC4xNDVjLTAuMTAxLDAuMjQ1LTAuMTkyLDAuNDcyLTAuMjg0LDAuNjk4Yy0xLjIzNywzLjA1MS0yLjQ3NSw2LjEwMy0zLjcxMSw5LjE1NSBjLTAuNDY2LDEuMTUzLTEuMzUxLDEuODE1LTIuNTM4LDIuMDQ1Yy0xLjM5MSwwLjI2Ny0yLjU3Ny0wLjE1NC0zLjQ5Ni0xLjI0N2MtMC4xNzQtMC4yMDktMC4zMS0wLjQ2NC0wLjQxNS0wLjcxNyBjLTIuMTI4LTUuMjItNC4yNDgtMTAuNDQyLTYuMzctMTUuNjY1Yy0wLjAxMi0wLjAyOS0wLjAyMS0wLjA1OS0wLjAzNi0wLjEwNGMwLjA1NC0wLjAwMywwLjEwMy0wLjAwNiwwLjE1LTAuMDA2IGMxLjQ5OC0wLjAwMSwyLjk5NywwLDQuNDk1LTAuMDA0YzAuMTItMC4wMDEsMC4xNzYsMC4wMywwLjIyMiwwLjE0NmMxLjU1NywzLjg0NiwzLjExNyw3LjY5MSw0LjY3OSwxMS41MzYgYzAuMDE4LDAuMDQ2LDAuMDM5LDAuMDkxLDAuMDY3LDAuMTU5YzAuMjczLTAuNjczLDAuNTM2LTEuMzIsMC43OTctMS45NjhjMS4wNjQtMi42MjcsMi4xMzctNS4yNSwzLjE5LTcuODgzIGMwLjQ4Mi0xLjIwOCwxLjM3Ni0xLjkxNywyLjYyMS0yLjEzNWMxLjQ1NC0wLjI1NSwyLjY0NCwwLjI1NywzLjUyMiwxLjQ0OWMwLjEzMywwLjE4LDAuMjI5LDAuMzkzLDAuMzEzLDAuNjAzIGMxLjQyNSwzLjQ5NSwyLjg0OCw2Ljk5MSw0LjI2OSwxMC40ODhjMC4wMiwwLjA0NywwLjA0LDAuMDkzLDAuMDczLDAuMTcyYzAuMTk2LTAuMzI3LDAuMzg1LTAuNjI1LDAuNTU5LTAuOTM1IGMwLjc4My0xLjM5NywxLjMyMy0yLjg4NiwxLjYxNC00LjQ2MWMwLjI0Mi0xLjMxMiwwLjMwNC0yLjYzNCwwLjE4Ny0zLjk2MmMtMC4yNDItMi43MjEtMS4xNi01LjE5Mi0yLjc5Mi03LjM4IGMtMi4xOTMtMi45MzktNS4wODYtNC44MjQtOC42NzMtNS42MjVjLTEuNTUzLTAuMzQ2LTMuMTI0LTAuNDA1LTQuNzA1LTAuMjU3Yy0zLjE2MiwwLjI5OC02LjAzNiwxLjM2Ni04LjU4NSwzLjI1OCBjLTMuNDE0LDIuNTM0LTUuNjM4LDUuODcxLTYuNjIzLDEwLjAxNmMtMC40MTcsMS43Ni0wLjU0NiwzLjU0Ny0wLjM4NCw1LjM0OGMwLjQxNyw0LjYwMSwyLjM1OSw4LjQ0NCw1LjgwNCwxMS41MTcgYzIuMzI1LDIuMDczLDUuMDM3LDMuMzkzLDguMDk0LDMuOTg5YzEuNjE3LDAuMzE3LDMuMjQ3LDAuMzk1LDQuODg5LDAuMjQyYzEtMC4wOTQsMS45ODItMC4yNjgsMi45NTItMC41MjkgYzAuMDQtMC4wMSwwLjA4MS0wLjAxOCwwLjEyOC0wLjAyOGMwLDEuNTI2LDAsMy4wNDcsMCw0LjU4NmMtMC40MDIsMC4wNzQtMC44MDUsMC4xNTQtMS4yMSwwLjIyMSBjLTAuODYxLDAuMTQtMS43MjgsMC4yMzEtMi42MDEsMC4yNThjLTAuMDM1LDAuMDAyLTAuMDcxLDAuMDEzLTAuMTA4LDAuMDIxYy0wLjQ5MywwLTAuOTgzLDAtMS40NzYsMCBjLTAuMDQ5LTAuMDA3LTAuMS0wLjAxOC0wLjE0OS0wLjAyMmMtMC4zMTUtMC4wMTktMC42MjktMC4wMzMtMC45NDUtMC4wNThjLTEuMzYyLTAuMTA1LTIuNzAyLTAuMzQ2LTQuMDE3LTAuNzE2IGMtMy4yNTQtMC45MTQtNi4xNDUtMi40OTUtOC42Ni00Ljc1MmMtMi4xOTUtMS45NzEtMy45MjYtNC4yOS01LjE3Ni02Ljk2M2MtMS4xNTItMi40NjYtMS44MjItNS4wNTctMS45OTMtNy43NzQgYy0wLjAxNC0wLjIyNi0wLjAzMy0wLjQ1MS0wLjA1LTAuNjc2YzAtMC41MDIsMC0xLjAwMywwLTEuNTA0YzAuMDA4LTAuMDQ5LDAuMDItMC4wOTksMC4wMjItMC4xNDggYzAuMDM2LTEuMDI1LDAuMTUyLTIuMDQzLDAuMzM4LTMuMDUyYzAuNDgxLTIuNjE2LDEuNDA5LTUuMDY2LDIuOC03LjMzMWMyLjIyNi0zLjYyNSw1LjI1LTYuMzg2LDkuMDc0LTguMjU0IGMyLjUzNi0xLjI0LDUuMjE3LTEuOTQ3LDguMDM3LTIuMTI2YzAuMjMtMC4wMTUsMC40NjEtMC4wMzQsMC42OTEtMC4wNTFDMzMuMDUyLDEwLjI5MiwzMy41MzUsMTAuMjkyLDM0LjAxOSwxMC4yOTJ6XCJcbn0pO1xuY29uc3QgV29ya3BsYWNlSWNvbiQxID0gV29ya3BsYWNlSWNvbjtcbmZ1bmN0aW9uIHdvcmtwbGFjZUxpbmsodXJsLCB7IHF1b3RlLCBoYXNodGFnIH0pIHtcbiAgYXNzZXJ0KHVybCwgXCJ3b3JrcGxhY2UudXJsXCIpO1xuICByZXR1cm4gXCJodHRwczovL3dvcmsuZmFjZWJvb2suY29tL3NoYXJlci5waHBcIiArIG9iamVjdFRvR2V0UGFyYW1zKHtcbiAgICB1OiB1cmwsXG4gICAgcXVvdGUsXG4gICAgaGFzaHRhZ1xuICB9KTtcbn1cbmNvbnN0IFdvcmtwbGFjZVNoYXJlQnV0dG9uID0gY3JlYXRlU2hhcmVCdXR0b24oXG4gIFwid29ya3BsYWNlXCIsXG4gIHdvcmtwbGFjZUxpbmssXG4gIChwcm9wcykgPT4gKHtcbiAgICBxdW90ZTogcHJvcHMucXVvdGUsXG4gICAgaGFzaHRhZzogcHJvcHMuaGFzaHRhZ1xuICB9KSxcbiAge1xuICAgIHdpbmRvd1dpZHRoOiA1NTAsXG4gICAgd2luZG93SGVpZ2h0OiA0MDBcbiAgfVxuKTtcbmNvbnN0IFdvcmtwbGFjZVNoYXJlQnV0dG9uJDEgPSBXb3JrcGxhY2VTaGFyZUJ1dHRvbjtcbmNvbnN0IFhJY29uID0gY3JlYXRlSWNvbih7XG4gIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgbmV0d29ya05hbWU6IFwiWFwiLFxuICBwYXRoOiBcIk0gNDEuMTE2IDE4LjM3NSBoIDQuOTYyIGwgLTEwLjg0MDUgMTIuMzkgbCAxMi43NTMgMTYuODYgSCAzOC4wMDUgbCAtNy44MjEgLTEwLjIyNTUgTCAyMS4yMzUgNDcuNjI1IEggMTYuMjcgbCAxMS41OTUgLTEzLjI1MjUgTCAxNS42MzEgMTguMzc1IEggMjUuODcgbCA3LjA2OTUgOS4zNDY1IHogbSAtMS43NDE1IDI2LjI4IGggMi43NDk1IEwgMjQuMzc2IDIxLjE4OSBIIDIxLjQyNTUgelwiXG59KTtcbmNvbnN0IFhJY29uJDEgPSBYSWNvbjtcbmV4cG9ydCB7XG4gIEVtYWlsSWNvbiQxIGFzIEVtYWlsSWNvbixcbiAgRW1haWxTaGFyZUJ1dHRvbiQxIGFzIEVtYWlsU2hhcmVCdXR0b24sXG4gIEZhY2Vib29rSWNvbiQxIGFzIEZhY2Vib29rSWNvbixcbiAgRmFjZWJvb2tNZXNzZW5nZXJJY29uJDEgYXMgRmFjZWJvb2tNZXNzZW5nZXJJY29uLFxuICBGYWNlYm9va01lc3NlbmdlclNoYXJlQnV0dG9uJDEgYXMgRmFjZWJvb2tNZXNzZW5nZXJTaGFyZUJ1dHRvbixcbiAgRmFjZWJvb2tTaGFyZUJ1dHRvbiQxIGFzIEZhY2Vib29rU2hhcmVCdXR0b24sXG4gIEZhY2Vib29rU2hhcmVDb3VudCxcbiAgR2FiSWNvbiQxIGFzIEdhYkljb24sXG4gIEdhYlNoYXJlQnV0dG9uJDEgYXMgR2FiU2hhcmVCdXR0b24sXG4gIEhhdGVuYUljb24kMSBhcyBIYXRlbmFJY29uLFxuICBIYXRlbmFTaGFyZUJ1dHRvbiQxIGFzIEhhdGVuYVNoYXJlQnV0dG9uLFxuICBIYXRlbmFTaGFyZUNvdW50LFxuICBJbnN0YXBhcGVySWNvbiQxIGFzIEluc3RhcGFwZXJJY29uLFxuICBJbnN0YXBhcGVyU2hhcmVCdXR0b24kMSBhcyBJbnN0YXBhcGVyU2hhcmVCdXR0b24sXG4gIExpbmVJY29uJDEgYXMgTGluZUljb24sXG4gIExpbmVTaGFyZUJ1dHRvbiQxIGFzIExpbmVTaGFyZUJ1dHRvbixcbiAgTGlua2VkaW5JY29uJDEgYXMgTGlua2VkaW5JY29uLFxuICBMaW5rZWRpblNoYXJlQnV0dG9uJDEgYXMgTGlua2VkaW5TaGFyZUJ1dHRvbixcbiAgTGl2ZWpvdXJuYWxJY29uJDEgYXMgTGl2ZWpvdXJuYWxJY29uLFxuICBMaXZlam91cm5hbFNoYXJlQnV0dG9uJDEgYXMgTGl2ZWpvdXJuYWxTaGFyZUJ1dHRvbixcbiAgTWFpbHJ1SWNvbiQxIGFzIE1haWxydUljb24sXG4gIE1haWxydVNoYXJlQnV0dG9uJDEgYXMgTWFpbHJ1U2hhcmVCdXR0b24sXG4gIE9LSWNvbiQxIGFzIE9LSWNvbixcbiAgT0tTaGFyZUJ1dHRvbiQxIGFzIE9LU2hhcmVCdXR0b24sXG4gIE9LU2hhcmVDb3VudCxcbiAgUGludGVyZXN0SWNvbiQxIGFzIFBpbnRlcmVzdEljb24sXG4gIFBpbnRlcmVzdFNoYXJlQnV0dG9uJDEgYXMgUGludGVyZXN0U2hhcmVCdXR0b24sXG4gIFBpbnRlcmVzdFNoYXJlQ291bnQsXG4gIFBvY2tldEljb24kMSBhcyBQb2NrZXRJY29uLFxuICBQb2NrZXRTaGFyZUJ1dHRvbiQxIGFzIFBvY2tldFNoYXJlQnV0dG9uLFxuICBSZWRkaXRJY29uJDEgYXMgUmVkZGl0SWNvbixcbiAgUmVkZGl0U2hhcmVCdXR0b24kMSBhcyBSZWRkaXRTaGFyZUJ1dHRvbixcbiAgUmVkZGl0U2hhcmVDb3VudCxcbiAgVGVsZWdyYW1JY29uJDEgYXMgVGVsZWdyYW1JY29uLFxuICBUZWxlZ3JhbVNoYXJlQnV0dG9uJDEgYXMgVGVsZWdyYW1TaGFyZUJ1dHRvbixcbiAgVHVtYmxySWNvbiQxIGFzIFR1bWJsckljb24sXG4gIFR1bWJsclNoYXJlQnV0dG9uJDEgYXMgVHVtYmxyU2hhcmVCdXR0b24sXG4gIFR1bWJsclNoYXJlQ291bnQsXG4gIFR3aXR0ZXJJY29uJDEgYXMgVHdpdHRlckljb24sXG4gIFR3aXR0ZXJTaGFyZUJ1dHRvbiQxIGFzIFR3aXR0ZXJTaGFyZUJ1dHRvbixcbiAgVktJY29uJDEgYXMgVktJY29uLFxuICBWS1NoYXJlQnV0dG9uJDEgYXMgVktTaGFyZUJ1dHRvbixcbiAgVktTaGFyZUNvdW50LFxuICBWaWJlckljb24kMSBhcyBWaWJlckljb24sXG4gIFZpYmVyU2hhcmVCdXR0b24kMSBhcyBWaWJlclNoYXJlQnV0dG9uLFxuICBXZWlib0ljb24kMSBhcyBXZWlib0ljb24sXG4gIFdlaWJvU2hhcmVCdXR0b24kMSBhcyBXZWlib1NoYXJlQnV0dG9uLFxuICBXaGF0c2FwcEljb24kMSBhcyBXaGF0c2FwcEljb24sXG4gIFdoYXRzYXBwU2hhcmVCdXR0b24kMSBhcyBXaGF0c2FwcFNoYXJlQnV0dG9uLFxuICBXb3JrcGxhY2VJY29uJDEgYXMgV29ya3BsYWNlSWNvbixcbiAgV29ya3BsYWNlU2hhcmVCdXR0b24kMSBhcyBXb3JrcGxhY2VTaGFyZUJ1dHRvbixcbiAgWEljb24kMSBhcyBYSWNvblxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
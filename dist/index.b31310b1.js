// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8uBhv":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "0b7c8afcb31310b1";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"4aleK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "processLinks", ()=>processLinks
);
var _footer = require("./customs-el/footer");
var _inputs = require("./customs-el/inputs");
var _nav = require("./customs-el/nav");
var _buttons = require("./customs-el/buttons");
var _router = require("./router/router");
var _form = require("./customs-el/form");
var _estado = require("./estado");
function processLinks(container) {
    const els = document.querySelectorAll(".link");
    for (const link of els)link.addEventListener("click", function(e) {
        e.preventDefault();
        var ruta = this.getAttribute("href");
        _router.goTo(ruta);
    });
}
function main() {
    _form.crearFormulario();
    _buttons.crearButtons();
    _nav.crearNav();
    _footer.crearFooter();
    _inputs.crearInput();
    _estado.estado.setState({
        nombre: ""
    });
    window.addEventListener("load", ()=>{
        _router.router(location.pathname);
    });
}
main();

},{"./customs-el/buttons":"aiCZY","./customs-el/footer":"ghCnK","./customs-el/inputs":"l4tm9","./customs-el/nav":"iDbw2","./router/router":"fpKnW","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./customs-el/form":"4eeiO","./estado":"fObVz"}],"aiCZY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "crearButtons", ()=>crearButtons
);
function crearButtons() {
    class ButtonEl extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const clase = this.getAttribute("id");
            const valor = this.textContent;
            var shadow = this.attachShadow({
                mode: 'open'
            });
            const d = document;
            const BTNLleno = d.createElement("a");
            BTNLleno.textContent = valor;
            BTNLleno.setAttribute("href", "");
            BTNLleno.setAttribute("id", "relleno");
            const BTNVacio = d.createElement("a");
            BTNVacio.textContent = valor;
            BTNLleno.setAttribute("href", "");
            BTNVacio.setAttribute("id", "vacio");
            const style = d.createElement('style');
            style.innerHTML = `\n            #relleno{\n                height:55px;\n                width:312px;\n                font-size:22px;\n                border-radius:4px;\n                background: #9CBBE9;\n                text-decoration:none;\n                color:#000;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            }\n            #vacio{\n                height:55px;\n                width:312px;\n                font-size:22px;\n                border-radius:4px;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                backgrounf:#fff;\n                border:2px solid #000;\n                text-decoration:none;\n                color:#000;\n            }\n            `;
            if (clase == "relleno") {
                shadow.appendChild(BTNLleno);
                BTNLleno.appendChild(style);
            } else if (clase == "vacio") {
                shadow.appendChild(BTNVacio);
                BTNVacio.appendChild(style);
            }
        }
    }
    customElements.define("boton-el", ButtonEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ghCnK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "crearFooter", ()=>crearFooter
);
function crearFooter() {
    class Footer extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            var shadow = this.attachShadow({
                mode: 'open'
            });
            const d = document;
            const div = d.createElement("div");
            div.textContent = "footer";
            div.classList.add("nav");
            const style = document.createElement('style');
            style.innerHTML = `\n            .nav{\n                height:233px;\n                width:100%;\n                font-size:30px;\n                display:flex;\n                justify-content:center;\n                align-items:center;\n                background: #FFA0EA;\n\n            }\n            `;
            shadow.appendChild(div);
            div.appendChild(style);
        }
    }
    customElements.define("footer-el", Footer);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"l4tm9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "crearInput", ()=>crearInput
);
function crearInput() {
    class InputEl extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            const clase = this.classList.value;
            const tipo = this.textContent;
            var shadow = this.attachShadow({
                mode: 'open'
            });
            const d = document;
            const div = d.createElement("div");
            div.classList.add("simple");
            const label = d.createElement("label");
            label.classList.add("label");
            label.textContent = tipo;
            const input = d.createElement("input");
            input.classList.add("input");
            input.setAttribute("placeholder", `Ingresa tu ${tipo.toLocaleLowerCase()}`);
            const label2 = d.createElement("label");
            label2.classList.add("label");
            label2.textContent = "Alguna de estas tres opciones";
            const select = d.createElement("select");
            select.classList.add("select");
            const option1 = d.createElement("option");
            option1.classList.add("piedra");
            option1.textContent = "piedra";
            const option2 = d.createElement("option");
            option2.classList.add("papel");
            option2.textContent = "papel";
            const option3 = d.createElement("option");
            option3.classList.add("tijera");
            option3.textContent = "tijera";
            const style = document.createElement('style');
            style.innerHTML = `\n            .simple{\n                display:inline;\n                width:312px;\n            }\n            .label{\n                width:312px;\n                display: inline;\n                font-size: 18px;\n            }\n            .input{\n                display: block;\n                height:55px;\n                width:312px;\n                border-radius:4px;\n                border:2px solid #000;\n                font-size:16px;\n            }\n            .select{\n                display: block;\n                height:55px;\n                width:312px;\n                border-radius:4px;\n                border:2px solid #000;\n                font-size:16px;\n            }\n           .piedra,\n           .papel,\n           .tijera{\n           max-width:312px;\n           }\n            .label2{\n                width:312px;\n                display: inline;\n                font-size: 18px;\n            }\n            `;
            if (clase == "simple") {
                shadow.appendChild(div);
                div.appendChild(label);
                div.appendChild(input);
                div.appendChild(style);
            } else if (clase == "select") {
                shadow.appendChild(select);
                select.appendChild(label2);
                select.appendChild(style);
                select.appendChild(option1);
                select.appendChild(option2);
                select.appendChild(option3);
            }
        }
    }
    customElements.define("input-el", InputEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"iDbw2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "crearNav", ()=>crearNav
);
function crearNav() {
    class NavEl extends HTMLElement {
        constructor(){
            super();
            this.render();
        }
        render() {
            var shadow = this.attachShadow({
                mode: 'open'
            });
            const d = document;
            const div = d.createElement("div");
            div.textContent = "Un titulo";
            div.classList.add("nav");
            const style = document.createElement('style');
            style.innerHTML = `\n            .nav{\n                height:60px;\n                width:100%;\n                font-size:30px;\n                display:flex;\n                justify-content:center;\n                align-items:center;\n                background: #FF8282;\n            }\n            `;
            shadow.appendChild(div);
            div.appendChild(style);
        }
    }
    customElements.define("nav-el", NavEl);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"fpKnW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "router", ()=>router
);
parcelHelpers.export(exports, "goTo", ()=>goTo
);
var _formComp = require("../components/form-comp");
var _agradecimientoComp = require("../components/agradecimiento-comp");
var _indexComp = require("../components/index-comp");
var _ = require("..");
function router(path) {
    const rutas = [
        {
            path: /\/form/,
            funcion: _formComp.crearForm
        },
        {
            path: /\/agradecimiento/,
            funcion: _agradecimientoComp.crearAgradecimiento
        },
        {
            path: /\/index/,
            function: _indexComp.crearIndex
        }
    ];
    for (const r of rutas)if (r.path.test(path)) {
        const el = r.funcion();
        const contenedor = document.querySelector(".contenedor");
        if (contenedor.firstChild) contenedor.firstChild.remove();
        contenedor.appendChild(el);
        _.processLinks(contenedor);
    }
}
function goTo(path) {
    history.pushState({
    }, "", path);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../components/form-comp":"auZ4N","..":"4aleK","../components/agradecimiento-comp":"7Gv7O","../components/index-comp":"wPx1A"}],"auZ4N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "crearForm", ()=>crearForm
);
function crearForm() {
    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `\n    <p class = "h1"> necesitamos algunos datos más </p>\n    <input-el class="simple">Email</input-el>\n    <input-el class="simple">Comida favorita</input-el>\n    <input-el class="select"></input-el>\n    <boton-el id="relleno"  href="/agradecimiento" class="link">Continuar</boton-el>\n    <boton-el id="vacio"  href="/src/" class="link" >Volver</boton-el>\n    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"7Gv7O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "crearAgradecimiento", ()=>crearAgradecimiento
);
function crearAgradecimiento() {
    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `\n    <p class="p2" >Toda la información que nos brindaste es muy importante</p>\n   \n    <boton-el id="relleno" href="/index" class="link" >De nada</boton-el>\n    \n    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"wPx1A":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "crearIndex", ()=>crearIndex
);
function crearIndex() {
    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `\n    <H1 class="h1">Te doy la bienvenida a mi site</H1>\n    <p class="p" >Lorem ipsum dolor sit amet consectetur adipisicing elit. \n    Veniam consequuntur iure voluptas quia accusantium voluptatum\n    aspernatur provident et repudiandae quam veritatis,\n    libero porro sit beatae laboriosam a aut consequatur quidem? soy el index\n    </p> \n\n    <p class="p2" >Para continuar ingresa tu nombre</p>\n    <formulario-el></formulario-el>\n   \n    `;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"4eeiO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "crearFormulario", ()=>crearFormulario
);
var _estado = require("../estado");
function crearFormulario() {
    class Form extends HTMLElement {
        constructor(){
            super();
            this.shadow = this.attachShadow({
                mode: 'open'
            });
            this.nombre = _estado.estado.getState().nombre;
            _estado.estado.subscribe(()=>{
                this.nombre = _estado.estado.getState().nombre;
                this.render();
            });
            this.render();
        }
        render() {
            const d = document;
            const form = d.createElement("form");
            form.classList.add("form");
            const label = d.createElement("label");
            label.classList.add("label");
            label.textContent = "Nombre";
            const input = d.createElement("input");
            input.classList.add("input");
            input.setAttribute("type", "text");
            input.setAttribute("name", "nombre");
            input.setAttribute("placeholder", `Ingresa tu nombre`);
            const BTNLleno = d.createElement("button");
            BTNLleno.textContent = "Continuar";
            BTNLleno.setAttribute("href", "");
            BTNLleno.setAttribute("class", "relleno");
            const style = document.createElement('style');
            style.innerHTML = `\n            .form{\n                height:233px;\n                width:100%;\n                font-size:30px;\n                background: #FFA0EA;\n\n            }\n            .label{\n                width:312px;\n                display: inline;\n                font-size: 18px;\n            }\n            .input{\n                display: block;\n                height:55px;\n                width:312px;\n                border-radius:4px;\n                border:2px solid #000;\n                font-size:16px;\n            }\n            .relleno{\n                height:55px;\n                width:312px;\n                font-size:22px;\n                border-radius:4px;\n                background: #9CBBE9;\n                text-decoration:none;\n                color:#000;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            }\n            `;
            this.shadow.appendChild(form);
            form.appendChild(style);
            form.appendChild(label);
            form.appendChild(input);
            form.appendChild(BTNLleno);
            const formulario = this.shadow.querySelector(".form");
            formulario.addEventListener("submit", (e)=>{
                e.preventDefault();
                console.log(e.target.nombre.value);
                _estado.estado.setState({
                    ..._estado.estado.getState(),
                    nombre: e.target.nombre.value
                });
            });
        }
    }
    customElements.define("formulario-el", Form);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","../estado":"fObVz"}],"fObVz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "estado", ()=>estado
);
const estado = {
    data: {
    },
    listener: [],
    getState () {
        return this.data;
    },
    setState (newData) {
        return this.data = newData;
    },
    subscribe (callback) {
        this.listener.push(callback);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["8uBhv","4aleK"], "4aleK", "parcelRequire98b0")

//# sourceMappingURL=index.b31310b1.js.map

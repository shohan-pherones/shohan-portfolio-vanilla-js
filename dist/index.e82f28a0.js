// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
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
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
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
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eZyLq":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "207a8fdfe82f28a0";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
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

},{}],"dV6cC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _webImmediateJs = require("core-js/modules/web.immediate.js");
var _core = require("typewriter-effect/dist/core");
var _coreDefault = parcelHelpers.interopDefault(_core);
var _tagCloud = require("TagCloud");
var _tagCloudDefault = parcelHelpers.interopDefault(_tagCloud);
var _projectsJson = require("../../projects.json");
// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const allSections = document.querySelectorAll(".section");
const projectsContainer = document.querySelector(".projects");
// Navbar sticky
const navHeight = nav.getBoundingClientRect().height;
function sticky(entries) {
    const entry = entries[0];
    if (!entry.isIntersecting) header.classList.add("sticky");
    else header.classList.remove("sticky");
}
const navObserver = new IntersectionObserver(sticky, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
});
navObserver.observe(header);
// Link active
links.forEach((link)=>link.addEventListener("click", (e)=>{
        const link = e.target;
        const siblings = link.closest(".links").querySelectorAll(".link");
        siblings.forEach((sibling)=>{
            sibling === link ? sibling.style.color = "turquoise" : sibling.style.color = "#444";
        });
    }));
// Link toggle
function apearMobileNav() {
    toggleBtn.classList.add("toggle-close");
    linksContainer.classList.add("links-open");
    linksContainer.style.animation = "mobileNavAppear 0.3s 1";
    document.querySelector("html").style.overflow = "hidden";
}
function disapearMobileNav() {
    toggleBtn.classList.remove("toggle-close");
    linksContainer.style.animation = "mobileNavDisappear 0.35s 1";
    setTimeout(()=>linksContainer.classList.remove("links-open"), 300);
    document.querySelector("html").style.overflow = "visible";
}
toggleBtn.addEventListener("click", ()=>{
    toggleBtn.classList.contains("toggle-close") ? disapearMobileNav() : apearMobileNav();
});
linksContainer.addEventListener("click", ()=>{
    if (linksContainer.classList.contains("links-open")) disapearMobileNav();
});
// Tag cloud
const myTags = [
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Netlify",
    "JavaScript",
    "React.js",
    "Next.js",
    "React Native",
    "Redux",
    "Material UI",
    "React Bootstrap",
    "Sanity.io",
    "Node.js",
    "NPM",
    "Express.js",
    "MySQL",
    "MongoDB",
    "Mongoose",
    "Python",
    "C",
    "C++",
    "C#",
    "jQuery",
    "Vue.js",
    "Sass",
    "AJAX",
    "Axios",
    "Fetch API", 
];
const tagCloud = (0, _tagCloudDefault.default)(".content", myTags, {
    radius: 375,
    maxSpeed: "fast",
    initSpeed: "normal",
    direction: 135,
    keep: true
});
// Typewriter effect
const typeWriter = new (0, _coreDefault.default)(app, {
    loop: true
});
typeWriter.pauseFor(2000).typeString("I am a web developer.").pauseFor(3000).deleteChars(19).typeString("build amazing things for the web.").pauseFor(3000).deleteChars(33).typeString("can also design creative & unique websites.").pauseFor(3000).start();
// Reveal sections
function revealSection(entries, observer) {
    const entry = entries[0];
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section-hidden");
    observer.unobserve(entry.target);
}
const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.2
});
allSections.forEach((section)=>{
    sectionObserver.observe(section);
    section.classList.add("section-hidden");
});
// Projects
function displayProjects(projects) {
    projects.forEach((project)=>{
        const html = `
        <div class="project">
          <div class="project-img">
            <img
              src="${project.image}"
              alt="Photo of ${project.title}"
            />
          </div>
          <h3 class="project-title">
          ${project.title}
          </h3>
          <p class="project-details">
            ${project.description}
          </p>
          <p class="project-tools">
            Tools: <span>${project.tools}</span>
          </p>
          <div class="project-btns">
            <a href="${project.liveLink}" target="_blank"
              >Live Site &rarr;</a
            >
            <a
              href="${project.githubLink}"
              target="_blank"
              >GitHub &rarr;</a
            >
          </div>
        </div>
    `;
        projectsContainer.insertAdjacentHTML("afterbegin", html);
    });
}
displayProjects(_projectsJson);
// Particles
var MAX_PARTICLES = 1000, RADIUS = 100, MAX_LINES = 5, MAX_LIFE_SPAN = 600, MIN_DENSITY = 15, OFFSET_DENSITY = 15, _context, _mouseX, _mouseY, _particles, _canvasWidth, _canvasHalfWidth, _canvasHeight, _canvasHalfHeight;
init();
function init() {
    _particles = [];
    _context = c.getContext("2d");
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove);
    onResize();
    createInitialParticles();
    redraw();
}
function createInitialParticles() {
    var x;
    for(x = 50; x < _canvasWidth - 50; x += 25)_particles.push(new Particle(x - _canvasHalfWidth, -75 + Math.random() * 100));
}
function onMouseMove(e) {
    _mouseX = e.pageX;
    _mouseY = e.pageY;
}
function onResize() {
    _canvasWidth = c.offsetWidth;
    _canvasHalfWidth = Math.round(_canvasWidth / 2);
    _canvasHeight = c.offsetHeight, _canvasHalfHeight = Math.round(_canvasHeight / 2);
    c.width = _canvasWidth;
    c.height = _canvasHeight;
}
function redraw() {
    var copyParticles = _particles.slice(), particle, i;
    if (_particles.length < MAX_PARTICLES && _mouseX && _mouseY) {
        particle = new Particle(_mouseX - _canvasHalfWidth, _mouseY - _canvasHalfHeight);
        _particles.push(particle);
        _mouseX = false;
        _mouseY = false;
    }
    _context.clearRect(0, 0, _canvasWidth, _canvasHeight);
    for(i = 0; i < copyParticles.length; i++){
        particle = copyParticles[i];
        particle.update();
    }
    drawLines();
    requestAnimationFrame(redraw);
}
function drawLines() {
    var particleA, particleB, distance, opacity, lines, i, j;
    _context.beginPath();
    for(i = 0; i < _particles.length; i++){
        lines = 0;
        particleA = _particles[i];
        for(j = i + 1; j < _particles.length; j++){
            particleB = _particles[j];
            distance = getDistance(particleA, particleB);
            if (distance < RADIUS) {
                lines++;
                if (lines <= MAX_LINES) {
                    opacity = 0.5 * Math.min(1 - distance / RADIUS, particleA.getOpacity(), particleB.getOpacity());
                    _context.beginPath();
                    _context.moveTo(particleA.getX() + _canvasHalfWidth, particleA.getY() + _canvasHalfHeight);
                    _context.lineTo(particleB.getX() + _canvasHalfWidth, particleB.getY() + _canvasHalfHeight);
                    _context.strokeStyle = "rgba(200, 200, 200," + opacity + ")";
                    _context.stroke();
                }
            }
        }
    }
}
function Particle(originX, originY) {
    var _this = this, _direction = -1 + Math.round(Math.random()) * 2, _angle = Math.random() * 10, _posX = originX, _posY = originY, _density = MIN_DENSITY + Math.random() * OFFSET_DENSITY, _lifeSpan = 0, _opacity = 1;
    function update() {
        _lifeSpan++;
        if (_lifeSpan % 3 === 0) {
            _opacity = 1 - _lifeSpan / MAX_LIFE_SPAN;
            _angle += 0.001 * _direction;
            _posY += (Math.cos(_angle + _density) + 1) * 0.75;
            _posX += Math.sin(_angle) * 0.75;
            if (_lifeSpan >= MAX_LIFE_SPAN) destroy();
        }
    }
    function destroy() {
        var particle, i;
        for(i = 0; i < _particles.length; i++){
            particle = _particles[i];
            if (particle === _this) _particles.splice(i, 1);
        }
    }
    this.getOpacity = function() {
        return _opacity;
    };
    this.getX = function() {
        return _posX;
    };
    this.getY = function() {
        return _posY;
    };
    this.update = update;
}
function getDistance(particle1, particle2) {
    var deltaX = particle1.getX() - particle2.getX(), deltaY = particle1.getY() - particle2.getY();
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

},{"typewriter-effect/dist/core":"gppl0","TagCloud":"b2L52","../../projects.json":"85X92","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","core-js/modules/web.immediate.js":"49tUX"}],"gppl0":[function(require,module,exports) {
var process = require("process");
!function(e, t) {
    module.exports = t();
}("undefined" != typeof self ? self : this, ()=>(()=>{
        var e = {
            75: function(e) {
                (function() {
                    var t, n, r, o, a, s;
                    "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
                        return performance.now();
                    } : "undefined" != typeof process && null !== process && process.hrtime ? (e.exports = function() {
                        return (t() - a) / 1e6;
                    }, n = process.hrtime, o = (t = function() {
                        var e;
                        return 1e9 * (e = n())[0] + e[1];
                    })(), s = 1e9 * process.uptime(), a = o - s) : Date.now ? (e.exports = function() {
                        return Date.now() - r;
                    }, r = Date.now()) : (e.exports = function() {
                        return (new Date).getTime() - r;
                    }, r = (new Date).getTime());
                }).call(this);
            },
            4087: (e, t, n)=>{
                for(var r = n(75), o = "undefined" == typeof window ? n.g : window, a = [
                    "moz",
                    "webkit"
                ], s = "AnimationFrame", i = o["request" + s], u = o["cancel" + s] || o["cancelRequest" + s], l = 0; !i && l < a.length; l++)i = o[a[l] + "Request" + s], u = o[a[l] + "Cancel" + s] || o[a[l] + "CancelRequest" + s];
                if (!i || !u) {
                    var c = 0, p = 0, d = [];
                    i = function(e) {
                        if (0 === d.length) {
                            var t = r(), n = Math.max(0, 16.666666666666668 - (t - c));
                            c = n + t, setTimeout(function() {
                                var e = d.slice(0);
                                d.length = 0;
                                for(var t = 0; t < e.length; t++)if (!e[t].cancelled) try {
                                    e[t].callback(c);
                                } catch (e1) {
                                    setTimeout(function() {
                                        throw e1;
                                    }, 0);
                                }
                            }, Math.round(n));
                        }
                        return d.push({
                            handle: ++p,
                            callback: e,
                            cancelled: !1
                        }), p;
                    }, u = function(e) {
                        for(var t = 0; t < d.length; t++)d[t].handle === e && (d[t].cancelled = !0);
                    };
                }
                e.exports = function(e) {
                    return i.call(o, e);
                }, e.exports.cancel = function() {
                    u.apply(o, arguments);
                }, e.exports.polyfill = function(e) {
                    e || (e = o), e.requestAnimationFrame = i, e.cancelAnimationFrame = u;
                };
            }
        }, t = {};
        function n(r) {
            var o = t[r];
            if (void 0 !== o) return o.exports;
            var a = t[r] = {
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, n), a.exports;
        }
        n.n = (e)=>{
            var t = e && e.__esModule ? ()=>e.default : ()=>e;
            return n.d(t, {
                a: t
            }), t;
        }, n.d = (e, t)=>{
            for(var r in t)n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            });
        }, n.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")();
            } catch (e) {
                if ("object" == typeof window) return window;
            }
        }(), n.o = (e, t)=>Object.prototype.hasOwnProperty.call(e, t);
        var r = {};
        return (()=>{
            "use strict";
            n.d(r, {
                default: ()=>S
            });
            var e = n(4087), t = n.n(e);
            const o = function(e) {
                return new RegExp(/<[a-z][\s\S]*>/i).test(e);
            }, a = function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e, t.childNodes;
            }, s = function(e, t) {
                return Math.floor(Math.random() * (t - e + 1)) + e;
            };
            var i = "TYPE_CHARACTER", u = "REMOVE_CHARACTER", l = "REMOVE_ALL", c = "REMOVE_LAST_VISIBLE_NODE", p = "PAUSE_FOR", d = "CALL_FUNCTION", f = "ADD_HTML_TAG_ELEMENT", v = "CHANGE_DELETE_SPEED", h = "CHANGE_DELAY", m = "CHANGE_CURSOR", y = "PASTE_STRING", g = "HTML_TAG";
            function E(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function w(e) {
                for(var t = 1; t < arguments.length; t++){
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach(function(t) {
                        N(e, t, n[t]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
                }
                return e;
            }
            function T(e) {
                return function(e) {
                    if (Array.isArray(e)) return b(e);
                }(e) || function(e) {
                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                }(e) || function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return b(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0;
                    }
                }(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function b(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for(var n = 0, r = new Array(t); n < t; n++)r[n] = e[n];
                return r;
            }
            function A(e, t) {
                for(var n = 0; n < t.length; n++){
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                }
            }
            function N(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e;
            }
            const S = function() {
                function n(r, E) {
                    var b = this;
                    if (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    }(this, n), N(this, "state", {
                        cursorAnimation: null,
                        lastFrameTime: null,
                        pauseUntil: null,
                        eventQueue: [],
                        eventLoop: null,
                        eventLoopPaused: !1,
                        reverseCalledEvents: [],
                        calledEvents: [],
                        visibleNodes: [],
                        initialOptions: null,
                        elements: {
                            container: null,
                            wrapper: document.createElement("span"),
                            cursor: document.createElement("span")
                        }
                    }), N(this, "options", {
                        strings: null,
                        cursor: "|",
                        delay: "natural",
                        pauseFor: 1500,
                        deleteSpeed: "natural",
                        loop: !1,
                        autoStart: !1,
                        devMode: !1,
                        skipAddStyles: !1,
                        wrapperClassName: "Typewriter__wrapper",
                        cursorClassName: "Typewriter__cursor",
                        stringSplitter: null,
                        onCreateTextNode: null,
                        onRemoveNode: null
                    }), N(this, "setupWrapperElement", function() {
                        b.state.elements.container && (b.state.elements.wrapper.className = b.options.wrapperClassName, b.state.elements.cursor.className = b.options.cursorClassName, b.state.elements.cursor.innerHTML = b.options.cursor, b.state.elements.container.innerHTML = "", b.state.elements.container.appendChild(b.state.elements.wrapper), b.state.elements.container.appendChild(b.state.elements.cursor));
                    }), N(this, "start", function() {
                        return b.state.eventLoopPaused = !1, b.runEventLoop(), b;
                    }), N(this, "pause", function() {
                        return b.state.eventLoopPaused = !0, b;
                    }), N(this, "stop", function() {
                        return b.state.eventLoop && ((0, e.cancel)(b.state.eventLoop), b.state.eventLoop = null), b;
                    }), N(this, "pauseFor", function(e) {
                        return b.addEventToQueue(p, {
                            ms: e
                        }), b;
                    }), N(this, "typeOutAllStrings", function() {
                        return "string" == typeof b.options.strings ? (b.typeString(b.options.strings).pauseFor(b.options.pauseFor), b) : (b.options.strings.forEach(function(e) {
                            b.typeString(e).pauseFor(b.options.pauseFor).deleteAll(b.options.deleteSpeed);
                        }), b);
                    }), N(this, "typeString", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (o(e)) return b.typeOutHTMLString(e, t);
                        if (e) {
                            var n = b.options || {}, r = n.stringSplitter, a = "function" == typeof r ? r(e) : e.split("");
                            b.typeCharacters(a, t);
                        }
                        return b;
                    }), N(this, "pasteString", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        return o(e) ? b.typeOutHTMLString(e, t, !0) : (e && b.addEventToQueue(y, {
                            character: e,
                            node: t
                        }), b);
                    }), N(this, "typeOutHTMLString", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, n = arguments.length > 2 ? arguments[2] : void 0, r = a(e);
                        if (r.length > 0) for(var o = 0; o < r.length; o++){
                            var s = r[o], i = s.innerHTML;
                            s && 3 !== s.nodeType ? (s.innerHTML = "", b.addEventToQueue(f, {
                                node: s,
                                parentNode: t
                            }), n ? b.pasteString(i, s) : b.typeString(i, s)) : s.textContent && (n ? b.pasteString(s.textContent, t) : b.typeString(s.textContent, t));
                        }
                        return b;
                    }), N(this, "deleteAll", function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "natural";
                        return b.addEventToQueue(l, {
                            speed: e
                        }), b;
                    }), N(this, "changeDeleteSpeed", function(e) {
                        if (!e) throw new Error("Must provide new delete speed");
                        return b.addEventToQueue(v, {
                            speed: e
                        }), b;
                    }), N(this, "changeDelay", function(e) {
                        if (!e) throw new Error("Must provide new delay");
                        return b.addEventToQueue(h, {
                            delay: e
                        }), b;
                    }), N(this, "changeCursor", function(e) {
                        if (!e) throw new Error("Must provide new cursor");
                        return b.addEventToQueue(m, {
                            cursor: e
                        }), b;
                    }), N(this, "deleteChars", function(e) {
                        if (!e) throw new Error("Must provide amount of characters to delete");
                        for(var t = 0; t < e; t++)b.addEventToQueue(u);
                        return b;
                    }), N(this, "callFunction", function(e, t) {
                        if (!e || "function" != typeof e) throw new Error("Callbak must be a function");
                        return b.addEventToQueue(d, {
                            cb: e,
                            thisArg: t
                        }), b;
                    }), N(this, "typeCharacters", function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                        return e.forEach(function(e) {
                            b.addEventToQueue(i, {
                                character: e,
                                node: t
                            });
                        }), b;
                    }), N(this, "removeCharacters", function(e) {
                        if (!e || !Array.isArray(e)) throw new Error("Characters must be an array");
                        return e.forEach(function() {
                            b.addEventToQueue(u);
                        }), b;
                    }), N(this, "addEventToQueue", function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        return b.addEventToStateProperty(e, t, n, "eventQueue");
                    }), N(this, "addReverseCalledEvent", function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = b.options.loop;
                        return r ? b.addEventToStateProperty(e, t, n, "reverseCalledEvents") : b;
                    }), N(this, "addEventToStateProperty", function(e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = arguments.length > 3 ? arguments[3] : void 0, o = {
                            eventName: e,
                            eventArgs: t || {}
                        };
                        return b.state[r] = n ? [
                            o
                        ].concat(T(b.state[r])) : [].concat(T(b.state[r]), [
                            o
                        ]), b;
                    }), N(this, "runEventLoop", function() {
                        b.state.lastFrameTime || (b.state.lastFrameTime = Date.now());
                        var e = Date.now(), n = e - b.state.lastFrameTime;
                        if (!b.state.eventQueue.length) {
                            if (!b.options.loop) return;
                            b.state.eventQueue = T(b.state.calledEvents), b.state.calledEvents = [], b.options = w({}, b.state.initialOptions);
                        }
                        if (b.state.eventLoop = t()(b.runEventLoop), !b.state.eventLoopPaused) {
                            if (b.state.pauseUntil) {
                                if (e < b.state.pauseUntil) return;
                                b.state.pauseUntil = null;
                            }
                            var r, o = T(b.state.eventQueue), a = o.shift();
                            if (!(n <= (r = a.eventName === c || a.eventName === u ? "natural" === b.options.deleteSpeed ? s(40, 80) : b.options.deleteSpeed : "natural" === b.options.delay ? s(120, 160) : b.options.delay))) {
                                var E = a.eventName, A = a.eventArgs;
                                switch(b.logInDevMode({
                                    currentEvent: a,
                                    state: b.state,
                                    delay: r
                                }), E){
                                    case y:
                                    case i:
                                        var N = A.character, S = A.node, C = document.createTextNode(N), _ = C;
                                        b.options.onCreateTextNode && "function" == typeof b.options.onCreateTextNode && (_ = b.options.onCreateTextNode(N, C)), _ && (S ? S.appendChild(_) : b.state.elements.wrapper.appendChild(_)), b.state.visibleNodes = [].concat(T(b.state.visibleNodes), [
                                            {
                                                type: "TEXT_NODE",
                                                character: N,
                                                node: _
                                            }
                                        ]);
                                        break;
                                    case u:
                                        o.unshift({
                                            eventName: c,
                                            eventArgs: {
                                                removingCharacterNode: !0
                                            }
                                        });
                                        break;
                                    case p:
                                        var O = a.eventArgs.ms;
                                        b.state.pauseUntil = Date.now() + parseInt(O);
                                        break;
                                    case d:
                                        var L = a.eventArgs, D = L.cb, M = L.thisArg;
                                        D.call(M, {
                                            elements: b.state.elements
                                        });
                                        break;
                                    case f:
                                        var x = a.eventArgs, P = x.node, j = x.parentNode;
                                        j ? j.appendChild(P) : b.state.elements.wrapper.appendChild(P), b.state.visibleNodes = [].concat(T(b.state.visibleNodes), [
                                            {
                                                type: g,
                                                node: P,
                                                parentNode: j || b.state.elements.wrapper
                                            }
                                        ]);
                                        break;
                                    case l:
                                        var R = b.state.visibleNodes, k = A.speed, Q = [];
                                        k && Q.push({
                                            eventName: v,
                                            eventArgs: {
                                                speed: k,
                                                temp: !0
                                            }
                                        });
                                        for(var F = 0, H = R.length; F < H; F++)Q.push({
                                            eventName: c,
                                            eventArgs: {
                                                removingCharacterNode: !1
                                            }
                                        });
                                        k && Q.push({
                                            eventName: v,
                                            eventArgs: {
                                                speed: b.options.deleteSpeed,
                                                temp: !0
                                            }
                                        }), o.unshift.apply(o, Q);
                                        break;
                                    case c:
                                        var I = a.eventArgs.removingCharacterNode;
                                        if (b.state.visibleNodes.length) {
                                            var U = b.state.visibleNodes.pop(), q = U.type, G = U.node, Y = U.character;
                                            b.options.onRemoveNode && "function" == typeof b.options.onRemoveNode && b.options.onRemoveNode({
                                                node: G,
                                                character: Y
                                            }), G && G.parentNode.removeChild(G), q === g && I && o.unshift({
                                                eventName: c,
                                                eventArgs: {}
                                            });
                                        }
                                        break;
                                    case v:
                                        b.options.deleteSpeed = a.eventArgs.speed;
                                        break;
                                    case h:
                                        b.options.delay = a.eventArgs.delay;
                                        break;
                                    case m:
                                        b.options.cursor = a.eventArgs.cursor, b.state.elements.cursor.innerHTML = a.eventArgs.cursor;
                                }
                                b.options.loop && (a.eventName === c || a.eventArgs && a.eventArgs.temp || (b.state.calledEvents = [].concat(T(b.state.calledEvents), [
                                    a
                                ]))), b.state.eventQueue = o, b.state.lastFrameTime = e;
                            }
                        }
                    }), r) {
                        if ("string" == typeof r) {
                            var A = document.querySelector(r);
                            if (!A) throw new Error("Could not find container element");
                            this.state.elements.container = A;
                        } else this.state.elements.container = r;
                    }
                    E && (this.options = w(w({}, this.options), E)), this.state.initialOptions = w({}, this.options), this.init();
                }
                var r, E;
                return r = n, E = [
                    {
                        key: "init",
                        value: function() {
                            var e, t;
                            this.setupWrapperElement(), this.addEventToQueue(m, {
                                cursor: this.options.cursor
                            }, !0), this.addEventToQueue(l, null, !0), !window || window.___TYPEWRITER_JS_STYLES_ADDED___ || this.options.skipAddStyles || (e = ".Typewriter__cursor{-webkit-animation:Typewriter-cursor 1s infinite;animation:Typewriter-cursor 1s infinite;margin-left:1px}@-webkit-keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}@keyframes Typewriter-cursor{0%{opacity:0}50%{opacity:1}100%{opacity:0}}", (t = document.createElement("style")).appendChild(document.createTextNode(e)), document.head.appendChild(t), window.___TYPEWRITER_JS_STYLES_ADDED___ = !0), !0 === this.options.autoStart && this.options.strings && this.typeOutAllStrings().start();
                        }
                    },
                    {
                        key: "logInDevMode",
                        value: function(e) {
                            this.options.devMode && console.log(e);
                        }
                    }
                ], A(r.prototype, E), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), n;
            }();
        })(), r.default;
    })());

},{"process":"d5jf4"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"b2L52":[function(require,module,exports) {
/*!
 * TagCloud.js v2.2.0
 * Copyright (c) 2016-2021 @ Cong Min
 * MIT License - https://github.com/mcc108/TagCloud
 */ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
    }
    function _defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        else obj[key] = value;
        return obj;
    }
    function _extends() {
        _extends = Object.assign || function(target) {
            for(var i = 1; i < arguments.length; i++){
                var source = arguments[i];
                for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
            }
            return target;
        };
        return _extends.apply(this, arguments);
    }
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function _objectSpread2(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
            else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            else ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
        return target;
    }
    /**
   * TagCloud.js (c) 2016-2019 @ Cong Min
   * MIT License - https://github.com/mcc108/TagCloud
   */ var TagCloud = /*#__PURE__*/ function() {
        /* constructor */ function TagCloud() {
            var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
            var texts = arguments.length > 1 ? arguments[1] : undefined;
            var options = arguments.length > 2 ? arguments[2] : undefined;
            _classCallCheck(this, TagCloud);
            var self = this;
            if (!container || container.nodeType !== 1) return new Error("Incorrect element type"); // params
            self.$container = container;
            self.texts = texts || [];
            self.config = _objectSpread2(_objectSpread2({}, TagCloud._defaultConfig), options || {}); // calculate config
            self.radius = self.config.radius; // rolling radius
            self.depth = 2 * self.radius; // rolling depth
            self.size = 1.5 * self.radius; // rolling area size with mouse
            self.maxSpeed = TagCloud._getMaxSpeed(self.config.maxSpeed); // rolling max speed
            self.initSpeed = TagCloud._getInitSpeed(self.config.initSpeed); // rolling init speed
            self.direction = self.config.direction; // rolling init direction
            self.keep = self.config.keep; // whether to keep rolling after mouse out area
            self.paused = false; // keep state to pause the animation
            // create element
            self._createElment(); // init
            self._init(); // set elements and instances
            TagCloud.list.push({
                el: self.$el,
                container: container,
                instance: self
            });
        }
        /* static method */ // all TagCloud list
        _createClass(TagCloud, [
            {
                key: "_createElment",
                /* instance property method */ // create elment
                value: function _createElment() {
                    var self = this; // create container
                    var $el = document.createElement("div");
                    $el.className = self.config.containerClass;
                    if (self.config.useContainerInlineStyles) {
                        $el.style.position = "relative";
                        $el.style.width = "".concat(2 * self.radius, "px");
                        $el.style.height = "".concat(2 * self.radius, "px");
                    } // create texts
                    self.items = [];
                    self.texts.forEach(function(text, index) {
                        var item = self._createTextItem(text, index);
                        $el.appendChild(item.el);
                        self.items.push(item);
                    });
                    self.$container.appendChild($el);
                    self.$el = $el;
                } // create a text
            },
            {
                key: "_createTextItem",
                value: function _createTextItem(text) {
                    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                    var self = this;
                    var itemEl = document.createElement("span");
                    itemEl.className = self.config.itemClass;
                    if (self.config.useItemInlineStyles) {
                        itemEl.style.willChange = "transform, opacity, filter";
                        itemEl.style.position = "absolute";
                        itemEl.style.top = "50%";
                        itemEl.style.left = "50%";
                        itemEl.style.zIndex = index + 1;
                        itemEl.style.filter = "alpha(opacity=0)";
                        itemEl.style.opacity = 0;
                        var transformOrigin = "50% 50%";
                        itemEl.style.WebkitTransformOrigin = transformOrigin;
                        itemEl.style.MozTransformOrigin = transformOrigin;
                        itemEl.style.OTransformOrigin = transformOrigin;
                        itemEl.style.transformOrigin = transformOrigin;
                        var transform = "translate3d(-50%, -50%, 0) scale(1)";
                        itemEl.style.WebkitTransform = transform;
                        itemEl.style.MozTransform = transform;
                        itemEl.style.OTransform = transform;
                        itemEl.style.transform = transform;
                    }
                    itemEl.innerText = text;
                    return _objectSpread2({
                        el: itemEl
                    }, self._computePosition(index));
                } // calculate appropriate place
            },
            {
                key: "_computePosition",
                value: function _computePosition(index) {
                    var random = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                    var self = this;
                    var textsLength = self.texts.length; // if random `true`, It means that a random appropriate place is generated, and the position will be independent of `index`
                    if (random) index = Math.floor(Math.random() * (textsLength + 1));
                    var phi = Math.acos(-1 + (2 * index + 1) / textsLength);
                    var theta = Math.sqrt((textsLength + 1) * Math.PI) * phi;
                    return {
                        x: self.size * Math.cos(theta) * Math.sin(phi) / 2,
                        y: self.size * Math.sin(theta) * Math.sin(phi) / 2,
                        z: self.size * Math.cos(phi) / 2
                    };
                }
            },
            {
                key: "_requestInterval",
                value: function _requestInterval(fn, delay) {
                    var requestAnimFrame = function() {
                        return window.requestAnimationFrame;
                    }();
                    var start = new Date().getTime();
                    var handle = {};
                    function loop() {
                        handle.value = requestAnimFrame(loop);
                        var current = new Date().getTime(), delta = current - start;
                        if (delta >= delay) {
                            fn.call();
                            start = new Date().getTime();
                        }
                    }
                    handle.value = requestAnimFrame(loop);
                    return handle;
                } // init
            },
            {
                key: "_init",
                value: function _init() {
                    var self = this;
                    self.active = false; // whether the mouse is activated
                    self.mouseX0 = self.initSpeed * Math.sin(self.direction * (Math.PI / 180)); // init distance between the mouse and rolling center x axis
                    self.mouseY0 = -self.initSpeed * Math.cos(self.direction * (Math.PI / 180)); // init distance between the mouse and rolling center y axis
                    self.mouseX = self.mouseX0; // current distance between the mouse and rolling center x axis
                    self.mouseY = self.mouseY0; // current distance between the mouse and rolling center y axis
                    // mouseover
                    TagCloud._on(self.$el, "mouseover", function() {
                        self.active = true;
                    }); // mouseout
                    TagCloud._on(self.$el, "mouseout", function() {
                        self.active = false;
                    }); // mousemove
                    TagCloud._on(self.keep ? window : self.$el, "mousemove", function(ev) {
                        ev = ev || window.event;
                        var rect = self.$el.getBoundingClientRect();
                        self.mouseX = (ev.clientX - (rect.left + rect.width / 2)) / 5;
                        self.mouseY = (ev.clientY - (rect.top + rect.height / 2)) / 5;
                    }); // update state regularly
                    self._next(); // init update state
                    self.interval = self._requestInterval(function() {
                        self._next.call(self);
                    }, 10);
                } // calculate the next state
            },
            {
                key: "_next",
                value: function _next() {
                    var self = this;
                    if (self.paused) return;
                     // if keep `false`, pause rolling after moving mouse out area
                    if (!self.keep && !self.active) {
                        self.mouseX = Math.abs(self.mouseX - self.mouseX0) < 1 ? self.mouseX0 : (self.mouseX + self.mouseX0) / 2; // reset distance between the mouse and rolling center x axis
                        self.mouseY = Math.abs(self.mouseY - self.mouseY0) < 1 ? self.mouseY0 : (self.mouseY + self.mouseY0) / 2; // reset distance between the mouse and rolling center y axis
                    }
                    var a = -(Math.min(Math.max(-self.mouseY, -self.size), self.size) / self.radius) * self.maxSpeed;
                    var b = Math.min(Math.max(-self.mouseX, -self.size), self.size) / self.radius * self.maxSpeed;
                    if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) return; // pause
                    // calculate offset
                    var l = Math.PI / 180;
                    var sc = [
                        Math.sin(a * l),
                        Math.cos(a * l),
                        Math.sin(b * l),
                        Math.cos(b * l)
                    ];
                    self.items.forEach(function(item) {
                        var rx1 = item.x;
                        var ry1 = item.y * sc[1] + item.z * -sc[0];
                        var rz1 = item.y * sc[0] + item.z * sc[1];
                        var rx2 = rx1 * sc[3] + rz1 * sc[2];
                        var ry2 = ry1;
                        var rz2 = rz1 * sc[3] - rx1 * sc[2];
                        var per = 2 * self.depth / (2 * self.depth + rz2); // todo
                        item.x = rx2;
                        item.y = ry2;
                        item.z = rz2;
                        item.scale = per.toFixed(3);
                        var alpha = per * per - 0.25;
                        alpha = (alpha > 1 ? 1 : alpha).toFixed(3);
                        var itemEl = item.el;
                        var left = (item.x - itemEl.offsetWidth / 2).toFixed(2);
                        var top = (item.y - itemEl.offsetHeight / 2).toFixed(2);
                        var transform = "translate3d(".concat(left, "px, ").concat(top, "px, 0) scale(").concat(item.scale, ")");
                        itemEl.style.WebkitTransform = transform;
                        itemEl.style.MozTransform = transform;
                        itemEl.style.OTransform = transform;
                        itemEl.style.transform = transform;
                        itemEl.style.filter = "alpha(opacity=".concat(100 * alpha, ")");
                        itemEl.style.opacity = alpha;
                    });
                }
            },
            {
                key: "update",
                value: function update(texts) {
                    var self = this; // params
                    self.texts = texts || []; // judging and processing items based on texts
                    self.texts.forEach(function(text, index) {
                        var item = self.items[index];
                        if (!item) {
                            // if not had, then create
                            item = self._createTextItem(text, index);
                            _extends(item, self._computePosition(index, true)); // random place
                            self.$el.appendChild(item.el);
                            self.items.push(item);
                        } // if had, replace text
                        item.el.innerText = text;
                    }); // remove redundant self.items
                    var textsLength = self.texts.length;
                    var itemsLength = self.items.length;
                    if (textsLength < itemsLength) {
                        var removeList = self.items.splice(textsLength, itemsLength - textsLength);
                        removeList.forEach(function(item) {
                            self.$el.removeChild(item.el);
                        });
                    }
                } // destroy
            },
            {
                key: "destroy",
                value: function destroy() {
                    var self = this;
                    self.interval = null; // clear in TagCloud.list
                    var index = TagCloud.list.findIndex(function(e) {
                        return e.el === self.$el;
                    });
                    if (index !== -1) TagCloud.list.splice(index, 1); // clear element
                    if (self.$container && self.$el) self.$container.removeChild(self.$el);
                }
            },
            {
                key: "pause",
                value: function pause() {
                    var self = this;
                    self.paused = true;
                }
            },
            {
                key: "resume",
                value: function resume() {
                    var self = this;
                    self.paused = false;
                }
            }
        ], [
            {
                key: "_on",
                // event listener
                value: function _on(el, ev, handler, cap) {
                    if (el.addEventListener) el.addEventListener(ev, handler, cap);
                    else if (el.attachEvent) el.attachEvent("on".concat(ev), handler);
                    else el["on".concat(ev)] = handler;
                }
            }
        ]);
        return TagCloud;
    }();
    TagCloud.list = [];
    TagCloud._defaultConfig = {
        radius: 100,
        // rolling radius, unit `px`
        maxSpeed: "normal",
        // rolling max speed, optional: `slow`, `normal`(default), `fast`
        initSpeed: "normal",
        // rolling init speed, optional: `slow`, `normal`(default), `fast`
        direction: 135,
        // rolling init direction, unit clockwise `deg`, optional: `0`(top) , `90`(left), `135`(right-bottom)(default)...
        keep: true,
        // whether to keep rolling after mouse out area, optional: `false`, `true`(default)(decelerate to rolling init speed, and keep rolling with mouse)
        useContainerInlineStyles: true,
        useItemInlineStyles: true,
        containerClass: "tagcloud",
        itemClass: "tagcloud--item"
    };
    TagCloud._getMaxSpeed = function(name) {
        return ({
            slow: 0.5,
            normal: 1,
            fast: 2
        })[name] || 1;
    };
    TagCloud._getInitSpeed = function(name) {
        return ({
            slow: 16,
            normal: 32,
            fast: 80
        })[name] || 32;
    };
    var index = function(els, texts, options) {
        if (typeof els === "string") els = document.querySelectorAll(els);
        if (!els.forEach) els = [
            els
        ];
        var instances = [];
        els.forEach(function(el) {
            if (el) instances.push(new TagCloud(el, texts, options));
        });
        return instances.length <= 1 ? instances[0] : instances;
    };
    return index;
});

},{}],"85X92":[function(require,module,exports) {
module.exports = JSON.parse('[{"title":"Spectra Bank - An online bank application","description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit.\\n    Dignissimos tempora facere et eos commodi veniam perspiciatis iure\\n    maxime natus facilis sunt, quas suscipit odio odit, fugit tempore\\n    autem, nemo quaerat.\\n    <br/>\\n    <br/>\\n    Lorem ipsum dolor sit, amet consectetur adipisicing elit.\\n    Dignissimos tempora facere et eos commodi veniam perspiciatis iure\\n    maxime natus facilis sunt, quas suscipit odio odit, fugit tempore\\n    autem, nemo quaerat.","image":"","tools":"html, css, js","liveLink":"https://spectra-bank.netlify.app","githubLink":"https://github.com/shohan-pherones/spectra-bank"},{"title":"Tera Guard - An anti-virus website","description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit.\\n    Dignissimos tempora facere et eos commodi veniam perspiciatis iure\\n    maxime natus facilis sunt, quas suscipit odio odit, fugit tempore\\n    autem, nemo quaerat.\\n    <br/>\\n    <br/>\\n    Lorem ipsum dolor sit, amet consectetur adipisicing elit.\\n    Dignissimos tempora facere et eos commodi veniam perspiciatis iure\\n    maxime natus facilis sunt, quas suscipit odio odit, fugit tempore\\n    autem, nemo quaerat.","image":"","tools":"html, css, js","liveLink":"https://tera-guard.netlify.app","githubLink":"https://github.com/shohan-pherones/tera-guard"},{"title":"Map - Pro: A workout mapping application","description":"Lorem ipsum dolor sit, amet consectetur adipisicing elit.\\n    Dignissimos tempora facere et eos commodi veniam perspiciatis iure\\n    maxime natus facilis sunt, quas suscipit odio odit, fugit tempore\\n    autem, nemo quaerat.\\n    <br/>\\n    <br/>\\n    Lorem ipsum dolor sit, amet consectetur adipisicing elit.\\n    Dignissimos tempora facere et eos commodi veniam perspiciatis iure\\n    maxime natus facilis sunt, quas suscipit odio odit, fugit tempore\\n    autem, nemo quaerat.","image":"","tools":"html, css, js, leaflet.js","liveLink":"https://map-pro-shohan.netlify.app","githubLink":"https://github.com/shohan-pherones/map-pro"}]');

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"49tUX":[function(require,module,exports) {
// TODO: Remove this module from `core-js@4` since it's split to modules listed below
require("../modules/web.clear-immediate");
require("../modules/web.set-immediate");

},{"../modules/web.clear-immediate":"fOGFr","../modules/web.set-immediate":"l7FDS"}],"fOGFr":[function(require,module,exports) {
var $ = require("../internals/export");
var global = require("../internals/global");
var clearImmediate = require("../internals/task").clear;
// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.clearImmediate !== clearImmediate
}, {
    clearImmediate: clearImmediate
});

},{"../internals/export":"dIGt4","../internals/global":"i8HOC","../internals/task":"7jDg7"}],"dIGt4":[function(require,module,exports) {
var global = require("../internals/global");
var getOwnPropertyDescriptor = require("../internals/object-get-own-property-descriptor").f;
var createNonEnumerableProperty = require("../internals/create-non-enumerable-property");
var defineBuiltIn = require("../internals/define-built-in");
var defineGlobalProperty = require("../internals/define-global-property");
var copyConstructorProperties = require("../internals/copy-constructor-properties");
var isForced = require("../internals/is-forced");
/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ module.exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = global;
    else if (STATIC) target = global[TARGET] || defineGlobalProperty(TARGET, {});
    else target = (global[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            copyConstructorProperties(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) createNonEnumerableProperty(sourceProperty, "sham", true);
        defineBuiltIn(target, key, sourceProperty, options);
    }
};

},{"../internals/global":"i8HOC","../internals/object-get-own-property-descriptor":"lk5NI","../internals/create-non-enumerable-property":"8CL42","../internals/define-built-in":"6XwEX","../internals/define-global-property":"ggjnO","../internals/copy-constructor-properties":"9Z12i","../internals/is-forced":"6uTCZ"}],"i8HOC":[function(require,module,exports) {
var global = arguments[3];
var check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports = // eslint-disable-next-line es/no-global-this -- safe
check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
check(typeof self == "object" && self) || check(typeof global == "object" && global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();

},{}],"lk5NI":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var call = require("../internals/function-call");
var propertyIsEnumerableModule = require("../internals/object-property-is-enumerable");
var createPropertyDescriptor = require("../internals/create-property-descriptor");
var toIndexedObject = require("../internals/to-indexed-object");
var toPropertyKey = require("../internals/to-property-key");
var hasOwn = require("../internals/has-own-property");
var IE8_DOM_DEFINE = require("../internals/ie8-dom-define");
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (IE8_DOM_DEFINE) try {
        return $getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};

},{"../internals/descriptors":"92ZIi","../internals/function-call":"d7JlP","../internals/object-property-is-enumerable":"7SuiS","../internals/create-property-descriptor":"1lpav","../internals/to-indexed-object":"jLWwQ","../internals/to-property-key":"5XWKd","../internals/has-own-property":"gC2Q5","../internals/ie8-dom-define":"qS9uN"}],"92ZIi":[function(require,module,exports) {
var fails = require("../internals/fails");
// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});

},{"../internals/fails":"hL6D2"}],"hL6D2":[function(require,module,exports) {
module.exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};

},{}],"d7JlP":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var call = Function.prototype.call;
module.exports = NATIVE_BIND ? call.bind(call) : function() {
    return call.apply(call, arguments);
};

},{"../internals/function-bind-native":"i16Dq"}],"i16Dq":[function(require,module,exports) {
var fails = require("../internals/fails");
module.exports = !fails(function() {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});

},{"../internals/fails":"hL6D2"}],"7SuiS":[function(require,module,exports) {
"use strict";
var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({
    1: 2
}, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

},{}],"1lpav":[function(require,module,exports) {
module.exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};

},{}],"jLWwQ":[function(require,module,exports) {
// toObject with fallback for non-array-like ES3 strings
var IndexedObject = require("../internals/indexed-object");
var requireObjectCoercible = require("../internals/require-object-coercible");
module.exports = function(it) {
    return IndexedObject(requireObjectCoercible(it));
};

},{"../internals/indexed-object":"kPk5h","../internals/require-object-coercible":"fOR0B"}],"kPk5h":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var fails = require("../internals/fails");
var classof = require("../internals/classof-raw");
var $Object = Object;
var split = uncurryThis("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return classof(it) == "String" ? split(it, "") : $Object(it);
} : $Object;

},{"../internals/function-uncurry-this":"7GlkT","../internals/fails":"hL6D2","../internals/classof-raw":"bdfmm"}],"7GlkT":[function(require,module,exports) {
var classofRaw = require("../internals/classof-raw");
var uncurryThisRaw = require("../internals/function-uncurry-this-raw");
module.exports = function(fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === "Function") return uncurryThisRaw(fn);
};

},{"../internals/classof-raw":"bdfmm","../internals/function-uncurry-this-raw":"bAiTz"}],"bdfmm":[function(require,module,exports) {
var uncurryThisRaw = require("../internals/function-uncurry-this-raw");
var toString = uncurryThisRaw({}.toString);
var stringSlice = uncurryThisRaw("".slice);
module.exports = function(it) {
    return stringSlice(toString(it), 8, -1);
};

},{"../internals/function-uncurry-this-raw":"bAiTz"}],"bAiTz":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
module.exports = function(fn) {
    return NATIVE_BIND ? uncurryThisWithBind(fn) : function() {
        return call.apply(fn, arguments);
    };
};

},{"../internals/function-bind-native":"i16Dq"}],"fOR0B":[function(require,module,exports) {
var isNullOrUndefined = require("../internals/is-null-or-undefined");
var $TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function(it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
};

},{"../internals/is-null-or-undefined":"gM5ar"}],"gM5ar":[function(require,module,exports) {
// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function(it) {
    return it === null || it === undefined;
};

},{}],"5XWKd":[function(require,module,exports) {
var toPrimitive = require("../internals/to-primitive");
var isSymbol = require("../internals/is-symbol");
// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function(argument) {
    var key = toPrimitive(argument, "string");
    return isSymbol(key) ? key : key + "";
};

},{"../internals/to-primitive":"a2mK1","../internals/is-symbol":"4aV4F"}],"a2mK1":[function(require,module,exports) {
var call = require("../internals/function-call");
var isObject = require("../internals/is-object");
var isSymbol = require("../internals/is-symbol");
var getMethod = require("../internals/get-method");
var ordinaryToPrimitive = require("../internals/ordinary-to-primitive");
var wellKnownSymbol = require("../internals/well-known-symbol");
var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result)) return result;
        throw $TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return ordinaryToPrimitive(input, pref);
};

},{"../internals/function-call":"d7JlP","../internals/is-object":"Z0pBo","../internals/is-symbol":"4aV4F","../internals/get-method":"9Zfiw","../internals/ordinary-to-primitive":"7MME2","../internals/well-known-symbol":"gTwyA"}],"Z0pBo":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var $documentAll = require("../internals/document-all");
var documentAll = $documentAll.all;
module.exports = $documentAll.IS_HTMLDDA ? function(it) {
    return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
} : function(it) {
    return typeof it == "object" ? it !== null : isCallable(it);
};

},{"../internals/is-callable":"l3Kyn","../internals/document-all":"5MHqB"}],"l3Kyn":[function(require,module,exports) {
var $documentAll = require("../internals/document-all");
var documentAll = $documentAll.all;
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
    return typeof argument == "function" || argument === documentAll;
} : function(argument) {
    return typeof argument == "function";
};

},{"../internals/document-all":"5MHqB"}],"5MHqB":[function(require,module,exports) {
var documentAll = typeof document == "object" && document.all;
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== undefined;
module.exports = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
};

},{}],"4aV4F":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
var isCallable = require("../internals/is-callable");
var isPrototypeOf = require("../internals/object-is-prototype-of");
var USE_SYMBOL_AS_UID = require("../internals/use-symbol-as-uid");
var $Object = Object;
module.exports = USE_SYMBOL_AS_UID ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = getBuiltIn("Symbol");
    return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};

},{"../internals/get-built-in":"6ZUSY","../internals/is-callable":"l3Kyn","../internals/object-is-prototype-of":"3jtKQ","../internals/use-symbol-as-uid":"2Ye8Q"}],"6ZUSY":[function(require,module,exports) {
var global = require("../internals/global");
var isCallable = require("../internals/is-callable");
var aFunction = function(argument) {
    return isCallable(argument) ? argument : undefined;
};
module.exports = function(namespace, method) {
    return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn"}],"3jtKQ":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
module.exports = uncurryThis({}.isPrototypeOf);

},{"../internals/function-uncurry-this":"7GlkT"}],"2Ye8Q":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var NATIVE_SYMBOL = require("../internals/symbol-constructor-detection");
module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";

},{"../internals/symbol-constructor-detection":"8KyTD"}],"8KyTD":[function(require,module,exports) {
/* eslint-disable es/no-symbol -- required for testing */ var V8_VERSION = require("../internals/engine-v8-version");
var fails = require("../internals/fails");
// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});

},{"../internals/engine-v8-version":"bjFlO","../internals/fails":"hL6D2"}],"bjFlO":[function(require,module,exports) {
var global = require("../internals/global");
var userAgent = require("../internals/engine-user-agent");
var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
    match = userAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match) version = +match[1];
    }
}
module.exports = version;

},{"../internals/global":"i8HOC","../internals/engine-user-agent":"73xBt"}],"73xBt":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
module.exports = getBuiltIn("navigator", "userAgent") || "";

},{"../internals/get-built-in":"6ZUSY"}],"9Zfiw":[function(require,module,exports) {
var aCallable = require("../internals/a-callable");
var isNullOrUndefined = require("../internals/is-null-or-undefined");
// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function(V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
};

},{"../internals/a-callable":"gOMir","../internals/is-null-or-undefined":"gM5ar"}],"gOMir":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var tryToString = require("../internals/try-to-string");
var $TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
module.exports = function(argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError(tryToString(argument) + " is not a function");
};

},{"../internals/is-callable":"l3Kyn","../internals/try-to-string":"4O7d7"}],"4O7d7":[function(require,module,exports) {
var $String = String;
module.exports = function(argument) {
    try {
        return $String(argument);
    } catch (error) {
        return "Object";
    }
};

},{}],"7MME2":[function(require,module,exports) {
var call = require("../internals/function-call");
var isCallable = require("../internals/is-callable");
var isObject = require("../internals/is-object");
var $TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
    if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
    throw $TypeError("Can't convert object to primitive value");
};

},{"../internals/function-call":"d7JlP","../internals/is-callable":"l3Kyn","../internals/is-object":"Z0pBo"}],"gTwyA":[function(require,module,exports) {
var global = require("../internals/global");
var shared = require("../internals/shared");
var hasOwn = require("../internals/has-own-property");
var uid = require("../internals/uid");
var NATIVE_SYMBOL = require("../internals/symbol-constructor-detection");
var USE_SYMBOL_AS_UID = require("../internals/use-symbol-as-uid");
var WellKnownSymbolsStore = shared("wks");
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol["for"];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;
module.exports = function(name) {
    if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
        else if (USE_SYMBOL_AS_UID && symbolFor) WellKnownSymbolsStore[name] = symbolFor(description);
        else WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
    return WellKnownSymbolsStore[name];
};

},{"../internals/global":"i8HOC","../internals/shared":"i1mHK","../internals/has-own-property":"gC2Q5","../internals/uid":"a3SEE","../internals/symbol-constructor-detection":"8KyTD","../internals/use-symbol-as-uid":"2Ye8Q"}],"i1mHK":[function(require,module,exports) {
var IS_PURE = require("../internals/is-pure");
var store = require("../internals/shared-store");
(module.exports = function(key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.25.5",
    mode: IS_PURE ? "pure" : "global",
    copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.25.5/LICENSE",
    source: "https://github.com/zloirock/core-js"
});

},{"../internals/is-pure":"5ZsyC","../internals/shared-store":"l4ncH"}],"5ZsyC":[function(require,module,exports) {
module.exports = false;

},{}],"l4ncH":[function(require,module,exports) {
var global = require("../internals/global");
var defineGlobalProperty = require("../internals/define-global-property");
var SHARED = "__core-js_shared__";
var store = global[SHARED] || defineGlobalProperty(SHARED, {});
module.exports = store;

},{"../internals/global":"i8HOC","../internals/define-global-property":"ggjnO"}],"ggjnO":[function(require,module,exports) {
var global = require("../internals/global");
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
module.exports = function(key, value) {
    try {
        defineProperty(global, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        global[key] = value;
    }
    return value;
};

},{"../internals/global":"i8HOC"}],"gC2Q5":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var toObject = require("../internals/to-object");
var hasOwnProperty = uncurryThis({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/to-object":"5cb35"}],"5cb35":[function(require,module,exports) {
var requireObjectCoercible = require("../internals/require-object-coercible");
var $Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function(argument) {
    return $Object(requireObjectCoercible(argument));
};

},{"../internals/require-object-coercible":"fOR0B"}],"a3SEE":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);
module.exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + toString(++id + postfix, 36);
};

},{"../internals/function-uncurry-this":"7GlkT"}],"qS9uN":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var fails = require("../internals/fails");
var createElement = require("../internals/document-create-element");
// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(createElement("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2","../internals/document-create-element":"4bOHl"}],"4bOHl":[function(require,module,exports) {
var global = require("../internals/global");
var isObject = require("../internals/is-object");
var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);
module.exports = function(it) {
    return EXISTS ? document.createElement(it) : {};
};

},{"../internals/global":"i8HOC","../internals/is-object":"Z0pBo"}],"8CL42":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var definePropertyModule = require("../internals/object-define-property");
var createPropertyDescriptor = require("../internals/create-property-descriptor");
module.exports = DESCRIPTORS ? function(object, key, value) {
    return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};

},{"../internals/descriptors":"92ZIi","../internals/object-define-property":"iJR4w","../internals/create-property-descriptor":"1lpav"}],"iJR4w":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var IE8_DOM_DEFINE = require("../internals/ie8-dom-define");
var V8_PROTOTYPE_DEFINE_BUG = require("../internals/v8-prototype-define-bug");
var anObject = require("../internals/an-object");
var toPropertyKey = require("../internals/to-property-key");
var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE = "configurable";
var WRITABLE = "writable";
// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
                enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
                writable: false
            };
        }
    }
    return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
        return $defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};

},{"../internals/descriptors":"92ZIi","../internals/ie8-dom-define":"qS9uN","../internals/v8-prototype-define-bug":"ka1Un","../internals/an-object":"4isCr","../internals/to-property-key":"5XWKd"}],"ka1Un":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var fails = require("../internals/fails");
// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function() {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});

},{"../internals/descriptors":"92ZIi","../internals/fails":"hL6D2"}],"4isCr":[function(require,module,exports) {
var isObject = require("../internals/is-object");
var $String = String;
var $TypeError = TypeError;
// `Assert: Type(argument) is Object`
module.exports = function(argument) {
    if (isObject(argument)) return argument;
    throw $TypeError($String(argument) + " is not an object");
};

},{"../internals/is-object":"Z0pBo"}],"6XwEX":[function(require,module,exports) {
var isCallable = require("../internals/is-callable");
var definePropertyModule = require("../internals/object-define-property");
var makeBuiltIn = require("../internals/make-built-in");
var defineGlobalProperty = require("../internals/define-global-property");
module.exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else defineGlobalProperty(key, value);
    } else {
        try {
            if (!options.unsafe) delete O[key];
            else if (O[key]) simple = true;
        } catch (error) {}
        if (simple) O[key] = value;
        else definePropertyModule.f(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};

},{"../internals/is-callable":"l3Kyn","../internals/object-define-property":"iJR4w","../internals/make-built-in":"cTB4k","../internals/define-global-property":"ggjnO"}],"cTB4k":[function(require,module,exports) {
var fails = require("../internals/fails");
var isCallable = require("../internals/is-callable");
var hasOwn = require("../internals/has-own-property");
var DESCRIPTORS = require("../internals/descriptors");
var CONFIGURABLE_FUNCTION_NAME = require("../internals/function-name").CONFIGURABLE;
var inspectSource = require("../internals/inspect-source");
var InternalStateModule = require("../internals/internal-state");
var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
    return defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var TEMPLATE = String(String).split("String");
var makeBuiltIn = module.exports = function(value, name, options) {
    if (String(name).slice(0, 7) === "Symbol(") name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS) defineProperty(value, "name", {
            value: name,
            configurable: true
        });
        else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
            if (DESCRIPTORS) defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = enforceInternalState(value);
    if (!hasOwn(state, "source")) state.source = TEMPLATE.join(typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, "toString");

},{"../internals/fails":"hL6D2","../internals/is-callable":"l3Kyn","../internals/has-own-property":"gC2Q5","../internals/descriptors":"92ZIi","../internals/function-name":"l6Kgd","../internals/inspect-source":"9jh7O","../internals/internal-state":"7AMlF"}],"l6Kgd":[function(require,module,exports) {
var DESCRIPTORS = require("../internals/descriptors");
var hasOwn = require("../internals/has-own-property");
var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn(FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() {}).name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
module.exports = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
};

},{"../internals/descriptors":"92ZIi","../internals/has-own-property":"gC2Q5"}],"9jh7O":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var isCallable = require("../internals/is-callable");
var store = require("../internals/shared-store");
var functionToString = uncurryThis(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) store.inspectSource = function(it) {
    return functionToString(it);
};
module.exports = store.inspectSource;

},{"../internals/function-uncurry-this":"7GlkT","../internals/is-callable":"l3Kyn","../internals/shared-store":"l4ncH"}],"7AMlF":[function(require,module,exports) {
var NATIVE_WEAK_MAP = require("../internals/weak-map-basic-detection");
var global = require("../internals/global");
var isObject = require("../internals/is-object");
var createNonEnumerableProperty = require("../internals/create-non-enumerable-property");
var hasOwn = require("../internals/has-own-property");
var shared = require("../internals/shared-store");
var sharedKey = require("../internals/shared-key");
var hiddenKeys = require("../internals/hidden-keys");
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;
var enforce = function(it) {
    return has(it) ? get(it) : set(it, {});
};
var getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) throw TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if (NATIVE_WEAK_MAP || shared.state) {
    var store = shared.state || (shared.state = new WeakMap());
    /* eslint-disable no-self-assign -- prototype methods protection */ store.get = store.get;
    store.has = store.has;
    store.set = store.set;
    /* eslint-enable no-self-assign -- prototype methods protection */ set = function(it, metadata) {
        if (store.has(it)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
    };
    get = function(it) {
        return store.get(it) || {};
    };
    has = function(it) {
        return store.has(it);
    };
} else {
    var STATE = sharedKey("state");
    hiddenKeys[STATE] = true;
    set = function(it, metadata) {
        if (hasOwn(it, STATE)) throw TypeError(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
    };
    has = function(it) {
        return hasOwn(it, STATE);
    };
}
module.exports = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
};

},{"../internals/weak-map-basic-detection":"2PZTl","../internals/global":"i8HOC","../internals/is-object":"Z0pBo","../internals/create-non-enumerable-property":"8CL42","../internals/has-own-property":"gC2Q5","../internals/shared-store":"l4ncH","../internals/shared-key":"eAjGz","../internals/hidden-keys":"661m4"}],"2PZTl":[function(require,module,exports) {
var global = require("../internals/global");
var isCallable = require("../internals/is-callable");
var WeakMap = global.WeakMap;
module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));

},{"../internals/global":"i8HOC","../internals/is-callable":"l3Kyn"}],"eAjGz":[function(require,module,exports) {
var shared = require("../internals/shared");
var uid = require("../internals/uid");
var keys = shared("keys");
module.exports = function(key) {
    return keys[key] || (keys[key] = uid(key));
};

},{"../internals/shared":"i1mHK","../internals/uid":"a3SEE"}],"661m4":[function(require,module,exports) {
module.exports = {};

},{}],"9Z12i":[function(require,module,exports) {
var hasOwn = require("../internals/has-own-property");
var ownKeys = require("../internals/own-keys");
var getOwnPropertyDescriptorModule = require("../internals/object-get-own-property-descriptor");
var definePropertyModule = require("../internals/object-define-property");
module.exports = function(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = definePropertyModule.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};

},{"../internals/has-own-property":"gC2Q5","../internals/own-keys":"1CX1A","../internals/object-get-own-property-descriptor":"lk5NI","../internals/object-define-property":"iJR4w"}],"1CX1A":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
var uncurryThis = require("../internals/function-uncurry-this");
var getOwnPropertyNamesModule = require("../internals/object-get-own-property-names");
var getOwnPropertySymbolsModule = require("../internals/object-get-own-property-symbols");
var anObject = require("../internals/an-object");
var concat = uncurryThis([].concat);
// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule.f(anObject(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

},{"../internals/get-built-in":"6ZUSY","../internals/function-uncurry-this":"7GlkT","../internals/object-get-own-property-names":"fjY04","../internals/object-get-own-property-symbols":"4DWO3","../internals/an-object":"4isCr"}],"fjY04":[function(require,module,exports) {
var internalObjectKeys = require("../internals/object-keys-internal");
var enumBugKeys = require("../internals/enum-bug-keys");
var hiddenKeys = enumBugKeys.concat("length", "prototype");
// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys(O, hiddenKeys);
};

},{"../internals/object-keys-internal":"hl5T1","../internals/enum-bug-keys":"9RnJm"}],"hl5T1":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var hasOwn = require("../internals/has-own-property");
var toIndexedObject = require("../internals/to-indexed-object");
var indexOf = require("../internals/array-includes").indexOf;
var hiddenKeys = require("../internals/hidden-keys");
var push = uncurryThis([].push);
module.exports = function(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if (hasOwn(O, key = names[i++])) ~indexOf(result, key) || push(result, key);
    return result;
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/has-own-property":"gC2Q5","../internals/to-indexed-object":"jLWwQ","../internals/array-includes":"n5IsC","../internals/hidden-keys":"661m4"}],"n5IsC":[function(require,module,exports) {
var toIndexedObject = require("../internals/to-indexed-object");
var toAbsoluteIndex = require("../internals/to-absolute-index");
var lengthOfArrayLike = require("../internals/length-of-array-like");
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
module.exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};

},{"../internals/to-indexed-object":"jLWwQ","../internals/to-absolute-index":"5yh27","../internals/length-of-array-like":"lY4mS"}],"5yh27":[function(require,module,exports) {
var toIntegerOrInfinity = require("../internals/to-integer-or-infinity");
var max = Math.max;
var min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
};

},{"../internals/to-integer-or-infinity":"kLXGe"}],"kLXGe":[function(require,module,exports) {
var trunc = require("../internals/math-trunc");
// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : trunc(number);
};

},{"../internals/math-trunc":"7O8gb"}],"7O8gb":[function(require,module,exports) {
var ceil = Math.ceil;
var floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
};

},{}],"lY4mS":[function(require,module,exports) {
var toLength = require("../internals/to-length");
// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function(obj) {
    return toLength(obj.length);
};

},{"../internals/to-length":"fU04N"}],"fU04N":[function(require,module,exports) {
var toIntegerOrInfinity = require("../internals/to-integer-or-infinity");
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function(argument) {
    return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

},{"../internals/to-integer-or-infinity":"kLXGe"}],"9RnJm":[function(require,module,exports) {
// IE8- don't enum bug keys
module.exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];

},{}],"4DWO3":[function(require,module,exports) {
// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;

},{}],"6uTCZ":[function(require,module,exports) {
var fails = require("../internals/fails");
var isCallable = require("../internals/is-callable");
var replacement = /#|\.prototype\./;
var isForced = function(feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
};
var normalize = isForced.normalize = function(string) {
    return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = "N";
var POLYFILL = isForced.POLYFILL = "P";
module.exports = isForced;

},{"../internals/fails":"hL6D2","../internals/is-callable":"l3Kyn"}],"7jDg7":[function(require,module,exports) {
var global = require("../internals/global");
var apply = require("../internals/function-apply");
var bind = require("../internals/function-bind-context");
var isCallable = require("../internals/is-callable");
var hasOwn = require("../internals/has-own-property");
var fails = require("../internals/fails");
var html = require("../internals/html");
var arraySlice = require("../internals/array-slice");
var createElement = require("../internals/document-create-element");
var validateArgumentsLength = require("../internals/validate-arguments-length");
var IS_IOS = require("../internals/engine-is-ios");
var IS_NODE = require("../internals/engine-is-node");
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var Dispatch = global.Dispatch;
var Function = global.Function;
var MessageChannel = global.MessageChannel;
var String = global.String;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var $location, defer, channel, port;
try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $location = global.location;
} catch (error) {}
var run = function(id) {
    if (hasOwn(queue, id)) {
        var fn = queue[id];
        delete queue[id];
        fn();
    }
};
var runner = function(id) {
    return function() {
        run(id);
    };
};
var listener = function(event) {
    run(event.data);
};
var post = function(id) {
    // old engines have not location.origin
    global.postMessage(String(id), $location.protocol + "//" + $location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
    set = function setImmediate(handler) {
        validateArgumentsLength(arguments.length, 1);
        var fn = isCallable(handler) ? handler : Function(handler);
        var args = arraySlice(arguments, 1);
        queue[++counter] = function() {
            apply(fn, undefined, args);
        };
        defer(counter);
        return counter;
    };
    clear = function clearImmediate(id) {
        delete queue[id];
    };
    // Node.js 0.8-
    if (IS_NODE) defer = function(id) {
        process.nextTick(runner(id));
    };
    else if (Dispatch && Dispatch.now) defer = function(id) {
        Dispatch.now(runner(id));
    };
    else if (MessageChannel && !IS_IOS) {
        channel = new MessageChannel();
        port = channel.port2;
        channel.port1.onmessage = listener;
        defer = bind(port.postMessage, port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && isCallable(global.postMessage) && !global.importScripts && $location && $location.protocol !== "file:" && !fails(post)) {
        defer = post;
        global.addEventListener("message", listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in createElement("script")) defer = function(id) {
        html.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
            html.removeChild(this);
            run(id);
        };
    };
    else defer = function(id) {
        setTimeout(runner(id), 0);
    };
}
module.exports = {
    set: set,
    clear: clear
};

},{"../internals/global":"i8HOC","../internals/function-apply":"148ka","../internals/function-bind-context":"7vpmS","../internals/is-callable":"l3Kyn","../internals/has-own-property":"gC2Q5","../internals/fails":"hL6D2","../internals/html":"2pze4","../internals/array-slice":"RsFXo","../internals/document-create-element":"4bOHl","../internals/validate-arguments-length":"b9O3D","../internals/engine-is-ios":"bzGah","../internals/engine-is-node":"2Jcp4"}],"148ka":[function(require,module,exports) {
var NATIVE_BIND = require("../internals/function-bind-native");
var FunctionPrototype = Function.prototype;
var apply = FunctionPrototype.apply;
var call = FunctionPrototype.call;
// eslint-disable-next-line es/no-reflect -- safe
module.exports = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND ? call.bind(apply) : function() {
    return call.apply(apply, arguments);
});

},{"../internals/function-bind-native":"i16Dq"}],"7vpmS":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
var aCallable = require("../internals/a-callable");
var NATIVE_BIND = require("../internals/function-bind-native");
var bind = uncurryThis(uncurryThis.bind);
// optional / simple context binding
module.exports = function(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};

},{"../internals/function-uncurry-this":"7GlkT","../internals/a-callable":"gOMir","../internals/function-bind-native":"i16Dq"}],"2pze4":[function(require,module,exports) {
var getBuiltIn = require("../internals/get-built-in");
module.exports = getBuiltIn("document", "documentElement");

},{"../internals/get-built-in":"6ZUSY"}],"RsFXo":[function(require,module,exports) {
var uncurryThis = require("../internals/function-uncurry-this");
module.exports = uncurryThis([].slice);

},{"../internals/function-uncurry-this":"7GlkT"}],"b9O3D":[function(require,module,exports) {
var $TypeError = TypeError;
module.exports = function(passed, required) {
    if (passed < required) throw $TypeError("Not enough arguments");
    return passed;
};

},{}],"bzGah":[function(require,module,exports) {
var userAgent = require("../internals/engine-user-agent");
module.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent);

},{"../internals/engine-user-agent":"73xBt"}],"2Jcp4":[function(require,module,exports) {
var classof = require("../internals/classof-raw");
var global = require("../internals/global");
module.exports = classof(global.process) == "process";

},{"../internals/classof-raw":"bdfmm","../internals/global":"i8HOC"}],"l7FDS":[function(require,module,exports) {
var $ = require("../internals/export");
var global = require("../internals/global");
var setImmediate = require("../internals/task").set;
// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
$({
    global: true,
    bind: true,
    enumerable: true,
    forced: global.setImmediate !== setImmediate
}, {
    setImmediate: setImmediate
});

},{"../internals/export":"dIGt4","../internals/global":"i8HOC","../internals/task":"7jDg7"}]},["eZyLq","dV6cC"], "dV6cC", "parcelRequire0221")

//# sourceMappingURL=index.e82f28a0.js.map

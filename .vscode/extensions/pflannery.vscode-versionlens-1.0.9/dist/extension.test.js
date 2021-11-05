module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/runner.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core.clients/index.test.ts":
/*!****************************************!*\
  !*** ./src/core.clients/index.test.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./test/caching/expiryCacheMap.tests */ "./src/core.clients/test/caching/expiryCacheMap.tests.ts"), exports);
__exportStar(__webpack_require__(/*! ./test/requests/abstractClientRequest.tests */ "./src/core.clients/test/requests/abstractClientRequest.tests.ts"), exports);
__exportStar(__webpack_require__(/*! ./test/helpers/urlHelpers.tests */ "./src/core.clients/test/helpers/urlHelpers.tests.ts"), exports);


/***/ }),

/***/ "./src/core.clients/index.ts":
/*!***********************************!*\
  !*** ./src/core.clients/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlHelpers = void 0;
__exportStar(__webpack_require__(/*! ./src/definitions/clientResponses */ "./src/core.clients/src/definitions/clientResponses.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/eCachingContributions */ "./src/core.clients/src/definitions/eCachingContributions.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/eHttpContributions */ "./src/core.clients/src/definitions/eHttpContributions.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/eHttpClientRequestMethods */ "./src/core.clients/src/definitions/eHttpClientRequestMethods.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iHttpOptions */ "./src/core.clients/src/definitions/iHttpOptions.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iCachingOptions */ "./src/core.clients/src/definitions/iCachingOptions.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iJsonHttpClient */ "./src/core.clients/src/definitions/iJsonHttpClient.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iHttpClient */ "./src/core.clients/src/definitions/iHttpClient.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iProcessClient */ "./src/core.clients/src/definitions/iProcessClient.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/tHttpRequestOptions */ "./src/core.clients/src/definitions/tHttpRequestOptions.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/caching/expiryCacheMap */ "./src/core.clients/src/caching/expiryCacheMap.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/options/cachingOptions */ "./src/core.clients/src/options/cachingOptions.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/options/httpOptions */ "./src/core.clients/src/options/httpOptions.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/requests/abstractCachedRequest */ "./src/core.clients/src/requests/abstractCachedRequest.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/requests/jsonHttpClient */ "./src/core.clients/src/requests/jsonHttpClient.ts"), exports);
exports.UrlHelpers = __webpack_require__(/*! ./src/helpers/urlHelpers */ "./src/core.clients/src/helpers/urlHelpers.ts");


/***/ }),

/***/ "./src/core.clients/src/caching/expiryCacheMap.ts":
/*!********************************************************!*\
  !*** ./src/core.clients/src/caching/expiryCacheMap.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpiryCacheMap = void 0;
class ExpiryCacheMap {
    constructor(cachingOpts) {
        this.cachingOpts = cachingOpts;
        this.cacheMap = {};
    }
    clear() {
        this.cacheMap = {};
    }
    hasExpired(key) {
        const entry = this.cacheMap[key];
        if (!entry)
            return true;
        return Date.now() > entry.expiryTime;
    }
    expire(key) {
        const entry = this.cacheMap[key];
        if (entry)
            delete this.cacheMap[key];
        return entry.data;
    }
    get(key) {
        const entry = this.cacheMap[key];
        return entry && entry.data;
    }
    set(key, data) {
        const expiryTime = Date.now() + this.cachingOpts.duration;
        const newEntry = {
            expiryTime,
            data
        };
        this.cacheMap[key] = newEntry;
        return newEntry.data;
    }
}
exports.ExpiryCacheMap = ExpiryCacheMap;


/***/ }),

/***/ "./src/core.clients/src/definitions/clientResponses.ts":
/*!*************************************************************!*\
  !*** ./src/core.clients/src/definitions/clientResponses.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientResponseSource = void 0;
var ClientResponseSource;
(function (ClientResponseSource) {
    ClientResponseSource["remote"] = "remote";
    ClientResponseSource["cache"] = "cache";
    ClientResponseSource["local"] = "local";
})(ClientResponseSource = exports.ClientResponseSource || (exports.ClientResponseSource = {}));


/***/ }),

/***/ "./src/core.clients/src/definitions/eCachingContributions.ts":
/*!*******************************************************************!*\
  !*** ./src/core.clients/src/definitions/eCachingContributions.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CachingContributions = void 0;
var CachingContributions;
(function (CachingContributions) {
    CachingContributions["CacheDuration"] = "duration";
})(CachingContributions = exports.CachingContributions || (exports.CachingContributions = {}));


/***/ }),

/***/ "./src/core.clients/src/definitions/eHttpClientRequestMethods.ts":
/*!***********************************************************************!*\
  !*** ./src/core.clients/src/definitions/eHttpClientRequestMethods.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClientRequestMethods = void 0;
var HttpClientRequestMethods;
(function (HttpClientRequestMethods) {
    HttpClientRequestMethods["get"] = "GET";
    HttpClientRequestMethods["head"] = "HEAD";
})(HttpClientRequestMethods = exports.HttpClientRequestMethods || (exports.HttpClientRequestMethods = {}));


/***/ }),

/***/ "./src/core.clients/src/definitions/eHttpContributions.ts":
/*!****************************************************************!*\
  !*** ./src/core.clients/src/definitions/eHttpContributions.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpContributions = void 0;
var HttpContributions;
(function (HttpContributions) {
    HttpContributions["StrictSSL"] = "strictSSL";
})(HttpContributions = exports.HttpContributions || (exports.HttpContributions = {}));


/***/ }),

/***/ "./src/core.clients/src/definitions/iCachingOptions.ts":
/*!*************************************************************!*\
  !*** ./src/core.clients/src/definitions/iCachingOptions.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.clients/src/definitions/iHttpClient.ts":
/*!*********************************************************!*\
  !*** ./src/core.clients/src/definitions/iHttpClient.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.clients/src/definitions/iHttpOptions.ts":
/*!**********************************************************!*\
  !*** ./src/core.clients/src/definitions/iHttpOptions.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.clients/src/definitions/iJsonHttpClient.ts":
/*!*************************************************************!*\
  !*** ./src/core.clients/src/definitions/iJsonHttpClient.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.clients/src/definitions/iProcessClient.ts":
/*!************************************************************!*\
  !*** ./src/core.clients/src/definitions/iProcessClient.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.clients/src/definitions/tHttpRequestOptions.ts":
/*!*****************************************************************!*\
  !*** ./src/core.clients/src/definitions/tHttpRequestOptions.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.clients/src/helpers/urlHelpers.ts":
/*!****************************************************!*\
  !*** ./src/core.clients/src/helpers/urlHelpers.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureEndSlash = exports.createUrl = exports.getProtocolFromUrl = exports.RegistryProtocols = void 0;
var RegistryProtocols;
(function (RegistryProtocols) {
    RegistryProtocols["file"] = "file:";
    RegistryProtocols["http"] = "http:";
    RegistryProtocols["https"] = "https:";
})(RegistryProtocols = exports.RegistryProtocols || (exports.RegistryProtocols = {}));
function getProtocolFromUrl(url) {
    const { parse } = __webpack_require__(/*! url */ "url");
    const sourceUrl = parse(url);
    const registryProtocol = sourceUrl.protocol === null ?
        RegistryProtocols.file :
        RegistryProtocols[sourceUrl.protocol.substr(0, sourceUrl.protocol.length - 1)];
    return registryProtocol || RegistryProtocols.file;
}
exports.getProtocolFromUrl = getProtocolFromUrl;
function createUrl(baseUrl, queryParams) {
    const query = buildQueryParams(queryParams);
    const slashedUrl = query.length > 0 ?
        stripEndSlash(baseUrl) :
        baseUrl;
    return slashedUrl + query;
}
exports.createUrl = createUrl;
function buildQueryParams(queryParams) {
    let query = '';
    if (queryParams) {
        query = Object.keys(queryParams)
            .map(key => `${key}=${queryParams[key]}`)
            .join('&');
        query = (query.length > 0) ? '?' + query : '';
    }
    return query;
}
function stripEndSlash(url) {
    return url.endsWith('/') ? url.substr(url.length - 1) : url;
}
function ensureEndSlash(url) {
    return url.endsWith('/') ? url : url + '/';
}
exports.ensureEndSlash = ensureEndSlash;


/***/ }),

/***/ "./src/core.clients/src/options/cachingOptions.ts":
/*!********************************************************!*\
  !*** ./src/core.clients/src/options/cachingOptions.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CachingOptions = void 0;
const core_configuration_1 = __webpack_require__(/*! core.configuration */ "./src/core.configuration/index.ts");
const eCachingContributions_1 = __webpack_require__(/*! ../definitions/eCachingContributions */ "./src/core.clients/src/definitions/eCachingContributions.ts");
class CachingOptions extends core_configuration_1.OptionsWithFallback {
    constructor(config, section, fallbackSection = null) {
        super(config, section, fallbackSection);
    }
    get duration() {
        const durationMin = this.getOrDefault(eCachingContributions_1.CachingContributions.CacheDuration, 0);
        // convert to milliseconds
        return durationMin * 60000;
    }
}
exports.CachingOptions = CachingOptions;


/***/ }),

/***/ "./src/core.clients/src/options/httpOptions.ts":
/*!*****************************************************!*\
  !*** ./src/core.clients/src/options/httpOptions.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpOptions = void 0;
const core_configuration_1 = __webpack_require__(/*! core.configuration */ "./src/core.configuration/index.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
class HttpOptions extends core_configuration_1.OptionsWithFallback {
    constructor(config, section, fallbackSection = null) {
        super(config, section, fallbackSection);
    }
    get strictSSL() {
        return this.getOrDefault(core_clients_1.HttpContributions.StrictSSL, true);
    }
}
exports.HttpOptions = HttpOptions;


/***/ }),

/***/ "./src/core.clients/src/requests/abstractCachedRequest.ts":
/*!****************************************************************!*\
  !*** ./src/core.clients/src/requests/abstractCachedRequest.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractCachedRequest = void 0;
const expiryCacheMap_1 = __webpack_require__(/*! ../caching/expiryCacheMap */ "./src/core.clients/src/caching/expiryCacheMap.ts");
const clientResponses_1 = __webpack_require__(/*! ../definitions/clientResponses */ "./src/core.clients/src/definitions/clientResponses.ts");
class AbstractCachedRequest {
    constructor(cachingOpts) {
        this.cache = new expiryCacheMap_1.ExpiryCacheMap(cachingOpts);
    }
    createCachedResponse(cacheKey, status, data, rejected = false, source = clientResponses_1.ClientResponseSource.remote) {
        const cacheEnabled = this.cache.cachingOpts.duration > 0;
        if (cacheEnabled) {
            //  cache reponse (don't return, keep immutable)
            this.cache.set(cacheKey, {
                source: clientResponses_1.ClientResponseSource.cache,
                status,
                data,
                rejected
            });
        }
        // return original fetched data
        return {
            source,
            status,
            data,
            rejected
        };
    }
}
exports.AbstractCachedRequest = AbstractCachedRequest;


/***/ }),

/***/ "./src/core.clients/src/requests/jsonHttpClient.ts":
/*!*********************************************************!*\
  !*** ./src/core.clients/src/requests/jsonHttpClient.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonHttpClient = void 0;
class JsonHttpClient {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async request(method, url, query = {}, headers = {}) {
        return this.httpClient.request(method, url, query, headers)
            .then(function (response) {
            return {
                source: response.source,
                status: response.status,
                data: JSON.parse(response.data),
            };
        });
    }
}
exports.JsonHttpClient = JsonHttpClient;


/***/ }),

/***/ "./src/core.clients/test/caching/expiryCacheMap.tests.ts":
/*!***************************************************************!*\
  !*** ./src/core.clients/test/caching/expiryCacheMap.tests.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpiryCacheMapTests = void 0;
const infrastructure_testing_1 = __webpack_require__(/*! infrastructure.testing */ "./src/infrastructure.testing/index.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
let testCacheMap;
exports.ExpiryCacheMapTests = {
    beforeEach: () => {
        // setup the client cache
        testCacheMap = new core_clients_1.ExpiryCacheMap({ duration: 30000 });
    },
    "hasExpired(key)": {
        "returns true when no key exists": () => {
            const testKey = 'missing';
            assert.ok(testCacheMap.hasExpired(testKey), 'ExpiryCacheMap.hasExpired(key): A missing key should be expired');
        },
        "returns false when the a cache entry is still within the cache duration": () => {
            const testKey = 'key1';
            testCacheMap.set(testKey, {});
            const actual = testCacheMap.hasExpired(testKey);
            assert.ok(actual === false, 'ExpiryCacheMap.hasExpired(key): A cache entry within the cache duration should NOT be expired');
        },
        "returns true when the cache entry is beyond the cache duration": () => {
            const testKey = 'key1';
            testCacheMap = new core_clients_1.ExpiryCacheMap({ duration: -1 });
            testCacheMap.set(testKey, {});
            const actual = testCacheMap.hasExpired(testKey);
            assert.ok(actual, 'ExpiryCacheMap.hasExpired(key): A cache entry beyond the cache duration should be expired');
        },
        "returns true when duration has elapsed": async () => {
            const testKey = 'duration';
            const testDuration = 250;
            testCacheMap = new core_clients_1.ExpiryCacheMap({ duration: testDuration });
            testCacheMap.set(testKey, "should of expired");
            return infrastructure_testing_1.delay(testDuration + 10)
                .then(finished => {
                const actual = testCacheMap.hasExpired(testKey);
                assert.equal(actual, true);
            });
        },
        "returns false when duration has not elapsed": async () => {
            const testKey = 'duration';
            const testDuration = 250;
            testCacheMap = new core_clients_1.ExpiryCacheMap({ duration: testDuration });
            testCacheMap.set(testKey, "should not be expired");
            return infrastructure_testing_1.delay(testDuration - 100)
                .then(finished => {
                const actual = testCacheMap.hasExpired(testKey);
                assert.equal(actual, false);
            });
        },
    },
    "get(key)": {
        "returns undefined if the key does not exist": () => {
            const testKey = 'missing';
            const actual = testCacheMap.get(testKey);
            assert.equal(actual, undefined, 'ExpiryCacheMap.get(key): Should return undefined when the key doesnt exist');
        },
        "returns the data by the key": () => {
            const testKey = 'key1';
            const testData = {};
            testCacheMap = new core_clients_1.ExpiryCacheMap({ duration: -1 });
            testCacheMap.set(testKey, testData);
            const actual = testCacheMap.get(testKey);
            assert.equal(actual, testData, 'ExpiryCacheMap.set(key, data): Should store the data by the key');
        }
    },
    "set(key, data)": {
        "stores the data by the key": () => {
            const testKey = 'key1';
            const testData = {};
            testCacheMap.set(testKey, testData);
            const actual = testCacheMap.get(testKey);
            assert.equal(actual, testData, 'ExpiryCacheMap.set(key, data): Should store the data by the key');
        },
        "returns the data that was set": () => {
            const testKey = 'key1';
            const testData = {};
            const actual = testCacheMap.set(testKey, testData);
            assert.equal(actual, testData, 'ExpiryCacheMap.set(key, data): Should return the data');
        }
    },
    "expire(key)": {
        "expires items in the cache": () => {
            const testKey = 'key1';
            const testData = "initial data";
            testCacheMap.set(testKey, testData);
            testCacheMap.expire(testKey);
            assert.ok(testCacheMap.hasExpired(testKey), true, 'ExpiryCacheMap.expire(key): Should expiry the item');
            testCacheMap.set(testKey, "new data");
            assert.ok(testCacheMap.get(testKey), "new data", 'ExpiryCacheMap.get(key): Should contain new data');
        }
    }
};


/***/ }),

/***/ "./src/core.clients/test/helpers/urlHelpers.tests.ts":
/*!***********************************************************!*\
  !*** ./src/core.clients/test/helpers/urlHelpers.tests.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlHelpersTests = void 0;
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
exports.UrlHelpersTests = {
    "getProtocolFromUrl": {
        "parses http and https protocols": () => {
            const testUrls = [
                'https://test.url.example/path',
                'http://test.url.example/path'
            ];
            const expectedProtocols = [
                core_clients_1.UrlHelpers.RegistryProtocols.https,
                core_clients_1.UrlHelpers.RegistryProtocols.http
            ];
            testUrls.forEach((testUrl, testIndex) => {
                const actual = core_clients_1.UrlHelpers.getProtocolFromUrl(testUrl);
                assert.equal(actual, expectedProtocols[testIndex], "Protocol did not match");
            });
        },
        "parses file protocols": () => {
            const testFolders = [
                'd:\\some\\path',
                '/d/some/path'
            ];
            testFolders.forEach((testFolder, testIndex) => {
                const actual = core_clients_1.UrlHelpers.getProtocolFromUrl(testFolder);
                assert.equal(actual, core_clients_1.UrlHelpers.RegistryProtocols.file, "Protocol did not match");
            });
        },
    },
    "ensureEndSlash": {
        "appends missing slashes": () => {
            const testUrls = [
                'https://test.url.example',
                'https://test.url.example/'
            ];
            const expectedUrls = [
                'https://test.url.example/',
                'https://test.url.example/'
            ];
            testUrls.forEach((testUrl, testIndex) => {
                const actual = core_clients_1.UrlHelpers.ensureEndSlash(testUrl);
                assert.equal(actual, expectedUrls[testIndex], "End slash did not match");
            });
        },
    },
};


/***/ }),

/***/ "./src/core.clients/test/requests/abstractClientRequest.tests.ts":
/*!***********************************************************************!*\
  !*** ./src/core.clients/test/requests/abstractClientRequest.tests.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractClientRequestTests = void 0;
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
class TestClientRequest extends core_clients_1.AbstractCachedRequest {
}
exports.AbstractClientRequestTests = {
    "createCachedResponse": {
        "caches responses": () => {
            const testKey = 'https://test.url.example/path';
            const testStatus = 123;
            const testSource = core_clients_1.ClientResponseSource.local;
            const testCache = "cached test";
            const expectedFirstResponse = {
                source: testSource,
                status: testStatus,
                data: testCache,
                rejected: false
            };
            const expectedCacheResponse = {
                source: core_clients_1.ClientResponseSource.cache,
                status: testStatus,
                data: testCache,
                rejected: false
            };
            const rut = new TestClientRequest({
                duration: 30000
            });
            const actualFirstResp = rut.createCachedResponse(testKey, testStatus, testCache, false, testSource);
            assert.deepEqual(actualFirstResp, expectedFirstResponse);
            // assert cache
            const actualCacheResp = rut.cache.get(testKey);
            assert.deepEqual(actualCacheResp, expectedCacheResponse);
        },
        "doesnt cache when duration is 0": () => {
            const testKey = 'https://test.url.example/path';
            const testStatus = 123;
            const testSource = core_clients_1.ClientResponseSource.local;
            const testCache = "cached test";
            const expectedResponse = {
                source: testSource,
                status: testStatus,
                data: testCache,
                rejected: false
            };
            const rut = new TestClientRequest({
                duration: 0
            });
            const actualFirstResp = rut.createCachedResponse(testKey, testStatus, testCache, false, testSource);
            assert.deepEqual(actualFirstResp, expectedResponse);
            // assert cache
            const actualCacheResp = rut.cache.get(testKey);
            assert.deepEqual(actualCacheResp, undefined);
        },
    },
};


/***/ }),

/***/ "./src/core.configuration/index.test.ts":
/*!**********************************************!*\
  !*** ./src/core.configuration/index.test.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./test/optionsWithFallback.tests */ "./src/core.configuration/test/optionsWithFallback.tests.ts"), exports);


/***/ }),

/***/ "./src/core.configuration/index.ts":
/*!*****************************************!*\
  !*** ./src/core.configuration/index.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./src/definitions/iConfig */ "./src/core.configuration/src/definitions/iConfig.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iOptions */ "./src/core.configuration/src/definitions/iOptions.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/options */ "./src/core.configuration/src/options.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/optionsWithFallback */ "./src/core.configuration/src/optionsWithFallback.ts"), exports);


/***/ }),

/***/ "./src/core.configuration/src/definitions/iConfig.ts":
/*!***********************************************************!*\
  !*** ./src/core.configuration/src/definitions/iConfig.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.configuration/src/definitions/iOptions.ts":
/*!************************************************************!*\
  !*** ./src/core.configuration/src/definitions/iOptions.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.configuration/src/options.ts":
/*!***********************************************!*\
  !*** ./src/core.configuration/src/options.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Options = void 0;
class Options {
    constructor(config, section) {
        this.config = config;
        this.section = (section.length > 0) ? section + '.' : '';
    }
    get(key) {
        return this.config.get(`${this.section}${key}`);
    }
    defrost() {
        this.config.defrost();
    }
}
exports.Options = Options;


/***/ }),

/***/ "./src/core.configuration/src/optionsWithFallback.ts":
/*!***********************************************************!*\
  !*** ./src/core.configuration/src/optionsWithFallback.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsWithFallback = void 0;
const core_configuration_1 = __webpack_require__(/*! core.configuration */ "./src/core.configuration/index.ts");
class OptionsWithFallback extends core_configuration_1.Options {
    constructor(config, section, fallbackSection = null) {
        super(config, section);
        this.fallbackSection = fallbackSection;
    }
    get(key) {
        // attempt to get the section value
        const sectionValue = this.config.get(`${this.section}${key}`);
        // return section value
        if (sectionValue !== null && sectionValue !== undefined)
            return sectionValue;
        // attempt to get fallback section value
        let fallbackSectionValue;
        if (this.fallbackSection !== null) {
            fallbackSectionValue = this.config.get(`${this.fallbackSection}.${key}`);
        }
        // return fallback key value
        return fallbackSectionValue;
    }
    getOrDefault(key, defaultValue) {
        // attempt to get the section value
        const value = this.get(key);
        // return key value
        if (value !== null && value !== undefined)
            return value;
        // return default value
        return defaultValue;
    }
}
exports.OptionsWithFallback = OptionsWithFallback;


/***/ }),

/***/ "./src/core.configuration/test/optionsWithFallback.tests.ts":
/*!******************************************************************!*\
  !*** ./src/core.configuration/test/optionsWithFallback.tests.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionsWithFallbackTests = void 0;
const core_configuration_1 = __webpack_require__(/*! core.configuration */ "./src/core.configuration/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
exports.OptionsWithFallbackTests = {
    "get": {
        "returns section.key value, fallback.key value": () => {
            const testMap = {
                'caching.duration': null,
                'dotnet.caching.duration': 1,
                'logging.level': 2,
                'dotnet.logging.level': null
            };
            const tests = [
                {
                    section: 'dotnet.caching',
                    fallback: 'caching',
                    key: 'duration',
                    expected: 1
                },
                {
                    section: 'dotnet.logging',
                    fallback: 'logging',
                    key: 'level',
                    expected: 2
                }
            ];
            tests.forEach(test => {
                const cot = new core_configuration_1.OptionsWithFallback({
                    get: k => testMap[k],
                    defrost: () => null
                }, test.section, test.fallback);
                const actual = cot.get(test.key);
                assert.equal(actual, test.expected);
            });
        },
    },
    "getOrDefault": {
        "returns section.key value, fallback.key value, default arg value": () => {
            const testMap = {
                'caching.duration': null,
                'dotnet.caching.duration': 1,
                'logging.level': 2,
                'dotnet.logging.level': null,
                'nuget.feeds': null,
                'dotnet.nuget.feeds': null
            };
            const tests = [
                {
                    section: 'dotnet.caching',
                    fallback: 'caching',
                    key: 'duration',
                    expected: 1
                },
                {
                    section: 'dotnet.logging',
                    fallback: 'logging',
                    key: 'level',
                    expected: 2
                },
                {
                    section: 'dotnet.nuget',
                    fallback: 'nuget',
                    key: 'feeds',
                    expected: 'default arg'
                }
            ];
            tests.forEach(test => {
                const cot = new core_configuration_1.OptionsWithFallback({
                    get: k => testMap[k],
                    defrost: () => null
                }, test.section, test.fallback);
                const actual = cot.getOrDefault(test.key, 'default arg');
                assert.equal(actual, test.expected);
            });
        },
    }
};


/***/ }),

/***/ "./src/core.logging/index.test.ts":
/*!****************************************!*\
  !*** ./src/core.logging/index.test.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./test/stubs/loggerStub */ "./src/core.logging/test/stubs/loggerStub.ts"), exports);


/***/ }),

/***/ "./src/core.logging/test/stubs/loggerStub.ts":
/*!***************************************************!*\
  !*** ./src/core.logging/test/stubs/loggerStub.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerStub = void 0;
class LoggerStub {
    log(level, message, splats) { }
    info(message, ...splats) { }
    debug(message, ...splats) { }
    error(message, ...splats) { }
    child(options) {
        return this;
    }
}
exports.LoggerStub = LoggerStub;


/***/ }),

/***/ "./src/core.packages/index.test.ts":
/*!*****************************************!*\
  !*** ./src/core.packages/index.test.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageParserTests = exports.VersionHelperTests = void 0;
// VersionHelperTests
const extractTaggedVersions_tests_1 = __webpack_require__(/*! ./test/helpers/versionHelpers/extractTaggedVersions.tests */ "./src/core.packages/test/helpers/versionHelpers/extractTaggedVersions.tests.ts");
const filterPrereleasesGtMinRange_tests_1 = __webpack_require__(/*! ./test/helpers/versionHelpers/filterPrereleasesGtMinRange.tests */ "./src/core.packages/test/helpers/versionHelpers/filterPrereleasesGtMinRange.tests.ts");
const splitReleasesFromArray_tests_1 = __webpack_require__(/*! ./test/helpers/versionHelpers/splitReleasesFromArray.tests */ "./src/core.packages/test/helpers/versionHelpers/splitReleasesFromArray.tests.ts");
const removeFourSegmentVersionsFromArray_tests_1 = __webpack_require__(/*! ./test/helpers/versionHelpers/removeFourSegmentVersionsFromArray.tests */ "./src/core.packages/test/helpers/versionHelpers/removeFourSegmentVersionsFromArray.tests.ts");
const friendlifyPrereleaseName_tests_1 = __webpack_require__(/*! ./test/helpers/versionHelpers/friendlifyPrereleaseName.tests */ "./src/core.packages/test/helpers/versionHelpers/friendlifyPrereleaseName.tests.ts");
const filterSemverVersions_tests_1 = __webpack_require__(/*! ./test/helpers/versionHelpers/filterSemverVersions.tests */ "./src/core.packages/test/helpers/versionHelpers/filterSemverVersions.tests.ts");
const isFixedVersion_tests_1 = __webpack_require__(/*! ./test/helpers/versionHelpers/isFixedVersion.tests */ "./src/core.packages/test/helpers/versionHelpers/isFixedVersion.tests.ts");
const lteFromArray_tests_1 = __webpack_require__(/*! ./test/helpers/versionHelpers/lteFromArray.tests */ "./src/core.packages/test/helpers/versionHelpers/lteFromArray.tests.ts");
exports.VersionHelperTests = {
    extractTaggedVersions: extractTaggedVersions_tests_1.default,
    rollupPrereleases: filterPrereleasesGtMinRange_tests_1.default,
    splitReleasesFromArray: splitReleasesFromArray_tests_1.default,
    removeFourSegmentVersionsFromArray: removeFourSegmentVersionsFromArray_tests_1.default,
    friendlifyPrereleaseName: friendlifyPrereleaseName_tests_1.default,
    filterSemverVersions: filterSemverVersions_tests_1.default,
    isFixedVersion: isFixedVersion_tests_1.default,
    lteFromArray: lteFromArray_tests_1.default,
};
// Package Parser Tests
const extractPackageDependenciesFromJson_tests_1 = __webpack_require__(/*! ./test/parsers/jsonPackageParser/extractPackageDependenciesFromJson.tests */ "./src/core.packages/test/parsers/jsonPackageParser/extractPackageDependenciesFromJson.tests.ts");
const extractPackageDependenciesFromYaml_tests_1 = __webpack_require__(/*! ./test/parsers/yamlPackageParser/extractPackageDependenciesFromYaml.tests */ "./src/core.packages/test/parsers/yamlPackageParser/extractPackageDependenciesFromYaml.tests.ts");
exports.PackageParserTests = {
    extractPackageDependenciesFromJson: extractPackageDependenciesFromJson_tests_1.default,
    extractPackageDependenciesFromYaml: extractPackageDependenciesFromYaml_tests_1.default,
};


/***/ }),

/***/ "./src/core.packages/index.ts":
/*!************************************!*\
  !*** ./src/core.packages/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionHelpers = exports.ResponseFactory = exports.RequestFactory = exports.DocumentFactory = void 0;
__exportStar(__webpack_require__(/*! ./src/definitions/ePackageResponseErrors */ "./src/core.packages/src/definitions/ePackageResponseErrors.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/ePackageSourceTypes */ "./src/core.packages/src/definitions/ePackageSourceTypes.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/ePackageVersionTypes */ "./src/core.packages/src/definitions/ePackageVersionTypes.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iPackageClient */ "./src/core.packages/src/definitions/iPackageClient.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iPackageDependency */ "./src/core.packages/src/definitions/iPackageDependency.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/tPackageDependencyRange */ "./src/core.packages/src/definitions/tPackageDependencyRange.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/tPackageDocument */ "./src/core.packages/src/definitions/tPackageDocument.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/tPackageIdentifier */ "./src/core.packages/src/definitions/tPackageIdentifier.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/tPackageNameVersion */ "./src/core.packages/src/definitions/tPackageNameVersion.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/tPackageRequest */ "./src/core.packages/src/definitions/tPackageRequest.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/tPackageResponseStatus */ "./src/core.packages/src/definitions/tPackageResponseStatus.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/tSemverSpec */ "./src/core.packages/src/definitions/tSemverSpec.ts"), exports);
exports.DocumentFactory = __webpack_require__(/*! ./src/factories/packageDocumentFactory */ "./src/core.packages/src/factories/packageDocumentFactory.ts");
exports.RequestFactory = __webpack_require__(/*! ./src/factories/packageRequestFactory */ "./src/core.packages/src/factories/packageRequestFactory.ts");
exports.ResponseFactory = __webpack_require__(/*! ./src/factories/packageResponseFactory */ "./src/core.packages/src/factories/packageResponseFactory.ts");
exports.VersionHelpers = __webpack_require__(/*! ./src/helpers/versionHelpers */ "./src/core.packages/src/helpers/versionHelpers.ts");
__exportStar(__webpack_require__(/*! ./src/models/packageResponse */ "./src/core.packages/src/models/packageResponse.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/parsers/jsonPackageParser */ "./src/core.packages/src/parsers/jsonPackageParser.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/parsers/yamlPackageParser */ "./src/core.packages/src/parsers/yamlPackageParser.ts"), exports);


/***/ }),

/***/ "./src/core.packages/src/definitions/ePackageResponseErrors.ts":
/*!*********************************************************************!*\
  !*** ./src/core.packages/src/definitions/ePackageResponseErrors.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageResponseErrors = void 0;
var PackageResponseErrors;
(function (PackageResponseErrors) {
    PackageResponseErrors[PackageResponseErrors["None"] = 0] = "None";
    PackageResponseErrors[PackageResponseErrors["NotFound"] = 1] = "NotFound";
    PackageResponseErrors[PackageResponseErrors["NotSupported"] = 2] = "NotSupported";
    PackageResponseErrors[PackageResponseErrors["GitNotFound"] = 3] = "GitNotFound";
    PackageResponseErrors[PackageResponseErrors["InvalidVersion"] = 4] = "InvalidVersion";
    PackageResponseErrors[PackageResponseErrors["Unexpected"] = 5] = "Unexpected";
})(PackageResponseErrors = exports.PackageResponseErrors || (exports.PackageResponseErrors = {}));
;


/***/ }),

/***/ "./src/core.packages/src/definitions/ePackageSourceTypes.ts":
/*!******************************************************************!*\
  !*** ./src/core.packages/src/definitions/ePackageSourceTypes.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageSourceTypes = void 0;
var PackageSourceTypes;
(function (PackageSourceTypes) {
    PackageSourceTypes["Directory"] = "directory";
    PackageSourceTypes["File"] = "file";
    PackageSourceTypes["Git"] = "git";
    PackageSourceTypes["Github"] = "github";
    PackageSourceTypes["Registry"] = "registry";
})(PackageSourceTypes = exports.PackageSourceTypes || (exports.PackageSourceTypes = {}));


/***/ }),

/***/ "./src/core.packages/src/definitions/ePackageVersionTypes.ts":
/*!*******************************************************************!*\
  !*** ./src/core.packages/src/definitions/ePackageVersionTypes.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageVersionTypes = void 0;
var PackageVersionTypes;
(function (PackageVersionTypes) {
    PackageVersionTypes["Version"] = "version";
    PackageVersionTypes["Range"] = "range";
    PackageVersionTypes["Tag"] = "tag";
    PackageVersionTypes["Alias"] = "alias";
    PackageVersionTypes["Committish"] = "committish";
})(PackageVersionTypes = exports.PackageVersionTypes || (exports.PackageVersionTypes = {}));


/***/ }),

/***/ "./src/core.packages/src/definitions/iPackageClient.ts":
/*!*************************************************************!*\
  !*** ./src/core.packages/src/definitions/iPackageClient.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.packages/src/definitions/iPackageDependency.ts":
/*!*****************************************************************!*\
  !*** ./src/core.packages/src/definitions/iPackageDependency.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
;


/***/ }),

/***/ "./src/core.packages/src/definitions/tPackageDependencyRange.ts":
/*!**********************************************************************!*\
  !*** ./src/core.packages/src/definitions/tPackageDependencyRange.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.packages/src/definitions/tPackageDocument.ts":
/*!***************************************************************!*\
  !*** ./src/core.packages/src/definitions/tPackageDocument.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.packages/src/definitions/tPackageIdentifier.ts":
/*!*****************************************************************!*\
  !*** ./src/core.packages/src/definitions/tPackageIdentifier.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.packages/src/definitions/tPackageNameVersion.ts":
/*!******************************************************************!*\
  !*** ./src/core.packages/src/definitions/tPackageNameVersion.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.packages/src/definitions/tPackageRequest.ts":
/*!**************************************************************!*\
  !*** ./src/core.packages/src/definitions/tPackageRequest.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.packages/src/definitions/tPackageResponseStatus.ts":
/*!*********************************************************************!*\
  !*** ./src/core.packages/src/definitions/tPackageResponseStatus.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.packages/src/definitions/tSemverSpec.ts":
/*!**********************************************************!*\
  !*** ./src/core.packages/src/definitions/tSemverSpec.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.packages/src/factories/packageDocumentFactory.ts":
/*!*******************************************************************!*\
  !*** ./src/core.packages/src/factories/packageDocumentFactory.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createFixed = exports.createNoMatch = exports.createInvalidVersion = exports.create = void 0;
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const ePackageSourceTypes_1 = __webpack_require__(/*! ../definitions/ePackageSourceTypes */ "./src/core.packages/src/definitions/ePackageSourceTypes.ts");
function create(source, request, response, suggestions) {
    const { providerName, package: requested } = request;
    return {
        providerName,
        source,
        type: null,
        requested,
        resolved: null,
        response,
        suggestions
    };
}
exports.create = create;
function createInvalidVersion(providerName, requested, response, type) {
    const source = ePackageSourceTypes_1.PackageSourceTypes.Registry;
    const suggestions = [
        core_suggestions_1.SuggestionFactory.createInvalid(''),
        core_suggestions_1.SuggestionFactory.createLatest(),
    ];
    return {
        providerName,
        source,
        type,
        requested,
        response,
        resolved: null,
        suggestions
    };
}
exports.createInvalidVersion = createInvalidVersion;
function createNoMatch(providerName, source, type, requested, response, latestVersion) {
    const suggestions = [
        core_suggestions_1.SuggestionFactory.createNoMatch(),
        core_suggestions_1.SuggestionFactory.createLatest(latestVersion),
    ];
    return {
        providerName,
        source,
        type,
        requested,
        response,
        resolved: null,
        suggestions
    };
}
exports.createNoMatch = createNoMatch;
function createFixed(providerName, source, requested, response, type, fixedVersion) {
    const suggestions = [
        core_suggestions_1.SuggestionFactory.createFixedStatus(fixedVersion)
    ];
    return {
        providerName,
        source,
        type,
        requested,
        response,
        resolved: null,
        suggestions
    };
}
exports.createFixed = createFixed;


/***/ }),

/***/ "./src/core.packages/src/factories/packageRequestFactory.ts":
/*!******************************************************************!*\
  !*** ./src/core.packages/src/factories/packageRequestFactory.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.executePackageRequest = exports.executeDependencyRequests = void 0;
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
async function executeDependencyRequests(packagePath, client, clientData, dependencies) {
    const { providerName } = client.config;
    const results = [];
    const promises = dependencies.map(function (dependency) {
        // build the client request
        const { name, version } = dependency.packageInfo;
        const clientRequest = {
            providerName,
            clientData,
            dependency,
            package: {
                name,
                version,
                path: packagePath,
            },
            attempt: 0
        };
        // execute request
        const promisedDependency = core_packages_1.RequestFactory.executePackageRequest(client, clientRequest);
        // flatten responses
        return promisedDependency.then(function (responses) {
            if (Array.isArray(responses))
                results.push(...responses);
            else
                results.push(responses);
        });
    });
    return Promise.all(promises).then(_ => results);
}
exports.executeDependencyRequests = executeDependencyRequests;
async function executePackageRequest(client, request) {
    client.logger.debug(`Queued package: %s`, request.package.name);
    return client.fetchPackage(request)
        .then(function (response) {
        client.logger.info('Fetched %s package from %s: %s@%s', response.providerName, response.response.source, request.package.name, request.package.version);
        return core_packages_1.ResponseFactory.createSuccess(request, response);
    })
        .catch(function (error) {
        client.logger.error(`%s caught an exception.\n Package: %j\n Error: %j`, executePackageRequest.name, request.package, error);
        return Promise.reject(error);
    });
}
exports.executePackageRequest = executePackageRequest;


/***/ }),

/***/ "./src/core.packages/src/factories/packageResponseFactory.ts":
/*!*******************************************************************!*\
  !*** ./src/core.packages/src/factories/packageResponseFactory.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createSuccess = exports.createResponseStatus = void 0;
function createResponseStatus(source, status) {
    return {
        source,
        status
    };
}
exports.createResponseStatus = createResponseStatus;
function createSuccess(request, response) {
    // map the documents to responses
    return response.suggestions.map(function (suggestion, order) {
        return {
            providerName: response.providerName,
            source: response.source,
            type: response.type,
            nameRange: request.dependency.nameRange,
            versionRange: request.dependency.versionRange,
            order,
            requested: response.requested,
            resolved: response.resolved,
            suggestion,
        };
    });
}
exports.createSuccess = createSuccess;


/***/ }),

/***/ "./src/core.packages/src/helpers/versionHelpers.ts":
/*!*********************************************************!*\
  !*** ./src/core.packages/src/helpers/versionHelpers.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.formatWithExistingLeading = exports.semverLeadingChars = exports.extractSymbolFromVersionRegex = exports.filterSemverVersions = exports.filterPrereleasesGtMinRange = exports.parseSemver = exports.friendlifyPrereleaseName = exports.isFourSegmentedVersion = exports.isFixedVersion = exports.removeFourSegmentVersionsFromArray = exports.lteFromArray = exports.splitReleasesFromArray = exports.extractTaggedVersions = exports.extractVersionsFromMap = exports.filterPrereleasesFromDistTags = exports.loosePrereleases = exports.formatTagNameRegex = void 0;
const ePackageVersionTypes_1 = __webpack_require__(/*! ../definitions/ePackageVersionTypes */ "./src/core.packages/src/definitions/ePackageVersionTypes.ts");
exports.formatTagNameRegex = /^[^0-9\-]*/;
exports.loosePrereleases = { loose: true, includePrerelease: true };
function filterPrereleasesFromDistTags(distTags) {
    const { prerelease } = __webpack_require__(/*! semver */ "semver");
    const prereleases = [];
    Object.keys(distTags)
        .forEach((key) => {
        if (prerelease(distTags[key]))
            prereleases.push(distTags[key]);
    });
    return prereleases;
}
exports.filterPrereleasesFromDistTags = filterPrereleasesFromDistTags;
function extractVersionsFromMap(versions) {
    return versions.map(function (pnv) {
        return pnv.version;
    });
}
exports.extractVersionsFromMap = extractVersionsFromMap;
function extractTaggedVersions(versions) {
    const { prerelease } = __webpack_require__(/*! semver */ "semver");
    const results = [];
    versions.forEach(function (version) {
        const prereleaseComponents = prerelease(version);
        const isPrerelease = !!prereleaseComponents && prereleaseComponents.length > 0;
        if (isPrerelease) {
            const regexResult = exports.formatTagNameRegex.exec(prereleaseComponents[0]);
            let name = regexResult[0].toLowerCase();
            // capture cases like x.x.x-x.x.x
            if (!name)
                name = prereleaseComponents.join('.');
            results.push({
                name,
                version
            });
        }
    });
    return results;
}
exports.extractTaggedVersions = extractTaggedVersions;
function splitReleasesFromArray(versions) {
    const { prerelease } = __webpack_require__(/*! semver */ "semver");
    const releases = [];
    const prereleases = [];
    versions.forEach(function (version) {
        if (prerelease(version))
            prereleases.push(version);
        else
            releases.push(version);
    });
    return { releases, prereleases };
}
exports.splitReleasesFromArray = splitReleasesFromArray;
function lteFromArray(versions, version) {
    const { lte } = __webpack_require__(/*! semver */ "semver");
    return versions.filter(function (testVersion) {
        return lte(testVersion, version);
    });
}
exports.lteFromArray = lteFromArray;
function removeFourSegmentVersionsFromArray(versions) {
    return versions.filter(function (version) {
        return isFourSegmentedVersion(version) === false;
    });
}
exports.removeFourSegmentVersionsFromArray = removeFourSegmentVersionsFromArray;
function isFixedVersion(versionToCheck) {
    const { Range, valid } = __webpack_require__(/*! semver */ "semver");
    const testRange = new Range(versionToCheck, exports.loosePrereleases);
    return valid(versionToCheck) !== null && testRange.set[0][0].operator === "";
}
exports.isFixedVersion = isFixedVersion;
const isfourSegmentVersionRegex = /^(\d+\.)(\d+\.)(\d+\.)(\*|\d+)$/g;
function isFourSegmentedVersion(versionToCheck) {
    return isfourSegmentVersionRegex.test(versionToCheck);
}
exports.isFourSegmentedVersion = isFourSegmentedVersion;
const commonReleaseIdentities = [
    ['legacy'],
    ['alpha', 'preview', 'a'],
    ['beta', 'b'],
    ['next'],
    ['milestone', 'm'],
    ['rc', 'cr'],
    ['snapshot'],
    ['release', 'final', 'ga'],
    ['sp']
];
function friendlifyPrereleaseName(prereleaseName) {
    const filteredNames = [];
    commonReleaseIdentities.forEach(function (group) {
        return group.forEach(commonName => {
            const exp = new RegExp(`(.+-)${commonName}`, 'i');
            if (exp.test(prereleaseName.toLowerCase())) {
                filteredNames.push(commonName);
            }
        });
    });
    return (filteredNames.length === 0) ?
        null :
        filteredNames[0];
}
exports.friendlifyPrereleaseName = friendlifyPrereleaseName;
function parseSemver(packageVersion) {
    const { valid, validRange } = __webpack_require__(/*! semver */ "semver");
    const isVersion = valid(packageVersion, exports.loosePrereleases);
    const isRange = validRange(packageVersion, exports.loosePrereleases);
    return {
        rawVersion: packageVersion,
        type: !!isVersion ?
            ePackageVersionTypes_1.PackageVersionTypes.Version :
            !!isRange ? ePackageVersionTypes_1.PackageVersionTypes.Range :
                null,
    };
}
exports.parseSemver = parseSemver;
function filterPrereleasesGtMinRange(versionRange, prereleases) {
    const { SemVer, gt, maxSatisfying, minVersion, validRange, } = __webpack_require__(/*! semver */ "semver");
    const prereleaseGroupMap = {};
    // for each prerelease version;
    // group prereleases by x.x.x-{name}*.x
    prereleases.forEach(function (prereleaseVersion) {
        const spec = new SemVer(prereleaseVersion, exports.loosePrereleases);
        const prereleaseKey = friendlifyPrereleaseName(prereleaseVersion) ||
            spec.prerelease[0];
        prereleaseGroupMap[prereleaseKey] = prereleaseGroupMap[prereleaseKey] || [];
        prereleaseGroupMap[prereleaseKey].push(prereleaseVersion);
    });
    // check we have a valid range (handles non-semver errors)
    const isValidRange = validRange(versionRange, exports.loosePrereleases) !== null;
    const minVersionFromRange = isValidRange ?
        minVersion(versionRange, exports.loosePrereleases) :
        versionRange;
    const gtfn = isValidRange ? gt : maxSatisfying;
    // for each group;
    // extract versions that are greater than the min-range (one from each group)
    const filterPrereleases = [];
    Object.keys(prereleaseGroupMap)
        .forEach(function (prereleaseKey) {
        const versions = prereleaseGroupMap[prereleaseKey];
        const testMaxVersion = versions[versions.length - 1];
        const isPrereleaseGt = gtfn(testMaxVersion, minVersionFromRange, exports.loosePrereleases);
        if (isPrereleaseGt)
            filterPrereleases.push(testMaxVersion);
    });
    return filterPrereleases;
}
exports.filterPrereleasesGtMinRange = filterPrereleasesGtMinRange;
function filterSemverVersions(versions) {
    const { validRange } = __webpack_require__(/*! semver */ "semver");
    const semverVersions = [];
    versions.forEach(version => {
        if (validRange(version, exports.loosePrereleases))
            semverVersions.push(version);
    });
    return semverVersions;
}
exports.filterSemverVersions = filterSemverVersions;
exports.extractSymbolFromVersionRegex = /^([^0-9]*)?.*$/;
exports.semverLeadingChars = ['^', '~', '<', '<=', '>', '>=', '~>'];
function formatWithExistingLeading(existingVersion, newVersion) {
    const regExResult = exports.extractSymbolFromVersionRegex.exec(existingVersion);
    const leading = regExResult && regExResult[1];
    if (!leading || !exports.semverLeadingChars.includes(leading))
        return newVersion;
    return `${leading}${newVersion}`;
}
exports.formatWithExistingLeading = formatWithExistingLeading;


/***/ }),

/***/ "./src/core.packages/src/models/packageResponse.ts":
/*!*********************************************************!*\
  !*** ./src/core.packages/src/models/packageResponse.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageResponse = void 0;
class PackageResponse {
}
exports.PackageResponse = PackageResponse;


/***/ }),

/***/ "./src/core.packages/src/parsers/jsonPackageParser.ts":
/*!************************************************************!*\
  !*** ./src/core.packages/src/parsers/jsonPackageParser.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.extractFromNodes = exports.extractPackageDependenciesFromJson = void 0;
function extractPackageDependenciesFromJson(json, filterPropertyNames) {
    const jsonErrors = [];
    const jsonParser = __webpack_require__(/*! jsonc-parser */ "jsonc-parser");
    const jsonTree = jsonParser.parseTree(json, jsonErrors);
    if (!jsonTree || jsonTree.children.length === 0 || jsonErrors.length > 0)
        return [];
    return extractFromNodes(jsonTree.children, filterPropertyNames);
}
exports.extractPackageDependenciesFromJson = extractPackageDependenciesFromJson;
function extractFromNodes(topLevelNodes, includePropertyNames) {
    const collector = [];
    topLevelNodes.forEach(function (node) {
        const [keyEntry, valueEntry] = node.children;
        if (includePropertyNames.includes(keyEntry.value) === false)
            return;
        collectDependencyNodes(valueEntry.children, null, '', collector);
    });
    return collector;
}
exports.extractFromNodes = extractFromNodes;
function collectDependencyNodes(nodes, parentKey, filterName, collector = []) {
    nodes.forEach(function (node) {
        const [keyEntry, valueEntry] = node.children;
        if (valueEntry.type == "string" &&
            (filterName.length === 0 || keyEntry.value === filterName)) {
            const dependencyLens = createFromProperty(parentKey || keyEntry, valueEntry);
            collector.push(dependencyLens);
        }
        else if (valueEntry.type == "object") {
            collectDependencyNodes(valueEntry.children, keyEntry, 'version', collector);
        }
    });
}
function createFromProperty(keyEntry, valueEntry) {
    const nameRange = {
        start: keyEntry.offset,
        end: keyEntry.offset,
    };
    // +1 and -1 to be inside quotes
    const versionRange = {
        start: valueEntry.offset + 1,
        end: valueEntry.offset + valueEntry.length - 1,
    };
    const packageInfo = {
        name: keyEntry.value,
        version: valueEntry.value
    };
    return {
        nameRange,
        versionRange,
        packageInfo
    };
}


/***/ }),

/***/ "./src/core.packages/src/parsers/yamlPackageParser.ts":
/*!************************************************************!*\
  !*** ./src/core.packages/src/parsers/yamlPackageParser.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDependencyLensFromPlainType = exports.createDependencyLensFromMapType = exports.extractDependenciesFromNodes = exports.extractPackageDependenciesFromYaml = void 0;
function extractPackageDependenciesFromYaml(yaml, filterPropertyNames) {
    const { Document, parseCST } = __webpack_require__(/*! yaml */ "yaml");
    // verbose parsing to handle CRLF scenarios
    const cst = parseCST(yaml);
    // create and parse the document
    const yamlDoc = new Document({ keepCstNodes: true }).parse(cst[0]);
    if (!yamlDoc || !yamlDoc.contents || yamlDoc.errors.length > 0)
        return [];
    const opts = {
        hasCrLf: yaml.indexOf('\r\n') > 0,
        filterPropertyNames,
        yaml,
    };
    return extractDependenciesFromNodes(yamlDoc.contents.items, opts);
}
exports.extractPackageDependenciesFromYaml = extractPackageDependenciesFromYaml;
function extractDependenciesFromNodes(topLevelNodes, opts) {
    const collector = [];
    topLevelNodes.forEach(function (pair) {
        if (opts.filterPropertyNames.includes(pair.key.value) === false)
            return;
        if (pair.value === null)
            return;
        collectDependencyNodes(pair.value.items, opts, collector);
    });
    return collector;
}
exports.extractDependenciesFromNodes = extractDependenciesFromNodes;
function collectDependencyNodes(nodes, opts, collector) {
    nodes.forEach(function (pair) {
        // node may be in the form "no_version_dep:", which we will indicate as the latest
        if (!pair.value || (pair.value.type === 'PLAIN' && !pair.value.value)) {
            const keyRange = getRangeFromCstNode(pair.key.cstNode, opts);
            pair.value = {
                range: [
                    keyRange.end + 2,
                    keyRange.end + 2,
                ],
                value: '',
                type: null
            };
        }
        if (pair.value.type === 'MAP') {
            createDependencyLensFromMapType(pair.value.items, pair.key, opts, collector);
        }
        else if (typeof pair.value.value === 'string') {
            const dependencyLens = createDependencyLensFromPlainType(pair, opts);
            collector.push(dependencyLens);
        }
    });
}
function createDependencyLensFromMapType(nodes, parentKey, opts, collector) {
    nodes.forEach(function (pair) {
        // ignore empty entries
        if (!pair.value)
            return;
        if (pair.key.value === "version") {
            const keyRange = getRangeFromCstNode(parentKey.cstNode, opts);
            const nameRange = createRange(keyRange.start, keyRange.start, null);
            const valueRange = getRangeFromCstNode(pair.value.cstNode, opts);
            const versionRange = createRange(valueRange.start, valueRange.end, pair.value.type);
            const packageInfo = {
                name: parentKey.value,
                version: pair.value.value
            };
            collector.push({
                nameRange,
                versionRange,
                packageInfo
            });
        }
    });
}
exports.createDependencyLensFromMapType = createDependencyLensFromMapType;
function createDependencyLensFromPlainType(pair, opts) {
    const keyRange = getRangeFromCstNode(pair.key.cstNode, opts);
    const nameRange = createRange(keyRange.start, keyRange.start, null);
    let valueRange;
    if (pair.value.cstNode) {
        valueRange = getRangeFromCstNode(pair.value.cstNode, opts);
    }
    else {
        // handle blank values
        const start = pair.value.range[0];
        valueRange = { start, end: start };
    }
    const versionRange = createRange(valueRange.start, valueRange.end, pair.value.type);
    const packageInfo = {
        name: pair.key.value,
        version: pair.value.value
    };
    return {
        nameRange,
        versionRange,
        packageInfo
    };
}
exports.createDependencyLensFromPlainType = createDependencyLensFromPlainType;
function createRange(start, end, valueType) {
    // +1 and -1 to be inside quotes
    const quoted = valueType === "QUOTE_SINGLE" || valueType === "QUOTE_DOUBLE";
    return {
        start: start + (quoted ? 1 : 0),
        end: end - (quoted ? 1 : 0),
    };
}
function getRangeFromCstNode(cstNode, opts) {
    const crLfLineOffset = opts.hasCrLf ?
        cstNode.rangeAsLinePos.start.line : 0;
    const start = cstNode.range.start + crLfLineOffset;
    const end = cstNode.range.end + crLfLineOffset;
    return { start, end };
}


/***/ }),

/***/ "./src/core.packages/test/helpers/versionHelpers/extractTaggedVersions.tests.ts":
/*!**************************************************************************************!*\
  !*** ./src/core.packages/test/helpers/versionHelpers/extractTaggedVersions.tests.ts ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
const testVersions = [
    "2.0.0-preview.1",
    "2.0.0",
    "2.1.0-preview.2",
    "2.1.0",
    "2.2.0-preview.3",
    "2.2.0-preview.4",
    "2.2.0-preview.5",
    "2.2.0",
    "2.2.1",
];
exports.default = {
    "returns empty when no matches found": () => {
        const results = core_packages_1.VersionHelpers.extractTaggedVersions([]);
        assert.equal(results.length, 0);
    },
    "extracts prerelease tags": () => {
        const expected = [
            '2.0.0-preview.1',
            '2.1.0-preview.2',
            '2.2.0-preview.3',
            '2.2.0-preview.4',
            '2.2.0-preview.5',
        ];
        const results = core_packages_1.VersionHelpers.extractTaggedVersions(testVersions);
        assert.equal(results.length, expected.length);
        expected.forEach((expectedValue, index) => {
            assert.equal(results[index].name, expectedValue.substr(6, 7));
            assert.equal(results[index].version, expectedValue);
        });
    }
};


/***/ }),

/***/ "./src/core.packages/test/helpers/versionHelpers/filterPrereleasesGtMinRange.tests.ts":
/*!********************************************************************************************!*\
  !*** ./src/core.packages/test/helpers/versionHelpers/filterPrereleasesGtMinRange.tests.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
const testPrereleases = [
    '2.0.0-preview1.12141.1',
    '2.0.0-preview2.45112.2',
    '2.0.0-preview3.13311.9',
    '2.0.0-preview4.17421.6',
    '2.1.0-preview1-final',
    '2.1.0-legacy.1',
    '2.1.0-legacy.2',
    '2.1.0-legacy.3',
    '2.5.0-tag.1',
    '2.5.0-tag.2',
    '2.5.0-tag.3',
    '2.1.0-beta1',
    '2.1.0-beta2',
    '2.1.0-beta3',
];
exports.default = {
    "returns empty when no matches found": () => {
        const results = core_packages_1.VersionHelpers.filterPrereleasesGtMinRange('*', []);
        assert.equal(Object.keys(results).length, 0);
    },
    "handles non semver versions without error": () => {
        const tests = [
            '2.1.0.RELEASE',
            '2.1.0.3',
        ];
        tests.forEach(testVersion => {
            const results = core_packages_1.VersionHelpers.filterPrereleasesGtMinRange(testVersion, testPrereleases);
            assert.deepEqual(results.length, 0, testVersion);
        });
    },
    "groups prereleases by name": () => {
        const expected = [
            '2.1.0-preview1-final',
            '2.1.0-legacy.3',
            '2.5.0-tag.3',
            '2.1.0-beta3',
        ];
        const results = core_packages_1.VersionHelpers.filterPrereleasesGtMinRange('2.*', testPrereleases);
        assert.equal(results.length, expected.length);
        expected.forEach((expectedValue, index) => {
            assert.equal(results[index], expectedValue);
        });
    },
    "returns empty when prereleases are <= specified versions": () => {
        const tests = [
            // greater
            '3.*',
            '~2.6.1',
            '2.5.9',
            // equals
            '2.5.0-tag.3',
        ];
        tests.forEach(testVersion => {
            const results = core_packages_1.VersionHelpers.filterPrereleasesGtMinRange(testVersion, testPrereleases);
            assert.deepEqual(results.length, 0, testVersion);
        });
    },
    "returns prereleases > specified versions": () => {
        const expected = [
            '2.1.0-preview1-final',
            '2.1.0-legacy.3',
            '2.5.0-tag.3',
            '2.1.0-beta3',
        ];
        const tests = [
            // less than
            '2.*',
            '~2.0.1',
            '2.0.9'
        ];
        tests.forEach(testVersion => {
            const results = core_packages_1.VersionHelpers.filterPrereleasesGtMinRange(testVersion, testPrereleases);
            assert.deepEqual(results, expected);
        });
    },
};


/***/ }),

/***/ "./src/core.packages/test/helpers/versionHelpers/filterSemverVersions.tests.ts":
/*!*************************************************************************************!*\
  !*** ./src/core.packages/test/helpers/versionHelpers/filterSemverVersions.tests.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
const testVersions = [
    '1.0.0.5',
    '2.0.0.33333',
    '2.0.0-beta.1',
    '9.5.12',
    '11.1.9',
    '12.0.0-next.1',
    '~master',
];
exports.default = {
    "returns empty when versions is empty": () => {
        const results = core_packages_1.VersionHelpers.filterSemverVersions([]);
        assert.equal(results.length, 0);
    },
    "returns empty when no matches found": () => {
        const results = core_packages_1.VersionHelpers.filterSemverVersions(['1.2.3.4', '5.6.7.8']);
        assert.equal(results.length, 0);
    },
    "returns semver versions only": () => {
        const expected = [
            '2.0.0-beta.1',
            '9.5.12',
            '11.1.9',
            '12.0.0-next.1',
        ];
        const results = core_packages_1.VersionHelpers.filterSemverVersions(testVersions);
        assert.equal(results.length, expected.length);
        expected.forEach((expectedValue, index) => {
            assert.equal(results[index], expectedValue);
        });
    },
};


/***/ }),

/***/ "./src/core.packages/test/helpers/versionHelpers/friendlifyPrereleaseName.tests.ts":
/*!*****************************************************************************************!*\
  !*** ./src/core.packages/test/helpers/versionHelpers/friendlifyPrereleaseName.tests.ts ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
const testPrereleases = [
    '4.1.0-beta.1',
    '2.1.0-legacy.1',
    '2.5.0-release.1',
];
exports.default = {
    "returns null name when no matches found": () => {
        const result = core_packages_1.VersionHelpers.friendlifyPrereleaseName('2.5.0-tag.1');
        assert.equal(result, null);
    },
    "returns common prerelease name when match found": () => {
        const expected = [
            'beta',
            'legacy',
            'release',
        ];
        expected.forEach((expectedValue, index) => {
            const actual = core_packages_1.VersionHelpers.friendlifyPrereleaseName(testPrereleases[index]);
            assert.equal(actual, expectedValue);
        });
    },
};


/***/ }),

/***/ "./src/core.packages/test/helpers/versionHelpers/isFixedVersion.tests.ts":
/*!*******************************************************************************!*\
  !*** ./src/core.packages/test/helpers/versionHelpers/isFixedVersion.tests.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
exports.default = {
    "returns false when not fixed": () => {
        const testVersions = [
            '~1.2.3',
            '^4.5.6-beta',
            '1.2.*',
            '>=1.2',
            '*',
        ];
        testVersions.forEach(testVersion => {
            const actual = core_packages_1.VersionHelpers.isFixedVersion(testVersion);
            assert.equal(actual, false);
        });
    },
    "returns true for fixed versions": () => {
        const testVersions = [
            '1.2.3',
            '4.5.6-beta',
        ];
        testVersions.forEach(testVersion => {
            const actual = core_packages_1.VersionHelpers.isFixedVersion(testVersion);
            assert.equal(actual, true);
        });
    },
};


/***/ }),

/***/ "./src/core.packages/test/helpers/versionHelpers/lteFromArray.tests.ts":
/*!*****************************************************************************!*\
  !*** ./src/core.packages/test/helpers/versionHelpers/lteFromArray.tests.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
exports.default = {
    "returns empty when versions is empty": () => {
        const results = core_packages_1.VersionHelpers.lteFromArray([], '1.2.3');
        assert.equal(results.length, 0);
    },
    "returns lte versions for version inputs": () => {
        const testVersion = '0.8.19';
        const testReleases = [
            '0.0.1',
            '0.4.23',
            '0.6.23',
            '0.8.19',
            '1.0.0',
            '4.0.0',
        ];
        const expected = [
            '0.0.1',
            '0.4.23',
            '0.6.23',
            '0.8.19',
        ];
        const results = core_packages_1.VersionHelpers.lteFromArray(testReleases, testVersion);
        assert.deepEqual(results, expected);
    },
};


/***/ }),

/***/ "./src/core.packages/test/helpers/versionHelpers/removeFourSegmentVersionsFromArray.tests.ts":
/*!***************************************************************************************************!*\
  !*** ./src/core.packages/test/helpers/versionHelpers/removeFourSegmentVersionsFromArray.tests.ts ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
const testVersions = [
    '1.0.0',
    '2.0.0',
    '2.0.0-beta.1',
    '2.0.0.1',
    '9.5.12',
    '11.1.9',
    '11.1.9.1',
    '12.0.0-next.1',
];
exports.default = {
    "returns versions when no matches found": () => {
        const expected = [
            '1.0.0',
            '2.0.0',
        ];
        const results = core_packages_1.VersionHelpers.removeFourSegmentVersionsFromArray(expected);
        assert.equal(results.length, expected.length);
        expected.forEach((expectedVersion, index) => {
            assert.equal(results[index], expectedVersion);
        });
    },
    "returns versions without four segment versions": () => {
        const expected = [
            '1.0.0',
            '2.0.0',
            '2.0.0-beta.1',
            '9.5.12',
            '11.1.9',
            '12.0.0-next.1',
        ];
        const results = core_packages_1.VersionHelpers.removeFourSegmentVersionsFromArray(testVersions);
        assert.equal(results.length, expected.length);
        expected.forEach((expectedVersion, index) => {
            assert.equal(results[index], expectedVersion);
        });
    }
};


/***/ }),

/***/ "./src/core.packages/test/helpers/versionHelpers/splitReleasesFromArray.tests.ts":
/*!***************************************************************************************!*\
  !*** ./src/core.packages/test/helpers/versionHelpers/splitReleasesFromArray.tests.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
const testVersions = [
    '1.0.0',
    '2.0.0',
    '2.0.0-beta.1',
    '9.5.12',
    '11.1.9',
    '12.0.0-next.1',
];
exports.default = {
    "returns empty when no matches found": () => {
        const { releases, prereleases } = core_packages_1.VersionHelpers.splitReleasesFromArray([]);
        assert.equal(releases.length, 0);
        assert.equal(prereleases.length, 0);
    },
    "returns mapped PackageNameVersion array": () => {
        const expectedReleases = [
            '1.0.0',
            '2.0.0',
            '9.5.12',
            '11.1.9',
        ];
        const expectedPrereleases = [
            '2.0.0-beta.1',
            '12.0.0-next.1',
        ];
        const { releases, prereleases } = core_packages_1.VersionHelpers.splitReleasesFromArray(testVersions);
        assert.equal(releases.length, expectedReleases.length);
        expectedReleases.forEach((expectedVersion, index) => {
            assert.equal(releases[index], expectedVersion);
        });
        expectedPrereleases.forEach((expectedVersion, index) => {
            assert.equal(prereleases[index], expectedVersion);
        });
    }
};


/***/ }),

/***/ "./src/core.packages/test/parsers/jsonPackageParser/extractPackageDependenciesFromJson.fixtures.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/core.packages/test/parsers/jsonPackageParser/extractPackageDependenciesFromJson.fixtures.ts ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "extractDependencyEntries": {
        "test": {
            "dependencies": {
                "Package1": "1.0.0",
                "Package2": "github:repo/project#semver:1.2.3",
                "Package3": "*",
                "ComplexPackage1": {
                    "version": "1.2.3"
                }
            },
            "scripts": {
                "script1": "run me",
            }
        },
        "expected": [
            {
                "nameRange": {
                    "start": 17,
                    "end": 17
                },
                "versionRange": {
                    "start": 29,
                    "end": 34
                },
                "packageInfo": {
                    "name": "Package1",
                    "version": "1.0.0"
                }
            },
            {
                "nameRange": {
                    "start": 36,
                    "end": 36
                },
                "versionRange": {
                    "start": 48,
                    "end": 80
                },
                "packageInfo": {
                    "name": "Package2",
                    "version": "github:repo/project#semver:1.2.3"
                }
            },
            {
                "nameRange": {
                    "start": 82,
                    "end": 82
                },
                "versionRange": {
                    "start": 94,
                    "end": 95
                },
                "packageInfo": {
                    "name": "Package3",
                    "version": "*"
                }
            },
            {
                "nameRange": {
                    "start": 97,
                    "end": 97
                },
                "versionRange": {
                    "start": 127,
                    "end": 132
                },
                "packageInfo": {
                    "name": "ComplexPackage1",
                    "version": "1.2.3"
                }
            }
        ]
    }
};


/***/ }),

/***/ "./src/core.packages/test/parsers/jsonPackageParser/extractPackageDependenciesFromJson.tests.ts":
/*!******************************************************************************************************!*\
  !*** ./src/core.packages/test/parsers/jsonPackageParser/extractPackageDependenciesFromJson.tests.ts ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const extractPackageDependenciesFromJson_fixtures_1 = __webpack_require__(/*! ./extractPackageDependenciesFromJson.fixtures */ "./src/core.packages/test/parsers/jsonPackageParser/extractPackageDependenciesFromJson.fixtures.ts");
const assert = __webpack_require__(/*! assert */ "assert");
exports.default = {
    "returns empty when no matches found": () => {
        const includeNames = [];
        const results = core_packages_1.extractPackageDependenciesFromJson('', includeNames);
        assert.equal(results.length, 0);
    },
    "returns empty when no dependency entry names match": () => {
        const includeNames = ["non-dependencies"];
        const results = core_packages_1.extractPackageDependenciesFromJson(JSON.stringify(extractPackageDependenciesFromJson_fixtures_1.default.extractDependencyEntries.test), includeNames);
        assert.equal(results.length, 0);
    },
    "extracts dependency entries from json": () => {
        const includeNames = ["dependencies"];
        const results = core_packages_1.extractPackageDependenciesFromJson(JSON.stringify(extractPackageDependenciesFromJson_fixtures_1.default.extractDependencyEntries.test), includeNames);
        assert.deepEqual(results, extractPackageDependenciesFromJson_fixtures_1.default.extractDependencyEntries.expected);
    }
};


/***/ }),

/***/ "./src/core.packages/test/parsers/yamlPackageParser/extractPackageDependenciesFromYaml.fixtures.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/core.packages/test/parsers/yamlPackageParser/extractPackageDependenciesFromYaml.fixtures.ts ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "extractDependencyEntries": {
        "test": `
name: newtify
version: 1.2.3
description: >-
  Have you been turned into a newt?  Would you like to be?
  This package can help. It has all of the
  newt-transmogrification functionality you have been looking
  for.
homepage: https://example-pet-store.com/newtify
documentation: https://example-pet-store.com/newtify/docs
environment:
  sdk: '>=2.0.0 <3.0.0'
dependencies:
  efts: ^2.0.4
  http: # black with comments
  transmogrify:
    version: ^0.4.0 # complex version with comments
`,
        "expected": [
            {
                "nameRange": {
                    "start": 376,
                    "end": 376
                },
                "versionRange": {
                    "start": 382,
                    "end": 388
                },
                "packageInfo": {
                    "name": "efts",
                    "version": "^2.0.4"
                }
            },
            {
                "nameRange": {
                    "start": 391,
                    "end": 391
                },
                "versionRange": {
                    "start": 397,
                    "end": 397
                },
                "packageInfo": {
                    "name": "http",
                    "version": ""
                }
            },
            {
                "nameRange": {
                    "start": 421,
                    "end": 421
                },
                "versionRange": {
                    "start": 448,
                    "end": 486
                },
                "packageInfo": {
                    "name": "transmogrify",
                    "version": "^0.4.0"
                }
            }
        ]
    }
};


/***/ }),

/***/ "./src/core.packages/test/parsers/yamlPackageParser/extractPackageDependenciesFromYaml.tests.ts":
/*!******************************************************************************************************!*\
  !*** ./src/core.packages/test/parsers/yamlPackageParser/extractPackageDependenciesFromYaml.tests.ts ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const extractPackageDependenciesFromYaml_fixtures_1 = __webpack_require__(/*! ./extractPackageDependenciesFromYaml.fixtures */ "./src/core.packages/test/parsers/yamlPackageParser/extractPackageDependenciesFromYaml.fixtures.ts");
const assert = __webpack_require__(/*! assert */ "assert");
exports.default = {
    "returns empty when no matches found": () => {
        const includeNames = [];
        const results = core_packages_1.extractPackageDependenciesFromYaml('', includeNames);
        assert.equal(results.length, 0);
    },
    "returns empty when no dependency entry names match": () => {
        const includeNames = ["non-dependencies"];
        const results = core_packages_1.extractPackageDependenciesFromYaml(extractPackageDependenciesFromYaml_fixtures_1.default.extractDependencyEntries.test, includeNames);
        assert.equal(results.length, 0);
    },
    "extracts dependency entries from yaml": () => {
        const includeNames = ["dependencies"];
        const results = core_packages_1.extractPackageDependenciesFromYaml(extractPackageDependenciesFromYaml_fixtures_1.default.extractDependencyEntries.test, includeNames);
        assert.deepEqual(results, extractPackageDependenciesFromYaml_fixtures_1.default.extractDependencyEntries.expected);
    }
};


/***/ }),

/***/ "./src/core.providers/index.ts":
/*!*************************************!*\
  !*** ./src/core.providers/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./src/definitions/iProviderConfig */ "./src/core.providers/src/definitions/iProviderConfig.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/eProviderSupport */ "./src/core.providers/src/definitions/eProviderSupport.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/tProviderFileMatcher */ "./src/core.providers/src/definitions/tProviderFileMatcher.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iProviderModule */ "./src/core.providers/src/definitions/iProviderModule.ts"), exports);


/***/ }),

/***/ "./src/core.providers/src/definitions/eProviderSupport.ts":
/*!****************************************************************!*\
  !*** ./src/core.providers/src/definitions/eProviderSupport.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderSupport = void 0;
var ProviderSupport;
(function (ProviderSupport) {
    ProviderSupport["Releases"] = "releases";
    ProviderSupport["Prereleases"] = "prereleases";
    ProviderSupport["InstalledStatuses"] = "installedStatuses";
})(ProviderSupport = exports.ProviderSupport || (exports.ProviderSupport = {}));


/***/ }),

/***/ "./src/core.providers/src/definitions/iProviderConfig.ts":
/*!***************************************************************!*\
  !*** ./src/core.providers/src/definitions/iProviderConfig.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.providers/src/definitions/iProviderModule.ts":
/*!***************************************************************!*\
  !*** ./src/core.providers/src/definitions/iProviderModule.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.providers/src/definitions/tProviderFileMatcher.ts":
/*!********************************************************************!*\
  !*** ./src/core.providers/src/definitions/tProviderFileMatcher.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.suggestions/index.test.ts":
/*!********************************************!*\
  !*** ./src/core.suggestions/index.test.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageSuggestionFactoryTests = void 0;
// SuggestionFactoryTests
const createSuggestions_tests_1 = __webpack_require__(/*! ./test/suggestionFactory/createSuggestions.tests */ "./src/core.suggestions/test/suggestionFactory/createSuggestions.tests.ts");
const createFromHttpStatus_tests_1 = __webpack_require__(/*! ./test/suggestionFactory/createFromHttpStatus.tests */ "./src/core.suggestions/test/suggestionFactory/createFromHttpStatus.tests.ts");
const createLatest_tests_1 = __webpack_require__(/*! ./test/suggestionFactory/createLatest.tests */ "./src/core.suggestions/test/suggestionFactory/createLatest.tests.ts");
exports.PackageSuggestionFactoryTests = {
    createSuggestions: createSuggestions_tests_1.default,
    createFromHttpStatus: createFromHttpStatus_tests_1.default,
    createLatest: createLatest_tests_1.default
};


/***/ }),

/***/ "./src/core.suggestions/index.ts":
/*!***************************************!*\
  !*** ./src/core.suggestions/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestionFactory = void 0;
__exportStar(__webpack_require__(/*! ./src/definitions/eSuggestionFlags */ "./src/core.suggestions/src/definitions/eSuggestionFlags.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/eSuggestionStatus */ "./src/core.suggestions/src/definitions/eSuggestionStatus.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iSuggestionProvider */ "./src/core.suggestions/src/definitions/iSuggestionProvider.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/tSuggestion */ "./src/core.suggestions/src/definitions/tSuggestion.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/tSuggestionReplaceFunction */ "./src/core.suggestions/src/definitions/tSuggestionReplaceFunction.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/suggestionUtils */ "./src/core.suggestions/src/suggestionUtils.ts"), exports);
exports.SuggestionFactory = __webpack_require__(/*! ./src/suggestionFactory */ "./src/core.suggestions/src/suggestionFactory.ts");


/***/ }),

/***/ "./src/core.suggestions/src/definitions/eSuggestionFlags.ts":
/*!******************************************************************!*\
  !*** ./src/core.suggestions/src/definitions/eSuggestionFlags.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestionFlags = void 0;
var SuggestionFlags;
(function (SuggestionFlags) {
    // bitwise
    SuggestionFlags[SuggestionFlags["status"] = 1] = "status";
    SuggestionFlags[SuggestionFlags["release"] = 2] = "release";
    SuggestionFlags[SuggestionFlags["prerelease"] = 4] = "prerelease";
    SuggestionFlags[SuggestionFlags["tag"] = 8] = "tag";
})(SuggestionFlags = exports.SuggestionFlags || (exports.SuggestionFlags = {}));


/***/ }),

/***/ "./src/core.suggestions/src/definitions/eSuggestionStatus.ts":
/*!*******************************************************************!*\
  !*** ./src/core.suggestions/src/definitions/eSuggestionStatus.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SuggestionStatus = void 0;
var SuggestionStatus;
(function (SuggestionStatus) {
    SuggestionStatus["BadRequest"] = "400 bad request";
    SuggestionStatus["NotAuthorized"] = "401 not authorized";
    SuggestionStatus["Forbidden"] = "403 forbidden";
    SuggestionStatus["NotFound"] = "package not found";
    SuggestionStatus["InternalServerError"] = "500 internal server error";
    SuggestionStatus["NotSupported"] = "not supported";
    SuggestionStatus["ConnectionRefused"] = "connection refused";
    SuggestionStatus["Invalid"] = "invalid entry";
    SuggestionStatus["NoMatch"] = "no match";
    SuggestionStatus["Satisfies"] = "satisfies";
    SuggestionStatus["Latest"] = "latest";
    SuggestionStatus["LatestIsPrerelease"] = "latest prerelease";
    SuggestionStatus["Fixed"] = "fixed";
})(SuggestionStatus = exports.SuggestionStatus || (exports.SuggestionStatus = {}));


/***/ }),

/***/ "./src/core.suggestions/src/definitions/iSuggestionProvider.ts":
/*!*********************************************************************!*\
  !*** ./src/core.suggestions/src/definitions/iSuggestionProvider.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.suggestions/src/definitions/tSuggestion.ts":
/*!*************************************************************!*\
  !*** ./src/core.suggestions/src/definitions/tSuggestion.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.suggestions/src/definitions/tSuggestionReplaceFunction.ts":
/*!****************************************************************************!*\
  !*** ./src/core.suggestions/src/definitions/tSuggestionReplaceFunction.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core.suggestions/src/suggestionFactory.ts":
/*!*******************************************************!*\
  !*** ./src/core.suggestions/src/suggestionFactory.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createSuggestion = exports.createFixedStatus = exports.createSatisifiesLatest = exports.createMatchesLatest = exports.createLatest = exports.createNoMatch = exports.createNotSupported = exports.createInvalid = exports.createBadRequest = exports.createNotAuthorized = exports.createForbidden = exports.createConnectionRefused = exports.createInternalServerError = exports.createNotFound = exports.createFromHttpStatus = exports.createSuggestions = void 0;
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
function createSuggestions(versionRange, releases, prereleases, suggestedLatestVersion = null) {
    const { maxSatisfying, compareLoose } = __webpack_require__(/*! semver */ "semver");
    const suggestions = [];
    // check for a release
    let satisfiesVersion = maxSatisfying(releases, versionRange, core_packages_1.VersionHelpers.loosePrereleases);
    if (!satisfiesVersion && versionRange.indexOf('-') > -1) {
        // lookup prereleases
        satisfiesVersion = maxSatisfying(prereleases, versionRange, core_packages_1.VersionHelpers.loosePrereleases);
    }
    // get the latest release
    const latestVersion = suggestedLatestVersion || releases[releases.length - 1];
    const isLatest = latestVersion === satisfiesVersion;
    const noSuggestionNeeded = versionRange.includes(satisfiesVersion) ||
        versionRange.includes(suggestedLatestVersion);
    if (releases.length === 0 && prereleases.length === 0)
        // no match
        suggestions.push(createNoMatch());
    else if (!satisfiesVersion)
        // no match
        suggestions.push(createNoMatch(), 
        // suggest latestVersion
        createLatest(latestVersion));
    else if (isLatest && noSuggestionNeeded)
        // latest
        suggestions.push(createMatchesLatest(versionRange));
    else if (isLatest)
        suggestions.push(
        // satisfies latest
        createSatisifiesLatest(), 
        // suggest latestVersion
        createLatest(latestVersion));
    else if (satisfiesVersion && core_packages_1.VersionHelpers.isFixedVersion(versionRange))
        suggestions.push(
        // fixed
        createFixedStatus(versionRange), 
        // suggest latestVersion
        createLatest(latestVersion));
    else if (satisfiesVersion)
        suggestions.push(
        // satisfies >x.y.z <x.y.z
        createSuggestion(core_suggestions_1.SuggestionStatus.Satisfies, satisfiesVersion, noSuggestionNeeded ?
            core_suggestions_1.SuggestionFlags.status :
            core_suggestions_1.SuggestionFlags.release), 
        // suggest latestVersion
        createLatest(latestVersion));
    // roll up prereleases
    const maxSatisfyingPrereleases = core_packages_1.VersionHelpers.filterPrereleasesGtMinRange(versionRange, prereleases).sort(compareLoose);
    // group prereleases (latest first)
    const taggedVersions = core_packages_1.VersionHelpers.extractTaggedVersions(maxSatisfyingPrereleases);
    for (let index = taggedVersions.length - 1; index > -1; index--) {
        const pvn = taggedVersions[index];
        if (pvn.name === 'latest')
            break;
        if (pvn.version === satisfiesVersion)
            break;
        if (pvn.version === latestVersion)
            break;
        if (versionRange.includes(pvn.version))
            break;
        suggestions.push({
            name: pvn.name,
            version: pvn.version,
            flags: core_suggestions_1.SuggestionFlags.prerelease
        });
    }
    return suggestions;
}
exports.createSuggestions = createSuggestions;
function createFromHttpStatus(status) {
    if (status == 400)
        return core_suggestions_1.SuggestionFactory.createBadRequest();
    else if (status == 401)
        return core_suggestions_1.SuggestionFactory.createNotAuthorized();
    else if (status == 403)
        return core_suggestions_1.SuggestionFactory.createForbidden();
    else if (status == 404)
        return core_suggestions_1.SuggestionFactory.createNotFound();
    else if (status == 500)
        return core_suggestions_1.SuggestionFactory.createInternalServerError();
    return null;
}
exports.createFromHttpStatus = createFromHttpStatus;
function createNotFound() {
    return {
        name: core_suggestions_1.SuggestionStatus.NotFound,
        version: '',
        flags: core_suggestions_1.SuggestionFlags.status
    };
}
exports.createNotFound = createNotFound;
function createInternalServerError() {
    return {
        name: core_suggestions_1.SuggestionStatus.InternalServerError,
        version: '',
        flags: core_suggestions_1.SuggestionFlags.status
    };
}
exports.createInternalServerError = createInternalServerError;
function createConnectionRefused() {
    return {
        name: core_suggestions_1.SuggestionStatus.ConnectionRefused,
        version: '',
        flags: core_suggestions_1.SuggestionFlags.status
    };
}
exports.createConnectionRefused = createConnectionRefused;
function createForbidden() {
    return {
        name: core_suggestions_1.SuggestionStatus.Forbidden,
        version: '',
        flags: core_suggestions_1.SuggestionFlags.status
    };
}
exports.createForbidden = createForbidden;
function createNotAuthorized() {
    return {
        name: core_suggestions_1.SuggestionStatus.NotAuthorized,
        version: '',
        flags: core_suggestions_1.SuggestionFlags.status
    };
}
exports.createNotAuthorized = createNotAuthorized;
function createBadRequest() {
    return {
        name: core_suggestions_1.SuggestionStatus.BadRequest,
        version: '',
        flags: core_suggestions_1.SuggestionFlags.status
    };
}
exports.createBadRequest = createBadRequest;
function createInvalid(requestedVersion) {
    return {
        name: core_suggestions_1.SuggestionStatus.Invalid,
        version: requestedVersion,
        flags: core_suggestions_1.SuggestionFlags.status
    };
}
exports.createInvalid = createInvalid;
function createNotSupported() {
    return {
        name: core_suggestions_1.SuggestionStatus.NotSupported,
        version: '',
        flags: core_suggestions_1.SuggestionFlags.status
    };
}
exports.createNotSupported = createNotSupported;
function createNoMatch() {
    return {
        name: core_suggestions_1.SuggestionStatus.NoMatch,
        version: '',
        flags: core_suggestions_1.SuggestionFlags.status
    };
}
exports.createNoMatch = createNoMatch;
function createLatest(requestedVersion) {
    const isPrerelease = requestedVersion && requestedVersion.indexOf('-') !== -1;
    const name = isPrerelease ?
        core_suggestions_1.SuggestionStatus.LatestIsPrerelease :
        core_suggestions_1.SuggestionStatus.Latest;
    // treats requestedVersion as latest version
    // if no requestedVersion then uses the 'latest' tag instead
    return {
        name,
        version: requestedVersion || 'latest',
        flags: isPrerelease ?
            core_suggestions_1.SuggestionFlags.prerelease :
            requestedVersion ?
                core_suggestions_1.SuggestionFlags.release :
                core_suggestions_1.SuggestionFlags.tag
    };
}
exports.createLatest = createLatest;
function createMatchesLatest(latestVersion) {
    const isPrerelease = latestVersion && latestVersion.indexOf('-') !== -1;
    const name = isPrerelease ?
        core_suggestions_1.SuggestionStatus.LatestIsPrerelease :
        core_suggestions_1.SuggestionStatus.Latest;
    return {
        name,
        version: isPrerelease ? latestVersion : '',
        flags: core_suggestions_1.SuggestionFlags.status
    };
}
exports.createMatchesLatest = createMatchesLatest;
function createSatisifiesLatest() {
    return createSuggestion(core_suggestions_1.SuggestionStatus.Satisfies, 'latest', core_suggestions_1.SuggestionFlags.status);
}
exports.createSatisifiesLatest = createSatisifiesLatest;
function createFixedStatus(version) {
    return createSuggestion(core_suggestions_1.SuggestionStatus.Fixed, version, core_suggestions_1.SuggestionFlags.status);
}
exports.createFixedStatus = createFixedStatus;
function createSuggestion(name, version, flags) {
    return { name, version, flags };
}
exports.createSuggestion = createSuggestion;


/***/ }),

/***/ "./src/core.suggestions/src/suggestionUtils.ts":
/*!*****************************************************!*\
  !*** ./src/core.suggestions/src/suggestionUtils.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.filtersProvidersByFileName = exports.defaultReplaceFn = void 0;
const path_1 = __webpack_require__(/*! path */ "path");
const minimatch = __webpack_require__(/*! minimatch */ "minimatch");
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
function defaultReplaceFn(packageResponse, newVersion) {
    return core_packages_1.VersionHelpers.formatWithExistingLeading(packageResponse.requested.version, newVersion);
}
exports.defaultReplaceFn = defaultReplaceFn;
function filtersProvidersByFileName(fileName, providers) {
    const filename = path_1.basename(fileName);
    const filtered = providers.filter(provider => minimatch(filename, provider.config.fileMatcher.pattern));
    if (filtered.length === 0)
        return [];
    return filtered;
}
exports.filtersProvidersByFileName = filtersProvidersByFileName;


/***/ }),

/***/ "./src/core.suggestions/test/suggestionFactory/createFromHttpStatus.tests.ts":
/*!***********************************************************************************!*\
  !*** ./src/core.suggestions/test/suggestionFactory/createFromHttpStatus.tests.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
exports.default = {
    "createFromHttpStatus": {
        "returns suggestions from implemented http statuses": () => {
            const tests = [
                {
                    testStatus: 401,
                    expected: {
                        name: '401 not authorized',
                        version: '',
                        flags: core_suggestions_1.SuggestionFlags.status
                    }
                },
                {
                    testStatus: 404,
                    expected: {
                        name: 'package not found',
                        version: '',
                        flags: core_suggestions_1.SuggestionFlags.status
                    }
                }
            ];
            tests.forEach(test => {
                const actual = core_suggestions_1.SuggestionFactory.createFromHttpStatus(test.testStatus);
                assert.deepEqual(actual, test.expected);
            });
        },
        "returns null when http status not implemented": () => {
            const actual = core_suggestions_1.SuggestionFactory.createFromHttpStatus(501);
            assert.deepEqual(actual, null);
        }
    },
};


/***/ }),

/***/ "./src/core.suggestions/test/suggestionFactory/createLatest.tests.ts":
/*!***************************************************************************!*\
  !*** ./src/core.suggestions/test/suggestionFactory/createLatest.tests.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
exports.default = {
    "createLatest": {
        "when version param is undefined then returns 'latest' tagged package suggestion": () => {
            const actual = core_suggestions_1.SuggestionFactory.createLatest();
            assert.deepEqual(actual, {
                name: core_suggestions_1.SuggestionStatus.Latest,
                version: core_suggestions_1.SuggestionStatus.Latest,
                flags: core_suggestions_1.SuggestionFlags.tag
            });
        },
        "when version param is a release then returns 'latest' version package suggestion": () => {
            const testRelease = '1.0.0';
            const actual = core_suggestions_1.SuggestionFactory.createLatest(testRelease);
            assert.deepEqual(actual, {
                name: core_suggestions_1.SuggestionStatus.Latest,
                version: testRelease,
                flags: core_suggestions_1.SuggestionFlags.release
            });
        },
        "when version param is a prerelease then returns 'latest' version package suggestion": () => {
            const testRelease = '1.0.0-beta.1';
            const actual = core_suggestions_1.SuggestionFactory.createLatest(testRelease);
            assert.deepEqual(actual, {
                name: core_suggestions_1.SuggestionStatus.LatestIsPrerelease,
                version: testRelease,
                flags: core_suggestions_1.SuggestionFlags.prerelease
            });
        },
    },
};


/***/ }),

/***/ "./src/core.suggestions/test/suggestionFactory/createSuggestions.tests.ts":
/*!********************************************************************************!*\
  !*** ./src/core.suggestions/test/suggestionFactory/createSuggestions.tests.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
exports.default = {
    "returns PackageVersionStatus.nomatch": {
        "when releases and prereleases are empty": () => {
            const expected = [
                {
                    name: core_suggestions_1.SuggestionStatus.NoMatch,
                    version: '',
                    flags: core_suggestions_1.SuggestionFlags.status
                }
            ];
            const testRange = '*';
            const testReleases = [];
            const testPrereleases = [];
            const results = core_suggestions_1.SuggestionFactory.createSuggestions(testRange, testReleases, testPrereleases);
            assert.equal(results.length, expected.length);
            assert.equal(results[0].name, expected[0].name);
            assert.equal(results[0].version, expected[0].version);
            assert.equal(results[0].flags, expected[0].flags);
        },
        "when releases or prereleases do not contain a matching version": () => {
            const expected = [
                {
                    name: core_suggestions_1.SuggestionStatus.NoMatch,
                    version: '',
                    flags: core_suggestions_1.SuggestionFlags.status
                },
                {
                    name: core_suggestions_1.SuggestionStatus.Latest,
                    version: '1.0.0',
                    flags: core_suggestions_1.SuggestionFlags.release
                }
            ];
            const testRange = '2.0.0';
            const testReleases = ['1.0.0'];
            const testPrereleases = ['1.1.0-alpha.1'];
            const results = core_suggestions_1.SuggestionFactory.createSuggestions(testRange, testReleases, testPrereleases);
            assert.deepEqual(results, expected);
        },
        "when using a release range": () => {
            const expected = [
                {
                    name: core_suggestions_1.SuggestionStatus.NoMatch,
                    version: '',
                    flags: core_suggestions_1.SuggestionFlags.status
                },
                {
                    name: core_suggestions_1.SuggestionStatus.Latest,
                    version: '1.0.3-1.2.3',
                    flags: core_suggestions_1.SuggestionFlags.release
                }
            ];
            const testRange = '^1.0.0';
            const testReleases = ['0.0.6'];
            const testPrereleases = ['1.0.1-1.2.3', '1.0.2-1.2.3', '1.0.3-1.2.3'];
            const results = core_suggestions_1.SuggestionFactory.createSuggestions(testRange, testReleases, testPrereleases, '1.0.3-1.2.3');
            assert.equal(results.length, expected.length);
        },
    },
    "returns PackageVersionStatus.Latest": {
        "when versionRange matches the latest release": () => {
            const expected = [
                {
                    name: core_suggestions_1.SuggestionStatus.Latest,
                    version: '',
                    flags: core_suggestions_1.SuggestionFlags.status
                },
                {
                    name: 'next',
                    version: '4.0.0-next',
                    flags: core_suggestions_1.SuggestionFlags.prerelease
                }
            ];
            const testReleases = ['1.0.0', '2.0.0', '2.1.0', '3.0.0'];
            const testPrereleases = ['1.1.0-alpha.1', '4.0.0-next'];
            const testRanges = [
                '3.0.0',
                '^3.0.0'
            ];
            testRanges.forEach(testRange => {
                const results = core_suggestions_1.SuggestionFactory.createSuggestions(testRange, testReleases, testPrereleases);
                assert.deepEqual(results, expected);
            });
        },
        "when suggestedVersion is the latest release": () => {
            const testSuggestedVersion = '5.0.0';
            const expected = [
                {
                    name: core_suggestions_1.SuggestionStatus.Latest,
                    version: '',
                    flags: core_suggestions_1.SuggestionFlags.status
                }
            ];
            const testReleases = ['0.0.5', '2.0.0', '5.0.0'];
            const testPrereleases = ['1.1.0-alpha.1', '4.0.0-next'];
            const testRange = testSuggestedVersion;
            const results = core_suggestions_1.SuggestionFactory.createSuggestions(testRange, testReleases, testPrereleases, testSuggestedVersion);
            assert.deepEqual(results, expected);
        },
    },
    "returns PackageVersionStatus.LatestIsPrerelease": {
        "when suggestedVersion is not the latest release": () => {
            const testDistTagLatest = '4.0.0-next';
            const expected = [
                {
                    name: core_suggestions_1.SuggestionStatus.NoMatch,
                    version: '',
                    flags: core_suggestions_1.SuggestionFlags.status
                },
                {
                    name: core_suggestions_1.SuggestionStatus.LatestIsPrerelease,
                    version: '4.0.0-next',
                    flags: core_suggestions_1.SuggestionFlags.prerelease
                }
            ];
            const testReleases = ['0.0.5', '0.0.6'];
            const testPrereleases = ['1.1.0-alpha.1', '4.0.0-next'];
            const testRange = '4.0.0';
            const results = core_suggestions_1.SuggestionFactory.createSuggestions(testRange, testReleases, testPrereleases, testDistTagLatest);
            assert.deepEqual(results, expected);
        },
    },
    "returns PackageVersionStatus.satisfies": {
        "when versionRange satisfies the latest release": () => {
            const expected = [
                {
                    name: core_suggestions_1.SuggestionStatus.Satisfies,
                    version: 'latest',
                    flags: core_suggestions_1.SuggestionFlags.status
                },
                {
                    name: core_suggestions_1.SuggestionStatus.Latest,
                    version: '3.0.0',
                    flags: core_suggestions_1.SuggestionFlags.release
                },
                {
                    name: 'next',
                    version: '4.0.0-next',
                    flags: core_suggestions_1.SuggestionFlags.prerelease
                }
            ];
            const testReleases = ['1.0.0', '2.0.0', '2.1.0', '3.0.0'];
            const testPrereleases = ['1.1.0-alpha.1', '4.0.0-next'];
            const results = core_suggestions_1.SuggestionFactory.createSuggestions('>=2', testReleases, testPrereleases);
            assert.deepEqual(results, expected);
        },
        "when versionRange satisfies the latest tagged release": () => {
            const testLatest = '7.10.1';
            const expected = [
                {
                    name: core_suggestions_1.SuggestionStatus.Satisfies,
                    version: 'latest',
                    flags: core_suggestions_1.SuggestionFlags.status
                },
                {
                    name: core_suggestions_1.SuggestionStatus.Latest,
                    version: testLatest,
                    flags: core_suggestions_1.SuggestionFlags.release
                },
                {
                    name: 'next',
                    version: '8.0.0-next',
                    flags: core_suggestions_1.SuggestionFlags.prerelease
                }
            ];
            const testReleases = ['1.0.0', '2.0.0', '2.1.0', '7.9.6', '7.9.7', testLatest];
            const testPrereleases = ['1.1.0-alpha.1', '8.0.0-next'];
            const results = core_suggestions_1.SuggestionFactory.createSuggestions('^7.9.1', testReleases, testPrereleases, testLatest);
            assert.deepEqual(results, expected);
        },
        "when versionRange satisfies a range in the releases": () => {
            const expected = [
                {
                    name: core_suggestions_1.SuggestionStatus.Satisfies,
                    version: '2.1.0',
                    flags: core_suggestions_1.SuggestionFlags.release
                },
                {
                    name: core_suggestions_1.SuggestionStatus.Latest,
                    version: '3.0.0',
                    flags: core_suggestions_1.SuggestionFlags.release
                },
                {
                    name: 'next',
                    version: '4.0.0-next',
                    flags: core_suggestions_1.SuggestionFlags.prerelease
                }
            ];
            const testReleases = ['1.0.0', '2.0.0', '2.1.0', '3.0.0'];
            const testPrereleases = ['1.1.0-alpha.1', '4.0.0-next'];
            const testRanges = [
                '2.*'
            ];
            testRanges.forEach(testRange => {
                const results = core_suggestions_1.SuggestionFactory.createSuggestions(testRange, testReleases, testPrereleases);
                assert.deepEqual(results, expected);
            });
        },
    },
};


/***/ }),

/***/ "./src/infrastructure.clients/index.test.ts":
/*!**************************************************!*\
  !*** ./src/infrastructure.clients/index.test.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./test/httpClientRequest.tests */ "./src/infrastructure.clients/test/httpClientRequest.tests.ts"), exports);
__exportStar(__webpack_require__(/*! ./test/jsonClientRequest.tests */ "./src/infrastructure.clients/test/jsonClientRequest.tests.ts"), exports);
__exportStar(__webpack_require__(/*! ./test/processClientRequest.tests */ "./src/infrastructure.clients/test/processClientRequest.tests.ts"), exports);


/***/ }),

/***/ "./src/infrastructure.clients/index.ts":
/*!*********************************************!*\
  !*** ./src/infrastructure.clients/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./src/definitions/iXhrResponse */ "./src/infrastructure.clients/src/definitions/iXhrResponse.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iPromiseSpawn */ "./src/infrastructure.clients/src/definitions/iPromiseSpawn.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/httpClient */ "./src/infrastructure.clients/src/httpClient.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/httpClientFactory */ "./src/infrastructure.clients/src/httpClientFactory.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/processClient */ "./src/infrastructure.clients/src/processClient.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/processClientFactory */ "./src/infrastructure.clients/src/processClientFactory.ts"), exports);


/***/ }),

/***/ "./src/infrastructure.clients/src/definitions/iPromiseSpawn.ts":
/*!*********************************************************************!*\
  !*** ./src/infrastructure.clients/src/definitions/iPromiseSpawn.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/infrastructure.clients/src/definitions/iXhrResponse.ts":
/*!********************************************************************!*\
  !*** ./src/infrastructure.clients/src/definitions/iXhrResponse.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/infrastructure.clients/src/httpClient.ts":
/*!******************************************************!*\
  !*** ./src/infrastructure.clients/src/httpClient.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpClient = void 0;
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
class HttpClient extends core_clients_1.AbstractCachedRequest {
    constructor(xhr, requestOptions, requestLogger) {
        super(requestOptions.caching);
        this.logger = requestLogger;
        this.options = requestOptions;
        this.xhr = xhr;
    }
    async request(method, baseUrl, query = {}, headers = {}) {
        const url = core_clients_1.UrlHelpers.createUrl(baseUrl, query);
        const cacheKey = method + '_' + url;
        if (this.cache.cachingOpts.duration > 0 &&
            this.cache.hasExpired(cacheKey) === false) {
            const cachedResp = this.cache.get(cacheKey);
            if (cachedResp.rejected)
                return Promise.reject(cachedResp);
            return Promise.resolve(cachedResp);
        }
        return this.xhr({
            url,
            type: method,
            headers,
            strictSSL: this.options.http.strictSSL
        })
            .then((response) => {
            return this.createCachedResponse(cacheKey, response.status, response.responseText, false);
        })
            .catch((response) => {
            const result = this.createCachedResponse(cacheKey, response.status, response.responseText, true);
            return Promise.reject(result);
        });
    }
}
exports.HttpClient = HttpClient;


/***/ }),

/***/ "./src/infrastructure.clients/src/httpClientFactory.ts":
/*!*************************************************************!*\
  !*** ./src/infrastructure.clients/src/httpClientFactory.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createJsonClient = exports.createHttpClient = void 0;
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const httpClient_1 = __webpack_require__(/*! ./httpClient */ "./src/infrastructure.clients/src/httpClient.ts");
function createHttpClient(options, logger) {
    return new httpClient_1.HttpClient(__webpack_require__(/*! request-light */ "request-light").xhr, options, logger);
}
exports.createHttpClient = createHttpClient;
function createJsonClient(options, logger) {
    return new core_clients_1.JsonHttpClient(createHttpClient(options, logger));
}
exports.createJsonClient = createJsonClient;


/***/ }),

/***/ "./src/infrastructure.clients/src/processClient.ts":
/*!*********************************************************!*\
  !*** ./src/infrastructure.clients/src/processClient.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessClient = void 0;
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
class ProcessClient extends core_clients_1.AbstractCachedRequest {
    constructor(promiseSpawnFn, processOpts, processLogger) {
        super(processOpts);
        this.logger = processLogger;
        this.promiseSpawn = promiseSpawnFn;
    }
    async request(cmd, args, cwd) {
        const cacheKey = `${cmd} ${args.join(' ')}`;
        if (this.cache.cachingOpts.duration > 0 &&
            this.cache.hasExpired(cacheKey) === false) {
            this.logger.debug('cached - %s', cacheKey);
            const cachedResp = this.cache.get(cacheKey);
            if (cachedResp.rejected)
                return Promise.reject(cachedResp);
            return Promise.resolve(cachedResp);
        }
        this.logger.debug('executing - %s', cacheKey);
        return this.promiseSpawn(cmd, args, { cwd, stdioString: true })
            .then(result => {
            return this.createCachedResponse(cacheKey, result.code, result.stdout, false, core_clients_1.ClientResponseSource.local);
        }).catch(error => {
            const result = this.createCachedResponse(cacheKey, error.code, error.message, true, core_clients_1.ClientResponseSource.local);
            return Promise.reject(result);
        });
    }
}
exports.ProcessClient = ProcessClient;


/***/ }),

/***/ "./src/infrastructure.clients/src/processClientFactory.ts":
/*!****************************************************************!*\
  !*** ./src/infrastructure.clients/src/processClientFactory.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createProcessClient = void 0;
const processClient_1 = __webpack_require__(/*! ./processClient */ "./src/infrastructure.clients/src/processClient.ts");
function createProcessClient(cachingOpts, logger) {
    return new processClient_1.ProcessClient(__webpack_require__(/*! @npmcli/promise-spawn */ "@npmcli/promise-spawn"), cachingOpts, logger);
}
exports.createProcessClient = createProcessClient;


/***/ }),

/***/ "./src/infrastructure.clients/test/httpClientRequest.tests.ts":
/*!********************************************************************!*\
  !*** ./src/infrastructure.clients/test/httpClientRequest.tests.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpRequestTests = void 0;
const test_core_logging_1 = __webpack_require__(/*! test.core.logging */ "./src/core.logging/index.test.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const infrastructure_clients_1 = __webpack_require__(/*! infrastructure.clients */ "./src/infrastructure.clients/index.ts");
const requestLightStub_1 = __webpack_require__(/*! ./stubs/requestLightStub */ "./src/infrastructure.clients/test/stubs/requestLightStub.ts");
const { mock, instance, when, capture, anything } = __webpack_require__(/*! ts-mockito */ "ts-mockito");
const assert = __webpack_require__(/*! assert */ "assert");
let cachingOptsMock;
let httpOptsMock;
let loggerMock;
let requestLightMock;
let rut;
exports.HttpRequestTests = {
    beforeEach: () => {
        cachingOptsMock = mock(core_clients_1.CachingOptions);
        httpOptsMock = mock(core_clients_1.HttpOptions);
        loggerMock = mock(test_core_logging_1.LoggerStub);
        requestLightMock = mock(requestLightStub_1.RequestLightStub);
        rut = new infrastructure_clients_1.HttpClient(instance(requestLightMock).xhr, {
            caching: instance(cachingOptsMock),
            http: instance(httpOptsMock)
        }, instance(loggerMock));
        when(cachingOptsMock.duration).thenReturn(30000);
        when(httpOptsMock.strictSSL).thenReturn(true);
    },
    "request": {
        "passes options to xhr": async () => {
            const testFlags = [
                { testStrictSSL: true, testDuration: 3000 },
                { testStrictSSL: false, testDuration: 0 },
            ];
            when(requestLightMock.xhr(anything()))
                .thenResolve({
                responseText: '{}',
                status: 200
            });
            const promised = [];
            testFlags.forEach(async (test, testIndex) => {
                when(cachingOptsMock.duration).thenReturn(test.testDuration);
                when(httpOptsMock.strictSSL).thenReturn(test.testStrictSSL);
                const rut = new infrastructure_clients_1.HttpClient(instance(requestLightMock).xhr, {
                    caching: instance(cachingOptsMock),
                    http: instance(httpOptsMock)
                }, instance(loggerMock));
                promised.push(rut.request(core_clients_1.HttpClientRequestMethods.get, 'anywhere')
                    .then(() => {
                    const [actualOpts] = capture(requestLightMock.xhr).byCallIndex(testIndex);
                    assert.equal(actualOpts.strictSSL, test.testStrictSSL);
                }));
            });
            return Promise.all(promised);
        },
        "generates the expected url with query params": async () => {
            const testUrl = 'https://test.url.example/path';
            const testQueryParams = [
                {},
                { param1: 1, param2: 2 }
            ];
            when(requestLightMock.xhr(anything()))
                .thenResolve({
                status: 200,
                responseText: null
            });
            await Promise.all(testQueryParams.map(async function (query, index) {
                const expectedUrl = core_clients_1.UrlHelpers.createUrl(testUrl, query);
                await rut.request(core_clients_1.HttpClientRequestMethods.get, testUrl, query).then(() => {
                    const [actualOpts] = capture(requestLightMock.xhr).byCallIndex(index);
                    assert.equal(actualOpts.url, expectedUrl);
                    assert.equal(actualOpts.type, core_clients_1.HttpClientRequestMethods.get);
                });
            }));
        },
        "caches url response on success": async () => {
            const testUrl = 'https://test.url.example/path';
            const testQueryParams = {};
            const testResponse = {
                source: core_clients_1.ClientResponseSource.remote,
                status: 200,
                responseText: "cached test",
            };
            const expectedCacheData = {
                source: core_clients_1.ClientResponseSource.cache,
                status: testResponse.status,
                data: testResponse.responseText,
                rejected: false
            };
            when(requestLightMock.xhr(anything())).thenResolve(testResponse);
            await rut.request(core_clients_1.HttpClientRequestMethods.get, testUrl, testQueryParams).then(response => {
                const cachedData = rut.cache.get('GET_' + testUrl);
                assert.deepEqual(cachedData, expectedCacheData);
            });
        },
        "caches url response when rejected": async () => {
            const testUrl = 'https://test.url.example/path';
            const testQueryParams = {};
            const testResponse = {
                status: 404,
                responseText: "not found",
                source: core_clients_1.ClientResponseSource.remote
            };
            const expectedCacheData = {
                status: testResponse.status,
                data: testResponse.responseText,
                source: core_clients_1.ClientResponseSource.cache,
                rejected: true,
            };
            when(requestLightMock.xhr(anything())).thenResolve(testResponse);
            // first request
            await rut.request(core_clients_1.HttpClientRequestMethods.get, testUrl, testQueryParams).catch(response => {
                const cachedData = rut.cache.get('GET_' + testUrl);
                assert.deepEqual(cachedData, expectedCacheData);
            });
            // accessing a cached rejection should also reject
            await rut.request(core_clients_1.HttpClientRequestMethods.get, testUrl, testQueryParams).catch(response => {
                const cachedData = rut.cache.get('GET_' + testUrl);
                assert.deepEqual(cachedData, expectedCacheData);
            });
        },
        "does not cache when duration is 0": async () => {
            const testUrl = 'https://test.url.example/path';
            const testQueryParams = {};
            const expectedCacheData = undefined;
            when(requestLightMock.xhr(anything()))
                .thenResolve({
                status: 200,
                responseText: JSON.stringify({ "message": "cached test" })
            });
            when(cachingOptsMock.duration).thenReturn(0);
            when(httpOptsMock.strictSSL).thenReturn(true);
            await rut.request(core_clients_1.HttpClientRequestMethods.get, testUrl, testQueryParams).then(response => {
                const cachedData = rut.cache.get('GET_' + testUrl);
                assert.equal(cachedData, expectedCacheData);
            });
        },
    },
};


/***/ }),

/***/ "./src/infrastructure.clients/test/jsonClientRequest.tests.ts":
/*!********************************************************************!*\
  !*** ./src/infrastructure.clients/test/jsonClientRequest.tests.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonClientRequestTests = void 0;
const test_core_logging_1 = __webpack_require__(/*! test.core.logging */ "./src/core.logging/index.test.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const infrastructure_clients_1 = __webpack_require__(/*! infrastructure.clients */ "./src/infrastructure.clients/index.ts");
const { mock, instance, when, anything } = __webpack_require__(/*! ts-mockito */ "ts-mockito");
const assert = __webpack_require__(/*! assert */ "assert");
let cachingOptsMock;
let httpOptsMock;
let httpClientMock;
let loggerMock;
exports.JsonClientRequestTests = {
    beforeEach: () => {
        cachingOptsMock = mock(core_clients_1.CachingOptions);
        httpOptsMock = mock(core_clients_1.HttpOptions);
        loggerMock = mock(test_core_logging_1.LoggerStub);
        httpClientMock = mock(infrastructure_clients_1.HttpClient);
        when(cachingOptsMock.duration).thenReturn(30000);
        when(httpOptsMock.strictSSL).thenReturn(true);
    },
    "requestJson": {
        "returns response as an object": async () => {
            const testUrl = 'https://test.url.example/path';
            const testQueryParams = {};
            const testResponse = {
                source: core_clients_1.ClientResponseSource.remote,
                status: 404,
                data: '{ "item1": "not found" }',
            };
            const expectedCacheData = {
                source: core_clients_1.ClientResponseSource.remote,
                status: testResponse.status,
                data: JSON.parse(testResponse.data),
            };
            when(httpClientMock.request(anything(), anything(), anything(), anything())).thenResolve(testResponse);
            const rut = new core_clients_1.JsonHttpClient(instance(httpClientMock));
            await rut.request(core_clients_1.HttpClientRequestMethods.get, testUrl, testQueryParams).then(response => {
                assert.deepEqual(response, expectedCacheData);
            });
        },
    },
};


/***/ }),

/***/ "./src/infrastructure.clients/test/processClientRequest.tests.ts":
/*!***********************************************************************!*\
  !*** ./src/infrastructure.clients/test/processClientRequest.tests.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessClientRequestTests = void 0;
const test_core_logging_1 = __webpack_require__(/*! test.core.logging */ "./src/core.logging/index.test.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const infrastructure_clients_1 = __webpack_require__(/*! infrastructure.clients */ "./src/infrastructure.clients/index.ts");
const processSpawnStub_1 = __webpack_require__(/*! ./stubs/processSpawnStub */ "./src/infrastructure.clients/test/stubs/processSpawnStub.ts");
const { mock, instance, when, anything } = __webpack_require__(/*! ts-mockito */ "ts-mockito");
const assert = __webpack_require__(/*! assert */ "assert");
let psMock;
let cachingMock;
let loggerMock;
exports.ProcessClientRequestTests = {
    beforeEach: () => {
        cachingMock = mock(core_clients_1.CachingOptions);
        loggerMock = mock(test_core_logging_1.LoggerStub);
        psMock = mock(processSpawnStub_1.ProcessSpawnStub);
    },
    "requestJson": {
        "returns <ProcessClientResponse> when error occurs": async () => {
            when(cachingMock.duration).thenReturn(30000);
            when(psMock.promiseSpawn(anything(), anything(), anything()))
                .thenReject({
                code: "ENOENT",
                message: "spawn missing ENOENT"
            });
            const rut = new infrastructure_clients_1.ProcessClient(instance(psMock).promiseSpawn, instance(cachingMock), instance(loggerMock));
            return await rut.request('missing', ['--ooppss'], '/').catch(response => {
                assert.equal(response.status, "ENOENT");
                assert.equal(response.data, "spawn missing ENOENT");
            });
        },
        "returns <ProcessClientResponse> and caches response": async () => {
            const testResponse = {
                source: core_clients_1.ClientResponseSource.local,
                status: 0,
                data: '123\n',
                rejected: false
            };
            const expectedCacheData = {
                source: core_clients_1.ClientResponseSource.cache,
                status: testResponse.status,
                data: testResponse.data,
                rejected: false
            };
            when(psMock.promiseSpawn(anything(), anything(), anything()))
                .thenResolve({
                code: 0,
                stdout: testResponse.data
            });
            when(cachingMock.duration).thenReturn(30000);
            const rut = new infrastructure_clients_1.ProcessClient(instance(psMock).promiseSpawn, instance(cachingMock), instance(loggerMock));
            await rut.request('echo', ['123'], 'd:\\').then(response => {
                assert.deepEqual(response, testResponse);
            });
            await rut.request('echo', ['123'], 'd:\\').then(response => {
                assert.deepEqual(response, expectedCacheData);
            });
        },
        "doesn't cache when duration is 0": async () => {
            const testKey = 'echo 123';
            const testResponse = {
                source: core_clients_1.ClientResponseSource.local,
                status: 0,
                data: '123\n',
                rejected: false,
            };
            when(psMock.promiseSpawn(anything(), anything(), anything()))
                .thenResolve({
                code: 0,
                stdout: testResponse.data
            });
            when(cachingMock.duration).thenReturn(0);
            const rut = new infrastructure_clients_1.ProcessClient(instance(psMock).promiseSpawn, instance(cachingMock), instance(loggerMock));
            await rut.request('echo', ['123'], 'd:\\').then(response => {
                assert.deepEqual(response, testResponse);
            });
            await rut.request('echo', ['123'], 'd:\\').then(response => {
                assert.deepEqual(response, testResponse);
                const cachedData = rut.cache.get(testKey);
                assert.equal(cachedData, undefined);
            });
        },
    },
};


/***/ }),

/***/ "./src/infrastructure.clients/test/stubs/processSpawnStub.ts":
/*!*******************************************************************!*\
  !*** ./src/infrastructure.clients/test/stubs/processSpawnStub.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessSpawnStub = void 0;
class ProcessSpawnStub {
    promiseSpawn(cmd, args, opts) {
        return Promise.resolve();
    }
}
exports.ProcessSpawnStub = ProcessSpawnStub;


/***/ }),

/***/ "./src/infrastructure.clients/test/stubs/requestLightStub.ts":
/*!*******************************************************************!*\
  !*** ./src/infrastructure.clients/test/stubs/requestLightStub.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestLightStub = void 0;
class RequestLightStub {
    xhr(opts) {
        return Promise.resolve({
            responseText: '',
            status: 0,
            headers: {}
        });
    }
}
exports.RequestLightStub = RequestLightStub;


/***/ }),

/***/ "./src/infrastructure.configuration/index.test.ts":
/*!********************************************************!*\
  !*** ./src/infrastructure.configuration/index.test.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./test/vscodeConfig.tests */ "./src/infrastructure.configuration/test/vscodeConfig.tests.ts"), exports);


/***/ }),

/***/ "./src/infrastructure.configuration/index.ts":
/*!***************************************************!*\
  !*** ./src/infrastructure.configuration/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./src/definitions/iVsCodeConfig */ "./src/infrastructure.configuration/src/definitions/iVsCodeConfig.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/vscodeConfig */ "./src/infrastructure.configuration/src/vscodeConfig.ts"), exports);


/***/ }),

/***/ "./src/infrastructure.configuration/src/definitions/iVsCodeConfig.ts":
/*!***************************************************************************!*\
  !*** ./src/infrastructure.configuration/src/definitions/iVsCodeConfig.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/infrastructure.configuration/src/vscodeConfig.ts":
/*!**************************************************************!*\
  !*** ./src/infrastructure.configuration/src/vscodeConfig.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeConfig = void 0;
// allows vscode configuration to be defrosted
// Useful for accessing hot changing values from settings.json
// Stays frozen until defrost() is called and then refrosts
class VsCodeConfig {
    constructor(workspace, section) {
        this.workspace = workspace;
        this.section = section;
        this.frozen = null;
    }
    get repo() {
        return this.workspace.getConfiguration(this.section);
    }
    get(key) {
        if (this.frozen === null) {
            this.frozen = this.repo;
        }
        return this.frozen.get(key);
    }
    defrost() {
        this.frozen = null;
    }
}
exports.VsCodeConfig = VsCodeConfig;


/***/ }),

/***/ "./src/infrastructure.configuration/test/stubs/vsCodeWorkspaceStub.ts":
/*!****************************************************************************!*\
  !*** ./src/infrastructure.configuration/test/stubs/vsCodeWorkspaceStub.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeWorkspaceStub = void 0;
class VsCodeWorkspaceStub {
    getConfiguration(section) {
        return {
            get: (key) => { throw new Error("Not implemented"); }
        };
    }
}
exports.VsCodeWorkspaceStub = VsCodeWorkspaceStub;


/***/ }),

/***/ "./src/infrastructure.configuration/test/vscodeConfig.tests.ts":
/*!*********************************************************************!*\
  !*** ./src/infrastructure.configuration/test/vscodeConfig.tests.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeFrozenConfigTests = void 0;
const infrastructure_configuration_1 = __webpack_require__(/*! infrastructure.configuration */ "./src/infrastructure.configuration/index.ts");
const vsCodeWorkspaceStub_1 = __webpack_require__(/*! ./stubs/vsCodeWorkspaceStub */ "./src/infrastructure.configuration/test/stubs/vsCodeWorkspaceStub.ts");
const assert = __webpack_require__(/*! assert */ "assert");
const { mock, instance, when } = __webpack_require__(/*! ts-mockito */ "ts-mockito");
let workspaceMock;
exports.VsCodeFrozenConfigTests = {
    beforeAll: () => {
        workspaceMock = mock(vsCodeWorkspaceStub_1.VsCodeWorkspaceStub);
    },
    "get": {
        "accesses frozen repo after first call": () => {
            const testSection = 'testsection';
            const testKey = 'some_property';
            let expectedFrozenValue = 'test value';
            when(workspaceMock.getConfiguration(testSection))
                .thenReturn({
                get: section => expectedFrozenValue
            });
            // get hot value
            const cut = new infrastructure_configuration_1.VsCodeConfig(instance(workspaceMock), testSection);
            const first = cut.get(testKey);
            assert.equal(first, expectedFrozenValue);
            // change value
            when(workspaceMock.getConfiguration(testSection)).thenReturn('hot value');
            // should still return frozen value
            const actualFrozen = cut.get(testKey);
            assert.equal(actualFrozen, expectedFrozenValue);
        },
        "returns hot value after defrost is called": () => {
            const testSection = 'testsection';
            const testKey = 'some_property';
            let initialValue = 'test value';
            when(workspaceMock.getConfiguration(testSection))
                .thenReturn({
                get: section => initialValue
            });
            // get hot value
            const cut = new infrastructure_configuration_1.VsCodeConfig(instance(workspaceMock), testSection);
            const first = cut.get(testKey);
            assert.equal(first, initialValue);
            // change expected hot value
            const expectedHotValue = 'hot value';
            when(workspaceMock.getConfiguration(testSection))
                .thenReturn({
                get: section => expectedHotValue
            });
            // should return hot value
            cut.defrost();
            const actualFrozen = cut.get(testKey);
            assert.equal(actualFrozen, expectedHotValue);
        }
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/index.test.ts":
/*!***********************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/index.test.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DotnetParserTests = exports.DotNetUtils = void 0;
const parseVersionSpec_tests_1 = __webpack_require__(/*! ./test/dotnetUtils/parseVersionSpec.tests */ "./src/infrastructure.providers/dotnet/test/dotnetUtils/parseVersionSpec.tests.ts");
exports.DotNetUtils = {
    parseVersionSpec: parseVersionSpec_tests_1.default,
};
__exportStar(__webpack_require__(/*! ./test/clients/dotnetClient.tests */ "./src/infrastructure.providers/dotnet/test/clients/dotnetClient.tests.ts"), exports);
__exportStar(__webpack_require__(/*! ./test/clients/nugetResourceClient.tests */ "./src/infrastructure.providers/dotnet/test/clients/nugetResourceClient.tests.ts"), exports);
// Package Parser Tests
const createDependenciesFromXml_tests_1 = __webpack_require__(/*! ./test/dotnetXmlParserFactory/createDependenciesFromXml.tests */ "./src/infrastructure.providers/dotnet/test/dotnetXmlParserFactory/createDependenciesFromXml.tests.ts");
exports.DotnetParserTests = {
    createDependenciesFromXml: createDependenciesFromXml_tests_1.default,
};


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/index.ts":
/*!******************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./src/clients/dotnetCli */ "./src/infrastructure.providers/dotnet/src/clients/dotnetCli.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/clients/nugetPackageClient */ "./src/infrastructure.providers/dotnet/src/clients/nugetPackageClient.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/clients/nugetResourceClient */ "./src/infrastructure.providers/dotnet/src/clients/nugetResourceClient.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/dotnet */ "./src/infrastructure.providers/dotnet/src/definitions/dotnet.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/nuget */ "./src/infrastructure.providers/dotnet/src/definitions/nuget.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iNugetOptions */ "./src/infrastructure.providers/dotnet/src/definitions/iNugetOptions.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/dotnetConfig */ "./src/infrastructure.providers/dotnet/src/dotnetConfig.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/dotnetSuggestionProvider */ "./src/infrastructure.providers/dotnet/src/dotnetSuggestionProvider.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/dotnetUtils */ "./src/infrastructure.providers/dotnet/src/dotnetUtils.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/dotnetXmlParserFactory */ "./src/infrastructure.providers/dotnet/src/dotnetXmlParserFactory.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/options/nugetOptions */ "./src/infrastructure.providers/dotnet/src/options/nugetOptions.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/dotnetContainer */ "./src/infrastructure.providers/dotnet/src/dotnetContainer.ts"), exports);


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/clients/dotnetCli.ts":
/*!**********************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/clients/dotnetCli.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotNetCli = void 0;
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
class DotNetCli {
    constructor(config, client, logger) {
        this.config = config;
        this.client = client;
        this.logger = logger;
    }
    async fetchSources(cwd) {
        const promisedCli = this.client.request('dotnet', ['nuget', 'list', 'source', '--format', 'short'], cwd);
        return await promisedCli.then(result => {
            const { data } = result;
            // reject when data contains "error"
            if (data.indexOf("error") > -1)
                return Promise.reject(result);
            // check we have some data
            if (data.length === 0 || data.indexOf('E') === -1) {
                return [];
            }
            // extract sources
            const hasCrLf = data.indexOf(crLf) > 0;
            const splitChar = hasCrLf ? crLf : '\n';
            let lines = data.split(splitChar);
            // pop any blank entries
            if (lines[lines.length - 1] === '')
                lines.pop();
            return parseSourcesArray(lines).filter(s => s.enabled);
        }).then(sources => {
            // combine the sources where feed take precedent
            const feedSources = convertFeedsToSources(this.config.nuget.sources);
            return [
                ...feedSources,
                ...sources
            ];
        }).catch(error => {
            // return the fallback source for dotnet clients < 5.5
            return [
                {
                    enabled: true,
                    machineWide: false,
                    protocol: core_clients_1.UrlHelpers.RegistryProtocols.https,
                    url: this.config.fallbackNugetSource,
                }
            ];
        });
    }
}
exports.DotNetCli = DotNetCli;
const crLf = '\r\n';
function parseSourcesArray(lines) {
    return lines.map(function (line) {
        const enabled = line.substring(0, 1) === 'E';
        const machineWide = line.substring(1, 2) === 'M';
        const offset = machineWide ? 3 : 2;
        const url = line.substring(offset);
        const protocol = core_clients_1.UrlHelpers.getProtocolFromUrl(url);
        return {
            enabled,
            machineWide,
            url,
            protocol
        };
    });
}
function convertFeedsToSources(feeds) {
    return feeds.map(function (url) {
        const protocol = core_clients_1.UrlHelpers.getProtocolFromUrl(url);
        const machineWide = (protocol === core_clients_1.UrlHelpers.RegistryProtocols.file);
        return {
            enabled: true,
            machineWide,
            url,
            protocol
        };
    });
}


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/clients/nugetPackageClient.ts":
/*!*******************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/clients/nugetPackageClient.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NuGetPackageClient = void 0;
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const dotnetUtils_1 = __webpack_require__(/*! ../dotnetUtils */ "./src/infrastructure.providers/dotnet/src/dotnetUtils.ts");
class NuGetPackageClient {
    constructor(config, client, logger) {
        this.config = config;
        this.client = client;
        this.logger = logger;
    }
    async fetchPackage(request) {
        const dotnetSpec = dotnetUtils_1.parseVersionSpec(request.package.version);
        return this.fetchPackageRetry(request, dotnetSpec);
    }
    async fetchPackageRetry(request, dotnetSpec) {
        const urls = request.clientData.serviceUrls;
        const autoCompleteUrl = urls[request.attempt];
        return this.createRemotePackageDocument(autoCompleteUrl, request, dotnetSpec)
            .catch((error) => {
            this.logger.debug("Caught exception from %s: %O", core_packages_1.PackageSourceTypes.Registry, error);
            // increase the attempt number
            request.attempt++;
            // only retry if 404 and we have more urls to try
            if (error.status === 404 && request.attempt < urls.length) {
                // retry
                return this.fetchPackageRetry(request, dotnetSpec);
            }
            const suggestion = core_suggestions_1.SuggestionFactory.createFromHttpStatus(error.status);
            if (suggestion != null) {
                return core_packages_1.DocumentFactory.create(core_packages_1.PackageSourceTypes.Registry, request, error, [suggestion]);
            }
            // unexpected
            return Promise.reject(error);
        });
    }
    async createRemotePackageDocument(url, request, dotnetSpec) {
        const query = {};
        const headers = {};
        const packageUrl = core_clients_1.UrlHelpers.ensureEndSlash(url) + `${request.package.name}/index.json`;
        return this.client.request(core_clients_1.HttpClientRequestMethods.get, packageUrl, query, headers)
            .then(function (httpResponse) {
            const { data } = httpResponse;
            const source = core_packages_1.PackageSourceTypes.Registry;
            const { providerName } = request;
            const requested = request.package;
            const packageInfo = data;
            const response = {
                source: httpResponse.source,
                status: httpResponse.status,
            };
            // sanitize to semver only versions
            const rawVersions = core_packages_1.VersionHelpers.filterSemverVersions(packageInfo.versions);
            // seperate versions to releases and prereleases
            const { releases, prereleases } = core_packages_1.VersionHelpers.splitReleasesFromArray(rawVersions);
            // four segment is not supported
            if (dotnetSpec.spec && dotnetSpec.spec.hasFourSegments) {
                return core_packages_1.DocumentFactory.create(core_packages_1.PackageSourceTypes.Registry, request, httpResponse, []);
            }
            // no match if null type
            if (dotnetSpec.type === null) {
                return core_packages_1.DocumentFactory.createNoMatch(providerName, source, core_packages_1.PackageVersionTypes.Version, requested, core_packages_1.ResponseFactory.createResponseStatus(httpResponse.source, 404), 
                // suggest the latest release if available
                releases.length > 0 ? releases[releases.length - 1] : null);
            }
            const versionRange = dotnetSpec.resolvedVersion;
            const resolved = {
                name: requested.name,
                version: versionRange,
            };
            // analyse suggestions
            const suggestions = core_suggestions_1.SuggestionFactory.createSuggestions(versionRange, releases, prereleases);
            return {
                providerName,
                source,
                response,
                type: dotnetSpec.type,
                requested,
                resolved,
                suggestions,
            };
        });
    }
}
exports.NuGetPackageClient = NuGetPackageClient;


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/clients/nugetResourceClient.ts":
/*!********************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/clients/nugetResourceClient.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NuGetResourceClient = void 0;
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
class NuGetResourceClient {
    constructor(client, logger) {
        this.client = client;
        this.logger = logger;
    }
    async fetchResource(source) {
        const query = {};
        const headers = {};
        this.logger.debug("Requesting PackageBaseAddressService from %s", source.url);
        return await this.client.request(core_clients_1.HttpClientRequestMethods.get, source.url, query, headers)
            .then((response) => {
            const packageBaseAddressServices = response.data.resources
                .filter(res => res["@type"].indexOf('PackageBaseAddress') > -1);
            // just take one service for now
            const foundPackageBaseAddressServices = packageBaseAddressServices[0]["@id"];
            this.logger.debug("Resolved PackageBaseAddressService endpoint: %O", foundPackageBaseAddressServices);
            return foundPackageBaseAddressServices;
        })
            .catch((error) => {
            this.logger.error("Could not resolve nuget service index. %O", error);
            return "";
        });
    }
}
exports.NuGetResourceClient = NuGetResourceClient;


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/definitions/dotnet.ts":
/*!***********************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/definitions/dotnet.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/definitions/eDotNetContributions.ts":
/*!*************************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/definitions/eDotNetContributions.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotNetContributions = void 0;
var DotNetContributions;
(function (DotNetContributions) {
    DotNetContributions["Caching"] = "dotnet.caching";
    DotNetContributions["Http"] = "dotnet.http";
    DotNetContributions["Nuget"] = "dotnet.nuget";
    DotNetContributions["DependencyProperties"] = "dotnet.dependencyProperties";
    DotNetContributions["TagFilter"] = "dotnet.tagFilter";
})(DotNetContributions = exports.DotNetContributions || (exports.DotNetContributions = {}));


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/definitions/eNugetContributions.ts":
/*!************************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/definitions/eNugetContributions.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NugetContributions = void 0;
var NugetContributions;
(function (NugetContributions) {
    NugetContributions["Sources"] = "sources";
})(NugetContributions = exports.NugetContributions || (exports.NugetContributions = {}));


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/definitions/iNugetOptions.ts":
/*!******************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/definitions/iNugetOptions.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/definitions/nuget.ts":
/*!**********************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/definitions/nuget.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/dotnetConfig.ts":
/*!*****************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/dotnetConfig.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotNetConfig = void 0;
const core_providers_1 = __webpack_require__(/*! core.providers */ "./src/core.providers/index.ts");
const eDotNetContributions_1 = __webpack_require__(/*! ./definitions/eDotNetContributions */ "./src/infrastructure.providers/dotnet/src/definitions/eDotNetContributions.ts");
class DotNetConfig {
    constructor(config, dotnetCachingOpts, dotnetHttpOpts, nugetOpts) {
        this.providerName = 'dotnet';
        this.supports = [
            core_providers_1.ProviderSupport.Releases,
            core_providers_1.ProviderSupport.Prereleases,
        ];
        this.fileMatcher = {
            language: 'xml',
            scheme: 'file',
            pattern: '**/*.{csproj,fsproj,targets,props}',
        };
        this.config = config;
        this.caching = dotnetCachingOpts;
        this.http = dotnetHttpOpts;
        this.nuget = nugetOpts;
    }
    get dependencyProperties() {
        return this.config.get(eDotNetContributions_1.DotNetContributions.DependencyProperties);
    }
    get tagFilter() {
        return this.config.get(eDotNetContributions_1.DotNetContributions.TagFilter);
    }
    get fallbackNugetSource() {
        return 'https://api.nuget.org/v3/index.json';
    }
}
exports.DotNetConfig = DotNetConfig;


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/dotnetContainer.ts":
/*!********************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/dotnetContainer.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.configureContainer = void 0;
const awilix_1 = __webpack_require__(/*! awilix */ "awilix");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const infrastructure_clients_1 = __webpack_require__(/*! infrastructure.clients */ "./src/infrastructure.clients/index.ts");
const eDotNetContributions_1 = __webpack_require__(/*! ./definitions/eDotNetContributions */ "./src/infrastructure.providers/dotnet/src/definitions/eDotNetContributions.ts");
const nugetOptions_1 = __webpack_require__(/*! ./options/nugetOptions */ "./src/infrastructure.providers/dotnet/src/options/nugetOptions.ts");
const dotnetCli_1 = __webpack_require__(/*! ./clients/dotnetCli */ "./src/infrastructure.providers/dotnet/src/clients/dotnetCli.ts");
const nugetResourceClient_1 = __webpack_require__(/*! ./clients/nugetResourceClient */ "./src/infrastructure.providers/dotnet/src/clients/nugetResourceClient.ts");
const nugetPackageClient_1 = __webpack_require__(/*! ./clients/nugetPackageClient */ "./src/infrastructure.providers/dotnet/src/clients/nugetPackageClient.ts");
const dotnetSuggestionProvider_1 = __webpack_require__(/*! ./dotnetSuggestionProvider */ "./src/infrastructure.providers/dotnet/src/dotnetSuggestionProvider.ts");
const dotnetConfig_1 = __webpack_require__(/*! ./dotnetConfig */ "./src/infrastructure.providers/dotnet/src/dotnetConfig.ts");
function configureContainer(container) {
    const containerMap = {
        // options
        nugetOpts: awilix_1.asFunction(rootConfig => new nugetOptions_1.NugetOptions(rootConfig, eDotNetContributions_1.DotNetContributions.Nuget)).singleton(),
        dotnetCachingOpts: awilix_1.asFunction(rootConfig => new core_clients_1.CachingOptions(rootConfig, eDotNetContributions_1.DotNetContributions.Caching, 'caching')).singleton(),
        dotnetHttpOpts: awilix_1.asFunction(rootConfig => new core_clients_1.HttpOptions(rootConfig, eDotNetContributions_1.DotNetContributions.Http, 'http')).singleton(),
        // config
        dotnetConfig: awilix_1.asFunction((rootConfig, dotnetCachingOpts, dotnetHttpOpts, nugetOpts) => new dotnetConfig_1.DotNetConfig(rootConfig, dotnetCachingOpts, dotnetHttpOpts, nugetOpts)).singleton(),
        // cli
        dotnetProcess: awilix_1.asFunction((dotnetCachingOpts, logger) => infrastructure_clients_1.createProcessClient(dotnetCachingOpts, logger.child({ namespace: 'dotnet process' }))).singleton(),
        dotnetCli: awilix_1.asFunction((dotnetConfig, dotnetProcess, logger) => new dotnetCli_1.DotNetCli(dotnetConfig, dotnetProcess, logger.child({ namespace: 'dotnet cli' }))).singleton(),
        // clients
        dotnetJsonClient: awilix_1.asFunction((dotnetCachingOpts, dotnetHttpOpts, logger) => infrastructure_clients_1.createJsonClient({
            caching: dotnetCachingOpts,
            http: dotnetHttpOpts
        }, logger.child({ namespace: 'dotnet request' }))).singleton(),
        nugetClient: awilix_1.asFunction((dotnetConfig, dotnetJsonClient, logger) => new nugetPackageClient_1.NuGetPackageClient(dotnetConfig, dotnetJsonClient, logger.child({ namespace: 'dotnet client' }))).singleton(),
        nugetResClient: awilix_1.asFunction((dotnetJsonClient, logger) => new nugetResourceClient_1.NuGetResourceClient(dotnetJsonClient, logger.child({ namespace: 'dotnet resource service' }))).singleton(),
        // provider
        dotnetProvider: awilix_1.asFunction((dotnetCli, nugetClient, nugetResClient, logger) => new dotnetSuggestionProvider_1.DotNetSuggestionProvider(dotnetCli, nugetClient, nugetResClient, logger.child({ namespace: 'dotnet provider' }))).singleton(),
    };
    container.register(containerMap);
    return container.cradle.dotnetProvider;
}
exports.configureContainer = configureContainer;


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/dotnetSuggestionProvider.ts":
/*!*****************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/dotnetSuggestionProvider.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotNetSuggestionProvider = void 0;
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const dotnetXmlParserFactory_1 = __webpack_require__(/*! ./dotnetXmlParserFactory */ "./src/infrastructure.providers/dotnet/src/dotnetXmlParserFactory.ts");
class DotNetSuggestionProvider {
    constructor(dotnetCli, nugetClient, nugetResClient, logger) {
        this.dotnetClient = dotnetCli;
        this.nugetPackageClient = nugetClient;
        this.nugetResClient = nugetResClient;
        this.config = nugetClient.config;
        this.logger = logger;
        this.suggestionReplaceFn = core_suggestions_1.defaultReplaceFn;
    }
    parseDependencies(packageText) {
        const packageDependencies = dotnetXmlParserFactory_1.createDependenciesFromXml(packageText, this.config.dependencyProperties);
        return packageDependencies;
    }
    async fetchSuggestions(packagePath, packageDependencies) {
        // ensure latest nuget sources from settings
        this.config.nuget.defrost();
        // get each service index source from the dotnet cli
        const sources = await this.dotnetClient.fetchSources(packagePath);
        // remote sources only
        const remoteSources = sources.filter(s => s.protocol === core_clients_1.UrlHelpers.RegistryProtocols.https ||
            s.protocol === core_clients_1.UrlHelpers.RegistryProtocols.http);
        // resolve each service url
        const promised = remoteSources.map(async (remoteSource) => {
            return await this.nugetResClient.fetchResource(remoteSource);
        });
        const serviceUrls = (await Promise.all(promised))
            .filter(url => url.length > 0);
        if (serviceUrls.length === 0) {
            this.logger.error("Could not resolve any nuget service urls");
            return null;
        }
        const clientData = { serviceUrls: serviceUrls };
        return core_packages_1.RequestFactory.executeDependencyRequests(packagePath, this.nugetPackageClient, clientData, packageDependencies);
    }
}
exports.DotNetSuggestionProvider = DotNetSuggestionProvider;


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/dotnetUtils.ts":
/*!****************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/dotnetUtils.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildVersionSpec = exports.parseVersionSpec = exports.expandShortVersion = void 0;
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
function expandShortVersion(value) {
    if (!value ||
        value.indexOf('[') !== -1 ||
        value.indexOf('(') !== -1 ||
        value.indexOf(',') !== -1 ||
        value.indexOf(')') !== -1 ||
        value.indexOf(']') !== -1 ||
        value.indexOf('*') !== -1)
        return value;
    let dotCount = 0;
    for (let i = 0; i < value.length; i++) {
        const c = value[i];
        if (c === '.')
            dotCount++;
        else if (isNaN(parseInt(c)))
            return value;
    }
    let fmtValue = '';
    if (dotCount === 0)
        fmtValue = value + '.0.0';
    else if (dotCount === 1)
        fmtValue = value + '.0';
    else
        return value;
    return fmtValue;
}
exports.expandShortVersion = expandShortVersion;
function parseVersionSpec(rawVersion) {
    const spec = buildVersionSpec(rawVersion);
    let version;
    let isValidVersion = false;
    let isValidRange = false;
    if (spec && !spec.hasFourSegments) {
        // convert spec to semver
        const { valid, validRange } = __webpack_require__(/*! semver */ "semver");
        version = convertVersionSpecToString(spec);
        isValidVersion = valid(version, core_packages_1.VersionHelpers.loosePrereleases);
        isValidRange = !isValidVersion && validRange(version, core_packages_1.VersionHelpers.loosePrereleases) !== null;
    }
    const type = isValidVersion ?
        core_packages_1.PackageVersionTypes.Version :
        isValidRange ? core_packages_1.PackageVersionTypes.Range : null;
    const resolvedVersion = spec ? version : '';
    return {
        type,
        rawVersion,
        resolvedVersion,
        spec
    };
}
exports.parseVersionSpec = parseVersionSpec;
function buildVersionSpec(value) {
    let formattedValue = expandShortVersion(value.trim());
    if (!formattedValue)
        return null;
    // test if the version is in semver format
    const semver = __webpack_require__(/*! semver */ "semver");
    const parsedSemver = semver.parse(formattedValue, { includePrereleases: true });
    if (parsedSemver) {
        return {
            version: formattedValue,
            isMinInclusive: true,
            isMaxInclusive: true,
            hasFourSegments: false,
        };
    }
    try {
        // test if the version is a semver range format
        const parsedNodeRange = semver.validRange(formattedValue, { includePrereleases: true });
        if (parsedNodeRange) {
            return {
                version: parsedNodeRange,
                isMinInclusive: true,
                isMaxInclusive: true,
                hasFourSegments: false,
            };
        }
    }
    catch { }
    // fail if the string is too short
    if (formattedValue.length < 3)
        return null;
    const versionSpec = {};
    // first character must be [ or (
    const first = formattedValue[0];
    if (first === '[')
        versionSpec.isMinInclusive = true;
    else if (first === '(')
        versionSpec.isMinInclusive = false;
    else if (core_packages_1.VersionHelpers.isFourSegmentedVersion(formattedValue))
        return { hasFourSegments: true };
    else
        return null;
    // last character must be ] or )
    const last = formattedValue[formattedValue.length - 1];
    if (last === ']')
        versionSpec.isMaxInclusive = true;
    else if (last === ')')
        versionSpec.isMaxInclusive = false;
    // remove any [] or ()
    formattedValue = formattedValue.substr(1, formattedValue.length - 2);
    // split by comma
    const parts = formattedValue.split(',');
    // more than 2 is invalid
    if (parts.length > 2)
        return null;
    else if (parts.every(x => !x))
        // must be (,]
        return null;
    // if only one entry then use it for both min and max
    const minVersion = parts[0];
    const maxVersion = (parts.length == 2) ? parts[1] : parts[0];
    // parse the min version
    if (minVersion) {
        const parsedVersion = buildVersionSpec(minVersion);
        if (!parsedVersion)
            return null;
        versionSpec.minVersionSpec = parsedVersion;
        versionSpec.hasFourSegments = parsedVersion.hasFourSegments;
    }
    // parse the max version
    if (maxVersion) {
        const parsedVersion = buildVersionSpec(maxVersion);
        if (!parsedVersion)
            return null;
        versionSpec.maxVersionSpec = parsedVersion;
        versionSpec.hasFourSegments = parsedVersion.hasFourSegments;
    }
    return versionSpec;
}
exports.buildVersionSpec = buildVersionSpec;
function convertVersionSpecToString(versionSpec) {
    // x.x.x cases
    if (versionSpec.version
        && versionSpec.isMinInclusive
        && versionSpec.isMaxInclusive)
        return versionSpec.version;
    // [x.x.x] cases
    if (versionSpec.minVersionSpec
        && versionSpec.maxVersionSpec
        && versionSpec.minVersionSpec.version === versionSpec.maxVersionSpec.version
        && versionSpec.isMinInclusive
        && versionSpec.isMaxInclusive)
        return versionSpec.minVersionSpec.version;
    let rangeBuilder = '';
    if (versionSpec.minVersionSpec) {
        rangeBuilder += '>';
        if (versionSpec.isMinInclusive)
            rangeBuilder += '=';
        rangeBuilder += versionSpec.minVersionSpec.version;
    }
    if (versionSpec.maxVersionSpec) {
        rangeBuilder += rangeBuilder.length > 0 ? ' ' : '';
        rangeBuilder += '<';
        if (versionSpec.isMaxInclusive)
            rangeBuilder += '=';
        rangeBuilder += versionSpec.maxVersionSpec.version;
    }
    return rangeBuilder;
}


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/dotnetXmlParserFactory.ts":
/*!***************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/dotnetXmlParserFactory.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDependenciesFromXml = void 0;
function createDependenciesFromXml(xml, includePropertyNames) {
    const xmldoc = __webpack_require__(/*! xmldoc */ "xmldoc");
    let document = null;
    try {
        document = new xmldoc.XmlDocument(xml);
    }
    catch {
        document = null;
    }
    if (!document)
        return [];
    return extractPackageLensDataFromNodes(document, xml, includePropertyNames);
}
exports.createDependenciesFromXml = createDependenciesFromXml;
function extractPackageLensDataFromNodes(topLevelNodes, xml, includePropertyNames) {
    const collector = [];
    topLevelNodes.eachChild(function (node) {
        if (node.name !== "ItemGroup")
            return;
        node.eachChild(function (itemGroupNode) {
            if (includePropertyNames.includes(itemGroupNode.name) == false)
                return;
            const dependencyLens = createFromAttribute(itemGroupNode, xml);
            if (dependencyLens)
                collector.push(dependencyLens);
        });
    });
    return collector;
}
function createFromAttribute(node, xml) {
    const nameRange = {
        start: node.startTagPosition,
        end: node.startTagPosition,
    };
    // xmldoc doesn't report attribute ranges so this gets them manually
    const versionRange = getAttributeRange(node, ' version="', xml);
    if (versionRange === null)
        return null;
    const packageInfo = {
        name: node.attr.Include || node.attr.Update,
        version: node.attr.Version,
    };
    return {
        nameRange,
        versionRange,
        packageInfo,
    };
}
function getAttributeRange(node, attributeName, xml) {
    const lineText = xml.substring(node.startTagPosition, node.position);
    let start = lineText.toLowerCase().indexOf(attributeName);
    if (start === -1)
        return null;
    start += attributeName.length;
    const end = lineText.indexOf('"', start);
    return {
        start: node.startTagPosition + start,
        end: node.startTagPosition + end,
    };
}


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/src/options/nugetOptions.ts":
/*!*************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/src/options/nugetOptions.ts ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NugetOptions = void 0;
const core_configuration_1 = __webpack_require__(/*! core.configuration */ "./src/core.configuration/index.ts");
const eNugetContributions_1 = __webpack_require__(/*! ../definitions/eNugetContributions */ "./src/infrastructure.providers/dotnet/src/definitions/eNugetContributions.ts");
class NugetOptions extends core_configuration_1.Options {
    constructor(config, section) {
        super(config, section);
    }
    get sources() {
        return this.get(eNugetContributions_1.NugetContributions.Sources);
    }
}
exports.NugetOptions = NugetOptions;


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/test/clients/dotnetClient.tests.ts":
/*!********************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/test/clients/dotnetClient.tests.ts ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DotnetClientRequestTests = void 0;
const dotnetSources_1 = __webpack_require__(/*! ./fixtures/dotnetSources */ "./src/infrastructure.providers/dotnet/test/clients/fixtures/dotnetSources.ts");
const test_core_logging_1 = __webpack_require__(/*! test.core.logging */ "./src/core.logging/index.test.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const infrastructure_providers_dotnet_1 = __webpack_require__(/*! infrastructure.providers.dotnet */ "./src/infrastructure.providers/dotnet/index.ts");
const infrastructure_clients_1 = __webpack_require__(/*! infrastructure.clients */ "./src/infrastructure.clients/index.ts");
const { mock, instance, when, anything } = __webpack_require__(/*! ts-mockito */ "ts-mockito");
const assert = __webpack_require__(/*! assert */ "assert");
let cacheOptsMock;
let httpOptsMock;
let nugetOptsMock;
let configMock;
let loggerMock;
let clientMock;
exports.DotnetClientRequestTests = {
    beforeEach: () => {
        cacheOptsMock = mock(core_clients_1.CachingOptions);
        httpOptsMock = mock(core_clients_1.HttpOptions);
        nugetOptsMock = mock(infrastructure_providers_dotnet_1.NugetOptions);
        configMock = mock(infrastructure_providers_dotnet_1.DotNetConfig);
        loggerMock = mock(test_core_logging_1.LoggerStub);
        clientMock = mock(infrastructure_clients_1.ProcessClient);
        when(configMock.caching).thenReturn(instance(cacheOptsMock));
        when(configMock.http).thenReturn(instance(httpOptsMock));
        when(configMock.nuget).thenReturn(instance(nugetOptsMock));
    },
    "fetchSources": {
        "returns an Array<DotNetSource> of enabled sources": async () => {
            const testFeeds = [
                'https://test.feed/v3/index.json',
            ];
            const expected = [
                {
                    enabled: true,
                    machineWide: false,
                    url: testFeeds[0],
                    protocol: core_clients_1.UrlHelpers.RegistryProtocols.https
                },
                {
                    enabled: true,
                    machineWide: false,
                    url: 'https://api.nuget.org/v3/index.json',
                    protocol: core_clients_1.UrlHelpers.RegistryProtocols.https
                },
                {
                    enabled: true,
                    machineWide: false,
                    url: 'http://non-ssl/v3/index.json',
                    protocol: core_clients_1.UrlHelpers.RegistryProtocols.http
                },
                {
                    enabled: true,
                    machineWide: true,
                    url: 'C:\\Program Files (x86)\\Microsoft SDKs\\NuGetPackages\\',
                    protocol: core_clients_1.UrlHelpers.RegistryProtocols.file
                },
            ];
            when(clientMock.request(anything(), anything(), anything()))
                .thenResolve({
                data: dotnetSources_1.default.enabledSources
            });
            when(nugetOptsMock.sources).thenReturn(testFeeds);
            const cut = new infrastructure_providers_dotnet_1.DotNetCli(instance(configMock), instance(clientMock), instance(loggerMock));
            return cut.fetchSources('.')
                .then(actualSources => {
                assert.deepEqual(actualSources, expected);
            });
        },
        "return 0 items when no sources are enabled": async () => {
            const testFeeds = [];
            when(clientMock.request(anything(), anything(), anything())).thenResolve({
                data: dotnetSources_1.default.disabledSource
            });
            when(nugetOptsMock.sources).thenReturn(testFeeds);
            const cut = new infrastructure_providers_dotnet_1.DotNetCli(instance(configMock), instance(clientMock), instance(loggerMock));
            return cut.fetchSources('.')
                .then(actualSources => {
                assert.equal(actualSources.length, 0);
            });
        },
        "returns only enabled sources when some sources are disabled": async () => {
            const expected = [
                {
                    enabled: true,
                    machineWide: false,
                    url: 'https://api.nuget.org/v3/index.json',
                    protocol: core_clients_1.UrlHelpers.RegistryProtocols.https
                },
            ];
            when(clientMock.request(anything(), anything(), anything())).thenResolve({
                data: dotnetSources_1.default.enabledAndDisabledSources
            });
            when(nugetOptsMock.sources).thenReturn([]);
            const cut = new infrastructure_providers_dotnet_1.DotNetCli(instance(configMock), instance(clientMock), instance(loggerMock));
            return cut.fetchSources('.')
                .then(actualSources => {
                assert.deepEqual(actualSources, expected);
            });
        },
        "returns fallback url on error": async () => {
            const expectedFallbackNugetSource = 'http://fallbackurl.test.net';
            when(clientMock.request(anything(), anything(), anything())).thenReject({
                data: dotnetSources_1.default.invalidSources
            });
            when(configMock.fallbackNugetSource).thenReturn(expectedFallbackNugetSource);
            const cut = new infrastructure_providers_dotnet_1.DotNetCli(instance(configMock), instance(clientMock), instance(loggerMock));
            const expectedErrorResp = {
                enabled: true,
                machineWide: false,
                protocol: 'https:',
                url: expectedFallbackNugetSource,
            };
            return cut.fetchSources('.')
                .then(actual => {
                assert.deepEqual(actual, [expectedErrorResp]);
            });
        },
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/test/clients/fixtures/dotnetSources.ts":
/*!************************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/test/clients/fixtures/dotnetSources.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    enabledSources: `E https://api.nuget.org/v3/index.json
E http://non-ssl/v3/index.json
EM C:\\Program Files (x86)\\Microsoft SDKs\\NuGetPackages\\`,
    disabledSource: `D https://api.nuget.org/v3/index.json`,
    enabledAndDisabledSources: `D http://non-ssl/v3/index.json
E https://api.nuget.org/v3/index.json`,
    invalidSources: 'error: invalid value'
};


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/test/clients/fixtures/nugetResources.ts":
/*!*************************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/test/clients/fixtures/nugetResources.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    success: {
        "resources": [
            {
                "@id": "https://unit-test-search-ussc.nuget.org/query",
                "@type": "SearchQueryService",
            },
            {
                "@id": "https://api.nuget.org/v3-flatcontainer1/",
                "@type": "PackageBaseAddress",
            },
            {
                "@id": "https://api.nuget.org/v3-flatcontainer2/",
                "@type": "PackageBaseAddress/3.0.0",
            },
            {
                "@id": "https://unit-test-usnc.nuget.org/",
                "@type": "SearchGalleryQueryService/3.0.0-rc",
            }
        ]
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/test/clients/nugetResourceClient.tests.ts":
/*!***************************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/test/clients/nugetResourceClient.tests.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NuGetResourceClientTests = void 0;
const test_core_logging_1 = __webpack_require__(/*! test.core.logging */ "./src/core.logging/index.test.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const infrastructure_providers_dotnet_1 = __webpack_require__(/*! infrastructure.providers.dotnet */ "./src/infrastructure.providers/dotnet/index.ts");
const nugetResources_1 = __webpack_require__(/*! ./fixtures/nugetResources */ "./src/infrastructure.providers/dotnet/test/clients/fixtures/nugetResources.ts");
const assert = __webpack_require__(/*! assert */ "assert");
const { mock, instance, when, anything, capture } = __webpack_require__(/*! ts-mockito */ "ts-mockito");
let jsonClientMock;
let loggerMock;
exports.NuGetResourceClientTests = {
    beforeEach: () => {
        jsonClientMock = mock(core_clients_1.JsonHttpClient);
        loggerMock = mock(test_core_logging_1.LoggerStub);
    },
    "fetchResource": {
        "returns the package resource from a list of resources": async () => {
            const testSource = {
                enabled: true,
                machineWide: false,
                url: 'https://test',
                protocol: core_clients_1.UrlHelpers.RegistryProtocols.https
            };
            const mockResponse = {
                status: 200,
                data: nugetResources_1.default.success,
            };
            const expected = 'https://api.nuget.org/v3-flatcontainer1/';
            when(jsonClientMock.request(anything(), anything(), anything(), anything()))
                .thenResolve(mockResponse);
            const cut = new infrastructure_providers_dotnet_1.NuGetResourceClient(instance(jsonClientMock), instance(loggerMock));
            return cut.fetchResource(testSource)
                .then(actualSources => {
                assert.equal(actualSources, expected);
                const [actualMethod, actualUrl] = capture(jsonClientMock.request).first();
                assert.equal(actualMethod, core_clients_1.HttpClientRequestMethods.get);
                assert.equal(actualUrl, testSource.url);
            });
        },
        "returns empty when the resource cannot be obtained": async () => {
            const testSource = {
                enabled: true,
                machineWide: false,
                url: 'https://test',
                protocol: core_clients_1.UrlHelpers.RegistryProtocols.https
            };
            const errorResponse = {
                source: 'remote',
                status: 404,
                data: 'an error occurred',
                rejected: true
            };
            const expectedUrl = "";
            when(jsonClientMock.request(anything(), anything(), anything(), anything()))
                .thenReject(errorResponse);
            const cut = new infrastructure_providers_dotnet_1.NuGetResourceClient(instance(jsonClientMock), instance(loggerMock));
            await cut.fetchResource(testSource)
                .then(actualUrl => {
                assert.equal(actualUrl, expectedUrl);
            })
                .catch(err => {
                assert.fail();
            });
        },
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/test/dotnetUtils/parseVersionSpec.tests.ts":
/*!****************************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/test/dotnetUtils/parseVersionSpec.tests.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_providers_dotnet_1 = __webpack_require__(/*! infrastructure.providers.dotnet */ "./src/infrastructure.providers/dotnet/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
exports.default = {
    'converts basic nuget ranges to node ranges': () => {
        const expectedList = [
            // basic
            "1.0.0", "1.0.0",
            "(1.0.0,)", ">1.0.0",
            "[1.0.0]", "1.0.0",
            "(,1.0.0]", "<=1.0.0",
            "[1.0.0,2.0.0]", ">=1.0.0 <=2.0.0",
            "(1.0.0,2.0.0)", ">1.0.0 <2.0.0",
            "[1.0.0,2.0.0)", ">=1.0.0 <2.0.0"
        ];
        for (let i = 0; i < expectedList.length; i += 2) {
            const test = expectedList[i];
            const expected = expectedList[i + 1];
            const specTest = infrastructure_providers_dotnet_1.parseVersionSpec(test);
            assert.equal(specTest.resolvedVersion, expected, "nuget range did not convert to node range at " + i);
        }
    },
    'converts partial nuget ranges to node ranges': () => {
        const expectedList = [
            "1", "1.0.0",
            "1.0", "1.0.0",
            "[1,2]", ">=1.0.0 <=2.0.0",
            "(1,2)", ">1.0.0 <2.0.0",
        ];
        for (let i = 0; i < expectedList.length; i += 2) {
            const test = expectedList[i];
            const expected = expectedList[i + 1];
            const specTest = infrastructure_providers_dotnet_1.parseVersionSpec(test);
            assert.equal(specTest.resolvedVersion, expected, `nuget range did not convert ${expected} to ${specTest.resolvedVersion} at ${i}`);
        }
    },
    'returns null for invalid ranges': () => {
        const results = [
            infrastructure_providers_dotnet_1.parseVersionSpec("1.").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("1.0.").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("s.2.0").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("beta").spec,
        ];
        results.forEach(x => {
            assert.ok(!x, "Should not parse range");
        });
    },
    'handles floating ranges': () => {
        const expectedList = [
            "1.*", ">=1.0.0 <2.0.0-0",
            "1.0.*", ">=1.0.0 <1.1.0-0"
        ];
        for (let i = 0; i < expectedList.length; i += 2) {
            const test = expectedList[i];
            const expected = expectedList[i + 1];
            const specTest = infrastructure_providers_dotnet_1.parseVersionSpec(test);
            assert.equal(specTest.resolvedVersion, expected, `nuget floating range did not convert ${expected} to ${specTest.resolvedVersion} at ${i}`);
        }
    },
    'No nulls from valid notations': () => {
        // spec https://docs.microsoft.com/en-us/nuget/create-packages/dependency-versions#version-ranges
        const results = [
            infrastructure_providers_dotnet_1.parseVersionSpec("1.0.0").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("(1.0.0,)").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("[1.0.0]").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("(,1.0.0]").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("(,1.0.0)").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("[1.0.0,2.0.0]").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("(1.0.0,2.0.0)").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("[1.0.0,2.0.0)").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("(1.0.0)").spec // should be null though
        ];
        results.forEach(x => {
            assert.ok(!!x, "Could not parse range");
        });
    },
    'returns nulls from invalid notations': () => {
        const results = [
            infrastructure_providers_dotnet_1.parseVersionSpec("1.").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("1.0.").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("s.2.0").spec,
            infrastructure_providers_dotnet_1.parseVersionSpec("beta").spec
        ];
        results.forEach(x => {
            assert.ok(!x, "Could not parse range");
        });
    },
    'returns true for four segment versions': () => {
        const results = [
            infrastructure_providers_dotnet_1.parseVersionSpec("1.0.0.1").spec,
        ];
        results.forEach(x => {
            assert.ok(x.hasFourSegments);
        });
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/test/dotnetXmlParserFactory/createDependenciesFromXml.fixtures.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/test/dotnetXmlParserFactory/createDependenciesFromXml.fixtures.ts ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "createDependenciesFromXml": {
        "test": `
    <Project>
    <ItemGroup>
        <PackageReference Include="Microsoft.Extensions.DependencyInjection.Abstractions" Version="2.0.0" />
        <PackageReference Include="Microsoft.Extensions.Logging.Abstractions" Version="2.0.1" />
    </ItemGroup>
</Project>
`,
        "expected": [
            {
                "nameRange": {
                    "start": 35,
                    "end": 35
                },
                "versionRange": {
                    "start": 130,
                    "end": 34
                },
                "packageInfo": {
                    "name": "Microsoft.Extensions.DependencyInjection.Abstractions",
                    "version": "2.0.0"
                }
            },
            {
                "nameRange": {
                    "start": 144,
                    "end": 144
                },
                "versionRange": {
                    "start": 227,
                    "end": 143
                },
                "packageInfo": {
                    "name": "Microsoft.Extensions.Logging.Abstractions",
                    "version": "2.0.1"
                }
            }
        ]
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/dotnet/test/dotnetXmlParserFactory/createDependenciesFromXml.tests.ts":
/*!************************************************************************************************************!*\
  !*** ./src/infrastructure.providers/dotnet/test/dotnetXmlParserFactory/createDependenciesFromXml.tests.ts ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_providers_dotnet_1 = __webpack_require__(/*! infrastructure.providers.dotnet */ "./src/infrastructure.providers/dotnet/index.ts");
const createDependenciesFromXml_fixtures_1 = __webpack_require__(/*! ./createDependenciesFromXml.fixtures */ "./src/infrastructure.providers/dotnet/test/dotnetXmlParserFactory/createDependenciesFromXml.fixtures.ts");
const assert = __webpack_require__(/*! assert */ "assert");
exports.default = {
    "returns empty when no matches found": () => {
        const includeNames = [];
        const results = infrastructure_providers_dotnet_1.createDependenciesFromXml('', includeNames);
        assert.equal(results.length, 0);
    },
    "returns empty when no dependency entry names match": () => {
        const includeNames = ["non-dependencies"];
        const results = infrastructure_providers_dotnet_1.createDependenciesFromXml(createDependenciesFromXml_fixtures_1.default.createDependenciesFromXml.test, includeNames);
        assert.equal(results.length, 0);
    },
    "extracts dependency entries from dotnet xml": () => {
        const includeNames = ["PackageReference"];
        const results = infrastructure_providers_dotnet_1.createDependenciesFromXml(createDependenciesFromXml_fixtures_1.default.createDependenciesFromXml.test, includeNames);
        assert.deepEqual(results, createDependenciesFromXml_fixtures_1.default.createDependenciesFromXml.expected);
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/npm/index.test.ts":
/*!********************************************************!*\
  !*** ./src/infrastructure.providers/npm/index.test.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmVersionUtilsTests = exports.NpmPackageClientTests = exports.GitHubClientTests = exports.PacoteApiClientTests = void 0;
// pacoteClientApi tests
const PacoteApiClient = __webpack_require__(/*! ./test/pacoteClient/pacoteClient.tests */ "./src/infrastructure.providers/npm/test/pacoteClient/pacoteClient.tests.ts");
const PacoteNpmRc = __webpack_require__(/*! ./test/pacoteClient/npmrc.tests */ "./src/infrastructure.providers/npm/test/pacoteClient/npmrc.tests.ts");
exports.PacoteApiClientTests = {
    PacoteApiClient,
    PacoteNpmRc,
};
const fetchGitHub = __webpack_require__(/*! ./test/githubClient/fetchGitHub.tests */ "./src/infrastructure.providers/npm/test/githubClient/fetchGitHub.tests.ts");
exports.GitHubClientTests = {
    fetchGitHub,
};
const fetchRegistry = __webpack_require__(/*! ./test/npmPackageClient/fetchRegistry.tests */ "./src/infrastructure.providers/npm/test/npmPackageClient/fetchRegistry.tests.ts");
const fetchDirectory = __webpack_require__(/*! ./test/npmPackageClient/fetchDirectory.tests */ "./src/infrastructure.providers/npm/test/npmPackageClient/fetchDirectory.tests.ts");
const fetchGit = __webpack_require__(/*! ./test/npmPackageClient/fetchGit.tests */ "./src/infrastructure.providers/npm/test/npmPackageClient/fetchGit.tests.ts");
exports.NpmPackageClientTests = {
    fetchRegistry,
    fetchDirectory,
    fetchGit
};
const replaceGitVersion = __webpack_require__(/*! ./test/npmVersionUtils/replaceGitVersion.tests */ "./src/infrastructure.providers/npm/test/npmVersionUtils/replaceGitVersion.tests.ts");
exports.NpmVersionUtilsTests = {
    replaceGitVersion,
};


/***/ }),

/***/ "./src/infrastructure.providers/npm/index.ts":
/*!***************************************************!*\
  !*** ./src/infrastructure.providers/npm/index.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./src/definitions/eNpmContributions */ "./src/infrastructure.providers/npm/src/definitions/eNpmContributions.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/definitions/iPacote */ "./src/infrastructure.providers/npm/src/definitions/iPacote.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/clients/githubClient */ "./src/infrastructure.providers/npm/src/clients/githubClient.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/clients/npmPackageClient */ "./src/infrastructure.providers/npm/src/clients/npmPackageClient.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/clients/pacoteClient */ "./src/infrastructure.providers/npm/src/clients/pacoteClient.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/factories/packageFactory */ "./src/infrastructure.providers/npm/src/factories/packageFactory.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/models/npaSpec */ "./src/infrastructure.providers/npm/src/models/npaSpec.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/options/githubOptions */ "./src/infrastructure.providers/npm/src/options/githubOptions.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/npmConfig */ "./src/infrastructure.providers/npm/src/npmConfig.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/npmSuggestionProvider */ "./src/infrastructure.providers/npm/src/npmSuggestionProvider.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/npmUtils */ "./src/infrastructure.providers/npm/src/npmUtils.ts"), exports);
__exportStar(__webpack_require__(/*! ./src/npmContainer */ "./src/infrastructure.providers/npm/src/npmContainer.ts"), exports);


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/clients/githubClient.ts":
/*!**********************************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/clients/githubClient.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubClient = void 0;
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const defaultHeaders = {
    accept: 'application\/vnd.github.v3+json',
    'user-agent': 'vscode-contrib/vscode-versionlens'
};
class GitHubClient {
    constructor(config, client, logger) {
        this.config = config;
        this.client = client;
        this.logger = logger;
    }
    fetchGithub(request, npaSpec) {
        const { validRange } = __webpack_require__(/*! semver */ "semver");
        if (npaSpec.gitRange) {
            // we have a semver:x.x.x
            return this.fetchTags(request, npaSpec);
        }
        if (validRange(npaSpec.gitCommittish, core_packages_1.VersionHelpers.loosePrereleases)) {
            // we have a #x.x.x
            npaSpec.gitRange = npaSpec.gitCommittish;
            return this.fetchTags(request, npaSpec);
        }
        // we have a #commit
        return this.fetchCommits(request, npaSpec);
    }
    fetchTags(request, npaSpec) {
        // todo pass in auth
        const { user, project } = npaSpec.hosted;
        const tagsRepoUrl = `https://api.github.com/repos/${user}/${project}/tags`;
        const query = {};
        const headers = this.getHeaders();
        return this.client.request(core_clients_1.HttpClientRequestMethods.get, tagsRepoUrl, query, headers)
            .then(function (response) {
            const { compareLoose } = __webpack_require__(/*! semver */ "semver");
            // extract versions
            const tags = response.data;
            const rawVersions = tags.map((tag) => tag.name);
            const allVersions = core_packages_1.VersionHelpers.filterSemverVersions(rawVersions).sort(compareLoose);
            const source = core_packages_1.PackageSourceTypes.Github;
            const { providerName } = request;
            const requested = request.package;
            const type = npaSpec.gitRange ?
                core_packages_1.PackageVersionTypes.Range :
                core_packages_1.PackageVersionTypes.Version;
            const versionRange = npaSpec.gitRange;
            const resolved = {
                name: project,
                version: versionRange,
            };
            // seperate versions to releases and prereleases
            const { releases, prereleases } = core_packages_1.VersionHelpers.splitReleasesFromArray(allVersions);
            // analyse suggestions
            const suggestions = core_suggestions_1.SuggestionFactory.createSuggestions(versionRange, releases, prereleases);
            return {
                providerName,
                source,
                response,
                type,
                requested,
                resolved,
                suggestions
            };
        });
    }
    fetchCommits(request, npaSpec) {
        // todo pass in auth
        const { user, project } = npaSpec.hosted;
        const commitsRepoUrl = `https://api.github.com/repos/${user}/${project}/commits`;
        const query = {};
        const headers = this.getHeaders();
        return this.client.request(core_clients_1.HttpClientRequestMethods.get, commitsRepoUrl, query, headers)
            .then((response) => {
            const commitInfos = response.data;
            const commits = commitInfos.map((commit) => commit.sha);
            const source = core_packages_1.PackageSourceTypes.Github;
            const { providerName } = request;
            const requested = request.package;
            const type = core_packages_1.PackageVersionTypes.Committish;
            const versionRange = npaSpec.gitCommittish;
            if (commits.length === 0) {
                // no commits found
                return core_packages_1.DocumentFactory.create(core_packages_1.PackageSourceTypes.Github, request, response, [core_suggestions_1.SuggestionFactory.createNotFound()]);
            }
            const commitIndex = commits.findIndex(commit => commit.indexOf(versionRange) > -1);
            const latestCommit = commits[commits.length - 1].substr(0, 8);
            const noMatch = commitIndex === -1;
            const isLatest = versionRange === latestCommit;
            const resolved = {
                name: project,
                version: versionRange,
            };
            const suggestions = [];
            if (noMatch) {
                suggestions.push(core_suggestions_1.SuggestionFactory.createNoMatch(), core_suggestions_1.SuggestionFactory.createLatest(latestCommit));
            }
            else if (isLatest) {
                suggestions.push(core_suggestions_1.SuggestionFactory.createMatchesLatest(versionRange));
            }
            else if (commitIndex > 0) {
                suggestions.push(core_suggestions_1.SuggestionFactory.createFixedStatus(versionRange), core_suggestions_1.SuggestionFactory.createLatest(latestCommit));
            }
            return {
                providerName,
                source,
                response,
                type,
                requested,
                resolved,
                suggestions,
                gitSpec: npaSpec.saveSpec
            };
        });
    }
    getHeaders() {
        const userHeaders = {};
        if (this.config.github.accessToken && this.config.github.accessToken.length > 0) {
            userHeaders.authorization = `token ${this.config.github.accessToken}`;
        }
        return Object.assign({}, userHeaders, defaultHeaders);
    }
}
exports.GitHubClient = GitHubClient;


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/clients/npmPackageClient.ts":
/*!**************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/clients/npmPackageClient.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmPackageClient = void 0;
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const PackageFactory = __webpack_require__(/*! ../factories/packageFactory */ "./src/infrastructure.providers/npm/src/factories/packageFactory.ts");
const npaSpec_1 = __webpack_require__(/*! ../models/npaSpec */ "./src/infrastructure.providers/npm/src/models/npaSpec.ts");
const NpmUtils = __webpack_require__(/*! ../npmUtils */ "./src/infrastructure.providers/npm/src/npmUtils.ts");
class NpmPackageClient {
    constructor(config, pacoteClient, githubClient, logger) {
        this.config = config;
        this.pacoteClient = pacoteClient;
        this.githubClient = githubClient;
        this.logger = logger;
    }
    async fetchPackage(request) {
        const npa = __webpack_require__(/*! npm-package-arg */ "npm-package-arg");
        let source;
        return new Promise((resolve, reject) => {
            let npaSpec;
            // try parse the package
            try {
                npaSpec = npa.resolve(request.package.name, request.package.version, request.package.path);
            }
            catch (error) {
                return reject(NpmUtils.convertNpmErrorToResponse(error, core_clients_1.ClientResponseSource.local));
            }
            // return if directory or file document
            if (npaSpec.type === npaSpec_1.NpaTypes.Directory || npaSpec.type === npaSpec_1.NpaTypes.File) {
                source = core_packages_1.PackageSourceTypes.Directory;
                return resolve(PackageFactory.createDirectory(request.providerName, request.package, core_packages_1.ResponseFactory.createResponseStatus(core_clients_1.ClientResponseSource.local, 200), npaSpec));
            }
            if (npaSpec.type === npaSpec_1.NpaTypes.Git) {
                source = core_packages_1.PackageSourceTypes.Git;
                if (!npaSpec.hosted) {
                    // could not resolve
                    return reject({
                        status: 'EUNSUPPORTEDPROTOCOL',
                        data: 'Git url could not be resolved',
                        source: core_clients_1.ClientResponseSource.local
                    });
                }
                if (!npaSpec.gitCommittish && npaSpec.hosted.default !== 'shortcut') {
                    return resolve(core_packages_1.DocumentFactory.createFixed(request.providerName, core_packages_1.PackageSourceTypes.Git, request.package, core_packages_1.ResponseFactory.createResponseStatus(core_clients_1.ClientResponseSource.local, 0), core_packages_1.PackageVersionTypes.Committish, 'git repository'));
                }
                // resolve tags, committishes
                source = core_packages_1.PackageSourceTypes.Github;
                return resolve(this.githubClient.fetchGithub(request, npaSpec));
            }
            // otherwise return registry result
            source = core_packages_1.PackageSourceTypes.Registry;
            return resolve(this.pacoteClient.fetchPackage(request, npaSpec));
        }).catch(response => {
            this.logger.debug("Caught exception from %s: %O", source, response);
            if (!response.data) {
                response = NpmUtils.convertNpmErrorToResponse(response, core_clients_1.ClientResponseSource.remote);
            }
            const status = response.status &&
                !Number.isInteger(response.status) &&
                response.status.startsWith('E') ?
                response.status.substr(1) :
                response.status;
            let suggestions;
            if (status == 'CONNREFUSED')
                suggestions = [core_suggestions_1.SuggestionFactory.createConnectionRefused()];
            else if (status == 'UNSUPPORTEDPROTOCOL' || response.data == 'Not implemented yet')
                suggestions = [core_suggestions_1.SuggestionFactory.createNotSupported()];
            else if (status == 'INVALIDTAGNAME' || response.data.includes('Invalid comparator:'))
                suggestions = [
                    core_suggestions_1.SuggestionFactory.createInvalid(''),
                    core_suggestions_1.SuggestionFactory.createLatest()
                ];
            else if (status == 128)
                suggestions = [core_suggestions_1.SuggestionFactory.createNotFound()];
            else
                suggestions = [core_suggestions_1.SuggestionFactory.createFromHttpStatus(status)];
            if (suggestions === null)
                return Promise.reject(response);
            return core_packages_1.DocumentFactory.create(source, request, core_packages_1.ResponseFactory.createResponseStatus(response.source, response.status), suggestions);
        });
    }
}
exports.NpmPackageClient = NpmPackageClient;


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/clients/pacoteClient.ts":
/*!**********************************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/clients/pacoteClient.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PacoteClient = void 0;
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const npaSpec_1 = __webpack_require__(/*! ../models/npaSpec */ "./src/infrastructure.providers/npm/src/models/npaSpec.ts");
const NpmUtils = __webpack_require__(/*! ../npmUtils */ "./src/infrastructure.providers/npm/src/npmUtils.ts");
class PacoteClient extends core_clients_1.AbstractCachedRequest {
    constructor(config, logger) {
        super(config.caching);
        this.config = config;
        this.logger = logger;
        this.pacote = __webpack_require__(/*! pacote */ "pacote");
        this.libnpmconfig = __webpack_require__(/*! libnpmconfig */ "libnpmconfig");
    }
    async fetchPackage(request, npaSpec) {
        const cacheKey = `${request.package.name}@${request.package.version}_${request.package.path}`;
        if (this.cache.cachingOpts.duration > 0 && this.cache.hasExpired(cacheKey) === false) {
            this.logger.debug("Fetching from cache using key: %s", cacheKey);
            const cachedResp = this.cache.get(cacheKey);
            if (cachedResp.rejected)
                return Promise.reject(cachedResp);
            cachedResp.data.response.source = core_clients_1.ClientResponseSource.cache;
            return Promise.resolve(cachedResp.data);
        }
        // get npm config
        const npmOpts = this.libnpmconfig.read({
            where: request.package.path,
            fullMetadata: false,
            retry: {
                retries: 0
            }
        }, {
            cwd: request.package.path,
        });
        return this.pacote.packument(npaSpec, npmOpts)
            .then(function (packumentResponse) {
            const { compareLoose } = __webpack_require__(/*! semver */ "semver");
            const { providerName } = request;
            const source = core_packages_1.PackageSourceTypes.Registry;
            const type = npaSpec.type;
            let versionRange = (type === core_packages_1.PackageVersionTypes.Alias) ?
                npaSpec.subSpec.rawSpec :
                npaSpec.rawSpec;
            const resolved = {
                name: (type === core_packages_1.PackageVersionTypes.Alias) ?
                    npaSpec.subSpec.name :
                    npaSpec.name,
                version: versionRange,
            };
            // extract raw versions and sort
            const rawVersions = Object.keys(packumentResponse.versions || {}).sort(compareLoose);
            // seperate versions to releases and prereleases
            let { releases, prereleases } = core_packages_1.VersionHelpers.splitReleasesFromArray(rawVersions);
            // extract prereleases from dist tags
            const distTags = packumentResponse['dist-tags'] || {};
            const latestTaggedVersion = distTags['latest'];
            // extract releases
            if (latestTaggedVersion) {
                // cap the releases to the latest tagged version
                releases = core_packages_1.VersionHelpers.lteFromArray(releases, latestTaggedVersion);
            }
            const response = {
                source: core_clients_1.ClientResponseSource.remote,
                status: 200,
            };
            // use 'latest' tagged version from author?
            const suggestLatestVersion = latestTaggedVersion || (releases.length > 0 ?
                // suggest latest release?
                releases[releases.length - 1] :
                // no suggestion
                null);
            const requested = request.package;
            if (npaSpec.type === npaSpec_1.NpaTypes.Tag) {
                // get the tagged version. eg latest|next
                versionRange = distTags[requested.version];
                if (!versionRange) {
                    // No match
                    return core_packages_1.DocumentFactory.createNoMatch(providerName, source, type, requested, response, suggestLatestVersion);
                }
            }
            // analyse suggestions
            const suggestions = core_suggestions_1.SuggestionFactory.createSuggestions(versionRange, releases, prereleases, suggestLatestVersion);
            return {
                providerName,
                source,
                response,
                type,
                requested,
                resolved,
                suggestions,
            };
        }).then(document => {
            this.createCachedResponse(cacheKey, 200, document, false);
            return document;
        }).catch(response => {
            this.createCachedResponse(cacheKey, response.code, response.message, true);
            return Promise.reject(NpmUtils.convertNpmErrorToResponse(response, core_clients_1.ClientResponseSource.remote));
        });
    }
}
exports.PacoteClient = PacoteClient;


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/definitions/eGitHubContributions.ts":
/*!**********************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/definitions/eGitHubContributions.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubContributions = void 0;
var GitHubContributions;
(function (GitHubContributions) {
    GitHubContributions["AccessToken"] = "accessToken";
})(GitHubContributions = exports.GitHubContributions || (exports.GitHubContributions = {}));


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/definitions/eNpmContributions.ts":
/*!*******************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/definitions/eNpmContributions.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmContributions = void 0;
var NpmContributions;
(function (NpmContributions) {
    NpmContributions["Caching"] = "npm.caching";
    NpmContributions["Http"] = "npm.http";
    NpmContributions["Github"] = "npm.github";
    NpmContributions["DependencyProperties"] = "npm.dependencyProperties";
    NpmContributions["DistTagFilter"] = "npm.distTagFilter";
})(NpmContributions = exports.NpmContributions || (exports.NpmContributions = {}));


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/definitions/iPacote.ts":
/*!*********************************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/definitions/iPacote.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/factories/packageFactory.ts":
/*!**************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/factories/packageFactory.ts ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createDirectory = exports.fileDependencyRegex = void 0;
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
exports.fileDependencyRegex = /^file:(.*)$/;
function createDirectory(providerName, requested, response, npaSpec) {
    const fileRegExpResult = exports.fileDependencyRegex.exec(requested.version);
    if (!fileRegExpResult) {
        return core_packages_1.DocumentFactory.createInvalidVersion(providerName, requested, response, npaSpec.type // todo create a converter
        );
    }
    const source = core_packages_1.PackageSourceTypes.Directory;
    const type = core_packages_1.PackageVersionTypes.Version;
    const resolved = {
        name: npaSpec.name,
        version: fileRegExpResult[1],
    };
    const suggestions = [
        {
            name: 'file://',
            version: resolved.version,
            flags: core_suggestions_1.SuggestionFlags.release
        },
    ];
    return {
        providerName,
        source,
        type,
        requested,
        response,
        resolved,
        suggestions
    };
}
exports.createDirectory = createDirectory;


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/models/npaSpec.ts":
/*!****************************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/models/npaSpec.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NpaTypes = void 0;
var NpaTypes;
(function (NpaTypes) {
    NpaTypes["Git"] = "git";
    NpaTypes["Remote"] = "remote";
    NpaTypes["File"] = "file";
    NpaTypes["Directory"] = "directory";
    NpaTypes["Tag"] = "tag";
    NpaTypes["Version"] = "version";
    NpaTypes["Range"] = "range";
    NpaTypes["Alias"] = "alias";
})(NpaTypes = exports.NpaTypes || (exports.NpaTypes = {}));


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/npmConfig.ts":
/*!***********************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/npmConfig.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfig = void 0;
const core_providers_1 = __webpack_require__(/*! core.providers */ "./src/core.providers/index.ts");
const eNpmContributions_1 = __webpack_require__(/*! ./definitions/eNpmContributions */ "./src/infrastructure.providers/npm/src/definitions/eNpmContributions.ts");
class NpmConfig {
    constructor(config, caching, http, github) {
        this.providerName = 'npm';
        this.supports = [
            core_providers_1.ProviderSupport.Releases,
            core_providers_1.ProviderSupport.Prereleases,
            core_providers_1.ProviderSupport.InstalledStatuses,
        ];
        this.fileMatcher = {
            language: 'json',
            scheme: 'file',
            pattern: '**/package.json',
        };
        this.config = config;
        this.caching = caching;
        this.http = http;
        this.github = github;
    }
    get dependencyProperties() {
        return this.config.get(eNpmContributions_1.NpmContributions.DependencyProperties);
    }
    get distTagFilter() {
        return this.config.get(eNpmContributions_1.NpmContributions.DistTagFilter);
    }
}
exports.NpmConfig = NpmConfig;


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/npmContainer.ts":
/*!**************************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/npmContainer.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.configureContainer = void 0;
const awilix_1 = __webpack_require__(/*! awilix */ "awilix");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const infrastructure_clients_1 = __webpack_require__(/*! infrastructure.clients */ "./src/infrastructure.clients/index.ts");
const eNpmContributions_1 = __webpack_require__(/*! ./definitions/eNpmContributions */ "./src/infrastructure.providers/npm/src/definitions/eNpmContributions.ts");
const githubOptions_1 = __webpack_require__(/*! ./options/githubOptions */ "./src/infrastructure.providers/npm/src/options/githubOptions.ts");
const npmPackageClient_1 = __webpack_require__(/*! ./clients/npmPackageClient */ "./src/infrastructure.providers/npm/src/clients/npmPackageClient.ts");
const pacoteClient_1 = __webpack_require__(/*! ./clients/pacoteClient */ "./src/infrastructure.providers/npm/src/clients/pacoteClient.ts");
const githubClient_1 = __webpack_require__(/*! ./clients/githubClient */ "./src/infrastructure.providers/npm/src/clients/githubClient.ts");
const npmSuggestionProvider_1 = __webpack_require__(/*! ./npmSuggestionProvider */ "./src/infrastructure.providers/npm/src/npmSuggestionProvider.ts");
const npmConfig_1 = __webpack_require__(/*! ./npmConfig */ "./src/infrastructure.providers/npm/src/npmConfig.ts");
function configureContainer(container) {
    const containerMap = {
        // options
        npmCachingOpts: awilix_1.asFunction(rootConfig => new core_clients_1.CachingOptions(rootConfig, eNpmContributions_1.NpmContributions.Caching, 'caching')).singleton(),
        npmHttpOpts: awilix_1.asFunction(rootConfig => new core_clients_1.HttpOptions(rootConfig, eNpmContributions_1.NpmContributions.Http, 'http')).singleton(),
        npmGitHubOpts: awilix_1.asFunction(rootConfig => new githubOptions_1.GitHubOptions(rootConfig, eNpmContributions_1.NpmContributions.Github, 'github')).singleton(),
        // config
        npmConfig: awilix_1.asFunction((rootConfig, npmCachingOpts, npmHttpOpts, npmGitHubOpts) => new npmConfig_1.NpmConfig(rootConfig, npmCachingOpts, npmHttpOpts, npmGitHubOpts)).singleton(),
        // clients
        githubJsonClient: awilix_1.asFunction((npmCachingOpts, npmHttpOpts, logger) => infrastructure_clients_1.createJsonClient({
            caching: npmCachingOpts,
            http: npmHttpOpts
        }, logger.child({ namespace: 'npm request' }))).singleton(),
        githubClient: awilix_1.asFunction((npmConfig, githubJsonClient, logger) => new githubClient_1.GitHubClient(npmConfig, githubJsonClient, logger.child({ namespace: 'npm github' }))).singleton(),
        pacoteClient: awilix_1.asFunction((npmConfig, logger) => new pacoteClient_1.PacoteClient(npmConfig, logger.child({ namespace: 'npm pacote' }))).singleton(),
        npmClient: awilix_1.asFunction((npmConfig, githubClient, pacoteClient, logger) => new npmPackageClient_1.NpmPackageClient(npmConfig, pacoteClient, githubClient, logger.child({ namespace: 'npm client' }))).singleton(),
        // provider
        npmProvider: awilix_1.asFunction((npmClient, logger) => new npmSuggestionProvider_1.NpmSuggestionProvider(npmClient, logger.child({ namespace: 'npm provider' }))).singleton(),
    };
    container.register(containerMap);
    return container.cradle.npmProvider;
}
exports.configureContainer = configureContainer;


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/npmSuggestionProvider.ts":
/*!***********************************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/npmSuggestionProvider.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmSuggestionProvider = void 0;
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const npmUtils_1 = __webpack_require__(/*! ./npmUtils */ "./src/infrastructure.providers/npm/src/npmUtils.ts");
class NpmSuggestionProvider {
    constructor(client, logger) {
        this.client = client;
        this.config = client.config;
        this.logger = logger;
        this.suggestionReplaceFn = npmUtils_1.npmReplaceVersion;
    }
    parseDependencies(packageText) {
        const packageDependencies = core_packages_1.extractPackageDependenciesFromJson(packageText, this.config.dependencyProperties);
        return packageDependencies;
    }
    async fetchSuggestions(packagePath, packageDependencies) {
        if (this.config.github.accessToken &&
            this.config.github.accessToken.length > 0) {
            // defrost github parameters
            this.config.github.defrost();
        }
        const clientData = null;
        return core_packages_1.RequestFactory.executeDependencyRequests(packagePath, this.client, clientData, packageDependencies);
    }
}
exports.NpmSuggestionProvider = NpmSuggestionProvider;


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/npmUtils.ts":
/*!**********************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/npmUtils.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.convertNpmErrorToResponse = exports.npmReplaceVersion = void 0;
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
function npmReplaceVersion(packageInfo, newVersion) {
    if (packageInfo.source === core_packages_1.PackageSourceTypes.Github) {
        return replaceGitVersion(packageInfo, newVersion);
    }
    if (packageInfo.type === core_packages_1.PackageVersionTypes.Alias) {
        return replaceAliasVersion(packageInfo, newVersion);
    }
    // fallback to default
    return core_packages_1.VersionHelpers.formatWithExistingLeading(packageInfo.requested.version, newVersion);
}
exports.npmReplaceVersion = npmReplaceVersion;
function replaceGitVersion(packageInfo, newVersion) {
    return packageInfo.requested.version.replace(packageInfo.resolved.version, newVersion);
}
function replaceAliasVersion(packageInfo, newVersion) {
    // preserve the leading symbol from the existing version
    const preservedLeadingVersion = core_packages_1.VersionHelpers.formatWithExistingLeading(packageInfo.requested.version, newVersion);
    return `npm:${packageInfo.resolved.name}@${preservedLeadingVersion}`;
}
function convertNpmErrorToResponse(error, source) {
    return {
        source,
        status: error.code,
        data: error.message,
    };
}
exports.convertNpmErrorToResponse = convertNpmErrorToResponse;


/***/ }),

/***/ "./src/infrastructure.providers/npm/src/options/githubOptions.ts":
/*!***********************************************************************!*\
  !*** ./src/infrastructure.providers/npm/src/options/githubOptions.ts ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GitHubOptions = void 0;
const core_configuration_1 = __webpack_require__(/*! core.configuration */ "./src/core.configuration/index.ts");
const eGitHubContributions_1 = __webpack_require__(/*! ../definitions/eGitHubContributions */ "./src/infrastructure.providers/npm/src/definitions/eGitHubContributions.ts");
class GitHubOptions extends core_configuration_1.OptionsWithFallback {
    constructor(config, section, fallbackSection = null) {
        super(config, section, fallbackSection);
    }
    get accessToken() {
        return this.getOrDefault(eGitHubContributions_1.GitHubContributions.AccessToken, null);
    }
}
exports.GitHubOptions = GitHubOptions;


/***/ }),

/***/ "./src/infrastructure.providers/npm/test/githubClient/fetchGitHub.fixtures.ts":
/*!************************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/test/githubClient/fetchGitHub.fixtures.ts ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.githubFixtures = void 0;
exports.githubFixtures = {
    tags: [
        {
            "name": "v2.6.0-rc.1"
        },
        {
            "name": "v2.5.0"
        },
        {
            "name": "v2.5.0-preview.1"
        },
        {
            "name": "v2.4.3"
        },
        {
            "name": "v2.4.2"
        },
        {
            "name": "v2.4.1"
        },
        {
            "name": "v2.4.0"
        },
        {
            "name": "v2.3.0"
        },
        {
            "name": "v2.2.0"
        },
        {
            "name": "v2.1.2"
        },
        {
            "name": "v2.1.1"
        },
        {
            "name": "v2.1.0"
        },
        {
            "name": "v2.0.0"
        },
        {
            "name": "v1.5.0"
        },
        {
            "name": "v1.4.0"
        },
        {
            "name": "v1.3.2"
        },
        {
            "name": "v1.3.1"
        },
        {
            "name": "v1.3.0"
        },
        {
            "name": "v1.2.0"
        },
        {
            "name": "v1.1.0"
        },
        {
            "name": "v1.0.0"
        }
    ],
    commits: [
        {
            sha: "f099459fd01be79187275ddf47d77a2797188c6a"
        },
        {
            sha: "166c3497967489e61a1d532b79b8fe750fd5ba56"
        },
        {
            sha: "37250168e2ecaab477c962071d2024e89ebb1844"
        },
        {
            sha: "6a3fb5a4dec4588b746ac3bf14d0704498e7b948"
        },
        {
            sha: "df4d9435a320c0345ff2930ec71a007f3a320211"
        },
    ]
};


/***/ }),

/***/ "./src/infrastructure.providers/npm/test/githubClient/fetchGitHub.tests.ts":
/*!*********************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/test/githubClient/fetchGitHub.tests.ts ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const test_core_logging_1 = __webpack_require__(/*! test.core.logging */ "./src/core.logging/index.test.ts");
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const infrastructure_providers_npm_1 = __webpack_require__(/*! infrastructure.providers.npm */ "./src/infrastructure.providers/npm/index.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const fetchGitHub_fixtures_1 = __webpack_require__(/*! ./fetchGitHub.fixtures */ "./src/infrastructure.providers/npm/test/githubClient/fetchGitHub.fixtures.ts");
const { mock, instance, when, anything, capture } = __webpack_require__(/*! ts-mockito */ "ts-mockito");
const assert = __webpack_require__(/*! assert */ "assert");
const npa = __webpack_require__(/*! npm-package-arg */ "npm-package-arg");
let githubOptsMock;
let configMock;
let loggerMock;
let jsonClientMock;
exports.default = {
    beforeEach: () => {
        githubOptsMock = mock(infrastructure_providers_npm_1.GitHubOptions);
        configMock = mock(infrastructure_providers_npm_1.NpmConfig);
        jsonClientMock = mock(core_clients_1.JsonHttpClient);
        loggerMock = mock(test_core_logging_1.LoggerStub);
        when(configMock.github).thenReturn(instance(githubOptsMock));
    },
    'fetchTags': {
        'returns a #semver:x.x.x. package': async () => {
            const testRequest = {
                providerName: 'testnpmprovider',
                package: {
                    path: 'packagepath',
                    name: 'core.js',
                    version: 'github:octokit/core.js#semver:^2',
                }
            };
            const testSpec = npa.resolve(testRequest.package.name, testRequest.package.version, testRequest.package.path);
            when(jsonClientMock.request(anything(), anything(), anything(), anything()))
                .thenResolve({
                status: 200,
                data: fetchGitHub_fixtures_1.githubFixtures.tags,
                source: core_clients_1.ClientResponseSource.remote
            });
            // setup initial call
            const cut = new infrastructure_providers_npm_1.GitHubClient(instance(configMock), instance(jsonClientMock), instance(loggerMock));
            return cut.fetchGithub(testRequest, testSpec)
                .then((actual) => {
                assert.equal(actual.source, 'github');
                assert.equal(actual.type, 'range');
                assert.equal(actual.resolved.name, testRequest.package.name);
                assert.deepEqual(actual.requested, testRequest.package);
                assert.deepEqual(actual.suggestions, [{
                        name: 'satisfies',
                        version: 'latest',
                        flags: core_suggestions_1.SuggestionFlags.status
                    }, {
                        name: 'latest',
                        version: 'v2.5.0',
                        flags: core_suggestions_1.SuggestionFlags.release
                    }, {
                        name: 'rc',
                        version: 'v2.6.0-rc.1',
                        flags: core_suggestions_1.SuggestionFlags.prerelease
                    }, {
                        name: 'preview',
                        version: 'v2.5.0-preview.1',
                        flags: core_suggestions_1.SuggestionFlags.prerelease
                    }]);
            });
        },
        'returns a #x.x.x': async () => {
            const testRequest = {
                providerName: 'testnpmprovider',
                package: {
                    path: 'packagepath',
                    name: 'core.js',
                    version: 'github:octokit/core.js#v2.0.0',
                }
            };
            const testSpec = npa.resolve(testRequest.package.name, testRequest.package.version, testRequest.package.path);
            when(jsonClientMock.request(anything(), anything(), anything(), anything()))
                .thenResolve({
                status: 200,
                data: fetchGitHub_fixtures_1.githubFixtures.tags,
                source: core_clients_1.ClientResponseSource.remote
            });
            // setup initial call
            const cut = new infrastructure_providers_npm_1.GitHubClient(instance(configMock), instance(jsonClientMock), instance(loggerMock));
            return cut.fetchGithub(testRequest, testSpec)
                .then((actual) => {
                assert.equal(actual.source, 'github');
                assert.equal(actual.type, 'range');
                assert.equal(actual.providerName, testRequest.providerName);
                assert.equal(actual.resolved.name, testRequest.package.name);
                assert.deepEqual(actual.requested, testRequest.package);
                assert.deepEqual(actual.suggestions, [{
                        name: 'fixed',
                        version: 'v2.0.0',
                        flags: core_suggestions_1.SuggestionFlags.status
                    }, {
                        name: 'latest',
                        version: 'v2.5.0',
                        flags: core_suggestions_1.SuggestionFlags.release
                    }, {
                        name: 'rc',
                        version: 'v2.6.0-rc.1',
                        flags: core_suggestions_1.SuggestionFlags.prerelease
                    }, {
                        name: 'preview',
                        version: 'v2.5.0-preview.1',
                        flags: core_suggestions_1.SuggestionFlags.prerelease
                    }]);
            });
        },
        'returns a #sha commit': async () => {
            const testRequest = {
                providerName: 'testnpmprovider',
                package: {
                    path: 'packagepath',
                    name: 'core.js',
                    version: 'github:octokit/core.js#166c3497',
                }
            };
            const testSpec = npa.resolve(testRequest.package.name, testRequest.package.version, testRequest.package.path);
            when(jsonClientMock.request(anything(), anything(), anything(), anything()))
                .thenResolve({
                status: 200,
                data: fetchGitHub_fixtures_1.githubFixtures.commits,
                source: core_clients_1.ClientResponseSource.remote
            });
            const cut = new infrastructure_providers_npm_1.GitHubClient(instance(configMock), instance(jsonClientMock), instance(loggerMock));
            return cut.fetchGithub(testRequest, testSpec)
                .then((actual) => {
                assert.equal(actual.source, 'github');
                assert.equal(actual.type, 'committish');
                assert.equal(actual.providerName, testRequest.providerName);
                assert.equal(actual.resolved.name, testRequest.package.name);
                assert.deepEqual(actual.requested, testRequest.package);
                assert.deepEqual(actual.suggestions, [{
                        name: 'fixed',
                        version: '166c3497',
                        flags: core_suggestions_1.SuggestionFlags.status
                    }, {
                        name: 'latest',
                        version: 'df4d9435',
                        flags: core_suggestions_1.SuggestionFlags.release
                    }]);
            });
        },
        'sets auth token in headers': async () => {
            const testRequest = {
                providerName: 'testnpmprovider',
                package: {
                    path: 'packagepath',
                    name: 'core.js',
                    version: 'github:octokit/core.js#166c3497',
                }
            };
            const testSpec = npa.resolve(testRequest.package.name, testRequest.package.version, testRequest.package.path);
            const testToken = 'testToken';
            when(jsonClientMock.request(anything(), anything(), anything(), anything()))
                .thenResolve({
                status: 200,
                data: fetchGitHub_fixtures_1.githubFixtures.commits,
                source: core_clients_1.ClientResponseSource.remote
            });
            when(githubOptsMock.accessToken).thenReturn(testToken);
            const cut = new infrastructure_providers_npm_1.GitHubClient(instance(configMock), instance(jsonClientMock), instance(loggerMock));
            await cut.fetchGithub(testRequest, testSpec);
            const [, , , actualHeaders] = capture(jsonClientMock.request).first();
            assert.equal(actualHeaders['authorization'], 'token ' + testToken);
        }
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/npm/test/npmPackageClient/fetchDirectory.tests.ts":
/*!****************************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/test/npmPackageClient/fetchDirectory.tests.ts ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const test_core_logging_1 = __webpack_require__(/*! test.core.logging */ "./src/core.logging/index.test.ts");
const infrastructure_providers_npm_1 = __webpack_require__(/*! infrastructure.providers.npm */ "./src/infrastructure.providers/npm/index.ts");
const infrastructure_providers_npm_2 = __webpack_require__(/*! infrastructure.providers.npm */ "./src/infrastructure.providers/npm/index.ts");
const { mock, instance } = __webpack_require__(/*! ts-mockito */ "ts-mockito");
const assert = __webpack_require__(/*! assert */ "assert");
let configMock;
let pacoteMock;
let githubClientMock;
let loggerMock;
exports.default = {
    beforeEach: () => {
        configMock = mock(infrastructure_providers_npm_1.NpmConfig);
        pacoteMock = mock(infrastructure_providers_npm_2.PacoteClient);
        githubClientMock = mock(infrastructure_providers_npm_1.GitHubClient);
        loggerMock = mock(test_core_logging_1.LoggerStub);
    },
    'fetchPackage': {
        'returns a file:// directory package': async () => {
            const expectedSource = 'directory';
            const testRequest = {
                clientData: {
                    providerName: 'testnpmprovider',
                },
                source: 'npmtest',
                package: {
                    path: 'filepackagepath',
                    name: 'filepackage',
                    version: 'file://some/path/out/there',
                }
            };
            const cut = new infrastructure_providers_npm_1.NpmPackageClient(instance(configMock), instance(pacoteMock), instance(githubClientMock), instance(loggerMock));
            return cut.fetchPackage(testRequest)
                .then(actual => {
                assert.equal(actual.source, 'directory', `expected to see ${expectedSource}`);
                assert.deepEqual(actual.requested, testRequest.package);
            });
        }
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/npm/test/npmPackageClient/fetchGit.tests.ts":
/*!**********************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/test/npmPackageClient/fetchGit.tests.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const test_core_logging_1 = __webpack_require__(/*! test.core.logging */ "./src/core.logging/index.test.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const infrastructure_providers_npm_1 = __webpack_require__(/*! infrastructure.providers.npm */ "./src/infrastructure.providers/npm/index.ts");
const { mock, instance, when, anything } = __webpack_require__(/*! ts-mockito */ "ts-mockito");
const assert = __webpack_require__(/*! assert */ "assert");
let configMock;
let pacoteMock;
let githubClientMock;
let loggerMock;
exports.default = {
    beforeEach: () => {
        configMock = mock(infrastructure_providers_npm_1.NpmConfig);
        pacoteMock = mock(infrastructure_providers_npm_1.PacoteClient);
        githubClientMock = mock(infrastructure_providers_npm_1.GitHubClient);
        loggerMock = mock(test_core_logging_1.LoggerStub);
    },
    'fetchGitPackage': {
        'returns fixed package for git:// requests': async () => {
            const testRequest = {
                clientData: {
                    providerName: 'testnpmprovider',
                },
                package: {
                    path: 'packagepath',
                    name: 'core.js',
                    version: 'git+https://git@github.com/testuser/test.git',
                }
            };
            when(pacoteMock.fetchPackage(anything(), anything()))
                .thenResolve({
                status: 200,
                data: '',
                source: core_clients_1.ClientResponseSource.remote
            });
            // setup initial call
            const cut = new infrastructure_providers_npm_1.NpmPackageClient(instance(configMock), instance(pacoteMock), instance(githubClientMock), instance(loggerMock));
            return cut.fetchPackage(testRequest)
                .then((actual) => {
                assert.equal(actual.source, 'git');
                assert.equal(actual.resolved, null);
                assert.deepEqual(actual.requested, testRequest.package);
                assert.deepEqual(actual.suggestions, [
                    {
                        name: 'fixed',
                        version: 'git repository',
                        flags: core_suggestions_1.SuggestionFlags.status
                    }
                ]);
            });
        },
        'returns unsupported suggestion when not github': async () => {
            const testRequest = {
                clientData: {
                    providerName: 'testnpmprovider',
                },
                package: {
                    path: 'packagepath',
                    name: 'core.js',
                    version: 'git+https://git@not-gihub.com/testuser/test.git',
                }
            };
            // setup initial call
            const cut = new infrastructure_providers_npm_1.NpmPackageClient(instance(configMock), instance(pacoteMock), instance(githubClientMock), instance(loggerMock));
            return cut.fetchPackage(testRequest)
                .then((actual) => {
                assert.deepEqual(actual.suggestions, [
                    {
                        name: 'not supported',
                        version: '',
                        flags: core_suggestions_1.SuggestionFlags.status
                    }
                ]);
            });
        }
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/npm/test/npmPackageClient/fetchRegistry.tests.ts":
/*!***************************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/test/npmPackageClient/fetchRegistry.tests.ts ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const test_core_logging_1 = __webpack_require__(/*! test.core.logging */ "./src/core.logging/index.test.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const infrastructure_providers_npm_1 = __webpack_require__(/*! infrastructure.providers.npm */ "./src/infrastructure.providers/npm/index.ts");
const { mock, instance, when, anything } = __webpack_require__(/*! ts-mockito */ "ts-mockito");
const assert = __webpack_require__(/*! assert */ "assert");
let configMock;
let pacoteMock;
let githubClientMock;
let loggerMock;
exports.default = {
    beforeEach: () => {
        configMock = mock(infrastructure_providers_npm_1.NpmConfig);
        pacoteMock = mock(infrastructure_providers_npm_1.PacoteClient);
        githubClientMock = mock(infrastructure_providers_npm_1.GitHubClient);
        loggerMock = mock(test_core_logging_1.LoggerStub);
    },
    'fetchPackage': {
        'returns 401, 404 and ECONNREFUSED suggestion statuses': async () => {
            const testRequest = {
                providerName: 'testnpmprovider',
                package: {
                    path: 'packagepath',
                    name: 'private-reg',
                    version: '1.2.3',
                }
            };
            const testStates = [
                { status: 401, suggestion: { name: '401 not authorized' } },
                { status: 404, suggestion: { name: 'package not found' } },
                { status: 'ECONNREFUSED', suggestion: { name: 'connection refused' } },
            ];
            // setup initial call
            const cut = new infrastructure_providers_npm_1.NpmPackageClient(instance(configMock), instance(pacoteMock), instance(githubClientMock), instance(loggerMock));
            const promised = [];
            testStates.forEach(testState => {
                when(pacoteMock.fetchPackage(anything(), anything()))
                    .thenReject({
                    status: testState.status,
                    data: "response",
                    source: core_clients_1.ClientResponseSource.remote
                });
                promised.push(cut.fetchPackage(testRequest)
                    .then((actual) => {
                    assert.equal(actual.source, 'registry');
                    assert.deepEqual(actual.requested, testRequest.package);
                    assert.deepEqual(actual.suggestions, [{
                            name: testState.suggestion.name,
                            version: '',
                            flags: core_suggestions_1.SuggestionFlags.status
                        }]);
                }));
            });
            return await Promise.all(promised);
        }
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/npm/test/npmVersionUtils/replaceGitVersion.tests.ts":
/*!******************************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/test/npmVersionUtils/replaceGitVersion.tests.ts ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const NpmUtils = __webpack_require__(/*! infrastructure.providers.npm */ "./src/infrastructure.providers/npm/index.ts");
const core_packages_1 = __webpack_require__(/*! core.packages */ "./src/core.packages/index.ts");
const assert = __webpack_require__(/*! assert */ "assert");
exports.default = {
    "replaceGitVersion": {
        "handles #tag|commit|semver:": () => {
            const packageInfo = {
                providerName: 'testreplace',
                source: core_packages_1.PackageSourceTypes.Github,
                nameRange: null,
                versionRange: null,
                order: 0,
                requested: {
                    path: 'packagepath',
                    name: 'packagename',
                    version: 'github:someRepo/someProject#semver:^2',
                },
                resolved: {
                    name: 'packagename',
                    version: '^2'
                }
            };
            const expected = 'github:someRepo/someProject#semver:4.2.1';
            // NpmVersionUtils
            const actual = NpmUtils.npmReplaceVersion(packageInfo, '4.2.1');
            assert.equal(actual, expected);
        },
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/npm/test/pacoteClient/npmrc.tests.ts":
/*!***************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/test/pacoteClient/npmrc.tests.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const infrastructure_testing_1 = __webpack_require__(/*! infrastructure.testing */ "./src/infrastructure.testing/index.ts");
const test_core_logging_1 = __webpack_require__(/*! test.core.logging */ "./src/core.logging/index.test.ts");
const infrastructure_providers_npm_1 = __webpack_require__(/*! infrastructure.providers.npm */ "./src/infrastructure.providers/npm/index.ts");
const pacoteClient_fixtures_1 = __webpack_require__(/*! ./pacoteClient.fixtures */ "./src/infrastructure.providers/npm/test/pacoteClient/pacoteClient.fixtures.ts");
const pacoteStub_1 = __webpack_require__(/*! ../stubs/pacoteStub */ "./src/infrastructure.providers/npm/test/stubs/pacoteStub.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const { mock, instance, when, anything, capture } = __webpack_require__(/*! ts-mockito */ "ts-mockito");
const assert = __webpack_require__(/*! assert */ "assert");
const path = __webpack_require__(/*! path */ "path");
const npa = __webpack_require__(/*! npm-package-arg */ "npm-package-arg");
const fs = __webpack_require__(/*! fs */ "fs");
let cachingOptsMock;
let loggerMock;
let configMock;
let pacoteMock;
exports.default = {
    beforeEach: () => {
        cachingOptsMock = mock(core_clients_1.CachingOptions);
        configMock = mock(infrastructure_providers_npm_1.NpmConfig);
        loggerMock = mock(test_core_logging_1.LoggerStub);
        pacoteMock = mock(pacoteStub_1.PacoteStub);
        when(configMock.caching).thenReturn(instance(cachingOptsMock));
    },
    'fetchPackage': {
        'uses npmrc registry': async () => {
            const packagePath = path.join(infrastructure_testing_1.sourcePath, 'infrastructure.providers/npm/test/fixtures/config');
            const testRequest = {
                clientData: {
                    providerName: 'testnpmprovider',
                },
                source: 'npmtest',
                package: {
                    path: packagePath,
                    name: 'aliased',
                    version: 'npm:pacote@11.1.9',
                },
            };
            // write the npmrc file
            const npmrcPath = packagePath + '/.npmrc';
            fs.writeFileSync(npmrcPath, pacoteClient_fixtures_1.default[".npmrc"]);
            assert.ok(__webpack_require__(/*! fs */ "fs").existsSync(testRequest.package.path), 'test .npmrc doesnt exist?');
            when(pacoteMock.packument(anything(), anything()))
                .thenResolve(pacoteClient_fixtures_1.default.packumentGit);
            const cut = new infrastructure_providers_npm_1.PacoteClient(instance(configMock), instance(loggerMock));
            cut.pacote = instance(pacoteMock);
            const npaSpec = npa.resolve(testRequest.package.name, testRequest.package.version, testRequest.package.path);
            return cut.fetchPackage(testRequest, npaSpec)
                .then(_ => {
                const [, actualOpts] = capture(pacoteMock.packument).first();
                assert.equal(actualOpts.cwd, testRequest.package.path);
                assert.equal(actualOpts['//registry.npmjs.example/:_authToken'], '12345678');
                // delete the npmrc file
                fs.unlinkSync(npmrcPath);
            });
        },
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/npm/test/pacoteClient/pacoteClient.fixtures.ts":
/*!*************************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/test/pacoteClient/pacoteClient.fixtures.ts ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "packumentGit": {
        "name": "npm-package-arg",
        "dist-tags": {
            "latest": "8.0.1"
        },
        "versions": {
            "8.0.1": {}
        }
    },
    "packumentGitSemver": {
        "name": "npm",
        "dist-tags": {
            "latest": "6.5.0"
        },
        "versions": {
            "6.5.0": {}
        }
    },
    "packumentGitCommittish": {
        "name": "npm",
        "dist-tags": {
            "latest": "6.14.5"
        },
        "versions": {
            "6.14.5": {}
        }
    },
    "packumentRegistryVersion": {
        "name": "npm-package-arg",
        "dist-tags": {
            "latest": "8.0.1"
        },
        "versions": {
            "6.0.0": {},
            "6.1.0": {},
            "6.1.1": {},
            "7.0.0": {},
            "8.0.0": {},
            "8.0.1": {}
        }
    },
    "packumentRegistryRange": {
        "name": "pacote",
        "dist-tags": {
            "latest": "11.1.9",
            "v9-legacy": "9.5.12"
        },
        "versions": {
            "10.0.0": {},
            "10.1.0": {},
            "10.1.1": {},
            "10.1.2": {},
            "10.1.3": {},
            "10.1.4": {},
            "10.1.5": {},
            "10.1.6": {},
            "10.2.0": {},
            "9.5.10": {},
            "10.2.1": {},
            "9.5.11": {},
            "10.3.0": {},
            "9.5.12": {},
            "10.3.2": {},
            "11.0.0": {},
            "11.0.1": {},
            "11.1.0": {},
            "11.1.1": {},
            "11.1.2": {},
            "11.1.3": {},
            "11.1.4": {},
            "11.1.5": {},
            "11.1.6": {},
            "11.1.7": {},
            "11.1.8": {},
            "11.1.9": {}
        }
    },
    "packumentRegistryAlias": {
        "name": "pacote",
        "dist-tags": {
            "latest": "11.1.9",
            "v9-legacy": "9.5.12"
        },
        "versions": {
            "11.1.9": {}
        }
    },
    ".npmrc": "//registry.npmjs.example/:_authToken=12345678",
    "packumentCappedToLatestTaggedVersion": {
        "name": "npm-package-arg",
        "dist-tags": {
            "latest": "7.0.0"
        },
        "versions": {
            "6.0.0": {},
            "6.1.0": {},
            "6.1.1": {},
            "7.0.0": {},
            "8.0.0": {},
            "8.0.1": {}
        }
    },
};


/***/ }),

/***/ "./src/infrastructure.providers/npm/test/pacoteClient/pacoteClient.tests.ts":
/*!**********************************************************************************!*\
  !*** ./src/infrastructure.providers/npm/test/pacoteClient/pacoteClient.tests.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const test_core_logging_1 = __webpack_require__(/*! test.core.logging */ "./src/core.logging/index.test.ts");
const core_suggestions_1 = __webpack_require__(/*! core.suggestions */ "./src/core.suggestions/index.ts");
const core_clients_1 = __webpack_require__(/*! core.clients */ "./src/core.clients/index.ts");
const infrastructure_providers_npm_1 = __webpack_require__(/*! infrastructure.providers.npm */ "./src/infrastructure.providers/npm/index.ts");
const pacoteClient_fixtures_1 = __webpack_require__(/*! ./pacoteClient.fixtures */ "./src/infrastructure.providers/npm/test/pacoteClient/pacoteClient.fixtures.ts");
const pacoteStub_1 = __webpack_require__(/*! ../stubs/pacoteStub */ "./src/infrastructure.providers/npm/test/stubs/pacoteStub.ts");
const { mock, instance, when, anything, capture } = __webpack_require__(/*! ts-mockito */ "ts-mockito");
const assert = __webpack_require__(/*! assert */ "assert");
const npa = __webpack_require__(/*! npm-package-arg */ "npm-package-arg");
let cachingOptsMock;
let githubOptsMock;
let loggerMock;
let configMock;
let pacoteMock;
exports.default = {
    beforeEach: () => {
        githubOptsMock = mock(infrastructure_providers_npm_1.GitHubOptions);
        cachingOptsMock = mock(core_clients_1.CachingOptions);
        configMock = mock(infrastructure_providers_npm_1.NpmConfig);
        loggerMock = mock(test_core_logging_1.LoggerStub);
        pacoteMock = mock(pacoteStub_1.PacoteStub);
        when(configMock.caching).thenReturn(instance(cachingOptsMock));
        when(configMock.github).thenReturn(instance(githubOptsMock));
    },
    'fetchPackage': {
        'returns a registry range package': async () => {
            const testRequest = {
                clientData: {
                    providerName: 'testnpmprovider',
                },
                package: {
                    path: 'packagepath',
                    name: 'pacote',
                    version: '10.1.*',
                }
            };
            const npaSpec = npa.resolve(testRequest.package.name, testRequest.package.version, testRequest.package.path);
            when(pacoteMock.packument(anything(), anything()))
                .thenResolve(pacoteClient_fixtures_1.default.packumentRegistryRange);
            const cut = new infrastructure_providers_npm_1.PacoteClient(instance(configMock), instance(loggerMock));
            cut.pacote = instance(pacoteMock);
            return cut.fetchPackage(testRequest, npaSpec)
                .then((actual) => {
                assert.equal(actual.source, 'registry');
                assert.equal(actual.type, 'range');
                assert.equal(actual.resolved.name, testRequest.package.name);
                assert.deepEqual(actual.requested, testRequest.package);
            });
        },
        'returns a registry version package': async () => {
            const testRequest = {
                clientData: {
                    providerName: 'testnpmprovider',
                },
                package: {
                    path: 'packagepath',
                    name: 'npm-package-arg',
                    version: '8.0.1',
                }
            };
            const npaSpec = npa.resolve(testRequest.package.name, testRequest.package.version, testRequest.package.path);
            when(pacoteMock.packument(anything(), anything()))
                .thenResolve(pacoteClient_fixtures_1.default.packumentRegistryVersion);
            const cut = new infrastructure_providers_npm_1.PacoteClient(instance(configMock), instance(loggerMock));
            cut.pacote = instance(pacoteMock);
            return cut.fetchPackage(testRequest, npaSpec)
                .then((actual) => {
                assert.equal(actual.source, 'registry');
                assert.equal(actual.type, 'version');
                assert.equal(actual.resolved.name, testRequest.package.name);
            });
        },
        'returns capped latest versions': async () => {
            const testRequest = {
                clientData: {
                    providerName: 'testnpmprovider',
                },
                package: {
                    path: 'packagepath',
                    name: 'npm-package-arg',
                    version: '7.0.0',
                }
            };
            const npaSpec = npa.resolve(testRequest.package.name, testRequest.package.version, testRequest.package.path);
            when(pacoteMock.packument(anything(), anything()))
                .thenResolve(pacoteClient_fixtures_1.default.packumentCappedToLatestTaggedVersion);
            const cut = new infrastructure_providers_npm_1.PacoteClient(instance(configMock), instance(loggerMock));
            cut.pacote = instance(pacoteMock);
            return cut.fetchPackage(testRequest, npaSpec)
                .then((actual) => {
                assert.deepEqual(actual.suggestions, [{
                        name: 'latest',
                        version: '',
                        flags: core_suggestions_1.SuggestionFlags.status
                    }]);
            });
        },
        'returns a registry alias package': async () => {
            const testRequest = {
                clientData: {
                    providerName: 'testnpmprovider',
                },
                package: {
                    path: 'packagepath',
                    name: 'aliased',
                    version: 'npm:pacote@11.1.9',
                }
            };
            const npaSpec = npa.resolve(testRequest.package.name, testRequest.package.version, testRequest.package.path);
            when(pacoteMock.packument(anything(), anything()))
                .thenResolve(pacoteClient_fixtures_1.default.packumentRegistryAlias);
            const cut = new infrastructure_providers_npm_1.PacoteClient(instance(configMock), instance(loggerMock));
            cut.pacote = instance(pacoteMock);
            return cut.fetchPackage(testRequest, npaSpec)
                .then((actual) => {
                assert.equal(actual.source, 'registry');
                assert.equal(actual.type, 'alias');
                assert.equal(actual.requested.name, testRequest.package.name);
                assert.equal(actual.resolved.name, 'pacote');
                assert.deepEqual(actual.requested, testRequest.package);
            });
        },
    }
};


/***/ }),

/***/ "./src/infrastructure.providers/npm/test/stubs/pacoteStub.ts":
/*!*******************************************************************!*\
  !*** ./src/infrastructure.providers/npm/test/stubs/pacoteStub.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PacoteStub = void 0;
class PacoteStub {
    packument(spec, opts) {
        throw new Error("Not implemented");
    }
}
exports.PacoteStub = PacoteStub;


/***/ }),

/***/ "./src/infrastructure.testing/index.ts":
/*!*********************************************!*\
  !*** ./src/infrastructure.testing/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(/*! ./src/utils */ "./src/infrastructure.testing/src/utils.ts"), exports);


/***/ }),

/***/ "./src/infrastructure.testing/src/utils.ts":
/*!*************************************************!*\
  !*** ./src/infrastructure.testing/src/utils.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = exports.sourcePath = exports.projectPath = void 0;
const path = __webpack_require__(/*! path */ "path");
// expects test bundle to be at ./dist/[filename].js
exports.projectPath = path.resolve(__dirname, '..');
exports.sourcePath = path.resolve(exports.projectPath, 'src');
async function delay(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve();
            }
            catch (err) {
                reject(err);
            }
        }, delay);
    });
}
exports.delay = delay;


/***/ }),

/***/ "./test/runner.ts":
/*!************************!*\
  !*** ./test/runner.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const UnitTests = __webpack_require__(/*! ./unit.tests */ "./test/unit.tests.ts");
const tty = __webpack_require__(/*! tty */ "tty");
const Mocha = __webpack_require__(/*! mocha */ "mocha");
__webpack_require__(/*! mocha-ui-esm */ "mocha-ui-esm");
// Linux: prevent a weird NPE when mocha on Linux requires the window size from the TTY
// Since we are not running in a tty environment, we just implementt he method statically
if (!tty.getWindowSize)
    tty.getWindowSize = function () { return [80, 75]; };
const runner = new Mocha({
    ui: 'esm',
    reporter: 'spec',
    timeout: 60000,
});
// set up the global variables
runner.color(true);
runner.suite.emit('global-mocha-context', runner);
runner.suite.emit('support-only', runner.options);
runner.suite.emit('modules', UnitTests);
__webpack_require__(/*! source-map-support */ "source-map-support").install();
function run(testRoot, onComplete) {
    runner.run(function (failures) {
        if (failures)
            onComplete(null, failures);
        else
            onComplete(null, 0);
    });
}
exports.run = run;
if (process.env.TEST && process.env.TEST === 'unit') {
    runner.run();
}


/***/ }),

/***/ "./test/unit.tests.ts":
/*!****************************!*\
  !*** ./test/unit.tests.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
// core
__exportStar(__webpack_require__(/*! test.core.clients */ "./src/core.clients/index.test.ts"), exports);
__exportStar(__webpack_require__(/*! test.core.configuration */ "./src/core.configuration/index.test.ts"), exports);
__exportStar(__webpack_require__(/*! test.core.packages */ "./src/core.packages/index.test.ts"), exports);
__exportStar(__webpack_require__(/*! test.core.suggestions */ "./src/core.suggestions/index.test.ts"), exports);
__exportStar(__webpack_require__(/*! test.infrastructure.clients */ "./src/infrastructure.clients/index.test.ts"), exports);
__exportStar(__webpack_require__(/*! test.infrastructure.configuration */ "./src/infrastructure.configuration/index.test.ts"), exports);
__exportStar(__webpack_require__(/*! test.infrastructure.providers.dotnet */ "./src/infrastructure.providers/dotnet/index.test.ts"), exports);
__exportStar(__webpack_require__(/*! test.infrastructure.providers.npm */ "./src/infrastructure.providers/npm/index.test.ts"), exports);


/***/ }),

/***/ "@npmcli/promise-spawn":
/*!****************************************!*\
  !*** external "@npmcli/promise-spawn" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@npmcli/promise-spawn");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "awilix":
/*!*************************!*\
  !*** external "awilix" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("awilix");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "jsonc-parser":
/*!*******************************!*\
  !*** external "jsonc-parser" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonc-parser");

/***/ }),

/***/ "libnpmconfig":
/*!*******************************!*\
  !*** external "libnpmconfig" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("libnpmconfig");

/***/ }),

/***/ "minimatch":
/*!****************************!*\
  !*** external "minimatch" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("minimatch");

/***/ }),

/***/ "mocha":
/*!************************!*\
  !*** external "mocha" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mocha");

/***/ }),

/***/ "mocha-ui-esm":
/*!*******************************!*\
  !*** external "mocha-ui-esm" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mocha-ui-esm");

/***/ }),

/***/ "npm-package-arg":
/*!**********************************!*\
  !*** external "npm-package-arg" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("npm-package-arg");

/***/ }),

/***/ "pacote":
/*!*************************!*\
  !*** external "pacote" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pacote");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "request-light":
/*!********************************!*\
  !*** external "request-light" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("request-light");

/***/ }),

/***/ "semver":
/*!*************************!*\
  !*** external "semver" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semver");

/***/ }),

/***/ "source-map-support":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),

/***/ "ts-mockito":
/*!*****************************!*\
  !*** external "ts-mockito" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ts-mockito");

/***/ }),

/***/ "tty":
/*!**********************!*\
  !*** external "tty" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tty");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "xmldoc":
/*!*************************!*\
  !*** external "xmldoc" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xmldoc");

/***/ }),

/***/ "yaml":
/*!***********************!*\
  !*** external "yaml" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("yaml");

/***/ })

/******/ });
//# sourceMappingURL=extension.test.js.map
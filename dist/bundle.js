/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _logger = __webpack_require__(1);
	
	var logger = _interopRequireWildcard(_logger);
	
	var _api = __webpack_require__(2);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	(0, _api.get)('/tags').then(function (tags) {
	  return logger.log(tags);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var log = exports.log = function log(message) {
	    console.log(message);
	};
	
	var warn = exports.warn = function warn(message) {
	    console.warn(message);
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.get = undefined;
	
	var _config = __webpack_require__(3);
	
	var get = exports.get = function get(url) {
	    return new Promise(function (resolve, reject) {
	        var request = new XMLHttpRequest();
	        request.onreadystatechange = function () {
	            if (request.readyState === XMLHttpRequest.DONE) {
	                if (request.status >= 200 && request.status < 400) {
	                    resolve(request.responseText);
	                } else {
	                    reject(new Error(request.status));
	                }
	            }
	        };
	        request.onerror = function () {
	            reject(new Error('Error getting results from API'));
	        };
	        request.open('GET', '' + _config.config.API_URL + url);
	        request.send();
	    }).then(function (response) {
	        return JSON.parse(response);
	    });
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var config = exports.config = {
	    API_URL: 'http://localhost:5000'
	};

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map
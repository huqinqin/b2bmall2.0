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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lang */ \"./src/lib/lang.js\");\n/* harmony import */ var _lib_ajax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ajax */ \"./src/lib/ajax.js\");\n/**\n * Created by wangmin on 2018/6/2.\n */\n\n\n!function (global) {\n  global.xt = { isObject: _lib_lang__WEBPACK_IMPORTED_MODULE_0__[\"isObject\"], pull: _lib_ajax__WEBPACK_IMPORTED_MODULE_1__[\"pull\"], post: _lib_ajax__WEBPACK_IMPORTED_MODULE_1__[\"post\"] };\n}(window);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/lib/ajax.js":
/*!*************************!*\
  !*** ./src/lib/ajax.js ***!
  \*************************/
/*! exports provided: pull, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pull\", function() { return pull; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"post\", function() { return post; });\n/* harmony import */ var Promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Promise */ \"Promise\");\n/* harmony import */ var Promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Promise__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * Created by wangmin on 2018/6/7.\n */\n\nfunction ajax(options) {\n\n  //编码数据\n  function setData() {\n    //设置对象的遍码\n    function setObjData(data, parentName) {\n      function encodeData(name, value, parentName) {\n        var items = [];\n        name = parentName === undefined ? name : parentName + \"[\" + name + \"]\";\n        if (typeof value === \"object\" && value !== null) {\n          items = items.concat(setObjData(value, name));\n        } else {\n          name = encodeURIComponent(name);\n          value = encodeURIComponent(value);\n          items.push(name + \"=\" + value);\n        }\n        return items;\n      }\n\n      var arr = [],\n          value;\n      if (Object.prototype.toString.call(data) == '[object Array]') {\n        for (var i = 0, len = data.length; i < len; i++) {\n          value = data[i];\n          arr = arr.concat(encodeData(typeof value == \"object\" ? i : \"\", value, parentName));\n        }\n      } else if (Object.prototype.toString.call(data) == '[object Object]') {\n        for (var key in data) {\n          value = data[key];\n          arr = arr.concat(encodeData(key, value, parentName));\n        }\n      }\n      return arr;\n    };\n    //设置字符串的遍码，字符串的格式为：a=1&b=2;\n    function setStrData(data) {\n      var arr = data.split(\"&\");\n      for (var i = 0, len = arr.length; i < len; i++) {\n        name = encodeURIComponent(arr[i].split(\"=\")[0]);\n        value = encodeURIComponent(arr[i].split(\"=\")[1]);\n        arr[i] = name + \"=\" + value;\n      }\n      return arr;\n    }\n\n    if (data) {\n      if (typeof data === \"string\") {\n        data = setStrData(data);\n      } else if (typeof data === \"object\") {\n        data = setObjData(data);\n      }\n      data = data.join(\"&\").replace(\"/%20/g\", \"+\");\n      //若是使用get方法或JSONP，则手动添加到URL中\n      if (type === \"get\" || dataType === \"jsonp\") {\n        url += url.indexOf(\"?\") > -1 ? url.indexOf(\"=\") > -1 ? \"&\" + data : data : \"?\" + data;\n      }\n    }\n  }\n\n  // JSONP\n  function createJsonp() {\n    var script = document.createElement(\"script\"),\n        timeName = new Date().getTime() + Math.round(Math.random() * 1000),\n        callback = \"JSONP_\" + timeName;\n\n    window[callback] = function (data) {\n      clearTimeout(timeout_flag);\n      document.body.removeChild(script);\n      success(data);\n    };\n    script.src = url + (url.indexOf(\"?\") > -1 ? \"&\" : \"?\") + \"callback=\" + callback;\n    script.type = \"text/javascript\";\n    document.body.appendChild(script);\n    setTime(callback, script);\n  }\n\n  //设置请求超时\n  function setTime(callback, script) {\n    if (timeOut !== undefined) {\n      timeout_flag = setTimeout(function () {\n        if (dataType === \"jsonp\") {\n          delete window[callback];\n          document.body.removeChild(script);\n        } else {\n          timeout_bool = true;\n          xhr && xhr.abort();\n        }\n        console.log(\"timeout\");\n      }, timeOut);\n    }\n  }\n\n  // XHR\n  function createXHR() {\n    //由于IE6的XMLHttpRequest对象是通过MSXML库中的一个ActiveX对象实现的。\n    //所以创建XHR对象，需要在这里做兼容处理。\n    function getXHR() {\n      if (window.XMLHttpRequest) {\n        return new XMLHttpRequest();\n      } else {\n        //遍历IE中不同版本的ActiveX对象\n        var versions = [\"Microsoft\", \"msxm3\", \"msxml2\", \"msxml1\"];\n        for (var i = 0; i < versions.length; i++) {\n          try {\n            var version = versions[i] + \".XMLHTTP\";\n            return new ActiveXObject(version);\n          } catch (e) {}\n        }\n      }\n    }\n\n    //创建对象。\n    xhr = getXHR();\n    xhr.open(type, url, async);\n    //设置请求头\n    if (type === \"post\" && !contentType) {\n      //若是post提交，则设置content-Type 为application/x-www-four-urlencoded\n      xhr.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded;charset=UTF-8\");\n    } else if (contentType) {\n      xhr.setRequestHeader(\"Content-Type\", contentType);\n    }\n    //添加监听\n    xhr.onreadystatechange = function () {\n      if (xhr.readyState === 4) {\n        if (timeOut !== undefined) {\n          //由于执行abort()方法后，有可能触发onreadystatechange事件，\n          //所以设置一个timeout_bool标识，来忽略中止触发的事件。\n          if (timeout_bool) {\n            return;\n          }\n          clearTimeout(timeout_flag);\n        }\n        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {\n\n          success(xhr.responseText);\n        } else {\n          error(xhr.status, xhr.statusText);\n        }\n      }\n    };\n    //发送请求\n    xhr.send(type === \"get\" ? null : data);\n    setTime(); //请求超时\n  }\n\n  var url = options.url || \"\",\n      //请求的链接\n  type = (options.type || \"get\").toLowerCase(),\n      //请求的方法,默认为get\n  data = options.data || null,\n      //请求的数据\n  contentType = options.contentType || \"\",\n      //请求头\n  dataType = options.dataType || \"\",\n      //请求的类型\n  async = options.async === undefined ? true : options.async,\n      //是否异步，默认为true.\n  timeOut = options.timeOut,\n      //超时时间。\n  before = options.before || function () {},\n      //发送之前执行的函数\n  error = options.error || function () {},\n      //错误执行的函数\n  success = options.success || function () {}; //请求成功的回调函数\n  var timeout_bool = false,\n      //是否请求超时\n  timeout_flag = null,\n      //超时标识\n  xhr = null; //xhr对角\n  setData();\n  before();\n  if (dataType === \"jsonp\") {\n    createJsonp();\n  } else {\n    createXHR();\n  }\n}\n\nfunction wrapAjax(opt) {\n  return new Promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {\n    opt.error = function (err) {\n      reject(err);\n      console.error(err);\n    };\n    opt.success = function (data) {\n      data = JSON.parse(data);\n      if (data.code === '000000') {\n        resolve(data);\n      } else {\n        var e = new Error();\n        Object.assign(e, data);\n        reject(e);\n        console.error(e.err);\n      }\n    };\n    ajax(opt);\n  });\n}\n\n//get 请求 json\nfunction pull(url) {\n  var opt = { contentType: 'application/json;charset=utf-8' };\n  opt.url = url;\n  return wrapAjax(opt);\n}\n\nfunction post(url, data) {\n  var opt = { contentType: 'application/json;charset=utf-8' };\n  opt.url = url;\n  opt.data = data || {};\n  opt.type = 'post';\n  return wrapAjax(opt);\n}\nfunction jsonp(url, data, options) {}\n\n\n//# sourceURL=webpack:///./src/lib/ajax.js?");

/***/ }),

/***/ "./src/lib/lang.js":
/*!*************************!*\
  !*** ./src/lib/lang.js ***!
  \*************************/
/*! exports provided: isObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isObject\", function() { return isObject; });\n/**\n * Created by wangmin on 2018/6/2.\n */\nfunction isObject(value) {\n  return Object.prototype.toString.call(value) === '[object Object]';\n}\n\n\n\n//# sourceURL=webpack:///./src/lib/lang.js?");

/***/ }),

/***/ "Promise":
/*!**************************!*\
  !*** external "Promise" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Promise;\n\n//# sourceURL=webpack:///external_%22Promise%22?");

/***/ })

/******/ });
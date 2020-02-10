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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/components/issues.js":
/*!****************************************!*\
  !*** ./public/js/components/issues.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Issues = function () {\n    function Issues() {\n        _classCallCheck(this, Issues);\n    }\n\n    _createClass(Issues, [{\n        key: 'loadIssues',\n        value: function loadIssues() {\n            console.log('loaded from the Issues');\n            console.log('issues loaded');\n        }\n    }]);\n\n    return Issues;\n}();\n\nexports.Issues = Issues;\n\n//# sourceURL=webpack:///./public/js/components/issues.js?");

/***/ }),

/***/ "./public/js/components/user-profile.js":
/*!**********************************************!*\
  !*** ./public/js/components/user-profile.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar userProfile = function () {\n    function userProfile() {\n        _classCallCheck(this, userProfile);\n    }\n\n    _createClass(userProfile, [{\n        key: 'loadUserProfile',\n        value: function loadUserProfile() {\n            console.log('loaded from the userProfile');\n        }\n    }]);\n\n    return userProfile;\n}();\n\nexports.userProfile = userProfile;\n\n//# sourceURL=webpack:///./public/js/components/user-profile.js?");

/***/ }),

/***/ "./public/js/components/users.js":
/*!***************************************!*\
  !*** ./public/js/components/users.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Users = function () {\n    function Users() {\n        _classCallCheck(this, Users);\n    }\n\n    _createClass(Users, [{\n        key: 'loadUsers',\n        value: function loadUsers() {\n            console.log('loaded from the users');\n        }\n    }]);\n\n    return Users;\n}();\n\nexports.Users = Users;\n\n//# sourceURL=webpack:///./public/js/components/users.js?");

/***/ }),

/***/ "./public/js/dashboard/dashboard.js":
/*!******************************************!*\
  !*** ./public/js/dashboard/dashboard.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _footer = __webpack_require__(/*! ../layouts/footer */ \"./public/js/layouts/footer.js\");\n\nvar _header = __webpack_require__(/*! ../layouts/header */ \"./public/js/layouts/header.js\");\n\nvar _sidebar = __webpack_require__(/*! ../layouts/sidebar */ \"./public/js/layouts/sidebar.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Dashboard = function () {\n  function Dashboard() {\n    _classCallCheck(this, Dashboard);\n  }\n\n  _createClass(Dashboard, [{\n    key: 'loadDashboard',\n    value: function loadDashboard() {\n\n      console.log('Just loaded the dashboard');\n\n      var footer = new _footer.Footer();\n      var header = new _header.Header();\n      var sidebar = new _sidebar.Sidebar();\n\n      console.log(footer.loadFooter());\n      console.log(header.loadHeader());\n      console.log(sidebar.loadSidebar());\n\n      console.log('loaded the Dashboard');\n    }\n  }]);\n\n  return Dashboard;\n}();\n\nexports.default = Dashboard;\n\n//# sourceURL=webpack:///./public/js/dashboard/dashboard.js?");

/***/ }),

/***/ "./public/js/layouts/footer.js":
/*!*************************************!*\
  !*** ./public/js/layouts/footer.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Footer = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _issues = __webpack_require__(/*! ../components/issues */ \"./public/js/components/issues.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Footer = function () {\n    function Footer() {\n        _classCallCheck(this, Footer);\n    }\n\n    _createClass(Footer, [{\n        key: 'loadFooter',\n        value: function loadFooter() {\n\n            var issue = new _issues.Issues();\n\n            issue.loadIssues();\n\n            console.log('loaded from the Footer');\n        }\n    }]);\n\n    return Footer;\n}();\n\nexports.Footer = Footer;\n\n//# sourceURL=webpack:///./public/js/layouts/footer.js?");

/***/ }),

/***/ "./public/js/layouts/header.js":
/*!*************************************!*\
  !*** ./public/js/layouts/header.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Header = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _users = __webpack_require__(/*! ../components/users */ \"./public/js/components/users.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Header = function () {\n    function Header() {\n        _classCallCheck(this, Header);\n    }\n\n    _createClass(Header, [{\n        key: 'loadHeader',\n        value: function loadHeader() {\n            var user = new _users.Users();\n\n            user.loadUsers();\n\n            console.log('loaded from the Header');\n        }\n    }]);\n\n    return Header;\n}();\n\nexports.Header = Header;\n\n//# sourceURL=webpack:///./public/js/layouts/header.js?");

/***/ }),

/***/ "./public/js/layouts/sidebar.js":
/*!**************************************!*\
  !*** ./public/js/layouts/sidebar.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Sidebar = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _userProfile = __webpack_require__(/*! ../components/user-profile */ \"./public/js/components/user-profile.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Sidebar = function () {\n    function Sidebar() {\n        _classCallCheck(this, Sidebar);\n    }\n\n    _createClass(Sidebar, [{\n        key: 'loadSidebar',\n        value: function loadSidebar() {\n            var profile = new _userProfile.userProfile();\n\n            profile.loadUserProfile();\n\n            console.log('loaded from the Sidebar');\n        }\n    }]);\n\n    return Sidebar;\n}();\n\nexports.Sidebar = Sidebar;\n\n//# sourceURL=webpack:///./public/js/layouts/sidebar.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _dashboard = __webpack_require__(/*! ../../public/js/dashboard/dashboard */ \"./public/js/dashboard/dashboard.js\");\n\nvar _dashboard2 = _interopRequireDefault(_dashboard);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar dashboard = new _dashboard2.default();\n\ndashboard.loadDashboard();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ })

/******/ });
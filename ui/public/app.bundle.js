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
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/App.js":
/*!***********************!*\
  !*** ./public/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nvar _graphQLFetch = _interopRequireDefault(__webpack_require__(/*! ./graphQLFetch */ \"./public/graphQLFetch.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nvar initialIssues = [{\n  id: 1,\n  status: \"New\",\n  owner: \"Ravan\",\n  effort: 5,\n  created: new Date(\"2018-08-15\"),\n  due: undefined,\n  title: \"Error in console when clicking Add\"\n}, {\n  id: 2,\n  status: \"Assigned\",\n  owner: \"Eddie\",\n  effort: 14,\n  created: new Date(\"2018-08-16\"),\n  due: new Date(\"2018-08-30\"),\n  title: \"Missing bottom border on panel\"\n}];\n\nvar IssueFilter = /*#__PURE__*/function (_React$Component) {\n  _inherits(IssueFilter, _React$Component);\n\n  var _super = _createSuper(IssueFilter);\n\n  function IssueFilter() {\n    _classCallCheck(this, IssueFilter);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(IssueFilter, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"div\", null, \"This is a placeholder for the issue filter.\");\n    }\n  }]);\n\n  return IssueFilter;\n}(React.Component);\n\nfunction IssueRow(props) {\n  var issue = props.issue;\n  return /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"td\", null, issue.id), /*#__PURE__*/React.createElement(\"td\", null, issue.status), /*#__PURE__*/React.createElement(\"td\", null, issue.owner), /*#__PURE__*/React.createElement(\"td\", null, issue.created.toDateString()), /*#__PURE__*/React.createElement(\"td\", null, issue.effort), /*#__PURE__*/React.createElement(\"td\", null, issue.due ? issue.due.toDateString() : \" \"), /*#__PURE__*/React.createElement(\"td\", null, issue.title));\n}\n\nfunction IssueTable(props) {\n  var issueRows = props.issues.map(function (issue) {\n    return /*#__PURE__*/React.createElement(IssueRow, {\n      key: issue.id,\n      issue: issue\n    });\n  });\n  return /*#__PURE__*/React.createElement(\"table\", {\n    className: \"bordered-table\"\n  }, /*#__PURE__*/React.createElement(\"thead\", null, /*#__PURE__*/React.createElement(\"tr\", null, /*#__PURE__*/React.createElement(\"th\", null, \"ID\"), /*#__PURE__*/React.createElement(\"th\", null, \"Status\"), /*#__PURE__*/React.createElement(\"th\", null, \"Owner\"), /*#__PURE__*/React.createElement(\"th\", null, \"Created\"), /*#__PURE__*/React.createElement(\"th\", null, \"Effort\"), /*#__PURE__*/React.createElement(\"th\", null, \"Due Date\"), /*#__PURE__*/React.createElement(\"th\", null, \"Title\"))), /*#__PURE__*/React.createElement(\"tbody\", null, issueRows));\n}\n\nvar IssueAdd = /*#__PURE__*/function (_React$Component2) {\n  _inherits(IssueAdd, _React$Component2);\n\n  var _super2 = _createSuper(IssueAdd);\n\n  function IssueAdd() {\n    var _this;\n\n    _classCallCheck(this, IssueAdd);\n\n    _this = _super2.call(this);\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(IssueAdd, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit(e) {\n      e.preventDefault();\n      var form = document.forms.issueAdd;\n      var issue = {\n        owner: form.owner.value,\n        title: form.title.value,\n        due: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 10)\n      };\n      this.props.createIssue(issue);\n      form.owner.value = \"\";\n      form.title.value = \"\";\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(\"form\", {\n        name: \"issueAdd\",\n        onSubmit: this.handleSubmit\n      }, /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"owner\",\n        placeholder: \"Owner\"\n      }), /*#__PURE__*/React.createElement(\"input\", {\n        type: \"text\",\n        name: \"title\",\n        placeholder: \"Title\"\n      }), /*#__PURE__*/React.createElement(\"button\", null, \"Add\"));\n    }\n  }]);\n\n  return IssueAdd;\n}(React.Component);\n\nvar IssueList = /*#__PURE__*/function (_React$Component3) {\n  _inherits(IssueList, _React$Component3);\n\n  var _super3 = _createSuper(IssueList);\n\n  function IssueList() {\n    var _this2;\n\n    _classCallCheck(this, IssueList);\n\n    _this2 = _super3.call(this);\n    _this2.state = {\n      issues: []\n    };\n    _this2.createIssue = _this2.createIssue.bind(_assertThisInitialized(_this2));\n    return _this2;\n  }\n\n  _createClass(IssueList, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.loadData();\n    }\n  }, {\n    key: \"loadData\",\n    value: function () {\n      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var query, data;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                query = \"query {\\n      issueList {\\n        id title status owner\\n        created effort due\\n      }\\n    }\";\n                _context.next = 3;\n                return (0, _graphQLFetch.default)(query);\n\n              case 3:\n                data = _context.sent;\n\n                if (data) {\n                  this.setState({\n                    issues: data.issueList\n                  });\n                }\n\n              case 5:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function loadData() {\n        return _loadData.apply(this, arguments);\n      }\n\n      return loadData;\n    }()\n  }, {\n    key: \"createIssue\",\n    value: function () {\n      var _createIssue = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(issue) {\n        var query, data;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                query = \"mutation issueAdd($issue: IssueInputs!) {\\n      issueAdd(issue: $issue) {\\n        id\\n      }\\n    }\";\n                _context2.next = 3;\n                return (0, _graphQLFetch.default)(query, {\n                  issue: issue\n                });\n\n              case 3:\n                data = _context2.sent;\n\n                if (data) {\n                  this.loadData();\n                }\n\n              case 5:\n              case \"end\":\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function createIssue(_x) {\n        return _createIssue.apply(this, arguments);\n      }\n\n      return createIssue;\n    }()\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(\"h1\", null, \"Issue Tracker\"), /*#__PURE__*/React.createElement(IssueFilter, null), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(IssueTable, {\n        issues: this.state.issues\n      }), /*#__PURE__*/React.createElement(\"hr\", null), /*#__PURE__*/React.createElement(IssueAdd, {\n        createIssue: this.createIssue\n      }));\n    }\n  }]);\n\n  return IssueList;\n}(React.Component);\n\nvar element = /*#__PURE__*/React.createElement(IssueList, null);\nReactDOM.render(element, document.getElementById(\"contents\"));\n\n//# sourceURL=webpack:///./public/App.js?");

/***/ }),

/***/ "./public/graphQLFetch.js":
/*!********************************!*\
  !*** ./public/graphQLFetch.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = graphQLFetch;\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar dateRegex = new RegExp(\"^\\\\d\\\\d\\\\d\\\\d-\\\\d\\\\d-\\\\d\\\\d\");\n\nfunction jsonDateReviver(key, value) {\n  if (dateRegex.test(value)) return new Date(value);\n  return value;\n}\n\nfunction graphQLFetch(_x) {\n  return _graphQLFetch.apply(this, arguments);\n}\n\nfunction _graphQLFetch() {\n  _graphQLFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {\n    var variables,\n        response,\n        body,\n        result,\n        error,\n        details,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            variables = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};\n            _context.prev = 1;\n            _context.next = 4;\n            return fetch(window.ENV.UI_API_ENDPOINT, {\n              method: \"POST\",\n              headers: {\n                \"Content-Type\": \"application/json\"\n              },\n              body: JSON.stringify({\n                query: query,\n                variables: variables\n              })\n            });\n\n          case 4:\n            response = _context.sent;\n            _context.next = 7;\n            return response.text();\n\n          case 7:\n            body = _context.sent;\n            result = JSON.parse(body, jsonDateReviver);\n\n            if (result.errors) {\n              error = result.errors[0];\n\n              if (error.extensions.code == \"BAD_USER_INPUT\") {\n                details = error.extensions.exception.errors.join(\"\\n \");\n                alert(\"\".concat(error.message, \":\\n \").concat(details));\n              } else {\n                alert(\"\".concat(error.extensions.code, \": \").concat(error.message));\n              }\n            }\n\n            return _context.abrupt(\"return\", result.data);\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](1);\n            alert(\"Error in sending data to server: \".concat(_context.t0.message));\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[1, 13]]);\n  }));\n  return _graphQLFetch.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./public/graphQLFetch.js?");

/***/ })

/******/ });
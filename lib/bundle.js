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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/disjointset_unionfind.js":
/*!**************************************!*\
  !*** ./lib/disjointset_unionfind.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\nA disjoint-set data structure implemented using a union-find algorithm that uses path compression and weighted union to \noptimize a find operation on the data structure itself.\n*/\n\nvar DSUnionFind = function () {\n    function DSUnionFind() {\n        var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n\n        _classCallCheck(this, DSUnionFind);\n\n        this.store = new Array(size).fill(null).map(function (e, i) {\n            return i;\n        });\n        this.tree_size = new Array(size).fill(1);\n    }\n\n    _createClass(DSUnionFind, [{\n        key: \"root\",\n        value: function root(id) {\n            var current_id = id;\n            var start_id = id;\n            // find the root and store it in current_id\n            while (this.store[current_id] != current_id) {\n                current_id = this.store[current_id];\n            }\n            // path compression: every element in path to root points to the root\n            // current_id at this point is the root \n            while (this.store[start_id] != current_id) {\n                var next_id = this.store[start_id];\n                this.store[start_id] = id;\n                start_id = next_id;\n            }\n            // return current id (root)\n            return current_id;\n        }\n    }, {\n        key: \"connected\",\n        value: function connected(p, q) {\n            var p_root = this.root(p);\n            var q_root = this.root(q);\n\n            return p_root == q_root;\n        }\n    }, {\n        key: \"connect\",\n        value: function connect(p, q) {\n            var p_root = this.root(p);\n            var q_root = this.root(q);\n\n            // weighted union\n            if (this.tree_size[p_root] < this.tree_size[q_root]) {\n                this.tree_size[q_root] += this.tree_size[p_root];\n                this.store[p_root] = q_root;\n            } else {\n                this.tree_size[p_root] += this.tree_size[q_root];\n                this.store[q_root] = p_root;\n            }\n        }\n    }]);\n\n    return DSUnionFind;\n}();\n\nexports.default = DSUnionFind;\n\n//# sourceURL=webpack:///./lib/disjointset_unionfind.js?");

/***/ }),

/***/ "./lib/entry.js":
/*!**********************!*\
  !*** ./lib/entry.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _main = __webpack_require__(/*! ./main.js */ \"./lib/main.js\");\n\nvar _main2 = _interopRequireDefault(_main);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\ndocument.addEventListener('DOMContentLoaded', function () {\n    var canvas = document.getElementById(\"canvas\");\n    canvas.width = _main2.default.DIM_X;\n    canvas.height = _main2.default.DIM_Y;\n\n    var ctx = canvas.getContext('2d');\n\n    var main = new _main2.default(canvas, ctx, _main2.default.N_SITES, 10);\n    main.displaySites();\n});\n\n//# sourceURL=webpack:///./lib/entry.js?");

/***/ }),

/***/ "./lib/main.js":
/*!*********************!*\
  !*** ./lib/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _simulation = __webpack_require__(/*! ./simulation.js */ \"./lib/simulation.js\");\n\nvar _simulation2 = _interopRequireDefault(_simulation);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Main = function () {\n    function Main(canvas, ctx, n_sites, number_of_simulations) {\n        _classCallCheck(this, Main);\n\n        this.canvas = canvas;\n        this.ctx = ctx;\n        this.current_sumulation = new _simulation2.default(this.canvas, n_sites);\n        this.number_of_simulations = number_of_simulations;\n    }\n\n    _createClass(Main, [{\n        key: 'displaySites',\n        value: function displaySites() {\n            for (var i = 0; i < this.current_sumulation.grid.length; i++) {\n                for (var j = 0; j < this.current_sumulation.grid.length; j++) {\n                    this.current_sumulation.grid[i][j].display(this.ctx);\n                }\n            }\n            return;\n        }\n    }]);\n\n    return Main;\n}();\n\nMain.DIM_X = 500;\nMain.DIM_Y = 500;\nMain.N_SITES = 20;\n\nexports.default = Main;\n\n//# sourceURL=webpack:///./lib/main.js?");

/***/ }),

/***/ "./lib/simulation.js":
/*!***************************!*\
  !*** ./lib/simulation.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _disjointset_unionfind = __webpack_require__(/*! ./disjointset_unionfind.js */ \"./lib/disjointset_unionfind.js\");\n\nvar _disjointset_unionfind2 = _interopRequireDefault(_disjointset_unionfind);\n\nvar _site = __webpack_require__(/*! ./site.js */ \"./lib/site.js\");\n\nvar _site2 = _interopRequireDefault(_site);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Simulation = function () {\n    // creates an nxn grid containing site objects and initializes a DSUnionFind data type\n    function Simulation(canvas, n) {\n        var _this = this;\n\n        _classCallCheck(this, Simulation);\n\n        this.canvas = canvas;\n        this.n = n;\n        // + 2 to account for virtual sites (top and bottom)\n        this.number_of_sites = this.n * this.n + 2;\n        this.store = new _disjointset_unionfind2.default(this.number_of_sites);\n        this.grid = new Array(this.n).fill(null).map(function () {\n            return new Array(_this.n).fill(null);\n        });\n        this.number_of_open_sites = 0;\n\n        var site_width = this.canvas.width / this.n;\n        var site_height = this.canvas.height / this.n;\n        // id with respect to the store \n        var id = 1; // start at 1 since id(0) belongs to top virtual site \n        for (var i = 0; i < this.n; i++) {\n            for (var j = 0; j < this.n; j++) {\n                this.grid[i][j] = new _site2.default(i * site_height, j * site_width, site_width, site_height, id, id);\n                id += 1;\n            }\n        }\n\n        // connect top virtual site to top sites (top most row)\n        for (var _i = 1; _i < this.n; _i++) {\n            // top virtual site id is 0\n            this.store.connect(0, _i);\n            this.grid[0][_i].root = 0;\n        }\n\n        // connect bottom virtual site to bottom sites (bottom most row)\n        var bottom_virtual_site_id = this.number_of_sites - 1;\n        for (var _i2 = 0; _i2 < this.n; _i2++) {\n            var _id = bottom_virtual_site_id - this.n;\n            this.store.connect(bottom_virtual_site_id, _id + _i2);\n            this.grid[this.n - 1][_i2].root = bottom_virtual_site_id;\n        }\n    }\n\n    _createClass(Simulation, [{\n        key: 'openRandomSite',\n        value: function openRandomSite() {\n            debugger;\n            var random_i = Math.floor(Math.random() * (this.n + 1));\n            var random_j = Math.floor(Math.random() * (this.n + 1));\n            var random_site = this.store[random_i][random_j];\n\n            if (random_site.isOpen()) {\n                return;\n            }\n\n            random_site.open();\n\n            // check to see if there are any open neighboring sites\n\n            // check right neighbor\n            if (this.random_j + 1 <= this.n - 1) {\n                var _right_neighbor_site = this.grid[random_i][random_j + 1];\n                if (_right_neighbor_site.isOpen()) {\n                    this.store.connect(random_site.id, _right_neighbor_site.id);\n                    random_site.root = this.store[random_site.id];\n                    _right_neighbor_site.root = this.store[_right_neighbor_site.id];\n                }\n            }\n\n            // check left neighbor\n            if (this.random_j - 1 >= 0) {\n                var left_neighbor_site = this.grid[random_i][random_j - 1];\n                if (left_neighbor_site.isOpen()) {\n                    this.store.connect(random_site.id, left_neighbor_site.id);\n                    random_site.root = this.store[random_site.id];\n                    left_neighbor_site.root = this.store[right_neighbor_site.id];\n                }\n            }\n\n            // check top neighbor\n            if (this.random_i + 1 <= this.n - 1) {\n                var top_neighbor_site = this.grid[random_i + 1][random_j];\n                if (top_neighbor_site.isOpen()) {\n                    this.store.connect(random_site.id, top_neighbor_site.id);\n                    random_site.root = this.store[random_site.id];\n                    top_neighbor_site.root = this.store[top_neighbor_site.id];\n                }\n            }\n\n            // check bottom neighbor\n            if (this.random_i - 1 >= 0) {\n                var bottom_neighbor_site = this.grid[random_i - 1][random_j];\n                if (bottom_neighbor_site.isOpen()) {\n                    this.store.connect(random_site.id, bottom_neighbor_site.id);\n                    random_site.root = this.store[random_site.id];\n                    bottom_neighbor_site.root = this.store[bottom_neighbor_site.id];\n                }\n            }\n        }\n    }]);\n\n    return Simulation;\n}();\n\nexports.default = Simulation;\n\n//# sourceURL=webpack:///./lib/simulation.js?");

/***/ }),

/***/ "./lib/site.js":
/*!*********************!*\
  !*** ./lib/site.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\ninstance state can be either 1, 2 or 3. \n1 => closed \n2 => open \n*/\n\nvar Site = function () {\n    function Site(x, y, width, height, root, id) {\n        _classCallCheck(this, Site);\n\n        this.x = x;\n        this.y = y;\n        this.width = width;\n        this.height = height;\n        this.root = root;\n        this.state = 0;\n        this.id = id;\n        this.fill_color = \"red\";\n    }\n\n    _createClass(Site, [{\n        key: \"display\",\n        value: function display(ctx) {\n            ctx.fillStyle = this.fill_color;\n            ctx.strokeStyle = \"black\";\n            ctx.fillRect(this.x, this.y, this.width, this.height);\n            ctx.strokeRect(this.x, this.y, this.width, this.height);\n        }\n    }, {\n        key: \"isOpen\",\n        value: function isOpen() {\n            this.fill_color = \"white\";\n            return this.state == 1;\n        }\n    }, {\n        key: \"open\",\n        value: function open() {\n            this.state = 1;\n        }\n    }, {\n        key: \"connectedToTop\",\n        value: function connectedToTop(store) {\n            if (store.root(this.root) == 0) {\n                this.fill_color = \"blue\";\n                return true;\n            } else {\n                return false;\n            }\n        }\n    }]);\n\n    return Site;\n}();\n\nexports.default = Site;\n\n//# sourceURL=webpack:///./lib/site.js?");

/***/ })

/******/ });
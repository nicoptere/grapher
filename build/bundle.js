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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Grapher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Grapher */ \"./src/Grapher.js\");\n\n\nlet dom = document.getElementById(\"elt\");\nvar grapher = new _src_Grapher__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dom);\n\nfunction raf() {\n\n    requestAnimationFrame(raf);\n    grapher.update();\n}\nraf();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./src/Draggable.js":
/*!**************************!*\
  !*** ./src/Draggable.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Draggable; });\nlet element, trigger, pos1, pos2, pos3, pos4;\nlet dragging = false;\nclass Draggable {\n\n    constructor(domTrigger, domElement) {\n\n        trigger = domTrigger;\n        element = domElement || trigger;\n        trigger.addEventListener(\"mousedown\", this.onDown);\n        trigger.addEventListener(\"mouseup\", this.onUp);\n        document.addEventListener(\"mousemove\", this.onDrag);\n    }\n\n    onDown(e) {\n        e = e || window.event;\n        e.preventDefault();\n        pos3 = e.clientX;\n        pos4 = e.clientY;\n        dragging = true;\n    }\n\n    onDrag(e) {\n        if (dragging === false) return;\n        e = e || window.event;\n        e.preventDefault();\n        pos1 = pos3 - e.clientX;\n        pos2 = pos4 - e.clientY;\n        pos3 = e.clientX;\n        pos4 = e.clientY;\n        element.style.top = element.offsetTop - pos2 + \"px\";\n        element.style.left = element.offsetLeft - pos1 + \"px\";\n    }\n\n    onUp() {\n        dragging = false;\n    }\n\n}\n\n//# sourceURL=webpack:///./src/Draggable.js?");

/***/ }),

/***/ "./src/Grapher.js":
/*!************************!*\
  !*** ./src/Grapher.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Grapher; });\n/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Renderer */ \"./src/Renderer.js\");\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Item */ \"./src/Item.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _Draggable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Draggable */ \"./src/Draggable.js\");\n\n\n\n\n\n\nlet startTime;\nclass Grapher {\n\n        constructor(domElement, width = -1, height = -1) {\n\n                if (domElement === undefined) {\n                        domElement = document.body;\n                        width = 512;\n                        height = 512;\n                }\n                this.container = domElement;\n                this.container.classList.add(\"graphHolder\");\n\n                if (width === -1 && height === -1) {\n\n                        let rect = domElement.getBoundingClientRect();\n                        var size = Math.min(rect.width, rect.height);\n                        width = size;\n                        height = size;\n                }\n\n                this.renderer = new _Renderer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this, Math.max(256, width), Math.max(256, height));\n\n                new _Draggable__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.renderer.header, domElement);\n\n                this.items = [];\n\n                _functions__WEBPACK_IMPORTED_MODULE_2__[\"default\"].init();\n\n                _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init(this);\n\n                this.startTime = Date.now();\n        }\n\n        addNew(x) {\n\n                let item = new _Item__WEBPACK_IMPORTED_MODULE_1__[\"default\"](x);\n\n                this.container.appendChild(item.domeElement);\n\n                item.deleteBtn.addEventListener(\"mousedown\", () => {\n                        this.dispose(item);\n                });\n\n                this.items.push(item);\n\n                return item;\n        }\n\n        dispose(toDelete) {\n\n                var i = this.items.indexOf(toDelete);\n                if (i === -1) return;\n\n                //new re-indexed list\n                let id = 0;\n                var newItems = this.items.filter(it => {\n\n                        it.textField.classList.remove(\"highlight-text-field\");\n\n                        if (it.id !== toDelete.id) {\n\n                                //name is dynamically computed from the id\n                                let tmpId = it.id;\n\n                                //this performs a temporary change of id\n                                it.id = id++;\n\n                                //gets the new name\n                                it.newName = it.name;\n\n                                //stores the new id\n                                it.newId = it.id;\n\n                                //and resets the previous id\n                                it.id = tmpId;\n\n                                return it;\n                        }\n                });\n\n                //checks if the method to delete is used by other methods\n                var reg = new RegExp(\"\\\\b(\" + toDelete.name + \")\\\\b\\\\s*\\\\(\", \"gi\");\n                var usage = [];\n                this.items.forEach(s => {\n\n                        if (s.name === toDelete.name) return;\n                        if (reg.test(s.method) === true) {\n                                usage.push(s);\n                        }\n                });\n\n                //if so, highlights the fields where it is used\n                if (usage.length > 0) {\n                        console.warn(\"item in use, you should fix the usage of \" + toDelete.name + \" before deleting\");\n                        usage.forEach(it => {\n                                console.log('in ', it.name, \">\", it.method);\n                                it.textField.classList.add(\"highlight-text-field\");\n                                setTimeout(() => {\n                                        it.textField.classList.remove(\"highlight-text-field\");\n                                }, 750);\n                        });\n                        this.items.forEach(s => {\n                                delete s.newId;\n                                delete s.newName;\n                        });\n                        return;\n                }\n\n                //replace custom functions usage with new names\n                newItems.forEach(s => {\n\n                        var reg = new RegExp(\"\\\\b(\" + s.name + \")\\\\b\\\\s*\\\\(\", \"gi\");\n                        newItems.forEach(o => {\n\n                                if (s === o) return;\n                                o.method = o.method.replace(reg, s.newName + \"(\");\n                        });\n                        s.id = s.newId;\n                        delete s.newId;\n                        delete s.newName;\n                });\n                this.items = newItems;\n\n                _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].update(this.items);\n\n                this.container.removeChild(toDelete.domeElement);\n        }\n\n        update() {\n\n                window.time = (Date.now() - this.startTime) * .001;\n\n                this.items.forEach(item => {\n\n                        item.update(time);\n                });\n\n                _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].update(this.items);\n\n                this.renderer.render(this.items);\n        }\n\n}\n\n//# sourceURL=webpack:///./src/Grapher.js?");

/***/ }),

/***/ "./src/Item.js":
/*!*********************!*\
  !*** ./src/Item.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Item; });\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* harmony import */ var _Grapher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grapher */ \"./src/Grapher.js\");\n\n\n\nconst ALPHABET = \"abcdefghijklmnopqrstuvwxyz\";\nconst COLORS = [\"#FFCC00\", \"#00CC99\", \"#ff0080\", \"#6600CC\", \"#0066CC\"];\n\nlet _id = 0;\nclass Item {\n\n    static set id(value) {\n        _id = value;\n    }\n    static get id() {\n        return _id;\n    }\n\n    constructor(str) {\n\n        this.id = Item.id;\n        this.method = str;\n\n        let name = this.name;\n\n        let domElement = document.createElement('div');\n        domElement.setAttribute(\"name\", name);\n        domElement.classList.add(\"item\");\n        this.domeElement = domElement;\n\n        let label = document.createElement('label');\n        label.setAttribute(\"for\", name);\n        label.innerText = \"\\t\" + name + \"\\t\";\n        domElement.appendChild(label);\n\n        let flag = document.createElement('label');\n        domElement.appendChild(flag);\n\n        let checkbox = document.createElement('input');\n        checkbox.setAttribute(\"id\", name);\n        checkbox.type = \"checkbox\";\n        checkbox.checked = true;\n        domElement.appendChild(checkbox);\n\n        let colorField = document.createElement('input');\n        colorField.type = \"color\";\n        colorField.value = this.color;\n        domElement.appendChild(colorField);\n\n        let textField = document.createElement('input');\n        textField.type = \"text\";\n        textField.tabIndex = this.id + 1;\n        textField.value = str;\n        textField.classList.add(\"highlight-text-idle\");\n        domElement.appendChild(textField);\n\n        let deleteBtn = document.createElement('input');\n        deleteBtn.type = \"button\";\n        deleteBtn.value = \"delete\";\n        domElement.appendChild(deleteBtn);\n\n        this.label = label;\n        this.checkbox = checkbox;\n        this.colorField = colorField;\n        this.deleteBtn = deleteBtn;\n        this.flag = flag;\n        this.textField = textField;\n\n        this.update();\n        Item.id++;\n    }\n\n    update(time = 0) {\n\n        this.active = this.checkbox.checked;\n\n        if (document.activeElement === this.textField) {\n            this.selected = true;\n        }\n\n        let name = this.name;\n\n        this.label.innerText = \"\\t\" + name + \"\\t\";\n\n        var str = this.textField.value.replace(/\\s\\s+/g, ' '); //remove duplicate spaces\n\n        //prevent stack overflow (recursive call)\n        var reg = new RegExp(\"\\\\b(\" + name + \")\\\\b\\\\s*\\\\(\", \"gi\");\n        if (reg.test(str)) {\n            this.valid = false;\n            return;\n        }\n\n        try {\n            eval(\"window[name] = functions[name] = function(x){ return \" + str + \"; }; \");\n            _functions__WEBPACK_IMPORTED_MODULE_0__[\"default\"][name](1);\n            this.valid = true;\n        } catch (e) {\n            this.valid = false;\n            return;\n        }\n        _functions__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dictionary[name] = \"(\" + str.replace(/x\\b/gi, \"?\") + \")\";\n        this.method = str;\n    }\n\n    //accessors\n\n    get name() {\n        let num = this.id < ALPHABET.length ? '' : ~~(this.id / ALPHABET.length) - 1;\n        return ALPHABET.charAt(this.id % ALPHABET.length) + num;\n    }\n    get color() {\n        return COLORS[this.id % COLORS.length];\n    }\n\n    get active() {\n        return this._active;\n    }\n    set active(value) {\n        this.checkbox.checked = value;\n        this._active = value;\n    }\n\n    get method() {\n        return this._method;\n    }\n    set method(value) {\n        this._method = value;\n    }\n\n    get selected() {\n        return this._selected;\n    }\n    set selected(value) {\n        this._selected = value;\n    }\n\n    get valid() {\n        return this._valid;\n    }\n    set valid(value) {\n        this._valid = value;\n        if (value) {\n            this.flag.classList.remove(\"invalid\");\n        } else {\n            this.flag.classList.add(\"invalid\");\n        }\n    }\n\n}\n\n//# sourceURL=webpack:///./src/Item.js?");

/***/ }),

/***/ "./src/Renderer.js":
/*!*************************!*\
  !*** ./src/Renderer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Renderer; });\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\n\nlet ctx, w, h, range, scale;\n\nclass Renderer {\n\n    constructor(main, width = 512, height = 512) {\n\n        let holder = document.createElement(\"div\");\n        holder.classList.add('resize');\n        holder.style.width = width + \"px\";\n        holder.style.height = height + \"px\";\n        this.holder = holder;\n\n        const header = document.createElement(\"div\");\n        header.classList.add('graph-header');\n        holder.appendChild(header);\n        this.header = header;\n\n        const canvas = document.createElement(\"canvas\");\n        w = canvas.width = width;\n        h = canvas.height = height;\n        canvas.style.pointerEvents = \"none\";\n        this.ctx = ctx = canvas.getContext('2d');\n        holder.appendChild(canvas);\n\n        main.container.appendChild(holder);\n        this.container = main.container;\n\n        this.canvas = canvas;\n        this.margin = 20;\n\n        this.ui = new _UI__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main, this.holder);\n    }\n\n    render(list) {\n\n        let crect = this.container.getBoundingClientRect();\n        let hrect = this.holder.getBoundingClientRect();\n        w = this.canvas.width = Math.min(crect.width, hrect.width);\n        h = this.canvas.height = Math.min(crect.height, hrect.height) - 8;\n        this.holder.style.width = crect.width - 2 + \"px\";\n        this.holder.style.height = Math.min(crect.height, hrect.height) - 2 + \"px\";\n\n        ctx.save();\n        ctx.lineWidth = .5;\n        ctx.fillStyle = \"#FFF\";\n        ctx.clearRect(0, 0, w, h);\n        ctx.strokeStyle = \"#AAA\";\n\n        let range = this.ui.range;\n        let size = Math.min(w, h) - this.margin;\n        scale = range === 0 ? 1 / size : 2 / size;\n        if (range === 0) {\n            let one = size;\n            ctx.translate(this.margin * .5, h - this.margin * .5);\n            ctx.rect(0, 0, one, -one);\n            ctx.stroke();\n        } else {\n            let one = size / 2;\n            ctx.translate(w / 2, h / 2);\n            ctx.rect(-one, one, one * 2, -one * 2);\n            ctx.stroke();\n        }\n\n        ctx.beginPath();\n        ctx.moveTo(0, -h);\n        ctx.lineTo(0, h);\n        ctx.moveTo(-w, 0);\n        ctx.lineTo(w, 0);\n        ctx.stroke();\n\n        ctx.lineWidth = 1;\n        list.forEach(item => {\n            this.renderItem(item, range);\n        });\n\n        ctx.restore();\n    }\n\n    lerp(t, a, b) {\n        return a * (1 - t) + b * t;\n    }\n\n    normalize(t, a, b) {\n        return (t - a) / (b - a);\n    }\n\n    remap(t, a0, b0, a1, b1) {\n        return this.lerp(this.normalize(t, a0, b0), a1, b1);\n    }\n\n    renderItem(item, range) {\n\n        if (item.active === false) return;\n        if (item.valid === false) return;\n\n        var fc = functions[item.name];\n        ctx.strokeStyle = item.colorField.value || \"#F00\";\n        ctx.beginPath();\n\n        for (var i = -w / 2 - this.margin; i <= w / 2 + this.margin; i++) {\n\n            var x = range === 0 ? this.normalize(i, -w / 2, w / 2) : this.remap(i, -w / 2, w / 2, -1, 1);\n            var y = -fc(x);\n\n            if (isNaN(y) || y === Math.POSITIVE_INFINITY || y === Math.NEGATIVE_INFINITY) {\n                ctx.lineTo(x / scale, 0);\n            } else {\n                ctx.lineTo(x / scale, y / scale);\n            }\n        }\n        ctx.stroke();\n    }\n\n}\n\n//# sourceURL=webpack:///./src/Renderer.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return UI; });\n\nclass UI {\n\n    constructor(main, container) {\n\n        this.createCSS();\n\n        let domElement = document.createElement('div');\n        domElement.setAttribute(\"name\", \"UI\");\n        this.domElement = domElement;\n\n        //add new button:\n        let el = document.createElement(\"button\");\n        el.innerHTML = \"add new\";\n        el.addEventListener(\"mousedown\", () => {\n            main.addNew(\"x\");\n        }, false);\n        domElement.appendChild(el);\n\n        //spaces types\n        [\"unit\", \"bi-unit\"].forEach((str, i, a) => {\n\n            let el = document.createElement(\"input\");\n            el.type = \"radio\";\n            el.name = \"range\";\n            el.value = i;\n            el.setAttribute(\"id\", str);\n            el.checked = i === a.length - 1;\n            domElement.appendChild(el);\n\n            let la = document.createElement(\"label\");\n            la.setAttribute(\"for\", str);\n            la.innerHTML = str;\n            domElement.appendChild(la);\n        });\n        main.container.appendChild(domElement);\n    }\n\n    get range() {\n        return parseFloat(this.domElement.querySelector('input[name=range]:checked').value);\n    }\n\n    createCSS() {\n\n        //this creates a CSS file, the hard way.\n        var css = document.createElement('style');\n        css.type = 'text/css';\n        css.appendChild(document.createTextNode(`\n        \n            .graphHolder{\n                overflow:hidden;\n                resize: both;\n                z-index: 10;\n                position.absolute;\n                border: 1px solid #EEE;\n            }\n            .graph-header{\n                width : 100%;\n                height : 8px;\n                background-color : #eeeeee;\n                display : block;\n                color : #CCCCCC;\n                z-index : 10;\n            }\n            .item{\n                width:100%;\n                display: flex;\n                align-items: center;\n            }\n            .invalid{\" +\n                pointer-events: none;\n                position:absolute;\n                border-style: solid;\n                border-width: 0 8px 16px 8px;\n                border-color: transparent transparent #CC0000 transparent;\n            }\n            \n            .resize{\n                overflow:hidden;\n                resize: vertical;\n                border: 1px solid #EEE;\n            }\n            input[type=text]{\n                -webkit-transition: all 0.5s;\n                transition: all 0.5s;\n            }\n            input[type=text], input[type=button] {\n                padding: 6px 10px;\n                width: auto;\n                margin: 4px 0;\n                box-sizing: border-box;\n                // border: 1px solid #EEE;\n                outline: none;\n            }\n            \n            input[type=color] {\n                padding:2px;\n                margin:0 8px 0 8px;\n                height:30px;\n                width:30px;\n                border: 0;\n            }\n            \n            input[type=text]:focus {\n                width: 100%;\n                border: 1px solid #AAA;\n            }\n            .highlight-text-idle{\n                border: 1px solid #EEE;\n            }\n            \n            .highlight-text-field{\n                border: 1px solid #D00;\n            }\n            \n            input[type=button]{\n                background-color:#EEEEEE;\n            }\n            \n            input[type=button]:hover {\n                background-color:#F6F6F6;\n            }`));\n        document.getElementsByTagName(\"head\")[0].appendChild(css);\n    }\n\n}\n\n//# sourceURL=webpack:///./src/UI.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return functions; });\n\nclass functions {\n\n        static init() {\n\n                window.functions = functions;\n\n                var dictionary = {};\n                var builtInfunctions = [\"sin\", \"cos\", \"pow\", \"tan\", \"log\", \"exp\", \"abs\", \"sqrt\", \"asin\", \"acos\", \"min\", \"max\", \"ceil\", \"floor\", \"PI\", \"atan\", \"abs\"];\n                builtInfunctions.forEach(function (f) {\n                        window[f] = Math[f];\n                        dictionary[f] = f + \"(?)\";\n                        functions[f] = Math[f];\n                });\n\n                // GLSL methods\n                // TODO implement GLSL methods (& types?!)\n                var declarations = {\n\n                        smoothstep: \"function(a,b,t) { return mix( a,b, t * t * (3.0 - 2.0 * t)); }\",\n                        mix: \"function(a,b,t) { return a * (1 - t) + b * t; }\",\n                        fract: \"function(x) { return x % 1; }\",\n                        mod: \"function(x,a) { return x % a; }\",\n                        sign: \"function(x) { return x >= 0 ? 1 : -1; }\",\n                        clamp: \"function(x, min, max) {return Math.min( max, Math.max( min, x ) );}\"\n\n                };\n\n                for (const key in declarations) {\n                        eval(\"window[ key ] = functions[ key ] = \" + declarations[key]);\n                }\n\n                functions.dictionary = dictionary;\n        }\n\n}\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return storage; });\n\nclass storage {\n\n    static init(main) {\n\n        //rebuilds formulas if they were stored locally\n        var customMethods = JSON.parse(localStorage.getItem('customMethods'));\n        //customMethods   = [ \"tan( sin( fract( x * PI+time ) ) )*cos( x * PI * 2 - time)\", \"clamp( a( x-time ) * a ( x ),0,1)\", \"cos( x )\", \"x*c(x)*sin( x )\" ]\n\n        console.log(customMethods);\n        if (customMethods !== null && customMethods.length > 0) {\n\n            customMethods.forEach(function (s) {\n                main.addNew(s);\n            });\n        } else {\n            [\"mix( b(x), c(x ), d(x )) \", \"smoothstep( .25,.75,abs(sin(x+time)))\", \"fract(abs(x)*20)>.5\", \"sin(x*PI+time*2)*.25\"].forEach((x, i) => {\n                var item = main.addNew(x);\n                item.active = i === 0;\n            });\n        }\n    }\n\n    static update(items) {\n\n        //saves the customMethods locally to display something on load\n        localStorage.setItem('customMethods', JSON.stringify(items.map(item => {\n            return item.method;\n        })));\n    }\n\n}\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ })

/******/ });
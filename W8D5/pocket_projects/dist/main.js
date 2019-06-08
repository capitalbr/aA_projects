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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n    constructor() {\n        const currentTime = new Date();\n\n        this.hours = currentTime.getHours();\n        this.minutes = currentTime.getMinutes();\n        this.seconds = currentTime.getSeconds();\n\n        // 3. Call printTime.\n        // this.printTime();\n        Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this.printTime(), clockElement);\n        \n        // 4. Schedule the tick at 1 second intervals.\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    printTime() {\n        // Format the time in HH:MM:SS\n        const timeString = [this.hours, this.minutes, this.seconds].join(\":\");\n\n        // Use console.log to print it.\n        // console.log(timeString);\n        return timeString;\n    }\n\n    _tick() {\n        // 1. Increment the time by one second.\n        this._incrementSeconds();\n\n        // 2. Call printTime.\n        // this.printTime();\n        Object(_warmup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(clock.printTime(), clockElement);\n    }\n\n    _incrementSeconds() {\n        // 1. Increment the time by one second.\n        this.seconds += 1;\n        if (this.seconds === 60) {\n            this.seconds = 0;\n            this._incrementMinutes();\n        }\n    }\n\n    _incrementMinutes() {\n        this.minutes += 1;\n        if (this.minutes === 60) {\n            this.minutes = 0;\n            this._incrementHours();\n        }\n    }\n\n    _incrementHours() {\n        this.hours = (this.hours + 1) % 24;\n    }\n}\n\nlet clockElement = document.getElementById('clock');\nconst clock = new Clock();\n\n// htmlGenerator(clock.printTime(), clockElement);\n\n\n// module.exports = Clock;   //change to exports in the class definition\n\n//# sourceURL=webpack:///./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\n\nfunction dogLinkCreator() {\n  let retArr = [];\n  for (let i = 0; i < Object.keys(dogs).length; i++) {\n    let a = document.createElement(\"a\");\n    let iDog = Object.keys(dogs)[i]\n    a.innerHTML = iDog;\n    a.setAttribute(\"href\", `${dogs[iDog]}`);\n    let li = document.createElement(\"li\");\n    li.classList.add('dog-link');\n    li.appendChild(a);\n    retArr.push(li);\n  }\n  return retArr;\n}\n\nfunction attachDogLinks() {\n  const dogLinks = dogLinkCreator();\n  for(let i =0;i<dogLinks.length;i++) {\n    let ul = document.getElementsByClassName(\"drop-down-dog-list\")[0];\n    ul.appendChild(dogLinks[i]);\n  }\n}\n\nattachDogLinks();\n\nfunction handleEnter () {\n  let lis = document.getElementsByClassName('dog-link');\n  for(let i=0;i<lis.length;i++) {\n    lis[i].classList.remove(\"off\");\n  }\n}\n\nfunction handleLeave () {\n  let lis = document.getElementsByClassName('dog-link');\n  for(let i=0;i<lis.length;i++) {\n    lis[i].classList.add(\"off\");\n  }\n}\n\nconst dropDown = document.getElementsByClassName(\"drop-down-dog-nav\")[0];\ndropDown.addEventListener(\"mouseenter\",  handleEnter);\ndropDown.addEventListener(\"mouseleave\", handleLeave);\n\n\n\n\n\n\n\n\n\n\n\n\n\n// module.exports = {\n//   method: function () { },\n//   otherMethod: function () { }\n// }\n\n// exports.method = function () { };\n// exports.otherMethod = function () { };\n\n\n\n// return arr.map( el => el instanceof Array ? deepDup(el) : el);\n\n//# sourceURL=webpack:///./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n/* harmony import */ var _drop_down__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drop_down__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo_list */ \"./src/todo_list.js\");\n/* harmony import */ var _todo_list__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_todo_list__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo_list.js":
/*!**************************!*\
  !*** ./src/todo_list.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\nlet todos = [];\n\nlet ul = document.querySelectorAll(\".todos\")[0];\n\nlet form = document.querySelectorAll(\".add-todo-form\")[0];\n\n// function addTodo (e) {\n\n\n\n\n\nconst addTodo = (e) => {\n    e.preventDefault();\n    let input = document.getElementsByName(\"add-todo\")[0];\n    let todo = {done: 'false', value: input.value }\n    todos.push(todo);\n    input.value = \"\";\n    while (ul.firstChild) {\n        ul.removeChild(ul.firstChild);\n    }\n    populateList();\n    localStorage.setItem('ourTodos', JSON.stringify(todos));\n    // ul.appendChild(label);\n    e.currentTarget.reset();\n}\n\nfunction populateList () {\n    let prevToDos = localStorage.getItem('ourTodos');\n    storedToDos = JSON.parse(prevToDos);\n    storedToDos.forEach( el => {\n        let li = document.createElement(\"li\");\n        let checkbox = document.createElement(\"input\");\n        checkbox.setAttribute('type', 'checkbox');\n       \n        let label = document.createElement(\"label\");\n        label.innerHTML = el.value;\n    \n        if (el.done === true) {\n            checkbox.checked = true;\n        } else {\n            checkbox.checked = false;\n        }\n\n        li.appendChild(checkbox);\n        li.appendChild(label);\n        ul.appendChild(li);\n    })\n   \n}\n\n\n\n\n\n\nform.addEventListener(\"submit\", addTodo); \n// form.addEventListener(\"submit\", populateList); \n\n\n//< input type = \"checkbox\" name = \"vehicle3\" value = \"Boat\" checked > I have a boat<br>\n\n//# sourceURL=webpack:///./src/todo_list.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    \n    // if (Array.from(htmlElement.chidren).length > 0) {\n    if (htmlElement.children) {\n        Array.from(htmlElement.children).forEach((child) => {\n            htmlElement.removeChild(child);\n        })\n    }\n\n    let pEl = document.createElement(\"p\");\n    let contentP = document.createTextNode(`${string}`);\n    pEl.appendChild(contentP);\n    // pEl.innerHTML = string;\n   \n    htmlElement.appendChild(pEl);\n\n};\n\n// window.htmlGenerator = htmlGenerator\nhtmlGenerator('Funny.', partyHeader);\n\n// function addElement() {\n//     // create a new div element \n//     var newDiv = document.createElement(\"div\");\n//     // and give it some content \n//     var newContent = document.createTextNode(\"Hi there and greetings!\");\n//     // add the text node to the newly created div\n//     newDiv.appendChild(newContent);\n\n    // add the newly created element and its content into the DOM \n    // var currentDiv = document.getElementById(\"div1\");\n    // document.body.insertBefore(newDiv, currentDiv);\n// }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (htmlGenerator);\n\n//# sourceURL=webpack:///./src/warmup.js?");

/***/ })

/******/ });
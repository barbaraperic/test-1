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

/***/ "./src/API.js":
/*!********************!*\
  !*** ./src/API.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const pkmnURL = "https://pokeapi.co/api/v2/pokemon/ditto";

const createPkmnCard = (imgURL, name) => {
  const parent = document.createElement("figure");
  const pkmnImg = document.createElement("img");
  const pkmnName = document.createElement("figcaption");
  pkmnImg.src = imgURL;
  pkmnName.innerText = name;
  parent.appendChild(pkmnImg);
  parent.appendChild(pkmnName);
  document.querySelector(".tasks").appendChild(parent);
};

const displayPkmnCard = () => {
  fetch(pkmnURL).then(response => response.json()).then(data => createPkmnCard(data.sprites.front_default, data.name));
};

/* harmony default export */ __webpack_exports__["default"] = (displayPkmnCard);

/***/ }),

/***/ "./src/checkOffTask.js":
/*!*****************************!*\
  !*** ./src/checkOffTask.js ***!
  \*****************************/
/*! exports provided: checkOffTask, checkOffAllTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkOffTask", function() { return checkOffTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkOffAllTasks", function() { return checkOffAllTasks; });
/* harmony import */ var _API__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./API */ "./src/API.js");

const undoneTasks = document.querySelector(".undone-tasks");
const doneTasks = document.querySelector(".done-tasks");
const hrEl = document.querySelector("hr");

function checkOffTask(e) {
  e.target.classList.toggle("fa-circle");
  e.target.classList.toggle("fa-solid");
  e.target.classList.toggle("fa-regular");
  e.target.classList.toggle("fa-check");
  e.path[2].firstChild.classList.toggle("crossedOut");

  if (e.path[3].className === "undone-tasks") {
    doneTasks.appendChild(e.path[2]);
  } else {
    undoneTasks.appendChild(e.path[2]);
  }

  if (doneTasks.hasChildNodes() && undoneTasks.hasChildNodes()) {
    hrEl.classList.remove("undisplayed");
  } else {
    hrEl.classList.add("undisplayed");
  }

  Object(_API__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

function checkOffAllTasks() {
  for (let i = undoneTasks.childNodes.length - 1; i >= 0; i -= 1) {
    undoneTasks.childNodes[i].childNodes[1].childNodes[1].classList.remove("fa-circle");
    undoneTasks.childNodes[i].childNodes[1].childNodes[1].classList.add("fa-solid");
    undoneTasks.childNodes[i].childNodes[1].childNodes[1].classList.remove("fa-regular");
    undoneTasks.childNodes[i].childNodes[1].childNodes[1].classList.add("fa-check");
    undoneTasks.childNodes[i].firstChild.classList.add("crossedOut");
    doneTasks.appendChild(undoneTasks.childNodes[i]);

    if (!undoneTasks.hasChildNodes()) {
      hrEl.classList.add("undisplayed");
    }
  }
}



/***/ }),

/***/ "./src/createTask.js":
/*!***************************!*\
  !*** ./src/createTask.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkOffTask_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkOffTask.js */ "./src/checkOffTask.js");
/* harmony import */ var _removeTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeTasks */ "./src/removeTasks.js");


const undoneTasks = document.querySelector(".undone-tasks");
const doneTasks = document.querySelector(".done-tasks");
const taskInput = document.querySelector(".task-input");
const hrEl = document.querySelector("hr");

class EmptyTask {
  constructor(content) {
    this.content = content;
  }

  createTask() {
    const task = document.createElement("li");
    const iElement1 = document.createElement("i");
    const iElement2 = document.createElement("i");
    const divEl = document.createElement("div");
    const spanEl = document.createElement("span");
    spanEl.innerText = this.content;
    task.appendChild(spanEl);
    task.appendChild(divEl);
    iElement2.classList.add("fa-solid", "fa-trash-can");
    iElement2.addEventListener("click", _removeTasks__WEBPACK_IMPORTED_MODULE_1__["removeTask"]);
    divEl.appendChild(iElement2);
    iElement1.classList.add("fa-regular", "fa-lg", "fa-circle");
    divEl.appendChild(iElement1);
    iElement1.addEventListener("click", _checkOffTask_js__WEBPACK_IMPORTED_MODULE_0__["checkOffTask"]);
    return task;
  }

}

function appendTask() {
  if (taskInput.value !== "") {
    let newTask = new EmptyTask(taskInput.value);
    newTask = newTask.createTask();
    undoneTasks.appendChild(newTask);
    taskInput.value = "";
  }

  if (doneTasks.hasChildNodes()) {
    hrEl.classList.remove("undisplayed");
  }
}

/* harmony default export */ __webpack_exports__["default"] = (appendTask);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTask */ "./src/createTask.js");
/* harmony import */ var _checkOffTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkOffTask.js */ "./src/checkOffTask.js");
/* harmony import */ var _removeTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./removeTasks */ "./src/removeTasks.js");
/* harmony import */ var _resetTasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resetTasks */ "./src/resetTasks.js");




document.querySelector(".task-btn").addEventListener("click", _createTask__WEBPACK_IMPORTED_MODULE_0__["default"]);
document.querySelector(".deleteAll").addEventListener("click", _removeTasks__WEBPACK_IMPORTED_MODULE_2__["removeAllTasks"]);
document.querySelector(".checkOffAll").addEventListener("click", _checkOffTask_js__WEBPACK_IMPORTED_MODULE_1__["checkOffAllTasks"]);
document.querySelector(".resetAll").addEventListener("click", _resetTasks__WEBPACK_IMPORTED_MODULE_3__["default"]);
console.log("Hello!");

/***/ }),

/***/ "./src/removeTasks.js":
/*!****************************!*\
  !*** ./src/removeTasks.js ***!
  \****************************/
/*! exports provided: removeTask, removeAllTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTask", function() { return removeTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllTasks", function() { return removeAllTasks; });
const undoneTasks = document.querySelector(".undone-tasks");
const doneTasks = document.querySelector(".done-tasks");
const hrEl = document.querySelector("hr");

function removeTask(e) {
  if (e.path[3].className === "undone-tasks") {
    undoneTasks.removeChild(e.path[2]);
  } else {
    doneTasks.removeChild(e.path[2]);
  }

  if (!undoneTasks.hasChildNodes() || !doneTasks.hasChildNodes()) {
    hrEl.classList.add("undisplayed");
  }
}

function removeAllTasks() {
  undoneTasks.innerHTML = "";
  doneTasks.innerHTML = "";
}



/***/ }),

/***/ "./src/resetTasks.js":
/*!***************************!*\
  !*** ./src/resetTasks.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const undoneTasks = document.querySelector(".undone-tasks");
const doneTasks = document.querySelector(".done-tasks");
const hrEl = document.querySelector("hr");

function resetAllTasks() {
  for (let i = doneTasks.childNodes.length - 1; i >= 0; i -= 1) {
    doneTasks.childNodes[i].childNodes[1].childNodes[1].classList.add("fa-circle");
    doneTasks.childNodes[i].childNodes[1].childNodes[1].classList.remove("fa-solid");
    doneTasks.childNodes[i].childNodes[1].childNodes[1].classList.add("fa-regular");
    doneTasks.childNodes[i].childNodes[1].childNodes[1].classList.remove("fa-check");
    doneTasks.childNodes[i].firstChild.classList.remove("crossedOut");
    undoneTasks.appendChild(doneTasks.childNodes[i]);

    if (!doneTasks.hasChildNodes()) {
      hrEl.classList.add("undisplayed");
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (resetAllTasks);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map
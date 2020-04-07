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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: KEY_CLASS, DELETE_ACTION, SPACE_ACTION, TAB_ACTION, ENTER_ACTION, BACKSPACE_ACTION, BUTTONS_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"KEY_CLASS\", function() { return KEY_CLASS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DELETE_ACTION\", function() { return DELETE_ACTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPACE_ACTION\", function() { return SPACE_ACTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TAB_ACTION\", function() { return TAB_ACTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ENTER_ACTION\", function() { return ENTER_ACTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BACKSPACE_ACTION\", function() { return BACKSPACE_ACTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BUTTONS_CONFIG\", function() { return BUTTONS_CONFIG; });\nconst KEY_CLASS = 'k-key',\n  DELETE_ACTION =  'DELETE_ACTION',\n  SPACE_ACTION =  'SPACE_ACTION',\n  TAB_ACTION = 'TAB_ACTION',\n  ENTER_ACTION = 'ENTER_ACTION',\n  BACKSPACE_ACTION = 'BACKSPACE_ACTION';\n\nconst KEY_CLASS_MODIIER = 'k-mod';\n\nconst BUTTONS_CONFIG = new Map([\n  ['Backquote', {\n    en: '`',\n    ru: 'ё',\n    enShift: '~',\n    ruShift: 'Ё',\n    className: [KEY_CLASS],\n  }],\n  ['Digit1', {\n    en: '1',\n    ru: '1',\n    enShift: '!',\n    ruShift: '!',\n    className: [KEY_CLASS],\n    isNumber: true,\n  }],\n  ['Digit2', {\n    en: '2',\n    ru: '2',\n    enShift: '@',\n    ruShift: '\"',\n    className: [KEY_CLASS],\n    isNumber: true,\n  }],\n  ['Digit3', {\n    en: '3',\n    ru: '3',\n    enShift: '#',\n    ruShift: '№',\n    className: [KEY_CLASS],\n    isNumber: true,\n  }],\n  ['Digit4', {\n    en: '4',\n    ru: '4',\n    enShift: '$',\n    ruShift: ';',\n    className: [KEY_CLASS],\n    isNumber: true,\n  }],\n  ['Digit5', {\n    en: '5',\n    ru: '5',\n    enShift: '%',\n    ruShift: '%',\n    className: [KEY_CLASS],\n    isNumber: true,\n  }],\n  ['Digit6', {\n    en: '6',\n    ru: '6',\n    enShift: '^',\n    ruShift: ':',\n    className: [KEY_CLASS],\n    isNumber: true,\n  }],\n  ['Digit7', {\n    en: '7',\n    ru: '7',\n    enShift: '&',\n    ruShift: '?',\n    className: [KEY_CLASS],\n    isNumber: true,\n  }],\n  ['Digit8', {\n    en: '8',\n    ru: '8',\n    enShift: '*',\n    ruShift: '*',\n    className: [KEY_CLASS],\n    isNumber: true,\n  }],\n  ['Digit9', {\n    en: '9',\n    ru: '9',\n    enShift: '(',\n    ruShift: '(',\n    className: [KEY_CLASS],\n    isNumber: true,\n  }],\n  ['Digit0', {\n    en: '0',\n    ru: '0',\n    enShift: ')',\n    ruShift: ')',\n    className: [KEY_CLASS],\n    isNumber: true,\n  }],\n  ['Delete', {\n    en: 'Del',\n    ru: 'Del',\n    enShift: 'Del',\n    ruShift: 'Del',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER],\n    isFunctional: true,\n    action: DELETE_ACTION,\n  }],\n  ['Backspace', {\n    en: 'Backspace',\n    ru: 'Backspace',\n    enShift: 'Backspace',\n    ruShift: 'Backspace',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'backspace'],\n    isFunctional: true,\n    action: BACKSPACE_ACTION,\n  }],\n  ['Tab', {\n    en: 'Tab',\n    ru: 'Tab',\n    enShift: 'Tab',\n    ruShift: 'Tab',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'tab'],\n    isFunctional: true,\n    action: TAB_ACTION,\n  }],\n  ['KeyQ', {\n    en: 'q',\n    ru: 'й',\n    enShift: 'Q',\n    ruShift: 'Й',\n    className: [KEY_CLASS],\n  }],\n  ['KeyW', {\n    en: 'w',\n    ru: 'ц',\n    enShift: 'W',\n    ruShift: 'Ц',\n    className: [KEY_CLASS],\n  }],\n  ['KeyE', {\n    en: 'e',\n    ru: 'у',\n    enShift: 'E',\n    ruShift: 'У',\n    className: [KEY_CLASS],\n  }],\n  ['KeyR', {\n    en: 'r',\n    ru: 'к',\n    enShift: 'R',\n    ruShift: 'К',\n    className: [KEY_CLASS],\n  }],\n  ['KeyT', {\n    en: 't',\n    ru: 'е',\n    enShift: 'T',\n    ruShift: 'Е',\n    className: [KEY_CLASS],\n  }],\n  ['KeyY', {\n    en: 'y',\n    ru: 'н',\n    enShift: 'Y',\n    ruShift: 'Н',\n    className: [KEY_CLASS],\n  }],\n  ['KeyU', {\n    en: 'u',\n    ru: 'г',\n    enShift: 'U',\n    ruShift: 'Г',\n    className: [KEY_CLASS],\n  }],\n  ['KeyI', {\n    en: 'i',\n    ru: 'ш',\n    enShift: 'I',\n    ruShift: 'Ш',\n    className: [KEY_CLASS],\n  }],\n  ['KeyO', {\n    en: 'o',\n    ru: 'щ',\n    enShift: 'O',\n    ruShift: 'Щ',\n    className: [KEY_CLASS],\n  }],\n  ['KeyP', {\n    en: 'p',\n    ru: 'з',\n    enShift: 'P',\n    ruShift: 'З',\n    className: [KEY_CLASS],\n  }],\n  ['BracketLeft', {\n    en: '[',\n    ru: 'х',\n    enShift: '{',\n    ruShift: 'Х',\n    className: [KEY_CLASS],\n  }],\n  ['BracketRight', {\n    en: ']',\n    ru: 'ъ',\n    enShift: '}',\n    ruShift: 'Ъ',\n    className: [KEY_CLASS],\n  }],\n  ['Backslash', {\n    en: '\\\\',\n    ru: '\\\\',\n    enShift: '|',\n    ruShift: '/',\n    className: [KEY_CLASS],\n  }],\n  ['CapsLock', {\n    en: 'CapsLk',\n    ru: 'CapsLk',\n    enShift: 'CapsLk',\n    ruShift: 'CapsLk',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'capslk'],\n    isFunctional: true,\n  }],\n  ['KeyA', {\n    en: 'a',\n    ru: 'ф',\n    enShift: 'A',\n    ruShift: 'Ф',\n    className: [KEY_CLASS],\n  }],\n  ['KeyS', {\n    en: 's',\n    ru: 'ы',\n    enShift: 'S',\n    ruShift: 'Ы',\n    className: [KEY_CLASS],\n  }],\n  ['KeyD', {\n    en: 'd',\n    ru: 'в',\n    enShift: 'D',\n    ruShift: 'В',\n    className: [KEY_CLASS],\n  }],\n  ['KeyF', {\n    en: 'f',\n    ru: 'а',\n    enShift: 'F',\n    ruShift: 'А',\n    className: [KEY_CLASS],\n  }],\n  ['KeyG', {\n    en: 'g',\n    ru: 'п',\n    enShift: 'G',\n    ruShift: 'П',\n    className: [KEY_CLASS],\n  }],\n  ['KeyH', {\n    en: 'h',\n    ru: 'р',\n    enShift: 'H',\n    ruShift: 'Р',\n    className: [KEY_CLASS],\n  }],\n  ['KeyJ', {\n    en: 'j',\n    ru: 'о',\n    enShift: 'J',\n    ruShift: 'О',\n    className: [KEY_CLASS],\n  }],\n  ['KeyK', {\n    en: 'k',\n    ru: 'л',\n    enShift: 'K',\n    ruShift: 'Л',\n    className: [KEY_CLASS],\n  }],\n  ['KeyL', {\n    en: 'l',\n    ru: 'д',\n    enShift: 'L',\n    ruShift: 'Д',\n    className: [KEY_CLASS],\n  }],\n  ['Semicolon', {\n    en: ';',\n    ru: 'ж',\n    enShift: ':',\n    ruShift: 'Ж',\n    className: [KEY_CLASS],\n  }],\n  ['Quote', {\n    en: '\\'',\n    ru: 'э',\n    enShift: '\"',\n    ruShift: 'Э',\n    className: [KEY_CLASS],\n  }],\n  ['Enter', {\n    en: 'Enter',\n    ru: 'Enter',\n    enShift: 'Enter',\n    ruShift: 'Enter',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'enter'],\n    isFunctional: true,\n    action: ENTER_ACTION,\n  }],\n  ['ShiftLeft', {\n    en: 'Shift',\n    ru: 'Shift',\n    enShift: 'Shift',\n    ruShift: 'Shift',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'shift_l', 'shift'],\n    isFunctional: true,\n  }],\n  ['KeyZ', {\n    en: 'z',\n    ru: 'я',\n    enShift: 'Z',\n    ruShift: 'Я',\n    className: [KEY_CLASS],\n  }],\n  ['KeyX', {\n    en: 'x',\n    ru: 'ч',\n    enShift: 'X',\n    ruShift: 'Ч',\n    className: [KEY_CLASS],\n  }],\n  ['KeyC', {\n    en: 'c',\n    ru: 'с',\n    enShift: 'C',\n    ruShift: 'С',\n    className: [KEY_CLASS],\n  }],\n  ['KeyV', {\n    en: 'v',\n    ru: 'м',\n    enShift: 'V',\n    ruShift: 'М',\n    className: [KEY_CLASS],\n  }],\n  ['KeyB', {\n    en: 'b',\n    ru: 'и',\n    enShift: 'B',\n    ruShift: 'И',\n    className: [KEY_CLASS],\n  }],\n  ['KeyN', {\n    en: 'n',\n    ru: 'т',\n    enShift: 'N',\n    ruShift: 'Т',\n    className: [KEY_CLASS],\n  }],\n  ['KeyM', {\n    en: 'm',\n    ru: 'ь',\n    enShift: 'M',\n    ruShift: 'Ь',\n    className: [KEY_CLASS],\n  }],\n  ['Comma', {\n    en: ',',\n    ru: 'б',\n    enShift: '<',\n    ruShift: 'Б',\n    className: [KEY_CLASS],\n  }],\n  ['Period', {\n    en: '.',\n    ru: 'ю',\n    enShift: '>',\n    ruShift: 'Ю',\n    className: [KEY_CLASS],\n  }],\n  ['Slash', {\n    en: '/',\n    ru: '.',\n    enShift: '?',\n    ruShift: ',',\n    className: [KEY_CLASS],\n  }],\n  ['ArrowUp', {\n    en: '↑',\n    ru: '↑',\n    enShift: '↑',\n    ruShift: '↑',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'up'],\n    action: 'ArrowUp',\n  }],\n  ['ShiftRight', {\n    en: 'Shift',\n    ru: 'Shift',\n    enShift: 'Shift',\n    ruShift: 'Shift',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'shift_r', 'shift'],\n    isFunctional: true,\n  }],\n  ['ControlLeft', {\n    en: 'Ctrl',\n    ru: 'Ctrl',\n    enShift: 'Ctrl',\n    ruShift: 'Ctrl',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'ctrl_l'],\n    isFunctional: true,\n  }],\n  ['MetaLeft', {\n    en: 'Win',\n    ru: 'Win',\n    enShift: 'Win',\n    ruShift: 'Win',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'win'],\n    isFunctional: true,\n  }],\n  ['AltLeft', {\n    en: 'Alt',\n    ru: 'Alt',\n    enShift: 'Alt',\n    ruShift: 'Alt',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'alt_l'],\n    isFunctional: true,\n  }],\n  ['Space', {\n    en: 'Space',\n    ru: 'Space',\n    enShift: 'Space',\n    ruShift: 'Space',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'space'],\n    isFunctional: true,\n    action: SPACE_ACTION,\n  }],\n  ['AltRight', {\n    en: 'Alt',\n    ru: 'Alt',\n    enShift: 'Alt',\n    ruShift: 'Alt',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'alt_r'],\n    isFunctional: true,\n  }],\n  ['ControlRight', {\n    en: 'Ctrl',\n    ru: 'Ctrl',\n    enShift: 'Ctrl',\n    ruShift: 'Ctrl',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'ctrl_r'],\n    isFunctional: true,\n  }],\n  ['ArrowLeft', {\n    en: '←',\n    ru: '←',\n    enShift: '←',\n    ruShift: '←',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'left'],\n  }],\n  ['ArrowDown', {\n    en: '↓',\n    ru: '↓',\n    enShift: '↓',\n    ruShift: '↓',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'down'],\n  }],\n  ['ArrowRight', {\n    en: '→',\n    ru: '→',\n    enShift: '→',\n    ruShift: '→',\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'right'],\n  }],\n]);\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\nconst DEFAULT_LOCALE = 'en';\n\nlet currentLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;\nlet isShift = false;\nlet isCaps = false;\nlet cursorPosition = 0;\n\n\nconst bodyElement = document.querySelector('body');\n\nbodyElement.insertAdjacentHTML('afterbegin', `\n    <div class=\"wrapper\">\n          <section class=\"input_text\">\n                <textarea class=\"input_text__item\" autofocus unselectable=\"on\"></textarea>\n          </section>\n          <div class=\"text\"><br>Клавиатура создана в ОС Windows. Смена языка - левый Alt.</br></div>\n          <section class=\"keyboard\"></section>\n    </div>`);\nconst input = document.querySelector('.input_text__item');\nconst keyboard = document.querySelector('.keyboard');\n\nconst domMapping = new Map();\n\n// eslint-disable-next-line no-restricted-syntax\nfor (const [key, { ru, en, className }] of _config__WEBPACK_IMPORTED_MODULE_0__[\"BUTTONS_CONFIG\"]) {\n  const buttonElement = document.createElement('div');\n  buttonElement.classList.add(...className);\n  buttonElement.dataset.code = key;\n  buttonElement.innerText = (currentLocale === 'en') ? en : ru;\n  domMapping.set(key, buttonElement);\n  keyboard.appendChild(buttonElement);\n}\n\nfunction getKeyLabel(key, currentlocale, isShift, isCaps) {\n  const buttonInfo = _config__WEBPACK_IMPORTED_MODULE_0__[\"BUTTONS_CONFIG\"].get(key);\n\n  return buttonInfo[`${currentlocale}${(isShift || isCaps) ? 'Shift' : ''}`];\n}\n\nfunction updateDigitKeyboard(currentLocale, isShift, isCaps) {\n  for (const [key, value] of domMapping) {\n    const newLabel = getKeyLabel(key, currentLocale, isShift, isCaps);\n    const { isNumber } = _config__WEBPACK_IMPORTED_MODULE_0__[\"BUTTONS_CONFIG\"].get(key);\n\n    if (isNumber) {\n      value.innerText = newLabel;\n    }\n  }\n}\n\nfunction updateNonDigitKeyboard(currentLocale, isShift, isCaps) {\n  for (const [key, value] of domMapping) {\n    const newLabel = getKeyLabel(key, currentLocale, isShift, isCaps);\n    const { isNumber } = _config__WEBPACK_IMPORTED_MODULE_0__[\"BUTTONS_CONFIG\"].get(key);\n\n    if (!isNumber) {\n      value.innerText = newLabel;\n    }\n  }\n}\n\nfunction updateKeyboard(currentLocale, isShift, isCaps) {\n  updateDigitKeyboard(currentLocale, isShift, isCaps);\n  updateNonDigitKeyboard(currentLocale, isShift, isCaps);\n}\n\nfunction changeLocale() {\n  const storedLocale = localStorage.getItem('locale') || currentLocale;\n\n  if (storedLocale === 'en') {\n    currentLocale = 'ru';\n  } else {\n    currentLocale = 'en';\n  }\n\n  localStorage.setItem('locale', currentLocale);\n  updateKeyboard(currentLocale, isShift, isCaps);\n}\n\nfunction handleMouseDown(event) {\n  const isKey = event.target.classList.contains(_config__WEBPACK_IMPORTED_MODULE_0__[\"KEY_CLASS\"]);\n  if (isKey) {\n    event.target.classList.add('active');\n    const { isFunctional, action } = _config__WEBPACK_IMPORTED_MODULE_0__[\"BUTTONS_CONFIG\"].get(event.target.dataset.code);\n\n    if (!isFunctional) {\n      const currentValue = input.value;\n      const newValue = [currentValue.slice(0, cursorPosition), event.target.innerText, currentValue.slice(cursorPosition)].join('');\n      input.value = newValue;\n      cursorPosition++;\n    } else {\n      switch (action) {\n        case _config__WEBPACK_IMPORTED_MODULE_0__[\"SPACE_ACTION\"]:\n          addSpace(input);\n          break;\n        case _config__WEBPACK_IMPORTED_MODULE_0__[\"TAB_ACTION\"]:\n          addSpace(input);\n          addSpace(input);\n          addSpace(input);\n          addSpace(input);\n          break;\n        case _config__WEBPACK_IMPORTED_MODULE_0__[\"ENTER_ACTION\"]:\n          addEnter(input);\n          break;\n        case _config__WEBPACK_IMPORTED_MODULE_0__[\"DELETE_ACTION\"]:\n          deleteSymbol(input);\n          break;\n        case _config__WEBPACK_IMPORTED_MODULE_0__[\"BACKSPACE_ACTION\"]:\n          backspace(input);\n          break;\n      }\n    }\n  }\n}\n\ndocument.querySelector('.input_text__item').addEventListener('click', (e) => {\n  cursorPosition = e.target.selectionStart;\n});\n\nfunction deleteSymbol(input) {\n  const currentValue = input.value;\n  const newValue = [currentValue.slice(0, cursorPosition), currentValue.slice(cursorPosition + 1)].join('');\n  input.value = newValue;\n}\n\nfunction backspace(input) {\n  const currentValue = input.value;\n  const newValue = [currentValue.slice(0, cursorPosition - 1), currentValue.slice(cursorPosition)].join('');\n  cursorPosition--;\n  if (cursorPosition < 0) {\n    cursorPosition = 0;\n  }\n  input.value = newValue;\n}\n\nfunction addSpace(input) {\n  const currentValue = input.value;\n  const newValue = [currentValue.slice(0, cursorPosition), ' ', currentValue.slice(cursorPosition)].join('');\n  cursorPosition++;\n  input.value = newValue;\n}\n\nfunction addEnter(input) {\n  const currentValue = input.value;\n  const newValue = [currentValue.slice(0, cursorPosition), '\\n', currentValue.slice(cursorPosition)].join('');\n  cursorPosition++;\n  input.value = newValue;\n}\n\nfunction handleMouseUp(event) {\n  const isKey = event.target.classList.contains(_config__WEBPACK_IMPORTED_MODULE_0__[\"KEY_CLASS\"]);\n  if (isKey) {\n    event.target.classList.remove('active');\n  }\n}\n\nconst shifts = document.querySelectorAll('.shift');\n\nfunction handleShift(event, shiftCode) {\n  isShift = !isShift;\n  if (isCaps) {\n    isCaps = false;\n    caps.classList.toggle('hold');\n  }\n  if (event && event.target) {\n    event.target.classList.toggle('hold');\n  } else {\n    const shiftElem = domMapping.get(shiftCode);\n    shiftElem.classList.toggle('hold');\n  }\n  updateKeyboard(currentLocale, isShift, isCaps);\n}\n\nshifts.forEach((element) => {\n  element.addEventListener('click', handleShift);\n});\n\n\nconst alt_l = document.querySelector('.alt_l');\nalt_l.addEventListener('click', changeLocale);\n\nfunction handleCaps() {\n  isCaps = !isCaps;\n  caps.classList.toggle('hold');\n  updateNonDigitKeyboard(currentLocale, isShift, isCaps);\n}\n\nconst caps = document.querySelector('.capslk');\ncaps.addEventListener('click', handleCaps);\n\nfunction handleButtonKeydown(event) {\n  const code = event.code;\n\n  if (['AltLeft', 'AltRight'].includes(code)) {\n    event.preventDefault();\n    if (code === 'AltLeft') {\n      changeLocale();\n    }\n  } else if ( code === 'CapsLock') {\n    handleCaps();\n  } else if (['ShiftLeft', 'ShiftRight'].includes(code)) {\n    handleShift(null, code);\n  }\n\n  if (domMapping.has(code)) {\n    event.preventDefault();\n    const buttonElement = domMapping.get(code);\n    const evt = document.createEvent('MouseEvents');\n    evt.initEvent('mousedown', true, true);\n    buttonElement.dispatchEvent(evt);\n    buttonElement.classList.add('active');\n  }\n}\n\nfunction handleButtonKeyUp(event) {\n  const code = event.code;\n  if (domMapping.has(code)) {\n    const buttonElement = domMapping.get(code);\n    buttonElement.classList.remove('active');\n  }\n}\n\nkeyboard.addEventListener('mousedown', handleMouseDown);\nkeyboard.addEventListener('mouseup', handleMouseUp);\nwindow.addEventListener('keydown', handleButtonKeydown);\nwindow.addEventListener('keyup', handleButtonKeyUp);\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });
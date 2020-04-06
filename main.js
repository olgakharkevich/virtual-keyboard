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
/*! exports provided: BUTTONS_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BUTTONS_CONFIG\", function() { return BUTTONS_CONFIG; });\nconst SHIFT_ACTION = 'shift_action';\r\nconst KEY_CLASS = 'k-key';\r\nconst KEY_CLASS_MODIIER = 'k-mod';\r\n\r\nconst BUTTONS_CONFIG = new Map([\r\n  ['Backquote', {\r\n    en: '`',\r\n    ru: 'ё',\r\n    enShift: '~',\r\n    ruShift: 'Ё',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['Digit1', {\r\n    en: '1',\r\n    ru: '1',\r\n    enShift: '!',\r\n    ruShift: '!',\r\n    className: [KEY_CLASS],\r\n    isNumber: true,\r\n  }],\r\n  ['Digit2', {\r\n    en: '2',\r\n    ru: '2',\r\n    enShift: '@',\r\n    ruShift: '\"',\r\n    className: [KEY_CLASS],\r\n    isNumber: true,\r\n  }],\r\n  ['Digit3', {\r\n    en: '3',\r\n    ru: '3',\r\n    enShift: '#',\r\n    ruShift: '№',\r\n    className: [KEY_CLASS],\r\n    isNumber: true,\r\n  }],\r\n  ['Digit4', {\r\n    en: '4',\r\n    ru: '4',\r\n    enShift: '$',\r\n    ruShift: ';',\r\n    className: [KEY_CLASS],\r\n    isNumber: true,\r\n  }],\r\n  ['Digit5', {\r\n    en: '5',\r\n    ru: '5',\r\n    enShift: '%',\r\n    ruShift: '%',\r\n    className: [KEY_CLASS],\r\n    isNumber: true,\r\n  }],\r\n  ['Digit6', {\r\n    en: '6',\r\n    ru: '6',\r\n    enShift: '^',\r\n    ruShift: ':',\r\n    className: [KEY_CLASS],\r\n    isNumber: true,\r\n  }],\r\n  ['Digit7', {\r\n    en: '7',\r\n    ru: '7',\r\n    enShift: '&',\r\n    ruShift: '?',\r\n    className: [KEY_CLASS],\r\n    isNumber: true,\r\n  }],\r\n  ['Digit8', {\r\n    en: '8',\r\n    ru: '8',\r\n    enShift: '*',\r\n    ruShift: '*',\r\n    className: [KEY_CLASS],\r\n    isNumber: true,\r\n  }],\r\n  ['Digit9', {\r\n    en: '9',\r\n    ru: '9',\r\n    enShift: '(',\r\n    ruShift: '(',\r\n    className: [KEY_CLASS],\r\n    isNumber: true,\r\n  }],\r\n  ['Digit0', {\r\n    en: '0',\r\n    ru: '0',\r\n    enShift: ')',\r\n    ruShift: ')',\r\n    className: [KEY_CLASS],\r\n    isNumber: true,\r\n  }],\r\n  ['Delete', {\r\n    en: 'Del',\r\n    ru: 'Del',\r\n    enShift: 'Del',\r\n    ruShift: 'Del',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER],\r\n    isFunctional: true,\r\n    action: 'DELETE_ACTION'\r\n  }],\r\n  ['Backspace', {\r\n    en: 'Backspace',\r\n    ru: 'Backspace',\r\n    enShift: 'Backspace',\r\n    ruShift: 'Backspace',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'backspace'],\r\n    isFunctional: true,\r\n    action: 'BACKSPACE_ACTION'\r\n  }],\r\n  ['Tab', {\r\n    en: 'Tab',\r\n    ru: 'Tab',\r\n    enShift: 'Tab',\r\n    ruShift: 'Tab',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'tab'],\r\n    isFunctional: true,\r\n    action: 'TAB_ACTION'\r\n  }],\r\n  ['KeyQ', {\r\n    en: 'q',\r\n    ru: 'й',\r\n    enShift: 'Q',\r\n    ruShift: 'Й',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyW', {\r\n    en: 'w',\r\n    ru: 'ц',\r\n    enShift: 'W',\r\n    ruShift: 'Ц',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyE', {\r\n    en: 'e',\r\n    ru: 'у',\r\n    enShift: 'E',\r\n    ruShift: 'У',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyR', {\r\n    en: 'r',\r\n    ru: 'к',\r\n    enShift: 'R',\r\n    ruShift: 'К',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyT', {\r\n    en: 't',\r\n    ru: 'е',\r\n    enShift: 'T',\r\n    ruShift: 'Е',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyY', {\r\n    en: 'y',\r\n    ru: 'н',\r\n    enShift: 'Y',\r\n    ruShift: 'Н',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyU', {\r\n    en: 'u',\r\n    ru: 'г',\r\n    enShift: 'U',\r\n    ruShift: 'Г',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyI', {\r\n    en: 'i',\r\n    ru: 'ш',\r\n    enShift: 'I',\r\n    ruShift: 'Ш',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyO', {\r\n    en: 'o',\r\n    ru: 'щ',\r\n    enShift: 'O',\r\n    ruShift: 'Щ',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyP', {\r\n    en: 'p',\r\n    ru: 'з',\r\n    enShift: 'P',\r\n    ruShift: 'З',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['BracketLeft', {\r\n    en: '[',\r\n    ru: 'х',\r\n    enShift: '{',\r\n    ruShift: 'Х',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['BracketRight', {\r\n    en: ']',\r\n    ru: 'ъ',\r\n    enShift: '}',\r\n    ruShift: 'Ъ',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['Backslash', {\r\n    en: '\\\\',\r\n    ru: '\\\\',\r\n    enShift: '|',\r\n    ruShift: '/',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['CapsLock', {\r\n    en: 'CapsLk',\r\n    ru: 'CapsLk',\r\n    enShift: 'CapsLk',\r\n    ruShift: 'CapsLk',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'capslk'],\r\n    isFunctional: true,\r\n  }],\r\n  ['KeyA', {\r\n    en: 'a',\r\n    ru: 'ф',\r\n    enShift: 'A',\r\n    ruShift: 'Ф',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyS', {\r\n    en: 's',\r\n    ru: 'ы',\r\n    enShift: 'S',\r\n    ruShift: 'Ы',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyD', {\r\n    en: 'd',\r\n    ru: 'в',\r\n    enShift: 'D',\r\n    ruShift: 'В',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyF', {\r\n    en: 'f',\r\n    ru: 'а',\r\n    enShift: 'F',\r\n    ruShift: 'А',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyG', {\r\n    en: 'g',\r\n    ru: 'п',\r\n    enShift: 'G',\r\n    ruShift: 'П',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyH', {\r\n    en: 'h',\r\n    ru: 'р',\r\n    enShift: 'H',\r\n    ruShift: 'Р',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyJ', {\r\n    en: 'j',\r\n    ru: 'о',\r\n    enShift: 'J',\r\n    ruShift: 'О',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyK', {\r\n    en: 'k',\r\n    ru: 'л',\r\n    enShift: 'K',\r\n    ruShift: 'Л',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyL', {\r\n    en: 'l',\r\n    ru: 'д',\r\n    enShift: 'L',\r\n    ruShift: 'Д',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['Semicolon', {\r\n    en: ';',\r\n    ru: 'ж',\r\n    enShift: ':',\r\n    ruShift: 'Ж',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['Quote', {\r\n    en: '\\'',\r\n    ru: 'э',\r\n    enShift: '\"',\r\n    ruShift: 'Э',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['Enter', {\r\n    en: 'Enter',\r\n    ru: 'Enter',\r\n    enShift: 'Enter',\r\n    ruShift: 'Enter',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'enter'],\r\n    isFunctional: true,\r\n    action: 'ENTER_ACTION'\r\n  }],\r\n  ['ShiftLeft', {\r\n    en: 'Shift',\r\n    ru: 'Shift',\r\n    enShift: 'Shift',\r\n    ruShift: 'Shift',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'shift_l', 'shift'],\r\n    isFunctional: true,\r\n    action: SHIFT_ACTION,\r\n  }],\r\n  ['KeyZ', {\r\n    en: 'z',\r\n    ru: 'я',\r\n    enShift: 'Z',\r\n    ruShift: 'Я',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyX', {\r\n    en: 'x',\r\n    ru: 'ч',\r\n    enShift: 'X',\r\n    ruShift: 'Ч',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyC', {\r\n    en: 'c',\r\n    ru: 'с',\r\n    enShift: 'C',\r\n    ruShift: 'С',\r\n    className: [KEY_CLASS]\r\n  }],\r\n  ['KeyV', {\r\n    en: 'v',\r\n    ru: 'м',\r\n    enShift: 'V',\r\n    ruShift: 'М',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyB', {\r\n    en: 'b',\r\n    ru: 'и',\r\n    enShift: 'B',\r\n    ruShift: 'И',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyN', {\r\n    en: 'n',\r\n    ru: 'т',\r\n    enShift: 'N',\r\n    ruShift: 'Т',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['KeyM', {\r\n    en: 'm',\r\n    ru: 'ь',\r\n    enShift: 'M',\r\n    ruShift: 'Ь',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['Comma', {\r\n    en: ',',\r\n    ru: 'б',\r\n    enShift: '<',\r\n    ruShift: 'Б',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['Period', {\r\n    en: '.',\r\n    ru: 'ю',\r\n    enShift: '>',\r\n    ruShift: 'Ю',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['Slash', {\r\n    en: '/',\r\n    ru: '.',\r\n    enShift: '?',\r\n    ruShift: ',',\r\n    className: [KEY_CLASS],\r\n  }],\r\n  ['ArrowUp', {\r\n    en: '↑',\r\n    ru: '↑',\r\n    enShift: '↑',\r\n    ruShift: '↑',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'up'],\r\n    action: 'ArrowUp',\r\n  }],\r\n  ['ShiftRight', {\r\n    en: 'Shift',\r\n    ru: 'Shift',\r\n    enShift: 'Shift',\r\n    ruShift: 'Shift',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'shift_r', 'shift'],\r\n    isFunctional: true,\r\n  }],\r\n  ['ControlLeft', {\r\n    en: 'Ctrl',\r\n    ru: 'Ctrl',\r\n    enShift: 'Ctrl',\r\n    ruShift: 'Ctrl',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'ctrl_l'],\r\n    isFunctional: true,\r\n  }],\r\n  ['MetaLeft', {\r\n    en: 'Win',\r\n    ru: 'Win',\r\n    enShift: 'Win',\r\n    ruShift: 'Win',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'win'],\r\n    isFunctional: true,\r\n  }],\r\n  ['AltLeft', {\r\n    en: 'Alt',\r\n    ru: 'Alt',\r\n    enShift: 'Alt',\r\n    ruShift: 'Alt',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'alt_l'],\r\n    isFunctional: true,\r\n  }],\r\n  ['Space', {\r\n    en: 'Space',\r\n    ru: 'Space',\r\n    enShift: 'Space',\r\n    ruShift: 'Space',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'space'],\r\n    isFunctional: true,\r\n    action: 'SPACE_ACTION'\r\n  }],\r\n  ['AltRight', {\r\n    en: 'Alt',\r\n    ru: 'Alt',\r\n    enShift: 'Alt',\r\n    ruShift: 'Alt',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'alt_r'],\r\n    isFunctional: true,\r\n  }],\r\n  ['ControlRight', {\r\n    en: 'Ctrl',\r\n    ru: 'Ctrl',\r\n    enShift: 'Ctrl',\r\n    ruShift: 'Ctrl',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'ctrl_r'],\r\n    isFunctional: true,\r\n  }],\r\n  ['ArrowLeft', {\r\n    en: '←',\r\n    ru: '←',\r\n    enShift: '←',\r\n    ruShift: '←',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'left'],\r\n  }],\r\n  ['ArrowDown', {\r\n    en: '↓',\r\n    ru: '↓',\r\n    enShift: '↓',\r\n    ruShift: '↓',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'down'],\r\n  }],\r\n  ['ArrowRight', {\r\n    en: '→',\r\n    ru: '→',\r\n    enShift: '→',\r\n    ruShift: '→',\r\n    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'right'],\r\n  }],\r\n]);\r\n  \n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\nconst DEFAULT_LOCALE = 'en';\n// const DELETE_ACTION = 'deleteAction';\n// const SHIFT_ACTION = 'shift_action';\nlet currentLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;\nlet isShift = false;\nlet isCaps = false;\nlet cursorPosition = 0;\n\nconst KEY_CLASS = 'k-key';\n// const KEY_CLASS_MODIIER = 'k-mod';\n\n\nconst bodyElement = document.querySelector('body');\n\nbodyElement.insertAdjacentHTML('afterbegin', `\n    <div class=\"wrapper\">\n          <section class=\"input_text\">\n                <textarea class=\"input_text__item\" autofocus></textarea>\n          </section>\n          <div class=\"text\"><br>Клавиатура создана в ОС Windows. Смена языка - Win.</br></div>\n          <section class=\"keyboard\"></section>\n    </div>`);\nconst input = document.querySelector('.input_text__item');\nconst keyboard = document.querySelector('.keyboard');\n\nconst domMapping = new Map();\n\n// eslint-disable-next-line no-restricted-syntax\nfor (const [key, { ru, en, className }] of _config__WEBPACK_IMPORTED_MODULE_0__[\"BUTTONS_CONFIG\"]) {\n  const buttonElement = document.createElement('div');\n  buttonElement.classList.add(...className);\n  buttonElement.dataset.code = key;\n  buttonElement.innerText = (currentLocale === 'en') ? en : ru;\n  domMapping.set(key, buttonElement);\n  keyboard.appendChild(buttonElement);\n}\n\nfunction getKeyLabel(key, currentlocale, isShift, isCaps) {\n  const buttonInfo = _config__WEBPACK_IMPORTED_MODULE_0__[\"BUTTONS_CONFIG\"].get(key);\n\n  return buttonInfo[`${currentlocale}${(isShift || isCaps) ? 'Shift' : ''}`];\n}\n\nfunction updateDigitKeyboard(currentLocale, isShift, isCaps) {\n  for (const [key, value] of domMapping) {\n    const newLabel = getKeyLabel(key, currentLocale, isShift, isCaps);\n    const { isNumber } = _config__WEBPACK_IMPORTED_MODULE_0__[\"BUTTONS_CONFIG\"].get(key);\n\n    if (isNumber) {\n      value.innerText = newLabel;\n    }\n  }\n}\n\nfunction updateNonDigitKeyboard(currentLocale, isShift, isCaps) {\n  for (const [key, value] of domMapping) {\n    const newLabel = getKeyLabel(key, currentLocale, isShift, isCaps);\n    const { isNumber } = _config__WEBPACK_IMPORTED_MODULE_0__[\"BUTTONS_CONFIG\"].get(key);\n\n    if (!isNumber) {\n      value.innerText = newLabel;\n    }\n  }\n}\n\nfunction updateKeyboard(currentLocale, isShift, isCaps) {\n\n  updateDigitKeyboard(currentLocale, isShift, isCaps);\n  updateNonDigitKeyboard(currentLocale, isShift, isCaps);\n}\n\nfunction changeLocale() {\n  const storedLocale = localStorage.getItem('locale') || currentLocale;\n\n  if (storedLocale === 'en') {\n    currentLocale = 'ru';\n  } else {\n    currentLocale = 'en';\n  }\n\n  localStorage.setItem('locale', currentLocale);\n  updateKeyboard(currentLocale, isShift, isCaps);\n}\n\nfunction handleMouseDown(event) {\n  const isKey = event.target.classList.contains(KEY_CLASS);\n  if (isKey) {\n    event.target.classList.add('active');\n    const { isFunctional, action } = _config__WEBPACK_IMPORTED_MODULE_0__[\"BUTTONS_CONFIG\"].get(event.target.dataset.code);\n\n    if (!isFunctional) {\n      const currentValue = input.value;\n      const newValue = [currentValue.slice(0, cursorPosition), event.target.innerText, currentValue.slice(cursorPosition)].join('');\n      input.value = newValue;\n      cursorPosition++;\n      console.log(cursorPosition);\n    } else {\n      switch (action){\n        case 'SPACE_ACTION':\n          addSpace(input);\n          break;\n        case 'TAB_ACTION': \n          addSpace(input);\n          addSpace(input);\n          addSpace(input);\n          addSpace(input);\n          break;\n        case 'ENTER_ACTION':\n          addEnter(input);\n          break;\n          break;\n        case 'DELETE_ACTION':\n          deleteSymbol(input);\n          break;\n        case 'BACKSPACE_ACTION':\n          backspace(input);\n          break;\n      }\n    }\n  }\n}\n\ndocument.querySelector('.input_text__item').addEventListener('click', e => {\n  cursorPosition = e.target.selectionStart;\n})\n\nfunction deleteSymbol(input) {\n  const currentValue = input.value;\n  const newValue = [currentValue.slice(0, cursorPosition), currentValue.slice(cursorPosition+1)].join('');\n  input.value = newValue;\n}\n\nfunction backspace(input) {\n  const currentValue = input.value;\n  const newValue = [currentValue.slice(0, cursorPosition-1), currentValue.slice(cursorPosition)].join('');\n  cursorPosition--;\n  input.value = newValue;\n}\n\nfunction addSpace(input) {\n  const currentValue = input.value;\n  const newValue = [currentValue.slice(0, cursorPosition), ' ', currentValue.slice(cursorPosition)].join('');\n  cursorPosition++;\n  input.value = newValue;\n}\n\nfunction addEnter(input) {\n  const currentValue = input.value;\n  const newValue = [currentValue.slice(0, cursorPosition), '\\n', currentValue.slice(cursorPosition)].join('');\n  cursorPosition++;\n  input.value = newValue;\n}\n\nfunction handleMouseUp(event) {\n  const isKey = event.target.classList.contains(KEY_CLASS);\n  if (isKey) {\n    event.target.classList.remove('active');\n  }\n}\n\nfunction handleShiftClick(event) {\n  isShift = !isShift;\n  if (isCaps) {\n    isCaps = false;\n    caps.classList.toggle('hold');\n  }\n  event.target.classList.toggle('hold');\n  updateKeyboard(currentLocale, isShift, isCaps);\n}\n\n\n\n\nconst shifts = document.querySelectorAll('.shift');\n\nshifts.forEach(element => {\n  element.addEventListener('click', handleShiftClick);\n});\n\n\n\nconst winButton = document.querySelector('.win');\nwinButton.addEventListener('click', changeLocale);\n\nfunction handleCapsClick(e) {\n  isCaps = !isCaps;\n  caps.classList.toggle('hold');\n  updateNonDigitKeyboard(currentLocale, isShift, isCaps);\n}\n\nconst caps = document.querySelector('.capslk');\ncaps.addEventListener('click', handleCapsClick);\n\n\n\nkeyboard.addEventListener('mousedown', handleMouseDown);\nkeyboard.addEventListener('mouseup', handleMouseUp);\n\n\n\n// function shiftOn() {\n//   shift = true;\n//   console.log(shift);\n// }\n\n// function shiftOff() {\n//   shifts = false;\n//   console.log(shift);\n// }\n\n// function handleButtonClick(event) {\n//   const isKey = event.target.classList.contains(KEY_CLASS);\n//   if (isKey) {\n//     // const code = event.target.dataset.code;\n//     event.target.classList.add('active');\n//     const { isFunctional } = BUTTONS_CONFIG.get(event.target.dataset.code);\n//     if (!isFunctional) {\n//       input.value += event.target.innerText;\n//     }\n//   }\n// }\n\n\n// function handleKeyDownEvent(event) {\n//   const code = event.code;\n//   const hasCustomHandler = BUTTONS_CONFIG.has(code);\n\n//   if (hasCustomHandler) {\n//     event.preventDefault();\n//     const action = BUTTONS_CONFIG.get(code).action;\n//     if (action) {\n//       // switch action\n//       //     case 'ArrowUp': \n\n//     }\n\n//   }\n// }\n\n\n\n// function handleButtonKeydown(event) {\n//   event.preventDefault();\n//   // const code = event.code;\n//   const { isFunctional, action } = BUTTONS_CONFIG.get(event.code);\n\n//   if (!isFunctional) {\n//     input.value += getKeyLabel(event.code, currentLocale, isShift);\n//   } else {\n//     switch (action) {\n//       case SHIFT_ACTION:\n//         isShift = true;\n//         break;\n//       default:\n//         break;\n//     }\n//   }\n//   const element = domMapping.get(event.code);\n//   element.classList.add('active');\n// }\n\n// function handleButtonKeyUp(event) {\n//   const code = event.code;\n\n//   const element = domMapping.get(code);\n//   element.classList.remove('active');\n// }\n\n\n\n\n\n// shifts.forEach(shift => {\n//   window.addEventListener('keydown', shiftOn);\n//   window.addEventListener('keyup', shiftOff);\n// });\n\n\n// window.addEventListener('keydown', handleButtonKeydown);\n// window.addEventListener('keyup', handleButtonKeyUp);\n// window.addEventListener('keydown', handleKeyDownEvent);\n\n\n\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ });
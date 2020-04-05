// const BUTTON_KEYS = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 46, 48,
//   8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220];

// const EN = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Del', 'Backspace',
//   'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];

// const RU = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Del', 'Backspace',
//   'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'];
// const curentLocal = localStorage.get

const DEFAULT_LOCALE = 'en';
const DELETE_ACTION = 'deleteAction';
const SHIFT_ACTION = 'shift_action';
let currentLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;
let isShift = false;
let isCaps = false;

const KEY_CLASS = 'k-key';
const KEY_CLASS_MODIIER = 'k-mod';

const BUTTONS_CONFIG = new Map([
  ['Backquote', {
    en: '`',
    ru: 'ё',
    enShift: '~',
    ruShift: 'Ё',
    className: [KEY_CLASS],
  }],
  ['Digit1', {
    en: '1',
    ru: '1',
    enShift: '!',
    ruShift: '!',
    className: [KEY_CLASS],
    isNumber: true,
  }],
  ['Digit2', {
    en: '2',
    ru: '2',
    enShift: '@',
    ruShift: '"',
    className: [KEY_CLASS],
    isNumber: true,
  }],
  ['Digit3', {
    en: '3',
    ru: '3',
    enShift: '#',
    ruShift: '№',
    className: [KEY_CLASS],
    isNumber: true,
  }],
  ['Digit4', {
    en: '4',
    ru: '4',
    enShift: '$',
    ruShift: ';',
    className: [KEY_CLASS],
    isNumber: true,
  }],
  ['Digit5', {
    en: '5',
    ru: '5',
    enShift: '%',
    ruShift: '%',
    className: [KEY_CLASS],
    isNumber: true,
  }],
  ['Digit6', {
    en: '6',
    ru: '6',
    enShift: '^',
    ruShift: ':',
    className: [KEY_CLASS],
    isNumber: true,
  }],
  ['Digit7', {
    en: '7',
    ru: '7',
    enShift: '&',
    ruShift: '?',
    className: [KEY_CLASS],
    isNumber: true,
  }],
  ['Digit8', {
    en: '8',
    ru: '8',
    enShift: '*',
    ruShift: '*',
    className: [KEY_CLASS],
    isNumber: true,
  }],
  ['Digit9', {
    en: '9',
    ru: '9',
    enShift: '(',
    ruShift: '(',
    className: [KEY_CLASS],
    isNumber: true,
  }],
  ['Digit0', {
    en: '0',
    ru: '0',
    enShift: ')',
    ruShift: ')',
    className: [KEY_CLASS],
    isNumber: true,
  }],
  ['Delete', {
    en: 'Del',
    ru: 'Del',
    enShift: 'Del',
    ruShift: 'Del',
    className: [KEY_CLASS, KEY_CLASS_MODIIER],
    isFunctional: true,
  }],
  ['Backspace', {
    en: 'Backspace',
    ru: 'Backspace',
    enShift: 'Backspace',
    ruShift: 'Backspace',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'backspace'],
    isFunctional: true,
  }],
  ['Tab', {
    en: 'Tab',
    ru: 'Tab',
    enShift: 'Tab',
    ruShift: 'Tab',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'tab'],
    isFunctional: true,
  }],
  ['KeyQ', {
    en: 'q',
    ru: 'й',
    enShift: 'Q',
    ruShift: 'Й',
    className: [KEY_CLASS]
  }],
  ['KeyW', {
    en: 'w',
    ru: 'ц',
    enShift: 'W',
    ruShift: 'Ц',
    className: [KEY_CLASS]
  }],
  ['KeyE', {
    en: 'e',
    ru: 'у',
    enShift: 'E',
    ruShift: 'У',
    className: [KEY_CLASS]
  }],
  ['KeyR', {
    en: 'r',
    ru: 'к',
    enShift: 'R',
    ruShift: 'К',
    className: [KEY_CLASS]
  }],
  ['KeyT', {
    en: 't',
    ru: 'е',
    enShift: 'T',
    ruShift: 'Е',
    className: [KEY_CLASS]
  }],
  ['KeyY', {
    en: 'y',
    ru: 'н',
    enShift: 'Y',
    ruShift: 'Н',
    className: [KEY_CLASS]
  }],
  ['KeyU', {
    en: 'u',
    ru: 'г',
    enShift: 'U',
    ruShift: 'Г',
    className: [KEY_CLASS]
  }],
  ['KeyI', {
    en: 'i',
    ru: 'ш',
    enShift: 'I',
    ruShift: 'Ш',
    className: [KEY_CLASS]
  }],
  ['KeyO', {
    en: 'o',
    ru: 'щ',
    enShift: 'O',
    ruShift: 'Щ',
    className: [KEY_CLASS]
  }],
  ['KeyP', {
    en: 'p',
    ru: 'з',
    enShift: 'P',
    ruShift: 'З',
    className: [KEY_CLASS]
  }],
  ['BracketLeft', {
    en: '[',
    ru: 'х',
    enShift: '{',
    ruShift: 'Х',
    className: [KEY_CLASS],
  }],
  ['BracketRight', {
    en: ']',
    ru: 'ъ',
    enShift: '}',
    ruShift: 'Ъ',
    className: [KEY_CLASS]
  }],
  ['Backslash', {
    en: '\\',
    ru: '\\',
    enShift: '|',
    ruShift: '/',
    className: [KEY_CLASS]
  }],
  ['CapsLock', {
    en: 'CapsLk',
    ru: 'CapsLk',
    enShift: 'CapsLk',
    ruShift: 'CapsLk',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'capslk'],
    isFunctional: true,
  }],
  ['KeyA', {
    en: 'a',
    ru: 'ф',
    enShift: 'A',
    ruShift: 'Ф',
    className: [KEY_CLASS]
  }],
  ['KeyS', {
    en: 's',
    ru: 'ы',
    enShift: 'S',
    ruShift: 'Ы',
    className: [KEY_CLASS]
  }],
  ['KeyD', {
    en: 'd',
    ru: 'в',
    enShift: 'D',
    ruShift: 'В',
    className: [KEY_CLASS]
  }],
  ['KeyF', {
    en: 'f',
    ru: 'а',
    enShift: 'F',
    ruShift: 'А',
    className: [KEY_CLASS]
  }],
  ['KeyG', {
    en: 'g',
    ru: 'п',
    enShift: 'G',
    ruShift: 'П',
    className: [KEY_CLASS]
  }],
  ['KeyH', {
    en: 'h',
    ru: 'р',
    enShift: 'H',
    ruShift: 'Р',
    className: [KEY_CLASS]
  }],
  ['KeyJ', {
    en: 'j',
    ru: 'о',
    enShift: 'J',
    ruShift: 'О',
    className: [KEY_CLASS]
  }],
  ['KeyK', {
    en: 'k',
    ru: 'л',
    enShift: 'K',
    ruShift: 'Л',
    className: [KEY_CLASS]
  }],
  ['KeyL', {
    en: 'l',
    ru: 'д',
    enShift: 'L',
    ruShift: 'Д',
    className: [KEY_CLASS]
  }],
  ['Semicolon', {
    en: ';',
    ru: 'ж',
    enShift: ':',
    ruShift: 'Ж',
    className: [KEY_CLASS]
  }],
  ['Quote', {
    en: '\'',
    ru: 'э',
    enShift: '"',
    ruShift: 'Э',
    className: [KEY_CLASS]
  }],
  ['Enter', {
    en: 'Enter',
    ru: 'Enter',
    enShift: 'Enter',
    ruShift: 'Enter',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'enter'],
    isFunctional: true,
  }],
  ['ShiftLeft', {
    en: 'Shift',
    ru: 'Shift',
    enShift: 'Shift',
    ruShift: 'Shift',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'shift_l', 'shift'],
    isFunctional: true,
    action: SHIFT_ACTION,
  }],
  ['KeyZ', {
    en: 'z',
    ru: 'я',
    enShift: 'Z',
    ruShift: 'Я',
    className: [KEY_CLASS]
  }],
  ['KeyX', {
    en: 'x',
    ru: 'ч',
    enShift: 'X',
    ruShift: 'Ч',
    className: [KEY_CLASS]
  }],
  ['KeyC', {
    en: 'c',
    ru: 'с',
    enShift: 'C',
    ruShift: 'С',
    className: [KEY_CLASS]
  }],
  ['KeyV', {
    en: 'v',
    ru: 'м',
    enShift: 'V',
    ruShift: 'М',
    className: [KEY_CLASS]
  }],
  ['KeyB', {
    en: 'b',
    ru: 'и',
    enShift: 'B',
    ruShift: 'И',
    className: [KEY_CLASS]
  }],
  ['KeyN', {
    en: 'n',
    ru: 'т',
    enShift: 'N',
    ruShift: 'Т',
    className: [KEY_CLASS]
  }],
  ['KeyM', {
    en: 'm',
    ru: 'ь',
    enShift: 'M',
    ruShift: 'Ь',
    className: [KEY_CLASS]
  }],
  ['Comma', {
    en: ',',
    ru: 'б',
    enShift: '<',
    ruShift: 'Б',
    className: [KEY_CLASS]
  }],
  ['Period', {
    en: '.',
    ru: 'ю',
    enShift: '>',
    ruShift: 'Ю',
    className: [KEY_CLASS]
  }],
  ['Slash', {
    en: '/',
    ru: '.',
    enShift: '?',
    ruShift: ',',
    className: [KEY_CLASS]
  }],
  ['ArrowUp', {
    en: '↑',
    ru: '↑',
    enShift: '↑',
    ruShift: '↑',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'up'],
    action: 'ArrowUp'
  }],
  ['ShiftRight', {
    en: 'Shift',
    ru: 'Shift',
    enShift: 'Shift',
    ruShift: 'Shift',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'shift_r', 'shift'],
    isFunctional: true,
  }],
  ['ControlLeft', {
    en: 'Ctrl',
    ru: 'Ctrl',
    enShift: 'Ctrl',
    ruShift: 'Ctrl',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'ctrl_l'],
    isFunctional: true,
  }],
  ['MetaLeft', {
    en: 'Win',
    ru: 'Win',
    enShift: 'Win',
    ruShift: 'Win',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'win'],
    isFunctional: true,
  }],
  ['AltLeft', {
    en: 'Alt',
    ru: 'Alt',
    enShift: 'Alt',
    ruShift: 'Alt',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'alt_l'],
    isFunctional: true,
  }],
  ['Space', {
    en: 'Space',
    ru: 'Space',
    enShift: 'Space',
    ruShift: 'Space',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'space'],
    isFunctional: true,
  }],
  ['AltRight', {
    en: 'Alt',
    ru: 'Alt',
    enShift: 'Alt',
    ruShift: 'Alt',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'alt_r'],
    isFunctional: true,
  }],
  ['ControlRight', {
    en: 'Ctrl',
    ru: 'Ctrl',
    enShift: 'Ctrl',
    ruShift: 'Ctrl',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'ctrl_r'],
    isFunctional: true,
  }],
  ['ArrowLeft', {
    en: '←',
    ru: '←',
    enShift: '←',
    ruShift: '←',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'left'],
  }],
  ['ArrowDown', {
    en: '↓',
    ru: '↓',
    enShift: '↓',
    ruShift: '↓',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'down']
  }],
  ['ArrowRight', {
    en: '→',
    ru: '→',
    enShift: '→',
    ruShift: '→',
    className: [KEY_CLASS, KEY_CLASS_MODIIER, 'right']
  }]
]);

const bodyElement = document.querySelector('body');

bodyElement.insertAdjacentHTML('afterbegin', `
    <div class="wrapper">
          <section class="input_text">
                <textarea class="input_text__item" autofocus></textarea>
          </section>
          <div class="text">Разрабатывалось в ОС Windows. Смена языка - Win.</div>
          <section class="keyboard"></section>
    </div>`);
const input = document.querySelector('.input_text__item');
const keyboard = document.querySelector('.keyboard');

const domMapping = new Map(); 

for (let [key, {
  ru,
  en,
  className
}] of BUTTONS_CONFIG) {
  const buttonElement = document.createElement('div');

  buttonElement.classList.add(...className);
  buttonElement.dataset.code = key;
  buttonElement.innerText = currentLocale === 'en' ? en : ru;

  domMapping.set(key, buttonElement);
  keyboard.appendChild(buttonElement);
}

function changeLocale() {
  const storedLocale = localStorage.getItem('locale') || currentLocale;

  if (storedLocale === 'en') {
    currentLocale = 'ru';
  } else {
    currentLocale = 'en';
  }

  console.log(currentLocale);
  localStorage.setItem('locale', currentLocale);
  updateKeyboard(currentLocale, isShift);
}

function getKeyLabel(key, locale, isShift) {
  const buttonInfo = BUTTONS_CONFIG.get(key);

  return buttonInfo[`${locale}${isShift ? 'Shift' : ''}`];
}

function updateKeyboard(locale, isShift) {
  for (const [key, value] of domMapping) {
    const newLabel = getKeyLabel(key, currentLocale, isShift);
    const { isNumber } = BUTTONS_CONFIG.get(key);
    if (!isNumber) {
      value.innerText = newLabel;
    }
  }
}

function handleButtonClick(event) {
  const isKey = event.target.classList.contains(KEY_CLASS);
  const code = event.target.dataset.code;
  const { isFunctional } = BUTTONS_CONFIG.get(code);
  if (isKey && !isFunctional) {
    input.value += event.target.innerText;
  }   
}

function handleKeyDownEvent(event) {
  const code = event.code;
  const hasCustomHandler = BUTTONS_CONFIG.has(code);

  if (hasCustomHandler) {
    event.preventDefault();
    const action = BUTTONS_CONFIG.get(code).action;
    if (action) {
      // switch action
      //     case 'ArrowUp': 

    }
  
  }
}

// function handleUpArrowClick(e) {
//     e.stopPropagation();
//     var keyboardEvent = document.createEvent("KeyboardEvent");
//     var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

//     keyboardEvent[initMethod](
//       "keydown", // event type: keydown, keyup, keypress
//       true,      // bubbles
//       true,      // cancelable
//       window,    // view: should be window
//       false,     // ctrlKey
//       false,     // altKey
//       false,     // shiftKey
//       false,     // metaKey
//       40,        // keyCode: unsigned long - the virtual key code, else 0
//       0          // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
//     );
//     document.dispatchEvent(keyboardEvent);
// }
const caps = document.querySelector('.capslk');
function handleCapsClick(event) {
  event.stopPropagation();

  isCaps = !isCaps;
  caps.classList.toggle('active');

  updateKeyboard(currentLocale, isCaps)
}

function handleButtonKeydown(event) {
  event.preventDefault();
  const code = event.code;
  const { isFunctional, action } = BUTTONS_CONFIG.get(code);

  if (!isFunctional) {
    input.value += getKeyLabel(code, currentLocale, isShift);
  } else {
    switch (action) {
      case SHIFT_ACTION:
        isShift = true;
        break;
      default:
        break;
    }
  }

  const element = domMapping.get(code);
  element.classList.add('active');
}

function handleButtonKeyUp(event) {
  const code = event.code;

  const element = domMapping.get(code);
  element.classList.remove('active');
}

const winButton = document.querySelector('.win');
const shifts = document.querySelectorAll('.shift');

// function shiftOn() {
//   shift = true;
//   console.log(shift);
// }

// function shiftOff() {
//   shifts = false;
//   console.log(shift);
// }

// shifts.forEach(shift => {
//   window.addEventListener('keydown', shiftOn);
//   window.addEventListener('keyup', shiftOff);
// });

// upArrow.addEventListener('click', handleUpArrowClick);
caps.addEventListener('click', handleCapsClick);
winButton.addEventListener('click', changeLocale);
keyboard.addEventListener('click', handleButtonClick);

window.addEventListener('keydown', handleButtonKeydown);
window.addEventListener('keyup', handleButtonKeyUp);
// window.addEventListener('keydown', handleKeyDownEvent);

// const BUTTONS = KEYBOARD.querySelectorAll('.k-key');
// KEYBOARD.addEventListener('click', (event) => {
//   BUTTONS.forEach((el) => {
//     if (event.target.classList.contains('k-key')) {
//       el.classList.remove('active');
//       event.target.classList.add('active');
//     }
//   });
// });



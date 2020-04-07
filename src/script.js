import {
  BUTTONS_CONFIG,
  KEY_CLASS,
  DELETE_ACTION,
  SPACE_ACTION,
  TAB_ACTION,
  ENTER_ACTION,
  BACKSPACE_ACTION,
} from './config';

const INITIAL_HTML = `
<div class="wrapper">
      <section class="input_text">
            <textarea class="input_text__item" autofocus unselectable="on"></textarea>
      </section>
      <div class="text"><br>Клавиатура создана в ОС Windows. Смена языка - левый Alt.</br></div>
      <section class="keyboard"></section>
</div>`;
const EN_LANG = 'en';
const RU_LANG = 'ru';
const DEFAULT_LOCALE = EN_LANG;

let currentLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;
let isShift = false;
let isCaps = false;
let cursorPosition = 0;


const bodyElement = document.querySelector('body');

bodyElement.insertAdjacentHTML('afterbegin', INITIAL_HTML);
const input = document.querySelector('.input_text__item');
const keyboard = document.querySelector('.keyboard');

const domMapping = new Map();


BUTTONS_CONFIG.forEach(([key, { ru, en, className }]) => {
  const buttonElement = document.createElement('div');
  buttonElement.classList.add(...className);
  buttonElement.dataset.code = key;
  buttonElement.innerText = (currentLocale === 'en') ? en : ru;
  domMapping.set(key, buttonElement);
  keyboard.appendChild(buttonElement);
});


function getKeyLabel(key) {
  const buttonInfo = BUTTONS_CONFIG.get(key);

  return buttonInfo[`${currentLocale}${(isShift || isCaps) ? 'Shift' : ''}`];
}

function updateDigitKeyboard() {
  domMapping.forEach(([key, button]) => {
    const newLabel = getKeyLabel(key);
    const { isNumber } = BUTTONS_CONFIG.get(key);

    if (isNumber) {
      button.innerText = newLabel;
    }
  });
}

function updateNonDigitKeyboard() {
  domMapping.forEach(([key, value]) => {
    const newLabel = getKeyLabel(key);
    const { isNumber } = BUTTONS_CONFIG.get(key);

    if (!isNumber) {
      value.innerText = newLabel;
    }
  });
}

function updateKeyboard() {
  updateDigitKeyboard();
  updateNonDigitKeyboard();
}

function changeLocale() {
  const storedLocale = localStorage.getItem('locale') || currentLocale;

  if (storedLocale === EN_LANG) {
    currentLocale = RU_LANG;
  } else {
    currentLocale = EN_LANG;
  }

  localStorage.setItem('locale', currentLocale);
  updateKeyboard(currentLocale, isShift, isCaps);
}


document.querySelector('.input_text__item').addEventListener('click', (e) => {
  cursorPosition = e.target.selectionStart;
});

function deleteSymbol() {
  const currentValue = input.value;
  const newValue = [currentValue.slice(0, cursorPosition), currentValue.slice(cursorPosition + 1)].join('');
  input.value = newValue;
}

function backspace() {
  const currentValue = input.value;
  const newValue = [currentValue.slice(0, cursorPosition - 1), currentValue.slice(cursorPosition)].join('');
  cursorPosition -= 1;
  if (cursorPosition < 0) {
    cursorPosition = 0;
  }
  input.value = newValue;
}

function addSpace() {
  const currentValue = input.value;
  const newValue = [currentValue.slice(0, cursorPosition), ' ', currentValue.slice(cursorPosition)].join('');
  cursorPosition += 1;
  input.setAttribute('value', newValue);
}

function addEnter() {
  const currentValue = input.value;
  const newValue = [currentValue.slice(0, cursorPosition), '\n', currentValue.slice(cursorPosition)].join('');
  cursorPosition += 1;
  input.value = newValue;
}

function handleMouseDown(event) {
  const isKey = event.target.classList.contains(KEY_CLASS);
  if (isKey) {
    event.target.classList.add('active');
    const { isFunctional, action } = BUTTONS_CONFIG.get(event.target.dataset.code);

    if (!isFunctional) {
      const currentValue = input.value;
      const newValue = [currentValue.slice(0, cursorPosition), event.target.innerText, currentValue.slice(cursorPosition)].join('');
      input.value = newValue;
      cursorPosition += 1;
    } else {
      switch (action) {
        case SPACE_ACTION:
          addSpace();
          break;
        case TAB_ACTION:
          addSpace();
          addSpace();
          addSpace();
          addSpace();
          break;
        case ENTER_ACTION:
          addEnter();
          break;
        case DELETE_ACTION:
          deleteSymbol();
          break;
        case BACKSPACE_ACTION:
          backspace();
          break;
        default:
          break;
      }
    }
  }
}

function handleMouseUp(event) {
  const isKey = event.target.classList.contains(KEY_CLASS);
  if (isKey) {
    event.target.classList.remove('active');
  }
}

const shifts = document.querySelectorAll('.shift');
const caps = document.querySelector('.capslk');

function handleShift(event, shiftCode) {
  isShift = !isShift;
  if (isCaps) {
    isCaps = false;
    caps.classList.toggle('hold');
  }
  if (event && event.target) {
    event.target.classList.toggle('hold');
  } else {
    const shiftElem = domMapping.get(shiftCode);
    shiftElem.classList.toggle('hold');
  }
  updateKeyboard(currentLocale, isShift, isCaps);
}

shifts.forEach((element) => {
  element.addEventListener('click', handleShift);
});


const altLeft = document.querySelector('.alt_l');
altLeft.addEventListener('click', changeLocale);

function handleCaps() {
  isCaps = !isCaps;
  caps.classList.toggle('hold');
  updateNonDigitKeyboard(currentLocale, isShift, isCaps);
}

caps.addEventListener('click', handleCaps);

function handleButtonKeydown(event) {
  const { code } = event;

  if (['AltLeft', 'AltRight'].includes(code)) {
    event.preventDefault();
    if (code === 'AltLeft') {
      changeLocale();
    }
  } else if (code === 'CapsLock') {
    handleCaps();
  } else if (['ShiftLeft', 'ShiftRight'].includes(code)) {
    handleShift(null, code);
  }

  if (domMapping.has(code)) {
    event.preventDefault();
    const buttonElement = domMapping.get(code);
    const evt = document.createEvent('MouseEvents');
    evt.initEvent('mousedown', true, true);
    buttonElement.dispatchEvent(evt);
    buttonElement.classList.add('active');
  }
}

function handleButtonKeyUp(event) {
  const { code } = event;
  if (domMapping.has(code)) {
    const buttonElement = domMapping.get(code);
    buttonElement.classList.remove('active');
  }
}

keyboard.addEventListener('mousedown', handleMouseDown);
keyboard.addEventListener('mouseup', handleMouseUp);
window.addEventListener('keydown', handleButtonKeydown);
window.addEventListener('keyup', handleButtonKeyUp);

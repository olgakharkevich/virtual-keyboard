import { 
  BUTTONS_CONFIG,
  KEY_CLASS,
  DELETE_ACTION,
  SPACE_ACTION,
  TAB_ACTION,
  ENTER_ACTION,
  BACKSPACE_ACTION,
 } from './config';

const DEFAULT_LOCALE = 'en';

let currentLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;
let isShift = false;
let isCaps = false;
let cursorPosition = 0;


const bodyElement = document.querySelector('body');

bodyElement.insertAdjacentHTML('afterbegin', `
    <div class="wrapper">
          <section class="input_text">
                <textarea class="input_text__item" autofocus unselectable="on"></textarea>
          </section>
          <div class="text"><br>Клавиатура создана в ОС Windows. Смена языка - левый Alt.</br></div>
          <section class="keyboard"></section>
    </div>`);
const input = document.querySelector('.input_text__item');
const keyboard = document.querySelector('.keyboard');

const domMapping = new Map();

// eslint-disable-next-line no-restricted-syntax
for (const [key, { ru, en, className }] of BUTTONS_CONFIG) {
  const buttonElement = document.createElement('div');
  buttonElement.classList.add(...className);
  buttonElement.dataset.code = key;
  buttonElement.innerText = (currentLocale === 'en') ? en : ru;
  domMapping.set(key, buttonElement);
  keyboard.appendChild(buttonElement);
}

function getKeyLabel(key, currentlocale, isShift, isCaps) {
  const buttonInfo = BUTTONS_CONFIG.get(key);

  return buttonInfo[`${currentlocale}${(isShift || isCaps) ? 'Shift' : ''}`];
}

function updateDigitKeyboard(currentLocale, isShift, isCaps) {
  for (const [key, value] of domMapping) {
    const newLabel = getKeyLabel(key, currentLocale, isShift, isCaps);
    const { isNumber } = BUTTONS_CONFIG.get(key);

    if (isNumber) {
      value.innerText = newLabel;
    }
  }
}

function updateNonDigitKeyboard(currentLocale, isShift, isCaps) {
  for (const [key, value] of domMapping) {
    const newLabel = getKeyLabel(key, currentLocale, isShift, isCaps);
    const { isNumber } = BUTTONS_CONFIG.get(key);

    if (!isNumber) {
      value.innerText = newLabel;
    }
  }
}

function updateKeyboard(currentLocale, isShift, isCaps) {
  updateDigitKeyboard(currentLocale, isShift, isCaps);
  updateNonDigitKeyboard(currentLocale, isShift, isCaps);
}

function changeLocale() {
  const storedLocale = localStorage.getItem('locale') || currentLocale;

  if (storedLocale === 'en') {
    currentLocale = 'ru';
  } else {
    currentLocale = 'en';
  }

  localStorage.setItem('locale', currentLocale);
  updateKeyboard(currentLocale, isShift, isCaps);
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
      cursorPosition++;
    } else {
      switch (action) {
        case SPACE_ACTION:
          addSpace(input);
          break;
        case TAB_ACTION:
          addSpace(input);
          addSpace(input);
          addSpace(input);
          addSpace(input);
          break;
        case ENTER_ACTION:
          addEnter(input);
          break;
        case DELETE_ACTION:
          deleteSymbol(input);
          break;
        case BACKSPACE_ACTION:
          backspace(input);
          break;
      }
    }
  }
}

document.querySelector('.input_text__item').addEventListener('click', (e) => {
  cursorPosition = e.target.selectionStart;
});

function deleteSymbol(input) {
  const currentValue = input.value;
  const newValue = [currentValue.slice(0, cursorPosition), currentValue.slice(cursorPosition + 1)].join('');
  input.value = newValue;
}

function backspace(input) {
  const currentValue = input.value;
  const newValue = [currentValue.slice(0, cursorPosition - 1), currentValue.slice(cursorPosition)].join('');
  cursorPosition--;
  if (cursorPosition < 0) {
    cursorPosition = 0;
  }
  input.value = newValue;
}

function addSpace(input) {
  const currentValue = input.value;
  const newValue = [currentValue.slice(0, cursorPosition), ' ', currentValue.slice(cursorPosition)].join('');
  cursorPosition++;
  input.value = newValue;
}

function addEnter(input) {
  const currentValue = input.value;
  const newValue = [currentValue.slice(0, cursorPosition), '\n', currentValue.slice(cursorPosition)].join('');
  cursorPosition++;
  input.value = newValue;
}

function handleMouseUp(event) {
  const isKey = event.target.classList.contains(KEY_CLASS);
  if (isKey) {
    event.target.classList.remove('active');
  }
}

const shifts = document.querySelectorAll('.shift');

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


const alt_l = document.querySelector('.alt_l');
alt_l.addEventListener('click', changeLocale);

function handleCaps() {
  isCaps = !isCaps;
  caps.classList.toggle('hold');
  updateNonDigitKeyboard(currentLocale, isShift, isCaps);
}

const caps = document.querySelector('.capslk');
caps.addEventListener('click', handleCaps);

function handleButtonKeydown(event) {
  const code = event.code;

  if (['AltLeft', 'AltRight'].includes(code)) {
    event.preventDefault();
    if (code === 'AltLeft') {
      changeLocale();
    }
  } else if ( code === 'CapsLock') {
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
  const code = event.code;
  if (domMapping.has(code)) {
    const buttonElement = domMapping.get(code);
    buttonElement.classList.remove('active');
  }
}

keyboard.addEventListener('mousedown', handleMouseDown);
keyboard.addEventListener('mouseup', handleMouseUp);
window.addEventListener('keydown', handleButtonKeydown);
window.addEventListener('keyup', handleButtonKeyUp);

import { BUTTONS_CONFIG } from './config';
const DEFAULT_LOCALE = 'en';
// const DELETE_ACTION = 'deleteAction';
// const SHIFT_ACTION = 'shift_action';
let currentLocale = localStorage.getItem('locale') || DEFAULT_LOCALE;
let isShift = false;
let isCaps = false;
let cursorPosition = 0;

const KEY_CLASS = 'k-key';
// const KEY_CLASS_MODIIER = 'k-mod';


const bodyElement = document.querySelector('body');

bodyElement.insertAdjacentHTML('afterbegin', `
    <div class="wrapper">
          <section class="input_text">
                <textarea class="input_text__item" autofocus></textarea>
          </section>
          <div class="text"><br>Клавиатура создана в ОС Windows. Смена языка - Win.</br></div>
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
      console.log(cursorPosition);
    } else {
      switch (action){
        case 'SPACE_ACTION':
          addSpace(input);
          break;
        case 'TAB_ACTION': 
          addSpace(input);
          addSpace(input);
          addSpace(input);
          addSpace(input);
          break;
        case 'ENTER_ACTION':
          addEnter(input);
          break;
          break;
        case 'DELETE_ACTION':
          deleteSymbol(input);
          break;
        case 'BACKSPACE_ACTION':
          backspace(input);
          break;
      }
    }
  }
}

document.querySelector('.input_text__item').addEventListener('click', e => {
  cursorPosition = e.target.selectionStart;
})

function deleteSymbol(input) {
  const currentValue = input.value;
  const newValue = [currentValue.slice(0, cursorPosition), currentValue.slice(cursorPosition+1)].join('');
  input.value = newValue;
}

function backspace(input) {
  const currentValue = input.value;
  const newValue = [currentValue.slice(0, cursorPosition-1), currentValue.slice(cursorPosition)].join('');
  cursorPosition--;
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

function handleShiftClick(event) {
  isShift = !isShift;
  if (isCaps) {
    isCaps = false;
    caps.classList.toggle('hold');
  }
  event.target.classList.toggle('hold');
  updateKeyboard(currentLocale, isShift, isCaps);
}




const shifts = document.querySelectorAll('.shift');

shifts.forEach(element => {
  element.addEventListener('click', handleShiftClick);
});



const winButton = document.querySelector('.win');
winButton.addEventListener('click', changeLocale);

function handleCapsClick(e) {
  isCaps = !isCaps;
  caps.classList.toggle('hold');
  updateNonDigitKeyboard(currentLocale, isShift, isCaps);
}

const caps = document.querySelector('.capslk');
caps.addEventListener('click', handleCapsClick);



keyboard.addEventListener('mousedown', handleMouseDown);
keyboard.addEventListener('mouseup', handleMouseUp);



// function shiftOn() {
//   shift = true;
//   console.log(shift);
// }

// function shiftOff() {
//   shifts = false;
//   console.log(shift);
// }

// function handleButtonClick(event) {
//   const isKey = event.target.classList.contains(KEY_CLASS);
//   if (isKey) {
//     // const code = event.target.dataset.code;
//     event.target.classList.add('active');
//     const { isFunctional } = BUTTONS_CONFIG.get(event.target.dataset.code);
//     if (!isFunctional) {
//       input.value += event.target.innerText;
//     }
//   }
// }


// function handleKeyDownEvent(event) {
//   const code = event.code;
//   const hasCustomHandler = BUTTONS_CONFIG.has(code);

//   if (hasCustomHandler) {
//     event.preventDefault();
//     const action = BUTTONS_CONFIG.get(code).action;
//     if (action) {
//       // switch action
//       //     case 'ArrowUp': 

//     }

//   }
// }



// function handleButtonKeydown(event) {
//   event.preventDefault();
//   // const code = event.code;
//   const { isFunctional, action } = BUTTONS_CONFIG.get(event.code);

//   if (!isFunctional) {
//     input.value += getKeyLabel(event.code, currentLocale, isShift);
//   } else {
//     switch (action) {
//       case SHIFT_ACTION:
//         isShift = true;
//         break;
//       default:
//         break;
//     }
//   }
//   const element = domMapping.get(event.code);
//   element.classList.add('active');
// }

// function handleButtonKeyUp(event) {
//   const code = event.code;

//   const element = domMapping.get(code);
//   element.classList.remove('active');
// }





// shifts.forEach(shift => {
//   window.addEventListener('keydown', shiftOn);
//   window.addEventListener('keyup', shiftOff);
// });


// window.addEventListener('keydown', handleButtonKeydown);
// window.addEventListener('keyup', handleButtonKeyUp);
// window.addEventListener('keydown', handleKeyDownEvent);




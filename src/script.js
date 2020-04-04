const BUTTON_KEYS = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 46, 48,
  8, 9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220];

const EN = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Del', 'Backspace',
  'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'];

const RU = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Del', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'];


const HTML_BODY = document.querySelector('body');
HTML_BODY.insertAdjacentHTML('afterbegin', `<div class="wrapper">
  <section class="input_text">
    <textarea class="input_text__item" autofocus></textarea>
  </section>
  <section class="keyboard">
  </section>
</div>`);

const KEYBOARD = HTML_BODY.querySelector('.keyboard');
for (let i = 0; i < BUTTON_KEYS.length; i += 1) {
  const divKey = document.createElement('div');
  divKey.innerHTML = EN[i];
  divKey.classList.add('k-key');
  if (BUTTON_KEYS[i] === 8) {
    divKey.classList.add('k-mod', 'backspace');
  } else if (BUTTON_KEYS[i] === 9) {
    divKey.classList.add('k-mod', 'tab');
  }
  KEYBOARD.append(divKey);
}

const BUTTONS = KEYBOARD.querySelectorAll('.k-key');
KEYBOARD.addEventListener('click', (event) => {
  BUTTONS.forEach((el) => {
    if (event.target.classList.contains('k-key')) {
      el.classList.remove('active');
      event.target.classList.add('active');
    }
  });
});










// space 
// shift_l
// capslk ctrl_l ctrl_r 
// enter 
   

// for (let key in BUTTON_KEYS) {
//   KEYBOARD.insertAdjacentHTML('beforeend', `<div class="k-key"></div>`);
//   KEYBOARD.querySelectorAll('div')[key].textContent = BUTTON_KEYS[key]['en'];
//   DIV.innerHTML += BUTTON_KEYS[key]['en'];
//   KEYBOARD.append(DIV);
// }

// let DIV = document.createElement('div');
//     KEYBOARD.append(DIV.classList.add('k-key'));
//     console.log(DIV);

// 220: { en: '\', ru: '\' }
//   20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 13,
//   16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 38, 16,
//   17, 91, 18, 32, 18, 17, 37, 40, 39;

//   KEYBOARD.insertAdjacentHTML('beforeend', '<div class="key"></div>');
//   const curRow = KEYBOARD.querySelectorAll('.row')[i];


  
//   console.log(curRow);
//   curRow.append(DIV);

// const BUTTON_MAPPING = {
//     67: {
//        en_small: 'a',
//        en_big: 'A',
//        ru_small: 'ф',
//        ru_big: 'Ф',
//     }
//   };

// const BUTTON_KEYS = {
//     192: { en: '`', ru: 'ё' },
//     49: { en: '1', ru: '1' },
//     50: { en: '2', ru: '2' },
//     51: { en: '3', ru: '3' },
//     52: { en: '4', ru: '4' },
//     53: { en: '5', ru: '5' },
//     54: { en: '6', ru: '6' },
//     55: { en: '7', ru: '7' },
//     56: { en: '8', ru: '8' },
//     57: { en: '9', ru: '9' },
//     48: { en: '0', ru: '0' },
//     8: { en: 'Backspace', ru: 'Backspace' },
//     9: { en: 'Tab', ru: 'Tab' },
//     81: { en: 'q', ru: 'й' },
//     87: { en: 'w', ru: 'ц' },
//     69: { en: 'e', ru: 'у' },
//     82: { en: 'r', ru: 'к' },
//     84: { en: 't', ru: 'е' },
//     89: { en: 'y', ru: 'н' },
//     85: { en: 'u', ru: 'г' },
//     73: { en: 'i', ru: 'ш' },
//     79: { en: 'o', ru: 'щ' },
//     80: { en: 'p', ru: 'з' },
//     219: { en: '[', ru: 'х' },
//     221: { en: ']', ru: 'ъ' },

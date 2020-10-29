const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
    display: null,
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: '',
    capsLock: false,
    cursorPosition: 0,
    secondLang: false,
  },

  init() {
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    this.elements.main.classList.add('keyboard', 'keyboard--hidden');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.append(this._createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

    //this.elements.display = document.querySelector('.use-keyboard-input');

    document.body.append(this.elements.main);
    this.elements.main.append(this.elements.keysContainer);

    document.querySelectorAll('.use-keyboard-input').forEach((element) => {
      element.addEventListener('blur', (event) => {
        event.preventDefault();
        element.focus();
      });

      element.addEventListener('focus', () => {
        this.open(element.value, currentValue => {
          element.value = currentValue;
        });
      });

      document.querySelector('.keyboard').addEventListener('mouseenter', () => {
          this.properties.value = element.value;
          //this.properties.cursorPosition = this.elements.display.selectionStart;
          //console.log(this.elements.display);
        });
      });
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    let keyLayout = [];

    if (!this.properties.secondLang) {
      keyLayout = [
        '~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'caps',
        'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'enter',
        'done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', ',', '.', '?',
        'lang', 'space', 'left', 'right',
      ];
    } else {
      keyLayout = [
        'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace',
        'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'caps',
        'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
        'done', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', '.', '?',
        'lang', 'space', 'left', 'right',
      ];
    }

    const createIconHTML = (iconName) => {
      return `<icon class="material-icons">${iconName}</icon>`;
    }

    keyLayout.forEach((key) => {
      //? изначально массив был такой ['backspace', 'p', 'enter', '?']
      const insertLineBreak = ['backspace', 'enter', '?', 'caps'].indexOf(key) !== -1;
      const keyElement = document.createElement('button');

      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard__key');
      //console.log(this);


      switch (key) {
        case 'backspace':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('backspace');

          keyElement.addEventListener('click', () => {
            //? возможно, эту функцию придется изменить после реализации гориз.смещения курсора
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this._triggerEvent('oninput');
          });

          break;

        case 'caps':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
          keyElement.innerHTML = createIconHTML('keyboard_capslock');

          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();
            keyElement.classList.toggle('keyboard__key--active');
            //? было так ('keyboard__key--active', this.properties.capsLock)
            console.log(this.properties.capsLock);
          });

          break;

        case 'enter':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('keyboard_return');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this._triggerEvent('oninput');
          });

          break;

        case 'space':
          keyElement.classList.add('keyboard__key--extra-wide');
          keyElement.innerHTML = createIconHTML('space_bar');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this._triggerEvent('oninput');
          });

          break;

        case 'left':
          keyElement.innerHTML = createIconHTML('west');

          keyElement.addEventListener('click', () => {
            this.properties.cursorPosition = (this.properties.cursorPosition > 1)
              ? this.properties.cursorPosition - 1
              : 0;

            this._triggerEvent('oninput');
          });

          break;

        case 'right':
          keyElement.innerHTML = createIconHTML('east');

          keyElement.addEventListener('click', () => {
            this.properties.cursorPosition = (this.properties.cursorPosition === this.properties.value.length)
              ? this.properties.value.length
              : this.properties.cursorPosition + 1;
            console.log(this.properties.value.length, this.properties.cursorPosition);
            //! понять, как внутри объекта обращаться к текстАреа своему и переписать эту функцию.
            //! затем добавить ее на др.стрелку
            document.querySelector('textarea').selectionStart = document.querySelector('textarea').selectionEnd = this.properties.cursorPosition;

            this._triggerEvent('oninput');
          });

          break;

        case 'lang':
          keyElement.innerHTML = (this.properties.secondLang === false) ? 'en' : 'ru';

          keyElement.addEventListener('click', () => {
            this._toggleLang();
            //keyElement.classList.toggle('keyboard__key--active');
            //console.log(this.properties.capsLock);
          });

          break;


        case 'done':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--dark');
          keyElement.innerHTML = createIconHTML('check_circle');

          keyElement.addEventListener('click', () => {
            this.close();
            this._triggerEvent('onclose');
          });

          break;

        default:
          keyElement.textContent = key.toLocaleLowerCase();

          keyElement.addEventListener('click', () => {
            this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
            this._triggerEvent('oninput');
          });

          break;
      }

      fragment.append(keyElement);

      if (insertLineBreak) {
        fragment.append(document.createElement('br'));
      }
    });

    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == 'function') {
      this.eventHandlers[handlerName](this.properties.value);
      this.properties.cursorPosition = document.querySelector('textarea').selectionStart;
      //console.log(this.properties.cursorPosition);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    for (const key of this.elements.keys) {
      console.log(key.textContent);
      if (key.childElementCount === 0) {
        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
      }
    }
  },

  _toggleLang() {
    this.properties.secondLang = !this.properties.secondLang;

    this.elements.keysContainer.innerHTML = '';
    this.properties.capsLock = false;
    this.elements.keysContainer.append(this._createKeys());
    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');
  },

  // getCursorPosition(ctrl) {
  //   console.log(this);
  //   let cursorPos = 0;
  //   if ( document.selection ) {
  //       ctrl.focus ();
  //       var Sel = document.selection.createRange();
  //       Sel.moveStart ('character', -ctrl.value.length);
  //       CaretPos = Sel.text.length;
  //   } else if ( ctrl.selectionStart || ctrl.selectionStart == '0' ) {
  //       CaretPos = ctrl.selectionStart;
  //   }
  //   return CaretPos;
  // },



  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove('keyboard--hidden');
  },

  close() {
    this.properties.value = '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add('keyboard--hidden');
  }
};

window.addEventListener('DOMContentLoaded', function () {
  Keyboard.init();
});

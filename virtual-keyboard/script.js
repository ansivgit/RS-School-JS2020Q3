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
    secondLang: false,
    shift: false,
    //keyIsActive: false,
    cursorPosition: 0,
  },

  init() {
    this.elements.display = document.querySelector('.use-keyboard-input');

    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    this.elements.main.classList.add('keyboard', 'keyboard--hidden');
    this.elements.keysContainer.classList.add('keyboard__keys');
    this.elements.keysContainer.append(this._createKeys());

    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

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

      element.addEventListener('keydown', (event) => {
        this._triggerKbKeys(event);
      });

      element.addEventListener('keyup', (event) => {
        this._triggerKbKeys(event);
      });

      element.addEventListener('input', (event) => {
        this._triggerKbKeys(event);
      });

      document.querySelector('.keyboard').addEventListener('mouseenter', () => {
        this.properties.value = element.value;
        this.properties.cursorPosition = this.elements.display.selectionStart;
        //console.log(this.properties.cursorPosition);
      });
    });
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    let keyLayout = [];

    if (!this.properties.secondLang) {
      if (!this.properties.shift) {
        keyLayout = [
          '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace', 'br',
          'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'caps', 'br',
          'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter', 'br',
          'done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'br',
          'lang', 'shift', 'space', 'left', 'right',
        ];
      } else {
        keyLayout = [
          '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', 'backspace', 'br',
          'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', 'caps', 'br',
          'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '\"', 'enter', 'br',
          'done', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'br',
          'lang', 'shift', 'space', 'left', 'right',
        ];
      }
    } else {
      if (!this.properties.shift) {
        keyLayout = [
          'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'backspace', 'br',
          'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'caps', 'br',
          'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'br',
          'done', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'br',
          'lang', 'shift', 'space', 'left', 'right',
        ];
      } else {
        keyLayout = [
          'ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', 'backspace', 'br',
          'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'caps', 'br',
          'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'br',
          'done', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', ',', 'br',
          'lang', 'shift', 'space', 'left', 'right',
        ];
      }
    }

    const createIconHTML = (iconName) => {
      return `<icon class="material-icons">${iconName}</icon>`;
    }

    keyLayout.forEach((key) => {
      //? изначально массив был такой ['backspace', 'p', 'enter', '?']
      const insertLineBreak = ['br'].indexOf(key) !== -1;
      const keyElement = document.createElement('button');

      keyElement.setAttribute('type', 'button');
      keyElement.setAttribute('data-code', key);
      keyElement.classList.add('keyboard__key');

      const isActive = (prop, activeClass = 'keyboard__key--active') => {
        if (prop === true) {
          keyElement.classList.add(activeClass);
        } else {
          keyElement.classList.remove(activeClass);
        }
      };

      switch (key) {
        case 'br':
          keyElement.classList.add('unvisible');
          keyElement.textContent = '';
          break;

        case 'backspace':
          keyElement.classList.add('keyboard__key--wide');
          keyElement.innerHTML = createIconHTML('backspace');

          keyElement.addEventListener('click', () => {
            //? возможно, эту функцию придется изменить после реализации гориз.смещения курсора
            this.properties.value = this.properties.value.substring(0, this.properties.cursorPosition - 1)
              + this.properties.value.substring(this.properties.cursorPosition);

            this.properties.cursorPosition = (this.properties.cursorPosition !== 0)
              ? this.properties.cursorPosition - 1
              : 0;

            this._triggerEvent('oninput');
            this.elements.display.selectionStart = this.elements.display.selectionEnd = this.properties.cursorPosition;
            //console.log(this.properties.cursorPosition, this.elements.display.selectionStart);
          });

          break;

        case 'caps':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
          keyElement.innerHTML = createIconHTML('keyboard_capslock');

          isActive(this.properties.capsLock);

          keyElement.addEventListener('click', () => {
            this._toggleCapsLock();

            isActive(this.properties.capsLock);

            //? было так ('keyboard__key--active', this.properties.capsLock) - см исходный код
          });

          break;

        case 'shift':
          keyElement.classList.add('keyboard__key--wide', 'keyboard__key--activatable');
          keyElement.innerHTML = 'shift';

          isActive(this.properties.shift);

          keyElement.addEventListener('click', () => {
            this._toggleShift();
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

            this.elements.display.selectionStart = this.elements.display.selectionEnd = this.properties.cursorPosition;
            //console.log(this.properties.cursorPosition);

            this._triggerEvent('oninput');
          });

          break;

        case 'right':
          keyElement.innerHTML = createIconHTML('east');

          keyElement.addEventListener('click', () => {
            this.properties.cursorPosition = (this.properties.cursorPosition === this.properties.value.length)
              ? this.properties.value.length
              : this.properties.cursorPosition + 1;

            this.elements.display.selectionStart = this.elements.display.selectionEnd = this.properties.cursorPosition;

            this._triggerEvent('oninput');
          });

          break;

        case 'lang':
          keyElement.innerHTML = (this.properties.secondLang === false) ? 'en' : 'ru';

          keyElement.addEventListener('click', () => {
            this._toggleLang();
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
            this._stringRenew(key)
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
    }
  },

  _heightControl() {
    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        if (this.properties.capsLock === this.properties.shift) {
          key.textContent = key.textContent.toLowerCase();
        } else {
          key.textContent = key.textContent.toUpperCase();
        }
      }
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    this._heightControl();
  },

  _toggleLang() {
    this.properties.secondLang = !this.properties.secondLang;

    this.elements.keysContainer.innerHTML = '';
    this.elements.keysContainer.append(this._createKeys());
    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

    this._heightControl();
  },

  _toggleShift() {
    this.properties.shift = !this.properties.shift;

    this.elements.keysContainer.innerHTML = '';
    this.elements.keysContainer.append(this._createKeys());
    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

    this._heightControl();
  },

  _stringRenew(char) {
    console.log('before ', this.properties.cursorPosition);

    const newText = (this.properties.capsLock === this.properties.shift)
      ? char.toLowerCase()
      : char.toUpperCase();

    this.properties.cursorPosition = this.elements.display.selectionStart = this.elements.display.selectionEnd;

    this.properties.value = this.properties.value.substring(0, this.properties.cursorPosition + 1)
      + newText
      + this.properties.value.substring(this.properties.cursorPosition);

    this.elements.display.selectionStart = this.elements.display.selectionEnd = this.properties.cursorPosition;
    console.log('end ', this.properties.cursorPosition);
  },

  _triggerKbKeys(event) {
    const simbolKey = document.querySelector(`[data-code = "${event.key.toLowerCase()}"]`);

    if (!simbolKey) return;

    if (event.type === 'keydown') {
      event.preventDefault();

      if (event.key === 'Shift') {
        if (event.repeat) return;

        this._toggleShift();
      }

      if (event.key === 'CapsLock') {
        //event.preventDefault();

        const capsKey = document.querySelector('[data-code = "caps"]');
        this._toggleCapsLock();

        (this.properties.capsLock)
          ? capsKey.classList.add('keyboard__key--active')
          : capsKey.classList.remove('keyboard__key--active');

      }
      //event.preventDefault();
      const text = simbolKey.textContent;

      this._stringRenew(text);
      this._triggerEvent('oninput');

      simbolKey.classList.add('active');
    };

    if (event.type === 'keyup') {
      if (event.key === 'Shift') {
        this._toggleShift();

      } else {
        event.preventDefault();
        simbolKey.classList.remove('active');
      }
    }

    if (event.type === 'input') {
      this.properties.capsLock = false;
      this.properties.shift = false;

      this.elements.keysContainer.innerHTML = '';
      this.elements.keysContainer.append(this._createKeys());
      this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');
    }
  },

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
  },
};

window.addEventListener('DOMContentLoaded', function () {
  Keyboard.init();
});

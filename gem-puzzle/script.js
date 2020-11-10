const FIELD_DIMENSION = 4;
let intervalId;

class Box {
  constructor(dimension) {
    this.dimension = dimension;
    this.chips = [];
    this.empty = null;
    this.time = 0;
    this.moves = 0;
    this.playing = false;
    this.sound = false;
    this._clear();
  }

  _clear() {
    this.chips = [];
    this.empty = null;
    this.time = 0;
    this.moves = 0;
    this.playing = false;
    clearInterval(intervalId);
    this._timer();
  }

  init() {
    this.body = document.querySelector('body');
    this.container = document.createElement('div');
    this.container.classList.add('container');

    this.audio = document.createElement('audio');
    this.audio.setAttribute('src', './assets/keys2.mp3');
    this.audio.setAttribute('data-audio', 'keys');

    this.header = document.createElement('div');
    this.header.classList.add('header');

    this.title = document.createElement('div');
    this.title.classList.add('header__title');
    this.title.textContent = 'Gem-Puzzle';

    this.shuffle = document.createElement('button');
    this.shuffle.classList.add('header__shuffle');
    this.shuffle.setAttribute('type', 'button');
    this.shuffle.textContent = 'Shuffle';

    this.menu = document.createElement('nav');
    this.menu.classList.add('menu');

    this.menuSound = document.createElement('button');
    this.menuSound.classList.add('menu__sound');
    !this.sound ? this.menuSound.classList.add('menu__sound--mute') : '';

    this.menuMain = document.createElement('div');
    this.menuMain.classList.add('menu__main');
    this.menuMainBtn = document.createElement('button');
    this.menuMainBtn.classList.add('menu__main__btn');
    this.menuMainBtn.textContent = 'Menu';

    this.menuMainContainer = document.createElement('div');
    this.menuMainContainer.classList.add('menu__main__container');
    this.menuMainSave = document.createElement('button');
    this.menuMainSave.classList.add('menu__main__item');
    this.menuMainSave.classList.add('menu__main__item--save');
    this.menuMainSave.textContent = 'Save Game';
    this.menuMainRestore = document.createElement('button');
    this.menuMainRestore.classList.add('menu__main__item');
    this.menuMainRestore.classList.add('menu__main__item--restore');
    this.menuMainRestore.textContent = 'Restore Game';

    this.statistic = document.createElement('div');
    this.statistic.classList.add('statistic');

    this.statTime = document.createElement('div');
    this.statTime.classList.add('statistic__time');
    this.statTimeTitle = document.createElement('div');
    this.statTimeTitle.classList.add('statistic__time--title');
    this.statTimeTitle.textContent = 'Time: ';
    this.statTimeValue = document.createElement('div');
    this.statTimeValue.classList.add('statistic__time--value');
    this.statTimeValue.textContent = this.time;

    this.statMoves = document.createElement('div');
    this.statMoves.classList.add('statistic__moves');
    this.statMovesTitle = document.createElement('div');
    this.statMovesTitle.classList.add('statistic__moves--title');
    this.statMovesTitle.textContent = 'Moves: ';
    this.statMovesValue = document.createElement('div');
    this.statMovesValue.classList.add('statistic__moves--value');
    this.statMovesValue.textContent = this.moves;


    this.box = document.createElement('div');
    this.box.classList.add('box');
    this.box.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    this.footer = document.createElement('div');
    this.footer.classList.add('footer');

    for (let i = 0; i < 6; i++) {
      this.footerBtn = document.createElement('button');
      this.footerBtn.classList.add('footer__btn');
      this.footerBtn.setAttribute('type', 'button');
      this.footerBtn.setAttribute('data-field', `${i + 3}`);

      if (i === this.dimension - 3) {
        this.footerBtn.setAttribute('active', 'true');
        this.footerBtn.classList.add('footer__btn--active');
      }

      this.footerBtn.textContent = `${i + 3}×${i + 3}`;
      this.footer.append(this.footerBtn);
    }

    this.empty = {
      x: this.dimension - 1,
      y: this.dimension - 1,
      cell: 'empty',
    };

    this.body.append(this.container);
    this.container.append(this.header);
    this.header.append(this.title);
    this.header.append(this.shuffle);
    this.container.append(this.menu);
    this.menu.append(this.menuSound);
    this.menu.append(this.menuMain);
    this.menuMain.append(this.menuMainBtn);
    this.menuMain.append(this.menuMainContainer);
    this.menuMainContainer.append(this.menuMainSave);
    this.menuMainContainer.append(this.menuMainRestore);
    this.container.append(this.statistic);
    this.statistic.append(this.statTime);
    this.statTime.append(this.statTimeTitle);
    this.statTime.append(this.statTimeValue);
    this.statistic.append(this.statMoves);
    this.statMoves.append(this.statMovesTitle);
    this.statMoves.append(this.statMovesValue);
    this.container.append(this.box);
    this.box.append(this._createChips(this.dimension));
    this.container.append(this.footer);
    this.body.append(this.audio);

    this.container.querySelectorAll('.chip').forEach(elem => {
      elem.addEventListener('click', () => {
        console.log('iii');
        this.playing = true;
        this._move(elem);
      });

      elem.addEventListener('dragstart', (event) => {
        //event.target.classList.add('selected');
      });

      elem.addEventListener('dragend', (event) => {
        //event.target.classList.remove('selected');
        this.playing = true;

        this._move(elem);
      });
    });

    this.menuSound.addEventListener('click', () => {
      this.sound = !this.sound;
      this.sound
        ? this.menuSound.classList.remove('menu__sound--mute')
        : this.menuSound.classList.add('menu__sound--mute');
    });

    this.shuffle.addEventListener('click', () => {
      this.time = 0;
      this.playing = false;
      this.statTimeValue.textContent = this.time;

      this._shuffle(50);
    });

    this.menuMainBtn.addEventListener('click', () => {
      console.log(this.chips);
    });

    this.menuMainSave.addEventListener('click', () => {
      this._saveGame();
    });

    this.menuMainRestore.addEventListener('click', () => {
      this._restoreGame();
    });

    this.footer.querySelectorAll('.footer__btn').forEach((elem) => {
      elem.addEventListener('click', () => {
        this._changeField(elem);
      });
    });
  }

  _createChips(quantity) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < quantity; i++) {
      let row = [];

      for (let j = 0; j < quantity; j++) {
        const elem = document.createElement('div');
        elem.classList.add('chip');
        elem.setAttribute('draggable', 'true');

        elem.style.gridRowStart = i + 1;
        elem.style.gridColumnStart = j + 1;

        fragment.append(elem);

        if (i * this.dimension + j + 1 !== this.dimension ** 2) {
          let number = i * this.dimension + j + 1;
          elem.setAttribute('data-cell', number);
          elem.textContent = number;

          if (this.dimension === 3) {
            elem.style.width = '5rem';
            elem.style.height = '5rem';
          }

          row.push({ x: j, y: i, 'cell': number });

        } else {
          elem.classList.add('chip--empty');
          elem.setAttribute('draggable', 'false');

          elem.addEventListener('dragover', (event) => {
            //console.log(event.target);
            event.preventDefault();
          });

          row.push(this.empty);
        }
      }

      this.chips.push(row);
    }

    return fragment;
  }

  _getFreeChips() {
    const freeChips = [];

    switch (this.empty.x) {
      case 0: freeChips.push(this.chips[this.empty.y][this.empty.x + 1]); break;
      case (this.dimension - 1): freeChips.push(this.chips[this.empty.y][this.empty.x - 1]); break;
      default: freeChips.push(this.chips[this.empty.y][this.empty.x - 1], this.chips[this.empty.y][this.empty.x + 1]); break;
    }

    switch (this.empty.y) {
      case 0: freeChips.push(this.chips[this.empty.y + 1][this.empty.x]); break;
      case (this.dimension - 1): freeChips.push(this.chips[this.empty.y - 1][this.empty.x]); break;
      default: freeChips.push(this.chips[this.empty.y - 1][this.empty.x], this.chips[this.empty.y + 1][this.empty.x]); break;
    }

    return freeChips;
  }

  _move(chip) {
    const chipName = chip.getAttribute('data-cell');
    let currentChip = {};

    this.chips.flat().forEach((item) => {
      if (item.cell === parseInt(chipName)) {
        currentChip.x = item.x;
        currentChip.y = item.y;
        currentChip.cell = item.cell;
      }
    });

    const closest = this._getFreeChips();

    for (let item of closest) {

      if (item.cell === currentChip.cell) {
        //*animation
        let moveDirection = '';
        if (currentChip.x === this.empty.x) {
          if (currentChip.y > this.empty.y) {
            moveDirection = 'top';
          } else {
            moveDirection = 'bottom';
          }
        } else {
          if (currentChip.x > this.empty.x) {
            moveDirection = 'left';
          } else {
            moveDirection = 'right';
          }
        }

        const animation = (elem, direction) => {
          elem.classList.add(`move-${direction}`);
          elem.addEventListener('animationend', () => {
            elem.classList.remove(`move-${direction}`);
          });
        }
        animation(chip, moveDirection);


        //*change position in array
        let temp = { x: this.empty.x, y: this.empty.y, cell: currentChip.cell };

        this.chips[this.empty.y][this.empty.x].cell = currentChip.cell;

        this.chips[currentChip.y][currentChip.x].cell = 'empty';

        this.empty = this.chips[currentChip.y][currentChip.x];
        currentChip = this.chips[temp.y][temp.x];

        chip.style.gridRowStart = currentChip.y + 1;
        chip.style.gridColumnStart = currentChip.x + 1;

        // const emptyHTMLelement = document.querySelector('.chip--empty');
        // emptyHTMLelement.classList.remove('chip--empty');
        // emptyHTMLelement.setAttribute('draggable', 'true');
        // emptyHTMLelement.setAttribute('data-cell', `${currentChip.cell}`);
        // emptyHTMLelement.textContent = currentChip.cell;


        // chip.classList.add('chip--empty');
        // chip.setAttribute('draggable', 'false');
        // chip.textContent = '';

        this._sounds(chip);

        this.moves += 1;
        this.statMovesValue.textContent = this.moves;

        if (this.playing && intervalId === undefined) {
          this._timer();
        }
      }
    }
  }


  _shuffle(iteration) {
    for (let i = 0; i < iteration; i++) {
      const closest = this._getFreeChips();
      const randIndex = Math.round(Math.random() * (closest.length - 1));
      const chip = closest[randIndex];
      const cell = document.querySelector(`[data-cell = '${chip.cell}']`);

      this.playing = false;
      this._timer();
      this._move(cell);

      this.moves = 0;
      this.statMovesValue.textContent = this.moves;

      this.time = 0;
      this.statTimeValue.textContent = this.time;
    }
  }

  _reNew(array) {
    this.box.innerHTML = '';

    console.log(this.playing, intervalId);
    const fragment = document.createDocumentFragment();

    let sortArray = array.flat().sort((prev, next) => parseInt(prev.cell) - parseInt(next.cell));

    for (let i = 0; i < sortArray.length; i++) {
        const elem = document.createElement('div');
        elem.classList.add('chip');
        elem.classList.add('playing');
        elem.setAttribute('draggable', 'true');

        elem.style.gridRowStart = sortArray[i].y + 1;
        elem.style.gridColumnStart = sortArray[i].x + 1;
        elem.setAttribute('data-cell', sortArray[i].cell);
        elem.textContent = sortArray[i].cell;

        if (sortArray[i].cell === 'empty') {
          this.empty = sortArray[i];
          //console.log(this.empty);
          elem.classList.add('chip--empty');
          elem.classList.remove('playing');
          elem.setAttribute('draggable', 'false');
          elem.textContent = '';

          elem.addEventListener('dragover', (event) => {
            event.preventDefault();
          });
        }

        fragment.append(elem);

        if (array.length === 3) {
          elem.style.width = '5rem';
          elem.style.height = '5rem';
        }
      }

    return fragment;
  }

  _timer() {
    const tick = () => {
      this.time += 1;
      this.statTimeValue.textContent = this._timeConvert(this.time);
    };

    if (this.playing) {
      intervalId = setInterval(tick, 1000);
    } else {
      clearInterval(intervalId);
      intervalId = undefined;
    }
  }

  _timeConvert(time) {
    let min = Math.floor(time / 60);
    let sec = time % 60;
    return `${min} m ${sec} s`;
  }

  _changeField(btn) {
    const newDimension = btn.getAttribute('data-field');
    this.dimension = parseInt(newDimension);

    this.body.innerHTML = '';
    this._clear();
    this.init();
  }

  _sounds(chip) {
    const audio = document.querySelector('audio');
    //const chip = document.querySelector(`[data-code='${keyCode}']`);

    if (!audio) return;
    if (!this.sound) return;

    chip.classList.add('playing');

    audio.currentTime = 0;
    audio.play();

    chip.addEventListener('transitionend', () => {
      this._removeTransition();
    });
  }

  _removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
  }

  _saveGame() {
    localStorage.setItem('saveGame', JSON.stringify(this.chips));
    localStorage.setItem('time', this.time);
    localStorage.setItem('moves', this.moves);
    localStorage.setItem('dimension', this.dimension);
    //console.log(localStorage.saveGame);
  }

  _restoreGame() {
    this.chips = JSON.parse(localStorage.getItem('saveGame'));
    this.time = parseInt(localStorage.getItem('time'));
    this.moves = parseInt(localStorage.getItem('moves'));
    this.dimension = localStorage.getItem('dimension');
    this.playing = false;
    this._timer();

    this.statMovesValue.textContent = this.moves;
    this.statTimeValue.textContent = this._timeConvert(this.time);
    console.log(intervalId, this.playing);

    const currentFooterBtn = document.querySelector('.footer__btn--active');
    const restoreFooterBtn = document.querySelector(`[data-field="${this.dimension}"]`);
    currentFooterBtn.classList.remove('footer__btn--active');
    restoreFooterBtn.classList.add('footer__btn--active');

    this.box.append(this._reNew(this.chips));

    const container = document.querySelector('.container');
    //TODO слушатели дублируются из инит. Как то поправить?
    container.querySelectorAll('.chip').forEach(elem => {
      elem.addEventListener('click', () => {
        this.playing = true;
        this._move(elem);
      });

      elem.addEventListener('dragstart', (event) => {
        //event.target.classList.add('selected');
      });

      elem.addEventListener('dragend', (event) => {
        //event.target.classList.remove('selected');
        this.playing = true;
        this._move(elem);
      });
    });
  }
}

const box = new Box(FIELD_DIMENSION);

window.addEventListener('DOMContentLoaded', function () {
  box.init();
});

import { getBgPathes } from './images';

import './scss/style.scss';

const FIELD_DIMENSION = 4;
let intervalId;

class Box {
  constructor(dimension) {
    this.dimension = dimension;
    this.chips = [];
    this.completed = [];
    this.empty = null;
    this.time = 0;
    this.moves = 0;
    this.isShuffle = false;
    this.isPicture = true;
    this.bgImageURL = null;
    this.result = {};
    this.bestScore = {
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
    };
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
    this.audio.setAttribute('src', 'sound_move.mp3');
    this.audio.setAttribute('data-audio', 'keys');

    this.header = document.createElement('div');
    this.header.classList.add('header');

    this.title = document.createElement('div');
    this.title.classList.add('header__title');
    this.title.textContent = 'Gem-Puzzle';

    this.menu = document.createElement('nav');
    this.menu.classList.add('menu');

    this.menuShuffle = document.createElement('button');
    this.menuShuffle.classList.add('menu__main__btn');
    this.menuShuffle.classList.add('menu__main__btn--shuffle');
    this.menuShuffle.textContent = 'Shuffle';

    this.menuSound = document.createElement('button');
    this.menuSound.classList.add('menu__sound');
    !this.sound ? this.menuSound.classList.add('menu__sound--mute') : '';

    this.menuMain = document.createElement('div');
    this.menuMain.classList.add('menu__main');
    this.menuMainBtn = document.createElement('button');
    this.menuMainBtn.classList.add('menu__main__btn');
    this.menuMainBtn.classList.add('menu__main__btn--menu');
    this.menuMainBtn.textContent = 'Menu';

    this.menuMainContainer = document.createElement('div');
    this.menuMainContainer.classList.add('menu__main__container');
    this.menuMainContainer.classList.add('visually-hidden');
    this.menuMainSave = document.createElement('button');
    this.menuMainSave.classList.add('menu__main__item');
    this.menuMainSave.classList.add('menu__main__item--save');
    this.menuMainSave.textContent = 'Save Game';
    this.menuMainRestore = document.createElement('button');
    this.menuMainRestore.classList.add('menu__main__item');
    this.menuMainRestore.classList.add('menu__main__item--restore');
    this.menuMainRestore.textContent = 'Restore Game';
    this.menuMainBestScore = document.createElement('button');
    this.menuMainBestScore.classList.add('menu__main__item');
    this.menuMainBestScore.classList.add('menu__main__item--BestScore');
    this.menuMainBestScore.textContent = 'Best Score';
    this.menuMainPicture = document.createElement('button');
    this.menuMainPicture.classList.add('menu__main__item');
    this.menuMainPicture.classList.add('menu__main__item--picture');
    this.menuMainPicture.textContent = 'Set Image';
    this.menuMainScore = document.createElement('div');
    this.menuMainScore.classList.add('menu__main__score');
    this.menuMainScore.classList.add('visually-hidden');
    this.menuMainScoreTitle = document.createElement('div');
    this.menuMainScoreTitle.classList.add('menu__main__score__title');
    this.menuMainScoreTitle.textContent = `Best Score for ${this.dimension}×${this.dimension}`;
    this.menuMainScoreClose = document.createElement('button');
    this.menuMainScoreClose.classList.add('menu__main__score__close');

    this.menuMainScoreTable = document.createElement('div');
    this.menuMainScoreTable.classList.add('menu__main__score__table');

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

    this.bgImageURL = this._setPicture();

    this.footer = document.createElement('div');
    this.footer.classList.add('footer');

    this.popup = document.createElement('div');
    this.popup.classList.add('popup');
    this.popup.classList.add('popup--hide');
    this.popupText = document.createElement('div');
    this.popupText.classList.add('popup__text');
    this.popupText.textContent = 'Congratulations! You\u00A0won!';
    this.popupAuthor = document.createElement('div');
    this.popupAuthor.classList.add('popup__author');
    this.popupAuthor.textContent = 'Painting by Vasya Lozhkin';
    this.popupLinkAuthor = document.createElement('a');
    this.popupLinkAuthor.classList.add('popup__author--link');
    this.popupLinkAuthor.setAttribute('href', 'http://vasya-lozhkin.ru/');
    this.popupLinkAuthor.textContent = 'vasya-lozhkin.ru';
    this.popupTime = document.createElement('div');
    this.popupTime.classList.add('popup__time');
    this.popupMoves = document.createElement('div');
    this.popupMoves.classList.add('popup__moves');
    this.popupClose = document.createElement('button');
    this.popupClose.classList.add('popup__btn');
    this.popupClose.textContent = 'Close';


    for (let i = 0; i < 6; i++) {
      this.footerBtn = document.createElement('button');
      this.footerBtn.classList.add('footer__btn');
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
    this.container.append(this.menu);
    this.menu.append(this.menuShuffle);
    this.menu.append(this.menuSound);
    this.menu.append(this.menuMain);
    this.menuMain.append(this.menuMainBtn);
    this.menuMain.append(this.menuMainContainer);
    this.menuMain.append(this.menuMainScore);
    this.menuMainScore.append(this.menuMainScoreTitle);
    this.menuMainScore.append(this.menuMainScoreClose);
    this.menuMainScore.append(this.menuMainScoreTable);
    this.menuMainContainer.append(this.menuMainSave);
    this.menuMainContainer.append(this.menuMainRestore);
    this.menuMainContainer.append(this.menuMainBestScore);
    this.menuMainContainer.append(this.menuMainPicture);
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
    this.container.append(this.popup);
    this.popup.append(this.popupText);
    if (this.isPicture) {
      this.popup.append(this.popupAuthor);
      this.popup.append(this.popupLinkAuthor);
    }
    this.popup.append(this.popupTime);
    this.popup.append(this.popupMoves);
    this.popup.append(this.popupClose);
    this.body.append(this.audio);


    document.querySelectorAll('button').forEach(button => {
      button.setAttribute('type', 'button');
    });

    this.container.querySelectorAll('.chip').forEach(elem => {
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

    this.menuSound.addEventListener('click', () => {
      this.sound = !this.sound;
      this.sound
        ? this.menuSound.classList.remove('menu__sound--mute')
        : this.menuSound.classList.add('menu__sound--mute');
    console.log('dim: ', this.dimension, 'isShuffle: ', this.isShuffle, 'time&moves: ', this.time, this.moves, 'res: ', this.result, 'bestScore: ', this.bestScore, 'playing: ', this.playing);

    });

    this.menuShuffle.addEventListener('click', () => {
      this.time = 0;
      this.playing = false;
      this.statTimeValue.textContent = this.time;

      this._shuffle(5);
    });

    this.menuMainBtn.addEventListener('click', () => {
      this.menuMainBtn.classList.toggle('menu__main__btn--active');
      this.menuMainContainer.classList.toggle('visually-hidden');
    });

    this.menuMain.addEventListener('focusout', (event) => {
      if (event.target.closest('.menu__main__container')) {
        this.menuMainBtn.classList.remove('menu__main__btn--active');
        this.menuMainContainer.classList.add('visually-hidden');
      }
    });

    document.addEventListener('click', (event) => {
      if (!event.target.closest('.menu__main')) {
        this.menuMainBtn.classList.remove('menu__main__btn--active');
        this.menuMainContainer.classList.add('visually-hidden');
      }
    });

    this.menuMainSave.addEventListener('click', () => {
      this._saveGame();
    });

    this.menuMainRestore.addEventListener('click', () => {
      this._restoreGame();
    });

    this.menuMainBestScore.addEventListener('click', () => {
      this.menuMainScore.classList.remove('visually-hidden');
      this.menuMainScoreTable.innerHTML = '';
      this.menuMainScoreTable.append(this._scoreTableGen());
    });

    this.menuMainPicture.addEventListener('click', () => {
      this.isPicture = !this.isPicture;
      this.body.innerHTML = '';
      this._clear();
      this.init();
      this._reDrow();
      this.menuMainContainer.classList.add('visually-hidden');
    });

    this.menuMainScoreClose.addEventListener('click', () => {
      this.menuMainScore.classList.add('visually-hidden');
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

        //console.log(elem.style);

        elem.style.gridRowStart = i + 1;
        elem.style.gridColumnStart = j + 1;

        if (this.isPicture) {
          this._setPicture();
          const step = 100 / (quantity - 1);
          const bgPositionX = j * step;
          const bgPositionY = i * step;
          const chipSizeRem = getComputedStyle(this.body).getPropertyValue('--chip-size');
          const remStr = getComputedStyle(this.body).getPropertyValue('font-size');

          const chipSize = this._stringToNumber(chipSizeRem, 3);
          const fontSize = this._stringToNumber(remStr, 2);

          elem.style.backgroundImage = this.bgImageURL || 'none';
          elem.style.backgroundSize = `${chipSize * quantity}rem`;
          elem.style.backgroundPosition = `left ${bgPositionX}% top ${bgPositionY}%`;
        }

        fragment.append(elem);

        if (i * this.dimension + j + 1 !== this.dimension ** 2) {
          let number = i * this.dimension + j + 1;
          elem.setAttribute('data-cell', number);
          elem.textContent = number;

          row.push({ x: j, y: i, 'cell': number });

        } else {
          elem.classList.add('chip--empty');
          elem.setAttribute('draggable', 'false');

          elem.addEventListener('dragover', (event) => {
            event.preventDefault();
          });

          row.push(this.empty);
        }
      }

      this.chips.push(row);
    }
    this.completed = this.chips.slice();

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

        (this.isShuffle) ? this.moves += 1 : '';
        this.statMovesValue.textContent = this.moves;

        if (this.playing && intervalId === undefined && this.isShuffle) {
          this._timer();
        }
        (this.isShuffle && this.playing) ? this._isComplete() : '';
      }
    }
  }

  _shuffle(iteration) {
    this.isShuffle = true;

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

  _isComplete() {
    let count = 0;
    const length = this.chips.flat().length;

    for (let i = 0; i < length - 1; i++) {
      if (this.chips.flat()[i].cell === i + 1) {
        count++;
      }
    }

    if (count === length - 1 && this.playing) {
      const data = new Date();

      const minutes = (data.getMinutes() > 9) ? data.getMinutes() : `0${data.getMinutes()}`;
      const seconds = (data.getSeconds() > 9) ? data.getSeconds() : `0${data.getSeconds()}`;

      this.result.data = `${data.getDate()}.${data.getMonth() + 1}.${data.getFullYear() - 2000}, ${data.getHours()}:${minutes}:${seconds}`;

      this.result.time = this.time;
      this.result.moves = this.moves;

      this.playing = false;
      this.isShuffle = false;
      this._timer();
      this._scoreSet();

      this.popup.classList.remove('popup--hide');
      this.popupTime.textContent = `Your time: ${this._timeConvert(this.result.time)}`;
      this.popupMoves.textContent = `Your moves: ${this.result.moves}`;
    }

    this.popupClose.addEventListener('click', () => {
      this.popup.classList.add('popup--hide');
    });
  }

  _reNew(array) {
    this.box.innerHTML = '';

    const fragment = document.createDocumentFragment();

    let sortArray = array.flat().sort((prev, next) => parseInt(prev.cell) - parseInt(next.cell));
    const length = sortArray.length;

    for (let i = 0; i < length; i++) {
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
          elem.classList.add('chip--empty');
          elem.classList.remove('playing');
          elem.setAttribute('draggable', 'false');
          elem.textContent = '';

          elem.addEventListener('dragover', (event) => {
            event.preventDefault();
          });
        }

        fragment.append(elem);
      }
    this.isShuffle = false;
    this._reDrow();
    return fragment;
  }

  _reDrow() {
    if (this.isPicture) {
      this.body.style.setProperty('--chip-color', 'transparent');
      this.body.style.setProperty('--chip-text-stroke-color', 'rgb(92, 91, 91)');
    } else {
      this.body.style.setProperty('--chip-color', 'black');
      this.body.style.setProperty('--chip-text-stroke-color', 'none');
    }

    switch (this.dimension) {
      case 3:
        const chipSize = 5;
        this.body.style.setProperty('--title-font-size', '2rem');
        this.body.style.setProperty('--nav-btn-width', '5.25rem');
        this.body.style.setProperty('--score-width', '17rem');
        this.body.style.setProperty('--nav-btn-font-size', '1rem');
        this.body.style.setProperty('--stat-font-size', '1rem');
        this.body.style.setProperty('--chip-size', `${chipSize}rem`);
        this.body.style.setProperty('--chip-font-size', '2.5rem');
        this.body.style.setProperty('--popup-font-size', '1rem');
        break;

      case 5:
      case 6:
        this.body.style.setProperty('--title-font-size', '3rem');
        this.body.style.setProperty('--nav-btn-width', '7.25rem');
        this.body.style.setProperty('--score-width', '20rem');
        this.body.style.setProperty('--nav-btn-font-size', '1.4rem');
        this.body.style.setProperty('--stat-font-size', '1.2rem');
        this.body.style.setProperty('--chip-size', '3.75rem');
        this.body.style.setProperty('--chip-font-size', '2.5rem');
        this.body.style.setProperty('--popup-font-size', '1.2rem');
        break;

      case 7:
      case 8:
        this.body.style.setProperty('--title-font-size', '3rem');
        this.body.style.setProperty('--nav-btn-width', '8.5rem');
        this.body.style.setProperty('--score-width', '20rem');
        this.body.style.setProperty('--nav-btn-font-size', '1.4rem');
        this.body.style.setProperty('--stat-font-size', '1.2rem');
        this.body.style.setProperty('--chip-size', '3rem');
        this.body.style.setProperty('--chip-font-size', '2rem');
        this.body.style.setProperty('--popup-font-size', '1.5rem');
        break;

      default:
        this.body.style.setProperty('--title-font-size', '2rem');
        this.body.style.setProperty('--nav-btn-width', '5.25rem');
        this.body.style.setProperty('--score-width', '17rem');
        this.body.style.setProperty('--nav-btn-font-size', '1rem');
        this.body.style.setProperty('--stat-font-size', '1rem');
        this.body.style.setProperty('--chip-size', '3.75rem');
        this.body.style.setProperty('--chip-font-size', '2.5rem');
        this.body.style.setProperty('--popup-font-size', '1rem');
    }
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
    this._reDrow();
  }

  _sounds(chip) {
    const audio = document.querySelector('audio');

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

  _scoreSet() {
    if (!this.result.time) return;

    if (localStorage.getItem('bestScore') !== null) {
      this.bestScore = JSON.parse(localStorage.getItem('bestScore'));
    }

    const length = this.bestScore[this.dimension].length;

    if (length === 0) {
      this.bestScore[this.dimension].push(this.result);
      localStorage.setItem('bestScore', JSON.stringify(this.bestScore));
    } else {

      this.bestScore[this.dimension].push(this.result);
      this.bestScore[this.dimension].sort((prev, last) => prev.time - last.time)

      if (length > 10) {
        this.bestScore[this.dimension].splice(-1, 1);
      }
      console.log(111);

      localStorage.setItem('bestScore', JSON.stringify(this.bestScore));
    }
  }

  _scoreTableGen() {
    if (localStorage.getItem('bestScore') !== null) {
      this.bestScore = JSON.parse(localStorage.getItem('bestScore'));
    }

    const length = this.bestScore[this.dimension].length;

    if (length === 0 || localStorage.getItem('bestScore') === null) {
      this.menuMainScoreTitle.textContent = `There is no Best Score for ${this.dimension}×${this.dimension}`;
      return '';
    }

    const fragment = document.createDocumentFragment();

    for (let i = 0; i < length + 1; i++) {
      let row = [];

      for (let j = 0; j < 4; j++) {
        const elem = document.createElement('div');

        if (i === 0) {
          const arrTitles = ['#', 'Data', 'Time', 'Moves',];
          elem.classList.add('menu__main__score__table--head');
          elem.textContent = arrTitles[j];
        } else {
          elem.classList.add('menu__main__score__table--cell');

          switch (j) {
            case 0: elem.textContent = i; break;
            case 1: elem.textContent = this.bestScore[this.dimension][i - 1].data; break;
            case 2: elem.textContent = this._timeConvert(this.bestScore[this.dimension][i - 1].time); break;
            default: elem.textContent = this.bestScore[this.dimension][i - 1].moves; break;
          }
        }

        elem.style.gridRowStart = i + 1;
        elem.style.gridColumnStart = j + 1;

        fragment.append(elem);
      }
    }

    return fragment;
  }

  _setPicture() {
    const bgImages = getBgPathes('img/');
    const randomImg = Math.round(Math.random() * 9);
    const randomURL = `url("${bgImages[randomImg]}.jpg")`;
    console.log(randomURL);
    this._reNew(this.chips);
    // console.log(this.chips.flat());

    // this.chips.flat().forEach((elem) => {
    //   console.log(elem);
    //   const step = 100 / (this.dimension - 1);
    //   const bgPositionX = elem.x * step;
    //   const bgPositionY = elem.y * step;
    //   const chipSizeRem = getComputedStyle(this.body).getPropertyValue('--chip-size');
    //   const remStr = getComputedStyle(this.body).getPropertyValue('font-size');
    //   const chips = document.querySelectorAll('.chip');
    //   chips.forEach((cell) => {
    //     if (!cell.classList.contains('chip--empty')) {
    //       console.log(cell);//(`[data-code='${keyCode}']`)

    //     }
    //   })

    //   const chipSize = this._stringToNumber(chipSizeRem, 3);
    //   const fontSize = this._stringToNumber(remStr, 2);

    //   elem.style.backgroundImage = this.bgImageURL || 'none';
    //   elem.style.backgroundSize = `${chipSize * this.dimension}rem`;
    //   elem.style.backgroundPosition = `left ${bgPositionX}% top ${bgPositionY}%`;
   // })


    return randomURL;
  }

  _stringToNumber(str, lengthForDel) {
    const temp = str.split('');
    temp.length = str.length - lengthForDel;
    return parseFloat(temp.join(''));
  }
}

const box = new Box(FIELD_DIMENSION);

window.addEventListener('DOMContentLoaded', function () {
  box.init();
});

const FIELD_DIMENSION = 4;

class Box {
  constructor(dimension) {
    this.dimension = dimension;
    this.chips = [];
    this.empty = null;
    this.time = 0;
    this.moves = 0;
    this.playing = false;
    this.clear();
  }

  clear() {
    //! здесь будет функция очистки поля???
  }

  init() {
    this.container = document.querySelector('.container');
    //this.chipEmpty = document.querySelector('.chip--empty');

    this.header = document.createElement('div');
    this.header.classList.add('header');

    this.title = document.createElement('div');
    this.title.classList.add('header__title');
    this.title.textContent = 'Gem-Puzzle';

    this.shuffle = document.createElement('button');
    this.shuffle.classList.add('header__shuffle');
    this.shuffle.setAttribute('type', 'button');
    this.shuffle.textContent = 'Shuffle';

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

    this.empty = {
      x: this.dimension - 1,
      y: this.dimension - 1,
      cell: 'empty',
    };

    this.container.append(this.header);
    this.header.append(this.title);
    this.header.append(this.shuffle);
    this.container.append(this.statistic);
    this.statistic.append(this.statTime);
    this.statTime.append(this.statTimeTitle);
    this.statTime.append(this.statTimeValue);
    this.statistic.append(this.statMoves);
    this.statMoves.append(this.statMovesTitle);
    this.statMoves.append(this.statMovesValue);
    this.container.append(this.box);
    this.box.append(this._createChips(this.dimension));

    this.container.querySelectorAll('.chip').forEach(elem => {
      elem.addEventListener('click', () => {
        this.playing = true;
        this._move(elem);
      });

      elem.addEventListener('dragstart', (event) => {
        event.target.classList.add('selected');
      });

      elem.addEventListener('dragend', (event) => {
        event.target.classList.remove('selected');
        this.playing = true;

        this._move(elem);
      });
    });

    this.shuffle.addEventListener('click', () => {
      this.playing = false;
      this.time = 0;
      this.statTimeValue.textContent = this.time;

      this._shuffle(50);

      //console.log(this.empty);
      //console.log(this.chips);;
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

        if (i * 4 + j + 1 !== 16) {
          let number = i * 4 + j + 1;
          elem.setAttribute('data-cell', number);
          elem.textContent = number;

          row.push({ x: j, y: i, 'cell': number });
        } else {
          elem.classList.add('chip--empty');
          elem.setAttribute('draggable', 'false');

          elem.addEventListener('dragover', (event) => {
            console.log(event.target);
            event.preventDefault();
          });

          row.push(this.empty);
        }
      }

      this.chips.push(row);
    }

    this.chipEmpty
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

    console.log(freeChips);

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
        let temp = {x: this.empty.x, y: this.empty.y, cell: currentChip.cell};

        this.chips[this.empty.y][this.empty.x].cell = currentChip.cell;

        //console.log(currentChip.y, currentChip.x);

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

        this.moves += 1;
        this.statMovesValue.textContent = this.moves;

        if (this.time === 0 && this.playing) {
          this._timer();
        }
      }
        //console.log(this.chips);
    }
  }


  //*drag&drop




  // const dragEnter = (event) => {
  //   event.preventDefault();
  //   return true; //?
  // }

  // const dragOver = (event) => {
  //   event.preventDefault();
  // }

  // const dragDrop = (event) => {
  //   //const data = event.dataTransfer.getData('Text');
  //   //event.target.appendChild(document.querySelector(data));
  //   event.stopPropagation();
  //   return false;
  // }

  // this.empty.addEventListener('dragenter', dragEnter);
  // this.empty.addEventListener('drop', dragDrop);
  // this.empty.addEventListener('dragover', dragOver);

  // chip.addEventListener('dragstart', dragStart);
  // chip.addEventListener('dragend', dragEnter);



  _shuffle(iteration) {
    for (let i = 0; i < iteration; i++) {
      const closest = this._getFreeChips();
      const randIndex = Math.round(Math.random() * (closest.length - 1));
      const chip = closest[randIndex];
      const cell = document.querySelector(`[data-cell = '${chip.cell}']`);

      //console.log(cell);
      //console.log(chip);
      this._move(cell);

      this.moves = 0;
      this.statMovesValue.textContent = this.moves;

      this.time = 0;
      this.statTimeValue.textContent = this.time;
    }
  }

  _timer() {
    const tick = () => {
      this.time += 1;
      this.statTimeValue.textContent = this.time;
    };
    setInterval(tick, 1000);
  }
}

const box = new Box(FIELD_DIMENSION);

window.addEventListener('DOMContentLoaded', function () {
  box.init();
});

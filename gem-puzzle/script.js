const FIELD_DIMENSION = 4;

class Box {
  constructor(dimension) {
    this.dimension = dimension;
    this.chips = [];
    this.empty = null,
    this.clear();
  }

  clear() {
    //! здесь будет функция очистки поля???
  }

  init() {
    this.container = document.querySelector('.container');

    this.header = document.createElement('div');
    this.header.classList.add('header');

    this.title = document.createElement('div');
    this.title.classList.add('header__title');
    this.title.textContent = 'Gem-Puzzle';

    this.shuffle = document.createElement('button');
    this.shuffle.classList.add('header__shuffle');
    this.shuffle.setAttribute('type', 'button');
    this.shuffle.textContent = 'Shuffle';

    this.box = document.createElement('div');
    this.box.classList.add('box');

    this.empty = {
      x: this.dimension - 1,
      y: this.dimension - 1,
      cell: 'empty',
    };

    this.container.append(this.header);
    this.header.append(this.title);
    this.header.append(this.shuffle);
    this.container.append(this.box);
    this.box.append(this._createChips(this.dimension));

    this.container.querySelectorAll('.chip').forEach(elem => {
      elem.addEventListener('click', () => {
        this._move(elem);
      });
    });

    this.shuffle.addEventListener('click', () => {
      this._shuffle(50);
      console.log(this.empty);
      console.log(this.chips);;
    })
  }

  _createChips(quantity) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < quantity; i++) {
      let row = [];

      for (let j = 0; j < quantity; j++) {
        const elem = document.createElement('div');
        elem.classList.add('chip');

        elem.style.gridRowStart = i + 1;
        //elem.style.gridRowEnd = i + 2;
        elem.style.gridColumnStart = j + 1;
        //elem.style.gridColumnEnd = j + 2;

        fragment.append(elem);

        if (i * 4 + j + 1 !== 16) {
          let number = i * 4 + j + 1;
          elem.setAttribute('data-cell', number);
          elem.textContent = number;

          row.push({ x: j, y: i, 'cell': number });
        } else {
          elem.classList.add('chip--empty');
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
        let temp = {x: this.empty.x, y: this.empty.y, cell: currentChip.cell};

        this.chips[this.empty.y][this.empty.x].cell = currentChip.cell;

        console.log(currentChip.y, currentChip.x);
        this.chips[currentChip.y][currentChip.x].cell = 'empty';

        this.empty = this.chips[currentChip.y][currentChip.x];
        currentChip = this.chips[temp.y][temp.x];

        chip.style.gridRowStart = currentChip.y + 1;
        chip.style.gridColumnStart = currentChip.x + 1;

        //console.log(this.chips);
      }
    }
  }

  _shuffle(iteration) {
    for (let i = 0; i < iteration; i++) {
      const closest = this._getFreeChips();
      const randIndex = Math.round(Math.random() * (closest.length - 1));
      const chip = closest[randIndex];
      const cell = document.querySelector(`[data-cell = '${chip.cell}']`);

      //console.log(cell);
      //console.log(chip);
      this._move(cell);
    }
  }


}

const box = new Box(FIELD_DIMENSION);

window.addEventListener('DOMContentLoaded', function () {
  box.init();
});

class Statistic {
  constructor(data) {
    this.data = data;
    this.stat = [];
  }

  create() {
    // eslint-disable-next-line no-prototype-builtins
    if (localStorage.hasOwnProperty('statistic')) {
      return;
    }

    this.wordsArr = [];

    this.data.forEach((categoryObj) => {
      this.wordsArr.push(categoryObj.categoryData);
    });

    this.wordsArr.flat().forEach((word) => {
      this.word = {};
      this.word.id = word.id;
      this.word.word = word.word;
      this.word.translation = word.translation;
      this.word.categoryId = word.categoryId;
      this.word.trainValue = 0;
      this.word.playValue = 0;
      this.word.mistakesValue = 0;
      this.word.proportion = 0;

      this.stat.push(this.word);
    });

    this.save(this.stat);
  }

  setStat(wordsArr, mode) {
    if (typeof wordsArr !== 'object') {
      return;
    }

    this.stat = JSON.parse(localStorage.getItem('statistic'));
    this.wordsNames = Object.keys(wordsArr);

    this.wordsNames.forEach((word) => {
      const findWord = this.stat.find((wordObj) => wordObj.id === word);

      if (mode === 'train') {
        findWord.trainValue += 1;
      } else {
        findWord.playValue += wordsArr[word].playValue;
        findWord.mistakesValue += wordsArr[word].mistakesValue;
        findWord.proportion = `${(findWord.playValue / (findWord.playValue + findWord.mistakesValue)) * 100}%`;
      }
    });
    this.save(this.stat);
  }

  getStat() {
    this.stat = JSON.parse(localStorage.getItem('statistic'));
  }

  // eslint-disable-next-line class-methods-use-this
  removeStat() {
    localStorage.removeItem('statistic');
  }

  save(data) {
    this.toJson = JSON.stringify(data);
    localStorage.setItem('statistic', this.toJson);
  }
}

export default Statistic;

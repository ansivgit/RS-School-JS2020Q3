import CONSTANTS from '../constants';
import randomGenerate from '../view/randomGenerate';
import gameEnd from './gameEnd';
import rating from '../view/rating';
import Statistic from '../models/statistic';

function gaming(categoryObj, onEnd) {
  const cards = document.querySelector(`.${CONSTANTS.cardsContainer}`);
  const playBtn = document.querySelector(`.${CONSTANTS.playBtn}`);
  const categoryName = categoryObj.categoryId;
  const words = categoryObj.categoryData;
  const wordsNames = [];
  const soundsArr = [];
  let currentWord = {};
  let countWin = 0;
  let mistakes = 0;
  const statWords = {};

  playBtn.textContent = 'Repeat';
  playBtn.classList.add(CONSTANTS.playBtnRepeat);

  words.forEach((word) => {
    wordsNames.push(word.id);
    soundsArr.push({ id: word.id, audioSrc: word.audioSrc });
  });

  wordsNames.forEach((word) => {
    statWords[word] = { playValue: 0, mistakesValue: 0 };
  });

  const suffleArr = randomGenerate(soundsArr);
  // eslint-disable-next-line prefer-destructuring
  currentWord = suffleArr[countWin];

  let audio = new Audio(`./sounds/${categoryName}/${currentWord.audioSrc}`);

  audio.play();

  playBtn.addEventListener('click', () => {
    audio.play();
  });

  const handler = (event) => {
    const cardWord = event.target.closest(`.${CONSTANTS.cardWord}`);
    const audioIsTrue = new Audio('./sounds/isTrue.mp3');
    const audioIsFalse = new Audio('./sounds/isFalse.mp3');

    if (cardWord) {
      const activeCard = cardWord.getAttribute(CONSTANTS.dataWord);
      const currentWordStat = statWords[currentWord.id];
      let result;

      if (activeCard === currentWord.id) {
        audioIsTrue.play();
        cardWord.classList.add(CONSTANTS.cardUnactive);
        rating(true);
        countWin += 1;
        currentWordStat.playValue += 1;

        if (countWin < suffleArr.length) {
          currentWord = suffleArr[countWin];

          audio = new Audio(`./sounds/${categoryName}/${currentWord.audioSrc}`);
          setTimeout(() => audio.play(), 1500);
        } else {
          const statistic = new Statistic();
          statistic.setStat(statWords, 'play');

          result = (mistakes === 0) ? 'win' : 'lose';
          gameEnd(result, mistakes, onEnd);
        }
      } else {
        mistakes += 1;
        audioIsFalse.play();
        rating(false);
        currentWordStat.mistakesValue += 1;
      }
    }
  };
  cards.addEventListener('click', (event) => handler(event));
}

export default gaming;

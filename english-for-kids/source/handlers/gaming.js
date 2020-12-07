import CONSTANTS from '../constants';
import randomGenerate from '../view/randomGenerate';
import gameEnd from './gameEnd';
import rating from '../view/rating';

function gaming(categoryObj, onEnd) {
  const cards = document.querySelector(`.${CONSTANTS.cardsContainer}`);
  const playBtn = document.querySelector(`.${CONSTANTS.playBtn}`);
  const categoryName = categoryObj.categoryId;
  const words = categoryObj.categoryData;
  const soundsArr = [];
  let currentWord = {};
  let countWin = 0;
  let mistakes = 0;

  playBtn.textContent = 'Repeat';
  playBtn.classList.add(CONSTANTS.playBtnRepeat);

  words.forEach((word) => {
    soundsArr.push({ id: word.id, audioSrc: word.audioSrc });
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
      let result;

      if (activeCard === currentWord.id) {
        audioIsTrue.play();
        cardWord.classList.add(CONSTANTS.cardUnactive);
        rating(true);
        countWin += 1;

        if (countWin < suffleArr.length) {
          currentWord = suffleArr[countWin];

          audio = new Audio(`./sounds/${categoryName}/${currentWord.audioSrc}`);
          setTimeout(() => audio.play(), 1500);
        } else {
          result = (mistakes === 0) ? 'win' : 'lose';
          gameEnd(result, mistakes, onEnd);
        }
      } else {
        mistakes += 1;
        audioIsFalse.play();
        rating(false);
      }

      // audio.currentTime = 0;
      // audio.play();
    }
  };
  cards.addEventListener('click', (event) => handler(event));
}

export default gaming;

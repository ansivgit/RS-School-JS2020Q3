import CONSTANTS from '../constants';
import randomGenerate from '../view/randomGenerate';
import gameEnd from './gameEnd';
import rating from '../view/rating';

function gaming(categoryObj) {
  const cards = document.querySelector(`.${CONSTANTS.cardsContainer}`);
  const playBtn = document.querySelector(`.${CONSTANTS.playBtn}`);
  const categoryName = categoryObj.categoryId;
  const words = categoryObj.categoryData;
  const soundsArr = [];
  let currentWord = {};
  let count = 0;

  playBtn.textContent = 'Repeat';
  playBtn.classList.add(CONSTANTS.playBtnRepeat);

  words.forEach((word) => {
    soundsArr.push({ id: word.id, audioSrc: word.audioSrc });
  });

  const suffleArr = randomGenerate(soundsArr);
  // eslint-disable-next-line prefer-destructuring
  currentWord = suffleArr[count];

  let audio = new Audio(`./sounds/${categoryName}/${currentWord.audioSrc}`);

  // if (!audio) {
  //   // eslint-disable-next-line no-alert
  //   return alert('something went wrong :( try again!');
  // }

  audio.play();

  playBtn.addEventListener('click', () => {
    audio.play();
  });

  cards.addEventListener('click', (event) => {
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
        count += 1;

        if (count < suffleArr.length) {
          currentWord = suffleArr[count];

          audio = new Audio(`./sounds/${categoryName}/${currentWord.audioSrc}`);
          setTimeout(() => audio.play(), 2000);
        } else {
          result = (count === words.length) ? 'win' : 'lose';
          gameEnd(result);
        }
      } else {
        audioIsFalse.play();
        rating(false);
      }

      // audio.currentTime = 0;
      // audio.play();
    }
  });
}

export default gaming;

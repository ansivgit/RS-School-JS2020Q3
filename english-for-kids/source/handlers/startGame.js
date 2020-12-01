import CONSTANTS from '../constants';
import randomGenerate from '../creations/randomGenerate';

function startGame(categoryObj) {
  const playBtn = document.querySelector(`.${CONSTANTS.playBtn}`);
  const words = categoryObj['category-data'];
  const soundsArr = [];

  playBtn.textContent = 'Repeat';
  playBtn.classList.add(CONSTANTS.playBtnRepeat);

  words.forEach((word) => {
    soundsArr.push(word.audioSrc);
  });

  console.log(randomGenerate(soundsArr));

  playBtn.addEventListener('click', () => {
  });
}

export default startGame;

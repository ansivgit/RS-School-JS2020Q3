import CONSTANTS from '../constants';
import cardWordsCreate from '../creations/cardWordsCreate';

function toggleMode(categoryObj, isPlay) {
  const toggle = document.querySelector(`.${CONSTANTS.toggle}`);
  const playBtn = document.querySelector(`.${CONSTANTS.playBtn}`);

  if (isPlay) {
    toggle.classList.add('toggle--play');
    playBtn.classList.add(`${CONSTANTS.playBtnPlay}`);
  } else {
    toggle.classList.remove('toggle--play');
    playBtn.classList.remove(`${CONSTANTS.playBtnPlay}`);
  }

  playBtn.disabled = false;

  if (categoryObj === null) {
    playBtn.disabled = true;
    return playBtn;
  }

  const newCards = cardWordsCreate(categoryObj, isPlay);

  return newCards;
}

export default toggleMode;

import CONSTANTS from '../constants';
import renewApp from './renewApp';

function gameEnd(result, mistakes) {
  const cards = document.querySelector(`.${CONSTANTS.cardsContainer}`);
  const gameOver = document.querySelector(`.${CONSTANTS.gameOver}`);
  const image = gameOver.querySelector(`.${CONSTANTS.gameOverImg}`);
  const text = gameOver.querySelector(`.${CONSTANTS.gameOverText}`);
  const audioIsWin = new Audio('./sounds/ifWin.mp3');
  const audioIsLose = new Audio('./sounds/ifLose.mp3');

  cards.innerHTML = '';
  gameOver.classList.remove(CONSTANTS.visuallyHidden);

  if (result === 'win') {
    audioIsWin.play();

    image.style.backgroundImage = 'url(./img/icons/win.png)';
    text.textContent = 'Congratulations!';
  } else {
    audioIsLose.play();

    image.style.backgroundImage = 'url(./img/icons/lose.png)';
    text.textContent = `You made ${mistakes} mistakes. Try again!`;
  }

  setTimeout(() => {
    gameOver.classList.add(CONSTANTS.visuallyHidden);
    renewApp();
  }, 4000);
}

export default gameEnd;

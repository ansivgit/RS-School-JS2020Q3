import CONSTANTS, { TAGS } from '../constants';
import getCardWordTrain from '../templates/getCardWordTrain';
import getCardWordPlay from '../templates/getCardWordPlay';

function cardWordsCreate(categoryObj, isPlay) {
  const words = categoryObj.categoryData;
  const { categoryId, categoryName } = categoryObj;
  const title = document.querySelector(`.${CONSTANTS.titleCategory}`);
  const fragment = document.createDocumentFragment();

  title.textContent = categoryName;

  words.forEach((wordObj) => {
    const { id, word, image } = wordObj;

    const card = document.createElement(TAGS.li);

    card.className = CONSTANTS.card;
    card.classList.add(CONSTANTS.cardWord);
    card.setAttribute(CONSTANTS.dataWord, id);

    if (isPlay === false) {
      card.innerHTML = getCardWordTrain(categoryId, wordObj);

      const btnRotate = card.querySelector(`.${CONSTANTS.cardBtn}`);

      btnRotate.style.backgroundImage = 'url(./img/icons/rotate.png)';
    } else {
      card.innerHTML = getCardWordPlay();
    }

    const cardImages = card.querySelectorAll(`.${CONSTANTS.cardImage}`);

    cardImages.forEach((item) => {
      const currentImage = item;

      if (categoryName !== 'colors') {
        currentImage.style.backgroundImage = `url(./img/${categoryId}/${image})`;
      } else {
        currentImage.classList.add(`${CONSTANTS.cardImage}--color`);
        currentImage.style.backgroundColor = word;
      }
    });

    fragment.append(card);
  });

  return fragment;
}

export default cardWordsCreate;

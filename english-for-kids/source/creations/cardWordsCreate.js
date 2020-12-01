import CONSTANTS from '../constants';

function cardWordsCreate(categoryObj, isPlay) {
  const words = categoryObj['category-data'];
  const categoryName = categoryObj['category-name'];
  const title = document.querySelector(`.${CONSTANTS.titleCategory}`);
  const fragment = document.createDocumentFragment();

  title.textContent = categoryName;

  words.forEach((wordObj) => {
    const {
      id, word, translation, image, audioSrc,
    } = wordObj;

    const card = document.createElement('li');

    card.className = CONSTANTS.card;
    card.classList.add(CONSTANTS.cardWord);
    card.setAttribute(CONSTANTS.dataWord, id);

    if (isPlay === false) {
      card.innerHTML = `
        <div class="cards__item--front">
          <div class="cards__item__img"></div>
          <div class="cards__item__title">${word}</div>
          <button class="cards__item__btn" type="button"></button>
          <audio src="./sounds/${categoryName}/${audioSrc}" data-sound="${id}"></audio>
        </div>
        <div class="cards__item--back">
          <div class="cards__item__img"></div>
          <div class="cards__item__title">${translation}</div>
        </div>
      `;

      const btnRotate = card.querySelector(`.${CONSTANTS.cardBtn}`);
      btnRotate.style.backgroundImage = 'url(./img/icons/rotate.png)';
    } else {
      card.innerHTML = `
        <div class="cards__item--front">
          <div class="cards__item__img cards__item__img--play"></div>
        </div>
      `;
    }

    const cardImages = card.querySelectorAll(`.${CONSTANTS.cardImage}`);

    cardImages.forEach((item) => {
      const currentImage = item;

      if (categoryName !== 'colors') {
        currentImage.style.backgroundImage = `url(./img/${categoryName}/${image})`;
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

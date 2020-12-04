function getCardWordTrain(categoryId, wordObj) {
  // eslint-disable-next-line object-curly-newline
  const { id, word, translation, audioSrc } = wordObj;

  return `
          <div class="cards__item--front">
            <div class="cards__item__img"></div>
            <div class="cards__item__title">${word}</div>
            <button class="cards__item__btn" type="button"></button>
            <audio src="./sounds/${categoryId}/${audioSrc}" data-sound="${id}"></audio>
          </div>
          <div class="cards__item--back">
            <div class="cards__item__img"></div>
            <div class="cards__item__title">${translation}</div>
          </div>
        `;
}

export default getCardWordTrain;

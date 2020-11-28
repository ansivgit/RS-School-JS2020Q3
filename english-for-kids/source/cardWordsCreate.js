function cardWordsCreate(categoryObj) {
  const words = categoryObj['category-data'];
  const categoryName = categoryObj['category-name'];
  const title = document.querySelector('.main__title');
  const fragment = document.createDocumentFragment();

  title.textContent = categoryName;

  words.forEach((wordObj) => {
    const {
      word, translation, image, audioSrc,
    } = wordObj;

    const card = document.createElement('li');

    card.className = 'cards__item';
    card.classList.add('cards__item--word');
    card.setAttribute('data-word', word);

    card.innerHTML = `
      <div class="cards__item__img"></div>
      <div class="cards__item__title">${word}</div>
      <button class="cards__item__btn" type="button"></button>
    `;

    const cardImage = card.querySelector('.cards__item__img');

    if (categoryName !== 'colors') {
      cardImage.style.backgroundImage = `url(./img/${categoryName}/${image})`;
    } else {
      cardImage.classList.add('cards__item__img--color');
      cardImage.style.backgroundColor = word;
    }

    const btnRotate = card.querySelector('.cards__item__btn');
    btnRotate.style.backgroundImage = 'url(./img/icons/rotate.png)';

    fragment.append(card);
  });

  return fragment;
}

export default cardWordsCreate;

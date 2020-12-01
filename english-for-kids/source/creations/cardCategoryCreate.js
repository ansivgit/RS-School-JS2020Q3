import CONSTANTS from '../constants';

function cardCategoryCreate(categoryObj) {
  const id = categoryObj['category-id'];
  const name = categoryObj['category-name'];
  const imageSrc = categoryObj['category-img'];

  const card = document.createElement('li');

  card.className = CONSTANTS.card;
  card.classList.add(CONSTANTS.cardCategory);
  card.setAttribute(CONSTANTS.dataCategory, id);

  card.innerHTML = `
    <div class="cards__item__img"></div>
    <div class="cards__item__title">${name}</div>
  `;

  const cardImage = card.querySelector(`.${CONSTANTS.cardImage}`);
  cardImage.style.backgroundImage = `url(${imageSrc})`;

  return card;
}

export default cardCategoryCreate;

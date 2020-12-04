import CONSTANTS, { TAGS } from '../constants';
import getCardCategory from '../templates/getCardCategory';

function cardCategoryCreate(categoryObj) {
  const id = categoryObj.categoryId;
  const name = categoryObj.categoryName;
  const imageSrc = categoryObj.categoryImg;

  const card = document.createElement(TAGS.li);

  card.className = CONSTANTS.card;
  card.classList.add(CONSTANTS.cardCategory);
  card.setAttribute(CONSTANTS.dataCategory, id);

  card.innerHTML = getCardCategory(name);

  const cardImage = card.querySelector(`.${CONSTANTS.cardImage}`);
  cardImage.style.backgroundImage = `url(${imageSrc})`;

  return card;
}

export default cardCategoryCreate;

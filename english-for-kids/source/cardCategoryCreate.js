function cardCategoryCreate(categoryObj) {
  const name = categoryObj['category-name'];
  const imageSrc = categoryObj['category-img'];

  const card = document.createElement('li');

  card.className = 'cards__item';
  card.classList.add('cards__item--category');
  card.setAttribute('data-category', name);

  card.innerHTML = `
    <div class="cards__item__img"></div>
    <div class="cards__item__title">${name}</div>
  `;

  const cardImage = card.querySelector('.cards__item__img');
  cardImage.style.backgroundImage = `url(${imageSrc})`;

  return card;
}

export default cardCategoryCreate;

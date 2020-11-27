function cardCategoryCreate(categoryObj) {
  const name = categoryObj['category-name'];
  const imageSrc = categoryObj['category-img'];

  const card = document.createElement('li');
  //const path = import(imageSrc);
  //console.log(path);

  card.className = 'cards__item';
  card.classList.add('cards__item--category');

  card.innerHTML = `
  <div class="cards__item__img"></div>
  <div class="cards__item__title">${name}</div>
  `;

  const cardImage = card.querySelector('.cards__item__img');
  //cardImage.style.backgroundImage = 'url(./assets/img/food/food-category.svg)';
  console.log(card);
  return card;
}

export default cardCategoryCreate;

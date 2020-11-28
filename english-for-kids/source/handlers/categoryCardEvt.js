import cardWordsCreate from '../cardWordsCreate';

function categoryCardEvt(card) {
  const activeCategory = card.getAttribute('data-category');
  let currentCategory = {};
  console.log(activeCategory);

  this.data.forEach((categoryObj) => {
    if (categoryObj['category-name'] === activeCategory) {
      currentCategory = categoryObj;
    }
  });

  const categoryWords = cardWordsCreate(currentCategory);

  this.clear();
  this.cards.append(categoryWords);

  return this.cards;
}

export default categoryCardEvt;

import dataEn from '../assets/data-en';
import CONSTANTS from '../constants';
import cardCategoryCreate from '../creations/cardCategoryCreate';
import cardWordsCreate from '../creations/cardWordsCreate';

class App {
  constructor(lang) {
    this.lang = lang;
    this.data = dataEn;
    this.categoryNames = [];
    this.cards = null;
  }

  init() {
    this.cards = document.querySelector(`.${CONSTANTS.cardsContainer}`);

    this.data.forEach((category) => {
      const card = cardCategoryCreate(category);
      this.cards.append(card);
    });

    // eslint-disable-next-line consistent-return
    this.cards.addEventListener('click', (event) => {
      const cardCategory = event.target.closest(`.${CONSTANTS.cardCategory}`);
      const cardWord = event.target.closest(`.${CONSTANTS.cardWord}`);
      const cardBtn = event.target.closest(`.${CONSTANTS.cardBtn}`);

      if (cardCategory) {
        const activeCategory = cardCategory.getAttribute('data-category');
        const currentCategory = this.data.find((obj) => obj['category-name'] === activeCategory);
        const categoryWords = cardWordsCreate(currentCategory);

        this.clear();
        this.cards.append(categoryWords);
      }

      if (cardWord && !cardBtn && !cardWord.classList.contains(CONSTANTS.cardActive)) {
        const activeCard = cardWord.getAttribute('data-word');
        const audio = cardWord.querySelector(`audio[data-sound='${activeCard}']`);

        if (!audio) {
          // eslint-disable-next-line no-alert
          return alert('something went wrong :( try again!');
        }

        audio.currentTime = 0;
        audio.play();
      }

      if (cardBtn) {
        cardWord.classList.add(CONSTANTS.cardActive);

        cardWord.addEventListener('mouseleave', () => {
          cardWord.classList.remove(CONSTANTS.cardActive);
        });
      }
    });
  }

  clear() {
    this.cards.innerHTML = '';
  }
}

export default App;

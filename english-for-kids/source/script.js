import './assets/scss/style.scss';

import dataEn from './assets/data-en';
import cardCategoryCreate from './cardCategoryCreate';
import categoryCardEvt from './handlers/categoryCardEvt';
import wordCardEvt from './handlers/wordCardEvt';

const LANG = 'en';

class App {
  constructor(lang) {
    this.lang = lang;
    this.data = dataEn;
    this.categoryNames = [];
    this.cards = null;
  }

  init() {
    this.cards = document.querySelector('.cards');

    this.data.forEach((category) => {
      const card = cardCategoryCreate(category);
      this.cards.append(card);
    });

    this.cards.addEventListener('click', (event) => {
      const cardCategory = event.target.closest('.cards__item--category');
      const cardWord = event.target.closest('.cards__item--word');

      if (cardCategory) {
        categoryCardEvt(cardCategory);
      } else if (cardWord) {
        wordCardEvt(cardWord);
      }
    });
  }

  clear() {
    this.cards.innerHTML = '';
  }
}

const appEn = new App(LANG);

window.addEventListener('DOMContentLoaded', () => {
  appEn.init(dataEn);
});

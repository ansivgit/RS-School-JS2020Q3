import './assets/scss/style.scss';

import dataEn from './assets/data-en';
import cardCategoryCreate from './cardCategoryCreate';

const LANG = 'en';

class App {
  constructor(lang) {
    this.lang = lang;
    this.data = dataEn;
    this.categoryNames = [];
  }

  init() {
    this.cards = document.querySelector('.cards');
    console.log(this.cards);

    this.data.forEach((category) => {
      const card = cardCategoryCreate(category);
      this.cards.append(card);
    });
  }
}

const appEn = new App(LANG);

window.addEventListener('DOMContentLoaded', () => {
  appEn.init(dataEn);
});

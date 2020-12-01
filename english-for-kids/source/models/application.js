import dataEn from '../assets/data-en';
import CONSTANTS from '../constants';
import cardCategoryCreate from '../creations/cardCategoryCreate';
import cardWordsCreate from '../creations/cardWordsCreate';
import toggleMode from '../handlers/toggleMode';
import startGame from '../handlers/startGame';

class App {
  constructor(lang) {
    this.lang = lang;
    this.data = dataEn;
    this.cards = null;
    this.isPlay = false;
    this.currentCategory = null;
  }

  init() {
    this.cards = document.querySelector(`.${CONSTANTS.cardsContainer}`);
    this.toggleHandler = document.querySelector(`.${CONSTANTS.toggleHandler}`);
    this.playBtn = document.querySelector(`.${CONSTANTS.playBtn}`);

    this.data.forEach((category) => {
      const card = cardCategoryCreate(category);
      this.cards.append(card);
    });

    // eslint-disable-next-line consistent-return
    this.cards.addEventListener('click', (event) => {
      const cardCategory = event.target.closest(`.${CONSTANTS.cardCategory}`);
      const cardWord = event.target.closest(`.${CONSTANTS.cardWord}`);
      const cardBtn = event.target.closest(`.${CONSTANTS.cardBtn}`);
      const isActive = cardWord ? cardWord.classList.contains(CONSTANTS.cardActive) : false;

      if (cardCategory) {
        const activeCategory = cardCategory.getAttribute('data-category');
        this.currentCategory = this.data.find((obj) => obj['category-name'] === activeCategory);

        const categoryWords = cardWordsCreate(this.currentCategory, this.isPlay);

        this.playBtn.disabled = false;
        this.clear();
        this.cards.append(categoryWords);
      }

      if (cardWord && !cardBtn && !isActive && this.isPlay !== true) {
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

    this.toggleHandler.addEventListener('click', () => {
      this.isPlay = !this.isPlay;
      const newCards = toggleMode(this.currentCategory, this.isPlay);
      this.clear();
      this.cards.append(newCards);
    });

    this.playBtn.addEventListener('click', () => {
      startGame(this.currentCategory);
      this.playBtn.removeEventListener('click', startGame);
    });
  }

  clear() {
    this.cards.innerHTML = '';
  }
}

export default App;

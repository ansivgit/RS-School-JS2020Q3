import dataEn from '../assets/data-en';
import CONSTANTS from '../constants';
import cardCategoryCreate from '../view/cardCategoryCreate';
import cardWordsCreate from '../view/cardWordsCreate';
import mainNavCreate from '../view/mainNavCreate';
import toggleMenu from '../handlers/toggleMenu';
import toggleMode from '../handlers/toggleMode';
import gaming from '../handlers/gaming';

class App {
  constructor(lang) {
    this.lang = lang;
    this.data = dataEn;
    this.cards = null;
    this.categories = [];
    this.isPlay = false;
    this.isPlayContinue = false;
    this.currentCategory = null;
  }

  init() {
    this.cards = document.querySelector(`.${CONSTANTS.cardsContainer}`);
    this.menuBtn = document.querySelector(`.${CONSTANTS.mainNavBtn}`);
    this.toggleHandler = document.querySelector(`.${CONSTANTS.toggleHandler}`);
    this.playBtn = document.querySelector(`.${CONSTANTS.playBtn}`);
    this.statBtn = document.querySelector(`.${CONSTANTS.statBtn}`);

    this.data.forEach((category) => {
      this.categories.push(category.categoryName);
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
        const activeCategory = cardCategory.getAttribute(CONSTANTS.dataCategory);
        this.currentCategory = this.data.find((obj) => obj.categoryId === activeCategory);

        const categoryWords = cardWordsCreate(this.currentCategory, this.isPlay);

        this.playBtn.disabled = false;
        this.clear();
        this.cards.append(categoryWords);
      }

      if (cardWord && !cardBtn && !isActive && this.isPlay !== true) {
        const activeCard = cardWord.getAttribute(CONSTANTS.dataWord);
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

    mainNavCreate(this.categories);

    this.menuBtn.addEventListener('click', () => {
      toggleMenu(this.currentCategory);
    });

    this.toggleHandler.addEventListener('click', () => {
      this.isPlay = !this.isPlay;
      const newCards = toggleMode(this.currentCategory, this.isPlay);

      if (this.currentCategory) {
        this.clear();
        this.cards.append(newCards);
      }
    });

    this.playBtn.addEventListener('click', () => {
      if (!this.isPlayContinue) {
        this.isPlayContinue = true;
        gaming(this.currentCategory, () => {
          this.renewApp();
          console.log('the end');
        });
        this.playBtn.removeEventListener('click', gaming);
      }
    });

    this.statBtn.addEventListener('click', () => {
      console.log(this.isPlayContinue, this.isPlay);
    });
  }

  renewApp() {
    console.log('renewed');
  }

  clear() {
    this.cards.innerHTML = '';
  }
}

export default App;

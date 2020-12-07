import dataEn from '../assets/data-en';
import CONSTANTS from '../constants';
import cardCategoryCreate from '../view/cardCategoryCreate';
import cardWordsCreate from '../view/cardWordsCreate';
import mainNavCreate from '../view/mainNavCreate';
import toggleMenu from '../handlers/toggleMenu';
import toggleMode from '../handlers/toggleMode';
import gaming from '../handlers/gaming';
import statTableCreate from '../view/statTableCreate';
import Statistic from './statistic';

class App {
  constructor(lang) {
    this.lang = lang;
    this.data = dataEn;
    this.cards = null;
    this.categories = [];
    this.isPlay = false;
    this.isPlayContinue = false;
    this.currentCategory = null;
    this.statistic = {};
  }

  init() {
    this.titleLogo = document.querySelector(`.${CONSTANTS.titleLogo}`);
    this.title = document.querySelector(`.${CONSTANTS.titleCategory}`);
    this.cards = document.querySelector(`.${CONSTANTS.cardsContainer}`);
    this.menuMain = document.querySelector(`.${CONSTANTS.mainNav}`);
    this.menuBtn = document.querySelector(`.${CONSTANTS.mainNavBtn}`);
    this.toggleHandler = document.querySelector(`.${CONSTANTS.toggleHandler}`);
    this.toggleCheckbox = document.querySelector(`.${CONSTANTS.toggleCheckbox}`);
    this.ratingBox = document.querySelector(`.${CONSTANTS.mainRating}`);
    this.playBtn = document.querySelector(`.${CONSTANTS.playBtn}`);
    this.statBtn = document.querySelector(`.${CONSTANTS.statBtn}`);

    this.startPageCreate(this.data);
    mainNavCreate(this.categories);
    this.newStatistic = new Statistic(this.data);
    this.newStatistic.create();

    // eslint-disable-next-line consistent-return
    this.cards.addEventListener('click', (event) => {
      const cardCategory = event.target.closest(`.${CONSTANTS.cardCategory}`);
      const cardWord = event.target.closest(`.${CONSTANTS.cardWord}`);
      const cardBtn = event.target.closest(`.${CONSTANTS.cardBtn}`);
      const isActive = cardWord ? cardWord.classList.contains(CONSTANTS.cardActive) : false;

      if (cardCategory) {
        this.getCategoryObj(cardCategory);
      }

      if (cardWord && !cardBtn && !isActive && this.isPlay !== true) {
        const activeCard = cardWord.getAttribute(CONSTANTS.dataWord);
        const audio = cardWord.querySelector(`audio[data-sound='${activeCard}']`);
        if (!this.statistic[activeCard]) {
          this.statistic[activeCard] = { trainValue: 0 };
        }

        this.statistic[activeCard].trainValue = 1;
        console.log(this.statistic);
        this.newStatistic.setStat(this.statistic, 'train');

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

    this.titleLogo.addEventListener('click', () => {
      document.location.reload();
    });

    this.menuMain.addEventListener('click', (event) => {
      const { target } = event;
      const button = target.closest(`.${CONSTANTS.mainNavBtn}`);
      const menuItem = target.closest(`.${CONSTANTS.mainNavItem}`);
      const blackout = target.closest(`.${CONSTANTS.blackout}`);

      if (button || blackout) {
        toggleMenu(this.currentCategory);
      }

      if (menuItem) {
        const newCategory = target.closest(`.${CONSTANTS.mainNavItem}`);
        const mainItem = this.menuMain.querySelector(`[${CONSTANTS.dataCategory}='main']`);
        const prevItem = this.menuMain.querySelector(`.${CONSTANTS.mainNavItemActive}`);

        prevItem.classList.remove(CONSTANTS.mainNavItemActive);
        newCategory.classList.add(CONSTANTS.mainNavItemActive);

        // eslint-disable-next-line no-unused-expressions
        (newCategory === mainItem)
          ? this.startPageCreate(this.data)
          : this.getCategoryObj(newCategory);
      }
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
        gaming(this.currentCategory, this.statistic, () => {
          this.renewApp();
        });
        this.playBtn.removeEventListener('click', gaming);
      }
    });

    this.statBtn.addEventListener('click', () => {
      statTableCreate();
    });
  }

  renewApp() {
    this.isPlay = false;
    this.isPlayContinue = false;
    this.toggleCheckbox.checked = false;
    this.ratingBox.innerHTML = '';
    this.playBtn.textContent = 'Start game';

    this.startPageCreate(this.data);
    toggleMode(this.currentCategory, this.isPlay);
  }

  startPageCreate(data) {
    this.currentCategory = null;
    this.title.textContent = 'categories';
    this.clear();

    data.forEach((category) => {
      const card = cardCategoryCreate(category);

      this.categories.push(category.categoryId);
      this.cards.append(card);
    });
  }

  getCategoryObj(categoryElem) {
    const activeCategory = categoryElem.getAttribute(CONSTANTS.dataCategory);
    this.currentCategory = this.data.find((obj) => obj.categoryId === activeCategory);

    const categoryWords = cardWordsCreate(this.currentCategory, this.isPlay);

    this.playBtn.disabled = false;
    this.clear();
    this.cards.append(categoryWords);
  }

  clear() {
    this.cards.innerHTML = '';
  }
}

export default App;

import CONSTANTS from '../constants';
import App from '../models/application';
import cardCategoryCreate from '../view/cardCategoryCreate';

function renewApp() {
  const LANG = 'En';

  const appEn = new App(LANG);
  appEn.cards = document.querySelector(`.${CONSTANTS.cardsContainer}`);
  appEn.data.forEach((category) => {
    const card = cardCategoryCreate(category);
    appEn.cards.append(card);
  });
  appEn.isPlay = false;
  appEn.isPlayContinue = false;
  appEn.currentCategory = null;
  appEn.playBtn.disabled = true;
  console.log('new', appEn.isPlay);
}

export default renewApp;

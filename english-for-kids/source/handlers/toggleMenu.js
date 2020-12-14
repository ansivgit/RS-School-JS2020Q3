import CONSTANTS from '../constants';

function toggleMenu(currentCategory) {
  const mainNav = document.querySelector(`.${CONSTANTS.mainNav}`);
  const blackout = mainNav.querySelector(`.${CONSTANTS.blackout}`);
  const mainNavBtn = document.querySelector(`.${CONSTANTS.mainNavBtn}`);
  const isActive = mainNavBtn.classList.contains(CONSTANTS.mainNavBtnActive);

  mainNav.classList.toggle(CONSTANTS.mainNavActive);
  blackout.classList.toggle(CONSTANTS.visuallyHidden);
  mainNavBtn.classList.toggle(CONSTANTS.mainNavBtnActive);

  const mainItem = mainNav.querySelector(`[${CONSTANTS.dataCategory}='main']`);
  let activeCategory = mainItem;

  if (currentCategory !== null) {
    const currentItem = mainNav.querySelector(`[${CONSTANTS.dataCategory}=${currentCategory.categoryName}]`);
    activeCategory = currentItem;
  }

  activeCategory.classList.add(CONSTANTS.mainNavItemActive);

  if (isActive) {
    activeCategory.classList.remove(CONSTANTS.mainNavItemActive);
  }
}

export default toggleMenu;

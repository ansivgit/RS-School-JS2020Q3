import CONSTANTS from '../constants';

function toggleMenu(currentCategory) {
  const mainNav = document.querySelector(`.${CONSTANTS.mainNav}`);
  const menuBtn = document.querySelector(`.${CONSTANTS.mainNavBtn}`);

  mainNav.classList.toggle(CONSTANTS.mainNavActive);
  menuBtn.classList.toggle(CONSTANTS.mainNavBtnActive);

  const mainItem = mainNav.querySelector(`[${CONSTANTS.dataMenu}='main']`);
  let activeCategory = mainItem;

  if (currentCategory !== null) {
    const lastItem = mainNav.querySelector(`.${CONSTANTS.mainNavItemActive}`);
    const currentItem = mainNav.querySelector(`[${CONSTANTS.dataMenu}=${currentCategory.categoryName}`);

    lastItem.classList.remove(CONSTANTS.mainNavItemActive);
    activeCategory = currentItem;
  }

  activeCategory.classList.add(CONSTANTS.mainNavItemActive);
}

export default toggleMenu;

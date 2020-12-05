import CONSTANTS, { TAGS } from '../constants';
import getMenuItem from '../templates/getMenuItem';

function mainNavCreate(categories) {
  const menuContainer = document.querySelector(`.${CONSTANTS.mainNavContainer}`);
  const categoriesArray = ['main', ...categories];

  categoriesArray.forEach((category) => {
    const elem = getMenuItem(category);
    const menuItem = document.createElement(TAGS.div);

    menuItem.className = CONSTANTS.mainNavItem;
    menuItem.setAttribute(CONSTANTS.dataMenu, category);
    menuItem.innerHTML = elem;

    menuContainer.append(menuItem);
  });

  return menuContainer;
}

export default mainNavCreate;

import CONSTANTS, { TAGS } from '../constants';
import getMenuItem from '../templates/getMenuItem';

function mainNavCreate(categories) {
  const menuContainer = document.querySelector(`.${CONSTANTS.mainNavContainer}`);
  const categoriesArray = ['main', ...categories];

  categoriesArray.forEach((category) => {
    const title = category.split('-').join(' ');
    const elem = getMenuItem(title);
    const menuItem = document.createElement(TAGS.div);

    menuItem.className = CONSTANTS.mainNavItem;
    menuItem.setAttribute(CONSTANTS.dataCategory, category);
    menuItem.innerHTML = elem;

    menuContainer.append(menuItem);
  });

  return menuContainer;
}

export default mainNavCreate;

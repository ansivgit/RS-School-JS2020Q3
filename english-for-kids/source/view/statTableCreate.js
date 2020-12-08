import CONSTANTS, { TAGS } from '../constants';
import getTableRow from '../templates/getTableRow';

function statTableCreate() {
  const statistic = JSON.parse(localStorage.getItem('statistic'));
  const statisticBlock = document.querySelector('.statistic');
  const statisticTable = document.querySelector('.statistic__body');
  const statisticBtnClose = document.querySelector('.stats__btn--close');
  let tableRow = document.createElement(TAGS.tr);

  statisticTable.innerHTML = '';

  if (!statistic) {
    return;
  }

  tableRow.className = 'statistic__content__row';
  tableRow.classList.add('statistic__content__row--header');
  tableRow.innerHTML = getTableRow({}, 'head');
  statisticTable.append(tableRow);

  statistic.forEach((word) => {
    tableRow = document.createElement(TAGS.tr);
    tableRow.innerHTML = getTableRow(word);
    statisticTable.append(tableRow);
  });

  statisticBlock.classList.remove(CONSTANTS.visuallyHidden);

  statisticBtnClose.addEventListener('click', () => {
    statisticBlock.classList.add(CONSTANTS.visuallyHidden);
  });
}

export default statTableCreate;

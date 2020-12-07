import CONSTANTS, { TAGS } from '../constants';
import Statistic from '../models/statistic';
import getTableRow from '../templates/getTableRow';

function statTableCreate() {
  const statistic = JSON.parse(localStorage.getItem('statistic'));
  const statisticBlock = document.querySelector('.statistic');
  const statisticTable = document.querySelector('.statistic__body');
  const statisticBtnClose = document.querySelector('.stats__btn--close');

  if (!statistic) {
    return;
  }

  statistic.forEach((word) => {
    const tableRow = document.createElement(TAGS.tr);
    tableRow.innerHTML = getTableRow(word);
    statisticTable.append(tableRow);
  });

  statisticBlock.classList.remove(CONSTANTS.visuallyHidden);

  statisticBtnClose.addEventListener('click', () => {
    statisticBlock.classList.add(CONSTANTS.visuallyHidden);
  });
}

export default statTableCreate;

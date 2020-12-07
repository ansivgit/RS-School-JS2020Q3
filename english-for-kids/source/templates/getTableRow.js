function getTableRow(obj) {
  return `
          <td class="statistic__content__row">${obj.word}</td>
          <td class="statistic__content__row">${obj.categoryId}</td>
          <td class="statistic__content__row">${obj.translation}</td>
          <td class="statistic__content__row">${obj.trainValue}</td>
          <td class="statistic__content__row">${obj.playValue}</td>
          <td class="statistic__content__row">${obj.mistakesValue}</td>
          <td class="statistic__content__row">${obj.proportion}</td>
        `;
}

export default getTableRow;

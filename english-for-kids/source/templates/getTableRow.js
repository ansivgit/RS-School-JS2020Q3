function getTableRow(obj = {}, type = '') {
  if (type === 'head') {
    return `
            <th class="statistic__content__row" data-statHeader="word">Word</th>
            <th class="statistic__content__row" data-statHeader="category">Category</th>
            <th class="statistic__content__row" data-statHeader="translation">Translation</th>
            <th class="statistic__content__row" data-statHeader="train">Train</th>
            <th class="statistic__content__row" data-statHeader="play-true">Correct</th>
            <th class="statistic__content__row" data-statHeader="play-mistake">Mistake</th>
            <th class="statistic__content__row" data-statHeader="proportion">Сorrect, %</th>
          `;
  }

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

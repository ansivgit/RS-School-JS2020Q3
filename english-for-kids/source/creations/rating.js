import CONSTANTS from '../constants';

function rating(boolean) {
  const ratingBox = document.querySelector(`.${CONSTANTS.mainRating}`);
  const span = document.createElement('span');
  span.classList.add('main__rating__star');

  if (boolean === true) {
    span.classList.add('main__rating__star--true');
  } else {
    span.classList.add('main__rating__star--false');
  }

  ratingBox.append(span);

  return ratingBox;
}

export default rating;

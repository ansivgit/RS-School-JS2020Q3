import CONSTANTS, { WIDTH } from '../constants';

function rating(boolean) {
  const ratingBox = document.querySelector(`.${CONSTANTS.mainRating}`);
  const span = document.createElement('span');
  const ratingBlockWidth = WIDTH.windowWidth - WIDTH.buttonWhole - WIDTH.ratingMargins;
  const starsValue = Math.floor(ratingBlockWidth / WIDTH.starBlock);
  const spansArr = ratingBox.querySelectorAll(`.${CONSTANTS.mainRatingStar}`);
  const arrLength = spansArr.length;

  span.classList.add('main__rating__star');

  if (boolean === true) {
    span.classList.add('main__rating__star--true');
  } else {
    span.classList.add('main__rating__star--false');
  }

  if (arrLength === starsValue) {
    const firstStar = ratingBox.firstChild;
    firstStar.remove();
  }

  ratingBox.append(span);

  return ratingBox;
}

export default rating;

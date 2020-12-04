import CONSTANTS, { WIDTH, TAGS } from '../constants';

function rating(boolean) {
  const ratingBox = document.querySelector(`.${CONSTANTS.mainRating}`);
  const span = document.createElement(TAGS.span);
  const ratingBlockWidth = WIDTH.windowWidth - WIDTH.buttonWhole - WIDTH.ratingMargins;
  const starsValue = Math.floor(ratingBlockWidth / WIDTH.starBlock);
  const spansArr = ratingBox.querySelectorAll(`.${CONSTANTS.mainRatingStar}`);
  const arrLength = spansArr.length;

  const secondClassName = (boolean === true)
    ? `${CONSTANTS.mainRatingStar}--true`
    : `${CONSTANTS.mainRatingStar}--false`;

  span.classList.add(CONSTANTS.mainRatingStar);
  span.classList.add(secondClassName);

  if (arrLength === starsValue) {
    const firstStar = ratingBox.firstChild;
    firstStar.remove();
  }

  ratingBox.append(span);

  return ratingBox;
}

export default rating;

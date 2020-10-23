const imagesAll = {
  night: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'],
  morning: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'],
  day: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'],
  evening: ['01.jpg', '02.jpg', '03.jpg', '04.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'],
};
const imgPerDayTime = 6;
const dayImages = [];
let hour = new Date().getHours();
let minute = new Date().getMinutes();
let currentImgIndex = hour;
let currentDayTime = '';

const time = document.querySelector('.time');
const day = document.querySelector('.day');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');
const changeImgBtn = document.querySelector('.btn--bgImg-change');
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btnQuoteChange = document.querySelector('.btn--quote-change');

function showTime() {
  let today = new Date();
  hour = today.getHours();
  minute = today.getMinutes();
  let second = today.getSeconds();

  time.textContent = `${hour}:${addZero(minute)}:${addZero(second)}`;
  if (parseInt(minute) + second === 0) {
    setBgGreetings();
    showDate();
  }
  setTimeout(showTime, 1000);
};

function addZero(num) {
  return ((parseInt(num, 10) < 10) ? '0' : '') + num;
};

function showDate() {
  let today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };

  day.textContent = today.toLocaleDateString('en-EN', options);
};

function randomGen(quantity = 1, array = []) {
  if (array.length === 0) return array;

  const unique = new Set();

  while (unique.size < quantity) {
    let indexRandom = Math.round(Math.random() * (array.length - 1));
    unique.add(array[indexRandom]);
  }
  const randomArray = Array.from(unique);
  return randomArray;
};

(function randomImg() {
  const dayTime = Object.keys(imagesAll);

  dayTime.forEach((key) => {
    let imagesDayTime = randomGen(imgPerDayTime, imagesAll[key]);
    let src = '';
    imagesDayTime.forEach((img) => {
      src = `${key}/${img}`;
      dayImages.push(src);
    })
  });
})();

function setBgGreetings() {
  let hour = new Date().getHours();
  console.log('hola at ', new Date());

  document.body.style.backgroundImage = `url('./assets/images/${dayImages[hour]}')`;

  switch (true) {
    case (hour < 6):
      //currentDayTime = 'night'; //! , возможно. эта переменная не нужна
      //document.body.style.backgroundImage = `url('./assets/images/${dayImages[hour]}')`;
      greeting.textContent = 'Good Night, ';
      break;

    case (hour < 12):
      //currentDayTime = 'morning';
      greeting.textContent = 'Good Morning, ';
      break;

    case (hour < 18):
      //currentDayTime = 'day';
      //document.body.style.backgroundImage = `url('./assets/images/${dayImages[hour]}')`;
      greeting.textContent = 'Good Afternoon, ';
      break;

    case (hour < 24):
      //currentDayTime = 'evening';
      //document.body.style.backgroundImage = `url('./assets/images/${dayImages[hour]}')`;
      greeting.textContent = 'Good Evening, ';
      break;

    default:
      document.body.style.backgroundImage = "url('./assets/images/flag.jpg')";
      greeting.textContent = 'Hola, ';
      break;
  }
};

function getName() {
  name.textContent = (localStorage.getItem('name') === null)
    ? '[Enter Name]'
    : name.textContent = localStorage.getItem('name');
};

function setName(event) {
  if (event.type === 'keydown') {
    if (event.key === 'Enter') {
      localStorage.setItem('name', event.target.textContent);
      name.blur();
    }
  } else {
    localStorage.setItem('name', event.target.textContent);
  }
};

function clearField(event) {
  let currentContent = event.target.textContent;
  event.target.textContent = '';
  if (event.target.textContent.length === 0) {
    event.target.textContent = currentContent;
  }
}

function getFocus() {
  focus.textContent = (localStorage.getItem('focus') === null)
    ? '[Enter Focus]'
    : focus.textContent = localStorage.getItem('focus');
};

function setFocus(event) {
  if (event.type === 'keydown') {
    if (event.key === 'Enter') {
      localStorage.setItem('focus', event.target.textContent);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', event.target.textContent);
  }
};

function changeBgImage() {
  currentImgIndex = (currentImgIndex !== 23) ? currentImgIndex += 1 : 0;
  document.body.style.backgroundImage = `url('./assets/images/${dayImages[currentImgIndex]}')`;
};

// если в ссылке заменить lang=en на lang=ru, цитаты будут на русском языке
// префикс https://cors-anywhere.herokuapp.com используем для доступа к данным с других сайтов,
//если браузер возвращает ошибку Cross - Origin Request Blocked
async function getQuote() {
  console.log('0000');
  //префикс https://cors-anywhere.herokuapp.com//
  const url = `https://favqs.com/api/qotd`;
  //const url = `https://https://type.fit/api/quotes`;
  //const url = `https://api.adviceslip.com/advice`;
  //const url = `https://api.chucknorris.io/jokes/random`;
  //const url = `https://programming-quotes-api.herokuapp.com/quotes`;
  //const url = `https://quote-garden.herokuapp.com/api/v2/quotes/random`;
  //const url = `https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  blockquote.textContent = `"${data.quote.body}"`;
  figcaption.textContent = data.quote.author;
  console.log('1111');
}

//name.addEventListener('click', clearField);
name.addEventListener('keydown', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keydown', setFocus);
focus.addEventListener('blur', setFocus);
changeImgBtn.addEventListener('click', changeBgImage);
document.addEventListener('DOMContentLoaded', getQuote);
btnQuoteChange.addEventListener('click', getQuote);

showTime();
showDate();
setBgGreetings();
getName();
getFocus();

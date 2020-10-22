const time = document.querySelector('.time');
const day = document.querySelector('.day');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const focus = document.querySelector('.focus');

function showTime() {
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  time.textContent = `${hour}:${addZero(minute)}:${addZero(second)}`;

  setTimeout(showTime, 1000)
};

function addZero(num) {
  return ((parseInt(num, 10) < 10) ? '0' : '') + num;
};

function showDate() {
  let today = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric' };

  day.textContent = today.toLocaleDateString('en-EN', options);

  setTimeout(showDate, 8640000)
};

function setBgGreetings() {
  let today = new Date();
  let hour = today.getHours();

  switch (true) {
    case (hour < 6):
      document.body.style.backgroundImage = "url('./assets/images/night/01.jpg')";
      greeting.textContent = 'Good Night, ';
      break;

    case (hour < 12):
      document.body.style.backgroundImage = "url('./assets/images/morning/01.jpg')";
      greeting.textContent = 'Good Morning, ';
      break;

    case (hour < 18):
      document.body.style.backgroundImage = "url('./assets/images/day/01.jpg')";
      greeting.textContent = 'Good Afternoon, ';
      break;

    case (hour < 24):
      document.body.style.backgroundImage = "url('./assets/images/evening/01.jpg')";
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

//name.addEventListener('click', clearField);
name.addEventListener('keydown', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keydown', setFocus);
focus.addEventListener('blur', setFocus);

showTime();
showDate();
setBgGreetings();
getName();
getFocus();

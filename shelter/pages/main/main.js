const body = document.querySelector('body');
const menuMobileBtn = document.querySelector('.menu-mobile__btn');
const mainNav = document.querySelector('.main-nav');
const sliderCards = document.querySelectorAll('.slider__card');
const modal = document.querySelector('.modal');
const slider = document.querySelector('.slider');
const sliderButtons = document.querySelectorAll('.btn--secondary--arrow--spear');

let petsData = [];
let sliderData = [];

const getData = async function(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error at address ${url},
        status ${response.status}!`);
  }
  return await response.json();
};

function init() {
  getData('../../assets/pets.json').then(function(data) {
    //console.log(data);
    petsData.push(...data);
    //console.log(petsData);
  });
  //console.log(petsData[0]);
  //console.log(sliderData);
  //return petsData;
};


//const currentSlide = sliderData.push(randomGen(3, petsData));
//console.log(currentSlide);
//console.log(randomGen(2, [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }]))
//! menu-burger
menuMobileBtn.addEventListener('click', () => {
  menuMobileBtn.classList.toggle('menu-mobile__btn--active')
});

//* open modal window
function openModal(event) {
  const sliderCard = event.target.closest('.slider__card');
  const petName = sliderCard.querySelector('.slider__card__name').textContent;
  const modalImg = modal.querySelector('.modal__img');
  const modalName = modal.querySelector('.modal__description__name');
  const modalBreed = modal.querySelector('.modal__description__breed');
  const modalContent = modal.querySelector('.modal__description__content');
  const modalAge = modal.querySelector('[data-age]');
  const modalInoculations = modal.querySelector('[data-inoculations]');
  const modalDiseases = modal.querySelector('[data-diseases]');
  const modalParasites = modal.querySelector('[data-parasites]');

  const petInfo = petsData.filter((item) => {
    if (item.name === petName) return item;
  });

  const { age, breed, description, diseases, img, inoculations, name, parasites, type } = petInfo[0];

  modalImg.setAttribute('src', '');
  modalName.textContent = '';
  modalBreed.textContent = '';
  modalContent.textContent = '';
  modalAge.textContent = '';
  modalInoculations.textContent = '';
  modalDiseases.textContent = '';
  modalParasites.textContent = '';

  modal.classList.remove('hide');
  body.classList.add('locked');

  modalImg.setAttribute('src', img);
  modalName.textContent = name;
  modalBreed.textContent = `${type} - ${breed}`;
  modalContent.textContent = description;
  modalAge.textContent = age;
  modalInoculations.textContent = inoculations;
  modalDiseases.textContent = diseases;
  modalParasites.textContent = parasites;
};

// slider
//* функция, которая генерит заданное кол-во случайных элементов из массива, который подается на вход
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

function slideChange(event) {
  const sliderCards = slider.querySelectorAll('.slider__card');
  const randomSlide = randomGen(petsData.length, petsData);

  sliderCards.forEach((item, index) => {
    item.querySelector('.slider__card__img').setAttribute('src', randomSlide[index].img);
    item.querySelector('.slider__card__name').textContent = randomSlide[index].name;
  });
}


//* event listeners
sliderCards.forEach((item) => {
  item.addEventListener('click', openModal);
});

sliderButtons.forEach((item) => {
  item.addEventListener('click', slideChange)
})

modal.addEventListener('click', (event) => {
  if (event.target.closest('.btn--secondary--arrow--cross') || event.target.classList.contains('modal')) {
    body.classList.remove('locked');
    modal.classList.add('hide');
  }
});

init();

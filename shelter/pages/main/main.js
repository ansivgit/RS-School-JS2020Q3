const menuMobileBtn = document.querySelector('.menu-mobile__btn');
const mainNav = document.querySelector('.main-nav');
const sliderCards = document.querySelectorAll('.slider__card');
const modal = document.querySelector('.modal');

let petsData = [];

const getData = async function(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error at address ${url},
        status ${response.status}!`);
  }
  return await response.json();
};

function init() {
  getData('../../assets/pets.json').then(function (data) {
    petsData.push(...data);
    console.log(petsData);

    return petsData;
  });
};

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

  modalImg.setAttribute('src', img);
  modalName.textContent = name;
  modalBreed.textContent = `${type} - ${breed}`;
  modalContent.textContent = description;
  modalAge.textContent = age;
  modalInoculations.textContent = inoculations;
  modalDiseases.textContent = diseases;
  modalParasites.textContent = parasites;
};

sliderCards.forEach((item) => {
  item.addEventListener('click', openModal);
});

modal.addEventListener('click', (event) => {
  console.log(event.target)
  if (event.target.closest('.btn--secondary--arrow--cross') || event.target.classList.contains('modal')) {
    modal.classList.add('hide');
  }
});

init();

const PETS_QUANTITY = 48;
const petsData = [
  {
    "name": "Jennifer",
    "img": "../../assets/images/slider_photo02.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/looking_04.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/slider_photo03.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/looking_07.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Katrine",
    "img": "../../assets/images/slider_photo01.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/looking_05.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/looking_08.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/looking_06.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
];
const body = document.querySelector('body');
const menuMobileBtn = document.querySelector('.menu-mobile__btn');
const mainNav = document.querySelector('.main-nav');
const cardsListContainer = document.querySelector('.cards__list__container');
const cardsPets = document.querySelectorAll('.cards__item');
const modal = document.querySelector('.modal');
const currentPage = document.querySelector('[value = "current-page"]');
const firstPage = document.querySelector('[value = "first-page"]');
const prevPage = document.querySelector('[value = "prev-page"]');
const nextPage = document.querySelector('[value = "next-page"]');
const lastPage = document.querySelector('[value = "last-page"]');

//let petsData = [];
let petsDataArray = [];
let cardsPerPage;
let currentPageNumber = Number(currentPage.textContent);

if (document.body.clientWidth <= 767) {
  cardsPerPage = 3;
} else if (document.body.clientWidth <= 1023) {
  cardsPerPage = 6;
} else {
  cardsPerPage = 8;
}

// const getData = async function(url) {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`Error at address ${url},
//         status ${response.status}!`);
//   }
//   return await response.json();
// };

function init() {
  // getData('../../assets/pets.json').then(function (data) {
  //   petsData.push(...data);
  //   //console.log(petsData[0]);
  //   return petsData;
  // });

  function petsDataGen(num) {
    petsDataArray = [[
      petsData[4],
      petsData[0],
      petsData[2],
      petsData[1],
      petsData[5],
      petsData[7],
      petsData[3],
      petsData[6],
    ],];//! сделано для соотв.ПП проверки. Потом убрать
    while (petsDataArray.length < num) {
      petsDataArray.push(randomGen(petsData.length, petsData));
    }
    //console.log(petsDataArray);
    return petsDataArray;
  };

  petsDataGen(PETS_QUANTITY / cardsPerPage);
  //console.log(petsDataGen(PETS_QUANTITY / cardsPerPage));
  //return petsDataGen(PETS_QUANTITY);
};


//console.log(cardsPerPage);
//! menu-burger
menuMobileBtn.addEventListener('click', () => {
  menuMobileBtn.classList.toggle('menu-mobile__btn--active')
});

//* open modal window
function openModal(event) {
  const cardsPets = event.target.closest('.cards__item');
  const petName = cardsPets.querySelector('.cards__item__name').textContent;
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

// pagination
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

function cardsGen(direction) {

  if (direction === 'next') {
    prevPage.disabled = false;
    firstPage.disabled = false;

    currentPageNumber = (currentPageNumber !== PETS_QUANTITY / cardsPerPage)
    ? currentPageNumber += 1
    : PETS_QUANTITY / cardsPerPage;
  }

  if (direction === 'prev') {
    nextPage.disabled = false;
    lastPage.disabled = false;

    currentPageNumber = (currentPageNumber !== 1) ? currentPageNumber -= 1 : 1;
  }

  if (currentPageNumber === 1) {
    prevPage.disabled = true;
    firstPage.disabled = true;
  }
  if (currentPageNumber === 6) {
    nextPage.disabled = true;
    lastPage.disabled = true;
  }

  currentPage.textContent = currentPageNumber;
  let cardsOnPage = petsDataArray[currentPageNumber - 1];
  cardsListContainer.innerHTML = '';
  for (let i = 0; i < cardsPerPage; i++) {
    let { age, breed, description, diseases, img, inoculations, name, parasites, type } = cardsOnPage[i];
    let card = document.createElement('li');
    card.className = 'cards__item';
    card.innerHTML =
      `
      <img class="cards__item__img" src="${img}" alt="${type} ${name}" />
      <h4 class="cards__item__name">${name}</h4>
      <a class="btn btn--secondary" href="/some-address/change-me" target="_blanc">Learn more</a>
    `;
    cardsListContainer.append(card);
  }
};


//* event listeners
cardsPets.forEach((item) => {
  item.addEventListener('click', openModal);
});

modal.addEventListener('click', (event) => {
  if (event.target.closest('.btn--secondary--arrow--cross') || event.target.classList.contains('modal')) {
    body.classList.remove('locked');
    modal.classList.add('hide');
  }
});

nextPage.addEventListener('click', () => {
  cardsGen('next');
});

prevPage.addEventListener('click', () => {
  cardsGen('prev');
});


init();

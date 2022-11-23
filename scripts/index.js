const initialCards = [
  {
    name: "Yosemite Valley",
    link: "images/yosemite-valley.jpg",
  },
  {
    name: "Lake Louise",
    link: "images/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "images/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "images/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "images/vanoise-national-park.jpg",
  },
  {
    name: "Lago di Braies",
    link: "images/lago-di-braies.jpg",
  },
];

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".modal__button");

const modal = document.querySelector(".modal");

const profileName = document.querySelector(".profile__title");
const profileTag = document.querySelector(".profile__subheading");

const formInputName = document.querySelector("#name");
const formInputTag = document.querySelector("#about-me");

function toggleModal() {
  modal.classList.toggle("modal__opened");

  if (modal.classList.contains("modal__opened")) {
    formInputName.value = profileName.textContent;
    formInputTag.value = profileTag.textContent;
  }
}

editButton.addEventListener("click", toggleModal);

closeButton.addEventListener("click", toggleModal);

const profileFormElement = document.querySelector(".modal__container");

function handleProfileFormSubmit(e) {
  e.preventDefault();

  profileName.textContent = formInputName.value;
  profileTag.textContent = formInputTag.value;

  toggleModal();
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function getCardElement(data) {
  const cardTemplate = document.querySelector("#card-element").content;

  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");

  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  return cardElement;
}

function createCardsList(card) {
  const cardsList = document.querySelector(".cards__list");

  const newCardElement = getCardElement(card);

  cardsList.prepend(newCardElement);
}

initialCards.forEach(createCardsList);

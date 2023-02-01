import "../pages/index.css";
import Card from "../scripts/Card.js";
import FormValidator from "../scripts/FormValidator.js";
import { closePopup, openPopup } from "../scripts/utils.js";

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://images.unsplash.com/photo-1492305175278-3b3afaa2f31f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80",
  },
  {
    name: "Lake Louise",
    link: "https://images.unsplash.com/photo-1553545616-b592535aa4cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Bald Mountains",
    link: "https://images.unsplash.com/photo-1631745818498-579a5463598c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
  },
  {
    name: "Latemar",
    link: "https://images.unsplash.com/photo-1518733262568-b51ef2fac5b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    name: "Vanoise National Park",
    link: "https://images.unsplash.com/photo-1601809774049-90a98e3a10c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
  {
    name: "Lago Di Braies",
    link: "https://images.unsplash.com/photo-1601893920895-e3ed4a655d27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
];

//declaring variables

/* Cards */

const cardGallery = document.querySelector(".cards__gallery");

/* Buttons */

const cardAddButton = document.querySelector("#add-button");

const profileEditOpen = document.querySelector(".profile__edit");

const imagePreviewClose = document.querySelector("#image-close");

/* Popup */

const cardAddPopup = document.querySelector("#add-card-modal");
const cardAddCloseButton = cardAddPopup.querySelector("#close-button");
const cardAddForm = document.querySelector("#add-card-form");
const cardNameField = document.querySelector("#card-name");
const cardLinkField = document.querySelector("#card-link");

const imagePopup = document.querySelector("#image-modal");
const profileEditPopup = document.querySelector("#edit-modal");
const profileEditClose = profileEditPopup.querySelector(".modal__close");

const profileForm = document.querySelector("#modal-profile-form");
const profileEditTitle = document.querySelector(".profile__title");
const profileEditDescription = document.querySelector(".profile__subtitle");
const profileTitleInput = profileForm.querySelector(".modal__name");
const profileDescriptionInput = profileForm.querySelector(
  ".modal__description"
);

/* Template */

const cardSelector = "#card-template";

const validationSettings = {
  formSelector: ".modal__container",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

const editFormValidator = new FormValidator(validationSettings, profileForm);
const addFormValidator = new FormValidator(validationSettings, cardAddForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

/* Toggle Functions */

profileEditOpen.addEventListener("click", function () {
  profileTitleInput.value = profileEditTitle.textContent;
  profileDescriptionInput.value = profileEditDescription.textContent;

  openPopup(profileEditPopup);
});

cardAddButton.addEventListener("click", () => {
  openPopup(cardAddPopup);
  addFormValidator.resetValidation();
});

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleValue = event.target.title.value;
  const descriptionValue = event.target.description.value;

  profileEditTitle.textContent = titleValue;
  profileEditDescription.textContent = descriptionValue;

  closePopup(profileEditPopup);
});

/* Render Card Functions */

function createCard() {
  const createdCard = {
    name: cardNameField.value,
    link: cardLinkField.value,
  };
  const card = new Card(createdCard, cardSelector);
  return card;
}

cardAddForm.addEventListener("submit", function (event) {
  event.preventDefault();

  cardGallery.prepend(createCard().getElement());
  closePopup(cardAddPopup);
  cardAddForm.reset();
});

initialCards.forEach(function (cardData) {
  const card = new Card(cardData, cardSelector);
  cardGallery.prepend(card.getElement());
});

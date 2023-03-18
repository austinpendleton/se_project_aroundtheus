import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import {
  config,
  initialCards,
  validationSettings,
} from "../utils/constants.js";
import {
  closePopup,
  openPopup,
  closePopupOnEscape,
  closePopupOnRemoteClick,
} from "../utils/utils.js";
//declaring variables

/* Cards */
const cardAddForm = document.querySelector("#add-card-form");
const profileModal = document.querySelector(config.profileModalSelector);
const profileEditForm = profileModal.querySelector(config.formSelector);
const editFormValidator = new FormValidator(config, profileEditForm);
const addFormValidator = new FormValidator(config, cardAddForm);

const cardAddButton = document.querySelector("#add-button");
const profileEditOpen = document.querySelector(".profile__edit");
const profileForm = document.querySelector("#modal-profile-form");

const profileTitleInput = profileForm.querySelector("#owner-name");
const profileEditTitle = document.querySelector(".profile__title");
const profileDescriptionInput = profileForm.querySelector(
  ".modal__description"
);
const profileEditDescription = document.querySelector(".profile__subtitle");

editFormValidator.enableValidation();
addFormValidator.enableValidation();

// UserInfo callback

const userInfo = new UserInfo({
  profileNameSelector: profileTitleInput,
  profileDescriptionSelector: profileDescriptionInput,
});

const addCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: (data) => {
    const card = createCard(data);
    cardSection.addItem(card);
    addCardPopup.close();
  },
});
addCardPopup.setEventListeners();

const userInfoPopup = new PopupWithForm({
  popupSelector: "#edit-modal",
  handleFormSubmit: (data) => {
    userInfo.setProfileInfo(data.name, data.description);
  },
});
userInfoPopup.setEventListeners();

/* Toggle Functions */

profileEditOpen.addEventListener("click", function () {
  profileTitleInput.value = profileEditTitle.textContent;
  profileDescriptionInput.value = profileEditDescription.textContent;

  userInfoPopup.open();
});
// function openProfileEditForm() {
//   userInfo.getUserInfo({
//     name: (config.profileTitleInput.value =
//       config.profileEditTitle.textContent),
//     description: (config.profileDescriptionInput.value =
//       config.profileEditDescription.textContent),
//   });

//   userInfoPopup.open();
// }
// profileEditOpen.addEventListener("click", openProfileEditForm);

cardAddButton.addEventListener("click", () => {
  addCardPopup.open();
  addFormValidator.resetValidation();
});

// profileForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const titleValue = event.target.title.value;
//   const descriptionValue = event.target.description.value;

//   profileEditTitle.textContent = titleValue;
//   profileEditDescription.textContent = descriptionValue;

//   closePopup(profileEditPopup);
// });

/* Render Card Functions */

// function createCard() {
//   const createdCard = {
//     name: cardNameField.value,
//     link: cardLinkField.value,
//   };
//   const card = new Card(createdCard, cardSelector);
//   return card;
// }

// Section callback

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },

  config.cardGallery
);
cardSection.renderItems();

function renderCard(data) {
  const card = new Card(data, config.cardSelector, (data) => {
    previewPopup.open(data);
  });
  cardSection.addItem(card.getElement());
}

cardAddForm.addEventListener("submit", function (event) {
  event.preventDefault();

  cardGallery.prepend(createCard().getElement());
  addCardPopup.close();
  cardAddForm.reset();
});

// initialCards.forEach(function (cardData) {
//   const card = new Card(cardData, config.cardSelector);
//   config.cardGallery.prepend(card.getElement());
// });

// PopupWithImage callback

const previewPopup = new PopupWithImage(config.imagePopup);
previewPopup.open();

// PopupWithForm callback

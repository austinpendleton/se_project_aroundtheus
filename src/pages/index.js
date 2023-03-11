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

//declaring variables

/* Cards */
const cardAddForm = document.querySelector("#add-card-form");
const profileModal = document.querySelector(config.profileModalSelector);
const profileEditForm = profileModal.querySelector(config.formSelector);
const editFormValidator = new FormValidator(config, profileEditForm);
const addFormValidator = new FormValidator(config, cardAddForm);

editFormValidator.enableValidation();
addFormValidator.enableValidation();

// UserInfo callback

const userInfo = new UserInfo({
  profileNameSelector: config.profileTitleInput,
  profileDescriptionSelector: config.profileDescriptionInput,
});

/* Toggle Functions */

const cardAddButton = document.querySelector("#add-button");
const profileEditOpen = document.querySelector(".profile__edit");

// profileEditOpen.addEventListener("click", function () {
//   profileTitleInput.value = profileEditTitle.textContent;
//   profileDescriptionInput.value = profileEditDescription.textContent;

//   openPopup(config.profileEditPopup);
// });
function openProfileEditForm() {
  userInfo.getUserInfo({
    name: (config.profileTitleInput.value =
      config.profileEditTitle.textContent),
    description: (config.profileDescriptionInput.value =
      config.profileEditDescription.textContent),
  });

  config.profileEditPopup.open();
}
profileEditOpen.addEventListener("click", openProfileEditForm);

cardAddButton.addEventListener("click", () => {
  openPopup(cardAddPopup);
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

  config.cardSelector
);
cardSection.renderItems();

function renderCard(data) {
  const card = new Card(data, config.cardSelector, (data) => {
    previewPopup.open(data);
  });
  return card.getElement();
}

cardAddForm.addEventListener("submit", function (event) {
  event.preventDefault();

  cardGallery.prepend(createCard().getElement());
  closePopup(cardAddPopup);
  cardAddForm.reset();
});

// initialCards.forEach(function (cardData) {
//   const card = new Card(cardData, config.cardSelector);
//   config.cardGallery.prepend(card.getElement());
// });

// PopupWithImage callback

const previewPopup = new PopupWithImage(config.imagePopup);
previewPopup.setEventListeners();

// PopupWithForm callback

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

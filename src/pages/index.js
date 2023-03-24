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

const cardAddForm = document.querySelector("#add-card-form");
const profileModal = document.querySelector(config.profileModalSelector);
const profileEditForm = profileModal.querySelector(config.formSelector);
const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
const addFormValidator = new FormValidator(validationSettings, cardAddForm);

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

const userInfo = new UserInfo({
  profileNameSelector: profileTitleInput,
  profileDescriptionSelector: profileDescriptionInput,
});

const addCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: ({ title, link }) => {
    const card = createCard({ name: title, link });
    cardSection.addItem(card.getElement());

    addCardPopup.close();
  },
});
addCardPopup.setEventListeners();

const userInfoPopup = new PopupWithForm({
  popupSelector: "#edit-modal",
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data.name, data.description);
  },
});
userInfoPopup.setEventListeners();

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleValue = event.target.title.value;
  const descriptionValue = event.target.description.value;

  profileEditTitle.textContent = titleValue;
  profileEditDescription.textContent = descriptionValue;

  userInfoPopup.close();
});

profileEditOpen.addEventListener("click", function () {
  profileTitleInput.value = profileEditTitle.textContent;
  profileDescriptionInput.value = profileEditDescription.textContent;

  userInfoPopup.open();
});

cardAddButton.addEventListener("click", () => {
  addCardPopup.open();

  addFormValidator.resetValidation();
});

function createCard(data) {
  const card = new Card(data, config.cardSelector);
  return card;
}

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

const previewPopup = new PopupWithImage(config.imagePopup);
previewPopup.setEventListeners();

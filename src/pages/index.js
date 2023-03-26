import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/section.js";
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
  profileNameSelector: profileEditTitle,
  profileDescriptionSelector: profileEditDescription,
});

function renderCard(data) {
  const card = new Card(data, config.cardSelector, (data) => {
    previewPopup.open(data);
  });
  cardSection.addItem(card.getElement());
}

const addCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: ({ title, link }) => {
    renderCard({ name: title, link });

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

  userInfo.setUserInfo(titleValue, descriptionValue);

  userInfoPopup.close();
});

profileEditOpen.addEventListener("click", function () {
  const { name, description } = userInfo.getUserInfo();

  profileTitleInput.value = name;
  profileDescriptionInput.value = description;

  userInfoPopup.open({ name, description });
});

cardAddButton.addEventListener("click", () => {
  addCardPopup.open();

  addFormValidator.resetValidation();
});

const cardSection = new Section(
  { items: initialCards, renderer: renderCard },

  config.cardGallery
);
cardSection.renderItems();

const previewPopup = new PopupWithImage(config.imagePopup);
previewPopup.setEventListeners();

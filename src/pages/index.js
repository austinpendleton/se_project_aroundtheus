import "../pages/index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import UserInfo from "../components/UserInfo.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../utils/api.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import { config, validationSettings } from "../utils/constants.js";

const cardAddForm = document.querySelector("#add-card-form");
const profileModal = document.querySelector(config.profileModalSelector);
const profileEditForm = profileModal.querySelector(config.formSelector);

const cardAddButton = document.querySelector("#add-button");
const profileEditOpen = document.querySelector(".profile__edit");
const profileForm = document.querySelector("#modal-profile-form");
const editAvatarForm = document.querySelector("#avatar-form");
const profileTitleInput = profileForm.querySelector("#owner-name");
const profileDescriptionInput = profileForm.querySelector(
  ".modal__description"
);
const editAvatarButton = document.querySelector(".profile__edit-avatar");

const userInfo = new UserInfo({
  profileNameSelector: config.profileNameSelector,
  profileDescriptionSelector: config.profileDescriptionSelector,
  avatarSelector: config.avatarSelector,
});
const previewPopup = new PopupWithImage("#image-modal");
previewPopup.setEventListeners();

const editFormValidator = new FormValidator(
  validationSettings,
  profileEditForm
);
const addFormValidator = new FormValidator(validationSettings, cardAddForm);
const avatarFormValidator = new FormValidator(
  validationSettings,
  editAvatarForm
);
const addCardPopup = new PopupWithForm({
  popupSelector: "#add-card-modal",
  handleFormSubmit: submitAddCard,
  loadingButtonText: "Saving...",
});
addCardPopup.setEventListeners();

const userInfoPopup = new PopupWithForm({
  popupSelector: "#edit-modal",
  handleFormSubmit: submitEditProfile,
  loadingButtonText: "Saving...",
});
userInfoPopup.setEventListeners();

const avatarForm = new PopupWithForm({
  popupSelector: "#avatar-form",
  handleFormSubmit: submitAvatarForm,
  loadingButtonText: "Saving...",
});
avatarForm.setEventListeners();

editFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();

const delPopup = new PopupWithConfirm("#confirm-del-modal", "Saving...");
delPopup.setEventListeners();

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-12",
  headers: {
    authorization: "f94b04b9-5a38-41e0-84ea-16cace305bef",
    "Content-Type": "application/json",
  },
});
let cardApiSection;
let userId;
api
  .getAppInfo()
  .then(([cardsResponse, userResponse]) => {
    userId = userResponse._id;
    userInfo.setUserInfo(userResponse);
    userInfo.setAvatar(userResponse);

    cardApiSection = new Section(
      {
        items: cardsResponse,
        renderer: renderCard,
      },
      config.cardGallery
    );
    cardApiSection.renderItems();
  })
  .catch((error) => {
    console.log(error);
  });

function renderCard(data) {
  const card = new Card({
    cardData: data,
    cardSelector: config.cardSelector,
    handleCardClick: (data) => {
      previewPopup.open(data);
    },
    handleLikeClick: (cardId, isLiked) => {
      if (!card.isLiked()) {
        api
          .addLikes(cardId)
          .then((res) => {
            card.updateLikes(res.likes);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        api
          .removeLikes(cardId)
          .then((res) => {
            card.updateLikes(res.likes);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    handleDeleteClick(cardId) {
      delPopup.setSubmit(() => {
        delPopup.showLoading();
        return api
          .deleteCard(cardId)
          .then(() => {
            cardApiSection.removeCard();
            delPopup.close();
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            delPopup.hideLoading();
          });
      });
      delPopup.open();
    },
  });
  cardApiSection.addItem(card.getElement());
}

function submitAvatarForm({ avatar }) {
  avatarForm.showLoading();
  return api
    .updateAvatar(avatar)
    .then((res) => {
      userInfo.setAvatar({ avatar: res.avatar });
    })
    .then(() => {
      this.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      avatarForm.hideLoading();
    });
}
function submitAddCard({ name, link }) {
  addCardPopup.showLoading();
  return api
    .addNewCard(name, link)
    .then((res) => {
      renderCard(res, cardApiSection);
    })
    .then(() => {
      this.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      addCardPopup.hideLoading();
    });
}

profileEditOpen.addEventListener("click", function () {
  const { name, description } = userInfo.getUserInfo();

  profileTitleInput.value = name;
  profileDescriptionInput.value = description;

  userInfoPopup.open({ name, description });
});

function submitEditProfile(inputValues) {
  userInfoPopup.showLoading();
  return api
    .updateProfileInfo(inputValues.title, inputValues.subtitle)
    .then(() => {
      userInfo.setUserInfo({
        name: inputValues.title,
        about: inputValues.subtitle,
      });
      userInfoPopup.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      userInfoPopup.hideLoading();
    });
}

cardAddButton.addEventListener("click", () => {
  addCardPopup.open();

  addFormValidator.resetValidation();
});

editAvatarButton.addEventListener("click", () => {
  avatarForm.open();
});

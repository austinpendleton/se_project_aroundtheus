export const validationSettings = {
  formSelector: ".modal__container",
  inputSelector: ".modal__input",
  submitButtonSelector: "#card-submit-button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible",
};

export const initialCards = [
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

//   const cardGallery = document.querySelector(".cards__gallery");

// /* Buttons */

// const cardAddButton = document.querySelector("#add-button");

// const profileEditOpen = document.querySelector(".profile__edit");

// const imagePreviewClose = document.querySelector("#image-close");

// /* Popup */

// const cardAddPopup = document.querySelector("#add-card-modal");
// const cardAddCloseButton = cardAddPopup.querySelector("#close-button");
// const cardAddForm = document.querySelector("#add-card-form");
// const cardNameField = document.querySelector("#card-name");
// const cardLinkField = document.querySelector("#card-link");

// const imagePopup = document.querySelector("#image-modal");
// const profileEditPopup = document.querySelector("#edit-modal");
// const profileEditClose = profileEditPopup.querySelector(".modal__close");

// const profileForm = document.querySelector("#modal-profile-form");
// const profileEditTitle = document.querySelector(".profile__title");
// const profileEditDescription = document.querySelector(".profile__subtitle");
// const profileTitleInput = profileForm.querySelector(".modal__name");
// const profileDescriptionInput = profileForm.querySelector(
//   ".modal__description"
// );

// /* Template */

// const cardSelector = "#card-template";

export const config = {
  cardNameField: "#card-name",
  cardLinkField: "#card-link",
  profileTitleInput: ".modal__input",
  profileDescriptionInput: ".modal__description",
  imagePopup: "#image-modal",
  cardAddPopup: "#add-card-modal",
  cardAddForm: "#add-card-form",
  cardGallery: ".cards__gallery",
  cardSelector: "#card-template",
  profileEditDescription: ".profile__subtitle",
  profileEditTitle: ".profile__title",
  profileFormSelector: "#modal-profile-form",
  profileEditClose: ".modal__close",
  profileEditPopup: "#edit-modal",
  cardAddCloseButton: "#close-button",
  imagePreviewClose: "#image-close",
  profileEditOpen: ".profile__edit",
  cardAddButton: "#add-button",
  profileModalSelector: ".modal",
  formSelector: ".modal__container",
  popupSelector: ".modal__opened",
};

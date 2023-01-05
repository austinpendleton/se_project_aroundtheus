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
const profileEditOpen = document.querySelector(".profile__edit");
const profileEditPopup = document.querySelector("#edit-modal");
const profileEditClose = profileEditPopup.querySelector(".modal__close");

const profileForm = document.querySelector("#modal-profile-form");
const profileEditTitle = document.querySelector(".profile__title");
const profileEditDescription = document.querySelector(".profile__subtitle");
const imagePreviewClose = document.querySelector("#image-close");

const profileTitleInput = profileForm.querySelector(".modal__name");
const profileDescriptionInput = profileForm.querySelector(
  ".modal__description"
);

const cardAddPopup = document.querySelector("#add-card-modal");
const cardAddButton = document.querySelector("#add-button");
const cardAddCloseButton = cardAddPopup.querySelector("#close-button");
const cardAddForm = document.querySelector("#add-card-form");

const imagePopup = document.querySelector("#image-modal");

//functions toggle modal
function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", performActionOnEscape);
}

function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", performActionOnEscape);
}

function performActionOnEscape(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".modal_opened");
    closePopup(activePopup);
  }
}

//close on click

function closePopupOnRemoteClick(evt) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("modal__close")
  ) {
    closePopup(evt.target);
  }
}

profileEditPopup.addEventListener("mousedown", closePopupOnRemoteClick);
cardAddPopup.addEventListener("mousedown", closePopupOnRemoteClick);
imagePopup.addEventListener("mousedown", closePopupOnRemoteClick);

function renderCard(cardElement, container) {
  container.prepend(cardElement);
}

//card data add heart button and delete button
function getCardView(cardData) {
  const cardElement = cardTemplate.cloneNode(true);

  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;

  const cardHeartButton = cardElement.querySelector(".card__button");
  cardHeartButton.addEventListener("click", function () {
    cardHeartButton.classList.toggle("card__heart_active");
  });

  const cardDeleteButton = cardElement.querySelector(".card__delete");
  cardDeleteButton.addEventListener("click", function () {
    const cardItem = cardDeleteButton.closest(".card");
    cardItem.remove();
  });

  const imagePreview = cardElement.querySelector(".card__image");
  const imageElement = document.querySelector(".modal__image");
  const imageTitle = document.querySelector(".modal__image-title");

  imagePreview.addEventListener("click", function () {
    openPopup(imagePopup);

    imageElement.src = cardData.link;
    imageElement.alt = cardData.name;
    imageTitle.textContent = cardData.name;
  });

  return cardElement;
}

imagePreviewClose.addEventListener("click", function () {
  closePopup(imagePopup);
});

profileEditOpen.addEventListener("click", function () {
  profileTitleInput.value = profileEditTitle.textContent;
  profileDescriptionInput.value = profileEditDescription.textContent;

  openPopup(profileEditPopup);
});

profileEditClose.addEventListener("click", function () {
  closePopup(profileEditPopup);
});

cardAddButton.addEventListener("click", function () {
  openPopup(cardAddPopup);
});

cardAddCloseButton.addEventListener("click", function () {
  closePopup(cardAddPopup);
});

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleValue = event.target.title.value;
  const descriptionValue = event.target.description.value;

  profileEditTitle.textContent = titleValue;
  profileEditDescription.textContent = descriptionValue;

  closePopup(profileEditPopup);
});

cardAddForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = event.target.title.value;
  const link = event.target.link.value;
  const cardView = getCardView({
    name,
    link,
  });
  renderCard(cardView, cardGallery);

  closePopup(cardAddPopup);

  cardAddForm.reset();
});

const cardGallery = document.querySelector(".cards__gallery");
const cardTemplate =
  document.querySelector("#card-template").content.firstElementChild;

initialCards.forEach(function (cardData) {
  const cardView = getCardView(cardData);
  renderCard(cardView, cardGallery);
});

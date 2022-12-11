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

//Identify edit and close buttons as elements
const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".modal__button");
//Identify modal as an element
const modal = document.querySelector(".modal");
//Find profile elements
const profileName = document.querySelector(".profile__title");
const profileTag = document.querySelector(".profile__subheading");
//Find form input elements
const formInputName = document.querySelector("#name");
const formInputTag = document.querySelector("#about-me");

const editWindow = document.querySelector("#edit-modal-form");
const addWindow = document.querySelector("#add");
const profileAddForm = document.querySelector("#add-form");
const previewPopup = document.querySelector("#preview");
const cardAddCloseButton = addWindow.querySelector("#modal-close");
const modalEditClose = previewPopup.querySelector(".modal__close");
const modalForm = document.querySelector(".modal__form");

//Toggle modal
function toggleModal() {
  modal.classList.toggle("modal_opened");
  //Saved profile details fille in
  if (modal.classList.contains("modal_opened")) {
    formInputName.value = profileName.textContent;
    formInputTag.value = profileTag.textContent;
  }
}
//open modal when click on edit button
editButton.addEventListener("click", toggleModal);
//close when click on close
closeButton.addEventListener("click", toggleModal);
//find form in DOM
const profileFormElement = document.querySelector(".modal__container");
//Form submission handler
function handleProfileFormSubmit(e) {
  e.preventDefault();
  //insert form values and display them on the page
  profileName.textContent = formInputName.value;
  profileTag.textContent = formInputTag.value;

  toggleModal();
}

profileFormElement.addEventListener("submit", handleProfileFormSubmit);
//card element retriever
function getCardElement(data) {
  const cardTemplate = document.querySelector("#card-element").content;

  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  //find card title and image elements
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  //fill in datas name and link to the fields
  cardTitle.textContent = data.name;
  cardImage.src = data.link;
  cardImage.alt = data.name;

  const cardHeartButton = cardElement.querySelector(".card__like-button");
  cardHeartButton.addEventListener("click", function () {
    cardHeartButton.classList.toggle(".card__like-active");
  });

  const cardDeleteButton = cardElement.querySelector(".card__delete");
  cardDeleteButton.addEventListener("click", function () {
    const cardItem = cardDeleteButton.closest(".card");
    cardItem.remove();
  });

  const imagePreview = cardElement.querySelector(".card__image");
  const imagePreviewClose = document.querySelector("#preview-close");

  imagePreview.addEventListener("click", function () {
    toggleModal(previewPopup);
    const imageElement = document.querySelector(".modal__preview-image");
    const imageTitle = document.querySelector(".modal__caption");
    imageElement.src = cardData.link;
    imageElement.alt = cardData.name;
  });

  imagePreviewClose.addEventListener("click", function () {
    toggleModal(previewPopup);
  });

  return cardElement;
}

editWindow.addEventListener("click", function () {
  modalTitleInput.value = profileName.textContent;
  modalDescriptionInput.value = modalEditDescription.textContent;

  toggleModal(modalEditPopup);
});

modalEditClose.addEventListener("click", function () {
  toggleModal(modalEditPopup);
});

cardAddCloseButton.addEventListener("click", function () {
  toggleModal(profileAddForm);
});

modalForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleValue = event.target.title.value;
  const descriptionValue = eventt.target.description.value;

  modalEditTitle.textContent = titleValue;
  modalEditDescription.textContent = descriptionValue;

  toggleModal(modalEditPopup);
});

profileAddForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = event.target.title.value;
  const link = event.target.link.value;
  const cardView = getCardView({
    title,
    link,
  });
});

function prependCard(card) {
  const cardsList = document.querySelector(".cards__list");

  const newCardElement = getCardElement(card);

  cardsList.prepend(newCardElement);
}
//create cards list
initialCards.forEach(prependCard);

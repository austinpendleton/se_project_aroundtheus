const initialCards = [
  {
    name: "Yosemite Valley",
    link: "../images/yosemite-valley.jpg",
  },
  {
    name: "Lake Louise",
    link: "../images/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "../images/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "../images/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "../images/vanoise-national-park.jpg",
  },
  {
    name: "Lago di Braies",
    link: "../images/lago-di-braies.jpg",
  },
];

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".modal-button");

let modal = document.querySelector(".modal");

function toggleModal() {
  modal.classList.toggle("modal__opened");
}

editButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

const profileName = document.querySelector(".profile__name");
const profileTag = document.querySelector(".profile__tag");

const formInputName = document.querySelector("#name");
const formInputTag = document.querySelector("#about-me");

formInputName.value = profileName.textContent;
formInputTag.value = profileTag.textContent;

const profileFormElement = document.querySelector(".modal__form");

function handleProfileSubmit(e) {
  e.preventDefault();

  profileName.textContent = formInputName.value;
  profileTag.textContent = formInputTag.value;

  toggleModal();
}

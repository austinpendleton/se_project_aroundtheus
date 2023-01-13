import { openPopup } from "./utils.js";

class Card {
  constructor(cardData, cardSelector) {
    this._name = cardData.name;
    this._link = cardData.link;

    this._cardSelector = cardSelector;
  }
  _setEventListeners() {
    this._element
      .querySelector(".card__button")
      .addEventListener("click", () => this._handleLikeButton());
    this._element
      .querySelector(".card__delete")
      .addEventListener("click", () => this._handleDeleteButton());
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handlePreviewPicture());
  }
  _handleLikeButton() {
    this._element
      .querySelector(".card__button")
      .classList.toggle(".card__heart_active");
  }
  _handleDeleteButton() {
    this._element.querySelector(".card__delete").closest(".card").remove();
  }
  _handlePreviewPicture() {
    this._preview = document.querySelector("#image-modal");

    const previewLink = this._link;
    const previewAlt = this._name;

    const previewCaption = this._name;
    const modalPreviewImage = this._preview.querySelector(".modal__image");

    const modalPreviewCaption = previewAlt;

    modalPreviewImage.setAttribute("src", previewLink);

    modalPreviewImage.setAttribute("alt", previewAlt);
    this._preview.querySelector(".modal__image-title").textContent = this._name;

    openPopup(this._preview);
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getElement() {
    this._element = this._getTemplate();

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__title").textContent = this._name;
    this._element.querySelector(".card__image").alt = this._name;
    this._setEventListeners();

    return this._element;
  }
}

export default Card;

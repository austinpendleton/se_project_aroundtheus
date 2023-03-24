class Card {
  constructor(cardData, cardSelector, handleCardClick) {
    this._name = cardData.name;
    this._link = cardData.link;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
      .addEventListener("click", () =>
        this._handleCardClick({ link: this._link, name: this._name })
      );
  }
  _handleLikeButton() {
    this._element
      .querySelector(".card__button")
      .classList.toggle("card__heart_active");
  }
  _handleDeleteButton() {
    this._element.remove();
  }
  _handleImagePopup() {
    this._handleCardClick({ name: this._name, link: this._link });
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

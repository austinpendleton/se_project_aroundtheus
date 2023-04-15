class Card {
  constructor({
    cardData,
    cardSelector,
    userId,
    handleCardClick,
    handleLikeClick,
    handleDeleteClick,
  }) {
    this._name = cardData.name;
    this._link = cardData.link;
    this._likes = cardData.likes;
    this._userId = userId;
    this._cardId = cardData._id;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteClick = handleDeleteClick;
  }
  _setEventListeners() {
    this._element
      .querySelector(".card__button")
      .addEventListener("click", () => this._handleLikeClick(this._cardId));
    this._element
      .querySelector(".card__delete")
      .addEventListener("click", () => this._handleDeleteButton());
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleCardClick({ link: this._link, name: this._name })
      );
  }
  // _handleLikeButton() {
  //   this._element
  //     .querySelector(".card__button")
  //     .classList.toggle("card__heart_active");
  // }
  _handleDeleteButton() {
    this._element.remove();
  }
  _handleImagePopup() {
    this._handleCardClick({ name: this._name, link: this._link });
  }
  updateLikes = (likes) => {
    this._likes = likes;
    this.renderLikes();
  };

  isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  renderLikes() {
    this._cardCounter.textContent = this._likes.length;

    if (this.isLiked()) {
      this._likeButton.classList.add("card__heart_active");
    } else {
      this._likeButton.classList.remove("card__heart_active");
    }
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getElement() {
    this._element = this._getTemplate();
    this._cardCounter = this._element.querySelector(".card__like-counter");
    this._likeButton = this._element.querySelector(".card__heart");
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__title").textContent = this._name;
    this._element.querySelector(".card__image").alt = this._name;
    this._setEventListeners();
    this.renderLikes();
    return this._element;
  }
}

export default Card;

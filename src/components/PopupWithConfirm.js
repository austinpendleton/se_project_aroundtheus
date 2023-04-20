import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector, loadingButtonText) {
    super({ popupSelector });
    this._loadingButtonText = loadingButtonText;
    this._formSelector = this._popupElement.querySelector(".modal__container");
    this._submitButton = this._formSelector.querySelector(".modal__button");
    this._submitButtonText = this._submitButton.textContent;
  }
  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });
  }
  setSubmit(handler) {
    this._handleSubmitCallback = handler;
  }
  toggleIsDeleting(isDeleting) {
    if (isDeleting) {
      this._submitButton.textContent = "Deleting...";
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
  toggleIsSaving(isSaving) {
    if (isSaving) {
      this._submitButton.textContent = "Saving...";
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
  showLoading(isLoading) {
    if (isLoading) {
      this._submitButton.textContent = "Loading...";
    } else {
      this._submitButton.textContent = "Yes";
    }
  }
  hideLoading() {
    this._submitButton.textContent = this._submitButtonText;
  }
}

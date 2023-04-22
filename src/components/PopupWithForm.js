import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit, loadingButtonText }) {
    super({ popupSelector });

    this._formSelector = this._popupElement.querySelector(".modal__container");

    this._modalFormInputs =
      this._popupElement.querySelectorAll(".modal__input");
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._popupElement.querySelector(".modal__button");
    this._loadingButtonText = loadingButtonText;
    this._buttonText = this._submitButton.textContent;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", this._handleSubmit);
  }
  showLoading() {
    this._submitButton.textContent = this._loadingButtonText;
  }
  hideLoading() {
    this._submitButton.textContent = this._buttonText;
  }

  _getInputValues() {
    const inputValues = {};

    this._modalFormInputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }
  _handleSubmit = (evt) => {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  };
  close() {
    this._popupSelector.reset();
    super.close();
  }
}

export default PopupWithForm;

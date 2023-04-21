import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit, loadingButtonText) {
    super({ popupSelector });

    this._formSelector = this._popupElement.querySelector(".modal__container");

    this._modalForm = this._popupElement.querySelector(".modal__container");
    this._modalFormInputs =
      this._popupElement.querySelectorAll(".modal__input");
    this._modalFormButton = this._popupElement.querySelector("modal__button");
    this._handleFormSubmit = handleFormSubmit;
    this._submitButton = this._formSelector.querySelector(".modal__button");
    this._loadingButtonText = loadingButtonText;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener("submit", this._handleSubmit);
  }
  showLoading() {
    this._submitButton.textContent = this._loadingButtonText;
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
    super.close();
    this._modalForm.reset();
  }
}

export default PopupWithForm;

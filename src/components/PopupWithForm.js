import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });

    this._modalForm = this._popupElement.querySelector(".modal__container");
    this._modalFormInputs =
      this._popupElement.querySelectorAll(".modal__input");
    this._modalFormButton = this._popupElement.querySelector(
      "modal__container-button"
    );
    this._handleFormSubmit = handleFormSubmit;
  }
  setEventListeners() {
    super.setEventListeners();
    this._modalForm.addEventListener("submit", this._handleSubmit);
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

import Popup from "./popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._imageModalPreview = this._popupElement.querySelector(".modal__image");
    this._textTitlePreview = this._popupElement.querySelector(
      ".modal__image-title"
    );
  }
  open({ link, name }) {
    this._imageModalPreview.src = link;
    this._imageModalPreview.alt = name;
    this._textTitlePreview.textContent = name;
    super.open();
  }
}

export default PopupWithImage;

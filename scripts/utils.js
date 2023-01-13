export function closePopup(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keyup", closePopupOnEscape);
  modal.addEventListener("mousedown", closePopupOnRemoteClick);
}

export function openPopup(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keyup", closePopupOnEscape);
  modal.addEventListener("mousedown", closePopupOnRemoteClick);
}

export function closePopupOnEscape(evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector(".modal_opened");
    closePopup(activePopup);
  }
}

export function closePopupOnRemoteClick(evt) {
  if (
    evt.target === evt.currentTarget ||
    evt.target.classList.contains("modal__close")
  ) {
    closePopup(evt.target);
  }
}

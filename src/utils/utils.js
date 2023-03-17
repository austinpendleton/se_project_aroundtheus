// export function closePopup(modal) {
//   modal.classList.remove(".modal");
//   document.removeEventListener("keyup", closePopupOnEscape);
//   modal.addEventListener("mousedown", closePopupOnRemoteClick);
// }

// export function openPopup(modal) {
//   modal.classList.add(".modal");
//   document.addEventListener("keyup", closePopupOnEscape);
//   modal.addEventListener("mousedown", closePopupOnRemoteClick);
// }

// export function closePopupOnEscape(evt) {
//   if (evt.key === "Escape") {
//     const activePopup = document.querySelector(".modal");
//     closePopup(activePopup);
//   }
// }

// export function closePopupOnRemoteClick(evt) {
//   if (
//     evt.target === evt.currentTarget ||
//     evt.target.classList.contains("modal__close-img")
//   ) {
//     closePopup(evt.currentTarget);
//   }
// }

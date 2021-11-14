const profileButton = document.querySelector(".profile__button");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close");
const popupOverlay = popup.querySelector(".popup__overlay");
const title = document.querySelector(".lead__title");



function open() {
    popup.classList.add("popup_opened");
}

function close() {
    title.textContent = "NEW CONTENT";
    popup.classList.remove("popup_opened");
}

if (profileButton) {
    profileButton.addEventListener('click', open);
}

popupCloseButton.addEventListener('click', close);
popupOverlay.addEventListener('click', close);
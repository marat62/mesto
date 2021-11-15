const profileButton = document.querySelector(".profile__button");
const popup = document.querySelector(".popup");
const popupCloseButton = popup.querySelector(".popup__close");
const popupButton = document.querySelector(".popup__button");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-job");
const title = document.querySelector(".profile__title");
const subTitle = document.querySelector(".profile__subtitle");

function open() {
	popup.classList.add("popup__open");
}

function close() {
	popup.classList.remove("popup__open");
}

profileButton.addEventListener("click", open);
popupCloseButton.addEventListener("click", close);

function save(evt) {
	evt.preventDefault();
	title.textContent = nameInput.value;
	subTitle.textContent = jobInput.value;
}

popupButton.addEventListener('click', save);
popupButton.addEventListener('click', close);

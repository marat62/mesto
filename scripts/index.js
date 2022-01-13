import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
const profileButton = document.querySelector(".profile__button");
const popupProfile = document.querySelector(".popup_type_profile");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-job");
const title = document.querySelector(".profile__title");
const subTitle = document.querySelector(".profile__subtitle");
const popupplace = document.querySelector(".popup_type_place");
const popupadd = document.querySelector(".profile__button-plus");
const buttonCreate = document.querySelector("#button_create");
const inputPlace = document.querySelector("#input-place");
const inputName = document.querySelector("#input-link");
const initialCards = [{
	name: 'Архыз',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
	name: 'Челябинская область',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
	name: 'Иваново',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
	name: 'Камчатка',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
	name: 'Холмогорский район',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
	name: 'Байкал',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];
const enableValidation = ({
	formSelector: '.popup__content',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible'
});
const formProfileValidator = new FormValidator(enableValidation, popupProfile);
const formPlaceValidator = new FormValidator(enableValidation, popupplace);
formProfileValidator.enableValidation();
formPlaceValidator.enableValidation();
const elements = document.querySelector('.cards');

function renderCard() {
	const cardHtml = initialCards.map((item) => {
		const card = new Card('.template', item.name, item.link, item.alt);
		return card.getView()
	});
	elements.append(...cardHtml);
}
renderCard();

function closePopupEsc(evt) {
	if(evt.key === "Escape") {
		const popupopen = document.querySelector(".popup_open");
		closePopup(popupopen);
	}
}

function openPopup(popupProfile) {
	popupProfile.classList.add("popup_open");
	document.addEventListener('keydown', closePopupEsc);
}

function closePopup(popupProfile) {
	popupProfile.classList.remove("popup_open");
	document.removeEventListener('keydown', closePopupEsc);
}

function handleEditProfile(evt) {
	evt.preventDefault();
	title.textContent = nameInput.value;
	subTitle.textContent = jobInput.value;
	closePopup(popupProfile);
}
profileButton.addEventListener("click", () => {
	openPopup(popupProfile);
	nameInput.value = title.textContent;
	jobInput.value = subTitle.textContent;
});

function handleAdd(evt) {
	evt.preventDefault();
	const inpPlace = inputPlace.value;
	const inpLink = inputName.value;
	const cardItem = new Card('.template', inpPlace, inpLink, evt.alt);
	const card = cardItem.getView();
	elements.prepend(card);
	inputPlace.value = '';
	inputName.value = '';
	buttonCreate.classList.add('popup__button_disabled');
	buttonCreate.disabled = true;
	closePopup(popupplace);
}
const popups = document.querySelectorAll('.popup')
popups.forEach((popup) => {
	popup.addEventListener('click', (evt) => {
		if(evt.target.classList.contains('popup_open')) {
			closePopup(popup)
		}
		if(evt.target.classList.contains('popup__close')) {
			closePopup(popup)
		}
	})
})
popupplace.addEventListener("submit", handleAdd);
popupProfile.addEventListener("submit", handleEditProfile);
popupadd.addEventListener("click", () => openPopup(popupplace));
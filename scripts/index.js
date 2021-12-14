const profileButton = document.querySelector(".profile__button");
const popupProfile = document.querySelector(".popup_type_profile");
const profileCloseButton = popupProfile.querySelector(".popup__close");
const popupButton = document.querySelector(".popup__button");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-job");
const title = document.querySelector(".profile__title");
const subTitle = document.querySelector(".profile__subtitle");
const popupplace = document.querySelector(".popup_type_place");
const popupimg = document.querySelector(".popup_type_img");
const popupadd = document.querySelector(".profile__button-plus");
const placeClose = document.querySelector("#place_close");
const popupImgClose = document.querySelector("#img_close")
const like = document.querySelector(".card__like");
const cardsCont = document.querySelector(".cards");
const cardTempl = document.querySelector(".template");
const buttonCreate = document.querySelector("#button_create");
const inputPlace = document.querySelector("#input-place");
const inputName = document.querySelector("#input-link");
const photoBig = popupimg.querySelector(".popup__image");
const photoTitle = popupimg.querySelector(".popup__photo-name");
const overlayProfile = document.querySelector("#overlay-profile");
const overlayPlace = document.querySelector("#overlay-place");
const overlayImg = document.querySelector("#overlay-img");
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

function renderCard() {
	const cardHtml = initialCards.map((item) => {
		return getItem(item);
	});
	cardsCont.append(...cardHtml);
}

function getItem(item) {
	const newItem = cardTempl.content.cloneNode(true);
	const headerEl = newItem.querySelector(".card__text");
	headerEl.textContent = item.name;
	const cardImage = newItem.querySelector(".card__image");
	cardImage.setAttribute("src", item.link);
	cardImage.setAttribute("alt", item.name);

	const buttonDel = newItem.querySelector(".card__delete");
	buttonDel.addEventListener("click", handleDeleteCard);

	const heart = newItem.querySelector(".card__like");
	heart.addEventListener("click", () => heart.classList.toggle("card__like_active"));
	cardImage.addEventListener("click", () => {
		openPopup(popupimg);
		photoBig.src = cardImage.src;
		photoBig.alt = headerEl.textContent;
		photoTitle.textContent = headerEl.textContent;
	});
	return newItem;
}
function closePopupEsc(evt) {
	if (evt.key === "Escape") {
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
	const card = getItem({
		name: inpPlace,
		link: inpLink,
	});
	cardsCont.prepend(card);
	inputPlace.value = '';
	inputName.value = '';
	buttonCreate.classList.add('popup__button_disabled');
    buttonCreate.disabled = true;
	closePopup(popupplace);
}

function handleDeleteCard(event) {
	const targetEl = event.target;
	const lastItem = targetEl.closest(".card");
	lastItem.remove();
}

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
	popup.addEventListener('click', (evt) => {
		if (evt.target.classList.contains('popup_open')) {
			closePopup(popup)
		}
		if (evt.target.classList.contains('popup__close')) {
		  closePopup(popup)
		}
	})
})



popupplace.addEventListener("submit", handleAdd);
popupProfile.addEventListener("submit", handleEditProfile);
profileCloseButton.addEventListener("click", () => closePopup(popupProfile));
popupadd.addEventListener("click", () => openPopup(popupplace));
overlayProfile.addEventListener("click", () => closePopup(popupProfile))
overlayPlace.addEventListener("click", () => closePopup(popupplace))
overlayImg.addEventListener("click", () => closePopup(popupimg))
renderCard();
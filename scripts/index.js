const profileButton = document.querySelector(".profile__button");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");
const popupButton = document.querySelector(".popup__button");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-job");
const title = document.querySelector(".profile__title");
const subTitle = document.querySelector(".profile__subtitle");
const popupplace = document.querySelector("#popup_place");
const popupimg = document.querySelector("#popup_img");
const popupadd = document.querySelector(".profile__button-plus");
const placeClose = document.querySelector("#place_close");
const popupImgClose = document.querySelector("#img_close")
const like = document.querySelector(".card__like");
const cardsCont = document.querySelector(".cards");
const cardTempl = document.querySelector(".template");
const buttonCreate = document.querySelector("#button_create");
const inputPlace = document.querySelector('input[name="place"]');
const inputName = document.querySelector('input[name="link"]');
const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];


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
	buttonDel.addEventListener("click", handleDelete);

	const heart = newItem.querySelector(".card__like");
	heart.addEventListener("click", () =>
		heart.classList.add("card__like_active"));
	cardImage.addEventListener("click", () => {
		openPopup(popupimg);
		const photoBig = popupimg.querySelector(".popup__image");
		const photoTitle = popupimg.querySelector(".popup__photo-name");
		photoBig.src = cardImage.src;
		photoTitle.textContent = headerEl.textContent;
	});




	return newItem;
}

function likeHeart() {
	heart.classList.add("card__like_active");
}

function openPopup(popup) {
	popup.classList.add("popup_open");
}

function closePopup(popup) {
	popup.classList.remove("popup_open");
}

function save(evt) {
	evt.preventDefault();
	title.textContent = nameInput.value;
	subTitle.textContent = jobInput.value;
	closePopup(popup);
}

profileButton.addEventListener("click", () => {
	openPopup(popup);
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
	closePopup(popupplace);
}

function handleDelete(event) {
	const targetEl = event.target;
	const lastItem = targetEl.closest(".card");
	lastItem.remove();
}

popupplace.addEventListener("submit", handleAdd);
popup.addEventListener("submit", save);
popupCloseButton.addEventListener("click", () => closePopup(popup));
placeClose.addEventListener("click", () => closePopup(popupplace));
popupadd.addEventListener("click", () => openPopup(popupplace));
popupImgClose.addEventListener("click", () => closePopup(popupimg))
renderCard();

export default class Card {
	constructor(selector, name, link, alt) {
		this._selector = selector;
		this._name = name;
		this._link = link;
		this._alt = alt;
	}
	_getItem() {
		return document.querySelector(this._selector).content.querySelector('.card').cloneNode(true);
	}
	_deleteCardButton = () => {
		this._element.remove();
	}
	_likeButton = () => {
		this._element.querySelector('.card__like').classList.toggle('card__like_active')
	}
	_openBigPicture = () => {
		const popupImg = document.querySelector(".popup_type_img");
		popupImg.classList.add('popup_open');
		popupImg.querySelector('.popup__photo-name').textContent = this._name;
		popupImg.querySelector('.popup__image').src = this._link;
		popupImg.querySelector(".popup__image").alt = this._alt;
		document.addEventListener('keydown', this._closePopupByEscape);
	}
	_closeBigPicture = () => {
		const popupImg = document.querySelector(".popup_type_img");
		popupImg.classList.remove('popup_open');
		document.removeEventListener('keydown', this._closePopupByEscape); // удаляем слушателя для esc
	}
	_closePopupByEscape = (evt) => {
		if(evt.key === 'Escape') {
			const openPopup = document.querySelector('.popup_open');
			this._closeBigPicture();
		}
	}
	getView() {
		this._element = this._getItem();
		this._element.querySelector('.card__text').textContent = this._name;
		this._element.querySelector('.card__image').src = this._link;
		this._element.querySelector('.card__image').alt = this._alt;
		this._element.querySelector('.card__delete').addEventListener('click', this._deleteCardButton);
		this._element.querySelector('.card__like').addEventListener('click', this._likeButton);
		this._element.querySelector('.card__image').addEventListener('click', this._openBigPicture);
		return this._element
	}
}
import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('.popup__image');
    this._name = this._popup.querySelector('.popup__photo-name');
  }

  open({ link, alt, name }) {
    this._image.src = link;
    this._image.alt = alt ? alt : name;
    this._name.textContent = name;
    super.open();
  }
};

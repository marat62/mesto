export default class Card {
    constructor(selector, name, link, alt) {
        this._selector = selector;
        this._name = name;
        this._link = link;
        this._alt = alt;
    }
    _getItem() { 
        return document
            .querySelector(this._selector)
            .content
            .querySelector('.card')
            .cloneNode(true);
            
    }

    _deleteCardButton = () => {
        this._element.remove();
    }

    _likeButton = () => {
        this._element.querySelector('.card__like').classList.toggle('card__like_active')
    }

    _openBigSize = () => {
        const popupImg = document.querySelector(".popup_type_img");
        popupImg.classList.add('popup_open');
        popupImg.querySelector('.popup__photo-name').textContent = this._name; 
        popupImg.querySelector('.popup__image').src = this._link; 
        popupImg.querySelector(".popup__image").alt = this._alt; 
    }



    getView() {
        this._element = this._getItem();
        this._element.querySelector('.card__text').textContent = this._name; 
        this._element.querySelector('.card__image').src = this._link; 
        this._element.querySelector('.card__image').alt = this._alt; 

      
        this._element.querySelector('.card__delete').addEventListener('click', this._deleteCardButton);

       
        this._element.querySelector('.card__like').addEventListener('click', this._likeButton);

        this._element.querySelector('.card__image').addEventListener('click', this._openBigSize);
       
        this._element.querySelector('.card__image').addEventListener('click', this._openBigSize);

        return this._element
    };
}
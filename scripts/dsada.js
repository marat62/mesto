export default class Popup {
    constructor(popupSelector) {  
      this._popupSelector = popupSelector;
      this._closeButton = this._popupSelector.querySelector('.popup__button_type_close');
      this._popupOverlay = this._popupSelector.querySelector('.popup__overlay');
    }
    
    open() {
        this._popupSelector.classList.add ('popup_opened'); 
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupSelector.classList.remove ('popup_opened'); 
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = (evt) => {
        if(evt.key === "Escape") {
            this.close();                         
        }
    }
    
    setEventListeners () {
        this._closeButton.addEventListener('click', () => {
            this.close();
        });
        
        this._popupOverlay.addEventListener('click', () => {
            this.close();
        });
    }
}

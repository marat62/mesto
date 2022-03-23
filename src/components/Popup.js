export class Popup {
    constructor(popupSelector) {
      this._popup = document.querySelector(popupSelector);;
   
    }
  
    open() {
      this._popup.classList.add('popup_open');
      document.addEventListener('keydown', this._handleEscClose);
    }
  
    close() {
      this._popup.classList.remove('popup_open');
      document.removeEventListener('keydown', this._handleEscClose);
     
      
    }
  
    _handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
   
    setEventListener() {
      document.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup__overlay')) {
          this.close();
        }
        if (evt.target.classList.contains('popup__close')) {
          this.close();
        }
      });
        
     
     
    }
  
  //   removeEventListener() {
  //     document.removeEventListener('keydown', this._handleEscClose);
  //   }
  };


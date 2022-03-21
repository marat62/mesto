export class Popup {
    constructor(selector) {
      this._selector = selector;
   
    }
  
    open() {
      this._selector.classList.add('popup_open');
      document.addEventListener('keydown', this._handleEscClose);
    }
  
    close() {
      this._selector.classList.remove('popup_open');
      document.removeEventListener('keydown', this._handleEscClose);
     
      
    }
  
    _handleEscClose = (evt) => {
      if (evt.key === 'Escape') {
        this.close();
      }
    }
   
    setEventListener() {
      document.addEventListener('keydown', this._handleEscClose);
      this._selector.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup')) {
          this.close();
        }
        if (evt.target.classList.contains('popup__close')) {
          this.close();
        }
      });
        
     
     
    }
  
    removeEventListener() {
      document.removeEventListener('keydown', this._handleEscClose);
    }
  };


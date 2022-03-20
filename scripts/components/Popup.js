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
      
     
    }
  
    removeEventListener() {
      document.removeEventListener('keydown', this._handleEscClose);
    }
  };


export class FormValidator {
	constructor(config, form) {
	  this._formElement = form;
	  this._inputErrorClass = config.inputErrorClass;
	  this._errorClass = config.errorClass;
	  this._inputSelector = config.inputSelector;
	  this._submitButtonSelector = config.submitButtonSelector;
	  this._inactiveButtonClass = config.inactiveButtonClass;
	  this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
	  this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
	}
  
	_showInputError(input, errorMessage) {
	  const errorElement = this._formElement.querySelector(`#${input.id}-error`);
	  input.classList.add(this._inputErrorClass);
	  errorElement.textContent = errorMessage;
	  errorElement.classList.add(this._errorClass);
	}
  
	_hideInputError(input) {
	  const errorElement = this._formElement.querySelector(`#${input.id}-error`);
	  input.classList.remove(this._inputErrorClass);
	  errorElement.classList.remove(this._errorClass);
	  errorElement.textContent = '';
	}
  
	_checkInputValidity(input) {
	  if (!input.validity.valid) {
		this._showInputError(input, input.validationMessage);
	  } else {
		this._hideInputError(input);
	  }
	}
  
	_hasInvalidInput() {
	  return this._inputList.some((input) => {
		return !input.validity.valid;
	  });
	}
  
	_toggleButtonState() {
	  if (this._hasInvalidInput()) {this.deactivateButton()} else {this.activateButton()}
	}
  
	_setEventListeners() {
	  this._toggleButtonState();
	  this._inputList.forEach((input) => {
		input.addEventListener('input', () => {
		  this._checkInputValidity(input);
		  this._toggleButtonState();
		});
	  });
	}
  
	enableValidation() {
	  this._formElement.addEventListener('submit', (evt) => evt.preventDefault());
	  this._setEventListeners();
	}
  
	resetErrors() {
	  this._inputList.forEach((input) => this._hideInputError(input));
	}
  
	deactivateButton() {
	  this._buttonElement.setAttribute('disabled', true);
	  this._buttonElement.classList.add(this._inactiveButtonClass);
	}
  
	activateButton() {
	  this._buttonElement.removeAttribute('disabled');
	  this._buttonElement.classList.remove(this._inactiveButtonClass);
	}
  };
  
const profileButton = document.querySelector(".profile__button");
const popupProfile = document.querySelector(".popup_type_profile");
const popupplace = document.querySelector(".popup_type_place");
const inputPlace = document.querySelector("#input-place");
const inputName = document.querySelector("#input-link");
const formplace = document.querySelector("#form-place");
const popupform = document.querySelector("#form-profile")
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-job");
const title = document.querySelector(".profile__title");
const subTitle = document.querySelector(".profile__subtitle");
const popupadd = document.querySelector(".profile__button-plus");
const buttonCreate = document.querySelector("#button_create");
const listContainer = document.querySelector('.cards');
const profileClose = document.querySelector('#place_close');
const popupimage = document.querySelector('.popup_type_img');
const profileadd = document.querySelector(".popup__button")
const imgclose = document.querySelector("#img_close")
const placeInput = document.querySelector("#input-place");
const imageInput = document.querySelector("#input-link");
const popupclose = document.querySelector(".popup__close");
const enableValidation = {
	formSelector: '.popup__content',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__button',
	inactiveButtonClass: 'popup__button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible'
};
export {
    profileButton,
    popupProfile,
    popupplace,
    inputPlace,
    inputName,
    formplace,
    nameInput,
    jobInput, 
    title, 
    subTitle, 
    popupadd,
    buttonCreate,
    listContainer,
    popupimage,
    popupform,
    profileClose,
    profileadd,
    imgclose,
    enableValidation,
    imageInput,
    placeInput,
    popupclose

};
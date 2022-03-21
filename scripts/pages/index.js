import { Card } from '../components/Card.js';
import {FormValidator} from "../components/FormValidator.js";
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import {
	profileButton,
    popupProfile,
    popupplace,
    formplace,
    nameInput,
    jobInput, 
    title, 
    subTitle, 
	listContainer,
	popupimage,
	popupform,
	profileClose,
	popupadd,
	imgclose,
	enableValidation,
	imageInput,
    placeInput,
	popupclose,
	

  } from '../utils/constants.js';



const initialCards = [{
	name: 'Архыз',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
	name: 'Челябинская область',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
	name: 'Иваново',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
	name: 'Камчатка',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
	name: 'Холмогорский район',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
	name: 'Байкал',
	link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];

// Обработчик сабмита формы добавления места
const handlePlaceFormSubmit = () => {
	const inputPlace = placeInput.value;
	const inputName = imageInput.value;
  
	const addCard = new Section({
	  items: [{
		name: inputPlace,
		link: inputName
	  }],
	  renderer: renderCard,
	},
	  listContainer
	);
  
	addCard.renderItems();
	addCardFormValidator.deactivateButton();
	formplace.reset();
	popupWithPlaceForm.close();
	popupWithPlaceForm.removeEventListener();
  };


// Обработчик формы редактирования профиля
const userInfo = new UserInfo({
	profileTitleSelector: title,
	profilesubTitleSelector: subTitle
  });
  
  const handleProfileFormSubmit = () => {
	const name = nameInput.value;
	const job = jobInput.value;
	userInfo.setUserInfo(name, job);
	popupWithProfileForm.close();
  };
  
  // Попапы
  const popupWithImage = new PopupWithImage(popupimage);
  const popupWithProfileForm = new PopupWithForm(popupProfile, () => {
	handleProfileFormSubmit;
  });
  const popupWithPlaceForm = new PopupWithForm(popupplace, () => {
	handlePlaceFormSubmit;
  });
  
  // Добавление карточки
  const renderCard = (item) => {
	const newCard = new Card({
	  data: item,
	  selector: '.template',
	  handleCardClick: () => popupWithImage.open(item)
	});
	const initialCard = newCard.generate();
	return initialCard;
	cardList.addItem(initialCard);
  };
  
  const cardList = new Section({
	items: initialCards.reverse(),
	renderer: renderCard,
  },
	listContainer
  );
  
  cardList.renderItems();
  
  // Валидация форм
  const editProfileFormValidator = new FormValidator(enableValidation, popupProfile);
  const addCardFormValidator = new FormValidator(enableValidation, formplace);
  
  editProfileFormValidator.enableValidation();
  addCardFormValidator.enableValidation();
  
  // Слушатели формы редактирования профиля
  profileButton.addEventListener('click', () => {
	nameInput.value = title.textContent;
	jobInput.value = subTitle.textContent;
	editProfileFormValidator.activateButton();
	editProfileFormValidator.resetErrors();
	popupWithProfileForm.open();
  });
  
  popupform.addEventListener('submit', handleProfileFormSubmit);

  
  // Слушатели формы добавления карточки
  popupadd.addEventListener('click', () => {
	addCardFormValidator.resetErrors();
	popupWithPlaceForm.open();
  });
  
  formplace.addEventListener('submit', handlePlaceFormSubmit);

  popupWithPlaceForm.setEventListener()
  popupWithProfileForm.setEventListener()
  popupWithImage.setEventListener()

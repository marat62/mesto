
import './index.css';
import { Card } from '../components/Card.js';
import {FormValidator} from "../components/FormValidator.js";
import { PopupWithForm } from '../components/PopupWithForm.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { UserInfo } from '../components/UserInfo.js';
import {
	profileButton,
    popupProfile,
    formplace,
    nameInput,
    jobInput, 
    title, 
    subTitle, 
	listContainer,
	popupadd,
	enableValidation,
	imageInput,
    placeInput,
	initialCards
	

  } from '../utils/constants.js';



  const section = new Section({
	items: initialCards,
	renderer: renderCard,
  },
	listContainer
  );
  
  section.renderItems();


// Обработчик сабмита формы добавления места
const handlePlaceFormSubmit = (data) =>   
{section.addItem(renderCard({
    name: data.place,
    link: data.link
  }))
	

  
	// addCard.renderItems();
	addCardFormValidator.deactivateButton();
	popupWithPlaceForm.close();
	popupWithPlaceForm.removeEventListener();
  };


// Обработчик формы редактирования профиля
const userInfo = new UserInfo({
	profileTitle: title,
	profilesubTitle: subTitle
  });
  
  const handleProfileFormSubmit = () => {
	const name = nameInput.value;
	const job = jobInput.value;
	userInfo.setUserInfo(name, job);
	popupWithProfileForm.close();
  };
  
  // Попапы
  const popupWithImage = new PopupWithImage('.popup_type_img');
  const popupWithProfileForm = new PopupWithForm('.popup_type_profile', 
	handleProfileFormSubmit
  );
  const popupWithPlaceForm = new PopupWithForm('.popup_type_place',
	handlePlaceFormSubmit
  );
  
  // Добавление карточки
  const renderCard = (item) => {
	const newCard = new Card({
	  data: item,
	  popupSelector: '.template',
	  handleCardClick: () => popupWithImage.open(item)
	});
	const initialCard = newCard.generate();
	return initialCard;
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
	const { name, job } = userInfo.getUserInfo() 
	nameInput.value = name
	jobInput.value = job
	editProfileFormValidator.activateButton();
	editProfileFormValidator.resetErrors();
	popupWithProfileForm.open();
  });
    
  // Слушатели формы добавления карточки
  popupadd.addEventListener('click', () => {
	addCardFormValidator.resetErrors();
	popupWithPlaceForm.open();
	addCardFormValidator.deactivateButton();
  });
  
  popupWithPlaceForm.setEventListener()
  popupWithProfileForm.setEventListener()
  popupWithImage.setEventListener()

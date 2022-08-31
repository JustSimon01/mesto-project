import '../page/index.css'; //импорт главного файла стилей 
import {initialCards} from './cards-massive.js';
import {openPopup, closePopup, closeHotkey, closeOverlay, profileFirstUpload, submitProfileForm, profileIconEdit, openProfileEdit, changeAvatar} from './modal.js';
import {createCard, renderCard, addNewPlace} from './card.js';
import {settings, cardUploadSubmitButton, avatarSubmitButton, profileAddButton, cardPopupCloseButton, closeButtons, profileEditButton, profilePopupCloseButton, profileForm, nameInput, fullImagePopupClose, cardUploadForm, cardUploadPopup, cardTemplate, fullImagePopup, avatarEditCloseButton, profileAvatar, profileEditPopup, avatarEditPopup, avatarLinkInput} from './utils.js';
import {showInputError, hideInputError, isValid, setEventListeners, hasInvalidInput, toggleButtonState, enableValidation, inputList, buttonElement, submitDeactivation} from './validate.js';

profileAddButton.addEventListener('click', function(){openPopup(cardUploadPopup)});


// Profile Edit Button
profileEditButton.addEventListener('click', openProfileEdit);


//первичная подгрузка форм
profileFirstUpload();

profileForm.addEventListener('submit', submitProfileForm);


//Загружаем массив карточек
initialCards.forEach((element) =>{
  renderCard(createCard(element.name, element.link), cardTemplate, false);
});

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//Подгрузка карточек пользователем
cardUploadForm.addEventListener('submit', function (evt){addNewPlace(evt); submitDeactivation(cardUploadSubmitButton)});


//редактирование профиля
avatarEditCloseButton.addEventListener('click', function(){closePopup(avatarEditPopup)});
profileAvatar.addEventListener('mouseover', profileIconEdit);
profileAvatar.addEventListener('mouseout', profileIconEdit);
profileAvatar.addEventListener('click', function(){openPopup(avatarEditPopup)});

//подгрузка аватара по ссылке
const avatarForm = document.querySelector('#change-avatar');
avatarForm.addEventListener('submit', function (evt){changeAvatar(evt); submitDeactivation(avatarSubmitButton)});

//новая валидация
enableValidation(settings);
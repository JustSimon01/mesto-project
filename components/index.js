import {initialCards} from './cards-massive.js';
import {openPopup, closePopup, closeHotkey, closeOverlay, profileFirstUpload, submitProfileForm, profileIconEdit, openProfileEdit, changeAvatar} from './modal.js';
import {createCard, renderCard, addNewPlace} from './card.js';
import {profileAddButton, cardPopupCloseButton, profileEditButton, profilePopupCloseButton, profileForm, nameInput, fullImagePopupClose, cardUploadForm, cardUploadPopup, cardTemplate, fullImagePopup, avatarEditCloseButton, profileAvatar, profileEditPopup, avatarEditPopup} from './utils.js';
import {showInputError, hideInputError, isValid, setEventListeners, hasInvalidInput, toggleButtonState, enableValidation} from './validate.js';

profileAddButton.addEventListener('click', function(){openPopup(cardUploadPopup)});
cardPopupCloseButton.addEventListener('click', function(){closePopup(cardUploadPopup)});

// Profile Edit Button
profileEditButton.addEventListener('click', openProfileEdit);
profilePopupCloseButton.addEventListener('click', function(){closePopup(profileEditPopup)});


//Валидация и сохранение профиля

//первичная подгрузка форм
profileFirstUpload();

profileForm.addEventListener('submit', submitProfileForm);

//валидация
enableValidation();

fullImagePopupClose.addEventListener('click', function(){closePopup(fullImagePopup)});

//Загружаем массив карточек
initialCards.forEach((element) =>{
  renderCard(createCard(element.name, element.link), cardTemplate, false);
});

//Подгрузка карточек пользователем
cardUploadForm.addEventListener('submit', addNewPlace);

//редактирование профиля
avatarEditCloseButton.addEventListener('click', function(){closePopup(avatarEditPopup)});
profileAvatar.addEventListener('mouseover', profileIconEdit);
profileAvatar.addEventListener('mouseout', profileIconEdit);
profileAvatar.addEventListener('click', function(){openPopup(avatarEditPopup)});

//подгрузка аватара по ссылке
const avatarForm = document.querySelector('#change-avatar');
avatarForm.addEventListener('submit', changeAvatar);



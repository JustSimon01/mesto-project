//попап открытия картинки
export const fullImagePopup = document.querySelector('.popup__image-container').closest('.popup');
export const fullImagePopupClose = fullImagePopup.querySelector('.popup__close-button');

//кнопки закрытия попапов
export const closeButtons = document.querySelectorAll('.popup__close-button');

//Добавление карточки
export const fullImage = fullImagePopup.querySelector('.popup__image');
export const placeName = fullImagePopup.querySelector('.popup__image-subtitle');
export const cardTemplate = document.querySelector('.cards'); //куда подгружаем
export const card = document.querySelector('#card').content;

//Подгрузка карточек пользователем
export const cardUploadForm = document.querySelector('#cardUpload');
export const cardName = cardUploadForm.querySelector('#card-name-input');
export const cardLink = cardUploadForm.querySelector('#link-input');
export const popupNewCard = cardUploadForm.closest('.popup');

//редактирование профиля
export const profileAvatar = document.querySelector('.profile__avatar');
export const profileIcon = document.querySelector('.profile__avatar-edit');
export const avatarEditPopup = document.querySelector('#change-avatar').closest('.popup');
export const avatarEditCloseButton = avatarEditPopup.querySelector('.popup__close-button');
export const avatarLinkInput = document.querySelector('#avatar-link-input');
export const avatarLink = document.querySelector('#avatar-link-input');
export const avatar = document.querySelector(".profile__avatar");

// Card Add button
export const profileAddButton = document.querySelector('.profile__add-button');
export const cardUploadPopup = document.querySelector('#cardUpload').closest('.popup');
export const cardPopupCloseButton = cardUploadPopup.querySelector('.popup__close-button');

// Profile Edit Button
export const profileEditButton = document.querySelector('.profile__edit-button');
export const profileEditPopup = document.querySelector('#profileEdit').closest('.popup');
export const profilePopupCloseButton = profileEditPopup.querySelector('.popup__close-button');

//Валидация и сохранение профиля
export const profileForm = document.querySelector('#profileEdit');
export const nameInput = profileForm.querySelector('#name-input');
export const profileName = document.querySelector('.profile__name');
export const aboutInput = profileForm.querySelector('#about-input');
export const profileCareer = document.querySelector('.profile__career');

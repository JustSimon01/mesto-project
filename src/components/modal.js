import {nameInput, profileName, aboutInput, profileCareer, profileIcon, profileEditPopup} from './utils.js';

//открыть попап
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeHotkey);
    document.addEventListener('click', closeOverlay);
} 
  
  //закрыть попап
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeHotkey);
    document.removeEventListener('click', closeOverlay);
} 

//закрытие попапа через Esc
export function closeHotkey(evt) {
  const activePopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape'){
    closePopup(activePopup);
  }
}

//закрытие попапа через клик оверлея
export function closeOverlay(evt) {
  const activePopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup_opened')){
    closePopup(activePopup);
  }
}

//первичная подгрузка имени и "о себе" в форму
export function profileFirstUpload(){
  nameInput.value =`${profileName.textContent}`;
  aboutInput.value=`${profileCareer.textContent}`;
};

//связка данных введенных в форму с полями на странице
export function submitProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent=`${nameInput.value}`;
  profileCareer.textContent=`${aboutInput.value}`;
  closePopup(profileEditPopup);
};

//редактирование профиля
export function profileIconEdit(){
profileIcon.classList.toggle('profile__avatar-edit_active');
};

//Profile edit button
export function openProfileEdit (){
aboutInput.value = profileCareer.textContent;
nameInput.value = profileName.textContent;
openPopup(profileEditPopup);
};

export function changeAvatar(evt) {
  evt.preventDefault();
  const avatarEditPopup = document.querySelector('#change-avatar').closest('.popup');
  const avatarLink = document.querySelector('#avatar-link-input');
  const avatar = document.querySelector(".profile__avatar");
  avatar.style.backgroundImage = `url(${avatarLink.value})`;
  evt.target.reset();
  closePopup(avatarEditPopup);
}
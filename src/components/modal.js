import {nameInput, profileName, aboutInput, profileCareer, profileIcon, profileEditPopup, avatarEditPopup, avatarLinkInput, avatar, avatarSubmitButton, profileSubmitButton} from './utils.js';
import {getProfileInfo, patchProfileInfo, patchAvatar} from './api.js'

//открыть попап
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closeHotkey);
    popup.addEventListener('click', closeOverlay);
} 
  
  //закрыть попап
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeHotkey);
    popup.removeEventListener('click', closeOverlay);
} 

//закрытие попапа через Esc
export function closeHotkey(evt) {
  if (evt.key === 'Escape'){
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
}

//закрытие попапа через клик оверлея
export function closeOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')){
    closePopup(evt.target);
  }
}

//первичная подгрузка имени и "о себе" в форму
export function profileFirstUpload(data){
  nameInput.value = data.name; 
  aboutInput.value = data.about; 
};

//связка данных введенных в форму с полями на странице
export function submitProfileForm (evt) {
  evt.preventDefault();
  saving(true, profileSubmitButton);
  patchProfileInfo()
    .then((res) => {
        profileName.textContent=`${nameInput.value}`;
        profileCareer.textContent=`${aboutInput.value}`;
        closePopup(profileEditPopup);
    })
    .finally(() => saving(false, profileSubmitButton))
};

//редактирование профиля
export function openProfileEdit (){
aboutInput.value = profileCareer.textContent;
nameInput.value = profileName.textContent;
openPopup(profileEditPopup);
};

//редактирование аватара (наведение)
export function profileIconEdit(){
  profileIcon.classList.toggle('profile__avatar-edit_active');
  };

// замена аватара
export function changeAvatar(evt) {
  evt.preventDefault();
  saving(true, avatarSubmitButton);
  patchAvatar()
   .then((res)=>{
       avatar.style.backgroundImage = `url(${avatarLinkInput.value})`;
       evt.target.reset();
       closePopup(avatarEditPopup);
   })
   .finally(() => saving(false, avatarSubmitButton))
}

//сохранение
export function saving(isSaving, submitButton) {
  if (isSaving === true){
    submitButton.textContent = 'Сохренение...'
  }else{
    submitButton.textContent = 'Сохранить'
  }
}
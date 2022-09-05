import {nameInput, profileName, aboutInput, profileCareer, profileIcon, profileEditPopup, avatarEditPopup, avatarLinkInput, avatar} from './utils.js';

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

//подгрузка данных профиля с сервера
export function profileInfo () {
  return fetch ('https://mesto.nomoreparties.co/v1/plus-cohort-14/users/me',{
  method: 'GET',
  headers: {
    authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767'
  }
})
  .then((res) => {
    if (res.ok){
      return res.json();
}
  return Promise.reject(res.status);
})
  .then((data)=>{
    profileName.textContent=data.name;
    profileCareer.textContent=data.about;
  })
}



//первичная подгрузка имени и "о себе" в форму
export function profileFirstUpload(){
  nameInput.value =`${profileName.textContent}`;
  aboutInput.value=`${profileCareer.textContent}`;
};

//связка данных введенных в форму с полями на странице
export function submitProfileForm (evt) {
  evt.preventDefault();

  fetch('https://mesto.nomoreparties.co/v1/plus-cohort-14/users/me', {
  method: 'PATCH',
  headers: {
    authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: `${nameInput.value}`,
    about: `${aboutInput.value}`
  })
})
    .then((res) => {
      if (res.ok) {
        profileName.textContent=`${nameInput.value}`;
        profileCareer.textContent=`${aboutInput.value}`;
        closePopup(profileEditPopup);
        return res.json();
      }else{
      return Promise.reject(res.status);}
    })
    .then((data)=>{
      console.log (data);
    })
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
  avatar.style.backgroundImage = `url(${avatarLinkInput.value})`;
  evt.target.reset();
  closePopup(avatarEditPopup);
}
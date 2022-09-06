import '../page/index.css'; //импорт главного файла стилей 
import {openPopup, closePopup, closeHotkey, closeOverlay, profileFirstUpload, submitProfileForm, profileIconEdit, openProfileEdit, changeAvatar} from './modal.js';
import {createCard, renderCard, addNewPlace} from './card.js';
import {settings, cardUploadSubmitButton, avatarSubmitButton, profileAddButton, cardPopupCloseButton, closeButtons, profileEditButton, profileName, profileCareer, avatar, profilePopupCloseButton, profileForm, nameInput, fullImagePopupClose, cardUploadForm, cardUploadPopup, cardTemplate, fullImagePopup, avatarEditCloseButton, profileAvatar, profileEditPopup, avatarEditPopup, avatarLinkInput, aboutInput} from './utils.js';
import {showInputError, hideInputError, isValid, setEventListeners, hasInvalidInput, toggleButtonState, enableValidation, inputList, buttonElement, submitDeactivation} from './validate.js';
import {getCards, getProfileInfo} from './api.js';


//подгрузка данных профиля с сервера
export let id = '';
function profileInfo() {
  getProfileInfo()
  .then((res) => {
    if (res.ok){
      return res.json();
}
  return Promise.reject(res.status);
})
  .then((data)=>{
    profileName.textContent=data.name;
    profileCareer.textContent=data.about;
    avatar.style.backgroundImage=`url(${data.avatar})`;
    return id = `${data._id}`;
  })
}

//запросы к серверу
  // подгрузка данных пользователя
profileInfo()
  // подгрузка карточек с сервера
getCards()
  .then((res)=>{
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
   .then((data)=>{
    data.forEach((element) =>{
    renderCard(createCard(element, id), cardTemplate, false);
  })
  });
//первичная подгрузка форм
profileFirstUpload();

profileAddButton.addEventListener('click', function(){openPopup(cardUploadPopup)});
// Profile Edit Button
profileEditButton.addEventListener('click', openProfileEdit);
//отправка формы
profileForm.addEventListener('submit', submitProfileForm);
//кнопки закрытия
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

//валидация
enableValidation(settings);
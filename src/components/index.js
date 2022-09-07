import '../page/index.css'; //импорт главного файла стилей 
import {openPopup, closePopup, submitProfileForm, profileIconEdit, openProfileEdit, changeAvatar} from './modal.js';
import {createCard, renderCard, addNewPlace, downloadCards} from './card.js';
import {settings, cardUploadSubmitButton, avatarSubmitButton, profileAddButton, closeButtons, profileEditButton, profileName, profileCareer, avatar, profileForm, nameInput, cardUploadForm, cardUploadPopup, cardTemplate, avatarEditCloseButton, profileAvatar, avatarEditPopup, aboutInput} from './utils.js';
import {enableValidation,submitDeactivation} from './validate.js';
import {getCards, getProfileInfo, getResponseData} from './api.js';

export let id = '';

//подгрузка данных профиля с сервера
function profileInfo() {
return getProfileInfo()
  .then((res) => {
    return getResponseData(res);
})
}

// подгрузка карточек с сервера
function uploadCards(){
  return getCards()
  .then((res)=>{
    return getResponseData(res);
  })
}

//запросы к серверу
Promise.all([profileInfo(), uploadCards()])
.then(([data, res])=>{
  profileName.textContent=data.name;
  profileCareer.textContent=data.about;
  nameInput.value = data.name;
  aboutInput.value = data.about;
  avatar.style.backgroundImage=`url(${data.avatar})`;
  downloadCards(res, data._id);
  enableValidation(settings); //запускаем валидацию после подгрузки всех полей (что бы не срабатывала на пустые поля)
  return id = `${data._id}`;
})
  .catch((err)=>{
  console.log(err);
 }) 

 //Add card button
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
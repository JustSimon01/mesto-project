import '../page/index.css'; //импорт главного файла стилей 
import {initialCards} from './cards-massive.js';
import {openPopup, closePopup, closeHotkey, closeOverlay, profileFirstUpload, submitProfileForm, profileIconEdit, openProfileEdit, changeAvatar, profileInfo} from './modal.js';
import {createCard, renderCard, addNewPlace} from './card.js';
import {settings, cardUploadSubmitButton, avatarSubmitButton, profileAddButton, cardPopupCloseButton, closeButtons, profileEditButton, profilePopupCloseButton, profileForm, nameInput, fullImagePopupClose, cardUploadForm, cardUploadPopup, cardTemplate, fullImagePopup, avatarEditCloseButton, profileAvatar, profileEditPopup, avatarEditPopup, avatarLinkInput, id} from './utils.js';
import {showInputError, hideInputError, isValid, setEventListeners, hasInvalidInput, toggleButtonState, enableValidation, inputList, buttonElement, submitDeactivation} from './validate.js';
profileInfo();
console.log(initialCards);

profileAddButton.addEventListener('click', function(){openPopup(cardUploadPopup)});


// Profile Edit Button
profileEditButton.addEventListener('click', openProfileEdit);


//первичная подгрузка форм
profileFirstUpload();

profileForm.addEventListener('submit', submitProfileForm);

console.log(initialCards);
//Загружаем массив карточек
/*
initialCards.forEach((element) =>{
  renderCard(createCard(element.name, element.link, element.likes), cardTemplate, false);
});
*/

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

//запросы к серверу
  // подгрузка карточек с сервера

fetch ('https://mesto.nomoreparties.co/v1/plus-cohort-14/cards',{
  method: 'GET',
  headers: {
    authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767'
  }
})
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    console.log (data[0], data[1], data[4]);
    data.forEach((element) =>{
        renderCard(createCard(element, id), cardTemplate, false);
    });
  });



  /*логика изменения аватара
1) функция запроса аватара и данных с сервера
2) функция отправки новых данных на сервер
принцип работы:
1) первично подгружаем данные с сервера при открытии страницы
2) меняем данные в форме
3) отправляем данные на сервер
3.1) если успешно - прописываем в форму
3.2) если ошибка - пишем об ошибке в консоли
4) закрываем попап
поля получающие/отправляющие данные на сервер:
name-input
about-input
  */
   /* подгрузка карточек
1) функция запроса массива карточек с сервера
2) функция отправки новых карточек пользователя на сервер
3) функция удаления своей карточки с сервера (подвязываем id?)
4) учета количества лайков
принцип работы:
1) первично подгружаем массив карточек с сервера при старте страницы
2) при подгрузке карточки пользователем - отправляем данные на сервер
3) отрисовываем карточку в dom
поля получающие/отправляющие данные на сервер:
card-name-input
link-input
функции отрисовки
функции лайков

отрисовать лайк
  */
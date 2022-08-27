//открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeHotkey);
  document.addEventListener('click', closeOverlay);
} 

//закрыть попап
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeHotkey);
    document.removeEventListener('click', closeOverlay);
} 

//закрытие попапа через Esc
function closeHotkey(evt) {
  const activePopup = document.querySelector('.popup_opened');
  if (evt.key === 'Escape'){
    console.log(evt);
    closePopup(activePopup);
  }
}

//закрытие попапа через клик оверлея
function closeOverlay(evt) {
  const activePopup = document.querySelector('.popup_opened');
  if (evt.target.classList.contains('popup_opened')){
    closePopup(activePopup);
  }
}

// Card Add button
const profileAddButton = document.querySelector('.profile__add-button');
const cardUploadPopup = document.querySelector('#cardUpload').closest('.popup');
const cardPopupCloseButton = cardUploadPopup.querySelector('.popup__close-button');
profileAddButton.addEventListener('click', function(){openPopup(cardUploadPopup)});
cardPopupCloseButton.addEventListener('click', function(){closePopup(cardUploadPopup)});

// Profile Edit Button
const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditPopup = document.querySelector('#profileEdit').closest('.popup');
const profilePopupCloseButton = profileEditPopup.querySelector('.popup__close-button');

function openProfileEdit (){
  aboutInput.value = profileCareer.textContent;
  nameInput.value = profileName.textContent;
  openPopup(profileEditPopup);
};

profileEditButton.addEventListener('click', openProfileEdit);
profilePopupCloseButton.addEventListener('click', function(){closePopup(profileEditPopup)});


//Валидация и сохранение профиля
const profileForm = document.querySelector('#profileEdit');
const nameInput = profileForm.querySelector('#name-input');
const aboutInput = profileForm.querySelector('#about-input');
const profileName = document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');

//первичная подгрузка форм
function profileFirstUpload(){
  nameInput.value =`${profileName.textContent}`;
  aboutInput.value=`${profileCareer.textContent}`;
};

profileFirstUpload();

function submitProfileForm (evt) {
  evt.preventDefault();
  profileName.textContent=`${nameInput.value}`;
  profileCareer.textContent=`${aboutInput.value}`;
  closePopup(profileEditPopup);
};
profileForm.addEventListener('submit', submitProfileForm);
nameInput.addEventListener('input', function (evt) {
console.log(evt.target.validity.valid);
}); 

//функции показа ошибки

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  console.log (errorElement);
  inputElement.classList.add('popup__input_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_error');
  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_active');
};
//проверка валидности поля
const isValid = (formElement, inputElement) => {
  if (inputElement.validity.patternMismatch) {
    inputElement.setCustomValidity(inputElement.dataset.errorMessage);
  } else {
    inputElement.setCustomValidity("");
  }

  if (!inputElement.validity.valid){
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  };
};
//слушатели событий для всех элементов формы
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save-button');
  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
  inputElement.addEventListener('input', () => {
    isValid(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
  })
})
};

//проверяем прошла ли валидация
const hasInvalidInput = (inputList) =>{
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

//отключение кнопки сохранения
const toggleButtonState = (inputList, buttonElement) =>{
  if(hasInvalidInput(inputList)){
    buttonElement.classList.add('popup__save-button_disabled');
  } else {
    buttonElement.classList.remove('popup__save-button_disabled');
  }
};


//добавляем обработчики всем формам
const enableValidation = () =>{
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
  });
  setEventListeners(formElement);
});
};

enableValidation();


//попап открытия картинки
const fullImagePopup = document.querySelector('.popup__image-container').closest('.popup');
const fullImagePopupClose = fullImagePopup.querySelector('.popup__close-button');

fullImagePopupClose.addEventListener('click', function(){closePopup(fullImagePopup)});

//Добавление карточки
const fullImage = fullImagePopup.querySelector('.popup__image');
const placeName = fullImagePopup.querySelector('.popup__image-subtitle');
const cardTemplate = document.querySelector('.cards'); //куда подгружаем
const card = document.querySelector('#card').content;


function createCard (cardName, cardLink) {
  const cardElement = card.querySelector('.card').cloneNode(true);
  const cardPicture = cardElement.querySelector('.card__image');
  const cardText = cardElement.querySelector('.card__text');
        cardPicture.src=cardLink;
        cardPicture.alt=cardName;
        cardText.textContent=cardName;
      
  const deleteButton = cardElement.querySelector('.card__delete-button');
      deleteButton.addEventListener('click', function (evt) {
      evt.target.closest('.card').remove();
  });

  const likeButton = cardElement.querySelector('.like-button');
      likeButton.addEventListener('click', function(evt){
      evt.target.classList.toggle('like-button_active');
  });
  
  const cardImage = cardElement.querySelector('.card__image');
      cardImage.addEventListener('click', function (evt) {
      fullImage.src = cardImage.src;
      fullImage.alt = cardImage.alt;
      placeName.textContent = cardImage.alt;
      openPopup(fullImagePopup);
  });
return cardElement; 
}

function renderCard(card, container, isPrepend=true) {
  if (isPrepend) {
      container.prepend(card);
  } else {
      container.append(card);
  }
} 

//Загружаем массив
initialCards.forEach((element) =>{
  renderCard(createCard(element.name, element.link), cardTemplate, false);
});

//Подгрузка карточек пользователем
const cardUploadForm = document.querySelector('#cardUpload');

function addNewPlace (evt){
  evt.preventDefault();
  const cardName = cardUploadForm.querySelector('.popup__input').value;
  const cardLink = cardUploadForm.querySelector('.popup__field-two').value;
 renderCard(createCard(cardName, cardLink), cardTemplate, true);
  const popupClose = cardUploadForm.closest('.popup');
  popupClose.classList.remove('popup_opened');
  evt.target.reset();
};
cardUploadForm.addEventListener('submit', addNewPlace);

//редактирование профиля
const profileAvatar = document.querySelector('.profile__avatar');
const profileIcon = document.querySelector('.profile__avatar-edit');
const avatarEditPopup = document.querySelector('#change-avatar').closest('.popup');
const avatarEditCloseButton = avatarEditPopup.querySelector('.popup__close-button');

avatarEditCloseButton.addEventListener('click', function(){closePopup(avatarEditPopup)});

function profileIconEdit(){
  profileIcon.classList.toggle('profile__avatar-edit_active');
};
profileAvatar.addEventListener('mouseover', profileIconEdit);
profileAvatar.addEventListener('mouseout', profileIconEdit);
profileAvatar.addEventListener('click', function(){openPopup(avatarEditPopup)});

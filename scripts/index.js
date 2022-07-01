//Cards
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

//Popup Close button
const closeButton = document.querySelectorAll('.popup__close-button');
closeButton.forEach(function (item) {
    item.addEventListener('click', function (evt) {
    evt.target.closest('.popup').classList.toggle('popup_opened');
    });
});

// Card Add button
let profileAddButton = document.querySelector('.profile__add-button');
function openAddPopup(){
    let popupOpened = document.querySelector('#cardUpload').closest('.popup');
    popupOpened.classList.add('popup_opened');
}
profileAddButton.addEventListener('click', openAddPopup);

// Profile Edit Button
let profileEditButton = document.querySelector('.profile__edit-button');
function openEditPopup(){
    let popupOpened = document.querySelector('#profileEdit').closest('.popup');
    popupOpened.classList.add('popup_opened');
}
profileEditButton.addEventListener('click', openEditPopup);

//Profile Save Button
//находим форму  редактирования профиля
let profileForm = document.querySelector('#profileEdit');
let nameInput = profileForm.querySelector('.popup__field-one');
let jobInput = profileForm.querySelector('.popup__field-two');
let profileName = document.querySelector('.profile__name');
let profileCareer = document.querySelector('.profile__career');

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent=`${nameInput.value}`;
    profileCareer.textContent=`${jobInput.value}`;

    let popupClose = profileForm.closest('.popup');
    popupClose.classList.remove('popup_opened');
};
profileForm.addEventListener('submit', formSubmitHandler);
 
//Добавление карточки
let fullImagePopup = document.querySelector('.popup__image-container');
let fullImage = fullImagePopup.querySelector('.popup__image');
let placeName = fullImagePopup.querySelector('.popup__image-subtitle');
let cardTemplate = document.querySelector('.cards'); //куда подгружаем
let card = document.querySelector('#card').content;
//В функции loadType определяет как карточка будет подгружаться (с начала или с конца)
function cardAdd (cardName, cardLink, loadType) {
  let cardElement = card.querySelector('.card').cloneNode(true);
      cardElement.querySelector('.card__image').src=cardLink;
      cardElement.querySelector('.card__image').alt=cardName;
      cardElement.querySelector('.card__text').textContent=cardName;
      //massive - для append загрузки карточек(в конец), user - для prepend (в начало)
      if (loadType === 'massive') {
        cardTemplate.append(cardElement);
      } else if (loadType === 'user')
      {
        cardTemplate.prepend(cardElement);
      }

  let deleteButton = cardElement.querySelector('.card__delete-button');
      deleteButton.addEventListener('click', function (evt) {
      evt.target.closest('.card').remove();
  });

  let likeButton = cardElement.querySelector('.like-button');
      likeButton.addEventListener('click', function(evt){
      evt.target.classList.toggle('like-button_active');
  });
  
  let cardImage = cardElement.querySelector('.card__image');
      cardImage.addEventListener('click', function (evt) {
      fullImage.src = cardImage.src;
      fullImage.alt = cardImage.alt;
      placeName.textContent = cardImage.alt
      fullImagePopup.closest('.popup').classList.toggle('popup_opened');
  });

}

//Загружаем массив
initialCards.forEach((element) =>{
  cardAdd (element.name, element.link, 'massive');
});

//Подгрузка карточек пользователем
//Находим форму для подгрузки картинок
let cardUploadForm = document.querySelector('#cardUpload');

function addNewPlace (evt){
  evt.preventDefault();
  const cardName = cardUploadForm.querySelector('.popup__field-one').value;
  const cardLink = cardUploadForm.querySelector('.popup__field-two').value;
cardAdd(cardName, cardLink, 'user');
  let popupClose = cardUploadForm.closest('.popup');
  popupClose.classList.remove('popup_opened');
  evt.target.reset();
};
cardUploadForm.addEventListener('submit', addNewPlace);
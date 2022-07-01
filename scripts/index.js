//открыть попап
function openPopup(popup) {
  popup.classList.add('popup_opened');
} 

//закрыть попап
function closePopup(popup) {
    popup.classList.remove('popup_opened');
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
  jobInput.value = profileCareer.textContent;
  nameInput.value = profileName.textContent;
  openPopup(profileEditPopup);
};

profileEditButton.addEventListener('click', openProfileEdit);
profilePopupCloseButton.addEventListener('click', function(){closePopup(profileEditPopup)});

//Profile Save Button
const profileForm = document.querySelector('#profileEdit');
const nameInput = profileForm.querySelector('.popup__field-one');
const jobInput = profileForm.querySelector('.popup__field-two');
const profileName = document.querySelector('.profile__name');
const profileCareer = document.querySelector('.profile__career');

function submitProfileForm (evt) {
    evt.preventDefault();
    profileName.textContent=`${nameInput.value}`;
    profileCareer.textContent=`${jobInput.value}`;
    closePopup(profileEditPopup);
};
profileForm.addEventListener('submit', submitProfileForm);
 
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
      placeName.textContent = cardImage.alt
      fullImagePopup.closest('.popup').classList.toggle('popup_opened');
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
  const cardName = cardUploadForm.querySelector('.popup__field-one').value;
  const cardLink = cardUploadForm.querySelector('.popup__field-two').value;
 renderCard(createCard(cardName, cardLink), cardTemplate, true);
  const popupClose = cardUploadForm.closest('.popup');
  popupClose.classList.remove('popup_opened');
  evt.target.reset();
};
cardUploadForm.addEventListener('submit', addNewPlace);
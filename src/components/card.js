import {card, cardTemplate, fullImage, placeName, fullImagePopup, cardUploadForm, cardName, cardLink} from './utils.js';
import {openPopup, closePopup} from './modal.js';

//Добавление карточки
export function createCard (cardName, cardLink) {
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

export function renderCard(card, container, isPrepend=true) {
  if (isPrepend) {
      container.prepend(card);
  } else {
      container.append(card);
  }
} 

//Подгрузка карточек пользователем
export function addNewPlace (evt){
  evt.preventDefault();
  renderCard(createCard((cardName.value), (cardLink.value)), cardTemplate, true);
  const popupNewCard = cardUploadForm.closest('.popup');
  closePopup(popupNewCard);
  evt.target.reset();
};
import {card, cardTemplate, fullImage, placeName, fullImagePopup, popupNewCard, cardName, cardLink, cardUploadSubmitButton} from './utils.js';
import {openPopup, closePopup, saving} from './modal.js';
import {deleteCard, addLike, deleteLike, addCard} from './api.js'
import {id} from './index.js'

//Добавление карточки
export function createCard (cardData, id) {
  const cardElement = card.querySelector('.card').cloneNode(true);
  const cardPicture = cardElement.querySelector('.card__image');
  const cardText = cardElement.querySelector('.card__text');
        cardPicture.src=cardData.link;
        cardPicture.alt=cardData.name;
        cardText.textContent=cardData.name;    
  const deleteButton = cardElement.querySelector('.card__delete-button');
  if (id === cardData.owner._id){
    deleteButton.addEventListener('click', function (evt) {
      deleteCard(cardData)
        .then((res) => {
           if (res.ok) {
           evt.target.closest('.card').remove();
          }
          })
      })
  }else{
    deleteButton.classList.add('card__delete-button_disabled');
  }

  const likeButton = cardElement.querySelector('.like-button');
  const likeCount = cardElement.querySelector('.like__count');
  likeCount.textContent =  Number(cardData.likes.length);
  likeButton.addEventListener('click', function(evt){
    if(!evt.target.classList.contains('like-button_active')) {
      addLike(cardData)
      .then((res) =>{
        if (res.ok) {
          evt.target.classList.add('like-button_active');
          likeCount.textContent = Number(likeCount.textContent) + 1;
         }
      })
    }else{
      deleteLike(cardData)
      .then((res) =>{
        if (res.ok) {
          evt.target.classList.remove('like-button_active');
          likeCount.textContent = Number(likeCount.textContent) - 1;
         }
      })
     }
  });
  cardData.likes.forEach(element => {
    if (element._id === id){
      likeButton.classList.add('like-button_active');
    }
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
  saving(true, cardUploadSubmitButton);
  addCard()
  .then((res)=>{
    if (res.ok) {
    return res.json();
    }
    return Promise.reject(res.status);
  })
  .then((data)=>{
    renderCard(createCard(data, id), cardTemplate, true)
    closePopup(popupNewCard);
    evt.target.reset();
  })
  .finally(() => saving(false, cardUploadSubmitButton))
};
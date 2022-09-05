import {card, cardTemplate, fullImage, placeName, fullImagePopup, popupNewCard, cardName, cardLink, id} from './utils.js';
import {openPopup, closePopup} from './modal.js';

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
    console.log(cardData._id);
    deleteButton.addEventListener('click', function (evt) {
      fetch (`https://mesto.nomoreparties.co/v1/plus-cohort-14/cards/${cardData._id}`,{
        method: 'DELETE',
        headers: {
        authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767'}
      })  
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
  likeCount.textContent = cardData.likes.length;
  
  likeButton.addEventListener('click', function(evt){
        if(!evt.target.classList.contains('like-button_active')) {
          fetch(`https://mesto.nomoreparties.co/v1/plus-cohort-14/cards/likes/${cardData._id}`,{
            method: 'PUT',
            headers: {
            authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767'}
          })
          .then((res) =>{
            if (res.ok) {
              evt.target.classList.add('like-button_active');
             }
          })
        }else{
          fetch(`https://mesto.nomoreparties.co/v1/plus-cohort-14/cards/likes/${cardData._id}`,{
            method: 'DELETE',
            headers: {
            authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767'}
          })
          .then((res) =>{
            if (res.ok) {
              evt.target.classList.remove('like-button_active');
             }
          })
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

fetch ('https://nomoreparties.co/v1/plus-cohort-14/cards', {
  method: 'POST',
  headers: {
    authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: `${cardName.value}`,
    link: `${cardLink.value}`
  })
})
  .then((res)=>{
    return res.json();
  })
  .then((data)=>{
    console.log (data);
    renderCard(createCard(cardData, id), cardTemplate, true)
    closePopup(popupNewCard);
    evt.target.reset();
  })
};

//    renderCard(createCard(element.name, element.link, element.likes), cardTemplate, false);
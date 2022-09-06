import {nameInput, aboutInput, avatarLinkInput, cardName, cardLink} from './utils.js';

export function getProfileInfo() {
    return fetch ('https://mesto.nomoreparties.co/v1/plus-cohort-14/users/me',{
    method: 'GET',
    headers: {
      authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767'
    }
  })
}

export function patchProfileInfo() {
  return fetch('https://mesto.nomoreparties.co/v1/plus-cohort-14/users/me', {
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
}

export function patchAvatar() {
  return fetch('https://nomoreparties.co/v1/plus-cohort-14/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: `${avatarLinkInput.value}`
    })
  })
}

export function getCards() {
  return fetch ('https://mesto.nomoreparties.co/v1/plus-cohort-14/cards',{
    method: 'GET',
    headers: {
      authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767'
    }
  })
};

export function deleteCard(cardData) {
  return fetch (`https://mesto.nomoreparties.co/v1/plus-cohort-14/cards/${cardData._id}`,{
    method: 'DELETE',
    headers: {
      authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767'}
  })
};

export function addLike(cardData) {
  return fetch(`https://mesto.nomoreparties.co/v1/plus-cohort-14/cards/likes/${cardData._id}`,{
    method: 'PUT',
    headers: {
      authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767'}
      })
}

export function deleteLike(cardData) {
  return fetch(`https://mesto.nomoreparties.co/v1/plus-cohort-14/cards/likes/${cardData._id}`,{
    method: 'DELETE',
    headers: {
      authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767'}
    })
}

export function addCard() {
  return fetch ('https://nomoreparties.co/v1/plus-cohort-14/cards', {
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
}

export function changeProfileForm() {
  return fetch('https://mesto.nomoreparties.co/v1/plus-cohort-14/users/me', {
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
}
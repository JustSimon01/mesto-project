import {nameInput, aboutInput, avatarLinkInput, cardName, cardLink} from './utils.js';

export const config = {
  baseURL: 'https://mesto.nomoreparties.co/v1/plus-cohort-14',
  headers: {
    authorization: 'bff12cd7-d8f7-418f-b6b2-2cd8334e6767',
    'Content-Type': 'application/json'
  }
}

export function getProfileInfo() {
    return fetch (`${config.baseURL}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
}

export function patchProfileInfo() {
  return fetch(`${config.baseURL}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${nameInput.value}`,
      about: `${aboutInput.value}`
    })
  })
}

export function patchAvatar() {
  return fetch(`${config.baseURL}/users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: `${avatarLinkInput.value}`
    })
  })
}

export function getCards() {
  return fetch (`${config.baseURL}/cards`,{
    method: 'GET',
    headers: config.headers
  })
};

export function deleteCard(cardData) {
  return fetch (`${config.baseURL}/cards/${cardData._id}`,{
    method: 'DELETE',
    headers: config.headers
  })
};

export function addLike(cardData) {
  return fetch(`${config.baseURL}/cards/likes/${cardData._id}`,{
    method: 'PUT',
    headers: config.headers
      })
}

export function deleteLike(cardData) {
  return fetch(`${config.baseURL}/cards/likes/${cardData._id}`,{
    method: 'DELETE',
    headers: config.headers
    })
}

export function addCard() {
  return fetch (`${config.baseURL}/cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: `${cardName.value}`,
      link: `${cardLink.value}`
    })
})
}

export function changeProfileForm() {
  return fetch(`${config.baseURL}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: `${nameInput.value}`,
      about: `${aboutInput.value}`
    })
  })
}


//проверка запросов
export function getResponseData(res) {
  if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`); 
  }
  return res.json();
} 

let closeButton = document.querySelector('.popup__close-button');
let popupClose = document.querySelector('.popup');

function closePopup(){

popupClose.classList.remove('popup_opened');

}

closeButton.addEventListener('click', closePopup);
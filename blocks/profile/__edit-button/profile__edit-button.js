let profileEditButton = document.querySelector('.profile__edit-button');
let popupOpened = document.querySelector('.popup');

function openPopup(){
   
    popupOpened.classList.add('popup_opened');

}

profileEditButton.addEventListener('click', openPopup);
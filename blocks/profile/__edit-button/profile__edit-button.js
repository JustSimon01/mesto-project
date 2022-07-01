let profileEditButton = document.querySelector('.profile__edit-button');


function openPopup(){
    let popupOpened = document.querySelector('#profileEdit').closest('.popup');
    popupOpened.classList.add('popup_opened');

}

profileEditButton.addEventListener('click', openPopup);
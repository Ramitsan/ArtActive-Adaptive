'use strict';
// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });

//Показ и закрытие модального окна
var headerCallButton = document.querySelector('.page-header__call-button'); //ссылка в хэдере
var modalRequestCall = document.querySelector('.request-call'); //модальное окно "Закажите звонок"
var modalCloseRequestCallButton = modalRequestCall.querySelector('.modal-close'); //кнопка закрытия
var modalOverlay = document.querySelector('.modal-overlay');


var modalRequestCallShow = function() {
    modalRequestCall.classList.add('modal--show');
};

var modalRequestCallClose = function() {
    modalRequestCall.classList.remove('modal--show');
};

var modalOverlayShow = function() {
    modalOverlay.classList.add('modal--show');
};

var modalOverlayClose = function() {
    modalOverlay.classList.remove('modal--show');
};

headerCallButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalRequestCallShow();
    modalOverlayShow();
});

modalCloseRequestCallButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalRequestCallClose();
    modalOverlayClose();
})

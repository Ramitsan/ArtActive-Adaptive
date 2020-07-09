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
var bannersPrintConsultationLink = document.querySelector('.banners-print__consultation-link'); //кнопка заказа консультации в блоке Услуги - Широкоформатная печать
var modalCloseRequestCallButton = modalRequestCall.querySelector('.modal-close'); //кнопка закрытия
var modalOverlay = document.querySelector('.modal-overlay');
var ESC_KEYCODE = 27;


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

var disableScroll = function() {
    document.body.classList.add('body-scroll');
}

var activateScroll = function() {
    document.body.classList.remove('body-scroll');
}

var overlayClickHandler = function(popup) {
    modalOverlay.addEventListener('click', function() {
        popup.classList.remove('modal--show');
        modalOverlayClose();
        activateScroll();
    })
}

overlayClickHandler(modalRequestCall);


headerCallButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalRequestCallShow();
    modalOverlayShow();
    disableScroll();
});

modalCloseRequestCallButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalRequestCallClose();
    modalOverlayClose();
    activateScroll();
})

bannersPrintConsultationLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    modalRequestCallShow();
    modalOverlayShow();
    disableScroll();
})

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        if (modalRequestCall.classList.contains('modal--show')) {
            evt.preventDefault();
            modalRequestCallClose();
            modalOverlayClose();
            activateScroll();
        }
    }
});

//валидация телефонного номера
jQuery(function($) {
    $("#poligraphy-form__user-tel").mask("+7 (999) 99 99 99");
    $("#faq-consultation__user-tel").mask("+7 (999) 99 99 99");
    $("#request-call__user-tel").mask("+7 (999) 99 99 99");
});

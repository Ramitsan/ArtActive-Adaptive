'use strict';


//Показ и закрытие модального окна
var mainNavCallButton = document.querySelector('.main-nav__call-button'); //ссылка в хэдере
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


mainNavCallButton.addEventListener('click', function(evt) {
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

//кнопка прокрутки
var upButton = document.querySelector('.btn--up');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 650) {
    upButton.classList.add('modal--show');
  } else {
    upButton.classList.remove('modal--show');
  }
});

upButton.addEventListener('click', function() {
  window.scrollTo(0, 0);
});

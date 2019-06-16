var feedbackFormOpen = document.querySelector(".contact-button");
var feedbackPopup = document.querySelector(".feedback-modal");
var closeFeedback = document.querySelector(".feedback-button-close");
var feedbackForm = feedbackPopup.querySelector(".feedback-form");
var userName = feedbackPopup.querySelector(".modal-user-name");
var userEmail = feedbackPopup.querySelector(".user-email");
var message = feedbackPopup.querySelector(".user-message");

var mapOpen = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-map");
var closeMap = document.querySelector(".map-close");

var addToCart = document.querySelectorAll(".add-to-cart");
var infoPopup = document.querySelector(".info-popup");
var closeInfo = document.querySelector(".info-button-close");

var delivery = document.querySelector(".delivery-slide");
var guarantee = document.querySelector(".guarantee-slide");
var credit = document.querySelector(".credit-slide");
var deliveryOn = document.querySelector(".delivery-btn");
var guaranteeOn = document.querySelector(".guarantee-btn")
var creditOn = document.querySelector(".credit-btn")



feedbackFormOpen.addEventListener("click", function (evt) {
  evt.preventDefault ();
  console.log("клик");
  feedbackPopup.classList.add("modal-show");
  userName.focus();
  });
closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault ();
  feedbackPopup.classList.remove("modal-show");
  feedbackPopup.classList.remove("modal-error");
});
feedbackForm.addEventListener("submit", function (evt) {
  if (!userName.value || !userEmail.value || !message.value) {
    evt.preventDefault();
    console.log ("введите все");
    feedbackPopup.classList.add("modal-error");
  }});
mapOpen.addEventListener("click", function (evt) {
  evt.preventDefault ();
  console.log("клик");
  mapPopup.classList.add("modal-show");
});
closeMap.addEventListener("click", function (evt) {
  evt.preventDefault ();
  mapPopup.classList.remove("modal-show");
});
addToCart.forEach(function(button) {
  button.addEventListener("click", function (evt) {
  evt.preventDefault ();
  console.log("клик");
  infoPopup.classList.add("modal-show");
  });
})
closeInfo.addEventListener("click", function (evt) {
  evt.preventDefault ();
  infoPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      evt.preventDefault ();
      feedbackPopup.classList.remove("modal-show");
      feedbackPopup.classList.remove("modal-error");
    };
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault ();
      mapPopup.classList.remove("modal-show");
    };
    if (infoPopup.classList.contains("modal-show")) {
      evt.preventDefault ();
      infoPopup.classList.remove("modal-show");
    }
  }
})
deliveryOn.addEventListener("click", function (evt) {
  evt.preventDefault ();
  if (delivery.classList.contains("slide-show")) {}
  else {
    delivery.classList.add("slide-show");
    guarantee.classList.remove("slide-show");
    credit.classList.remove("slide-show");
    deliveryOn.classList.add("service-item-current");
    guaranteeOn.classList.remove("service-item-current");
    creditOn.classList.remove("service-item-current");
}});
guaranteeOn.addEventListener("click", function (evt) {
  evt.preventDefault ();
  if (guarantee.classList.contains("slide-show")) {}
  else {
    guarantee.classList.add("slide-show");
    delivery.classList.remove("slide-show");
    credit.classList.remove("slide-show");
    guaranteeOn.classList.add("service-item-current");
    deliveryOn.classList.remove("service-item-current");
    creditOn.classList.remove("service-item-current");
}});
creditOn.addEventListener("click", function (evt) {
  evt.preventDefault ();
  if (credit.classList.contains("slide-show")) {}
  else {
    credit.classList.add("slide-show");
    delivery.classList.remove("slide-show");
    guarantee.classList.remove("slide-show");
    creditOn.classList.add("service-item-current");
    deliveryOn.classList.remove("service-item-current");
    guaranteeOn.classList.remove("service-item-current");
}});

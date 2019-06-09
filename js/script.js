var contactFormOpen = document.querySelector(".contact-button");
var feedbackPopup = document.querySelector(".feedback-modal");
var closeFeedback = document.querySelector(".feedback-button-close");
var userName = feedbackPopup.querySelector("[name=name]");
contactFormOpen.addEventListener("click", function (evt) {
  evt.preventDefault ();
  console.log("клик");
  feedbackPopup.classList.add("modal-show");
  userName.focus();
});
closeFeedback.addEventListener("click", function (evt) {
  evt.preventDefault ();
  feedbackPopup.classList.remove("modal-show");
})

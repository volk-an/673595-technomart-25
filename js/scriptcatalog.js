var addToCart = document.querySelector(".add-to-cart");
var infoPopup = document.querySelector(".info-popup");
var closeInfo = document.querySelector(".info-button-close");


addToCart.addEventListener("click", function (evt) {
  evt.preventDefault ();
  console.log("клик");
  infoPopup.classList.add("modal-show");
});
closeInfo.addEventListener("click", function (evt) {
  evt.preventDefault ();
  infoPopup.classList.remove("modal-show");
});
window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (infoPopup.classList.contains("modal-show")) {
      evt.preventDefault ();
      infoPopup.classList.remove("modal-show");
    }
  }
})

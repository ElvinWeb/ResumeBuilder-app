let watchBtn = document.getElementById("watch-btn");
let videoContainer = document.querySelector(".modal-container");
let closeBtn = document.querySelector(".modal-close");

watchBtn.addEventListener("click", function () {
  videoContainer.classList.add("show");
});
videoContainer.addEventListener("click", function () {
  videoContainer.classList.remove("show");
});
closeBtn.addEventListener("click", function () {
  videoContainer.classList.remove("show");
});

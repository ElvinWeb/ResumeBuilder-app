let watchBtn = document.getElementById("watch-btn");
let videoContainer = document.querySelector(".modal-container");
let closeBtn = document.querySelector(".modal-close");
let navbar = document.querySelector(".navbar");

watchBtn.addEventListener("click", () => {
  videoContainer.classList.add("show");
});
videoContainer.addEventListener("click", () => {
  videoContainer.classList.remove("show");
});
closeBtn.addEventListener("click", () => {
  videoContainer.classList.remove("show");
});

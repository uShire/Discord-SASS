const toggleBtn = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");
const dim = document.querySelector(".dim");
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
  headerNav.classList.toggle("open");
  dim.classList.toggle("open");
});

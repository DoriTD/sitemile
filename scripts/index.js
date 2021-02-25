document.querySelector(".burger-menu").addEventListener("click", () => {
  document.querySelector("body").classList.add("menu-open");
  setTimeout(() => {
    document.querySelector("body").classList.add("menu-show");
  }, 100);
});

document.querySelector(".menu-wrapper").addEventListener("click", () => {
  document.querySelector("body").classList.remove("menu-show");
  setTimeout(() => {
    document.querySelector("body").classList.remove("menu-open");
  }, 500);
});

document.querySelector(".menu-wrapper .menu").addEventListener("click", (e) => {
  e.stopPropagation();
});

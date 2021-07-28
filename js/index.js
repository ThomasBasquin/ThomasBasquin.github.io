/* ======================== Const ======================== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLink = document.querySelectorAll(".nav_link");
/* ======================== Menu Show ======================== */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}

/* ======================== Menu Close ======================== */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
}

function closeOnClick() {
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", closeOnClick));

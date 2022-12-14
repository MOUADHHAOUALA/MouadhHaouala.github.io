"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const section2 = document.querySelector("#section-2");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hide");
  overlay.classList.remove("hide");
};

const closeModal = function () {
  modal.classList.add("hide");
  overlay.classList.add("hide");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));
/*
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
  */

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hide")) {
    closeModal();
  }
});

document
  .querySelector(".navigation__list")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("navigation__link")) {
      const id = e.target.getAttribute("href");

      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }
  });

const btnScrollTo = document.querySelector(".btn--scroll-to");
const section3 = document.querySelector("#section-3");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section3.getBoundingClientRect();
  console.log(s1coords);

  /* window.scrollTo(
      s1coords.left + window.pageXOffset,
      s1coords.top + window.pageYOffset
    );
    
    window.scrollTo({
      left: s1coords.left + window.pageXOffset,
      top: s1coords.top + window.pageYOffset,
      behavior: 'smooth',
    });
    */

  section3.scrollIntoView({ behavior: "smooth" });
});

const initcords = section2.getBoundingClientRect();

window.addEventListener("scroll", function () {
  if (window.scrollY > initcords.top) navigation.classList.add("sticky");
  else navigation.classList.remove("sticky");
});

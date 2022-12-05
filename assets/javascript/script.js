"use strict";



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
const section1 = document.querySelector("#section-3-1");

btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
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

  section1.scrollIntoView({ behavior: "smooth" });
});

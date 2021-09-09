"use strict";

// VARIABLES :
const header = document.querySelector("header");
const navbar = document.getElementById("nav-bar");
const navbarHeight = navbar.getBoundingClientRect().height;

const checkSize = function () {
  navbar.classList.remove("sticky");

  if (window.innerWidth < 700) {
    console.log("small");
    const stickyNav = function (entries) {
      const [entry] = entries;

      if (!entry.isIntersecting) navbar.classList.add("sticky");
      else navbar.classList.remove("sticky");
    };

    const navbarObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navbarHeight}px`,
    });

    navbarObserver.observe(header);
  } else if (window.innerWidth >= 700) {
    navbar.classList.remove("sticky");
  }
};

checkSize();
window.addEventListener("resize", checkSize);

"use strict";

// VARIABLES :
const header = document.querySelector("header");
const navbar = document.getElementById("nav-bar");
const navbarHeight = navbar.getBoundingClientRect().height;

// FUNCTION :
const stickyNav = function (entries) {
  console.log(entries);

  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");

  console.log(navbar.classList);
};

// NAVBAR OBSERVER DEFINED
const navbarObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navbarHeight}px`,
});

// CALL NAVBAR OBSERVER :
navbarObserver.observe(header);

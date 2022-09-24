"use strict";

/////////////////////////////////////////////////////////////
// Elements
/////////////////////////////////////////////////////////////

const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");

/////////////////////////////////////////////////////////////
// Navbar sticky
/////////////////////////////////////////////////////////////

const navHeight = nav.getBoundingClientRect().height;

function sticky(entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
}

const navObserver = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

navObserver.observe(header);

/////////////////////////////////////////////////////////////
// Link active
/////////////////////////////////////////////////////////////

links.forEach((link) =>
  link.addEventListener("click", (e) => {
    const link = e.target;
    const siblings = link.closest(".links").querySelectorAll(".link");

    siblings.forEach((sibling) => {
      sibling === link
        ? (sibling.style.color = "turquoise")
        : (sibling.style.color = "#444");
    });
  })
);

/////////////////////////////////////////////////////////////
// Link toggle
/////////////////////////////////////////////////////////////

function apearMobileNav() {
  toggleBtn.classList.add("toggle-close");
  linksContainer.classList.add("links-open");
  linksContainer.style.animation = "mobileNavAppear 0.3s 1";
  document.querySelector("html").style.overflowY = "hidden";
}

function disapearMobileNav() {
  toggleBtn.classList.remove("toggle-close");
  linksContainer.style.animation = "mobileNavDisappear 0.35s 1";
  setTimeout(() => linksContainer.classList.remove("links-open"), 300);
  document.querySelector("html").style.overflowY = "visible";
}

toggleBtn.addEventListener("click", () =>
  toggleBtn.classList.contains("toggle-close")
    ? disapearMobileNav()
    : apearMobileNav()
);

linksContainer.addEventListener(
  "click",
  () => linksContainer.classList.contains("links-open") && disapearMobileNav()
);

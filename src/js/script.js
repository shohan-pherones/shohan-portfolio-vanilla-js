import Typewriter from "typewriter-effect/dist/core";
import TagCloud from "TagCloud";
import "core-js/stable";
import * as projects from "../../projects.json";

// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const projectsContainer = document.querySelector(".projects");

// Navbar sticky
const navHeight = nav.getBoundingClientRect().height;

function sticky(entries) {
  const entry = entries[0];
  if (!entry.isIntersecting) header.classList.add("sticky");
  else header.classList.remove("sticky");
}

const navObserver = new IntersectionObserver(sticky, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

navObserver.observe(header);

// Link active
links.forEach((link) =>
  link.addEventListener("click", (e) => {
    const link = e.target;
    const siblings = link.closest(".links").querySelectorAll(".link");

    siblings.forEach((sibling) => {
      sibling === link
        ? (sibling.style.color = "rgb(20, 184, 166)")
        : (sibling.style.color = "rgb(209, 213, 219)");
    });
  })
);

// Link toggle
function apearMobileNav() {
  toggleBtn.classList.add("toggle-close");
  linksContainer.classList.add("links-open");
  linksContainer.style.animation = "mobileNavAppear 0.3s 1";
  document.querySelector("html").style.overflow = "hidden";
}

function disapearMobileNav() {
  toggleBtn.classList.remove("toggle-close");
  linksContainer.style.animation = "mobileNavDisappear 0.35s 1";
  setTimeout(() => linksContainer.classList.remove("links-open"), 300);
  document.querySelector("html").style.overflow = "visible";
}

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.contains("toggle-close")
    ? disapearMobileNav()
    : apearMobileNav();
});

linksContainer.addEventListener("click", () => {
  if (linksContainer.classList.contains("links-open")) disapearMobileNav();
});

// Tag cloud
const myTags = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Netlify",
  "JavaScript (ES6+)",
  "AJAX",
  "Fetch API",
  "NPM",
  "Parcel",
  "Flowbite",
  "Daisy UI",
  "Vercel",
];

const tagCloud = TagCloud(".content", myTags, {
  radius: 375,
  maxSpeed: "fast",
  initSpeed: "normal",
  direction: 135,
  keep: true,
});

// Typewriter effect
const typeWriter = new Typewriter(app, {
  loop: true,
});

typeWriter
  .pauseFor(1500)
  .typeString("I am a web developer.")
  .pauseFor(3000)
  .deleteChars(19)
  .typeString("build amazing things for the web.")
  .pauseFor(3000)
  .deleteChars(33)
  .typeString("can also design creative & unique websites.")
  .pauseFor(3000)
  .start();

// Projects
function displayProjects(projects) {
  projects.forEach((project) => {
    const html = `
        <div class="project">
          <div class="project-img">
            <img
              src="${project.image}"
              alt="Photo of ${project.title}"
            />
          </div>
          <h3 class="project-title">
          ${project.title}
          </h3>
          <p class="project-details">
            ${project.description}
          </p>
          <p class="project-tools">
            Tools: <span>${project.tools}</span>
          </p>
          <div class="project-btns">
            <a href="${project.liveLink}" target="_blank"
              >Live Site &rarr;</a
            >
            <a
              href="${project.githubLink}"
              target="_blank"
              >GitHub &rarr;</a
            >
          </div>
        </div>
    `;

    projectsContainer.insertAdjacentHTML("afterbegin", html);
  });
}

displayProjects(projects);

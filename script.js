"use strict";

/////////////////////////////////////////////////////////////
// Elements
/////////////////////////////////////////////////////////////
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const allSections = document.querySelectorAll(".section");
const projectsContainer = document.querySelector(".projects");

/////////////////////////////////////////////////////////////
// Navbar sticky
/////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////
// Tag cloud
/////////////////////////////////////////////////////////////
const myTags = [
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Netlify",
  "JavaScript",
  "React.js",
  "Next.js",
  "React Native",
  "Redux",
  "Material UI",
  "React Bootstrap",
  "Sanity.io",
  "Node.js",
  "NPM",
  "Express.js",
  "MySQL",
  "MongoDB",
  "Mongoose",
  "Python",
  "C",
  "C++",
  "C#",
  "jQuery",
  "Vue.js",
  "Sass",
  "AJAX",
  "Axios",
  "Fetch API",
];

const tagCloud = TagCloud(".content", myTags, {
  radius: 375,
  maxSpeed: "fast",
  initSpeed: "normal",
  direction: 135,
  keep: true,
});

/////////////////////////////////////////////////////////////
// Typewriter effect
/////////////////////////////////////////////////////////////
const typeWriter = new Typewriter(app, {
  loop: true,
});

typeWriter
  .pauseFor(2000)
  .typeString("I am a web developer.")
  .pauseFor(3000)
  .deleteChars(19)
  .typeString("build amazing things for the web.")
  .pauseFor(3000)
  .deleteChars(33)
  .typeString("can also design creative & unique websites.")
  .pauseFor(3000)
  .start();

/////////////////////////////////////////////////////////////
// Reveal sections
/////////////////////////////////////////////////////////////
function revealSection(entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.3,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

/////////////////////////////////////////////////////////////
// Projects
/////////////////////////////////////////////////////////////
const allProjects = [
  {
    title: "Spectra Bank - An online bank application",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Dignissimos tempora facere et eos commodi veniam perspiciatis iure
    maxime natus facilis sunt, quas suscipit odio odit, fugit tempore
    autem, nemo quaerat.`,
    image: "./images/spectra-bank.png",
    tools: "html, css, js",
    liveLink: "https://spectra-bank.netlify.app",
    githubLink: "https://github.com/shohan-pherones/spectra-bank",
  },
  {
    title: "Tera Guard - An anti-virus website",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Dignissimos tempora facere et eos commodi veniam perspiciatis iure
    maxime natus facilis sunt, quas suscipit odio odit, fugit tempore
    autem, nemo quaerat.`,
    image: "./images/tera-guard.png",
    tools: "html, css, js",
    liveLink: "https://tera-guard.netlify.app",
    githubLink: "https://github.com/shohan-pherones/tera-guard",
  },
  {
    title: "Map - Pro: A workout mapping application",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    Dignissimos tempora facere et eos commodi veniam perspiciatis iure
    maxime natus facilis sunt, quas suscipit odio odit, fugit tempore
    autem, nemo quaerat.`,
    image: "./images/map-pro.png",
    tools: "html, css, js, leaflet.js",
    liveLink: "https://map-pro-shohan.netlify.app",
    githubLink: "https://github.com/shohan-pherones/map-pro",
  },
];

function displayProjects(projects) {
  projects.forEach((project) => {
    const html = `
        <div class="project">
          <div class="project-img">
            <img
              src="${project.image}"
              alt="${project.title}"
            />
          </div>
          <h3 class="project-title">
          ${project.title}
          </h3>
          <p class="project-details">
            ${project.description}
          </p>
          <p class="project-tools">
            <span>${project.tools}</span>
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
displayProjects(allProjects);

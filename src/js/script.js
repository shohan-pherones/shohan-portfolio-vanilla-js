import Typewriter from "typewriter-effect/dist/core";
import TagCloud from "TagCloud";
import * as projects from "../../projects.json";
import "core-js/stable";

// Elements
const header = document.querySelector("header");
const nav = document.querySelector(".navbar");
const linksContainer = document.querySelector(".links");
const links = document.querySelectorAll(".link");
const toggleBtn = document.querySelector(".toggle");
const app = document.getElementById("app");
const allSections = document.querySelectorAll(".section");
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
        ? (sibling.style.color = "turquoise")
        : (sibling.style.color = "#444");
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

// Typewriter effect
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

// Reveal sections
function revealSection(entries, observer) {
  const entry = entries[0];
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

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

// Particles
var MAX_PARTICLES = 1000,
  RADIUS = 100,
  MAX_LINES = 5,
  MAX_LIFE_SPAN = 600,
  MIN_DENSITY = 15,
  OFFSET_DENSITY = 15,
  _context,
  _mouseX,
  _mouseY,
  _particles,
  _canvasWidth,
  _canvasHalfWidth,
  _canvasHeight,
  _canvasHalfHeight;

init();

function init() {
  _particles = [];
  _context = c.getContext("2d");

  window.addEventListener("resize", onResize);
  window.addEventListener("mousemove", onMouseMove);

  onResize();

  createInitialParticles();

  redraw();
}

function createInitialParticles() {
  var x;

  for (x = 50; x < _canvasWidth - 50; x += 25) {
    _particles.push(
      new Particle(x - _canvasHalfWidth, -75 + Math.random() * 100)
    );
  }
}

function onMouseMove(e) {
  _mouseX = e.pageX;
  _mouseY = e.pageY;
}

function onResize() {
  _canvasWidth = c.offsetWidth;
  _canvasHalfWidth = Math.round(_canvasWidth / 2);
  (_canvasHeight = c.offsetHeight),
    (_canvasHalfHeight = Math.round(_canvasHeight / 2));

  c.width = _canvasWidth;
  c.height = _canvasHeight;
}

function redraw() {
  var copyParticles = _particles.slice(),
    particle,
    i;

  if (_particles.length < MAX_PARTICLES && _mouseX && _mouseY) {
    particle = new Particle(
      _mouseX - _canvasHalfWidth,
      _mouseY - _canvasHalfHeight
    );

    _particles.push(particle);
    _mouseX = false;
    _mouseY = false;
  }

  _context.clearRect(0, 0, _canvasWidth, _canvasHeight);

  for (i = 0; i < copyParticles.length; i++) {
    particle = copyParticles[i];
    particle.update();
  }

  drawLines();

  requestAnimationFrame(redraw);
}

function drawLines() {
  var particleA, particleB, distance, opacity, lines, i, j;

  _context.beginPath();

  for (i = 0; i < _particles.length; i++) {
    lines = 0;
    particleA = _particles[i];

    for (j = i + 1; j < _particles.length; j++) {
      particleB = _particles[j];
      distance = getDistance(particleA, particleB);

      if (distance < RADIUS) {
        lines++;

        if (lines <= MAX_LINES) {
          opacity =
            0.5 *
            Math.min(
              1 - distance / RADIUS,
              particleA.getOpacity(),
              particleB.getOpacity()
            );
          _context.beginPath();
          _context.moveTo(
            particleA.getX() + _canvasHalfWidth,
            particleA.getY() + _canvasHalfHeight
          );
          _context.lineTo(
            particleB.getX() + _canvasHalfWidth,
            particleB.getY() + _canvasHalfHeight
          );
          _context.strokeStyle = "rgba(200, 200, 200," + opacity + ")";
          _context.stroke();
        }
      }
    }
  }
}

function Particle(originX, originY) {
  var _this = this,
    _direction = -1 + Math.round(Math.random()) * 2,
    _angle = Math.random() * 10,
    _posX = originX,
    _posY = originY,
    _density = MIN_DENSITY + Math.random() * OFFSET_DENSITY,
    _lifeSpan = 0,
    _opacity = 1;

  function update() {
    _lifeSpan++;

    if (_lifeSpan % 3 === 0) {
      _opacity = 1 - _lifeSpan / MAX_LIFE_SPAN;

      _angle += 0.001 * _direction;
      _posY += (Math.cos(_angle + _density) + 1) * 0.75;
      _posX += Math.sin(_angle) * 0.75;

      if (_lifeSpan >= MAX_LIFE_SPAN) {
        destroy();
      }
    }
  }

  function destroy() {
    var particle, i;

    for (i = 0; i < _particles.length; i++) {
      particle = _particles[i];

      if (particle === _this) {
        _particles.splice(i, 1);
      }
    }
  }

  this.getOpacity = function () {
    return _opacity;
  };

  this.getX = function () {
    return _posX;
  };

  this.getY = function () {
    return _posY;
  };

  this.update = update;
}

function getDistance(particle1, particle2) {
  var deltaX = particle1.getX() - particle2.getX(),
    deltaY = particle1.getY() - particle2.getY();

  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

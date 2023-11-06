// setInterval(upDatetime, 1000);

// function upDatetime() {
//   time.innerHTML = new Date();
// }

const toggle = document.getElementById("sun");
const body = document.querySelector("body");
const header = document.querySelector("header");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const box = document.querySelector(".portfolio-box");
const footer = document.querySelector("footer");

toggle.addEventListener("click", function () {
  this.classList.toggle("fa-moon");
  if (this.classList.toggle("fa-sun")) {
    body.style.background = "#1f242d";
    body.style.color = "#ffff";
    body.style.transition = "2s";
    header.style.background = "#1f242d";
    header.style.transition = "2s";
    about.style.background = "#1f242d";
    about.style.transition = "2s";
    portfolio.style.background = "#1f242d";
    portfolio.style.transition = "2s";
    box.style.background = "#1f242d";
    box.style.transition = "2s";
    footer.style.background = "#1f242d";
    footer.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "#fff";
    body.style.transition = "2s";
    header.style.background = "black";
    header.style.transition = "2s";
    about.style.background = "black";
    about.style.transition = "2s";
    portfolio.style.background = "black";
    portfolio.style.transition = "2s";
    box.style.background = "black";
    box.style.transition = "2s";
    footer.style.background = "black";
    footer.style.transition = "2s";
  }
});

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

const typed = new Typed(".multiple-text", {
  strings: ["Frontend Engineer", "Gamer", "Blogger"],
  shuffle: true,
  cursorChar: ".",
  startDelay: 2000,
  typeSpeed: 130,
  backSpeed: 130,
  backDelay: 2000,
  loop: false,
});

const btn = document.getElementById("btn");

let index = 0;

const colors = ["#052b2f", "#1f242d", "#0ef", "#2d8f85"];

btn.addEventListener("click", function onClick() {
  // btn.style.backgroundColor = colors[index];
  btn.style.color = "red";

  index = index >= colors.length - 1 ? 0 : index + 1;
});

// setInterval(upDatetime, 1000);

// function upDatetime() {
//   time.innerHTML = new Date();
// }

alert("Welcome To M_O_K dorm");
var name = prompt("what is your name");
var firstchar = name.slice(0, 1);
var uppercasefirstchar = firstchar.toUpperCase();
var restofname = name.slice(1, name.length);
restofname = restofname.toLowerCase();
var capitalisedname = uppercasefirstchar + restofname;
alert(
  "How Far, " + capitalisedname + " " + "Welcome" + " Have a great adventure"
);

const toggle = document.getElementById("sun");
const body = document.querySelector("body");
const header = document.querySelector(".header");
const home = document.querySelector(".home-content");
const about = document.querySelector(".about");
const portfolio = document.querySelector(".portfolio");
const box = document.querySelector(".portfolio-box");
const footer = document.querySelector("footer");
const logo = document.querySelector(".logo");
const services = document.querySelector(".services-box");

toggle.addEventListener("click", function () {
  this.classList.toggle("fa-moon");
  if (this.classList.toggle("fa-sun")) {
    body.style.background = "#ffff";
    body.style.color = "black";
    body.style.transition = "2s";
    logo.style.color = "#000";
    header.style.background = "#ffff";
    // header.style.color = "#000";
    header.style.transition = "2s";
    home.style.color = "#000";
    home.style.transition = "2s";
    about.style.background = "#ffff";
    about.style.transition = "2s";
    portfolio.style.background = "#ffff";
    portfolio.style.transition = "2s";
    services.style.background = "#ffff";
    services.style.transition = "2s";
    services.style.color = "#000";
    box.style.background = "#ffff";
    box.style.transition = "2s";
    navbar.style.background = "#fff";
    navbar.style.color = "#00000";
    footer.style.background = "#ffff";
    footer.style.transition = "2s";
  } else {
    body.style.background = "black";
    body.style.color = "#fff";
    body.style.transition = "2s";
    header.style.background = "black";
    header.style.color = "#fff";
    header.style.transition = "2s";
    home.style.color = "#fff";
    logo.style.color = "#fff";
    about.style.background = "black";
    about.style.transition = "2s";
    portfolio.style.background = "black";
    portfolio.style.transition = "2s";
    services.style.background = "black";
    services.style.transition = "2s";
    services.style.color = "#fff";
    box.style.background = "black";
    box.style.transition = "2s";
    navbar.style.background = "#000";
    navbar.style.color = "#fff";
    navbar.style.transition = "2s";
    footer.style.background = "#000";
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

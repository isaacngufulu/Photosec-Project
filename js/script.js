console.log("fuck you");

// current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// mobile nav

const btnEl = document.querySelector(".btn-nav");
const headerEl = document.querySelector(".header");
btnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// SMOOTH ANIMATION

const all = document.querySelectorAll("a:link");
all.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Update Year

const theYear = document.querySelector(".year");
let currentYear = new Date().getFullYear();
theYear.textContent = currentYear;

// * -----------------------------------
// * Enable mobile Navigation
// * -----------------------------------
const btn_mov_nav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

// Add listener
btn_mov_nav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// * -----------------------------------
// * Smooth Scrolling on Safari
// ? https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
// * -----------------------------------
const allLinks = document.querySelectorAll("a:link");

// Add listener for each of the nodes with a:link
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    console.log(e);
    // Read href attribute
    const href = link.getAttribute("href");

    // Scrll Home
    if (href == "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    // Scroll Other Link
    if (href != "#" && href.startsWith("#")) {
      const sectionEle = document.querySelector(href);
      sectionEle.scrollIntoView({
        behavior: "smooth",
      });
    }
    // Close Mobile Navigation
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

// * -----------------------------------
// * Sticky Bar
// * -----------------------------------

const sectionHeroEle = document.querySelector(".section-hero");
// Observer
const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },

  {
    // Conditions to find the intersection on the Viewport of hero and header
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEle);

// Get the menu button and the navigation menu.
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

// Open and close the mobile menu when the button is clicked.
menuToggle.addEventListener("click", function () {
  const menuIsOpen = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", !menuIsOpen);
  navMenu.classList.toggle("is-open");
});

// Close the menu after clicking any navigation link.
const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// Close the menu if the user clicks outside it.
document.addEventListener("click", function (event) {
  const clickedInsideMenu = navMenu.contains(event.target);
  const clickedMenuButton = menuToggle.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuButton) {
    navMenu.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

// Show page sections smoothly when they enter the screen.
document.body.classList.add("js-enabled");

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });
} else {
  // Fallback for older browsers.
  revealElements.forEach(function (element) {
    element.classList.add("is-visible");
  });
}

// Show the "Back to top" button after scrolling down.
const backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 450) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// Scroll to the top when the button is clicked.
backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Update the year automatically.
document.querySelector("#year").textContent = new Date().getFullYear();

(function () {
  "use strict";

  // ======= Sticky
  // Elements
  const ud_header = document.querySelector(".header");
  const backToTop = document.querySelector(".back-to-top");

  // Initial offset calculation
  let sticky = ud_header ? ud_header.offsetTop : 0;

  // Update sticky offset on resize to be safe
  window.addEventListener("resize", () => {
    if (ud_header && !ud_header.classList.contains("sticky")) {
      sticky = ud_header.offsetTop;
    }
  });

  // ======= Sticky & Back-to-Top
  window.onscroll = function () {
    // Sticky Header
    if (ud_header) {
      if (window.scrollY > sticky) {
        ud_header.classList.add("sticky");
      } else {
        ud_header.classList.remove("sticky");
      }
    }

    // Back to Top
    if (backToTop) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    }
  };

  // ===== Responsive Navbar
  let navbarToggler = document.querySelector("#navbarToggler");
  const navbarCollapse = document.querySelector("#navbarCollapse");

  if (navbarToggler) {
    navbarToggler.addEventListener("click", () => {
      navbarToggler.classList.toggle("navbarTogglerActive");
      navbarCollapse.classList.toggle("hidden");
      navbarCollapse.classList.toggle("invisible");
    });
  }

  // ===== Close Navbar-Menu
  document.querySelectorAll("#navbarCollapse ul li a").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("navbarTogglerActive");
      navbarCollapse.classList.add("hidden");
    }),
  );

  // ===== Theme Toggler
  const themeToggler = document.querySelector('[aria-label="theme toggler"]');
  const html = document.documentElement;

  if (themeToggler) {
    themeToggler.addEventListener("click", () => {
      if (html.classList.contains("dark")) {
        html.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        html.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    });
  }

  // Set initial theme
  const savedTheme = localStorage.getItem("theme");
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  // ====== Scroll Top
  function scrollTo(element, to = 0, duration = 1000) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;
      const val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top")?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
})();

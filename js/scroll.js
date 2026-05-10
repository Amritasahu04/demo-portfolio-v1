const revealElements = document.querySelectorAll(
  ".reveal-section, .reveal-divider, .reveal-content"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.15
});

revealElements.forEach((el) => observer.observe(el));
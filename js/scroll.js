const revealElements = document.querySelectorAll(
    ".reveal-section, .reveal-divider, .reveal-content, .fade-in"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        } else {

            entry.target.classList.remove("show");

        }

    });

}, {
    threshold: 0.15
});

revealElements.forEach((el) => {
    observer.observe(el);
});
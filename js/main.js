const toggle = document.querySelector(".glass-toggle");

const thumb = document.querySelector(".toggle-thumb");
const labels = document.querySelectorAll(".toggle-label");

let isDark = true; // starts in dark mode

toggle.addEventListener("click", () => {

    isDark = !isDark;

    document.body.classList.toggle(
        "light-mode",
        !isDark
    );

    thumb.style.right =
        isDark ? "4px" : "82px";

    labels[0].classList.toggle(
        "active-theme",
        !isDark
    );

    labels[1].classList.toggle(
        "active-theme",
        isDark
    );
});
const toggle = document.querySelector(".glass-toggle");

const thumb = document.querySelector(".toggle-thumb");

const label = document.querySelector(".toggle-label");

let isDark = true; // starts in dark mode

toggle.addEventListener("click", () => {

    isDark = !isDark;

    /* THEME SWITCH */

    document.body.classList.toggle("light-mode", !isDark);

    /* THUMB MOVEMENT */

    thumb.style.left = isDark ? "3px" : "59px";

    /* LABEL TEXT */

    label.textContent = isDark ? "Dark" : "Light";

});